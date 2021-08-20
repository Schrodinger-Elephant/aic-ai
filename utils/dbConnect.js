import mongoose from "mongoose";

/* mongoose is singleton object */
async function dbConnect() {
  /* check if we already have connection to mongodb */
  if (mongoose.connection.readyState) {
    return;
  } else {
    /* connecting to database */
    console.info("initializing connection to db");
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
  }
}

export default dbConnect;