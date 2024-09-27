"use client";

import React, { useEffect, useState } from "react";
import PersonalDetails from "./PersonalDetails";
import EducationalDetails from "./EducationalDetails";
import OtherDetails from "./OtherDetails";
import DocumentsUpload from "./DocumentsUpload";
import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
import { Alert, Snackbar } from "@mui/material";
import { useRouter } from "next/navigation";
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
  const [batchCode, setBatchCode] = useState("ISJ011");
  const [passportPhoto, setPassportPhoto] = useState();
  const [adhaarCard, setAdhaarCard] = useState();
  const [panCard, setPanCard] = useState();
  const [degreeMarksheet, setDegreeMarksheet] = useState();
  const [hscMarksheet, setHscMarksheet] = useState();
  const [sscMarksheet, setSscMarksheet] = useState();
  const [isAddressSame, setIsAddressSame] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAgreedToTerms, setIsAgreedToTerms] = useState(false);

  const [tab, setTAb] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [openSuccessBar, setOpenSuccessBar] = useState(false);

  const router = useRouter();

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
    } else if (tab === 3) {
      if (
        !passportPhoto ||
        !panCard ||
        !adhaarCard ||
        !isAgreedToTerms ||
        !degreeMarksheet ||
        !sscMarksheet ||
        !hscMarksheet
      ) {
        return true;
      } else {
        return false;
      }
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
    if (tab === 3) {
      if (someFieldsAreEmpty()) return setOpenSnackBar(true);
    }
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
        panCard,
        degreeMarksheet,
        hscMarksheet,
        sscMarksheet,
      ],
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
        resetForm();
        localStorage.setItem("data", JSON.stringify(formData));
        router.push("/print-pdf");
        setOpenSuccessBar(true);
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
    setBatchCode("ISJ011");
    setIsAddressSame(false);
    setTAb(0);
    setActiveStep(0);
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
      <div className="w-full pt-5 xl:px-44 px-4 fixed top-0 left-0 bg-white">
        <Stepper
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
          activeLineClassName="bg-[#164891]"
          lineClassName="bg-gray-200"
        >
          <Step
            activeClassName="bg-[#164891]"
            completedClassName="bg-[#164891]"
          >
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
          <Step
            activeClassName="bg-[#164891]"
            completedClassName="bg-[#164891]"
          >
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
          <Step
            activeClassName="bg-[#164891]"
            completedClassName="bg-[#164891]"
          >
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
          <Step
            activeClassName="bg-[#164891]"
            completedClassName="bg-[#164891]"
          >
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
          <Button
            onClick={handlePrev}
            disabled={isFirstStep}
            className="bg-[#164891]"
          >
            Prev
          </Button>
          <Button
            onClick={handleNext}
            disabled={isLastStep}
            className="bg-[#164891]"
          >
            Next
          </Button>
        </div>
      </div>

      <div className="max-w-6xl md:mx-auto mx-4  my-8 mt-52 no-scrollbar">
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
            degreeMarksheet={degreeMarksheet}
            setDegreeMarksheet={setDegreeMarksheet}
            hscMarksheet={hscMarksheet}
            setHscMarksheet={setHscMarksheet}
            sscMarksheet={sscMarksheet}
            setSscMarksheet={setSscMarksheet}
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
