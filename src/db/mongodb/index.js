import mongoose from 'mongoose';

const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_PASS = process.env.MONGO_PASS;
const MONGO_HOST = process.env.MONGO_HOST; // mymongodb // Replace it with the name of the mongo container
const DOCKER_MONGO_PORT = process.env.DOCKER_MONGO_PORT;

const connectWithRetry = () => {
  mongoose
    .connect(
      `mongodb://${MONGO_USERNAME}:${MONGO_PASS}@${MONGO_HOST}:${DOCKER_MONGO_PORT}/pets_store?authSource=admin`
    )
    .catch((error) => {
      console.error(`Can't connect to mongodb ->`, error);

      setTimeout(connectWithRetry, 5000);
    });
};

mongoose.connection.on('connected', () => {
  console.log('successfully connected to mongodb');
});

mongoose.connection.on('disconnected', () => {
  console.log('mongodb disconnected');
});

mongoose.connection.on('error', (error) => {
  console.log(`Error connecting to mongodb`, error);
});

export { mongoose, connectWithRetry };
