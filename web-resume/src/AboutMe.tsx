function AboutMe() {
  return (
    <>
      <main className="border-t border-slate-200 lg:relative lg:mb-28 lg:ml-112 lg:border-t-0 xl:ml-120">
        <div><h1> 😚 - About Me </h1></div>
        <div className="columns-1 md:columns-2 xl:columns-3 gap-7 ">
          {/* left box */}
          <div className = "break-inside-avoid mb-8">
            <img src="Chicken_Fried.jpeg" />
          </div>

          {/* right box - slightly offset*/}
          <div className=" break-inside-avoid  mb-8">
            <div></div>
            <p>Something about myself</p>
          </div>
        </div>

      </main>
    </>
  );
}

export default AboutMe;