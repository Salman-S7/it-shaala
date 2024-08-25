import React from "react";

const OtherDetails = ({
  admissionDate,
  setAdmissionDate,
  courseAdmitted,
  setCourseAdmitted,
  batchCode,
  setBatchCode,
}) => {
  return (
    <form>
      <fieldset className="my-10  border-2 border-gray-600 rounded-2xl md:rounded-3xl p-[16px]">
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
              value={courseAdmitted}
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
              value={batchCode}
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
    </form>
  );
};

export default OtherDetails;
