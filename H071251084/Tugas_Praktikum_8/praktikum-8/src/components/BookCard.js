"use client"; // dipakai karena ada useState dan onClick

import { useState } from "react";
import Link from "next/link";
import BookCover from "./BookCover";

export default function BookCard({ book }) {
  // State mandiri: tiap kartu punya status "disimpan" sendiri
  const [disimpan, setDisimpan] = useState(false);

  return (
    <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-sky-300 hover:shadow-md">
      {/* Area sampul */}
      <div className="flex justify-center rounded-xl bg-sky-50 py-6">
        <BookCover
          judul={book.judul}
          penulis={book.penulis}
          warna={book.warna}
          className="w-28"
        />
      </div>

      {/* Info buku */}
      <div className="mt-4 flex flex-1 flex-col">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-medium text-sky-700">{book.kategori}</span>
          <span
            className={`rounded-full px-2 py-0.5 text-xs font-medium ${
              book.tersedia
                ? "bg-emerald-50 text-emerald-700"
                : "bg-slate-100 text-slate-500"
            }`}
          >
            {book.tersedia ? "Tersedia" : "Dipinjam"}
          </span>
        </div>

        <h3 className="mt-2 text-lg font-bold leading-snug text-slate-900">
          {book.judul}
        </h3>
        <p className="text-sm text-slate-500">{book.penulis}</p>

        {/* mt-auto mendorong baris tombol ke dasar kartu */}
        <div className="mt-auto flex items-center justify-between pt-4">
          <button
            onClick={() => setDisimpan(!disimpan)}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
              disimpan
                ? "bg-orange-100 text-orange-700"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {disimpan ? "Tersimpan" : "Simpan"}
          </button>

          <Link
            href={`/katalog/${book.id}`}
            className="text-sm font-medium text-sky-700 hover:underline"
          >
            Lihat detail
          </Link>
        </div>
      </div>
    </article>
  );
}
