const mongoose = require('mongoose');
const config = require('config');
const DBurl = config.get('MongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(DBurl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
