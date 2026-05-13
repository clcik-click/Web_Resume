import PageHeader from "../components/layout/PageHeader";
import PageLayout from "../components/layout/PageLayout";
import Card from "../components/ui/Card";
import TimelineItem from "../components/ui/TimelineItem";
import { useState } from 'react';

function Resume() {
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);

  return (
    <PageLayout className="max-w-3xl">
      <PageHeader
        title="Resume"
        description="A combined software and controls engineering background, with hands-on experience across development, automation, and technical support."
        eyebrow="Experience"
      />

        <div className="pb-12">
          {/* Section Title */}
          <h2 className="text-2xl font-bold text-slate-900 my-6 dark:text-white" id="Work" >Work Experience</h2>
          <hr className="border-t border-slate-300 mb-6 dark:border-slate-800" />

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
            <ul className="list-disc list-inside font-medium text-slate-900 space-y-2 mt-4 dark:text-slate-200">
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
            <ul className="list-disc list-inside font-medium text-slate-900 space-y-2 mt-4 dark:text-slate-200">
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

              <li className="list-none mt-3 flex justify-center">
                <Card
                  title="viastore"
                  description="Guarantee Success !!"
                  imageSrc="RESUME/viastore.jpg"
                  href="https://www.bastiansolutions.com/viastore-north-america/"
                />
              </li>

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
              <ul className="list-disc list-inside font-medium text-slate-900 space-y-2 mt-4 dark:text-slate-200">
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
              <ul className="list-disc list-inside font-medium text-slate-900 space-y-2 mt-4 dark:text-slate-200">
                <li>Answer routine tax questions</li>
                <li>Interview clients on taxable income and deductible expenses</li>
              </ul>
            </TimelineItem>

            <TimelineItem
              label="2016 - 2018"
              date="2016"
              title="Library Assistant @ Muskegon Community College"
            >
              <ul className="list-disc list-inside font-medium text-slate-900 space-y-2 mt-4 dark:text-slate-200">
                <li>Secured library equipment, including computers, printers, and cameras</li>
                <li>Maintained the library and instructed patrons on proper use of equipment</li>
              </ul>
            </TimelineItem>   
          </div>

          {/* Section Title */}
          <h2 className="text-2xl font-bold text-slate-900 my-6 dark:text-white" id="Education">Education</h2>
          <hr className="border-t border-slate-300 mb-6 dark:border-slate-800" />

          <div className="-my-6" >
            <TimelineItem
              label="2024 - Present"
              date="2024"
              title="Grand Valley State University"
            >
              <ul className="list-disc list-inside font-medium text-slate-900 space-y-2 mt-4 dark:text-slate-200">
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
              <ul className="list-disc list-inside font-medium text-slate-900 space-y-2 mt-4 dark:text-slate-200">
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
            <ul className="list-disc list-inside font-medium text-slate-900 space-y-2 mt-4 dark:text-slate-200">
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
            <div className="inline-flex bg-white border border-slate-200 shadow-md rounded-full py-2 px-4 gap-4 dark:border-slate-800 dark:bg-slate-900">
              <a
                href="#Work"
                className="text-sm font-semibold text-slate-700 hover:text-pink-600 active:scale-110 transition-transform cursor-pointer dark:text-slate-300 dark:hover:text-pink-400"
                title="Work Experience"
              >
                Work
              </a>
              <a
                href="#Education"
                className="text-sm font-semibold text-slate-700 hover:text-pink-600 active:scale-110 transition-transform cursor-pointer dark:text-slate-300 dark:hover:text-pink-400"
                title="Education"
              >
                Education
              </a>
              <span className="text-slate-300 dark:text-slate-700">|</span>
              <a
                href="pdfs/RESUME_Engineering.pdf"
                download
                onClick={() => setClicked1(true)}
                className={`text-sm font-semibold text-slate-700 hover:text-pink-600 transition-transform cursor-pointer active:scale-110 dark:text-slate-300 dark:hover:text-pink-400 ${
                  !clicked1 ? 'animate-bounce' : ''
                }`}
                title="Download engineering resume"
              >
                Engineering PDF
              </a>
              <span className="text-slate-300 dark:text-slate-700">|</span>
              <a
                href="pdfs/RESUME_Computer_Science.pdf"
                download
                onClick={() => setClicked2(true)}
                className={`text-sm font-semibold text-slate-700 hover:text-pink-600 transition-transform cursor-pointer active:scale-110 dark:text-slate-300 dark:hover:text-pink-400 ${
                  !clicked2 ? 'animate-bounce' : ''
                }`}
                title="Download computer science resume"
              >
                CS PDF
              </a>

            </div>
          </div>

        </div>

    </PageLayout>
  );
}

export default Resume;
