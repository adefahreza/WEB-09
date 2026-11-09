import Link from "next/link";
import BookCover from "../components/BookCover";
import BookCard from "../components/BookCard";
import pool from "@/lib/db";

export const dynamic = "force-dynamic"; // statistik selalu dihitung dari data terbaru

const langkah = [
  { judul: "Cari bukumu", isi: "Telusuri katalog berdasarkan judul, penulis, atau kategori." },
  { judul: "Cek ketersediaan", isi: "Lihat apakah buku tersedia atau sedang dipinjam." },
  { judul: "Usulkan yang belum ada", isi: "Belum ketemu? Kirim usulan dan kami pertimbangkan." },
];

export default async function Home() {
  const result = await pool.query(
    "SELECT id, judul, penulis, kategori, tahun, tersedia FROM buku ORDER BY id LIMIT 9"
  );
  const books = result.rows;
  const pilihan = books.slice(0, 4);

  // Statistik dihitung langsung oleh PostgreSQL (::int agar hasilnya angka, bukan string)
  const statResult = await pool.query(
    `SELECT COUNT(*)::int AS total,
            COUNT(*) FILTER (WHERE tersedia)::int AS tersedia,
            COUNT(*) FILTER (WHERE NOT tersedia)::int AS dipinjam
     FROM buku`
  );
  const stat = statResult.rows[0];
  const statistik = [
    { label: "Total koleksi", nilai: stat.total },
    { label: "Tersedia", nilai: stat.tersedia },
    { label: "Sedang dipinjam", nilai: stat.dipinjam },
  ];

  // Tumpukan sampul di hero; dilewati jika bukunya belum ada
  const sampul = [
    { book: books[5], className: "w-28 -rotate-6 sm:w-36" },
    { book: books[0], className: "z-10 -mx-3 mb-6 w-32 sm:w-40" },
    { book: books[7], className: "w-28 rotate-6 sm:w-36" },
  ].filter((item) => item.book);

  return (
    <>
      {/* ===== HERO: gradasi langit senja dari biru ke jingga lembut ===== */}
      <section className="bg-linear-to-b from-sky-100 via-sky-50 to-orange-50">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
              Temukan buku favoritmu dan jelajahi berbagai pengetahuan baru
              bersama Pustaka Senja.
            </h1>
            <p className="mt-5 max-w-lg text-lg text-slate-600">
              Dari novel sampai buku teknologi, semuanya ada di satu katalog yang
              mudah dicari.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/katalog"
                className="rounded-xl bg-sky-700 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-sky-800"
              >
                Buka katalog
              </Link>
              <Link
                href="/usulan"
                className="rounded-xl bg-white px-6 py-3 font-semibold text-slate-700 ring-1 ring-slate-300 transition hover:bg-slate-50"
              >
                Usulkan buku
              </Link>
            </div>
          </div>

          {/* Tumpukan sampul: rotate-* memiringkan, -mx-* membuatnya saling menimpa */}
          <div className="flex items-end justify-center">
            {sampul.map(({ book, className }) => (
              <BookCover
                key={book.id}
                id={book.id}
                judul={book.judul}
                penulis={book.penulis}
                className={className}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATISTIK KOLEKSI (dari database) ===== */}
      <section className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
        <dl className="grid gap-4 sm:grid-cols-3">
          {statistik.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
            >
              <dd className="text-4xl font-extrabold text-sky-800">{item.nilai}</dd>
              <dt className="mt-1 text-sm text-slate-500">{item.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      {/* ===== BUKU PILIHAN ===== */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Buku pilihan</h2>
            <p className="mt-1 text-slate-500">Mulai membaca dari sini.</p>
          </div>
          <Link
            href="/katalog"
            className="text-sm font-medium text-sky-700 hover:underline"
          >
            Lihat semua buku
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pilihan.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      {/* ===== CARA KERJA (urutan, jadi pakai nomor) ===== */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900">Cara menggunakan Pustaka Senja</h2>

          <ol className="mt-8 grid gap-6 md:grid-cols-3">
            {langkah.map((item, i) => (
              <li key={item.judul} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-700">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900">{item.judul}</h3>
                  <p className="mt-1 text-sm text-slate-600">{item.isi}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== AJAKAN USULAN ===== */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-sky-800 p-8 text-white sm:p-12 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold sm:text-3xl">Buku yang kamu cari belum ada?</h2>
            <p className="mt-2 text-sky-100">
              Tulis judul dan alasannya. Usulanmu membantu kami melengkapi koleksi.
            </p>
          </div>
          <Link
            href="/usulan"
            className="shrink-0 rounded-xl bg-orange-400 px-6 py-3 font-semibold text-slate-900 transition hover:bg-orange-300"
          >
            Kirim usulan
          </Link>
        </div>
      </section>
    </>
  );
}
