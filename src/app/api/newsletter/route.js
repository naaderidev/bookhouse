import connectToDB from "@/configs/db";
import newsletterModel from "@/models/Newsletter";

export async function POST(req) {
  try {
    connectToDB();
    const body = await req.json();
    const { email } = body;
    await newsletterModel.create({ email });

    return Response.json(
      { message: "New subscribe created successfully" },
      { status: 201 }
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
    await newsletterModel.findOneAndDelete({ _id: id });

    return Response.json(
      { message: "User deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    return Response.json({ message: err }, { status: 500 });
  }
}
