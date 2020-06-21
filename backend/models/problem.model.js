const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const problemSchema = new Schema({
  number: { type: Number, required: true },
  title: { type: String, required: true },
  difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'] },
  topics: { type: [String] },
  notes: { type: String },
  date: { type: Date, required: true }
}, {
  timestamps: true,
});

const Problem = mongoose.model('Problem', problemSchema);

module.exports = Problem;