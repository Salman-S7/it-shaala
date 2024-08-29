"use client";

import Image from "next/image";
import img from "../../public/logo-02.png";

const MyComponet = () => {
  const data = JSON.parse(localStorage.getItem("data"));

  return (
    <div className="print-component px-12 py-8">
      <div className="min-w-full flex items-center justify-end pr-10">
        <Image src={img} width={100} height="auto" alt="It Shaala Logo" />
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

      <div className="mt-12">
        <section className="mb-8 page-break-inside-avoid">
          {" "}
          <p className="pb-8 font-semibold text-center">Personal Details</p>
          <div className=" flex justify-between">
            <div className="w-1/2">
              <p className="mb-4">
                <span className="font-[500]">Full Name :</span>{" "}
                {data?.firstName} {data.middleName} {data.lastName}
              </p>
              <p className="mb-4">
                <span className="font-[500]">Gender :</span> {data?.gender}
              </p>
              <p className="mb-4">
                <span className="font-[500]">Date of birth :</span> {data?.dob}
              </p>
              <p className="mb-4">
                <span className="font-[500]">Adhaar Card no. :</span>{" "}
                {data?.aadharNumber}
              </p>
              <p className="mb-4">
                <span className="font-[500]">Pan Card no. :</span>{" "}
                {data?.panNumber}
              </p>
            </div>
            <div className="w-1/2">
              <p className="mb-4">
                <span className="font-[500]">Mobile number :</span>{" "}
                {data?.mobileNumber}
              </p>
              <p className="mb-4">
                <span className="font-[500]">Present address :</span>
                {data?.presentAddress}
              </p>
              <p className="mb-4">
                <span className="font-[500]">Permanent address :</span>{" "}
                {data?.permanentAddress}
              </p>
            </div>
          </div>
        </section>
        <section className="mt-10 mb-8 page-break-inside-avoid">
          <p className="pb-8 font-semibold text-center">Parents Details</p>
          <div className="flex justify-between">
            <div className="w-1/2">
              <p className="mb-4">
                <span className="font-[500]">Fathers occupation :</span>{" "}
                {data?.fathersOccupation}
              </p>
              <p className=" mb-4">
                <span className="font-[500]">Mothers occupation :</span>{" "}
                {data?.mothersOccupation}
              </p>
            </div>
            <div className="w-1/2">
              <p className=" mb-4">
                <span className="font-[500]">Fathers mobile number :</span>{" "}
                {data?.fatherContact}
              </p>
              <p className=" mb-4">
                <span className="font-[500]">Mothers mobile number :</span>{" "}
                {data?.motherContact}
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 mb-8 page-break-inside-avoid">
          <p className="pb-8 font-semibold text-center">Educational Details</p>
          <div className="flex justify-between">
            <div className="w-1/2">
              <p className=" mb-4">
                <span className="font-[500]">Degree Name :</span>{" "}
                {data?.degreeName}
              </p>
              <p className=" mb-4">
                <span className="font-[500]">Degree College Name :</span>{" "}
                {data?.degreeCollegeName}
              </p>
              <p className=" mb-4">
                <span className="font-[500]">Degree specialization :</span>{" "}
                {data?.degreeSpecialization}
              </p>
              <p className=" mb-4">
                <span className="font-[500]">Degree CGPA :</span>{" "}
                {data?.degreeCGPA}
              </p>
              <p className=" mb-4">
                <span className="font-[500]">Degree passing year :</span>{" "}
                {data?.degreePassingYear}
              </p>

              <p className=" mb-4">
                <span className="font-[500]">HSC/Diploma name :</span>{" "}
                {data?.hscSpecialization}
              </p>
              <p className=" mb-4">
                <span className="font-[500]">HSC/Diploma College Name :</span>
                {data?.hscCollegeName}
              </p>
            </div>

            <div className="w-1/2">
              <p className=" mb-4">
                <span className="font-[500]">
                  HSC/Diploma Percentage / CGPA :
                </span>{" "}
                {data?.hscCGPA}
              </p>
              <p className=" mb-4">
                <span className="font-[500]">HSC/Diploma Passing Year :</span>{" "}
                {data?.hscPassingYear}
              </p>
              <p className=" mb-4">
                <span className="font-[500]">SSC Board Name :</span>{" "}
                {data?.sscBoardName}
              </p>
              <p className=" mb-4">
                <span className="font-[500]">SSC College Name :</span>{" "}
                {data?.sscSchoolName}
              </p>
              <p className=" mb-4">
                <span className="font-[500]">SSC School Medium :</span>{" "}
                {data?.sscMedium}
              </p>
              <p className=" mb-4">
                <span className="font-[500]">SSC Percentage / CGPA :</span>
                {data?.sscCGPA}
              </p>
              <p className=" mb-4">
                <span className="font-[500]">SSC Passing Year :</span>{" "}
                {data?.sscPassingYear}
              </p>
            </div>
          </div>
        </section>
        {/* <section className="mt-10 mb-8 page-break-inside-avoid">
          <p className=" mb-4">
            <span className="font-[500]">Date of admission :</span>{" "}
            {data?.admissionDate}
          </p>
          <p className=" mb-4">
            <span className="font-[500]">Course Admitted :</span>{" "}
            {data?.courseAdmitted}
          </p>
          <p className=" mb-4">
            <span className="font-[500]">Batch code :</span> {data?.batchCode}
          </p>
        </section> */}
        <section className="mt-10 mb-8 page-break-inside-avoid">
          <ol className="list-decimal list-inside">
            <p className="my-8">IT Shaala Rules & Policies </p>
            <li className="my-4">
              Non-Refundable Fees: - All fees paid to IT Shaala are strictly
              non-refundable & non-tranferrable under any circumstances.
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
            <p>
              I Declare that the above information is true to the best of my
              knowledge and belief, I agree in abide by the rules and
              regulations of IT Shaala. I agree to appear for all International
              Examinations and also agree to pay the International
            </p>
          </ol>

          <div className="flex justify-between py-4">
            <p className="mb-4">
              <span className="font-[500]">Date of admission :</span>{" "}
              {data?.admissionDate}
            </p>
            <p className=" mb-4">
              <span className="font-[500]">Course Admitted :</span>{" "}
              {data?.courseAdmitted}
            </p>
            <p className=" mb-4">
              <span className="font-[500]">Batch code :</span> {data?.batchCode}
            </p>
          </div>
          <div className="flex justify-between w-full mt-16">
            <p className=""> Examination Fee. : </p>
            <p>Date : </p>
            <p>Signature of Student</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MyComponet;
