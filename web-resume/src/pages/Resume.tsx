import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageLayout from "../components/layout/PageLayout";
import ButtonLink from "../components/ui/ButtonLink";
import Card from "../components/ui/Card";
import TimelineItem from "../components/ui/TimelineItem";

gsap.registerPlugin(ScrollTrigger);

function Resume() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;

    const context = gsap.context(() => {
      gsap.set('[data-resume-hero-item]', { autoAlpha: 0, y: 18 });
      gsap.to('[data-resume-hero-item]', {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
      });

      gsap.set('[data-resume-header]', { autoAlpha: 0, y: 16 });
      gsap.to('[data-resume-header]', {
        autoAlpha: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.1,
        ease: 'power2.out',
      });

      const blocks = gsap.utils.toArray<HTMLElement>('[data-resume-reveal]', root);
      blocks.forEach((block) => {
        gsap.fromTo(
          block,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: block,
              start: 'top 82%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, root);

    return () => context.revert();
  }, []);

  return (
    <PageLayout className="max-w-3xl">
      <div ref={pageRef}>
        <section className="mb-10 pb-2">
          <p data-resume-hero-item className="mb-3 text-sm font-semibold uppercase tracking-wide text-pink-600 dark:text-pink-400">
            Experience
          </p>
          <h1 data-resume-hero-item className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
            Resume
          </h1>
          <p data-resume-hero-item className="mt-3 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
            A combined software and controls engineering background, with hands-on experience across development, automation, and technical support.
          </p>
          <div data-resume-hero-item className="mt-7 flex flex-wrap gap-3">
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <ButtonLink href="pdfs/resume_controls.pdf" target="_blank" rel="noopener noreferrer">
                View Engineering Resume
              </ButtonLink>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <ButtonLink href="pdfs/resume_software.pdf" target="_blank" rel="noopener noreferrer" variant="secondary">
                View CS Resume
              </ButtonLink>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <ButtonLink href="#Work" variant="secondary">
                Jump to Work
              </ButtonLink>
            </motion.div>
          </div>
        </section>

        <div className="pb-12">
          {/* Section Title */}
          <h2 data-resume-header className="text-2xl font-bold text-slate-900 my-6 dark:text-white" id="Work" >Work Experience</h2>
          <hr data-resume-header className="border-t border-slate-300 mb-6 dark:border-slate-800" />

          {/* Timeline Item */}
          <div className="-my-6" >
            <div data-resume-reveal>
            <TimelineItem
              label="2025 - Present"
              date="2025"
              title="Software Developer @ Blue Nucleus"
            >
            <ul className="list-disc list-inside font-medium text-slate-900 space-y-2 mt-4 dark:text-slate-200">
              <li className="pl-[1.5em] indent-[-1.5em]">
                Developed software features and tools to support internal workflows and client-facing applications
              </li>
              <li className="pl-[1.5em] indent-[-1.5em]">
                Collaborated with cross-functional teams to deliver functional solutions aligned with project requirements
              </li>
              <li className="pl-[1.5em] indent-[-1.5em]">
                Improved system eﬃciency and usability through iterative development and testing
              </li>

              <motion.div className="mt-3 flex justify-center" whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <Card
                  title="Blue Nucleus"
                  description="Where vision meets execution."
                  imageSrc="RESUME/GVSU.jpg"
                  href="https://www.gvsu.edu/bluenucleus/"
                />
              </motion.div>
            </ul>

            </TimelineItem>
            </div>

            <div data-resume-reveal>
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
            </div>

            <div data-resume-reveal>
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

              <li className="list-none mt-3">
                <motion.div className="flex justify-center" whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                  <Card
                    title="viastore"
                    description="Guarantee Success !!"
                    imageSrc="RESUME/viastore.jpg"
                    href="https://www.bastiansolutions.com/viastore-north-america/"
                  />
                </motion.div>
              </li>

            </ul>
            </TimelineItem>
            </div>

            <div data-resume-reveal>
            <TimelineItem
              label="2021 - 2022"
              date="2021"
              title="L1 Controls Engineer @ Viastore Systems"
            >
            </TimelineItem>
            </div>

            <div data-resume-reveal>
            <TimelineItem
              label="2019 - 2021"
              date="2019"
              title="Co-op Controls Engineer @ Viastore Systems"
            >
            </TimelineItem>
            </div>

            <div data-resume-reveal>
            <TimelineItem
              label="2019 - 2021"
              date="2019"
              title="Lab Technician @ Grand Valley State University"
            >
            </TimelineItem>
            </div>

            <div data-resume-reveal>
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
            </div>

            <div data-resume-reveal>
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
            </div>

            <div data-resume-reveal>
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
          </div>

          {/* Section Title */}
          <h2 data-resume-header className="text-2xl font-bold text-slate-900 my-6 dark:text-white" id="Education">Education</h2>
          <hr data-resume-header className="border-t border-slate-300 mb-6 dark:border-slate-800" />

          <div className="-my-6" >
            <div data-resume-reveal>
            <TimelineItem
              label="2024 - 2026"
              date="2024"
              title="Grand Valley State University"
            >
              <ul className="list-disc list-inside font-medium text-slate-900 space-y-2 mt-4 dark:text-slate-200">
                <li className="pl-[1.5em] indent-[-1.5em]">
                  Master of Science in Applied Computer Science 
                </li>
                <li className="pl-[1.5em] indent-[-1.5em]">
                  GPA: 3.9
                </li>
              </ul>
            </TimelineItem>
            </div>

            <div data-resume-reveal>
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
            </div>

            <div data-resume-reveal>
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
          </div>

        </div>
      </div>

    </PageLayout>
  );
}

export default Resume;
