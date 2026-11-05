import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="text-3xl font-extrabold text-slate-900">Halaman tidak ditemukan</h1>
      <p className="mt-2 text-slate-600">Alamat yang kamu buka tidak ada di Pustaka Senja.</p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-xl bg-sky-700 px-5 py-2.5 font-semibold text-white hover:bg-sky-800"
      >
        Kembali ke beranda
      </Link>
    </div>
  );
}
