import ComingSoon from "./Components/CommingSoon";

function Puzzle () {
    return(
        <main className="border-t border-slate-200 lg:relative lg:mb-28 lg:ml-112 lg:border-t-0 xl:ml-120 ">
            <div className="h-full overflow-y-auto p-6 bg-gray-100 rounded-lg shadow-lg space-y-6">
                <h1 className="text-2xl font-bold mb-4 text-center">🧩 Puzzle</h1>
            </div>
            
            <div className="max-w-3xl h-screen mx-auto px-4 pt-6 pb-12 lg:pt-10 lg:px-8 sm:px-6">
                <div className="flex h-full justify-center items-center">
                    <ComingSoon/>
                </div>
             </div>
        </main> 
    );
};

export default Puzzle;