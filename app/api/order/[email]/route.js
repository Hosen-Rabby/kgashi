import Order from "@/models/order";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { email } = params;
    const order = await Order.find({ email: email });
    return NextResponse.json({ order }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}
