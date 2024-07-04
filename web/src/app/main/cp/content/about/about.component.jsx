import "./about.component.css";
import Profile from "/src/assets/image/pic.jpg";
import Coffee from "/src/assets/svg/cafe.svg";
import Certificate from "/src/assets/svg/certificate.svg";
import Code from "/src/assets/svg/code.svg";
import Rocket from "/src/assets/svg/rocket.svg";
const AboutMeComponent = () => {
  const cardsData = [
    {
      id: 1,
      name: "Chan Suvanet",
      designation: "Software Engineer",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      name: "Jane Smith",
      designation: "UX Designer",
      content:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "UX Designer",
      content:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
  ];
  return (
    <div className="h-full px-5 flex justify-center items-center">
      <div className="w-full h-auto max-w-7xl flex justify-center ">
        <div className="w-full">
          <div className="flex flex-col justify-center items-center gap-5 max-600:gap-4 max-980:flex-col max-980:w-full max-600:flex-col my-5">
            <div className="max-600:w-full w-[500px]">
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4">
                  <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                    <span className="mb-2 block text-4xl font-semibold text-primary">
                      About Me
                    </span>
                    <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                      Our Awesome Team
                    </h2>
                    <p className="text-base text-body-color dark:text-dark-6">
                      There are many variations of passages of Lorem Ipsum
                      available but the majority have suffered alteration in
                      some form.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center text-center">
                <img
                  className="w-10 h-10 rounded-full"
                  src={Profile}
                  alt="Profile picture"
                />
                <div className="font-medium mt-2">
                  <div>Chan Suvannet</div>
                  <p>Language Speak</p>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    khmer, English, French
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-start px-6 py-5 flex-col h-auto w-full max-600:h-auto bg-white  rounded-3xl max-600:w-full  max-980:w-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <div className="flex max-600:flex-col gap-2 max-600:gap-0 ">
                <div className="w-[50%] max-600:w-full">
                  <p className="text-[18px] max-600:text-base">
                    I am Suvannet, a computer science student from the Institute
                    of Technology of Cambodia. I am known for my positive
                    mindset, high motivation, excellent communication skills,
                    and profound respect for capable individuals. I always focus
                    on self-development and lifelong learning.and more time to
                    improve my self. to improve my self. to improve my self. to
                    improve my self.
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
                          <p className="text-[18px] max-600:text-base">
                            Development
                          </p>
                          <p className="text-[18px] max-600:text-base">80%</p>
                        </div>
                        <div className="mb-5 pt-3">
                          <div className="bg-stroke bg-gray-200 relative h-[6px] w-full rounded-2xl max-600:h-1">
                            <div className="bg-red-400 absolute top-0 left-0 h-full w-4/5 rounded-2xl"></div>
                          </div>
                        </div>
                      </div>
                      <div className=" w-full">
                        <div className="flex justify-between">
                          <p className="text-[18px] max-600:text-base">
                            Problem-Solving
                          </p>
                          <p className="text-[18px] max-600:text-base">60%</p>
                        </div>
                        <div className="mb-5 pt-3 max-600:text-base">
                          <div className="bg-stroke bg-gray-200 relative h-[6px] w-full rounded-2xl max-600:h-1">
                            <div className="bg-yellow-400 absolute top-0 left-0 h-full w-4/6 rounded-2xl"></div>
                          </div>
                        </div>
                      </div>
                      <div className=" w-full">
                        <div className="flex justify-between">
                          <p className="text-[18px] max-600:text-base">
                            Communication
                          </p>
                          <p className="text-[18px] max-600:text-base">91%</p>
                        </div>
                        <div className="mb-5 pt-3">
                          <div className="bg-stroke bg-gray-200 relative h-[6px] w-full rounded-2xl max-600:h-1">
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

          <div className="flex justify-center my-20 max-600:mt-8 max-600:mb-8">
            <div className="grid grid-cols-4 gap-32 max-600:grid-cols-2 max-600:gap-10 justify-center">
              <div className="flex gap-5">
                <div>
                  <img
                    src={Code}
                    className="w-16 hover:scale-110 transition-transform duration-300 max-600:w-10 cursor-pointer"
                    alt=""
                  />
                </div>
                <div>
                  <h1 className="font-[800] text-2xl max-600:text-[18px]">5</h1>
                  <p className="mt-2 max-600:text-[10px] max-600:mt-0">
                    Project Completed
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div>
                  <img
                    src={Rocket}
                    className="w-16 hover:scale-110 transition-transform duration-300 max-600:w-10 cursor-pointer"
                    alt=""
                  />
                </div>
                <div>
                  <h1 className="font-bold text-2xl max-600:text-[18px]">2</h1>
                  <p className="mt-2 max-600:text-[10px] max-600:mt-0">
                    Project Ongoing
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div>
                  <img
                    src={Coffee}
                    className="w-16 hover:scale-110 transition-transform duration-300 max-600:w-10 cursor-pointer"
                    alt=""
                  />
                </div>
                <div>
                  <h1 className="font-[800] text-2xl max-600:text-[18px]">
                    85
                  </h1>
                  <p className="mt-2 max-600:text-[10px] max-600:mt-0">
                    Cup of Coffee
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div>
                  <img
                    src={Certificate}
                    className="w-16 hover:scale-110 transition-transform duration-300 max-600:w-10 cursor-pointer"
                    alt=""
                  />
                </div>
                <div>
                  <h1 className="font-bold text-2xl max-600:text-[18px]">6</h1>
                  <p className="mt-2 max-600:text-[10px] max-600:mt-0">
                    Certificate
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-10 max-600:my-8 max-600:mb-8 max-600:justify-start">
            <p className="text-[18px] max-600:text-[14px]">
              Let&apos;s start a conversation to explore new technology
              together.
              <strong className="text-red-400 text-[18px] max-600:text-[14px] transition-colors duration-300 hover:text-red-200 cursor-pointer">
                {" "}
                Click here{" "}
              </strong>
              to contact me!{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeComponent;
