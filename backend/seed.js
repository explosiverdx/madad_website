const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require('dotenv').config();

const { User, Booking, Payment, Post, Doctor } = require('./models');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/meditech';

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB for seeding');

    // Clear existing data
    await User.deleteMany({});
    await Booking.deleteMany({});
    await Payment.deleteMany({});
    await Post.deleteMany({});
    await Doctor.deleteMany({});

    // Create admin user
    const passwordHash = await bcrypt.hash('admin123', 10);
    const adminUser = new User({
      username: 'admin',
      passwordHash,
      role: 'admin',
      email: 'admin@example.com',
    });
    await adminUser.save();

    // Create sample doctors
    const doctors = [
      { name: 'Dr. John Smith', specialty: 'Cardiology', bio: 'Experienced cardiologist.' },
      { name: 'Dr. Jane Doe', specialty: 'Dermatology', bio: 'Skin specialist.' },
    ];
    await Doctor.insertMany(doctors);

    // Create sample posts
    const posts = [
      { title: 'Welcome to Meditech', content: 'This is our first blog post.', author: 'Admin' },
      { title: 'Health Tips', content: 'Stay hydrated and exercise regularly.', author: 'Admin' },
    ];
    await Post.insertMany(posts);

    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seed();
