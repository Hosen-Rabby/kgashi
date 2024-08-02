import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const email = body.data;
    await User.create(email);
    return NextResponse.json({ message: "User added" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}

// export async function GET(req) {
//   try {
//     const products = await Product.find();
//     return NextResponse.json({ products }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ message: "error", error }, { status: 500 });
//   }
// }
