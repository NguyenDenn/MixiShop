import mongoose from 'mongoose'

const CategorySchme = new mongoose.Schema({
  name: String
})
export const CategoryModel = mongoose.model('categories', CategorySchme)
