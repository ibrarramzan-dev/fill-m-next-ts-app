import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import Puzzle from "@/models/puzzle";

export async function POST(request) {
  const { date, labels, answers, stats } = await request.json();

  connectMongoDB();

  console.log("Stats ", stats);

  const puzzle = new Puzzle({
    date,
    labels,
    answers,
    stats,
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

export async function PUT(request) {
  const { id, score } = await request.json();

  connectMongoDB();

  const key = `stats.score.${score}`;

  await Puzzle.findOneAndUpdate({ _id: id }, { $inc: { [key]: 1 } });
  return NextResponse.json(
    {
      success: true,
      message: "puzzle stats updated",
    },
    { status: 200 }
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
