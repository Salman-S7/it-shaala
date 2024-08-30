"use client";

import Image from "next/image";
import img from "../../public/logo-02.png";
import { useState, useEffect } from "react";

const MyComponet = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const mydata = window.localStorage.getItem("data");
    setData(mydata);
  }, []);

  return (
    <div className="print-component px-12 py-8">
      <div className="min-w-full flex items-center justify-between pr-10">
        <Image src={img} width={140} height="auto" alt="It Shaala Logo" />
        <div className="text-center">
          <p className="font-black text-2xl text-blue-900">IT Shaala</p>
          <p>IT Training & Placement Institute</p>
          <p>Registration-cum-Placement Form</p>
        </div>
        <Image src={img} width={140} height="auto" alt="It Shaala Logo" />
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="mt-12 mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Student Information
        </h2>

        <table className="w-full mb-8 border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th
                colSpan="2"
                className="p-2 border border-gray-300 text-left font-semibold"
              >
                Personal Details
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border border-gray-300 font-medium">
                Full Name
              </td>
              <td className="p-2 border border-gray-300">{`${
                data?.firstName || ""
              } ${data?.middleName || ""} ${data?.lastName || ""}`}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 font-medium">Gender</td>
              <td className="p-2 border border-gray-300">
                {data?.gender || ""}
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 font-medium">
                Date of Birth
              </td>
              <td className="p-2 border border-gray-300">{data?.dob || ""}</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 font-medium">
                Aadhar Card No.
              </td>
              <td className="p-2 border border-gray-300">
                {data?.aadharNumber || ""}
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 font-medium">
                PAN Card No.
              </td>
              <td className="p-2 border border-gray-300">
                {data?.panNumber || ""}
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 font-medium">
                Mobile Number
              </td>
              <td className="p-2 border border-gray-300">
                {data?.mobileNumber || ""}
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 font-medium">
                Present Address
              </td>
              <td className="p-2 border border-gray-300">
                {data?.presentAddress || ""}
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 font-medium">
                Permanent Address
              </td>
              <td className="p-2 border border-gray-300">
                {data?.permanentAddress || ""}
              </td>
            </tr>
          </tbody>
        </table>

        <table className="w-full mb-8 border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th
                colSpan="2"
                className="p-2 border border-gray-300 text-left font-semibold"
              >
                Parents Details
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border border-gray-300 font-medium">
                Father's Occupation
              </td>
              <td className="p-2 border border-gray-300">
                {data?.fathersOccupation || ""}
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 font-medium">
                Father's Mobile Number
              </td>
              <td className="p-2 border border-gray-300">
                {data?.fatherContact || ""}
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 font-medium">
                Mother's Occupation
              </td>
              <td className="p-2 border border-gray-300">
                {data?.mothersOccupation || ""}
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 font-medium">
                Mother's Mobile Number
              </td>
              <td className="p-2 border border-gray-300">
                {data?.motherContact || ""}
              </td>
            </tr>
          </tbody>
        </table>

        <table className="w-full mb-8 border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th
                colSpan="2"
                className="p-2 border border-gray-300 text-left font-semibold"
              >
                Educational Details
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border border-gray-300 font-medium">
                Degree Name
              </td>
              <td className="p-2 border border-gray-300">
                {data?.degreeName || ""}
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 font-medium">
                Degree College Name
              </td>
              <td className="p-2 border border-gray-300">
                {data?.degreeCollegeName || ""}
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 font-medium">
                Degree Specialization
              </td>
              <td className="p-2 border border-gray-300">
                {data?.degreeSpecialization || ""}
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 font-medium">
                Degree CGPA
              </td>
              <td className="p-2 border border-gray-300">
                {data?.degreeCGPA || ""}
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 font-medium">
                Degree Passing Year
              </td>
              <td className="p-2 border border-gray-300">
                {data?.degreePassingYear || ""}
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 font-medium">
                HSC/Diploma Name
              </td>
              <td className="p-2 border border-gray-300">
                {data?.hscSpecialization || ""}
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 font-medium">
                HSC/Diploma College Name
              </td>
              <td className="p-2 border border-gray-300">
                {data?.hscCollegeName || ""}
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 font-medium">
                HSC/Diploma Percentage/CGPA
              </td>
              <td className="p-2 border border-gray-300">
                {data?.hscCGPA || ""}
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 font-medium">
                HSC/Diploma Passing Year
              </td>
              <td className="p-2 border border-gray-300">
                {data?.hscPassingYear || ""}
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 font-medium">
                SSC Board Name
              </td>
              <td className="p-2 border border-gray-300">
                {data?.sscBoardName || ""}
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 font-medium">
                SSC College Name
              </td>
              <td className="p-2 border border-gray-300">
                {data?.sscSchoolName || ""}
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 font-medium">
                SSC School Medium
              </td>
              <td className="p-2 border border-gray-300">
                {data?.sscMedium || ""}
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 font-medium">
                SSC Percentage/CGPA
              </td>
              <td className="p-2 border border-gray-300">
                {data?.sscCGPA || ""}
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 font-medium">
                SSC Passing Year
              </td>
              <td className="p-2 border border-gray-300">
                {data?.sscPassingYear || ""}
              </td>
            </tr>
          </tbody>
        </table>

        <table className="w-full mb-8 border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th
                colSpan="2"
                className="p-2 border border-gray-300 text-left font-semibold"
              >
                Admission Details
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border border-gray-300 font-medium">
                Date of Admission
              </td>
              <td className="p-2 border border-gray-300">
                {data?.admissionDate || ""}
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 font-medium">
                Course Admitted
              </td>
              <td className="p-2 border border-gray-300">
                {data?.courseAdmitted || ""}
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 font-medium">
                Batch Code
              </td>
              <td className="p-2 border border-gray-300">
                {data?.batchCode || ""}
              </td>
            </tr>
          </tbody>
        </table>

        <section className="mt-10 mb-8 page-break-inside-avoid">
          <ol className="list-decimal list-inside">
            <p className="my-8 font-bold">IT Shaala Rules & Policies </p>
            <li className="my-4">
              {/* <span className="font-semibold"> */}
              Non-Refundable Fees: -{/* </span> */}
              All fees paid to IT Shaala are strictly non-refundable &
              non-tranferrable under any circumstances.
            </li>
            <li className="my-4">
              Placement Requirements: - A minimum of 90% attendance is mandatory
              to qualify for placement assistance. - Interview calls will
              commence after the completion of half of the syllabus.
            </li>

            <li className="my-4">
              Office Premises Conduct: - Any damage or harm caused to office
              premises or property will result in legal action being taken
              against the responsible individual(s).
            </li>

            <li className="my-4">
              Placement Assistance Disclaimer: - IT Shaala offers placement
              assistance only and does not guarantee job placement.
            </li>

            <li className="my-4">
              Fee Payment and Class Access: - Fees must be paid within the
              stipulated time as per the payment schedule. - Failure to pay fees
              on time will result in the suspension(hold/break) of class access
              until payment is made. - Fees 1st installment should be clear
              before the batch starts - If your installment gets delayed after
              the due date , batch & other services will be stopped until
              installment Is cleared.
            </li>
            <li className="my-4">
              Batch update Policy: - If student want to change batch he will be
              allowed only once. - On LMS If student change his/her batch
              offline then he will be not allowed to both batch recordings.
              These rules ensure clarity and maintain a professional environment
              at IT Shaala. Schemes if any, are of Company (IT Shaala) Alt
              rights reserved by Company for cancellation/delay.
            </li>
          </ol>
        </section>

        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2">Declaration</h3>
          <p className="mb-4">
            I declare that the above information is true to the best of my
            knowledge and belief. I agree to abide by the rules and regulations
            of IT Shaala. I agree to appear for all International Examinations
            and also agree to pay the International Examination Fee.
          </p>
          <div className="flex justify-between mt-8">
            <div>
              <p className="font-medium">Date:</p>
              <div className="w-32 border-b border-black mt-10"></div>
            </div>
            <div>
              <p className="font-medium">Signature of Student:</p>
              <div className="w-64 border-b border-black mt-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponet;
