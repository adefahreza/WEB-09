function Hero() {
  const handleHeroButtonClick = () => {
    console.log('Halo! Terima kasih telah berkunjung ke website portofolio A. Muh. Ade Fahreza Arif.');
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-[100px] pb-16 px-5 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #eff6ff 0%, #dbeafe 100%)' }}
    >
      {/* Circle Glow Decoration Top Right */}
      <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(37,99,235,0.12)_0%,transparent_70%)]"></div>

      <div className="max-w-[1100px] w-full mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-12 relative z-10">
        {/* Left Content */}
        <div className="text-left max-w-xl">
          <p className="text-sm font-semibold text-[#2563eb] mb-2.5 tracking-wide flex items-center gap-2">
            <span>Selamat Pagi!</span>
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-[#0f1c35] leading-[1.18] mb-3">
            Halo, Saya <br />
            <span className="accent">Ade Fahreza</span>
          </h1>

          <p className="text-lg font-semibold text-[#4b6280] mb-4">
            Information System Student
          </p>

          <p className="text-[0.97rem] text-[#4b6280] leading-[1.8] mb-7 max-w-lg">
            Mahasiswa Sistem Informasi Universitas Hasanuddin yang berfokus pada pengembangan perangkat lunak serta penerapan teknologi untuk solusi bisnis modern.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 mb-7">

            <button
              type="button"
              onClick={handleHeroButtonClick}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#60a5fa] shadow-[0_4px_16px_rgba(37,99,235,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(37,99,235,0.45)] transition-all duration-200 cursor-pointer"
            >
              <span>Sapa Saya</span>
            </button>

            <a
              href="#gallery"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-[#2563eb] border-2 border-[#2563eb] hover:bg-[#2563eb] hover:text-white hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Lihat Proyek</span>
              <i className="fas fa-arrow-right text-xs"></i>
            </a>
          </div>

          {/* Social Icons matching original */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/adefahreza"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full bg-white border border-[#dbeafe] text-[#4b6280] hover:bg-[#2563eb] hover:text-white hover:border-[#2563eb] hover:-translate-y-1 shadow-[0_4px_20px_rgba(37,99,235,0.08)] flex items-center justify-center text-sm transition-all duration-200"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.instagram.com/adefahrzz_/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-white border border-[#dbeafe] text-[#4b6280] hover:bg-[#2563eb] hover:text-white hover:border-[#2563eb] hover:-translate-y-1 shadow-[0_4px_20px_rgba(37,99,235,0.08)] flex items-center justify-center text-sm transition-all duration-200"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="mailto:adefahreza8@email.com"
              aria-label="Email"
              className="w-10 h-10 rounded-full bg-white border border-[#dbeafe] text-[#4b6280] hover:bg-[#2563eb] hover:text-white hover:border-[#2563eb] hover:-translate-y-1 shadow-[0_4px_20px_rgba(37,99,235,0.08)] flex items-center justify-center text-sm transition-all duration-200"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        {/* Right Photo Column (Foto profil dari folder public/) */}
        <div className="relative flex items-end justify-center max-w-[440px] mx-auto">
          <div className="hero-glow"></div>
          <img
            src="/images/profile.png"
            alt="Ade Fahreza"
            className="hero-person-img max-w-[340px] sm:max-w-[390px]"
          />
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full border-2 border-[#dbeafe] flex items-center justify-center text-[#4b6280] hover:text-[#2563eb] hover:border-[#2563eb] animate-bob transition-colors"
        aria-label="Scroll ke About"
      >
        <i className="fas fa-chevron-down text-xs"></i>
      </a>
    </section>
  );
}

export default Hero;
