// Sampul buku dibuat murni dari class Tailwind (tanpa file gambar).
// Tabel buku tidak punya kolom warna, jadi warna dipilih dari id buku.
// Class ditulis lengkap agar terdeteksi oleh Tailwind.
const palet = [
  "bg-sky-700",
  "bg-orange-500",
  "bg-emerald-700",
  "bg-rose-700",
  "bg-indigo-700",
  "bg-amber-600",
  "bg-teal-700",
  "bg-fuchsia-700",
  "bg-slate-700",
];

export default function BookCover({ id = 0, judul, penulis, className = "w-32" }) {
  const warna = palet[Number(id) % palet.length];

  return (
    <div
      className={`${warna} ${className} aspect-[2/3] flex flex-col justify-between rounded-l-sm rounded-r-xl border-l-8 border-black/20 p-3 text-white shadow-lg`}
    >
      <p className="line-clamp-4 text-sm font-bold leading-tight">{judul}</p>
      <p className="line-clamp-1 text-xs text-white/80">{penulis}</p>
    </div>
  );
}
