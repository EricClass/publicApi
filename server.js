const http = require('http');
const express = require('express');
const mongoose = require('mongoose');

const Contacts = require('./models/contactsModel');
const Songs = require('./models/songsModel');
const catchAsync = require('./utils/catchAsync');

const app = express();
app.use(express.json({ limit: '10kb' }));


// Get all songs endpoint
app.get('/api/v1/songs', async (req, res) => {
  try {
    const songs = await Songs.find();
    //console.log(contacts);
    res.status(200).json({
      status: 'success',
      data: {
        songs,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'something went wrong',
    });
  }
});


//Get song by id endpoint
app.get('/api/v1/songs:id', async (req, res) => {
  try {
    const songs = await Songs.findById(req.params.id);
  //console.log(contacts);
  res.status(200).json({
    status: 'success',
    data: {
      song,
    },
  });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'something went wrong',
    });
  }
});


// add song endpoint
app.post('/api/v1/songs', async (req, res, next) => {
  try {
    const songs = await Songs.create(req.body);
  //console.log(contacts);
  res.status(200).json({
    status: 'success',
    data: {
      songs,
    },
  });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'something went wrong',
    });
  }
});


// update song
app.patch('/api/v1/songs/:id', async (req, res, next) => {
  try {
    const doc = await Songs.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
  
    if (!doc) {
      return next(
        new AppError(`No Document with the ID: ${req.params.id} found`, 404)
      );
    }
    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'something went wrong',
    });
  }
  
});



// delete song
app.delete('/api/v1/songs/:id', async (req, res, next) => {
  try {
    const songs = await Songs.findByIdAndDelete(req.params.id);
  //console.log(contacts);
  res.status(200).json({
    status: 'success',
    data: {
      songs,
    },
  });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'something went wrong',
    });
  }
  
});

app.get('/api/v1/users', async (req, res) => {
  const contacts = await Contacts.find();
  //console.log(contacts);
  res.status(200).json({
    status: 'success',
    data: {
      contacts,
    },
  });
});

mongoose
  .connect('mongodb+srv://turatsinze:fvZ1sCfyO5630MtK@cluster0-p371t.mongodb.net/natours?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('DB Connection successful!');
  });

  const port = 8000;
  const server = app.listen(port, () => {
    console.log(`Listening to requests on ${port}... `);
  });
