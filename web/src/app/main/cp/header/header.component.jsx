import { useState } from "react";
import "./header.component.css";
import HeaderFacebookImage from "/src/assets/logo/facebook.png";
import HeaderImage from "/src/assets/logo/gif.gif";
import HeaderInstagramImage from "/src/assets/logo/instagram.png";
import HeaderTelegramImage from "/src/assets/logo/telegram.png";
import HeaderTradImage from "/src/assets/logo/trad.png";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setDropdownOpen(false);
  };

  return (
    <header className="flex justify-between px-9 items-center bg-color-cus">
      <nav className="header-nav text-gray-800 ">
        <ul>
          <li>
            <a href="#faq" className="fire-animation ">
              <img src={HeaderTradImage} className="w-6 h-6" alt="" />
            </a>
          </li>
          <li>
            <a href="#skill" className="hover:text-red-300">Skills</a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-red-300">Portfolio</a>
          </li>
          <li>
            <a
              className="flex justify-start items-center relative hover:text-red-300 "
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              type="button"
              onClick={toggleDropdown}
            >
              About Me{" "}
              <svg
                className={`w-2.5 h-2.5 ms-3 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </a>
            {dropdownOpen && (
              <div
                id="dropdown"
                className="z-900  absolute bg-white divide-y divide-gray-500 rounded-lg border border-gray-100 shadow-sm w-52 m-[-10px] mt-1"
              >
                <ul className="flex flex-col text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <a
                      href="#"
                      className={`block px-4 text-gray-800 hover:text-red-300 pt-2 ${
                        selectedItem === "Education" ? "text-red-500" : ""
                      }`}
                      onClick={() => handleItemClick("Education")}
                    >
                      Education
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={`block px-4 text-gray-800 hover:text-red-300 ${
                        selectedItem === "Volunteer Work" ? "text-red-500" : ""
                      }`}
                      onClick={() => handleItemClick("Volunteer Work")}
                    >
                      Volunteer Work
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={`block px-4 text-gray-800 hover:text-red-300  ${
                        selectedItem === "Experience" ? "text-red-500" : ""
                      }`}
                      onClick={() => handleItemClick("Experience")}
                    >
                      Experience
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={`block px-4 text-gray-800 hover:text-red-300 pb-2 ${
                        selectedItem === "Certificate" ? "text-red-500" : ""
                      }`}
                      onClick={() => handleItemClick("Certificate")}
                    >
                      Certificate
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </nav>
      <div className="header flex justify-start items-center fire-animation">
        <img src={HeaderImage} alt="" className=""/>
      </div>
      <nav className="header-nav text-gray-500">
        <ul>
          <li>
            <a href="#faq">
              <img src={HeaderFacebookImage} className="w-6 h-6 " alt="" />
            </a>
          </li>
          <li>
            <a href="#faq">
              <img src={HeaderInstagramImage} className="w-6 h-6 " alt="" />
            </a>
          </li>
          <li>
            <a href="#faq">
              <img src={HeaderTelegramImage} className="w-6 h-6 " alt="" />
            </a>
          </li>
          <li>
            <a href="" className="text-red-300 hover:text-gray-300">Quick Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
