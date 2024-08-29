import { NextResponse } from "next/server";

export const maxDuration = 40;
export const POST = async (req) => {
  const url = process.env.GOOGLE_SCRIPT_URL;

  if (req.method !== "POST") {
    return NextResponse.json(
      { message: "Only POST requests are allowed" },
      { status: 405 }
    );
  }

  try {
    const data = await req.json();

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
    });

    const r = await response.text();

    if (r === "Data saved Succesfully: ") {
      return NextResponse.json({ data: data.passportPhoto }, { status: 201 });
    } else {
      console.log(r);
      return NextResponse.json(
        { message: "Unknown error occured" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal server error", error: error.message },
      { status: 500 }
    );
  }
};
