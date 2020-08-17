import React from "react";

const AddButton = (props) => (
  <div className="flex items-center mt-8 ml-32">
    <button className="focus:outline-none">
      <svg
        viewBox="0 0 20 20"
        className="plus-circle w-16 h-16 text-custom-primary fill-current cursor-pointer"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
          clipRule="evenodd"
        ></path>
      </svg>
    </button>
    <span className=" text-3xl font-normal ml-6 font-poppins">
      Add Question
    </span>
  </div>
);

export default AddButton;
