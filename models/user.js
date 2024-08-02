import connetMongoDB from "@/libs/mongodb";
import mongoose, { Schema } from "mongoose";
connetMongoDB();
const userShema = new Schema(
  {
    name: String,
    email: String,
    phone: String,
    division: String,
    district: String,
    addressDetails: String,
    landMark: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userShema);
export default User;
