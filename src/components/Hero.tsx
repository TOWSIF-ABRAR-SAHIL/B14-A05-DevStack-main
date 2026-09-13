import heroImg from '../assets/banner-stack.png';

export default function Hero() {
  return (
    <section id="home" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
         
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Build Your Ideal <br />
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-xl">
              Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                className="px-6 py-3 rounded-xl text-white font-medium text-sm bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-600 hover:opacity-90 transition shadow-md"
              >
                Explore Technologies
              </a>
              <button className="px-6 py-3 rounded-xl text-gray-700 font-medium text-sm border border-gray-200 hover:bg-gray-50 transition">
                Learn More
              </button>
            </div>
          </div>

          
          <div className="flex justify-center md:justify-end">
            <img 
              src={heroImg} 
              alt="Development Stack Illustration" 
              className="w-full max-w-md lg:max-w-lg object-contain drop-shadow-xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
}// Hero banner gradient
