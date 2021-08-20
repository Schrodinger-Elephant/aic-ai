import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  fullname: String,
  absent_number: Number,
  wa_number: Number,
  username: String,
  password: String,
  role: String,
  class: String,
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
