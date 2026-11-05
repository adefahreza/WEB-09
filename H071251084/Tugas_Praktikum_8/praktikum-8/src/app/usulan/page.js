"use client"; // dipakai karena ada useState dan onSubmit

import { useState } from "react";
import { kategoriList } from "../../data/books";

// Class input dipakai berulang, jadi disimpan di satu variabel
const inputClass =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100";

export default function UsulanPage() {
  const [judul, setJudul] = useState("");
  const [penulis, setPenulis] = useState("");
  const [kategori, setKategori] = useState(kategoriList[0]);
  const [alasan, setAlasan] = useState("");
  const [terkirim, setTerkirim] = useState(null); // null = belum kirim, berisi judul = sudah

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Usulan dikirim:", { judul, penulis, kategori, alasan });
    setTerkirim(judul);
    setJudul("");
    setPenulis("");
    setAlasan("");
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-4 py-12 sm:px-6 md:grid-cols-2">
      {/* Kolom kiri: penjelasan */}
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900">Usulkan buku</h1>
        <p className="mt-3 max-w-md text-slate-600">
          Belum menemukan buku yang kamu cari di katalog? Isi formulir ini dan
          kami akan mempertimbangkannya untuk koleksi berikutnya.
        </p>
      </div>

      {/* Kolom kanan: formulir atau pesan sukses */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        {terkirim ? (
          <div className="py-6 text-center">
            <p className="text-lg font-bold text-emerald-700">Usulan terkirim</p>
            <p className="mt-2 text-slate-600">
              Terima kasih! Usulan buku &quot;{terkirim}&quot; sudah kami catat.
            </p>
            <button
              onClick={() => setTerkirim(null)}
              className="mt-6 rounded-xl bg-sky-700 px-5 py-2.5 font-semibold text-white transition hover:bg-sky-800"
            >
              Kirim usulan lain
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="judul" className="mb-1.5 block text-sm font-medium text-slate-700">
                Judul buku
              </label>
              <input
                id="judul"
                type="text"
                required
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
                placeholder="Contoh: Pulang"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="penulis" className="mb-1.5 block text-sm font-medium text-slate-700">
                Penulis
              </label>
              <input
                id="penulis"
                type="text"
                required
                value={penulis}
                onChange={(e) => setPenulis(e.target.value)}
                placeholder="Contoh: Tere Liye"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="kategori" className="mb-1.5 block text-sm font-medium text-slate-700">
                Kategori
              </label>
              <select
                id="kategori"
                value={kategori}
                onChange={(e) => setKategori(e.target.value)}
                className={inputClass}
              >
                {kategoriList.map((k) => (
                  <option key={k} value={k}>
                    {k}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="alasan" className="mb-1.5 block text-sm font-medium text-slate-700">
                Alasan mengusulkan
              </label>
              <textarea
                id="alasan"
                rows={4}
                required
                value={alasan}
                onChange={(e) => setAlasan(e.target.value)}
                placeholder="Ceritakan kenapa buku ini layak ada di perpustakaan"
                className={inputClass}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-sky-700 py-3 font-semibold text-white shadow-md transition hover:bg-sky-800"
            >
              Kirim usulan
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
