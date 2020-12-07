const express = require('express');

const router = express.Router();

const songsController = require('../controller/songsController');

router
  .route('/')
  .get(songsController.getAllSongs)
  .post(
    songsController.createSong
  );
router
  .route('/:id')
  .get(songsController.getSong)
  .patch(songsController.updateSong)
  .delete(songsController.deleteSong);

module.exports = router;
