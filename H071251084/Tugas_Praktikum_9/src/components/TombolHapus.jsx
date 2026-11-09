"use client";

import { hapusBuku } from "@/app/katalog/actions";

export default function TombolHapus({ id, judul, className = "" }) {
  function konfirmasi(e) {
    const setuju = window.confirm(
      `Hapus buku "${judul}"? Tindakan ini tidak dapat dibatalkan.`
    );
    // Dibatalkan -> form tidak dikirim, data tetap aman
    if (!setuju) e.preventDefault();
  }

  return (
    <form action={hapusBuku.bind(null, id)} onSubmit={konfirmasi}>
      <button
        type="submit"
        className={`rounded-lg bg-red-50 px-3 py-1.5 text-sm font-medium text-red-700 transition hover:bg-red-100 ${className}`}
      >
        Hapus
      </button>
    </form>
  );
}
