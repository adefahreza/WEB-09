"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import pool from "@/lib/db";

// ID harus bilangan bulat positif yang muat di kolom INTEGER PostgreSQL
function parseId(value) {
  const teks = String(value);
  return /^\d{1,9}$/.test(teks) ? Number(teks) : null;
}

// Validasi & normalisasi data form (dipakai oleh tambah dan ubah)
function validasi(formData) {
  const values = {
    judul: String(formData.get("judul") ?? "").trim(),
    penulis: String(formData.get("penulis") ?? "").trim(),
    kategori: String(formData.get("kategori") ?? "").trim(),
    tahun: String(formData.get("tahun") ?? "").trim(),
    tersedia: String(formData.get("tersedia") ?? ""),
    sinopsis: String(formData.get("sinopsis") ?? "").trim(),
  };

  const errors = {};
  const tahunMaks = new Date().getFullYear() + 1;

  if (!values.judul) errors.judul = "Judul wajib diisi.";
  else if (values.judul.length > 200) errors.judul = "Judul maksimal 200 karakter.";

  if (!values.penulis) errors.penulis = "Penulis wajib diisi.";
  else if (values.penulis.length > 150) errors.penulis = "Penulis maksimal 150 karakter.";

  if (!values.kategori) errors.kategori = "Kategori wajib diisi.";
  else if (values.kategori.length > 100) errors.kategori = "Kategori maksimal 100 karakter.";

  if (!/^\d{1,4}$/.test(values.tahun)) {
    errors.tahun = "Tahun harus berupa angka bulat.";
  } else if (Number(values.tahun) < 1000 || Number(values.tahun) > tahunMaks) {
    errors.tahun = `Tahun harus antara 1000 dan ${tahunMaks}.`;
  }

  if (values.tersedia !== "true" && values.tersedia !== "false") {
    errors.tersedia = "Pilih status ketersediaan.";
  }

  if (!values.sinopsis) errors.sinopsis = "Sinopsis wajib diisi.";

  return { values, errors };
}

const PESAN_GAGAL = "Terjadi kesalahan saat menyimpan ke database. Coba lagi.";

// CREATE
export async function tambahBuku(prevState, formData) {
  const { values, errors } = validasi(formData);
  if (Object.keys(errors).length > 0) return { errors, values };

  try {
    await pool.query(
      `INSERT INTO buku (judul, penulis, kategori, tahun, tersedia, sinopsis)
       VALUES ($1, $2, $3, $4, $5, $6)`,
      [
        values.judul,
        values.penulis,
        values.kategori,
        Number(values.tahun),
        values.tersedia === "true",
        values.sinopsis,
      ]
    );
  } catch (error) {
    console.error("tambahBuku gagal:", error);
    return { errors: { form: PESAN_GAGAL }, values };
  }

  
  revalidatePath("/katalog");
  
}

// UPDATE (id diikat lewat .bind di halaman edit)
export async function ubahBuku(id, prevState, formData) {
  const idBuku = parseId(id);
  const { values, errors } = validasi(formData);

  if (idBuku === null) return { errors: { form: "ID buku tidak valid." }, values };
  if (Object.keys(errors).length > 0) return { errors, values };

  let result;
  try {
    result = await pool.query(
      `UPDATE buku
       SET judul = $1, penulis = $2, kategori = $3, tahun = $4, tersedia = $5, sinopsis = $6
       WHERE id = $7`,
      [
        values.judul,
        values.penulis,
        values.kategori,
        Number(values.tahun),
        values.tersedia === "true",
        values.sinopsis,
        idBuku,
      ]
    );
  } catch (error) {
    console.error("ubahBuku gagal:", error);
    return { errors: { form: PESAN_GAGAL }, values };
  }

  if (result.rowCount === 0) {
    return { errors: { form: "Buku tidak ditemukan. Mungkin sudah dihapus." }, values };
  }

  
  revalidatePath("/katalog");
  
}

// DELETE
export async function hapusBuku(id) {
  const idBuku = parseId(id);
  if (idBuku === null) redirect("/katalog");

  try {
    await pool.query("DELETE FROM buku WHERE id = $1", [idBuku]);
  } catch (error) {
    console.error("hapusBuku gagal:", error);
    throw new Error("Gagal menghapus buku.");
  }

  
  revalidatePath("/katalog");
  
}
