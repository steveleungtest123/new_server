import { model, Schema, Types } from "mongoose";

const QuestionSchema = new Schema({
  category: {
    type: Schema.Types.ObjectId,
    ref: "QuestionType",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  answers: {
    type: String,
    required: true,
  },
  options: [
    {
      tag: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
    },
  ],
  updated: {
    type: Date,
    default: Date.now,
  },
  modified: {
    type: Schema.Types.ObjectId,
    ref: "AdminUsers",
  },
});

export default model("Question", QuestionSchema);
