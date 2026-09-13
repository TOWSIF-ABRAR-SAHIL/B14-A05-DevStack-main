import logo from '../assets/logo-text.png';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
        
          <div className="md:col-span-2 space-y-4">
            <img src={logo} alt="Dev Stack Logo" className="h-8 w-auto object-contain" />

            <p className="text-xs text-gray-500 max-w-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex items-center gap-4 text-xs font-semibold text-gray-600 pt-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-gray-900">GitHub</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-gray-900">Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-gray-900">LinkedIn</a>
            </div>
          </div>

        
          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">PRODUCT</h4>
            <ul className="space-y-2.5 text-xs text-gray-500 font-medium">
              <li><a href="#home" className="hover:text-gray-900">Home</a></li>
              <li><a href="#technologies" className="hover:text-gray-900">Technologies</a></li>
              <li><a href="#projects" className="hover:text-gray-900">Projects</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">COMPANY</h4>
            <ul className="space-y-2.5 text-xs text-gray-500 font-medium">
              <li><a href="#about" className="hover:text-gray-900">About</a></li>
              <li><a href="#contact" className="hover:text-gray-900">Contact</a></li>
              <li><a href="#careers" className="hover:text-gray-900">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">LEGAL</h4>
            <ul className="space-y-2.5 text-xs text-gray-500 font-medium">
              <li><a href="#privacy" className="hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-gray-900">Terms of Service</a></li>
            </ul>
          </div>
        </div>

     
        <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-400 gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-gray-600">Privacy</a>
            <a href="#terms" className="hover:text-gray-600">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}// Footer layout styling
