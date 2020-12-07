const mongoose = require('mongoose');

const treepSchema = mongoose.Schema(
  {
    itemTitle: {
      type: String,
    },
    itemImage: {
      type: String,
    },
    description: {
        type: String,
    },
    tours: {
        type: String,
      },
    category: {
      type: String,
    }
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

const Treep = mongoose.model('Treep', treepSchema);

module.exports = Treep;
