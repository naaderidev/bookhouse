import connectToDB from "@/configs/db";
import commentModel from "@/models/Comment";
import { authAdmin } from "@/utils/authentication/serverHelpers";

export async function PUT(req) {
  try {
    const isAdminVerified = await authAdmin();
    if (isAdminVerified === null) {
      throw new Error("this api is protected and you can not access to it!");
    }
    connectToDB();
    const body = await req.json();
    const { id } = body;
    await commentModel.findOneAndUpdate(
      { _id: id },
      { $set: { isAccept: false } }
    );
    return Response.json(
      { message: "comment accepted successfully" },
      { status: 200 }
    );
  } catch (err) {
    return Response.json({ message: err.message }, { status: 500 });
  }
}
