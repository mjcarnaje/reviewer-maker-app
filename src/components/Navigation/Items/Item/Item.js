import React from "react";

const navigationItem = (props) => (
  <li className="flex-1 items-center mr-20">
    <a
      href={props.link}
      className={
        props.active
          ? "no-underline h-full text-2.5xl px-4 py-0 font-poppins bg-custom-primary rounded text-white"
          : "no-underline h-full text-2.5xl px-4 py-0 font-poppins hover:bg-custom-primary hover:text-white hover:rounded"
      }
    >
      {props.children}
    </a>
  </li>
);
export default navigationItem;
