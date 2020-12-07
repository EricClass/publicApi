const express = require('express');

const router = express.Router();

const treepController = require('../controller/treepController');


router
  .route('/')
  .get(treepController.getAllTreepItems)
  .post(
    treepController.createTreepItem
  );
router
  .route('/:id')
  .get(treepController.getTreepItem)
  .patch(treepController.updateTreepItem)
  .delete(treepController.deleteTreepItem);

module.exports = router;
