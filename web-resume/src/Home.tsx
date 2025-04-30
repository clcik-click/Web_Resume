function Home() {
  return (
    <>
      <main className="border-t border-slate-200 lg:relative lg:mb-28 lg:ml-112 lg:border-t-0 xl:ml-120">
        <div className="h-full overflow-y-auto p-6 bg-gray-100 rounded-lg shadow-lg space-y-6">
          <h1 className="text-2xl font-bold mb-4 text-center">🏠 Home</h1>
        </div>

        <div></div>
        
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 col-start-1 border-2 h-24">
            Step 1: Create a new React app using Vite and TypeScript.
          </div>
          <div className="col-span-2 col-start-2 border-2 h-24">
            Step 2: Install Tailwind CSS and set it up in your project.
          </div>
          <div className="col-span-2 col-start-1 border-2 h-24">
            Step 3: Create a new component for your resume.
          </div>
          <div className="col-span-2 col-start-2 border-2 h-24">
            Step 4: Use Tailwind CSS classes to style your resume component.
          </div> 
        </div>
        
      </main>
    </>
  );
}

export default Home;