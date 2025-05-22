function AboutMe() {
  return (
    <>
      <main className="border-t border-slate-200 lg:relative lg:mb-28 lg:ml-112 lg:border-t-0 xl:ml-120">
        <div className="h-full overflow-y-auto p-6 bg-gray-100 rounded-lg shadow-lg space-y-6">
          <h1 className="text-2xl font-bold mb-4 text-center">😚 About Me <h1 className="wave">👋</h1></h1>
        </div>
        <div className="mt-12 pr-4 grid grid-cols-2 gap-4 w-full">
          {/* left box */}
            <div className="relative mx-auto flex flex-col justify-center w-96 overflow-hidden">
              <img className="rounded-lg" src="Work.jpeg" />
            </div>

          {/* right box - slightly offset*/}
          {/* Timeline */}
          <div>
            {/* Item */}
            <div className="group relative flex gap-x-5">
              {/* Icon */}
              <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                <div className="relative z-10 size-6 flex justify-center items-center">
                  <img
                  src="/icons/GVSU_logo.svg"
                  className="shrink-0 w-6 h-6 text-black"
                  />
                </div>
              </div>
              {/* End Icon */}

              {/* Right Content */}
              <div className="grow pb-8 group-last:pb-0">
                <h3 className="mb-1 text-xs text-black">
                  Grand Valley State University - Blue Nucleous - 2025 - Present
                </h3>

                <p className="font-semibold text-sm text-black">
                  Software Developer
                </p>

                <p className="mt-1 text-sm text-black">
                  The consultancy seeks to enrich computing education and empower both students and the community at large
                </p>

                <ul className="list-disc ms-6 mt-3 space-y-1.5">
                  <li className="ps-1 text-sm text-black">
                    Worked on sport scoreboard.
                  </li>
                  <li className="ps-1 text-sm text-black">
                    Worked on Blue Nucleus website.
                  </li>
                </ul>

                <div className="mt-3 w-2/3 mx-auto flex justify-center">
                  {/* Card */}
                  <a className="block border border-gray-200 rounded-lg hover:shadow-2xs focus:outline-hidden dark:border-neutral-700" href="https://www.gvsu.edu/bluenucleus/">
                    <div className="relative flex items-center overflow-hidden">
                      <img className="w-32 sm:w-48 h-full absolute inset-0 object-cover rounded-s-lg" src="GVSU.jpg"/>

                      <div className="grow p-4 ms-32 sm:ms-48">
                        <div className="min-h-24 flex flex-col justify-center">
                          <h3 className="font-semibold text-sm text-black">
                            Blue Nucleus
                          </h3>
                          <p className="mt-1 text-sm text-black">
                            Where vision meets execution
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  {/* End Card */}
                </div>

              </div>
              {/* End Right Content */}
            </div>
            {/* End Item */}

            {/* Item */}
            <div className="group relative flex gap-x-5">
              {/* Icon */}
              <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                <div className="relative z-10 size-6 flex justify-center items-center">
                  <img
                    src="/icons/Toyota_logo.svg"
                    className="shrink-0 w-6 h-6 text-black"
                  />  
                </div>
              </div>
              {/* End Icon */}

              {/* Right Content */}
              <div className="grow pb-8 group-last:pb-0">
                <h3 className="mb-1 text-xs text-black">
                  viastore, a TOYOTA Automated Logistics Company - 2019 - 2024
                </h3>

                <p className="font-semibold text-sm text-black">
                  Controls Engineer Level 2
                </p>

                <ul className="list-disc ms-6 mt-3 space-y-1.5">
                  <li className="ps-1 text-sm text-black">
                    Clients Served: General Motors, Dollar General, Gordon Food Service, Tyson Foods, McMaster-Carr, Mar-Jac Poultry.
                  </li>
                  <li className="ps-1 text-sm text-black">
                    Designed and implemented Human-Machine Interfaces (HMI), ensuring optimal user experience and functionality.
                  </li>
                  <li className="ps-1 text-sm text-black">
                    Collaborated with multidisciplinary teams, including electricians, mechanics, controls/software engineers, and managers, to deliver seamless project execution.
                  </li>
                  <li className="ps-1 text-sm text-black">
                    Led all electrical and programming site activities, including installation, commissioning, testing, and providing stand-by support.
                  </li>
                </ul>

                <div className="mt-3 w-2/3 mx-auto flex justify-center">
                  {/* Card */}
                  <a className="block border border-gray-200 rounded-lg hover:shadow-2xs focus:outline-hidden dark:border-neutral-700" href="https://www.bastiansolutions.com/viastore-north-america/">
                    <div className="relative flex items-center overflow-hidden">
                      <img className="w-32 sm:w-48 h-full absolute inset-0 object-cover rounded-s-lg" src="viastore.jpg"/>

                      <div className="grow p-4 ms-32 sm:ms-48">
                        <div className="min-h-24 flex flex-col justify-center">
                          <h3 className="font-semibold text-sm text-black">
                            viastore
                          </h3>
                          <p className="mt-1 text-sm text-black">
                            Garantee Success !!
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  {/* End Card */}
                </div>
              </div>
              {/* End Right Content */}
            </div>
            
          </div>
          {/* End Timeline */}
        </div>

      </main>
    </>
  );
}

export default AboutMe;