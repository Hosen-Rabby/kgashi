import Product from "@/models/product";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const body = await req.json();
    const { prodIdsString } = params;
    // const findProdIds = body.data;
    console.log(prodIdsString);
    console.log(body);

    // Await the query execution and call .exec()
    const cartedProduct = await Product.find({
      _id: { $in: findProdIds },
    }).exec();

    return NextResponse.json({ cartedProduct }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "error", error }, { status: 500 });
  }
}
