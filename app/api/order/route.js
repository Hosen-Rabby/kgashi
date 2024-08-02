import Order from "@/models/order";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const orderData = body.billingDetails;
    console.log(orderData);
    await Order.create(orderData);
    return NextResponse.json({ message: "order added" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    const orders = await Order.find();
    return NextResponse.json({ orders }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "error", error }, { status: 500 });
  }
}
