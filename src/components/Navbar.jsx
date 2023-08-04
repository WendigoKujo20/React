import React from "react";
import logo from "../img/libreria.png";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const NavItem = ({ link, text }) => {
    const isActive = location.pathname === link || (location.pathname === "/" && link === "/");

    return (
      <li
        className={`mx-3 ${isActive ? "border-b-2 border-black" : ""}`}
      >
        <Link to={link}>
          <h1 className="font-montserrat text-xl text-white font-bold hover:text-gray-300">
            {text}
          </h1>
        </Link>
      </li>
    );
  };

  return (
    <>
      <nav className="bg-purple-400 py-2">
        <div className="flex flex-row items-center mx-4 py-2">
          <div>
            <Link to={"/"}>
              <img src={logo} alt="Navbar Image" width={"60px"} />
            </Link>
          </div>
          <div className="ml-96">
            <ul className="flex">
              <NavItem link="/" text={"Inicio"} />
              <NavItem link="/productos" text={"Productos"} />
              <NavItem link={"/mas-vendidos"} text="Mas Vendidos" />
              <NavItem link={"/sobre-nosotros"} text="Sobre Nosotros" />
              <NavItem link={"/ayuda"} text="Ayuda" />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
