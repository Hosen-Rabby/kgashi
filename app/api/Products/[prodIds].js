// pages/api/products/[prodIds].js

import Product from "@/models/product";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { prodIds } = req.params;

    // Split the comma-separated string of prodIds into an array
    const prodIdsArray = prodIds.split(",");

    // Find documents with _id values in the prodIdsArray
    const cartedProducts = await Product.find({
      _id: { $in: prodIdsArray },
    }).exec();

    return NextResponse.json({ cartedProducts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "error", error }, { status: 500 });
  }
}
