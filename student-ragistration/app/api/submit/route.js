import { google } from "googleapis";
import { NextResponse } from "next/server";

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

    console.log(r);

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
    return NextResponse.json(
      { message: "Internal server error", error: e.message },
      { status: 500 }
    );
  }
};




  // try {
  //   const auth = new google.auth.GoogleAuth({
  //     credentials: {
  //       client_email: process.env.GOOGLE_CLIENT_EMAIL,
  //       private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  //     },
  //     scopes: [
  //       "https://www.googleapis.com/auth/drive",
  //       "https://www.googleapis.com/auth/drive.file",
  //       "https://www.googleapis.com/auth/spreadsheets",
  //     ],
  //   });

  //   const sheets = google.sheets({
  //     auth,
  //     version: "v4",
  //   });

  //   const response = await sheets.spreadsheets.values.append({
  //     spreadsheetId: process.env.NEXT_PUBLIC_SPREADSHEET_ID,
  //     range: "A1:D1",
  //     valueInputOption: "USER_ENTERED",
  //     requestBody: {
  //       values: [
  //         [
  //           data.firstName,
  //           data.middleName,
  //           data.lastName,
  //           data.gender,
  //           data.dob,
  //           data.aadharNumber,
  //           data.panNumber,
  //           data.mobileNumber,
  //           data.email,
  //           data.presentAddress,
  //           data.permanentAddress,
  //           data.fathersOccupation,
  //           data.mothersOccupation,
  //           data.fatherContact,
  //           data.motherContact,
  //           data.degreeName,
  //           data.degreeCollegeName,
  //           data.degreeSpecialization,
  //           data.degreeCGPA,
  //           data.degreePassingYear,
  //           data.hscCollegeName,
  //           data.hscSpecialization,
  //           data.hscCGPA,
  //           data.hscPassingYear,
  //           data.sscBoardName,
  //           data.sscSchoolName,
  //           data.sscMedium,
  //           data.sscCGPA,
  //           data.sscPassingYear,
  //           data.admissionDate,
  //           data.courseAdmitted,
  //           data.batchCode,
  //           // data.passportPhoto,
  //         ],
  //       ],
  //     },
  //   });

  //   return NextResponse.json({ data: response.data }, { status: 201 });
  // } catch (e) {
  //   console.error(e);
  //   return NextResponse.json(
  //     { message: "Internal server error", error: e.message },
  //     { status: 500 }
  //   );
  // }
