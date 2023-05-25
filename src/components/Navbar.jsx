import { useState } from "react";

import Button from "./Button";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = ({ openChat }) => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[250px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-concertOne font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-primary1" : "text-dimWhite"
            } mr-10 `}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        <li className={`font-concertOne`}>
          <Button
            styles={
              "rounded-md bg-secondary-100 px-3.5 py-2.5 text-sm font-normal text-primary shadow-sm hover:bg-secondary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            }
            accion={openChat}
          />
        </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-concertOne font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-primary1"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <li className={`font-concertOne mb-4`}>
              <Button
                styles={
                  "rounded-md bg-secondary-100 px-3.5 py-2.5 text-sm font-normal text-primary shadow-sm hover:bg-secondary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                }
                accion={openChat}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
