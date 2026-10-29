import React, { useState } from 'react'

function MenuCard({ item, onTambah }) {
  const [bukaDetail, setBukaDetail] = useState(false)

  const formatHarga = (harga) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(harga)
  }

  return (
    <div className={`group relative border-b border-stone-200 py-5 transition-opacity ${
      !item.tersedia ? 'opacity-70' : ''
    }`}>
      <div className="flex items-start gap-4">
        {item.gambar && (
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 overflow-hidden rounded bg-stone-100 border border-stone-200">
            <img
              src={item.gambar}
              alt={item.nama}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            {!item.tersedia && (
              <div className="absolute inset-0 bg-stone-900/60 flex items-center justify-center">
                <span className="text-[10px] uppercase tracking-wider text-white font-medium px-2 py-0.5">
                  Habis
                </span>
              </div>
            )}
          </div>
        )}

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <h3 className="text-base font-medium text-stone-800 leading-tight">{item.nama}</h3>
            <span className="text-[10px] uppercase tracking-wider text-stone-400 border border-stone-200 px-1.5 py-0.5 leading-none">
              {item.kategori}
            </span>
            {!item.tersedia && (
              <span className="text-[10px] uppercase tracking-wider text-red-500 font-medium">
                Habis
              </span>
            )}
          </div>

          <p className="text-base sm:text-lg font-light text-stone-600 tabular-nums mb-2">{formatHarga(item.harga)}</p>

          <button
            onClick={() => setBukaDetail(!bukaDetail)}
            className="text-[11px] uppercase tracking-wider text-stone-400 hover:text-stone-700 transition-colors"
          >
            {bukaDetail ? '— Tutup' : '+ Detail'}
          </button>

          {bukaDetail && (
            <p className="mt-2 text-sm text-stone-500 leading-relaxed max-w-md">
              {item.deskripsi}
            </p>
          )}
        </div>

        <button
          onClick={() => onTambah(item)}
          disabled={!item.tersedia}
          className={`shrink-0 mt-1 px-4 py-2 text-xs tracking-wide transition-all duration-200 ${
            item.tersedia
              ? 'border border-stone-800 text-stone-800 hover:bg-stone-800 rounded-full hover:text-white'
              : 'border border-stone-200 text-stone-300 cursor-not-allowed rounded-full'
          }`}
        >
          Tambah
        </button>
      </div>
    </div>
  )
}

export default MenuCard
