// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./App.css";

function Message() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [tooltip, setTooltip] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const showTooltip = (tooltipName) => {
    setTooltip(tooltipName);
  };

  const hideTooltip = () => {
    setTooltip(null);
  };

  return (
    <div className="fixed end-6 bottom-6 group">
      <div
        id="speed-dial-menu-default"
        className={`flex flex-col items-center ${isMenuOpen ? 'block' : 'hidden'} mb-4 space-y-2`}
      >
        {["share", "print", "download", "copy"].map((action) => (
          <button
            key={action}
            type="button"
            data-tooltip-target={`tooltip-${action}`}
            data-tooltip-placement="left"
            className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
            onMouseEnter={() => showTooltip(action)}
            onMouseLeave={hideTooltip}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox={`0 0 ${action === "download" ? 20 : 18} ${action === "download" ? 20 : 18}`}
            >
              <path d={getPath(action)} />
            </svg>
            <span className="sr-only">{action.charAt(0).toUpperCase() + action.slice(1)}</span>
            {tooltip === action && (
              <div
                id={`tooltip-${action}`}
                role="tooltip"
                className="absolute z-10 inline-block w-auto px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-100"
              >
                {action.charAt(0).toUpperCase() + action.slice(1)}
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            )}
          </button>
        ))}
      </div>
      <button
        type="button"
        data-dial-toggle="speed-dial-menu-default"
        aria-controls="speed-dial-menu-default"
        aria-expanded={isMenuOpen}
        className="flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
        onClick={toggleMenu}
      >
        <svg
          className={`w-5 h-5 transition-transform ${isMenuOpen ? 'rotate-45' : ''}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
        <span className="sr-only">Open actions menu</span>
      </button>
    </div>
  );
}

const getPath = (action) => {
  switch (action) {
    case "share":
      return "M14.419 10.581a3.564 3.564 0 0 0-2.574 1.1l-4.756-2.49a3.54 3.54 0 0 0 .072-.71 3.55 3.55 0 0 0-.043-.428L11.67 6.1a3.56 3.56 0 1 0-.831-2.265c.006.143.02.286.043.428L6.33 6.218a3.573 3.573 0 1 0-.175 4.743l4.756 2.491a3.58 3.58 0 1 0 3.508-2.871Z";
    case "print":
      return "M5 20h10a1 1 0 0 0 1-1v-5H4v5a1 1 0 0 0 1 1ZM18 7H2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2v-3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-1-2V2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3h14Z";
    case "download":
      return "M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414ZM18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z";
    case "copy":
      return "M5 9V4.13a2.96 2.96 0 0 0-1.293.749L.879 7.707A2.96 2.96 0 0 0 .13 9H5Zm11.066-9H9.829a2.98 2.98 0 0 0-2.122.879L7 1.584A.987.987 0 0 0 6.766 2h4.3A3.972 3.972 0 0 1 15 6v10h1.066A1.97 1.97 0 0 0 18 14V2a1.97 1.97 0 0 0-1.934-2ZM11.066 4H7v5a2 2 0 0 1-2 2H0v7a1.969 1.969 0 0 0 1.933 2h9.133A1.97 1.97 0 0 0 13 18V6a1.97 1.97 0 0 0-1.934-2Z";
    default:
      return "";
  }
};

export default Message;
