import "./header.component.css";
import HeaderFacebookImage from "/src/assets/logo/facebook.png";
import HeaderInstagramImage from "/src/assets/logo/instagram.png";
import HeaderTelegramImage from "/src/assets/logo/telegram.png";

const SmallScreenHeader = () => {
    return (
        <header className="flex flex-col items-center bg-color-cus p-4">
            <div className="header flex items-center justify-center gap-1 fire-animation mb-4">
                <h1>Suvannet</h1>
            </div>
            <nav className="header-nav text-gray-500">
                <ul className="flex flex-col space-y-2">
                    <li>
                        <a href="#faq">
                            <img
                                src={HeaderFacebookImage}
                                className="w-6 h-6"
                                alt="Facebook"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="#faq">
                            <img
                                src={HeaderInstagramImage}
                                className="w-6 h-6"
                                alt="Instagram"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="#faq">
                            <img
                                src={HeaderTelegramImage}
                                className="w-6 h-6"
                                alt="Telegram"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="text-red-300 hover:text-gray-300">
                            Quick Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default SmallScreenHeader;
