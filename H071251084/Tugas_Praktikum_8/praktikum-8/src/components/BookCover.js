// Sampul buku dibuat murni dari class Tailwind (tanpa file gambar).
// Lebarnya diatur lewat prop className, misalnya "w-32" atau "w-full".

export default function BookCover({ judul, penulis, warna, className = "w-32" }) {
  return (
    <div
      className={`${warna} ${className} aspect-2/3 flex flex-col justify-between rounded-l-sm rounded-r-xl border-l-8 border-black/20 p-3 text-white shadow-lg`}
    >
      <p className="line-clamp-4 text-sm font-bold leading-tight">{judul}</p>
      <p className="line-clamp-1 text-xs text-white/80">{penulis}</p>
    </div>
  );
}

