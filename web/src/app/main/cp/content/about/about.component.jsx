import Profile from "/src/assets/image/pic.jpg";
import Coffee from "/src/assets/svg/cafe.svg";
import Certificate from "/src/assets/svg/certificate.svg";
import Code from "/src/assets/svg/code.svg";
import Rocket from "/src/assets/svg/rocket.svg";
const AboutMeComponent = () => {
  return (
    <div className="flex justify-center items-center h-full px-9">
      <div className="w-full h-auto">
        <div className="flex justify-center pt-2">
          <h1 className="text-4xl font-bold max-600:text-2xl">About Me</h1>
        </div>
        <div className="flex justify-center gap-20 pt-6 items-center max-980:flex-col max-980:w-full">
          <div className="max-600:hidden">
            <div>
              <div className="flex flex-col items-center justify-center">
                <div className=" w-44 h-44 rounded-full flex justify-center items-center border-[10px] border-red-300 hover:border-red-500 hover:bg-red-200 cursor-pointer">
                  <img
                    src={Profile}
                    alt={Profile}
                    className="w-40 h-40 rounded-full border-[2px] border-red-100 hover:scale-95"
                  />
                </div>
                <div className="flex flex-col justify-center items-center mt-3">
                  <div className="p-2  rounded-[10px] text-red-300 cursor-pointer hover:bg-red-400 hover:text-white transition-colors duration-[900ms] ">
                    <h1 className="text-[18px] max-600:text-[18px] font-bold">
                      Downloaded CV
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start px-6 pt-5  pb-5 flex-col w-3/5  h-auto max-600:h-auto bg-white  rounded-3xl max-600:w-full  max-980:w-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            <div className="flex max-600:flex-col gap-2 max-600:gap-0">
              <div className="w-[50%] max-600:w-full">
                <p className="text-xl max-600:text-base">
                  I am Suvannet, a computer science student from the Institute
                  of Technology of Cambodia. I am known for my positive mindset,
                  high motivation, excellent communication skills, and profound
                  respect for capable individuals. I always focus on
                  self-development and lifelong learning.
                </p>
              </div>
              <div className="max-980:hidden mb-5 mt-5">
                <hr />
              </div>
              <div className="w-[50%] max-600:w-full">
                <div>
                  <div>
                    <div className=" w-full">
                      <div className="flex justify-between">
                        <p className="text-xl max-600:text-base">Development</p>
                        <p className="text-xl max-600:text-base">80%</p>
                      </div>
                      <div className="mb-5 pt-3">
                        <div className="bg-stroke bg-gray-200 relative h-2 w-full rounded-2xl max-600:h-1">
                          <div className="bg-red-400 absolute top-0 left-0 h-full w-4/5 rounded-2xl"></div>
                        </div>
                      </div>
                    </div>
                    <div className=" w-full">
                      <div className="flex justify-between">
                        <p className="text-xl max-600:text-base">
                          Problem-Solving
                        </p>
                        <p className="text-xl max-600:text-base">60%</p>
                      </div>
                      <div className="mb-5 pt-3 max-600:text-base">
                        <div className="bg-stroke bg-gray-200 relative h-2 w-full rounded-2xl max-600:h-1">
                          <div className="bg-yellow-400 absolute top-0 left-0 h-full w-4/6 rounded-2xl"></div>
                        </div>
                      </div>
                    </div>
                    <div className=" w-full">
                      <div className="flex justify-between">
                        <p className="text-xl max-600:text-base">
                          Communication
                        </p>
                        <p className="text-xl max-600:text-base">91%</p>
                      </div>
                      <div className="mb-5 pt-3">
                        <div className="bg-stroke bg-gray-200 relative h-2 w-full rounded-2xl max-600:h-1">
                          <div className="bg-purple-400 absolute top-0 left-0 h-full w-11/12 rounded-2xl"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-44 mt-16 mb-16 max-600:mt-8 max-600:mb-8 max-600:grid max-600:grid-cols-2 max-600:gap-5 pl-4">
          <div className="flex gap-5 ">
            <div>
              <img
                src={Code}
                className="w-16 hover:scale-110 transition-transform duration-300 max-600:w-10"
                alt=""
              />
            </div>
            <div>
              <h1 className="font-[800] text-2xl max-600:text-[18px]">5</h1>
              <p className="mt-2 max-600:text-[14px] max-600:mt-0">
                Project Completed
              </p>
            </div>
          </div>
          <div className="flex gap-5 ">
            <div>
              <img
                src={Rocket}
                className="w-16 hover:scale-110 transition-transform duration-300 max-600:w-10"
                alt=""
              />
            </div>
            <div>
              <h1 className="font-bold text-2xl max-600:text-[18px]">2</h1>
              <p className="mt-2 max-600:text-[14px] max-600:mt-0">
                Project Ongoing
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <img
                src={Coffee}
                className="w-16 hover:scale-110 transition-transform duration-300 max-600:w-10"
                alt=""
              />
            </div>
            <div>
              <h1 className="font-[800] text-2xl max-600:text-[18px]">85</h1>
              <p className="mt-2 max-600:text-[14px] max-600:mt-0">
                Cup of Coffee
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <img
                src={Certificate}
                className="w-16 hover:scale-110 transition-transform duration-300 max-600:w-10"
                alt=""
              />
            </div>
            <div>
              <h1 className="font-bold text-2xl max-600:text-[18px]">6</h1>
              <p className="mt-2 max-600:text-[14px] max-600:mt-0">
                Certificate
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeComponent;
