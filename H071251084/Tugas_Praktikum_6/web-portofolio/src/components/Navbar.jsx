function Navbar() {
  const menuList = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'gallery', label: 'Gallery' },
  ];

  const handleMenuClick = (menuName) => {
    console.log(`Navigasi ke menu: ${menuName}`);
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-[68px] z-50 bg-white/90 backdrop-blur-md border-b border-[#dbeafe] shadow-[0_4px_20px_rgba(37,99,235,0.08)] transition-all duration-300">
      <div className="max-w-[1100px] h-full mx-auto px-5 relative flex items-center justify-between">
        {/* Logo di kiri */}
        <a
          href="#home"
          onClick={() => handleMenuClick('Logo Home')}
          className="text-2xl font-extrabold tracking-tight text-[#0f1c35] hover:opacity-90 transition-opacity z-10"
        >
          a<span className="text-[#2563eb]">.</span>
        </a>

        {/* Nav Links */}
        <nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-7 sm:gap-8">
          {menuList.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => handleMenuClick(item.label)}
              className="text-sm font-medium text-[#4b6280] py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Elemen penyeimbang di kanan */}
        <div className="w-6 hidden sm:block"></div>
      </div>
    </header>
  );
}

export default Navbar;
