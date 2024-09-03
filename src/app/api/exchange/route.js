import connectToDB from "@/configs/db";
import applicantExchangeModel from "@/models/ApplicantExchange";

export async function POST(req) {
  try {
    connectToDB();
    const body = await req.json();
    const { name, phone, suggest, request } = body;
    await applicantExchangeModel.create({
      name,
      phone,
      suggest,
      request,
    });

    return Response.json(
      { message: "new exchange request received successfully" },
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
    await applicantExchangeModel.findOneAndDelete({ _id: id });

    return Response.json(
      { message: "message deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    return Response.json({ message: err }, { status: 500 });
  }
}
