import mongoose from "mongoose";

const ClassSchema = new mongoose.Schema({
  name: String,
});

export default mongoose.models.Class || mongoose.model("Class", ClassSchema);
