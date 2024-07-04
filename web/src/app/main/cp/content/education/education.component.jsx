import HightSchool from "/src/assets/svg/hight-school.svg";
const EducationComponent = () => {
  return (
    <div className="flex justify-center items-center h-full px-5">
      <div className="w-full h-auto max-w-7xl ">
        <div className="flex justify-start pt-2 max-980:justify-center">
          <h1 className="text-4xl font-bold max-600:text-2xl">Education</h1>
        </div>
        <div className="flex justify-center gap-5 pt-6 i max-980:flex-col max-980:w-full max-600:flex-col">
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

          <div className="flex justify-start px-6 pt-6  pb-5 flex-col w-3/5  h-auto max-600:h-auto bg-white  rounded-3xl max-600:w-full  max-980:w-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            <div>
              <div className="flex">
                <span className="flex w-3 h-3 me-3 bg-red-500 rounded-full"></span>
                <span className="flex w-3 h-3 me-3 bg-yellow-300 rounded-full"></span>
                <span className="flex w-3 h-3 me-3 bg-green-500 rounded-full"></span>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Track work across the enterprise through an open, collaborative
                platform. Link issues across Jira and ingest data from other
                software development tools, so your IT support and operations
                teams have richer contextual information to rapidly respond to
                requests, incidents, and changes.
              </p>
              <div className="relative inline-flex items-center justify-center w-full">
                <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded " />
                <div className="absolute px-4 -translate-x-1/2 left-1/2 flex items-center justify-center bg-white ">
                  <svg
                    className="w-4 h-4 text-gray-700 dark:text-gray-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 14"
                  >
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Deliver great service experiences fast - without the complexity
                of traditional ITSM solutions.Accelerate critical development
                work, eliminate toil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationComponent;
