const VolunteerWorkComponent = () => {
  return (
    <div className="flex justify-center items-center h-full px-9">
      <div className="w-full h-auto">
        <div className="flex justify-end pt-2">
          <h1 className="text-4xl font-bold max-600:text-2xl">Volunteer</h1>
        </div>
        <div className="flex justify-center gap-5 pt-6 items-center max-980:flex-col max-980:w-full">
          <div className="flex justify-start px-6 pt-5  pb-5 flex-col w-3/5  h-auto max-600:h-auto bg-white  rounded-3xl max-600:w-full  max-980:w-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            <div className="flex max-600:flex-col gap-2 max-600:gap-0">
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  repellat consectetur eum provident aliquid magnam deleniti
                  itaque molestiae perferendis accusamus, repudiandae
                  consequatur aut libero aliquam illo ipsum, quae quibusdam
                  nulla!
                </p>
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

export default VolunteerWorkComponent;
