const mongoose = require('mongoose');

const { Schema } = mongoose;

// User schema
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['admin', 'user'], default: 'user' },
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now }
});

// Booking schema
const bookingSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  date: { type: Date, required: true },
  message: { type: String },
  createdAt: { type: Date, default: Date.now }
});

// Payment schema
const paymentSchema = new Schema({
  bookingId: { type: Schema.Types.ObjectId, ref: 'Booking', required: true },
  amount: { type: Number, required: true },
  paymentDate: { type: Date, default: Date.now },
  status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' }
});

// Post schema (for blog or content)
const postSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String },
  author: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date }
});

// Doctor schema
const doctorSchema = new Schema({
  name: { type: String, required: true },
  specialty: { type: String },
  profileImage: { type: String },
  bio: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
const Booking = mongoose.model('Booking', bookingSchema);
const Payment = mongoose.model('Payment', paymentSchema);
const Post = mongoose.model('Post', postSchema);
const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = {
  User,
  Booking,
  Payment,
  Post,
  Doctor
};
