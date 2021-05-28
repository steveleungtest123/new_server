import {
  CallbackError,
  Document,
  HookNextFunction,
  model,
  Schema,
} from "mongoose";

export interface QuestionTypeSchemaProto extends Document {
  name: string;
  description?: string;
  updated: Date;
}

const QuestionTypeSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: false,
    default: "Type Description Here",
  },
  updated: {
    type: Date,
    default: Date.now,
  },
});

QuestionTypeSchema.pre("validate", (next: HookNextFunction) => {
  next();
});
QuestionTypeSchema.on("error", () => {
  console.log("on error??")
})

// export const errorCatchMiddleWare = (
//   error: CallbackError,
//   doc: QuestionTypeSchemaProto,
//   next: Function
// ) => {
//   if (error?.name !== "MongoError") next(doc);
// };

export default model<QuestionTypeSchemaProto>(
  "QuestionType",
  QuestionTypeSchema
);
