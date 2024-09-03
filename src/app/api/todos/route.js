import connectToDB from "@/configs/db";
import todoModel from "@/models/Todo";
import { authUser } from "@/utils/authentication/serverHelpers";

export async function POST(req) {
  try {
    connectToDB();
    const body = await req.json();
    const { title } = body;
    const user = await authUser();

    await todoModel.create({ title, user: user._id });
    return Response.json(
      { message: "New todo created successfully" },
      { status: 201 }
    );
  } catch (err) {
    return Response.json({ message: err }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    connectToDB();
    const body = await req.json();
    const { id, isComplete } = body;
    await todoModel.findOneAndUpdate(
      { _id: id },
      { $set: { isComplete: !isComplete } }
    );
    return Response.json(
      { message: "complete status changed successfully" },
      { status: 200 }
    );
  } catch (err) {
    return Response.json({ message: err }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    connectToDB();
    const body = await req.json();
    const { id } = body;
    await todoModel.findOneAndDelete({ _id: id });

    return Response.json(
      { message: "todo deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.log('err:::', err);
    return Response.json({ message: err }, { status: 500 });
  }
}
