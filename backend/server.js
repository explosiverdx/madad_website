require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const twilio = require('twilio');

const { User, Booking, Payment, Post, Doctor } = require('./models');

const app = express();
const PORT = process.env.PORT || 5001;

// Twilio configuration - Replace with your actual credentials
const accountSid = process.env.TWILIO_ACCOUNT_SID || 'your_account_sid_here';
const authToken = process.env.TWILIO_AUTH_TOKEN || 'your_auth_token_here';
const verifyServiceSid = process.env.TWILIO_VERIFY_SERVICE_SID || 'your_verify_service_sid_here';
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER || 'your_twilio_phone_number_here';

let client = null;
if (accountSid && accountSid.startsWith('AC') && authToken && verifyServiceSid) {
  try {
    client = twilio(accountSid, authToken);
  } catch (error) {
    console.error('Failed to initialize Twilio client:', error.message);
  }
} else {
  console.log('Twilio credentials not configured. OTP will be logged to console for testing.');
}

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// In-memory storage for OTPs (keeping this as it's temporary)
const otps = {};

// API endpoint to send OTP
app.post('/api/send-otp', async (req, res) => {
  const { phone } = req.body;
  if (!phone || !/^\d{10}$/.test(phone)) {
    return res.status(400).json({ error: 'Valid 10-digit phone number is required.' });
  }

  if (client) {
    try {
      // Send OTP via Twilio Verify Service
      const verification = await client.verify.v2.services(verifyServiceSid)
        .verifications
        .create({ to: `+91${phone}`, channel: 'sms' });

      console.log(`OTP sent to ${phone} via Twilio Verify Service`);
      res.json({ message: 'OTP sent successfully to your phone.' });
    } catch (error) {
      console.error('Error sending OTP via Twilio Verify:', error);
      res.status(500).json({ error: 'Failed to send OTP. Please try again.' });
    }
  } else {
    // For testing without Twilio credentials
    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    // Store OTP with expiration (5 minutes)
    otps[phone] = { otp, expiresAt: Date.now() + 5 * 60 * 1000 };
    console.log(`OTP for ${phone}: ${otp}`);
    res.json({ message: 'OTP generated successfully. Check console for testing.' });
  }
});

// API endpoint to verify OTP
app.post('/api/verify-otp', async (req, res) => {
  const { phone, otp } = req.body;
  if (!phone || !otp) {
    return res.status(400).json({ error: 'Phone and OTP are required.' });
  }

  if (client) {
    try {
      // Verify OTP via Twilio Verify Service
      const verification_check = await client.verify.v2.services(verifyServiceSid)
        .verificationChecks
        .create({ to: `+91${phone}`, code: otp });

      if (verification_check.status === 'approved') {
        res.json({ message: 'OTP verified successfully.' });
      } else {
        res.status(400).json({ error: 'Invalid OTP.' });
      }
    } catch (error) {
      console.error('Error verifying OTP via Twilio Verify:', error);
      res.status(500).json({ error: 'Failed to verify OTP. Please try again.' });
    }
  } else {
    // Verify OTP from in-memory store
    const record = otps[phone];
    if (!record) {
      return res.status(400).json({ error: 'No OTP sent to this phone number.' });
    }

    if (Date.now() > record.expiresAt) {
      delete otps[phone];
      return res.status(400).json({ error: 'OTP expired. Please request a new one.' });
    }

    if (otp !== record.otp) {
      return res.status(400).json({ error: 'Invalid OTP.' });
    }

    // OTP verified, delete it
    delete otps[phone];

    res.json({ message: 'OTP verified successfully.' });
  }
});

// API endpoint to handle booking form submission
app.post('/api/book-appointment', async (req, res) => {
  try {
    const { name, email, phone, date, message } = req.body;

    // Basic validation
    if (!name || !email || !date) {
      return res.status(400).json({ error: 'Name, email, and date are required.' });
    }

    // Create new booking in database
    const booking = new Booking({
      name,
      email,
      phone,
      date: new Date(date),
      message
    });

    await booking.save();

    // Respond with success
    res.status(201).json({ message: 'Booking received successfully.', booking });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'Failed to create booking. Please try again.' });
  }
});

