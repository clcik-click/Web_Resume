import { useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import ButtonLink from '../components/ui/ButtonLink';
import HoverVideo from '../components/media/HoverVideo';
import ImageCarousel from '../components/media/ImageCarousel';
import CollapsibleSection from '../components/ui/CollapsibleSection';
import { homeCarouselImages } from '../data/home';

function Home() {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  const triggerAnimation = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 1000); // match animation duration
  };

  return (
    <>
      <PageLayout className="max-w-3xl">
        <section className="mb-12 border-b border-slate-200 pb-10 dark:border-slate-800">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-pink-600 dark:text-pink-400">
            Software Developer · Controls Engineer
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Hoan Lam
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            I build practical software with an engineering mindset, shaped by industrial automation work and graduate study in applied computer science.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <ButtonLink href="/resume">View Resume</ButtonLink>
            <ButtonLink href="/projects" variant="secondary">View Projects</ButtonLink>
            <ButtonLink href="https://www.linkedin.com/in/hoan-lam-3b72a5179/" target="_blank" rel="noopener noreferrer" variant="secondary">
              Contact
            </ButtonLink>
          </div>
        </section>
        
        {/* Blog Article */}
        <div className="pb-12">
          <div className="max-w-2xl">

            {/* Avatar Media */}
            <div className="flex items-center mb-4">
              <img className="w-12 h-12 object-cover rounded-full mr-4" src="TAB/Avatar.jpeg" alt="Avatar" />
              <ul className="text-sm text-slate-500 dark:text-slate-400">
                <li>June 11th</li>
                <li>10 min read</li>
              </ul>
            </div>
            {/* End Avatar Media */}

            {/* Content */}
            <div className="space-y-8 md:space-y-10">
              {/* Intro */}
              <div className="space-y-3">

                <p className="text-lg text-slate-800 dark:text-slate-200">Hi,</p>
                <p className="text-lg text-slate-800 dark:text-slate-200">To whom it may concern,</p>
                <p className="text-lg text-slate-800 dark:text-slate-200">My name is Hoan, pronounced just like Juan. You can think of me as the Asian John or the Asian Juan, if that helps leave an impression.</p>               
                <p className="text-lg text-slate-800 dark:text-slate-200">
                  I've been wanting to make a personal website for a long time. 
                  A place where I can try out new features and components I think are cool, and then make them work together. 
                  It’s kind of like collecting Pokémon if you're a gamer, tools if you're an engineer, ingredients and recipes if you're a chef, plants if you're a gardener, or sceneries if you're a photographer. 
                  Songs, if you play an instrument... you know what I mean. 
                  We all see things we like and want to make them our own—it’s part of what gets us out of bed in the morning 😊. This website does that, but at a much lower cost. 
                  Its goal is to become a collection of interesting, useful, and personal experiments.
                </p>
                <p className="text-lg text-slate-800 dark:text-slate-200">
                  Furthermore, this post is part introduction and part portfolio. 
                  Whether you're a computer science recruiter, an engineering recruiter, or just someone curious about who I am, I hope you enjoy getting to know me.
                </p>
              </div>

              {/* <LetsGoText /> */}
              <div className="text-animation text-2xl font-bold text-pink-500 text-center dark:text-pink-400" onMouseEnter={triggerAnimation}>
                {['🥾', '🥾', '👟', '👟', '👞', '👞'].map((char, i) => (
                  <span
                    key={i}
                    className={animate ? `bounce delay-${i}` : ''}
                  >
                    {char}
                  </span>
                ))}
              </div>

              {/* CS Section */}
              <div id="cs">
                <CollapsibleSection title="Computer Science" >
                  <p >
                    I’m a master’s student studying Applied Computer Science at Grand Valley State University. 
                    I’m working on my badges in Data Analytics, Database Management, Software Design and Development, and Web and Mobile. 
                    The naming might sound a bit distracting, but if I were to narrow down what I actually do, it would be software and database management and development — 
                    which is just something every computer science student does anyway.
                  </p>
                  <p>
                    During my first year as a graduate student, I had the chance to work on several meaningful projects. For example, a project focused on databases:{" "}
                    <a href="https://github.com/clcik-click/CIS660_Project" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">
                      CIS660 Project
                    </a>, a project involving an AI agent:{" "}
                    <a href="https://github.com/imtiendat0311/AI-Agent" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">
                      AI Agent Project
                    </a>, and a project using visual detection:{" "}
                    <a href="https://github.com/clcik-click/CIS671_Projec" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">
                      CIS671 Project
                    </a>. There were many smaller projects too, but those are a few highlights of the things I took the time to document.
                  </p>
                  <p>
                    On top of that, I’m currently working as an intern at Blue Nucleus, where we provide custom software development services to real-world industry clients. It’s been a great learning experience so far.
                  </p>
                  <p>
                    I’m always eager to learn and I really enjoy challenging myself.
                  </p>
                </CollapsibleSection>
              </div>

                {/* Engineering*/}
                <div id="eng">
                  {/* Engineering Recruiter Section */}
                  <CollapsibleSection title="Engineering">
                    <div className="p-4">
                      
                      <div className="space-y-6 text-slate-800 text-lg max-w-3xl mx-auto dark:text-slate-200">
                        <p>
                          I also have a degree in Electrical Engineering from GVSU. If you're curious about my work back then, here’s a link to my capstone project from senior year:
                        </p>

                        <div className="flex justify-center">
                          <img
                            src="HOME/Engineer_School.JPEG"
                            alt="Preview"
                            className=" h-[180px] object-cover rounded shadow"
                          />
                        </div>

                        <p>
                          <a
                            href="https://www.gvsu.edu/engineering/2021-engineering-design-conference-gvsu-department-of-chemistry-243.htm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline dark:text-blue-400"
                          >
                            2021 GVSU Engineering Design Conference – Department of Chemistry
                          </a>
                        </p>

                        <p>
                          During engineering school, I started working at viastore (now a TOYOTA Automated Logistics Company) as an intern and eventually got hired full-time as a Controls Engineer. I spent close to five years there — and I enjoyed every bit of it.
                        </p>

                        <div className="flex justify-center">
                          <div className="rounded shadow overflow-hidden bg-black">
                            <HoverVideo src="videos/Engineer.mp4" />
                          </div>
                        </div>

                        <p>
                          At viastore, I specialized in commissioning, testing, and designing Human-Machine Interfaces (HMIs). I’ve worked on various projects for customers like General Motors, Dollar General, Gordon Food Service, and Tyson Foods, just to name a few.
                        </p>

                        <div className="flex justify-center">
                          <video
                            src="videos/Engineer_Pallet.MP4"
                            muted
                            controls
                            className="w-[320px] h-[250px] object-contain rounded shadow bg-black"
                          >
                            Your browser does not support the video tag.
                          </video>
                        </div>

                      </div>
                    </div>
                  </CollapsibleSection>
                </div>
                
                {/* About me */}
                <div id="aboutme">
                  <CollapsibleSection title="Anyone Interested">
                    <div className="p-4">
                      <div className="space-y-4 text-slate-800 text-lg dark:text-slate-200">
                        <p>
                          I’m someone who likes to try new ideas. I often find myself asking, “Why not?” — and that curiosity has led me to do a lot of unexpected things.
                        </p>
                        <p>
                          I’m glad I started playing soccer again with friends. I was horrible at it in school, but now it’s just fun. 
                          I tried pottery too — and now I know I’m not very good at it, but I enjoyed the process anyway. 
                          Same thing with rock climbing — turns out I need to train more, but I’m learning. I also started going to live performances. 
                          My first Broadway show was in New York City, and since then, I’ve been to many more. That extended into a love for symphonies and all kinds of performances. 
                          I just think they’re so cool.
                        </p>
                        <p>
                          Eventually, I got curious about nutrition because I wanted to feel better and perform better in my day-to-day life. 
                          That led me to become a nutrition coach. So far, I only have two clients — but I enjoy working with them and getting to know them deeply. 
                          One thing led to another, and that interest in nutrition turned into me working on my own little plot of garden (one of my clients/friends suggested the idea). 
                          Something I didn’t think I’d do until I owned a house (which, during this economy, would be quite a challenge). I’m doing it now.
                        </p>

                        <div className="flex justify-center mb-6">
                          <div className="flex justify-center p-4">
                            <ImageCarousel images={homeCarouselImages} onFullscreenChange={setIsCarouselOpen}/>
                          </div>
                        </div>

                        <p>
                          But the thing I’m most proud of trying — the thing I used to dream about doing when I was in college the first time — is learning to play the piano. 
                          I started taking lessons, and I’m still learning, but now I can play my{" "}   
                          <a
                            href="https://www.youtube.com/watch?v=PTIMTGjWDbg"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline dark:text-blue-400"
                          >favorite song</a>
                          
                          . And that makes me really happy.
                        </p>
                      </div>
                    </div>
                  </CollapsibleSection>
                </div>

                {/* Conclusion */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">In Conclusion</h3>
                  <p className="text-lg text-slate-800 dark:text-slate-200">
                    Whether you’re here for my technical background or just curious about the person behind the scenes — thank you for taking the time.
                  </p>
                  <p className="text-lg text-slate-800 dark:text-slate-200">
                    I’m curious, a student, and someone who enjoys doing different things. You could say I specialize in living life, engineering, and software development. 
                    Every experience shapes how I think and solve problems.
                  </p>
                  <p className="text-lg text-slate-800 dark:text-slate-200">
                    If any of this resonates with you — whether you have an opportunity in mind or just want to connect — I’d love to hear from you.
                  </p>
                  <p className="text-lg text-slate-800 dark:text-slate-200">Thanks again for stopping by.</p>
                </div>

              </div>
            {/* End Content */}

          </div>
        </div>
        {/* End Blog Article */}

       {/* Sticky section navigation */}
        {!isCarouselOpen && (
          <div className="sticky bottom-6 inset-x-0 text-center z-50">
            <div className="inline-flex bg-white border border-slate-200 shadow-md rounded-full py-2 px-4 gap-4 dark:border-slate-800 dark:bg-slate-900">
              <a
                href="#cs"
                className="text-sm font-semibold text-slate-700 hover:text-pink-600 active:scale-110 transition-transform cursor-pointer dark:text-slate-300 dark:hover:text-pink-400"
                title="Computer Science"
              >
                CS
              </a>
              <a
                href="#eng"
                className="text-sm font-semibold text-slate-700 hover:text-pink-600 active:scale-110 transition-transform cursor-pointer dark:text-slate-300 dark:hover:text-pink-400"
                title="Engineering"
              >
                ENG
              </a>
              <a
                href="#aboutme"
                className="text-sm font-semibold text-slate-700 hover:text-pink-600 active:scale-110 transition-transform cursor-pointer dark:text-slate-300 dark:hover:text-pink-400"
                title="About Me"
              >
                LIFE
              </a>
            </div>
          </div>
        )}
      </PageLayout>
    </>
  );
}

export default Home;
