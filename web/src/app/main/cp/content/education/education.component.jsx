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
                      Information and Communication Engineering
                    </p>
                    <p className="text-sm pt-1">
                      Institute of Technology of Cambodia, Phnom Penh
                    </p>
                    <p className="text-sm pt-1">September 2021 - Present</p>
                  </li>
                  <li className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-10 h-10 bg-white  rounded-full -start-5 ring-4 ring-white ">
                      <img src={HightSchool} alt="" />
                    </span>
                    <h3 className="font-medium leading-tight">Personal Info</h3>
                    <p className="text-sm">Step details here</p>
                  </li>
                  <li className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                      <svg
                        className="w-3.5 h-3.5 text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 16"
                      >
                        <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
                      </svg>
                    </span>
                    <h3 className="font-medium leading-tight">Account Info</h3>
                    <p className="text-sm">Step details here</p>
                  </li>
                  <li className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                      <svg
                        className="w-3.5 h-3.5 text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 20"
                      >
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                      </svg>
                    </span>
                    <h3 className="font-medium leading-tight">Review</h3>
                    <p className="text-sm">Step details here</p>
                  </li>
                  <li className="ms-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                      <svg
                        className="w-3.5 h-3.5 text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 20"
                      >
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
                      </svg>
                    </span>
                    <h3 className="font-medium leading-tight">Confirmation</h3>
                    <p className="text-sm">Step details here</p>
                  </li>
                </ol>
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
      </div>
    </div>
  );
};

export default EducationComponent;
