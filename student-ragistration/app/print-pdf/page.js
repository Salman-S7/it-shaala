"use client";

import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import MyComponet from "./MyComponent";

const PrintPdf = () => {
  const componentRef = useRef();

  return (
    <>
      <div ref={componentRef} className="">
        <MyComponet />
      </div>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
    </>
  );
};

export default PrintPdf;
