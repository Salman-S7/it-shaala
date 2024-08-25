import React from "react";

const EducationalDetails = ({
  degreeName,
  setDegreeName,
  degreeCollegeName,
  setDegreeCollegeName,
  degreeSpecialization,
  setDegreeSpecialization,
  degreeCGPA,
  setDegreeCGPA,
  degreePassingYear,
  setDegreePassingYear,
  hscCollegeName,
  setHscCollegeName,
  hscSpecialization,
  setHscSpecialization,
  hscCGPA,
  setHscCGPA,
  hscPassingYear,
  setHscPassingYear,
  sscBoardName,
  setSscBoardName,
  sscSchoolName,
  setSscSchoolName,
  sscMedium,
  setSscMedium,
  sscCGPA,
  setSscCGPA,
  sscPassingYear,
  setSscPassingYear,
}) => {
  return (
    <form>
      <fieldset className="my-10  no-scrollbar border-2 border-gray-600 rounded-2xl md:rounded-3xl p-[16px]">
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
    </form>
  );
};

export default EducationalDetails;
