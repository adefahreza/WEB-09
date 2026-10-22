function About() {
  const dataPendidikan = [
    {
      id: 1,
      title: 'S1 Sistem Informasi',
      subtitle: 'Universitas Hasanuddin • 2025 - Sekarang',
    },
    {
      id: 2,
      title: 'SMA Angkasa Maros',
      subtitle: 'Jurusan IPA • 2022 - 2025',
    },
  ];

  const dataOrganisasi = [
    {
      id: 1,
      title: 'Badan Pengurus Harian (BPH)',
      role: 'Public Relations / Humas',
      subtitle: 'UKM Start-Up Universitas Hasanuddin • 2025 - Sekarang',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white border-b border-[#dbeafe]">
      <div className="max-w-[1100px] mx-auto px-5">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1c35] mb-2 tracking-tight">
            Tentang <span className="accent">Saya</span>
          </h2>
          <p className="text-sm sm:text-base text-[#4b6280]">
            Kenali Saya Lebih Dekat
          </p>
        </div>

        {/* About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] gap-10 items-start">

          <div className="bg-white border border-[#dbeafe] rounded-2xl p-6 shadow-[0_4px_20px_rgba(37,99,235,0.08)]">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#eef3ff] border border-[#dbeafe] rounded-xl p-7 text-center flex flex-col items-center justify-center gap-2">
                <strong className="text-4xl font-extrabold accent leading-none">1+</strong>
                <span className="text-xs font-semibold text-[#4b6280] tracking-wide">Tahun Pengalaman</span>
              </div>

              <div className="bg-[#eef3ff] border border-[#dbeafe] rounded-xl p-7 text-center flex flex-col items-center justify-center gap-2">
                <strong className="text-4xl font-extrabold accent leading-none">3+</strong>
                <span className="text-xs font-semibold text-[#4b6280] tracking-wide">Proyek Selesai</span>
              </div>
            </div>
          </div>


          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#0f1c35] mb-3">
                Ringkasan Profil
              </h3>
              <p className="text-sm sm:text-base text-[#4b6280] leading-[1.8]">
                Saya adalah mahasiswa semester 3 Program Studi Sistem Informasi di Universitas Hasanuddin dengan latar belakang pendidikan dari SMA Angkasa Maros. Saya memiliki ketertarikan mendalam di bidang IT, pengembangan perangkat lunak (Software Engineering), serta bagaimana teknologi dapat diintegrasikan untuk mendorong efisiensi dan pertumbuhan bisnis. Saya selalu bersemangat mempelajari teknologi baru dan mengimplementasikannya dalam proyek-proyek nyata.
              </p>
            </div>


            <div className="pt-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Pendidikan */}
              <div>
                <h4 className="text-sm font-bold text-[#2563eb] mb-3.5 flex items-center gap-2">
                  <i className="fas fa-graduation-cap"></i>
                  Pendidikan
                </h4>

                <div className="flex flex-col gap-3.5">
                  {dataPendidikan.map((item) => (
                    <div key={item.id} className="flex items-start gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-[#2563eb] to-[#60a5fa] shrink-0 mt-1.5"></span>
                      <div className="flex flex-col">
                        <strong className="text-sm font-bold text-[#0f1c35] leading-snug">
                          {item.title}
                        </strong>
                        <span className="text-xs text-[#4b6280]">
                          {item.subtitle}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pengalaman Organisasi */}
              <div>
                <h4 className="text-sm font-bold text-[#2563eb] mb-3.5 flex items-center gap-2">
                  <i className="fas fa-users"></i>
                  Pengalaman Organisasi
                </h4>

                <div className="flex flex-col gap-3.5">
                  {dataOrganisasi.map((item) => (
                    <div key={item.id} className="flex items-start gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-[#2563eb] to-[#60a5fa] shrink-0 mt-1.5"></span>
                      <div className="flex flex-col">
                        <strong className="text-sm font-bold text-[#0f1c35] leading-snug">
                          {item.title}
                        </strong>
                        <span className="text-xs font-semibold text-[#2563eb] mt-0.5">
                          {item.role}
                        </span>
                        <span className="text-xs text-[#4b6280]">
                          {item.subtitle}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
