import { useState } from "react";
import "./phone.component.css"; // Import the CSS file for custom styles
import Close from "/src/assets/icon/cross.png";
import Icon from "/src/assets/icon/menu.png";
import Coffee from "/src/assets/logo/coffee-cup.png";

const PhoneComponent = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNavigation = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div>
      <header className="flex flex-row justify-between items-center pl-3 pr-9">
        <div
          onClick={toggleNavigation}
          className="flex justify-center items-center w-12 h-10 opacity-1  rounded-xl transition duration-300 ease-in-out hover:bg-slate-100  focus:bg-slate-100 "
        >
          <img src={Icon} className="w-7 h-7 cursor-pointer hover:scale-90" />
        </div>
        <div className="header flex items-center justify-center gap-1">
          <h1 className="text-2xl">Coffee</h1>
          <img src={Coffee} alt="Coffee logo" className="w-8 h-8" />
        </div>
      </header>

      {/* navigation is open */}
      <div className={`navigation ${navOpen ? "open" : "close"}`}>
        <header className="flex flex-row justify-between items-center px-9 shadow-sm">
          <div className="header flex items-center justify-center gap-1">
            <h1 className="text-2xl" onClick={toggleNavigation}>
              Coffee
            </h1>
            <img src={Coffee} alt="Coffee logo" className="w-8 h-8" />
          </div>
          <div onClick={toggleNavigation}>
            <img
              src={Close}
              className="w-4 h-4 cursor-pointer hover:scale-90 "
            />
          </div>
        </header>
        <div>Hello</div>
      </div>
    </div>
  );
};

export default PhoneComponent;
