import React from "react";
import Link from "next/link";

const DocumentsUpload = ({
  handleSubmit,
  passportPhoto,
  setPassportPhoto,
  isAddressSame,
  isLoading,
}) => {
  return (
    <>
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
              onChange={(e) => {
                setPassportPhoto(e.target.files[0]);
              }}
            />
            <p
              className="mt-1 text-sm text-gray-500"
              id="passport_photo_input_help"
            >
              PNG, JPG (MAX. 2MB).
            </p>
          </div>

          {/* <div className="w-full md:w-1/3">
            <label
              className="block mb-2 text-sm font-medium text-gray-900"
              htmlFor="adhaar_softcopy_input"
            >
              Adhaar card Soft copy
            </label>
            <input
              className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
              file:bg-gray-300 file:border-0
                file:me-4
                file:py-3 file:px-4"
              aria-describedby="adhaar_softcopy_input_help"
              id="adhaar_softcopy_input"
              type="file"
              required
            />
            <p
              className="mt-1 text-sm text-gray-500"
              id="adhaar_softcopy_input_help"
            >
              PNG, JPG (MAX. 2MB).
            </p>
          </div>

          <div className="w-full md:w-1/3">
            <label
              className="block mb-2 text-sm font-medium text-gray-900"
              htmlFor="pan_soft_copy_input"
            >
              Pan card Soft copy
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
            />
            <p
              className="mt-1 text-sm text-gray-500"
              id="pan_soft_copy_input_help"
            >
              PNG, JPG (MAX. 2MB).
            </p>
          </div> */}
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
        onClick={handleSubmit}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {isLoading ? "Loading ..." : "Submit"}
      </button>
    </>
  );
};

export default DocumentsUpload;
