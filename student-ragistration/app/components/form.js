"use client";

import React, { useEffect, useState } from "react";
import PersonalDetails from "./PersonalDetails";
import EducationalDetails from "./EducationalDetails";
import OtherDetails from "./OtherDetails";
import DocumentsUpload from "./DocumentsUpload";
import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
import { Alert, Snackbar } from "@mui/material";

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
  const [adhaarCard, setAdhaarCard] = useState(null);
  const [panCard, setPanCard] = useState(null);
  const [isAddressSame, setIsAddressSame] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAgreedToTerms, setIsAgreedToTerms] = useState(false);

  const [tab, setTAb] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [openSuccessBar, setOpenSuccessBar] = useState(false);

  const someFieldsAreEmpty = () => {
    if (tab === 0) {
      if (
        !firstName ||
        !middleName ||
        !lastName ||
        !gender ||
        !dob ||
        !aadharNumber ||
        !panNumber ||
        !mobileNumber ||
        !email ||
        !presentAddress ||
        !fathersOccupation ||
        !mothersOccupation ||
        !fatherContact ||
        !motherContact
      ) {
        return true;
      } else {
        return false;
      }
    } else if (tab === 1) {
      if (
        !degreeName ||
        !degreeCollegeName ||
        !degreeSpecialization ||
        !degreeCGPA ||
        !degreePassingYear ||
        !hscCollegeName ||
        !hscSpecialization ||
        !hscCGPA ||
        !hscPassingYear ||
        !sscBoardName ||
        !sscSchoolName ||
        !sscMedium ||
        !sscCGPA ||
        !sscPassingYear
      ) {
        return true;
      } else {
        return false;
      }
    } else if (tab === 2) {
      if (!admissionDate || !courseAdmitted || !batchCode) {
        return true;
      } else {
        return false;
      }
    } else if(tab === 3) {
      if (!passportPhoto || !panCard || !adhaarCard) return true;
      return false;
    }
  };

  const handleNext = () => {
    switch (tab) {
      case 0:
        if (someFieldsAreEmpty()) return setOpenSnackBar(true);
        break;
      case 1:
        if (someFieldsAreEmpty()) return setOpenSnackBar(true);
        break;
      case 2:
        if (someFieldsAreEmpty()) return setOpenSnackBar(true);
        break;
      case 3:
        if (someFieldsAreEmpty()) return setOpenSnackBar(true);
        break;   
    }
    setTAb((p) => p + 1);
    !isLastStep && setActiveStep((cur) => cur + 1);
  };
  const handlePrev = () => {
    setTAb((p) => p - 1);
    !isFirstStep && setActiveStep((cur) => cur - 1);
  };

  useEffect(() => {
    if (isAddressSame) {
      setPermanentAddress((p) => "Same as present address");
    }
  }, [isAddressSame]);

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      docs: [
        passportPhoto,
        adhaarCard,
        panCard
      ]
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

      if (rawResponse.ok) {
        setOpenSuccessBar(true);
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
    setTAb(0);
    setAdhaarCard(null);
    setPanCard(null);
    setPassportPhoto(null);
    setIsAgreedToTerms(false);

  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackBar(false);
  };
  const handleSuccessClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSuccessBar(false);
  };
  return (
    <>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity="warning"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Form Incomplete! ( Fill all the fields to continue. )
        </Alert>
      </Snackbar>
      <Snackbar
        open={openSuccessBar}
        autoHideDuration={6000}
        onClose={handleSuccessClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleSuccessClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Succesfully submitted form.
        </Alert>
      </Snackbar>
      <div className="w-full pt-10 xl:px-44 px-4">
        <Stepper
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
        >
          <Step>
            1
            <div className="absolute -bottom-[1.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 0 ? "blue-gray" : "gray"}
                className="hidden md:block"
              >
                Personal Details
              </Typography>
            </div>
          </Step>
          <Step>
            2
            <div className="absolute -bottom-[1.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 0 ? "blue-gray" : "gray"}
                className="hidden md:block"
              >
                Educational Details
              </Typography>
            </div>
          </Step>
          <Step>
            3
            <div className="absolute -bottom-[1.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 0 ? "blue-gray" : "gray"}
                className="hidden md:block"
              >
                Other Details
              </Typography>
            </div>
          </Step>
          <Step>
            4
            <div className="absolute -bottom-[1.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 0 ? "blue-gray" : "gray"}
                className="hidden md:block"
              >
                Document Upload
              </Typography>
            </div>
          </Step>
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
            adhaarCard={adhaarCard}
            setAdhaarCard={setAdhaarCard}
            panCard={panCard}
            setPanCard={setPanCard}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            isAgreedToTerms={isAgreedToTerms}
            setIsAgreedToTerms={setIsAgreedToTerms}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Form;
