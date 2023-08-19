import mongoose, { Schema } from "mongoose";

const puzzleSchema = new Schema(
  {
    date: String,
    labels: Object,
    answers: Object,
  },
  { timestamps: true }
);

const Puzzle = mongoose.models.Puzzle ?? mongoose.model("Puzzle", puzzleSchema);

export default Puzzle;
