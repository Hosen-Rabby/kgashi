import User from "@/models/user";
import { NextResponse } from "next/server";

// export async function PUT(req, { params }) {
//   try {
//     const { id } = params;
//     console.log(id);
//     const body = await req.json();
//     const personalData = body.data;
//     console.log(body);
//     console.log(personalData);
//     const updateData = await User.findByIdAndUpdate(id, {
//       ...personalData,
//     });
//     return NextResponse.json({ message: "Info updated" }, { status: 201 });
//   } catch (error) {
//     return NextResponse.json({ message: "error" }, { status: 500 });
//   }
// }

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    console.log(id);      
    const body = await req.json();
    const productData = body.data;
    console.log(productData);
    const updateProductData = await User.findByIdAndUpdate(id, {
      ...productData,
    });
    return NextResponse.json({ message: "Product updated" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}
