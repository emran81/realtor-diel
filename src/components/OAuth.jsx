import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function OAuth() {
  return (
    <button className=" flex items-center justify-center w-full bg-red-600 text-white px-7 py-4 text-sm font-medium uppercase rounded shadow-md hover:bg-red-700 transition duration-200 ease-in-out hover:shadow-xl active:bg-red-900">
      <FcGoogle className="text-2x1 bg-white rounded-full mr-2" /> Continue with
      Google
    </button>
  );
}
