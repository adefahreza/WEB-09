import Link from "next/link";
import { notFound } from "next/navigation";
import FormBuku from "@/components/FormBuku";
import { ubahBuku } from "../../actions";
import pool from "@/lib/db";

export const metadata = { title: "Edit Buku | Pustaka Senja" };
export const dynamic = "force-dynamic";

export default async function EditBukuPage({ params }) {
  const { id } = await params;
  if (!/^\d{1,9}$/.test(id)) notFound();

  const result = await pool.query(
    "SELECT id, judul, penulis, kategori, tahun, tersedia, sinopsis FROM buku WHERE id = $1",
    [Number(id)]
  );
  const book = result.rows[0];
  if (!book) notFound();

  const kategoriResult = await pool.query(
    "SELECT DISTINCT kategori FROM buku ORDER BY kategori"
  );
  const kategoriList = kategoriResult.rows.map((r) => r.kategori);

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
      <Link href={`/katalog/${book.id}`} className="text-sm font-medium text-sky-700 hover:underline">
        &larr; Kembali ke detail
      </Link>
      <h1 className="mt-4 text-3xl font-extrabold text-slate-900">Edit buku</h1>
      <p className="mb-8 mt-2 text-slate-600">Ubah informasi buku lalu simpan.</p>

      <FormBuku
        action={ubahBuku.bind(null, book.id)}
        initial={{
          judul: book.judul,
          penulis: book.penulis,
          kategori: book.kategori,
          tahun: String(book.tahun),
          tersedia: String(book.tersedia),
          sinopsis: book.sinopsis,
        }}
        kategoriList={kategoriList}
        labelKirim="Simpan perubahan"
        hrefBatal={`/katalog/${book.id}`}
      />
    </div>
  );
}
