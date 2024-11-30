import React from "react";
import { menus } from "../utils";

const Menu = () => {
  const scrollContent = (contentID) => {
    document.getElementById(contentID).scrollIntoView({behavior:'smooth'});
  }
  return (
    <div className="flex justify-center">
      <div
      className="w-full bg-black p-5 text-lg text-gray-200 
      cursor-pointer z-50 flex justify-center fixed"
    >
      {menus.map((menu) => (
        <div className="ml-10"
        onClick={() => scrollContent(`${menu.id}`)}>
          {menu.name}
        </div>
      ))}
    </div>
    </div>
    
  );
};

export default Menu;
