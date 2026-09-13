import logo from '../assets/logo-text.png';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="hidden md:flex items-center gap-2">
            <img src={logo} alt="Dev Stack Logo" className="h-8 w-auto object-contain" />
          </div>

  
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a  className="text-pink-600 font-semibold">Home</a>
            <a className="hover:text-gray-900 transition">Technologies</a>
            <a className="hover:text-gray-900 transition">Projects</a>
            <a className="hover:text-gray-900 transition">About</a>
            <a  className="hover:text-gray-900 transition">Contact</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-2">
              Sign In
            </button>
            <button className="text-sm font-medium text-white px-5 py-2 rounded-full bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-600 hover:opacity-95 transition shadow-sm">
              Sign Up
            </button>
          </div>

          <div className="flex md:hidden items-center justify-between w-full">
            
           
             <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle m-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-white rounded-box w-52 border border-gray-100">
                <li><a>Home</a></li>
                <li><a >Technologies</a></li>
                <li><a >Projects</a></li>
                <li><a >About</a></li>
                <li><a>Contact</a></li>
              </ul>
            </div>

            
            <div className="flex items-center justify-center">
              <img src={logo} alt="Dev Stack Logo" className="h-7 w-auto object-contain" />
            </div>

           
            <div className="flex items-center gap-1.5">
              <button className="text-xs font-medium text-gray-700 hover:text-gray-900 px-2 py-1">
                Sign In
              </button>
              <button className="text-xs font-medium text-white px-3 py-1.5 rounded-full bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-600 hover:opacity-95 transition shadow-sm">
                Sign Up
              </button>
            </div>

          </div>

        </div>
      </div>
    </nav>
  );
}