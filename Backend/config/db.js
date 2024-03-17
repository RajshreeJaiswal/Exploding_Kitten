const mongoose = require('mongoose');
 require('dotenv').config();
const db = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log('MongoDB connected Successfully');
  } catch (err) {
    console.error(err.message);
    }
};

module.exports = connectDB;
