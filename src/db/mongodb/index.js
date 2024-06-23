import mongoose from 'mongoose';

const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_PASS = process.env.MONGO_PASS;
const MONGO_HOST = process.env.MONGO_HOST; // mymongodb // Replace it with the name of the mongo container

mongoose.connect(
  `mongodb://${MONGO_USERNAME}:${MONGO_PASS}@${MONGO_HOST}:27017/pet?authSource=admin`
);

mongoose.connection.on('connected', () => {
  console.log('mongodb successfully connected');
});

mongoose.connection.on('disconnected', () => {
  console.log('mongodb disconnected');
});

mongoose.connection.on('error', (error) => {
  console.log(`Error connecting to mongodb -> ${error?.message}`);
});

export { mongoose };
