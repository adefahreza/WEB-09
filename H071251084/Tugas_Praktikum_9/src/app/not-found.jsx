import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="text-3xl font-extrabold text-slate-900">Halaman atau buku tidak ditemukan</h1>
      <p className="mt-2 text-slate-600">
        Alamat atau ID buku yang kamu buka tidak ada di Pustaka Senja.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link
          href="/katalog"
          className="rounded-xl bg-sky-700 px-5 py-2.5 font-semibold text-white hover:bg-sky-800"
        >
          Kembali ke katalog
        </Link>
        <Link
          href="/"
          className="rounded-xl bg-white px-5 py-2.5 font-semibold text-slate-700 ring-1 ring-slate-300 hover:bg-slate-50"
        >
          Ke beranda
        </Link>
      </div>
    </div>
  );
}
