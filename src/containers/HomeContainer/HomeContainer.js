import React, { Component } from "react";

import Auxiliary from "../../hoc/Auxiliary";
import image01 from "../../assets/svg/image.svg";

class HomeContainer extends Component {
  render() {
    return (
      <Auxiliary>
        <div className="flex md:flex-row flex-col md:height w-full bg-gray-100 pt-24">
          <div className=" flex flex-col md:flex-1 md:pl-40 pl-8 md:py-40 py-8 md:justify-between justify-evenly height">
            <h1 className=" text-7xl sm:text-9xl leading-none font-montserrat font-light pt-12">
              All-in-one online reviewer app maker
            </h1>
            <p className=" text-4xl font-light font-poppins pb-32">
              Make your own question and practice, for free.
            </p>
            <div>
              <button className=" outline-none border-0 block bg-custom-primary text-4xl font-poppins text-white font-medium py-4 px-12 rounded-lg focus:outline-none active:bg-indigo-600 hover:bg-indigo-400">
                Get Started
              </button>
            </div>
          </div>
          <div className="flex-1 h-screen w-full flex justify-center align-middle ">
            <img
              className=" w-full md:w-10/12 lg:w-full h-auto "
              src={image01}
              alt="male-study"
            />
          </div>
        </div>
      </Auxiliary>
    );
  }
}

export default HomeContainer;
