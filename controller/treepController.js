const Treep = require('./../models/treepModel');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');

module.exports.getAllTreepItems = factory.getAll(Treep);
module.exports.getTreepItem = factory.getOne(Treep);
module.exports.createTreepItem = factory.createOne(Treep);
module.exports.updateTreepItem = factory.updateOne(Treep);
exports.deleteTreepItem = factory.deleteOne(Treep);