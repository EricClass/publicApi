const mongoose = require('mongoose');

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    contacts: {
      type: String,
    },
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

const Contacts = mongoose.model('Contact', contactSchema);

module.exports = Contacts;