// Admin authentication middleware
const adminAuth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (token === 'admin-token-123') {
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

// Admin login
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;

  // Simple hardcoded credentials for demo
  if (username === 'admin' && password === 'admin123') {
    res.json({ token: 'admin-token-123', message: 'Login successful' });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

/* Admin dashboard data */
app.get('/api/admin/dashboard', adminAuth, async (req, res) => {
  try {
    const [totalBookings, recentBookings, totalUsers, totalPayments, totalPosts, totalDoctors] = await Promise.all([
      Booking.countDocuments(),
      Booking.find().sort({ createdAt: -1 }).limit(5),
      User.countDocuments(),
      Payment.countDocuments(),
      Post.countDocuments(),
      Doctor.countDocuments()
    ]);

    res.json({
      totalBookings,
      recentBookings,
      totalUsers,
      totalPayments,
      totalPosts,
      totalDoctors
    });
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    res.status(500).json({ error: 'Failed to fetch dashboard data' });
  }
});

/* Admin bookings management */
app.get('/api/admin/bookings', adminAuth, async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});

app.delete('/api/admin/bookings/:id', adminAuth, async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    res.json({ message: 'Booking deleted successfully' });
  } catch (error) {
    console.error('Error deleting booking:', error);
    res.status(500).json({ error: 'Failed to delete booking' });
  }
});

/* Admin users management */
app.get('/api/admin/users', adminAuth, async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

app.post('/api/admin/users', adminAuth, async (req, res) => {
  try {
    const user = new User({ ...req.body, createdAt: new Date() });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

app.put('/api/admin/users/:id', adminAuth, async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Failed to update user' });
  }
});

app.delete('/api/admin/users/:id', adminAuth, async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Failed to delete user' });
  }
});

/* Admin payments management */
app.get('/api/admin/payments', adminAuth, async (req, res) => {
  try {
    const payments = await Payment.find();
    res.json(payments);
  } catch (error) {
    console.error('Error fetching payments:', error);
    res.status(500).json({ error: 'Failed to fetch payments' });
  }
});

app.post('/api/admin/payments', adminAuth, async (req, res) => {
  try {
    const payment = new Payment({ ...req.body, createdAt: new Date() });
    await payment.save();
    res.status(201).json(payment);
  } catch (error) {
    console.error('Error creating payment:', error);
    res.status(500).json({ error: 'Failed to create payment' });
  }
});

app.put('/api/admin/payments/:id', adminAuth, async (req, res) => {
  try {
    const payment = await Payment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!payment) {
      return res.status(404).json({ error: 'Payment not found' });
    }
    res.json(payment);
  } catch (error) {
    console.error('Error updating payment:', error);
    res.status(500).json({ error: 'Failed to update payment' });
  }
});

app.delete('/api/admin/payments/:id', adminAuth, async (req, res) => {
  try {
    const payment = await Payment.findByIdAndDelete(req.params.id);
    if (!payment) {
      return res.status(404).json({ error: 'Payment not found' });
    }
    res.json({ message: 'Payment deleted successfully' });
  } catch (error) {
    console.error('Error deleting payment:', error);
    res.status(500).json({ error: 'Failed to delete payment' });
  }
});

/* Admin posts management */
app.get('/api/admin/posts', adminAuth, async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

app.post('/api/admin/posts', adminAuth, async (req, res) => {
  try {
    const post = new Post({ ...req.body, createdAt: new Date() });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'Failed to create post' });
  }
});

app.put('/api/admin/posts/:id', adminAuth, async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    console.error('Error updating post:', error);
    res.status(500).json({ error: 'Failed to update post' });
  }
});

app.delete('/api/admin/posts/:id', adminAuth, async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({ error: 'Failed to delete post' });
  }
});

/* Admin doctors management */
app.get('/api/admin/doctors', adminAuth, async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    console.error('Error fetching doctors:', error);
    res.status(500).json({ error: 'Failed to fetch doctors' });
  }
});

app.post('/api/admin/doctors', adminAuth, async (req, res) => {
  try {
    const doctor = new Doctor({ ...req.body, createdAt: new Date() });
    await doctor.save();
    res.status(201).json(doctor);
  } catch (error) {
    console.error('Error creating doctor:', error);
    res.status(500).json({ error: 'Failed to create doctor' });
  }
});

app.put('/api/admin/doctors/:id', adminAuth, async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!doctor) {
      return res.status(404).json({ error: 'Doctor not found' });
    }
    res.json(doctor);
  } catch (error) {
    console.error('Error updating doctor:', error);
    res.status(500).json({ error: 'Failed to update doctor' });
  }
});

app.delete('/api/admin/doctors/:id', adminAuth, async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndDelete(req.params.id);
    if (!doctor) {
      return res.status(404).json({ error: 'Doctor not found' });
    }
    res.json({ message: 'Doctor deleted successfully' });
  } catch (error) {
    console.error('Error deleting doctor:', error);
    res.status(500).json({ error: 'Failed to delete doctor' });
  }
});

// Public routes
app.get('/api/doctors', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    console.error('Error fetching doctors:', error);
    res.status(500).json({ error: 'Failed to fetch doctors' });
  }
});

app.get('/api/posts', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

module.exports = app;
