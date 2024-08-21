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
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);

  function handlePassportChange(e, docType){
    console.log(docType);
    const fileReader = new FileReader();

    const passPort = e.target.files[0];

    fileReader.onloadend = () => {

      let base64 = fileReader.result.split("base64,")[1];

      let obj = {
        base64,
        type: passPort.type,
        name: passPort.name,
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
      }

    };
    fileReader.readAsDataURL(passPort);
  };

  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <form>
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
            {[...new Array(50)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
              )
              .join("\n")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          {/* <Button onClick={handleClose}>Subscribe</Button> */}
        </DialogActions>
      </Dialog>
      <fieldset className="my-10">
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
            <p
              className="mt-1 text-sm text-gray-500"
              id="passport_photo_input_help"
            >
              PNG, JPG (MAX. 2MB).
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <label
              className="block mb-2 text-sm font-medium text-gray-900"
              htmlFor="aadhar_soft_copy_input"
            >
              Aadhar card soft copy
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
            <p
              className="mt-1 text-sm text-gray-500"
              id="aadhar_soft_copy_input_help"
            >
              PNG, JPG (MAX. 2MB).
            </p>
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
            <p
              className="mt-1 text-sm text-gray-500"
              id="pan_soft_copy_input_help"
            >
              PNG, JPG (MAX. 2MB).
            </p>
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
        </label>
        <span
          className="ms-2 text-sm font-medium text-blue-400 hover:text-blue-700 cursor-pointer"
          onClick={handleClickOpen()}
        >
          terms and conditions
        </span>
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
