import connetMongoDB from "@/libs/mongodb";
import mongoose, { Schema } from "mongoose";
connetMongoDB();
const orderSchema = new Schema(
  {
    name: String,
    email: String,
    phone: Number,
    productId: String,
    productPrice: Number,
    quantity: Number,
    deliveryCharge: Number,
    total: Number,
    division: String,
    district: String,
    address: String,
    confirmed: Boolean,
    shipped: Boolean,
    delivered: Boolean,
    canceled: Boolean,
  },

  {
    timestamps: true,
  }
);

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);
export default Order;
