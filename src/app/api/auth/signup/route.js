import connectToDB from "@/configs/db";
import userModel from "@/models/User";
import { userRoles } from "@/utils/constants";
import { generateAccessToken, hashPassword } from "@/utils/authentication/auth";

export async function POST(req) {
  const body = await req.json();

  try {
    connectToDB();
    const {
      name,
      username,
      password,
      email,
      phone,
      province,
      city,
      address,
      zip,
    } = body;
    const isUserExist = await userModel.findOne({
      $or: [{ email }, { phone }],
    });
    if (isUserExist) {
      return Response.json(
        { message: "email or phone already exist!" },
        { status: 434 }
      );
    }

    const hashedPassword = await hashPassword(password);
    const accessToken = generateAccessToken({ email });
    const users = await userModel.find({});

    await userModel.create({
      name,
      username,
      password: hashedPassword,
      email,
      phone,
      address,
      province,
      city,
      zip,
      role: users.length > 0 ? userRoles.USER : userRoles.ADMIN,
    });

    return Response.json(
      { message: "user account created successfully" },
      {
        status: 201,
        headers: {
          "Set-Cookie": `token = ${accessToken}; path=/; httpOnly=true`,
        },
      }
    );
  } catch (err) {
    return Response.json({ message: "unknown server error" }, { status: 500 });
  }
}
