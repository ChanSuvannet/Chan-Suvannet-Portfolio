import Image from "/src/assets/image/pic1.jpg";
import HightSchool from "/src/assets/svg/hight-school.svg";
const EducationComponent = () => {
  return (
    <div className="flex justify-center items-center h-full px-5">
      <div className="w-full h-auto max-w-7xl ">
        <div className="flex justify-start pt-2 max-980:justify-center">
          <h1 className="text-4xl font-bold max-600:text-2xl">Education</h1>
        </div>
        <div className="flex justify-center gap-5 pt-6 items-center max-980:flex-col max-980:w-full">
          <div className="flex justify-start px-9 py-5 flex-col w-3/5  h-auto max-600:h-auto bg-white  rounded-3xl max-600:w-full  max-980:w-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            <div className="flex max-600:flex-col gap-2 max-600:gap-0">
              <div>
                <ol className="relative border-s-2 border-gray-400">
                  <li className="mb-10 ms-7">
                    <span className="absolute flex items-center justify-center w-10 h-10 bg-white  rounded-full -start-5 ring-4 ring-white ">
                      <img src={HightSchool} alt="" />
                    </span>
                    <p className="font-medium leading-tight pt-1">
                      Information and Communication Engineering
                    </p>
                    <p className="text-sm pt-1">
                      Institute of Technology of Cambodia, Phnom Penh
                    </p>
                    <p className="text-sm pt-1">September 2021 - Present</p>
                  </li>
                  <li className="mb-10 ms-7">
                    <span className="absolute flex items-center justify-center w-10 h-10 bg-white  rounded-full -start-5 ring-4 ring-white ">
                      <img src={HightSchool} alt="" />
                    </span>
                    <p className="font-medium leading-tight pt-1">
                      Hight School
                    </p>
                    <p className="text-sm pt-1">
                      Hunsen Kampong Rou high school, Svay Rieng
                    </p>
                    <p className="text-sm pt-1">2015 - 2021</p>
                  </li>
                  <li className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-10 h-10 bg-white  rounded-full -start-5 ring-4 ring-white ">
                      <img src={HightSchool} alt="" />
                    </span>
                    <p className="font-medium leading-tight pt-1">
                      Primary School
                    </p>
                    <p className="text-sm pt-1">
                      Prey chchamna Primary, Svay Rieng
                    </p>
                    <p className="text-sm pt-1">2009 - 2015</p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div>
            <img src={Image} alt="" className="w-full " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationComponent;
