import React, { useRef } from "react";
import logo from "../assets/portfolio-logo.png";

const Home = () => {
  const ref = useRef(null);
  const navHandler = () => {
    ref.current.classList.toggle("translate-y-[100%]");
  };

  const deskNavHandler = (e) => {
    ref.current.classList.toggle("translate-y-[100%]");
    e.target.classList.toggle("fa-xmark");
  };

  return (
    <div
      style={{ backgroundColor: "rgb(15 23 42/0.98)" }}
      className="h-[100vh] w-full flex justify-center items-center relative overflow-hidden z-0"
    >
      <div className="container py-4 flex flex-col justify-center md:w-2/3 md:m-auto md:py-32">
        <div className="image w-44 relative mx-auto my-4">
          <span
            className="absolute border-[8px] rounded-full w-full h-full animate-spin-slow border-l-4 border-r-4 border-r-[rgb(144 226 174 /0.98)]"
            style={{
              borderColor: "rgb(144,226,174)",
              borderImage:
                " linearGradient(90deg, rgba(144,226,174,0.4) 0%, rgba(144,226,174,0.01) 50%)",
            }}
          ></span>
          <img className="rounded-full w-full m-1 pr-1 " src={logo} alt="" />
        </div>
        <div className="content mx-5 py-5 text-center">
          <h1 className="text-4xl font-bold italic text-white md:text-6xl">
            Hi, I am
            <span
              className="my-2 font-bold tracking-wide block md:inline-block md:ml-3"
              style={{
                color: "rgb(144,226,174)",
              }}
            >
              Owais Idrisi
            </span>
          </h1>
          <p className="py-4 text-lg md:leading-9 md:text-[22px] tracking-wide font-medium">
            I am a frontend web developer. I can provide clean code and pixel
            perfect design. I also make website more & more interactive with web
            animations.
          </p>
          <div className="icons flex gap-3 justify-center my-4">
            <div className="icon border border-gray-500 bg-[rgb(15,23,42)] w-12 h-12 grid place-items-center mx-1 rounded-lg cursor-pointer transition delay-500 hover:bg-[rgb(81,226,174)] hover:text-black hover:-translate-y-1">
              <i className="fa-brands fa-facebook-f text-xl"></i>
            </div>
            <div className="icon border border-gray-500 bg-[rgb(15,23,42)] w-12 h-12 grid place-items-center mx-1 rounded-lg cursor-pointer transition-all hover:bg-[rgb(81,226,174)] hover:text-black hover:-translate-y-1">
              <i className="fa-brands fa-twitter text-xl"></i>
            </div>
            <div className="icon border border-gray-500 bg-[rgb(15,23,42)] w-12 h-12 grid place-items-center mx-1 rounded-lg cursor-pointer transition-all hover:bg-[rgb(81,226,174)] hover:text-black hover:-translate-y-1">
              <i className="fa-brands fa-github text-xl"></i>
            </div>
            <div className="icon border border-gray-500 bg-[rgb(15,23,42)] w-12 h-12 grid place-items-center mx-1 rounded-lg cursor-pointer transition-all hover:bg-[rgb(81,226,174)] hover:text-black hover:-translate-y-1">
              <i className="fa-brands fa-linkedin text-xl"></i>
            </div>
            <div className="icon border border-gray-500 bg-[rgb(15,23,42)] w-12 h-12 grid place-items-center mx-1 rounded-lg cursor-pointer transition-all hover:bg-[rgb(81,226,174)] hover:text-black hover:-translate-y-1">
              <i className="fa-brands fa-instagram text-xl"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="desk-sidemenu hidden lg:flex flex-col fixed left-0 top-0 z-10 h-full w-20 justify-between py-8 items-center">
        <div className="logo">
          <img src={logo} alt="" className="rounded-full" />
        </div>
        <div className="icon cursor-pointer" onClick={navHandler}>
          <i className="fa fa-bars text-2xl"></i>
        </div>

        <div
          className="footer rotate-180 text-left"
          style={{ writingMode: "vertical-rl" }}
        >
          <p>
            @2022
            <span className="text-white m-2">Owais Idrisi</span>
          </p>
        </div>
      </div>

      {/* For Mobile nav icon */}
      <div
        className="arrow cursor-pointer mx-2 fixed top-[47vh] left-2  bg-[#203B40] h-12 w-10 grid place-items-center text-3xl md:hidden"
        onClick={navHandler}
      >
        <i className="fa-solid fa-arrow-right text-[#72E2AE] text-2xl"></i>
      </div>

      <nav
        style={{
          width: "100%",
          height: "100vh",
          position: "fixed",
          top: "0",
          left: "0",
          background: "rgb(11 18 25)",
        }}
        ref={ref}
        className=" mobile-nav transition-all text-white z-[70%] translate-y-[100%] "
      >
        <div className="mobile-nav-top flex justify-between px-6 py-4 items-center lg:hidden">
          <div className="logo text-6xl text-[#72E2AE]">
            Owais<span className="text-white">.</span>
          </div>
          <div
            onClick={deskNavHandler}
            className="cross-icon cursor-pointer grid place-items-center rounded-full w-8 h-8 bg-transparent transition-all hover:bg-white hover:text-black"
          >
            <i className="fa fa-xmark fa-xl"></i>
          </div>
        </div>
        <ol className="list-decimal navList pt-24 flex flex-col justify-center items-center gap-6 uppercase text-2xl text-center tracking-wide lg:w-[80%] lg:mx-auto lg:h-full lg:flex-row lg:justify-around">
          {/* // navlist */}
          <li className="navlist hover:line-through transition-all">
            <a href="/" className="navLinks">
              Home
            </a>
          </li>

          {/* // navlist */}
          <li className="navlist hover:line-through">
            <a href="/" className="navLinks">
              About
            </a>
          </li>

          {/* // navlist */}
          <li className="navlist hover:line-through">
            <a href="/" className="navLinks">
              Resume
            </a>
          </li>

          {/* // navlist */}
          <li className="navlist hover:line-through ">
            <a href="/" className="navLinks">
              Works
            </a>
          </li>
          <li className="navlist hover:line-through">
            <a href="/" className="navLinks">
              Contact
            </a>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Home;
