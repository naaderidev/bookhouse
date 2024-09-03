import connectToDB from "@/configs/db";
import userModel from "@/models/User";

export async function PUT(req) {
  try {
    connectToDB();
    const body = await req.json();
    const { id, name, username, phone, email } = body;
    await userModel.findOneAndUpdate(
      { _id: id },
      { $set: { name, username, phone, email } }
    );

    return Response.json(
      { message: "user's role updated successfully" },
      { status: 200 }
    );
  } catch (err) {
    return Response.json({ message: err }, { status: 500 });
  }
}
