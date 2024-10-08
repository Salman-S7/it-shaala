import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const DocumentsUpload = ({
  handleSubmit,
  setPassportPhoto,
  setAdhaarCard,
  setPanCard,
  isLoading,
  isAgreedToTerms,
  setIsAgreedToTerms,
  setDegreeMarksheet,
  setHscMarksheet,
  setSscMarksheet,
}) => {
  const [open, setOpen] = React.useState(false);
  const [isFileAllowed, setIsFileAllowed] = React.useState(false);

  const handleClickOpen = () => () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);

  function handlePassportChange(e, docType) {
    const file = e.target.files[0];

    if (!file) return;

    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];

    if (!allowedTypes.includes(file.type)) {
      alert("Only JPEG, JPG, and PNG files are allowed.");
      e.target.value = "";
      return;
    }

    const maxSizeInKB = 150;
    if (file.size / 1024 > maxSizeInKB) {
      alert("The size of the images should be less than 150KB");
      e.target.value = "";
      return;
    }

    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      let base64 = fileReader.result.split("base64,")[1];

      let obj = {
        base64,
        type: file.type,
        name: file.name,
      };

      switch (docType) {
        case "passportPhoto":
          setPassportPhoto(obj);
          break;
        case "adhaarCard":
          setAdhaarCard(obj);
          break;
        case "panCard":
          setPanCard(obj);
          break;
        case "degreeMarksheet":
          setDegreeMarksheet(obj);
          break;
        case "hscMarksheet":
          setHscMarksheet(obj);
          break;
        case "sscMarksheet":
          setSscMarksheet(obj);
          break;
      }
    };
    fileReader.readAsDataURL(file);
  }

  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <form className=" border-2 border-gray-600 rounded-2xl md:rounded-3xl p-[16px]">
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Terms and conditions</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <ol className="list-decimal list-inside">
              <p className="my-8 font-bold">IT Shaala Rules & Policies </p>
              <li className="my-4">
                {/* <span className="font-semibold"> */}
                Non-Refundable Fees: -{/* </span> */}
                All fees paid to IT Shaala are strictly non-refundable &
                non-tranferrable under any circumstances.
              </li>
              <li className="my-4">
                Placement Requirements: - A minimum of 90% attendance is
                mandatory to qualify for placement assistance. - Interview calls
                will commence after the completion of half of the syllabus.
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
                stipulated time as per the payment schedule. - Failure to pay
                fees on time will result in the suspension(hold/break) of class
                access until payment is made. - Fees 1st installment should be
                clear before the batch starts - If your installment gets delayed
                after the due date , batch & other services will be stopped
                until installment Is cleared.
              </li>
              <li className="my-4">
                Batch update Policy: - If student want to change batch he will
                be allowed only once. - On LMS If student change his/her batch
                offline then he will be not allowed to both batch recordings.
                These rules ensure clarity and maintain a professional
                environment at IT Shaala. Schemes if any, are of Company (IT
                Shaala) Alt rights reserved by Company for cancellation/delay.
              </li>
            </ol>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          {/* <Button onClick={handleClose}>Subscribe</Button> */}
        </DialogActions>
      </Dialog>
      <p className="italic text-lg">
        <span className="text-red-400">*</span> All the documetns should be in
        <strong> png/jpg/JPEG format</strong> and{" "}
        <strong>less than 150KB</strong> in size.
      </p>
      <fieldset className="my-10 ">
        <legend className="font-bold my-8">Documents</legend>
        <div className="mb-5 flex-col flex md:flex-row w-full gap-2">
          <div className="w-full md:w-1/3">
            <label
              className="block mb-2 text-sm font-medium text-gray-900"
              htmlFor="passport_photo_input"
            >
              Passport photo
            </label>
            <input
              className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
    file:bg-gray-300 file:border-0
    file:me-4
    file:py-3 file:px-4"
              aria-describedby="passport_photo_input_help"
              id="passport_photo_input"
              type="file"
              required
              onChange={(e) => handlePassportChange(e, "passportPhoto")}
            />
            {/* <p
              className="mt-1 text-sm text-gray-500"
              id="passport_photo_input_help"
            >
              PNG, JPG (MAX. 2MB).
            </p> */}
          </div>
          <div className="w-full md:w-1/3">
            <label
              className="block mb-2 text-sm font-medium text-gray-900"
              htmlFor="aadhar_soft_copy_input"
            >
              Aadhaar card soft copy
            </label>
            <input
              className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
    file:bg-gray-300 file:border-0
    file:me-4
    file:py-3 file:px-4"
              aria-describedby="aadhar_soft_copy_input_help"
              id="aadhar_soft_copy_input"
              type="file"
              required
              onChange={(e) => handlePassportChange(e, "adhaarCard")}
            />
            {/* <p
              className="mt-1 text-sm text-gray-500"
              id="aadhar_soft_copy_input_help"
            >
              PNG, JPG (MAX. 2MB).
            </p> */}
          </div>
          <div className="w-full md:w-1/3">
            <label
              className="block mb-2 text-sm font-medium text-gray-900"
              htmlFor="pan_soft_copy_input"
            >
              Pan card soft copy
            </label>
            <input
              className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
    file:bg-gray-300 file:border-0
    file:me-4
    file:py-3 file:px-4"
              aria-describedby="pan_soft_copy_input_help"
              id="pan_soft_copy_input"
              type="file"
              required
              onChange={(e) => handlePassportChange(e, "panCard")}
            />
            {/* <p
              className="mt-1 text-sm text-gray-500"
              id="pan_soft_copy_input_help"
            >
              PNG, JPG (MAX. 2MB).
            </p> */}
          </div>
        </div>

        <div className="mb-5 flex-col flex md:flex-row w-full gap-2">
          <div className="w-full md:w-1/3">
            <label
              className="block mb-2 text-sm font-medium text-gray-900"
              htmlFor="degree_marksheet"
            >
              Degree marksheet
            </label>
            <input
              className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
    file:bg-gray-300 file:border-0
    file:me-4
    file:py-3 file:px-4"
              aria-describedby="degree_marksheet_help"
              id="degree_marksheet"
              type="file"
              required
              onChange={(e) => handlePassportChange(e, "degreeMarksheet")}
            />
            {/* <p
              className="mt-1 text-sm text-gray-500"
              id="degree_marksheet_help"
            >
              PNG, JPG (MAX. 2MB).
            </p> */}
          </div>
          <div className="w-full md:w-1/3">
            <label
              className="block mb-2 text-sm font-medium text-gray-900"
              htmlFor="hsc_marksheet"
            >
              HSC/Diploma marksheet
            </label>
            <input
              className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
    file:bg-gray-300 file:border-0
    file:me-4
    file:py-3 file:px-4"
              aria-describedby="hsc_marksheet_help"
              id="hsc_marksheet"
              type="file"
              required
              onChange={(e) => handlePassportChange(e, "hscMarksheet")}
            />
            {/* <p className="mt-1 text-sm text-gray-500" id="hsc_marksheet_help">
              PNG, JPG (MAX. 2MB).
            </p> */}
          </div>
          <div className="w-full md:w-1/3">
            <label
              className="block mb-2 text-sm font-medium text-gray-900"
              htmlFor="ssc_marksheet"
            >
              SSC marksheet
            </label>
            <input
              className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
    file:bg-gray-300 file:border-0
    file:me-4
    file:py-3 file:px-4"
              aria-describedby="ssc_marksheet_help"
              id="ssc_marksheet"
              type="file"
              required
              onChange={(e) => handlePassportChange(e, "sscMarksheet")}
            />
            {/* <p className="mt-1 text-sm text-gray-500" id="ssc_marksheet_help">
              PNG, JPG, (MAX. 2MB).
            </p> */}
          </div>
        </div>
      </fieldset>

      <div className="flex items-start my-8">
        <div className="flex items-center h-5">
          <input
            id="terms-conditions"
            type="checkbox"
            checked={isAgreedToTerms}
            onChange={(e) => setIsAgreedToTerms(e.target.checked)}
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            required
          />
        </div>
        <label
          htmlFor="terms-conditions"
          className="ms-2 text-sm font-medium text-gray-900"
        >
          I have read and agree to the{" "}
          <span
            className="ms-2 text-sm font-medium text-blue-400 hover:text-blue-700 cursor-pointer"
            onClick={handleClickOpen()}
          >
            terms and conditions
          </span>
        </label>
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {isLoading ? "Loading ..." : "Submit"}
      </button>
    </form>
  );
};

export default DocumentsUpload;
