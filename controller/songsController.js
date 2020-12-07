const Song = require('./../models/songsModel');
const AppError = require('./../utils/appError');
const factory = require('./handlerFactory');

module.exports.getAllSongs = factory.getAll(Song);
module.exports.getSong = factory.getOne(Song);
module.exports.createSong = factory.createOne(Song);
module.exports.updateSong = factory.updateOne(Song);
exports.deleteSong = factory.deleteOne(Song);
