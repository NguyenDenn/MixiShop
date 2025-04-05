import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || '')
  } catch (error) {
    console.error('MongoDB connection error:', error)
    process.exit(1)
    // Failed to connect to the database, exit the process
  }
}
