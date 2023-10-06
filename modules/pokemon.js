import mongoose from 'mongoose';

const pokemonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
    unique: true,
    trim: true,
  },
  author: {
    type: String,
    required: [true, 'author is required'],
  },
  image_url: {
    type: String,
    default: 'default.jpg',
  },
  tags: {
    type: [String],
    default: 'new',
  },
  publishedDate: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Pokemon', pokemonSchema);