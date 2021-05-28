import { model, Schema } from "mongoose";

const AdminUsers = new Schema({
  displayName: {
    type: String,
    required: true,
  },
  loginName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default model("AdminUsers", AdminUsers);

