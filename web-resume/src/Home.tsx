import { useState } from 'react';
import LetsGoText from './LetsGoText';
import HoverVideo from './HoverVideo';
import ImageCarousel from './ImageCarousel';


const imagePaths = [
  "/Soccer.JPEG",
  "/First_Show.JPEG",
  "/Nutrition.JPEG",
  "/Garden.JPEG",
  "/Thank_You.JPEG",
  "/Art.JPEG",
  "/Piano.JPEG",
];


const CollapsibleSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-l-4 border-pink-500 pl-4 space-y-2">
      <button
        onClick={() => setOpen(!open)}
        className="text-pink-500 font-semibold hover:text-pink-700"
      >
        {open ? `Hide ${title}` : `Read More: ${title}`}
      </button>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          open ? "max-h-[2000px] opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-gray-800 text-lg space-y-3">{children}</div>
      </div>
    </div>
  );
};


function Home() {

  return (
    <>
      <main className="border-t border-slate-200 lg:relative lg:mb-28 lg:ml-112 lg:border-t-0 xl:ml-120">
        <div className="h-full overflow-y-auto p-6 bg-gray-100 rounded-lg shadow-lg space-y-6">
          <h1 className="text-2xl font-bold mb-4 text-center"><h1 className="wave">👋</h1> Hello, I'm Hoan — Nice to Meet You </h1>
        </div>

        <div></div>
        
        {/* Blog Article */}
        <div className="max-w-3xl mx-auto px-4 pt-6 pb-12 lg:pt-10 lg:px-8 sm:px-6">
          <div className="max-w-2xl">

            {/* Avatar Media */}
            <div className="flex items-center mb-4">
              <img className="w-12 h-12 object-cover rounded-full mr-4" src="Avatar.jpeg" alt="Avatar" />
              <ul className="text-sm text-gray-500">
                <li>June 6th</li>
                <li>10 min read</li>
              </ul>
            </div>
            {/* End Avatar Media */}

            {/* Content */}
              <div className="space-y-8 md:space-y-10">
                {/* Intro */}
                <div className="space-y-3">
                  <p className="text-lg text-gray-800">
                    Good morning! My name is Hoan, pronounced just like Juan. I sometimes joke that I’m the Asian Juan — if that helps lock it in 😄
                  </p>
                  <p className="text-lg text-gray-800">
                    This post is part intro, part portfolio, and part reflection — whether you’re a computer science recruiter, engineering recruiter, or just someone curious about the kind of person I am, I hope you enjoy getting to know me.
                  </p>
                </div>

                <LetsGoText />

      <button className="mt-20 px-4 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 bg-white transition-transform duration-300 ease-in-out hover:bg-purple-600 hover:border-transparent hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
    <div className="text-animation">
      <span>L</span>
      <span>e</span>
      <span>t</span>
      <span>'</span>
      <span>s</span>
      <span>G</span>
      <span>O</span>
    </div>
  </button>


                {/* CS Recruiter Section */}
                <CollapsibleSection title="💻 For Computer Science">
                  <p>
                    I’m a master’s student studying Applied Computer Science at Grand Valley State University. I’m working on my badges in Data Analytics, Database Management, Software Design and Development, and Web and Mobile. The naming might sound a bit distracting, but if I were to narrow down what I actually do, it would be software and database management and development — which is just something every computer science and software engineering student does anyway.
                  </p>
                  <p>
                    During my first year as a graduate student, I had the chance to work on several meaningful projects. For example, a project focused on databases:{" "}
                    <a href="https://github.com/clcik-click/CIS660_Project" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      CIS660 Project
                    </a>, a project involving a machine learning AI agent:{" "}
                    <a href="https://github.com/imtiendat0311/AI-Agent" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      AI Agent Project
                    </a>, and a project using MA visual detection:{" "}
                    <a href="https://github.com/clcik-click/CIS671_Projec" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      CIS671 Project
                    </a>. There were many smaller projects too, but those are a few highlights of the things I took the time to document :)
                  </p>
                  <p>
                    On top of that, I’m currently working as an intern at Blue Nucleus, where we provide custom software development services to real-world industry clients. It’s been a great learning experience so far.
                  </p>
                  <p>
                    I’m always eager to learn and I really enjoy challenging myself :))
                  </p>
                </CollapsibleSection>

                {/* Engineering Recruiter Section */}
                <CollapsibleSection title="🛠️ For Engineering">
                  
<div className="p-4">

<div className="flex justify-center items-start gap-6 mb-6 max-w-[800px] mx-auto px-4">
  {/* Left: Static Image */}
  <img
    src="/Engineer_School.JPEG"
    alt="Preview"
    className="w-[200px] h-[200px] object-cover rounded shadow"
  />

  {/* Center: Hover Video */}
  <div className=" rounded shadow overflow-hidden bg-black">
    <HoverVideo src="/Engineer.mp4" />
  </div>

  {/* Right: Regular Video */}
  <video
    src="/Engineer_Pallet.MP4"
    muted
    controls
    className="w-[200px] h-[200px] object-contain rounded shadow bg-black"
  >
    Your browser does not support the video tag.
  </video>
