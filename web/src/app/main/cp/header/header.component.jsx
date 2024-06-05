import "./header.component.css";
import ProfileImage from "/src/assets/logo/title-logo.png";

const Header = () => {
  const isLoading = false;

  if (isLoading) {
    return (
      <div className="header-container">
        <h1 className="header-title">Loading...</h1>
        <img src={ProfileImage} alt="Loading" className="header-image" />
      </div>
    );
  }

  return (
    <header className="flex justify-around items-center bg-color-cus ">
       <div className="header-content">
        <img src={ProfileImage} alt="Profile" className="header-image" />
      </div>
      <nav className="header-nav">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
