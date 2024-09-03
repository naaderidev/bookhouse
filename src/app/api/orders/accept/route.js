import connectToDB from "@/configs/db";
import orderModel from "@/models/Order";
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
    await orderModel.findOneAndUpdate(
      { _id: id },
      { $set: { isAccept: "accept" } }
    );
    return Response.json(
      { message: "order accepted successfully" },
      { status: 200 }
    );
  } catch (err) {
    return Response.json({ message: err.message }, { status: 500 });
  }
}
