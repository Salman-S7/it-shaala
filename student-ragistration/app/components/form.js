"use client";

import Link from "next/link";
import React, { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [presentAddress, setPresentAddress] = useState("");
  const [permanentAddress, setPermanentAddress] = useState("");
  const [fathersOccupation, setFathersOccupation] = useState("");
  const [mothersOccupation, setMothersOccupation] = useState("");
  const [fatherContact, setFatherContact] = useState("");
  const [motherContact, setMotherContact] = useState("");
  const [degreeName, setDegreeName] = useState("");
  const [degreeCollegeName, setDegreeCollegeName] = useState("");
  const [degreeSpecialization, setDegreeSpecialization] = useState("");
  const [degreeCGPA, setDegreeCGPA] = useState("");
  const [degreePassingYear, setDegreePassingYear] = useState("");
  // const [hscName, setHscName] = useState("");
  const [hscCollegeName, setHscCollegeName] = useState("");
  const [hscSpecialization, setHscSpecialization] = useState("");
  const [hscCGPA, setHscCGPA] = useState("");
  const [hscPassingYear, setHscPassingYear] = useState("");
  const [sscBoardName, setSscBoardName] = useState("");
  const [sscSchoolName, setSscSchoolName] = useState("");
  const [sscMedium, setSscMedium] = useState("");
  const [sscCGPA, setSscCGPA] = useState("");
  const [sscPassingYear, setSscPassingYear] = useState("");
  const [admissionDate, setAdmissionDate] = useState("");
  const [courseAdmitted, setCourseAdmitted] = useState("Java Full-Stack");
  const [batchCode, setBatchCode] = useState("Unicorn Batch");
  const [isAddressSame, setIsAddressSame] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isAddressSame) {
      setPermanentAddress((p) => presentAddress);
    }
    setIsLoading(true);

    let form = {
      firstName,
      middleName,
      lastName,
      gender,
      dob,
      aadharNumber,
      panNumber,
      mobileNumber,
      email,
      presentAddress,
      permanentAddress,
      fathersOccupation,
      mothersOccupation,
      fatherContact,
      motherContact,
      degreeName,
      degreeCollegeName,
      degreeSpecialization,
      degreeCGPA,
      degreePassingYear,
      hscCollegeName,
      hscSpecialization,
      hscCGPA,
      hscPassingYear,
      sscBoardName,
      sscSchoolName,
      sscMedium,
      sscCGPA,
      sscPassingYear,
      admissionDate,
      courseAdmitted,
      batchCode,
    };

    try {
      const rawResponse = await fetch("/api/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      console.log(rawResponse);
      if (rawResponse.ok) {
        alert("Form submitted succesfully");
        resetForm();
      } else {
        alert("Error occured");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setGender("");
    setDob("");
    setAadharNumber("");
    setPanNumber("");
    setMobileNumber("");
    setEmail("");
    setPresentAddress("");
    setPermanentAddress("");
    setFathersOccupation("");
    setMothersOccupation("");
    setFatherContact("");
    setMotherContact("");
    setDegreeName("");
    setDegreeCollegeName("");
    setDegreeSpecialization("");
    setDegreeCGPA("");
    setDegreePassingYear("");
    setHscName("");
    setHscCollegeName("");
    setHscSpecialization("");
    setHscCGPA("");
    setHscPassingYear("");
    setSscBoardName("");
    setSscSchoolName("");
    setSscMedium("");
    setSscCGPA("");
    setSscPassingYear("");
    setAdmissionDate("");
    setCourseAdmitted("Java Full-Stack");
    setBatchCode("Unicorn Batch");
    setIsAddressSame(false);
  };
  
  return (
    <form className="max-w-6xl md:mx-auto mx-4  my-8" onSubmit={handleSubmit}>
      <fieldset className="my-10">
        <legend className="font-bold my-8">Personal Details</legend>
        <div className="mb-5 flex-col flex md:flex-row w-full gap-2">
          <div className="w-full md:w-1/3">
            <label
              htmlFor="first-name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              First Name
            </label>
            <input
              type="text"
              id="first-name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Your name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="w-full md:w-1/3">
            <label
              htmlFor="middle-name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Middle Name
            </label>
            <input
              type="text"
              id="middle-name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Father's name"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
              required
            />
          </div>
          <div className="w-full md:w-1/3">
            <label
              htmlFor="last-name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Last Name
            </label>
            <input
              type="text"
              id="last-name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Surname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="mb-5 flex-col flex md:flex-row w-full gap-2">
          <fieldset className="flex w-full md:w-1/3 gap-12">
            <legend className="mb-2">Gender</legend>

            <div className="flex items-center mb-4">
              <input
                id="gender-option-1"
                type="radio"
                name="gender"
                value="Male"
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                // checked={gender === "Male"}
                onChange={(e) => setGender(e.target.value)}
              />
              <label
                htmlFor="gender-option-1"
                className="block ms-2  text-sm font-medium text-gray-900"
              >
                Male
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="gender-option-2"
                type="radio"
                name="gender"
                value="Female"
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 "
                // checked={gender === "Female"}
                onChange={(e) => setGender(e.target.value)}
              />
              <label
                htmlFor="gender-option-2"
                className="block ms-2 text-sm font-medium text-gray-900"
              >
                Female
              </label>
            </div>
          </fieldset>
          <div className="w-full md:w-1/3">
            <label
              htmlFor="dob"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Date of birth
            </label>
            <input
              type="date"
              id="dob"
              value={dob}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="dd/mm/yyyy"
              required
              onChange={(e) => setDob(e.target.value)}
            />
          </div>

          <div className="w-full md:w-1/3">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="example@gmail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-5 flex-col flex md:flex-row w-full gap-2">
          <div className="w-full md:w-1/3">
            <label
              htmlFor="mob-number"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Mobile Number
            </label>
            <input
              type="tel"
              id="mob-number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="9999999999"
              required
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/3">
            <label
              htmlFor="adhaar-number"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Adhaar Card
            </label>
            <input
              type="text"
              id="adhaar-number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Adhar card number"
              required
              value={aadharNumber}
              onChange={(e) => setAadharNumber(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/3">
            <label
              htmlFor="pan-number"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Pan Card
            </label>
            <input
              type="text"
              id="pan-number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Pan Card Number"
              required
              value={panNumber}
              onChange={(e) => setPanNumber(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-5 flex-col flex md:flex-row w-full gap-2">
          <div className="w-full md:w-1/3">
            <label
              htmlFor="current-address"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Current Address
            </label>
            <textarea
              type="text"
              id="current-address"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Current address"
              required
              value={presentAddress}
              onChange={(e) => setPresentAddress(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/3">
            <label
              htmlFor="permanent-address"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Permanent Address
            </label>
            <textarea
              type="text"
              id="permanent-address"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Permanent Address"
              required
              value={isAddressSame ? presentAddress : permanentAddress}
              onChange={(e) =>
                isAddressSame
                  ? setPermanentAddress(presentAddress)
                  : setPermanentAddress(e.target.value)
              }
            />
          </div>
          <div className="w-full md:w-1/3 flex items-center md:pl-4">
            <input
              id="same-address"
              type="checkbox"
              value={isAddressSame}
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              // required
              // checked={isAddressSame}
              onClick={() => setIsAddressSame((p) => !p)}
            />
            <label
              htmlFor="same-address"
              className="ms-2 text-sm font-medium text-gray-900"
            >
              Permanent address is same as Current address
            </label>
          </div>
        </div>

        <div className="mb-5 flex-col flex md:flex-row w-full gap-2">
          <div className="w-full md:w-1/3">
            <label
              htmlFor="fathers-occupation"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Fathers Occupation
            </label>
            <input
              type="text"
              id="fathers-occupation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="eg. Farmer"
              required
              value={fathersOccupation}
              onChange={(e) => setFathersOccupation(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/3">
            <label
              htmlFor="mothers-occupatoin"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Mothers Occupation
            </label>
            <input
              type="text"
              id="mothers-occupatoin"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="eg. Hosemaker"
              required
              value={mothersOccupation}
              onChange={(e) => setMothersOccupation(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/3">
            <label
              htmlFor="fathers-contact-number"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Father's contact number
            </label>
            <input
              type="tel"
              id="fathers-contact-number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="eg. 8888888888"
              required
              value={fatherContact}
              onChange={(e) => setFatherContact(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-5 flex-col flex md:flex-row w-full gap-2">
          <div className="w-full md:w-1/3">
            <label
              htmlFor="mothers-contact"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Mother's contact number
            </label>
            <input
              type="tel"
              id="mothers-contact"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="eg. 7777777777"
              required
              value={motherContact}
              onChange={(e) => setMotherContact(e.target.value)}
            />
          </div>
        </div>
      </fieldset>

      <fieldset className="my-10">
        <legend className="font-bold my-8">Educational Details</legend>
        <div className="mb-5 flex-col flex md:flex-row w-full gap-2">
          <div className="w-full md:w-1/3">
            <label
              htmlFor="degree"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Highest qualification (Degree)
            </label>
            <input
              type="text"
              id="degree"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="eg. B.tech"
              required
              value={degreeName}
              onChange={(e) => setDegreeName(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/3">
            <label
              htmlFor="degree-college"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Degree Collage Name
            </label>
            <input
              type="text"
              id="degree-college"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="eg. X Y Z College of engg."
              required
              value={degreeCollegeName}
              onChange={(e) => setDegreeCollegeName(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/3">
            <label
              htmlFor="degree-specialization"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Degree Specialization
            </label>
            <input
              type="tel"
              id="degree-specialization"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="eg. Computer science"
              required
              value={degreeSpecialization}
              onChange={(e) => setDegreeSpecialization(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-5 flex-col flex md:flex-row w-full gap-2">
          <div className="w-full md:w-1/3">
            <label
              htmlFor="degree-passing-year"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Passing year(Degree)
            </label>
            <input
              type="month"
              id="degree-passing-year"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="eg. B.tech"
              required
              value={degreePassingYear}
              onChange={(e) => setDegreePassingYear(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/3">
            <label
              htmlFor="degree-marks"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Percentage/CGPA
            </label>
            <input
              type="number"
              id="degree-marks"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="9.99"
              required
              value={degreeCGPA}
              onChange={(e) => setDegreeCGPA(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-5 flex-col flex md:flex-row w-full gap-2">
          <div className="w-full md:w-1/3">
            <label
              htmlFor="hsc-college"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              HSC/Diploma College
            </label>
            <input
              type="text"
              id="hsc-college"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="eg. X Y Z College."
              required
              value={hscCollegeName}
              onChange={(e) => setHscCollegeName(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/3">
            <label
              htmlFor="hsc-specialization"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              HSC/Diploma Specialization
            </label>
            <input
              type="text"
              id="hsc-specialization"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="eg. "
              required
              value={hscSpecialization}
              onChange={(e) => setHscSpecialization(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/3">
            <label
              htmlFor="hsc-marks"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Percentage/CGPA (HSC/Diploma)
            </label>
            <input
              type="number"
              id="hsc-marks"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="9.24"
              required
              value={hscCGPA}
              onChange={(e) => setHscCGPA(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-5 flex-col flex md:flex-row w-full gap-2">
          <div className="w-full md:w-1/3">
            <label
              htmlFor="hsc-passing-year"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Passing year(HSC/Diploma)
            </label>
            <input
              type="month"
              id="hsc-passing-year"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="eg. B.tech"
              required
              value={hscPassingYear}
              onChange={(e) => setHscPassingYear(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-5 flex-col flex md:flex-row w-full gap-2">
          <div className="w-full md:w-1/3">
            <label
              htmlFor="ssc-board"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              SSC Board
            </label>
            <input
              type="text"
              id="ssc-board"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="eg. Mah. Board of ..."
              required
              value={sscBoardName}
              onChange={(e) => setSscBoardName(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/3">
            <label
              htmlFor="ssc-school"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              SSC School Name
            </label>
            <input
              type="text"
              id="ssc-school"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="eg. X Y Z School."
              required
              value={sscSchoolName}
              onChange={(e) => setSscSchoolName(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/3">
            <label
              htmlFor="ssc-medium"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              SSC School Medium
            </label>
            <input
              type="text"
              id="ssc-medium"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="eg. English"
              required
              value={sscMedium}
              onChange={(e) => setSscMedium(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-5 flex-col flex md:flex-row w-full gap-2">
          <div className="w-full md:w-1/3">
            <label
              htmlFor="ssc-marks"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Percentage (SSC)
            </label>
            <input
              type="number"
              id="ssc-marks"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="eg. 80%"
              required
              value={sscCGPA}
              onChange={(e) => setSscCGPA(e.target.value)}
            />
          </div>

          <div className="w-full md:w-1/3">
            <label
              htmlFor="hsc-passing-year"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Passing year(SSC)
            </label>
            <input
              type="month"
              id="hsc-passing-year"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="eg. B.tech"
              required
              value={sscPassingYear}
              onChange={(e) => setSscPassingYear(e.target.value)}
            />
          </div>
        </div>
      </fieldset>

      <fieldset className="my-10">
        <legend className="font-bold my-8">Others</legend>
        <div className="mb-5 flex-col flex md:flex-row w-full gap-2">
          <div className="w-full md:w-1/3">
            <label
              htmlFor="date-of-admission"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Date of admissoin
            </label>
            <input
              type="date"
              id="date-of-admission"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="dd/mm/yyyy"
              required
              value={admissionDate}
              onChange={(e) => setAdmissionDate(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/3">
            <label
              htmlFor="ssc-school"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Course admitted
            </label>

            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              onChange={(e) => setCourseAdmitted(e.target.value)}
            >
              <option value="Java Full-Stack">Java Full-Stack</option>
              <option value="Python Full-Stack">Python Full-Stack</option>
              <option value="MERN Stack">MERN Stack</option>
            </select>

            {/* <input
            type="text"
            id="ssc-school"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="eg. X Y Z School."
            required
          /> */}
          </div>
          <div className="w-full md:w-1/3">
            <label
              htmlFor="ssc-medium"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Batch name
            </label>

            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              onChange={(e) => setBatchCode(e.target.value)}
            >
              <option value="Unicorn Batch">Unicorn Batch</option>
              <option value="Thunder Batch">Thunder Batch</option>
              <option value="Titan Batch">Titan Batch</option>
            </select>
            {/* <input
            type="number"
            id="ssc-medium"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="eg. English"
            required
          /> */}
          </div>
        </div>
      </fieldset>

      <div className="flex items-start my-8">
        <div className="flex items-center h-5">
          <input
            id="terms-conditions"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            required
          />
        </div>
        <label
          htmlFor="terms-conditions"
          className="ms-2 text-sm font-medium text-gray-900"
        >
          I have read and agree to the{" "}
          <Link className="text-blue-500 hover:text-blue-600" href="/">
            terms and conditions
          </Link>
        </label>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {isLoading ? "Loading ..." : "Submit"}
      </button>
    </form>
  );
};

export default Form;