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
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);


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

                {/* <LetsGoText /> */}

      
    <div className="text-animation">
      <span>🥾</span>
      <span>🥾</span>
      <span>👟</span>
      <span>👟</span>
      <span>👞</span>
      <span>👞</span>
      <span className="text-2xl font-bold text-pink-500 gap-[2px]">Let's GO</span>

    </div>
  {/* </button>
 */}

                {/* CS Recruiter Section */}
                <div id="cs">
                <CollapsibleSection title="💻 For Computer Science" >
                  <p >
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
</div>

                <div id="eng">
                {/* Engineering Recruiter Section */}
                <CollapsibleSection title="🛠️ For Engineering">
                  
<div className="p-4">
  <div className="space-y-6 text-gray-800 text-lg max-w-3xl mx-auto">
    <p>
      I also have a degree in Electrical Engineering from GVSU. If you're curious about my work back then, here’s a link to my capstone project from senior year:
    </p>

    <div className="flex justify-center">
      <img
        src="/Engineer_School.JPEG"
        alt="Preview"
        className=" h-[180px] object-cover rounded shadow"
      />
    </div>

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

    <p>
      During engineering school, I started working at viastore (now a TOYOTA Automated Logistics Company) as an intern and eventually got hired full-time as a Controls Engineer. I spent close to five years there — and I enjoyed every bit of it.
    </p>

    <div className="flex justify-center">
      <div className="rounded shadow overflow-hidden bg-black">
        <HoverVideo src="/Engineer.mp4" />
      </div>
    </div>

    <p>
      At viastore, I specialized in commissioning, testing, and designing Human-Machine Interfaces (HMIs). I’ve worked on various projects for customers like General Motors, Dollar General, Gordon Food Service, and Tyson Foods, just to name a few.
    </p>

    <div className="flex justify-center">
      <video
        src="/Engineer_Pallet.MP4"
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

                <div id="aboutme">
                {/* Personal Section */}
                <CollapsibleSection title="🌱 For Anyone Interested">

<div className="p-4">


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

                    <div className="flex justify-center mb-6">
    <div className="flex justify-center p-4">
      <ImageCarousel images={imagePaths} onFullscreenChange={setIsCarouselOpen}/>
    </div>
  </div>

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
</div>

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

       {/* Sticky Emoji Navigation Bar */}
{!isCarouselOpen && (
  <div className="sticky bottom-6 inset-x-0 text-center z-50">
    <div className="inline-flex bg-white shadow-md rounded-full py-2 px-4 gap-4 dark:bg-neutral-800">
      <a
        href="#cs"
        className="text-2xl active:scale-110 transition-transform cursor-pointer"
        title="Computer Science"
      >
        💻
      </a>
      <a
        href="#eng"
        className="text-2xl active:scale-110 transition-transform cursor-pointer"
        title="Engineering"
      >
        🛠️
      </a>
      <a
        href="#aboutme"
        className="text-2xl active:scale-110 transition-transform cursor-pointer"
        title="About Me"
      >
        🌱
      </a>
    </div>
  </div>
)}


        
        

      </main>
    </>
  );
}

export default Home;