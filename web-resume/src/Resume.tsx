import Card from "./Components/Card";

import TimelineItem from "./Components/TimeLineItem";
import { useState } from 'react';

function Resume() {
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);

  return (
    <>
      <main className="border-t border-slate-200 lg:relative lg:mb-28 lg:ml-112 lg:border-t-0 xl:ml-120">
        <div className="h-full overflow-y-auto p-6 bg-gray-100 rounded-lg shadow-lg space-y-6">
          <h1 className="text-2xl font-bold mb-4 text-center">💼 Resume </h1>
        </div>

        <div className="max-w-3xl mx-auto px-4 pt-6 pb-12 lg:pt-10 lg:px-8 sm:px-6">
          {/* Section Title */}
          <h2 className="text-2xl font-bold text-slate-900 my-6 " id="Work" >Work Experience 🧑‍💼</h2>
          <hr className="border-t border-slate-300 mb-6" />

          {/* Timeline Item */}
          <div className="-my-6" >
            <TimelineItem
              label="2025 - Present"
              date="2025"
              title="Software Developer @ Blue Nucleus"
            >

            <div className="mt-3 flex justify-center">
              <Card
                title="Blue Nucleus"
                description="Where vision meets execution."
                imageSrc="RESUME/GVSU.jpg"
                href="https://www.gvsu.edu/bluenucleus/"
              />
            </div>

            </TimelineItem>

            <TimelineItem
              label="2024- 2025"
              date="2024"
              title="Lab Technician @ Grand Valley State University"
            >
            <ul className="list-disc list-inside font-medium text-black space-y-2 mt-4">
              <li className="pl-[1.5em] indent-[-1.5em]">
                Maintained lab equipment for safety and efficiency.
              </li>
              <li className="pl-[1.5em] indent-[-1.5em]">
                Assisted students with questions and technical issues.
              </li>
              <li className="pl-[1.5em] indent-[-1.5em]">
                Operated 3D printers to support academic projects.
              </li>
            </ul>

            </TimelineItem>

            <TimelineItem
              label="2022 - 2024"
              date="2022"
              title="L2 Controls Engineer @ Viastore Systems, a TOYOTA Automated Logistics Company"
            >
            <ul className="list-disc list-inside font-medium text-black space-y-2 mt-4">
              <li className="pl-[1.5em] indent-[-1.5em]">
                <strong>Clients Served:</strong>  General Motors, Dollar General, Gordon Food Service, Tyson Foods, McMaster-Carr, Mar-Jac Poultry
              </li>
              <li className="pl-[1.5em] indent-[-1.5em]">
                Designed and implemented Human-Machine Interfaces (HMI), ensuring optimal user experience and functionality.
              </li>
              <li className="pl-[1.5em] indent-[-1.5em]">
                Collaborated with multidisciplinary teams, including electricians, mechanics, controls/software engineers, and managers, to deliver seamless project execution.
              </li>
              <li className="pl-[1.5em] indent-[-1.5em]">
                Led all electrical and programming site activities, including installation, commissioning, testing, and providing stand-by support.
              </li>

              <div className="mt-3 flex justify-center">
                <Card
                  title="viastore"
                  description="Garantee Success !!"
                  imageSrc="RESUME/viastore.jpg"
                  href="https://www.bastiansolutions.com/viastore-north-america/"
                />
              </div>

            </ul>
            </TimelineItem>

            <TimelineItem
              label="2021 - 2022"
              date="2021"
              title="L1 Controls Engineer @ Viastore Systems"
            >
            </TimelineItem>

            <TimelineItem
              label="2019 - 2021"
              date="2019"
              title="Co-op Controls Engineer @ Viastore Systems"
            >
            </TimelineItem>

            <TimelineItem
              label="2019 - 2021"
              date="2019"
              title="Lab Technician @ Grand Valley State University"
            >
            </TimelineItem>

            <TimelineItem
              label="2018 - 2019"
              date="2018"
              title="Food Service Worker @ GVSU Campus Dining"
            >
              <ul className="list-disc list-inside font-medium text-black space-y-2 mt-4">
                <li>Issue credits or change due to customers</li>
                <li>Sterilize dishes, kitchen utensils, and equipment</li>
                <li>Prepare food according to recipes</li>
              </ul>
            </TimelineItem>

            <TimelineItem
              label="2017 - 2018"
              date="2017"
              title="Tax Preparer @ Goodwill Industry"
            >
              <ul className="list-disc list-inside font-medium text-black space-y-2 mt-4">
                <li>Answer routine tax questions</li>
                <li>Interview clients on taxable income and deductible expenses</li>
              </ul>
            </TimelineItem>

            <TimelineItem
              label="2016 - 2018"
              date="2016"
              title="Library Assistant @ Muskegon Community College"
            >
              <ul className="list-disc list-inside font-medium text-black space-y-2 mt-4">
                <li>Secured library equipment, including computers, printers, and cameras</li>
                <li>Maintained the library and instructed patrons on proper use of equipment</li>
              </ul>
            </TimelineItem>   
          </div>

          {/* Section Title */}
          <h2 className="text-2xl font-bold text-slate-900 my-6 " id="Education">Education 🎓</h2>
          <hr className="border-t border-slate-300 mb-6" />

          <div className="-my-6" >
            <TimelineItem
              label="2024 - Present"
              date="2024"
              title="Grand Valley State University"
            >
              <ul className="list-disc list-inside font-medium text-black space-y-2 mt-4">
                <li className="pl-[1.5em] indent-[-1.5em]">
                  Master of Science in Applied Computer Science 
                </li>
                <li className="pl-[1.5em] indent-[-1.5em]">
                  Expected Graduation Date: May 2026
                </li>
                <li className="pl-[1.5em] indent-[-1.5em]">
                  GPA: 3.9
                </li>
              </ul>
            </TimelineItem>

            <TimelineItem
              label="2018 - 2021"
              date="2018"
              title="Grand Valley State University"
            >
              <ul className="list-disc list-inside font-medium text-black space-y-2 mt-4">
                <li className="pl-[1.5em] indent-[-1.5em]">
                  Bachelor of Science in Engineering, Electrical Engineering 
                </li>
                <li className="pl-[1.5em] indent-[-1.5em]">
                  GPA 3.49
                </li>
              </ul>
            </TimelineItem>

            <TimelineItem
              label="2016 - 2018"
              date="2016"
              title="Muskegon Community College"
            >
            <ul className="list-disc list-inside font-medium text-black space-y-2 mt-4">
              <li className="pl-[1.5em] indent-[-1.5em]">
                Phi Theta Kappa Honor Society member 
              </li>
              <li className="pl-[1.5em] indent-[-1.5em]">
                2018 All-Michigan Academic Team 
              </li>
              <li className="pl-[1.5em] indent-[-1.5em]">
                Power of Unity Student Club
              </li>
              <li className="pl-[1.5em] indent-[-1.5em]">
                GPA 3.85
              </li>
            </ul>
            </TimelineItem>
          </div>

          <div className="sticky bottom-6 inset-x-0 text-center z-50 mt-10">
            <div className="inline-flex bg-pink-100 border border-pink-300 shadow-md rounded-full py-2 px-4 gap-4 dark:bg-pink-200 dark:border-pink-400">
              <a
                href="#Work"
                className="text-2xl active:scale-110 transition-transform cursor-pointer"
                title="Work Experience"
              >
                🧑‍💼
              </a>
              <a
                href="#Education"
                className="text-2xl active:scale-110 transition-transform cursor-pointer"
                title="Education"
              >
                🎓
              </a>
              <a>-</a>
              <a
                href="pdfs/RESUME_Engineering.pdf"
                download
                onClick={() => setClicked1(true)}
                className={`text-2xl transition-transform cursor-pointer active:scale-110 ${
                  !clicked1 ? 'animate-bounce' : ''
                }`}
                title="Download Resume"
              >
                🛠️📄
              </a>
              <a>-</a>
              <a
                href="pdfs/RESUME_Computer_Science.pdf"
                download
                onClick={() => setClicked2(true)}
                className={`text-2xl transition-transform cursor-pointer active:scale-110 ${
                  !clicked2 ? 'animate-bounce' : ''
                }`}
                title="Download Resume"
              >
                💻📄
              </a>

            </div>
          </div>

        </div>

      </main>
    </>
  );
}

export default Resume;