const mongoose = require('mongoose');
//const dotenv = require('dotenv');

//dotenv.config({ path: './config.env' });

const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
//'mongodb://localhost:27017/natours'

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('DB Connection successful!');
  });

  const port = process.env.PORT || 3000;
  const server = app.listen(port, () => {
    console.log(`Listening to requests on ${port}... `);
  });

  process.on('unhandledRejection', (err) => {
    console.log('UNHANDLED REJECTION! 💥 Shutting down...');
    console.log(err);
    server.close(() => {
      process.exit(1);
    });
  });
  
  process.on('SIGTERM', () => {
    console.log('SIGTERM RECEIVED, shutting down gracefully');
    server.close(() => {
      console.log('Process terminated');
    });
  });

