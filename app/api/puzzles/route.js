import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import Puzzle from "@/models/puzzle";

export async function POST(request) {
  const { date, labels, answers } = await request.json();

  console.log("Date: ", date);
  console.log("Labels: ", labels);
  console.log("Answers: ", answers);

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
