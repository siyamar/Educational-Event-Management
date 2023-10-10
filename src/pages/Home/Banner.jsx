import React from "react";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/3d-render-alumni-hands-throw-graduation-cap-air_107791-16565.jpg?size=626&ext=jpg&ga=GA1.1.1759640776.1696900181&semt=sph)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold">Knowledge Is Power</h1>
          <p className="mb-5">
          Education is a concise aphorism that emphasizes the inherent strength and advantage gained through the acquisition and application of information and understanding in various aspects of life, empowering individuals to make informed decisions and achieve their goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
