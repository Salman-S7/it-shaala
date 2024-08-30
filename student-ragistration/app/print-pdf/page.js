"use client";

import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import MyComponet from "./MyComponent";

const PrintPdf = () => {
  const componentRef = useRef();

  return (
    <>
      <div className="text-center flex justify-center items-center">
        <div
          className="bg-green-500 hover:bg-green-600
         font-bold text-white  w-1/2 md:w-fit py-5 px-8
         my-10 rounded-lg"
        >
          <ReactToPrint
            trigger={() => <button>Download PDF</button>}
            content={() => componentRef.current}
          />
        </div>
      </div>
      <div ref={componentRef} className="">
        <MyComponet />
      </div>
      <div className="text-center flex justify-center items-center">
        <div
          className="bg-green-500 hover:bg-green-600
         font-bold text-white  w-1/2 md:w-fit py-5 px-8
         my-10 rounded-lg"
        >
          <ReactToPrint
            trigger={() => <button>Download PDF</button>}
            content={() => componentRef.current}
          />
        </div>
      </div>
    </>
  );
};

export default PrintPdf;
