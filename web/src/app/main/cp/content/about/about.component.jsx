import Profile from "/src/assets/image/pic.jpg";
const AboutMeComponent = () => {
  return (
    <div className="flex justify-center items-center h-full px-9 shadow-sm pt-3">
      <div className="w-full h-screen">
        <div className="flex justify-center pt-2">
          <h1 className="text-4xl font-bold">About Me</h1>
        </div>
        <div className="flex justify-around pt-6">
          <div className="max-600:hidden">
            <div>
              <div className="flex flex-col items-center justify-center">
                <div className=" w-44 h-44 rounded-full flex justify-center items-center border-[10px] border-red-400 hover:border-red-500 hover:bg-red-200 cursor-pointer">
                  <img
                    src={Profile}
                    alt={Profile}
                    className="w-40 h-40 rounded-full border-[2px] border-red-100 hover:scale-95"
                  />
                </div>
                <div className="flex flex-col justify-center items-center pt-5">
                  <p className="pt-2 text-xl max-600:text-[18px]">
                    Give me a cup of caffee{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-start px-6 pt-5 flex-col w-3/5  h-[265px] max-600:h-auto bg-white shadow-md rounded-3xl max-600:w-full">
            <div className="flex max-600:flex-col gap-2 max-600:gap-0">
              <div className="w-[50%] max-600:w-full">
                <p className="text-xl">
                  I was born on September 20, 2003, in Svay Rieng province, I am
                  known for my positive mindset, high motivation, excellent
                  communication skills, and profound respect for capable
                  individuals. Empower others by believing in their potential
                  and celebrating their achievements.
                </p>
                <div className="pt-2"></div>
                <button className="bnt bg-red-400 hover:bg-red-300 max-600:w-[145px] max-600:h-[44px]  max-600:hidden">Downloaded CV</button>
              </div>
              <div className="w-[50%] max-600:w-full">
                <div>
                  <div>
                    <div className=" w-full">
                      <p className="text-xl">Development</p>
                      <div className="mb-8 pt-3">
                        <div className="bg-stroke bg-gray-200 relative h-2 w-full rounded-2xl">
                          <div className="bg-red-400 absolute top-0 left-0 h-full w-4/5 rounded-2xl"></div>
                        </div>
                      </div>
                    </div>
                    <div className=" w-full">
                      <p className="text-xl">Problem-Solving</p>
                      <div className="mb-8 pt-3">
                        <div className="bg-stroke bg-gray-200 relative h-2 w-full rounded-2xl">
                          <div className="bg-yellow-400 absolute top-0 left-0 h-full w-4/6 rounded-2xl"></div>
                        </div>
                      </div>
                    </div>
                    <div className=" w-full">
                      <p className="text-xl">Communication</p>
                      <div className="mb-8 pt-3">
                        <div className="bg-stroke bg-gray-200 relative h-2 w-full rounded-2xl">
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
        <div className="flex justify-center items-center gap-2 pt-5">
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
        </div>
      </div>
    </div>
  );
};

export default AboutMeComponent;
