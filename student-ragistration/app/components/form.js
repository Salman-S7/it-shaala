"use client";

import React, { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import EducationalDetails from "./EducationalDetails";
import OtherDetails from "./OtherDetails";
import DocumentsUpload from "./DocumentsUpload";
import { Stepper, Step, Button } from "@material-tailwind/react";


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
  const [passportPhoto, setPassportPhoto] = useState(null);
  const [isAddressSame, setIsAddressSame] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const [tab, setTAb] = useState(0);
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => {
    setTAb(p => p+1)
    !isLastStep && setActiveStep((cur) => cur + 1);
  }
  const handlePrev = () => {
    setTAb((p) => p - 1);

    !isFirstStep && setActiveStep((cur) => cur - 1);
  } 
 


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isAddressSame) {
      setPermanentAddress((p) => presentAddress);
    }
    setIsLoading(true);

    let formData = {
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
      passportPhoto,
    };

    try {
      const rawResponse = await fetch("/api/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
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
    <>
      <div className="w-full py-4 px-8">
        <Stepper
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
        >
          <Step onClick={() => setActiveStep(0)}>1</Step>
          <Step onClick={() => setActiveStep(1)}>2</Step>
          <Step onClick={() => setActiveStep(2)}>3</Step>
          <Step onClick={() => setActiveStep(2)}>4</Step>
        </Stepper>
        <div className="mt-16 flex justify-between">
          <Button onClick={handlePrev} disabled={isFirstStep}>
            Prev
          </Button>
          <Button onClick={handleNext} disabled={isLastStep}>
            Next
          </Button>
        </div>
      </div>

      {/* <ul className="w-full flex items-center md:justify-center md:mx-auto px-4 h-[10vh] overflow-auto no-scrollbar gap-4 font-bold fixed top-0 left-0">
        <li
          className={`cursor-pointer ${
            tab == 0
              ? "bg-blue-500 text-white"
              : "bg-slate-400 hover:bg-slate-500 text-white"
          } px-8 py-4 rounded-lg`}
          onClick={() => setTab(0)}
        >
          Personal Details
        </li>
        <li
          className={`cursor-pointer ${
            tab == 1
              ? "bg-blue-500 text-white"
              : "bg-slate-400 hover:bg-slate-500 text-white"
          } px-8 py-4 rounded-lg`}
          onClick={() => setTab(1)}
        >
          Educational Details
        </li>
        <li
          className={`cursor-pointer ${
            tab == 2
              ? "bg-blue-500 text-white"
              : "bg-slate-400 hover:bg-slate-500 text-white"
          } px-8 py-4 rounded-lg`}
          onClick={() => setTab(2)}
        >
          {" "}
          Other Details
        </li>
        <li
          className={`cursor-pointer ${
            tab == 3
              ? "bg-blue-500 text-white"
              : "bg-slate-400 hover:bg-slate-500 text-white"
          } px-8 py-4 rounded-lg`}
          onClick={() => setTab(3)}
        >
          Upload Documents
        </li>
      </ul> */}
      <div
        className="max-w-6xl md:mx-auto mx-4  my-8 no-scrollbar"
        // onSubmit={handleSubmit}
      >
        {tab === 0 ? (
          <PersonalDetails
            firstName={firstName}
            setFirstName={setFirstName}
            middleName={middleName}
            setMiddleName={setMiddleName}
            lastName={lastName}
            setLastName={setLastName}
            gender={gender}
            setGender={setGender}
            dob={dob}
            setDob={setDob}
            aadharNumber={aadharNumber}
            setAadharNumber={setAadharNumber}
            panNumber={panNumber}
            setPanNumber={setPanNumber}
            mobileNumber={mobileNumber}
            setMobileNumber={setMobileNumber}
            email={email}
            setEmail={setEmail}
            presentAddress={presentAddress}
            setPresentAddress={setPresentAddress}
            permanentAddress={permanentAddress}
            setPermanentAddress={setPermanentAddress}
            fathersOccupation={fathersOccupation}
            setFathersOccupation={setFathersOccupation}
            mothersOccupation={mothersOccupation}
            setMothersOccupation={setMothersOccupation}
            fatherContact={fatherContact}
            setFatherContact={setFatherContact}
            motherContact={motherContact}
            setMotherContact={setMotherContact}
            setIsAddressSame={setIsAddressSame}
            isAddressSame={isAddressSame}
          />
        ) : (
          <></>
        )}

        {tab === 1 ? (
          <EducationalDetails
            degreeName={degreeName}
            setDegreeName={setDegreeName}
            degreeCollegeName={degreeCollegeName}
            setDegreeCollegeName={setDegreeCollegeName}
            degreeSpecialization={degreeSpecialization}
            setDegreeSpecialization={setDegreeSpecialization}
            degreeCGPA={degreeCGPA}
            setDegreeCGPA={setDegreeCGPA}
            degreePassingYear={degreePassingYear}
            setDegreePassingYear={setDegreePassingYear}
            hscCollegeName={hscCollegeName}
            setHscCollegeName={setHscCollegeName}
            hscSpecialization={hscSpecialization}
            setHscSpecialization={setHscSpecialization}
            hscCGPA={hscCGPA}
            setHscCGPA={setHscCGPA}
            hscPassingYear={hscPassingYear}
            setHscPassingYear={setHscPassingYear}
            sscBoardName={sscBoardName}
            setSscBoardName={setSscBoardName}
            sscSchoolName={sscSchoolName}
            setSscSchoolName={setSscSchoolName}
            sscMedium={sscMedium}
            setSscMedium={setSscMedium}
            sscCGPA={sscCGPA}
            setSscCGPA={setSscCGPA}
            sscPassingYear={sscPassingYear}
            setSscPassingYear={setSscPassingYear}
          />
        ) : (
          <></>
        )}

        {tab === 2 ? (
          <OtherDetails
            admissionDate={admissionDate}
            setAdmissionDate={setAdmissionDate}
            courseAdmitted={courseAdmitted}
            setCourseAdmitted={setCourseAdmitted}
            batchCode={batchCode}
            setBatchCode={setBatchCode}
          />
        ) : (
          <></>
        )}

        {tab === 3 ? (
          <DocumentsUpload
            handleSubmit={handleSubmit}
            passportPhoto={passportPhoto}
            setPassportPhoto={setPassportPhoto}
            isAddressSame={isAddressSame}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Form;
