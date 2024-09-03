import connectToDB from "@/configs/db";
import productModel from "@/models/Product";

export async function POST(req) {
  try {
    connectToDB();
    const body = await req.json();
    const { id, details, tags, introduction, description } = body;
    await productModel.findOneAndUpdate(
      { _id: id },
      { $set: { details, tags, introduction, description } }
    );
    return Response.json(
      { message: "user info updated successfully" },
      { status: 200 }
    );
  } catch (err) {
    return Response.json({ message: err }, { status: 500 });
  }
}
