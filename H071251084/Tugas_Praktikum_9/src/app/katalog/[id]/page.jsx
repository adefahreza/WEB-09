import Link from "next/link";
import { notFound } from "next/navigation";
import BookCover from "@/components/BookCover";
import TombolHapus from "@/components/TombolHapus";
import pool from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function DetailBukuPage({ params }) {
  // Next.js 15+: params adalah Promise, jadi harus di-await
  const { id } = await params;
  if (!/^\d{1,9}$/.test(id)) notFound();

  const result = await pool.query(
    "SELECT id, judul, penulis, kategori, tahun, tersedia, sinopsis FROM buku WHERE id = $1",
    [Number(id)]
  );
  const book = result.rows[0];
  if (!book) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <Link href="/katalog" className="text-sm font-medium text-sky-700 hover:underline">
        &larr; Kembali ke katalog
      </Link>

      <article className="mt-6 grid gap-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10 md:grid-cols-[220px_1fr]">
        <div className="flex justify-center rounded-2xl bg-sky-50 p-8 md:self-start">
          <BookCover id={book.id} judul={book.judul} penulis={book.penulis} className="w-40" />
        </div>

        <div>
          <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-800">
            {book.kategori}
          </span>
          <h1 className="mt-3 text-3xl font-extrabold text-slate-900">{book.judul}</h1>
          <p className="mt-1 text-slate-500">
            {book.penulis}, terbit {book.tahun}
          </p>

          <p className="mt-6 leading-relaxed text-slate-700">{book.sinopsis}</p>

          <div
            className={`mt-6 inline-block rounded-xl px-4 py-2 text-sm font-medium ${
              book.tersedia ? "bg-emerald-50 text-emerald-700" : "bg-orange-50 text-orange-700"
            }`}
          >
            {book.tersedia ? "Tersedia untuk dipinjam" : "Sedang dipinjam, coba lagi nanti"}
          </div>

          <div className="mt-8 flex items-center gap-3">
            <Link
              href={`/katalog/${book.id}/edit`}
              className="rounded-lg bg-sky-700 px-4 py-1.5 text-sm font-medium text-white transition hover:bg-sky-800"
            >
              Edit
            </Link>
            <TombolHapus id={book.id} judul={book.judul} />
          </div>
        </div>
      </article>
    </div>
  );
}
