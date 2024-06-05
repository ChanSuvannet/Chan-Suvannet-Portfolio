
import "./header.component.css";
import ProfileImage from "/src/assets/logo/title-logo.png";
const Header = () => {
    const isLoading = true;
    if (isLoading) {
        return (
            <div>
                <h1 className="header">Header</h1>
                <img src={ProfileImage} alt="ImageTest"></img>
            </div>
        );
    }
};

export default Header;
