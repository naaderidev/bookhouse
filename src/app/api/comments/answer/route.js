import connectToDB from "@/configs/db";
import commentModel from "@/models/Comment";
import { authUser } from "@/utils/authentication/serverHelpers";

export async function POST(req) {
  try {
    connectToDB();
    const user = await authUser();
    const reqBody = await req.json();
    const { body, score, productId, commentID } = reqBody;

    await commentModel.findOneAndUpdate(
      { _id: commentID },
      {
        $set: {
          hasAnswer: true,
        },
      }
    );

    await commentModel.create({
      username: user.name,
      email: user.email,
      body,
      score,
      productId,
      hasAnswer: false,
      isAnswer: true,
      mainComment: commentID,
    });
    return Response.json(
      { message: "comment saved successfully" },
      { status: 201 }
    );
  } catch (err) {
    return Response.json({ message: "internal server error" }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    connectToDB();
    const body = await req.json();
    const { id } = body;
    await commentModel.findOneAndDelete({ _id: id });

    return Response.json(
      { message: "answer deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    return Response.json({ message: err }, { status: 500 });
  }
}