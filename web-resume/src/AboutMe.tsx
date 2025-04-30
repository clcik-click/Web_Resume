function AboutMe() {
  return (
    <>
      <main className="border-t border-slate-200 lg:relative lg:mb-28 lg:ml-112 lg:border-t-0 xl:ml-120">
        <div className="h-full overflow-y-auto p-6 bg-gray-100 rounded-lg shadow-lg space-y-6">
          <h1 className="text-2xl font-bold mb-4 text-center">😚 About Me <h1 className="wave">👋</h1></h1>
        </div>
        <div className="mt-12 pr-4 grid grid-cols-3 gap-4 w-full">
          {/* left box */}
          <div className = "relative mx-auto block w-96 overflow-hidden rounded-lg bg-slate-200 shadow-xl shadow-slate-200 ">
            <img src="Chicken_Fried.jpeg" />
          </div>

          {/* right box - slightly offset*/}
            <div className="p-6 col-span-2 bg-white rounded-lg shadow-md space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">Hoan Lam</h2>
              <p className="text-gray-600 leading-relaxed">
                Donec ultrices non erat dignissim luctus. Etiam ut urna quis sem sodales congue. <br />
                Integer vel enim lacinia, mollis nisl vel, interdum lacus. In quis aliquam urna. <br />
                Etiam ut pretium est, mollis auctor augue. <br />
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. <br />
                In hac habitasse platea dictumst. Pellentesque aliquam sapien ac massa tristique, eget vulputate diam gravida. <br />
                Suspendisse interdum sapien ac diam rhoncus lobortis. <br />
                Maecenas felis leo, tincidunt condimentum placerat non, accumsan a erat. <br />
                Donec ut auctor diam, id pretium massa.
              </p>
            </div>
        </div>

      </main>
    </>
  );
}

export default AboutMe;