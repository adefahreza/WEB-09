import Link from "next/link";
import Katalog from "@/components/Katalog";
import pool from "@/lib/db";

export const metadata = { title: "Katalog | Pustaka Senja" };
export const dynamic = "force-dynamic"; // selalu baca data terbaru dari PostgreSQL

export default async function KatalogPage() {
  const result = await pool.query(
    "SELECT id, judul, penulis, kategori, tahun, tersedia, sinopsis FROM buku ORDER BY id"
  );
  const books = result.rows;
  const kategoriList = [...new Set(books.map((b) => b.kategori))].sort();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">Katalog buku</h1>
          <p className="mb-8 mt-2 max-w-xl text-slate-600">
            Cari buku berdasarkan judul atau penulis, lalu saring menurut kategori.
          </p>
        </div>
        <Link
          href="/katalog/tambah"
          className="rounded-xl bg-orange-400 px-5 py-2.5 font-semibold text-slate-900 transition hover:bg-orange-300"
        >
          + Tambah buku
        </Link>
      </div>

      <Katalog books={books} kategoriList={kategoriList} />
    </div>
  );
}
