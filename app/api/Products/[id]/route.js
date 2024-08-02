import Product from "@/models/product";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { id } = params;
    const foundProduct = await Product.findOne({ _id: id });
    return NextResponse.json({ foundProduct }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    await Product.findByIdAndDelete(id);
    return NextResponse.json({ message: "Product deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const body = await req.json();
    const productData = body.data;
    const updateProductData = await Product.findByIdAndUpdate(id, {
      ...productData,
    });
    return NextResponse.json({ message: "Product updated" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}

export async function PATCH(req, { params }) {
  try {
    const { id } = params;
    const body = await req.json();

    if (body === 0) {
      const updateProductData = await Product.findByIdAndUpdate(id, {
        active: false,
      });
    } else {
      const updateProductData = await Product.findByIdAndUpdate(id, {
        active: true,
      });
    }

    return NextResponse.json({ message: "Product updated" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}
