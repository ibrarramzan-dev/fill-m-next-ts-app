import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import Puzzle from "@/models/puzzle";

export async function POST(request) {
  const { date, labels, answers, stats } = await request.json();

  connectMongoDB();

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
  const { id, score, cellsImages } = await request.json();

  connectMongoDB();

  const key = `stats.score.${score}`;
  const guessesUpdateQuery = {};
  const notGuessedUpdateQuery = {};

  Object.keys(cellsImages).forEach((label) => {
    if (cellsImages[label].id !== 0) {
      const key = `stats.guesses.${label}.${cellsImages[label].id}.count`;
      guessesUpdateQuery[key] = 1;
    } else {
      const key = `stats.guesses.${label}.notGuessed`;
      notGuessedUpdateQuery[key] = 1;
    }
  });

  await Puzzle.findOneAndUpdate(
    { _id: id },
    {
      $inc: { [key]: 1, ...guessesUpdateQuery, ...notGuessedUpdateQuery },
    }
  );

  return NextResponse.json(
    {
      success: true,
      message: "puzzle stats updated",
    },
    { status: 200 }
  );
}

export async function GET() {
  connectMongoDB();

  let date = new Date();
  date = `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;

  const puzzles = await Puzzle.find({ date });

  return NextResponse.json(puzzles[0], {
    status: 200,
  });
}
