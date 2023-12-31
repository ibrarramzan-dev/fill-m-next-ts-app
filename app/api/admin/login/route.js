import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import Admin from "../../../../models/admin";

export async function POST(request) {
  const { username, password } = await request.json();

  connectMongoDB();

  const adminRecord = await Admin.findOne({ username, password });

  if (adminRecord) {
    return NextResponse.json(
      {
        message: "Admin authenticated",
        success: true,
      },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      {
        message: "Admin authentication failed",
        success: false,
      },
      { status: 200 }
    );
  }
}
