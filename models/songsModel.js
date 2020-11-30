const mongoose = require('mongoose');

const songSchema = mongoose.Schema(
  {
    songTitle: {
      type: String,
    },
    artist: {
      type: String,
    },
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

const Songs = mongoose.model('Song', songSchema);

module.exports = Songs;
