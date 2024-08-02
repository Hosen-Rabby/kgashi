import User from "@/models/user";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { email } = params;
    const foundProfile = await User.findOne({ email: email });
    return NextResponse.json({ foundProfile }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}


