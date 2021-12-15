import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  name: String,
  description: String,
  taskStatus: String,
  imageUrl: String,
  userId: { type: mongoose.Schema.ObjectId, ref: "users" },
  listId: { type: mongoose.Schema.ObjectId, ref: "lists" },
  registerDate: { type: Date, default: Date.now },
});

const task = mongoose.model("tasks", taskSchema);
export default task;
