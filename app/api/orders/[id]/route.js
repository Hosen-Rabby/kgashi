import Order from "@/models/order";
import { NextResponse } from "next/server";

// export async function GET(req, { params }) {
//   try {
//     const { id } = params;
//     const foundProduct = await Order.findOne({ _id: id });
//     return NextResponse.json({ foundProduct }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ message: "error" }, { status: 500 });
//   }
// }

// export async function DELETE(req, { params }) {
//   try {
//     const { id } = params;
//     await Order.findByIdAndDelete(id);
//     return NextResponse.json({ message: "Product deleted" }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ message: "error" }, { status: 500 });
//   }
// }

// export async function PUT(req, { params }) {
//   try {
//     const { id } = params;
//     const body = await req.json();
//     const productData = body.data;
//     const updateProductData = await Order.findByIdAndUpdate(id, {
//       ...productData,
//     });
//     return NextResponse.json({ message: "Product updated" }, { status: 201 });
//   } catch (error) {
//     return NextResponse.json({ message: "error" }, { status: 500 });
//   }
// }

export async function PATCH(req, { params }) {
  try {
    const { id } = params;
    console.log(id);
    const mode = await req.json();

    console.log(mode);
    if (mode === 0) {
      const updateProductData = await Order.findByIdAndUpdate(id, {
        confirmed: true,
      });
    }
    if (mode === 1) {
      const updateProductData = await Order.findByIdAndUpdate(id, {
        shipped: true,
      });
    }
    if (mode === 2) {
      const updateProductData = await Order.findByIdAndUpdate(id, {
        delivered: true,
      });
    }

    return NextResponse.json({ message: "Product updated" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}
