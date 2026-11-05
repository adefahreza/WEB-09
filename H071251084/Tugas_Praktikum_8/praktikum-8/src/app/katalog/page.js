import Katalog from "../../components/Katalog";
import { books, kategoriList } from "../../data/books";

export const metadata = { title: "Katalog | Pustaka Senja" };

export default function KatalogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-extrabold text-slate-900">Katalog buku</h1>
      <p className="mb-8 mt-2 max-w-xl text-slate-600">
        Cari buku berdasarkan judul atau penulis, lalu saring menurut kategori.
      </p>

      <Katalog books={books} kategoriList={kategoriList} />
    </div>
  );
}
