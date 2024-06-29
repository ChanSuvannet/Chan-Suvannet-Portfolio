import "./home.component.css";
import Profile from "/src/assets/image/pic.jpg";
import HeaderFacebookImage from "/src/assets/logo/facebook.png";
import HeaderInstagramImage from "/src/assets/logo/instagram.png";
import HeaderTelegramImage from "/src/assets/logo/telegram.png";
const HomeComponent = () => {
  return (
    <div className="flex justify-center items-center h-full px-9">
      <div className="w-full h-screen  flex justify-center items-center">
        <div className="flex flex-col justify-around h-full">
          <div>
            <div>
              <div className="flex flex-col items-center justify-center">
                <div className="w-44 h-44 rounded-full flex justify-center items-center border-[10px] border-red-300 hover:border-red-200 hover:bg-red-200 cursor-pointer">
                  <img
                    src={Profile}
                    alt={Profile}
                    className="w-40 h-40 rounded-full border-[2px] border-red-100 hover:scale-95"
                  />
                </div>
                <div className="flex flex-col justify-center items-center pt-5">
                  <h1 className="text-[34px] max-600:text-[28px]  max-980:text-red-500">Chan Suvannet</h1>
                  <p className="pt-2 text-xl max-600:text-[18px]">I&apos;m software engineering </p>
                </div>
              </div>
              <div className="flex justify-center items-center pt-5">
                <div>
                  <ul className="flex space-x-4">
                    <li>
                      <a href="#faq">
                        <img
                          src={HeaderFacebookImage}
                          className="w-6 h-6"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#faq">
                        <img
                          src={HeaderInstagramImage}
                          className="w-6 h-6"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#faq">
                        <img
                          src={HeaderTelegramImage}
                          className="w-6 h-6"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center pt-5">
                <button className="bg-red-400 hover:bg-red-300">Hire Me</button>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center pt-5 flex-col">
            <h1 className="text-xl">Scroll Down</h1>
            <img className="mouse pt-10 cursor-pointer" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAV9JREFUSEvllkFSg0AQRX8Hcg7JSYQ1A3IDw0k0JyHeAMOwDjcJ3oNKS1OOhXEGqcSUZYUVC6bf/z3TfyBc+aEr18csQKrUMzHfMRCKICZqQfTieV5TlmU7JXISkCkVHpkLEAXWIsztgigvtW5cECdgKA7sB8VAYxQPhbouGIMXvr9yOXEC0jg+iHJi3r7WdW5TKK3r+U8QJ8tlZINYAeOFu7pemeKpUizvO60/1xkhTJRXVbU9FWIFJErtCQgXQDTurw2QJMm6PwCFy6nLwTeloswGyLIsOHbdQdo0dmucXAxwgW8U4Bom296c1aJ/BPiY4qkIMG7OOqYPcVz0ibk+HTRbi0xmSV5VWkezJtlEhWvRuIiZegCbndaSTV+eH8POtVCqGKeuKZZvZse1B2zg+60kpuQPmB8lr6TIVCv/7sIZN1L2hIH7PjEDc0f08fxm6/nsPfitn4FZl/4lsHeHjgAoqqAMdQAAAABJRU5ErkJggg=="/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
