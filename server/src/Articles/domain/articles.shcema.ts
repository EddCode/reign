import * as mongoose from 'mongoose';

export const ArticleSchema = new mongoose.Schema({
  _id: String,
  title: String,
  story_title: String,
  author: String,
  url: String,
  story_url: String,
  created_at: { type: Date, default: Date.now },
});
