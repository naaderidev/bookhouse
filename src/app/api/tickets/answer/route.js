import connectToDB from "@/configs/db";
import ticketModel from "@/models/Ticket";
import { authUser } from "@/utils/authentication/serverHelpers";

export async function POST(req) {
  try {
    connectToDB();
    const user = await authUser();
    const reqBody = await req.json();
    const { title, body, department, subDepartment, priority, ticketID } =
      reqBody;

    await ticketModel.findOneAndUpdate(
      { _id: ticketID },
      {
        $set: {
          hasAnswer: true,
        },
      }
    );

    await ticketModel.create({
      title,
      body,
      department,
      subDepartment,
      priority,
      user: user._id,
      hasAnswer: false,
      isAnswer: true,
      mainTicket: ticketID,
    });
    return Response.json(
      { message: "ticket created successfully" },
      { status: 201 }
    );
  } catch (err) {
    return Response.json({ message: "internal server error" }, { status: 500 });
  }
}
