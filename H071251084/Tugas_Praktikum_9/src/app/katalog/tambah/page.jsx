import Link from "next/link";
import FormBuku from "@/components/FormBuku";
import { tambahBuku } from "../actions";
import pool from "@/lib/db";

export const metadata = { title: "Tambah Buku | Pustaka Senja" };
export const dynamic = "force-dynamic";

export default async function TambahBukuPage() {
  const result = await pool.query(
    "SELECT DISTINCT kategori FROM buku ORDER BY kategori"
  );
  const kategoriList = result.rows.map((r) => r.kategori);

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
      <Link href="/katalog" className="text-sm font-medium text-sky-700 hover:underline">
        &larr; Kembali ke katalog
      </Link>
      <h1 className="mt-4 text-3xl font-extrabold text-slate-900">Tambah buku</h1>
      <p className="mb-8 mt-2 text-slate-600">Buku baru akan tersimpan di database.</p>

      <FormBuku
        action={tambahBuku}
        initial={{ judul: "", penulis: "", kategori: "", tahun: "", tersedia: "true", sinopsis: "" }}
        kategoriList={kategoriList}
        labelKirim="Simpan buku"
        hrefBatal="/katalog"
      />
    </div>
  );
}
