import mongoose from "mongoose";

const connectMongoDB = () => {
  try {
    mongoose.connect(
      "mongodb+srv://ibrarramzandev:yHdAwqL63mgtZJTO@cluster0.h8knxlu.mongodb.net/?retryWrites=true&w=majority"
    );
  } catch (error) {
    console.error(error);
  }
};

export default connectMongoDB;
