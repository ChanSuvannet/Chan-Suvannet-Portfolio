import "./about.component.css";
const AboutMeComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen px-9 my-bg ">
      <div className="flex flex-col justify-around h-full">
        <div>
          <div>
            <div className="flex flex-col items-center justify-center">
              <div className="w-44 h-44 rounded-full flex justify-center items-center border-[10px] border-red-400 hover:border-red-500 hover:bg-red-200 cursor-pointer"></div>
              <h1 className="text-4xl font-bold text-gray-900">About Me</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeComponent;
