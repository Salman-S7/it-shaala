import React from "react";

const PersonalDetails = ({
  firstName,
  setFirstName,
  middleName,
  setMiddleName,
  lastName,
  setLastName,
  gender,
  setGender,
  dob,
  setDob,
  aadharNumber,
  setAadharNumber,
  panNumber,
  setPanNumber,
  mobileNumber,
  setMobileNumber,
  email,
  setEmail,
  presentAddress,
  setPresentAddress,
  permanentAddress,
  setPermanentAddress,
  fathersOccupation,
  setFathersOccupation,
  mothersOccupation,
  setMothersOccupation,
  fatherContact,
  setFatherContact,
  motherContact,
  setMotherContact,
  isAddressSame,
  setIsAddressSame,
}) => {
  return (
    <form>
      <fieldset className="my-10 mt-[14vh] no-scrollbar">
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
    </form>
  );
};

export default PersonalDetails;
