import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import Puzzle from "@/models/puzzle";

export async function POST(request) {
  const { date, labels, answers } = await request.json();

  connectMongoDB();

  const puzzle = new Puzzle({
    date,
    labels,
    answers,
  });

  await puzzle.save();

  return NextResponse.json(
    {
      message: "puzzle created",
      success: true,
    },
    { status: 201 }
  );
}

export async function GET(request) {
  connectMongoDB();

  let date = new Date();
  date = `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;

  console.log("Date: ", date);
  const puzzles = await Puzzle.find({ date });

  return NextResponse.json(puzzles[0], { status: 200 });
}
