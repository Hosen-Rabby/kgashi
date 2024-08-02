import Cart from "@/models/cart";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { email } = params;
    console.log(email);
    const foundCart = await Cart.find({ email: email });
    return NextResponse.json({ foundCart }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}
