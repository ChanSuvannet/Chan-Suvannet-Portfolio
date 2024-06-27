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
      <header className="flex flex-row justify-between items-center px-9">
        <div
          onClick={toggleNavigation}
          className="flex justify-center items-center w-12 h-10 opacity-1 rounded-xl transition duration-300 ease-in-out hover:bg-slate-200 hover:rounded-xl"
        >
          <img src={Icon} className="w-8 h-8 cursor-pointer" />
        </div>
        <div className="header flex items-center justify-center gap-1">
          <h1 className="text-md" onClick={toggleNavigation}>
            Coffee
          </h1>
          <img src={Coffee} alt="Coffee logo" className="w-9 h-9" />
        </div>
      </header>

      {/* navigation */}
      <div className={`navigation ${navOpen ? "open" : "close"}`}>
        <header className="flex flex-row justify-between items-center px-9">
          <div className="header flex items-center justify-center gap-1">
            <h1 className="text-md" onClick={toggleNavigation}>
              Coffee
            </h1>
            <img src={Coffee} alt="Coffee logo" className="w-9 h-9" />
          </div>
          <div onClick={toggleNavigation}>
            <img src={Close} className="w-5 h-5 cursor-pointer " />
          </div>
        </header>
      </div>
    </div>
  );
};

export default PhoneComponent;
