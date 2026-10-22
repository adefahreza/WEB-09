function Footer() {
  return (
    <footer className="bg-white border-t border-[#dbeafe] py-8">
      <div className="max-w-[1100px] mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <p className="text-xl font-extrabold text-[#0f1c35]">
          adefahreza<span className="text-[#2563eb]">.</span>
        </p>

        {/* Copyright Text */}
        <p className="text-xs sm:text-sm text-[#4b6280] text-center">
          &copy; 2026 A. Muh. Ade Fahreza Arif. All rights reserved.
        </p>

        {/* Footer Nav */}
        <nav className="flex items-center gap-5 text-xs sm:text-sm font-medium text-[#4b6280]">
          <a href="#home" className="hover:text-[#2563eb] transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-[#2563eb] transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-[#2563eb] transition-colors">
            Skills
          </a>
          <a href="#gallery" className="hover:text-[#2563eb] transition-colors">
            Gallery
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
