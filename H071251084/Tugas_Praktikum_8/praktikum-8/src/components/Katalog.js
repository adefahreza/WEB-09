"use client"; // dipakai karena ada useState (kata kunci & kategori)

import { useState } from "react";
import BookCard from "./BookCard";

export default function Katalog({ books, kategoriList }) {
  const [kataKunci, setKataKunci] = useState("");
  const [kategori, setKategori] = useState("Semua");

  // Saring buku sesuai kategori dan kata kunci (judul atau penulis)
  const hasil = books.filter((b) => {
    const cocokKategori = kategori === "Semua" || b.kategori === kategori;
    const teks = `${b.judul} ${b.penulis}`.toLowerCase();
    const cocokKata = teks.includes(kataKunci.toLowerCase());
    return cocokKategori && cocokKata;
  });

  return (
    <section>
      {/* Kolom pencarian */}
      <input
        type="text"
        value={kataKunci}
        onChange={(e) => setKataKunci(e.target.value)}
        placeholder="Cari judul atau penulis"
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
      />

      {/* Tombol filter kategori */}
      <div className="mt-4 flex flex-wrap gap-2">
        {["Semua", ...kategoriList].map((k) => (
          <button
            key={k}
            onClick={() => setKategori(k)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              kategori === k
                ? "bg-sky-700 text-white"
                : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50"
            }`}
          >
            {k}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-slate-500">{hasil.length} buku ditemukan</p>

      {/* Grid responsif: 1 kolom di HP, 2 di tablet, 3 di laptop, 4 di layar lebar */}
      {hasil.length > 0 ? (
        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {hasil.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <div className="mt-4 rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
          <p className="font-semibold text-slate-800">Buku tidak ditemukan</p>
          <p className="mt-1 text-sm text-slate-500">
            Coba kata kunci lain, atau usulkan buku ini lewat halaman Usulan.
          </p>
        </div>
      )}
    </section>
  );
}
