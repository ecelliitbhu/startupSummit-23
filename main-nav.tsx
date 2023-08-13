import React, { FunctionComponent } from "react";

interface OwnProps {}

const nav = [
  {
    name: "Speakers",
    link: "",
  },
  {
    name: "Partners",
    link: "",
  },
  {
    name: "Events",
    link: "",
  },
  {
    name: "Agenda",
    link: "",
  },
];

type Props = OwnProps;

const Navbar: FunctionComponent<Props> = (props) => {
  return (
    <header
      className={"w-[100%] sticky top-8 max-w-[67.5rem] m-auto lg:p-0 px-4"}
    >
      <nav className="w-full rounded-full z-10 bg-gray-900 justify-center absolute sm:absolute fixed">
        <div className="m-auto px-2 md:px-12 lg:px-7">
          <div className="flex flex-wrap items-center justify-between py-4 gap-6 md:py-4 md:gap-0 relative">
            <input
              type="checkbox"
              name="toggle_nav"
              id="toggle_nav"
              className="hidden peer"
            />
            <div className="w-full px-6 flex justify-between lg:w-max md:px-0">
              <a
                href="#"
                aria-label="logo"
                className="flex space-x-2 items-center"
              >
                <div aria-hidden="true" className="flex space-x-1">
                  <div className="h-4 w-4 rounded-full bg-gray-900 dark:bg-white"></div>
                  <div className="h-6 w-2 bg-teal-500"></div>
                </div>
                <span className="text-2xl font-bold text-green-900 dark:text-white">
                  E-Cell
                </span>
              </a>

              <div className="flex items-center lg:hidden max-h-10">
                <label
                  role="button"
                  htmlFor="toggle_nav"
                  aria-label="humburger"
                  id="hamburger"
                  className="relative  p-6 -mr-6"
                >
                  <div
                    aria-hidden="true"
                    id="line"
                    className="m-auto h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    id="line2"
                    className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"
                  ></div>
                </label>
              </div>
            </div>

            <div
              className="hidden absolute top-full transition translate-y-1 lg:peer-checked:translate-y-0 lg:translate-y-0 left-0 
                    lg:top-0 lg:relative peer-checked:flex w-full 
                    lg:flex lg:flex-row flex-col
                    flex-wrap justify-end items-center 
                    gap-6 p-6 rounded-xl 
                    bg-white dark:bg-gray-900 lg:gap-0 
                    lg:p-0  
                    lg:bg-transparent lg:w-auto"
            >
              <div className="text-gray-400 dark:text-gray-300 lg:pr-4 lg:w-auto w-full lg:pt-0">
                <ul
                  className=" 
                            tracking-wide 
                            font-medium 
                            text-sm flex-col flex 
                            lg:flex-row
                            gap-6 lg:gap-0"
                >
                  {nav.map((navigator, index) => {
                    return (
                      <li key={index}>
                        <a
                          href={navigator.link}
                          className="block md:px-4 hover:text-white transition ease-in-out"
                        >
                          <span>{navigator.name}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="w-full lg:pl-2 space-y-2 border-teal-200 lg:w-auto lg:space-y-0 sm:w-max lg:border-l">
                <button
                  type="button"
                  title="Start buying"
                  className="w-full py-3 px-6 text-center rounded-full transition dark:active:bg-teal-900 dark:focus:bg-gray-800 active:bg-teal-200 focus:bg-teal-100 sm:w-max"
                >
                  <span className="block text-white hover:border-1 hover:rounded-full dark:text-teal-300 font-semibold text-sm">
                    Sign up
                  </span>
                </button>
                <button
                  type="button"
                  title="Start buying"
                  className="w-full py-3 hover:curs px-6 text-center rounded-full transition bg-primary-foreground hover:bg-teal-100 active:bg-teal-400 focus:bg-teal-300 sm:w-max"
                >
                  <span className="block text-teal-900 font-semibold text-sm">
                    Register
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
