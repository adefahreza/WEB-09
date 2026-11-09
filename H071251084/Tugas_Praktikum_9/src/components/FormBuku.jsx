"use client";

import { useActionState } from "react";
import Link from "next/link";

const inputClass =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100";

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium text-slate-700">{label}</span>
      {children}
      {error && <span className="mt-1 block text-sm text-red-600">{error}</span>}
    </label>
  );
}

export default function FormBuku({ action, initial, kategoriList, labelKirim, hrefBatal }) {
  const [state, formAction, pending] = useActionState(action, {
    errors: {},
    values: initial,
  });
  const { errors, values } = state;

  return (
    <form action={formAction} className="space-y-5">
      {errors.form && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{errors.form}</p>
      )}

      <Field label="Judul" error={errors.judul}>
        <input name="judul" defaultValue={values.judul} className={inputClass} />
      </Field>

      <Field label="Penulis" error={errors.penulis}>
        <input name="penulis" defaultValue={values.penulis} className={inputClass} />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Kategori" error={errors.kategori}>
          <input
            name="kategori"
            list="daftar-kategori"
            defaultValue={values.kategori}
            className={inputClass}
          />
          <datalist id="daftar-kategori">
            {kategoriList.map((k) => (
              <option key={k} value={k} />
            ))}
          </datalist>
        </Field>

        <Field label="Tahun terbit" error={errors.tahun}>
          <input
            name="tahun"
            inputMode="numeric"
            defaultValue={values.tahun}
            className={inputClass}
          />
        </Field>
      </div>

      <Field label="Status ketersediaan" error={errors.tersedia}>
        <select name="tersedia" defaultValue={values.tersedia} className={inputClass}>
          <option value="true">Tersedia</option>
          <option value="false">Sedang dipinjam</option>
        </select>
      </Field>

      <Field label="Sinopsis" error={errors.sinopsis}>
        <textarea
          name="sinopsis"
          rows={5}
          defaultValue={values.sinopsis}
          className={inputClass}
        />
      </Field>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={pending}
          className="rounded-xl bg-sky-700 px-6 py-2.5 font-semibold text-white transition hover:bg-sky-800 disabled:opacity-60"
        >
          {pending ? "Menyimpan..." : labelKirim}
        </button>
        <Link href={hrefBatal} className="text-sm font-medium text-slate-600 hover:underline">
          Batal
        </Link>
      </div>
    </form>
  );
}
