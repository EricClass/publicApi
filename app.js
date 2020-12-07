const express = require('express');
const path = require('path');
const compression = require('compression');

const songsRouter = require('./routes/songsRoutes');
const treepRouter = require('./routes/treepRoutes');

const app = express();
app.use(express.json({ limit: '10kb' }));

app.use(compression());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/songs', songsRouter);
app.use('/api/v1/treep', treepRouter);

module.exports = app;