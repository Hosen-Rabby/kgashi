import Product from "@/models/product";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const productData = body.data;
    console.log(productData);
    await Product.create(productData);
    return NextResponse.json({ message: "Product added" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    const products = await Product.find();
    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "error", error }, { status: 500 });
  }
}
