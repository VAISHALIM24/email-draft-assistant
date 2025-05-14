const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
  prompt: {
    type: String,
    required: true
  },
  emailDraft: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Email', emailSchema);
