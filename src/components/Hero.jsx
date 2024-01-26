import React from "react";
import coding from "../assets/coding.gif";
const Hero = () => {
  return (
    <div className="h-full w-full pt-32">
      <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-center w-full h-full px-4 mx-auto text-center md:px-20">
        <div>
          <h1 className="text-4xl text-primary font-bold md:text-6xl">
            {`DEV `}
            <span className="text-black">{`| STACKS`}</span>
          </h1>
          <p className="mt-4 text-lg text-black text-justify">
            Unleash Your Coding Potential for Free! Dive into our handpicked
            selection of resources, tutorials, and expert tips. Ignite your
            coding creativity and build without boundaries!
          </p>
        </div>
        <div>
          <img
            className="w-56 md:w-auto md:max-w-96 object-contain"
            src={coding}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
