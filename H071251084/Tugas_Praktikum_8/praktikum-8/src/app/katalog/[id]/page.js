import Link from "next/link";
import BookCover from "../../../components/BookCover";
import { books } from "../../../data/books";

export default async function DetailBukuPage({ params }) {
  // Next.js 15+: params adalah Promise, jadi harus di-await
  const { id } = await params;
  const book = books.find((b) => b.id === id);

  if (!book) {
    return (
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Buku tidak ditemukan</h1>
        <p className="mt-2 text-slate-600">
          Tidak ada buku dengan ID &quot;{id}&quot; di katalog.
        </p>
        <Link
          href="/katalog"
          className="mt-6 inline-block rounded-xl bg-sky-700 px-5 py-2.5 font-semibold text-white hover:bg-sky-800"
        >
          Kembali ke katalog
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <Link href="/katalog" className="text-sm font-medium text-sky-700 hover:underline">
        &larr; Kembali ke katalog
      </Link>

      <article className="mt-6 grid gap-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10 md:grid-cols-[220px_1fr]">
        <div className="flex justify-center rounded-2xl bg-sky-50 p-8 md:self-start">
          <BookCover
            judul={book.judul}
            penulis={book.penulis}
            warna={book.warna}
            className="w-40"
          />
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
              book.tersedia
                ? "bg-emerald-50 text-emerald-700"
                : "bg-orange-50 text-orange-700"
            }`}
          >
            {book.tersedia
              ? "Tersedia untuk dipinjam"
              : "Sedang dipinjam, coba lagi nanti"}
          </div>
        </div>
      </article>
    </div>
  );
}
