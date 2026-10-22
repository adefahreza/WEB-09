import flowImg from '../assets/gallery/flow.png';
import maberImg from '../assets/gallery/maber.png';
import portfolioImg from '../assets/gallery/portfolio.png';
import bph1Img from '../assets/gallery/bph1.png';
import bph2Img from '../assets/gallery/bph2.png';
import bph5Img from '../assets/gallery/bph5.png';

function Gallery() {
  const galeriFoto = [
    {
      id: 1,
      src: flowImg,
      judul: 'Flow — Gamified Task Manager',
      kategori: 'Desktop Application',
      deskripsi: 'Aplikasi manajemen tugas desktop berbasis gamifikasi menggunakan JavaFX.',

    },
    {
      id: 2,
      src: maberImg,
      judul: 'MABER — Mari Berhitung',
      kategori: 'Game Edukasi',
      deskripsi: 'Game edukasi interaktif yang dirancang untuk membantu pemain mengasah kemampuan matematika dasar hingga tingkat lanjut.',

    },
    {
      id: 3,
      src: portfolioImg,
      judul: 'Website Portofolio Pribadi',
      kategori: 'Web Development',
      deskripsi: 'Website portofolio interaktif dan responsif yang dibangun menggunakan struktur komponen React modern.',

    },
    {
      id: 4,
      src: bph1Img,
      judul: 'Upgrading dan Rapat Kerja',
      kategori: 'Aktivitas Organisasi',
      deskripsi: 'Dokumentasi kegiatan koordinasi dan perumusan program kerja BPH UKM Start-Up Universitas Hasanuddin.',

    },
    {
      id: 5,
      src: bph2Img,
      judul: 'Unhas Day UKM Start-Up',
      kategori: 'Aktivitas Organisasi',
      deskripsi: 'Dokumentasi pelaksanaan acara Unhas Day UKM Start-Up Universitas Hasanuddin.',

    },
    {
      id: 6,
      src: bph5Img,
      judul: 'Open Recruitment Anggota Baru',
      kategori: 'Aktivitas Organisasi',
      deskripsi: 'Dokumentasi pelaksanaan acara Open Recruitment Anggota Baru UKM Start-Up Universitas Hasanuddin.',

    },
  ];

  return (
    <section id="gallery" className="py-24 bg-white border-b border-[#dbeafe]">
      <div className="max-w-[1100px] mx-auto px-5">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1c35] mb-2 tracking-tight">
            Galeri <span className="accent">Project &amp; Aktivitas</span>
          </h2>
          <p className="text-sm sm:text-base text-[#4b6280]">
            Beberapa Project dan Dokumentasi Aktivitas Yang Telah Saya Kerjakan
          </p>
        </div>

        {/* Cards Grid (Rendered using .map() and key={foto.id} as instructed) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galeriFoto.map((foto) => (
            <figure
              key={foto.id}
              className="bg-white border border-[#dbeafe] rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(37,99,235,0.06)] hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(37,99,235,0.15)] hover:border-[#60a5fa] transition-all duration-300 flex flex-col group m-0"
            >
              {/* Thumbnail with zoom effect */}
              <div className="h-48 w-full overflow-hidden bg-[#eef3ff] relative">
                <img
                  src={foto.src}
                  alt={foto.judul}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#2563eb] text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                  {foto.kategori}
                </span>
              </div>

              {/* Card Body */}
              <figcaption className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-2.5"></div>

                  <h3 className="text-base font-bold text-[#0f1c35] mb-2 transition-colors line-clamp-1">
                    {foto.judul}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#4b6280] leading-relaxed mb-4 line-clamp-3">
                    {foto.deskripsi}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
