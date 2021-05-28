import { Timestamp } from "bson";
import { model, Schema } from "mongoose";

const QuestionTypeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false,
    default: "Type Description Here"
  },
  updated: {
    type: Date,
    default: Date.now
  },
});

export interface QuestionTypeSchemaProto {
  name: string;
  description?: string;
  updated: Date;
}

export default model<QuestionTypeSchemaProto>("QuestionType", QuestionTypeSchema);

