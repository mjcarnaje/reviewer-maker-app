import React from "react";

const choice = ({ choice, KeyDown, changeValue }) => (
  <div className="flex">
    <div className=" self-center leading-4 mr-6">-</div>
    <input
      className=" font-poppins text-2.5xl font-light w-full focus:outline-none bg-transparent flex-grow"
      placeholder="Type your possible answer/s include the real answer"
      value={choice}
      type="text"
      onChange={changeValue}
      onKeyDown={KeyDown}
    />
  </div>
);

export default choice;
