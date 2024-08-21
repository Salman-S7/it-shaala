"use client";
import ReactToPrint from "react-to-print";
import React, { useRef } from "react";
import img from "../public/logo-02.png";
import img1 from "../public/logo-03.png";

// import { useState } from "react";
import Form from "./components/form";
import Image from "next/image";

export default function Home() {
  return (
    <main className="no-scrollbar">
      <Form />
      {/* <ComponentToPrint /> */}
    </main>
  );
}

const ComponentToPrint = () => {
  const componentRef = useRef();

  return (
    <div>
      <div ref={componentRef} className="">
        <MyComponet />
      </div>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
    </div>
  );
};

const MyComponet = () => {
  return (
    <div className="p-4">
      <div className="min-w-full flex items-center justify-end pr-10">
        <Image src={img} width={100} height="auto" alt="It Shaala Logo" />
      </div>
      
<hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
    </div>
  );
};
