import connectToDB from "@/configs/db";
import banModel from "@/models/Ban";

export async function POST(req) {
  try {
    connectToDB();
    const body = await req.json();
    const { email, phone } = body;
    const isUserInBanList = await banModel.findOne({ email, phone });
    if (!isUserInBanList) {
      await banModel.create({ email, phone });
      return Response.json(
        { message: " User baned successfully" },
        { status: 201 }
      );
    } else {
      return Response.json(
        { message: " User is baned already!" },
        { status: 438 }
      );
    }
  } catch (err) {
    return Response.json({ message: err }, { status: 500 });
  }
}

export async function GET() {
  try {
    connectToDB();
    const banUsers = await banModel.find({});
    return Response.json(banUsers);
  } catch (err) {
    return Response.json({ message: err }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    connectToDB();
    const body = await req.json();
    const { id } = body;
    await banModel.findOneAndDelete({ _id: id });

    return Response.json(
      { message: "Ban User deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    return Response.json({ message: err }, { status: 500 });
  }
}