</div>





  <div className="space-y-4 text-gray-800 text-lg">
    <p>
      I also have a degree in Electrical Engineering from GVSU. I started at viastore (now a TOYOTA Automated Logistics Company) as an intern and eventually got hired full-time as a Controls Engineer. I spent close to five years there — and I enjoyed every bit of it.
    </p>
    <p>
      At viastore, I specialized in commissioning, testing, and designing Human-Machine Interfaces (HMIs). I’ve worked on various projects for customers like General Motors, Dollar General, Gordon Food Service, and Tyson Foods, just to name a few.
    </p>
    <p>
      If you're curious about my work back then, here’s a link to my capstone project from senior year:
    </p>
    <p>
      <a
        href="https://www.gvsu.edu/engineering/2021-engineering-design-conference-gvsu-department-of-chemistry-243.htm"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        2021 GVSU Engineering Design Conference – Department of Chemistry
      </a>
    </p>
  </div>
</div>

                </CollapsibleSection>

                {/* Personal Section */}
                <CollapsibleSection title="🌱 For Anyone Interested in Knowing Me">

<div className="p-4">
  <div className="flex justify-center mb-6">
    <div className="flex justify-center p-4">
      <ImageCarousel images={imagePaths} />
    </div>
  </div>


  <div className="space-y-4 text-gray-800 text-lg">
                  <p>
                    I’m someone who likes to try new ideas. I often find myself asking, “Why not?” — and that curiosity has led me to do a lot of unexpected things.
                  </p>
                  <p>
                    I’m glad I started playing soccer again with friends. I was horrible at it in school, but now it’s just fun. I tried pottery too — and now I know I’m not very good at it, but I enjoyed the process anyway. Same thing with rock climbing — turns out I need to train more, but I’m learning. I also started going to live performances. My first Broadway show was in New York City, and since then, I’ve been to many more. That extended into a love for symphonies and all kinds of performances. I just think they’re so cool.
                  </p>
                  <p>
                    Eventually, I got curious about nutrition because I wanted to feel better and perform better in my day-to-day life. That led me to become a certified nutrition coach. So far, I only have two clients — but I enjoy working with them and getting to know them deeply. One thing led to another, and that interest in nutrition turned into me working on my own little plot of garden (one of my clients/friends suggested the idea). Something I didn’t think I’d do until I owned a house (which, during this economy, would be quite a challenge). Still, I’m doing it now.
                  </p>
                  <p>
                    But the thing I’m most proud of — the thing I used to dream about when I was struggling to survive in college — is learning to play the piano. I finally started, and I’m still learning, but now I can play my{" "}   
                    <a
                      href="https://www.youtube.com/watch?v=PTIMTGjWDbg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >favorite song</a>
                    
                    . And that makes me really happy :))
                  </p>
  </div>
</div>
                

                </CollapsibleSection>

                {/* Conclusion */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold">✨ In Conclusion</h3>
                  <p className="text-lg text-gray-800">
                    Whether you’re here for my technical background or just curious about the person behind the resume — thank you for taking the time.
                  </p>
                  <p className="text-lg text-gray-800">
                    I’m a builder, a learner, and a doer. I’ve worn different hats, from engineer to developer to coach — and every experience adds a new layer to how I think and solve problems.
                  </p>
                  <p className="text-lg text-gray-800">
                    If any of this resonates with you — whether you have an opportunity in mind or just want to connect — I’d love to hear from you.
                  </p>
                  <p className="text-lg text-gray-800">Thanks again for stopping by. 🙏</p>
                </div>

              </div>
            {/* End Content */}

          </div>
        </div>
        {/* End Blog Article */}

        {/* Sticky Share Group */}
        <div className="sticky bottom-6 inset-x-0 text-center">
          <div className="inline-block bg-white shadow-md rounded-full py-3 px-4 dark:bg-neutral-800">
            <div className="flex items-center gap-x-1.5">
              {/* Button */}
              <div className="hs-tooltip inline-block">
                <button type="button" className="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                  875
                  <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-2xs dark:bg-black" role="tooltip">
                    Like
                  </span>
                </button>
              </div>
              {/* Button */}

              <div className="block h-3 border-e border-gray-300 mx-3 dark:border-neutral-600"></div>

              {/* Button */}
              <div className="hs-tooltip inline-block">
                <button type="button" className="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
                  16
                  <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-2xs dark:bg-black" role="tooltip">
                    Comment
                  </span>
                </button>
              </div>
              {/* Button */}

              <div className="block h-3 border-e border-gray-300 mx-3 dark:border-neutral-600"></div>

              {/* Button */}
              <div className="hs-dropdown relative inline-flex">
                <button id="hs-blog-article-share-dropdown" type="button" className="flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/></svg>
                  Share
                </button>
                <div className="hs-dropdown-menu w-56 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mb-1 z-10 bg-gray-900 shadow-md rounded-xl p-2 dark:bg-neutral-950" role="menu" aria-orientation="vertical" aria-labelledby="hs-blog-article-share-dropdown">
                  <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-hidden focus:bg-white/10 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900" href="#">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                    Copy link
                  </a>
                  <div className="border-t border-gray-600 my-2 dark:border-neutral-800"></div>
                  <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-hidden focus:bg-white/10 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900" href="#">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                    Share on Twitter
                  </a>
                  <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-hidden focus:bg-white/10 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900" href="#">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                    </svg>
                    Share on Facebook
                  </a>
                  <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-hidden focus:bg-white/10 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900" href="#">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                    Share on LinkedIn
                  </a>
                </div>
              </div>
              {/* Button */}
            </div>
          </div>
        </div>
        {/* End Sticky Share Group */}
        
        

      </main>
    </>
  );
}

export default Home;