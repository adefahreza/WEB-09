import FormUsulan from "@/components/FormUsulan";
import pool from "@/lib/db";

export const metadata = { title: "Usulan | Pustaka Senja" };
export const dynamic = "force-dynamic";

export default async function UsulanPage() {
  const result = await pool.query("SELECT DISTINCT kategori FROM buku ORDER BY kategori");
  const kategoriList = result.rows.map((r) => r.kategori);

  return <FormUsulan kategoriList={kategoriList} />;
}
