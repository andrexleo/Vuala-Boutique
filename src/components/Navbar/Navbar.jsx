import React from "react";
import Logo from "../../assets/gilcol.png";
import { FaCoffee } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const Menu = [
  {
    id: 1,
    name: "Inicio",
    link: "/#",
  },
  {
    id: 2,
    name: "Productos",
    link: "/#services",
  },
  {
    id: 3,
    name: "Contacto",
    link: "/#about",
  },
];
const Navbar = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-secondary  shadow-xl bg-gray-900 text-white">
        <div className="container py-1">
          <div className="flex justify-between items-center">
            {/* Logo section */}
            <div data-aos="fade-down" data-aos-once="true">
              <a
                href="#"
                className=" flex justify-center items-center  tracking-wider font-cursive"
              >
                <img src={Logo} alt="Logo" className="w-28 " />
                
              </a>
            </div>

            {/* Link section */}
            <div
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="300"
              className="flex justify-between items-center gap-4"
            >
              <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block text-xl py-4 px-4 text-white hover:text-white duration-200"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
              <button className=" bg-primary/10 hover:scale-105 duration-200 text-white px-4 py-2 rounded-full flex items-center gap-3">
                
                <FaWhatsapp className="text-xl text-white drop-shadow-sm cursor-pointer" />
                <a>55 25 55 66 78</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
