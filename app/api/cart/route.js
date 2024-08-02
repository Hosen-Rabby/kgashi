import Cart from "@/models/cart";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const info = body.data;
    console.log(info);
    await Cart.create(info);
    return NextResponse.json({ message: "Cart added" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}
