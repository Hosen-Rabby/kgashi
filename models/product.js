import connetMongoDB from "@/libs/mongodb";
import mongoose, { Schema } from "mongoose";
connetMongoDB();
const productShema = new Schema(
  {
    name: String,
    category: String,
    pid: String,
    price: Number,
    fakePrice: Number,
    imageUrls: [String],
    videoUrl: String,
    description: String,
    quantity: Number,
    deliveryCharge: Number,
    tags: [String],
    active: Boolean,
  },

  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productShema);
export default Product;
