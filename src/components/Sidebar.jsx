import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import logo from "../assets/logo.png";
import { links } from "../assets/constants";
import { HiOutlineMenu } from "react-icons/hi";

const NavLinks = ({ handleClick }) => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink
        to={item.to}
        key={item.name}
        className="flex flex-row justify-start items-center my-8 text-lg font-medium text-gray-400 hover:text-green-500 ml-3"
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-4" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleClick = () => {};
  return (
    <>
      <div className="md:flex hidden flex-col w-[200px] py-10 px-4 bg-[#212124]">
        <img src={logo} alt="logo" className="w-full h-24 object-contain" />
        <NavLinks handleClick={handleClick} />
      </div>

      <div className="absolute md:hidden block top-6 right-3">
        {mobileMenuOpen ? (
          <RiCloseLine className="w-6 h-6 mr-2 text-white" />
        ) : (
          <HiOutlineMenu
            className="w-6 h-6 mr-2 text-white"
            onClick={() => setMobileMenuOpen(true)}
          />
        )}
      </div>

      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483d8b] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
          mobileMenuOpen ? "left-0" : "-left-full"
        }`}
      >
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
