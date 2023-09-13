import mongoose from "mongoose";

const connectMongoDB = () => {
  try {
    // mongoose.connect(
    //   "mongodb+srv://ibrarramzandev:yHdAwqL63mgtZJTO@cluster0.h8knxlu.mongodb.net/?retryWrites=true&w=majority"
    // );
    mongoose.connect(
      "mongodb+srv://rhphillipsiii:QEkx3WQ3N6EryZW8@cluster0.xndlq0b.mongodb.net/?retryWrites=true&w=majority"
    );
  } catch (error) {
    console.error(error);
  }
};

export default connectMongoDB;
