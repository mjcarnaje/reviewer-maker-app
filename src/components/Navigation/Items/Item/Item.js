import React from "react";

const navigationItem = (props) => {
  const classesConstant = "block lg:inline-block px-4 py-0 font-poppins";
  let classes;
  if (props.active) {
    classes = `${classesConstant} bg-custom-primary rounded text-white mr-20`;
  } else if (props.last) {
    classes = `${classesConstant} hover:bg-custom-primary hover:text-white hover:rounded`;
  } else {
    classes = `${classesConstant} hover:bg-custom-primary hover:text-white hover:rounded mr-20`;
  }

  return (
    <a href={props.link} className={classes}>
      {props.children}
    </a>
  );
};
export default navigationItem;
