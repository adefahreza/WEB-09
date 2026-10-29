import React from 'react'

function Navbar({ kategoriAktif, setKategoriAktif, totalJumlah, totalHarga }) {
  const kategoriList = ['Semua', 'Kopi', 'Non-Kopi', 'Makanan']

  const formatHarga = (harga) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(harga)
  }

  return (
    <nav className="border-b border-stone-200 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col gap-4">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400 mb-1">est. 2024</p>
            <h1 className="text-xl font-light tracking-tight text-stone-800">
              Kedai Kopi <span className="font-semibold italic">Senja</span>
            </h1>
          </div>

          <div className="text-right">
            <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-0.5">Keranjang</p>
            <p className="text-sm text-stone-700 tabular-nums">
              {totalJumlah > 0 ? (
                <>
                  <span className="font-medium">{totalJumlah}</span>
                  <span className="text-stone-300 mx-1.5">/</span>
                  <span className="font-semibold">{formatHarga(totalHarga)}</span>
                </>
              ) : (
                <span className="text-stone-400 italic">kosong</span>
              )}
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          {kategoriList.map((kategori) => (
            <button
              key={kategori}
              onClick={() => setKategoriAktif(kategori)}
              className={`px-3.5 py-1.5 text-xs tracking-wide transition-all duration-200 ${
                kategoriAktif === kategori
                  ? 'bg-stone-800 rounded-full text-stone-100'
                  : 'text-stone-500 hover:text-stone-800 rounded-full hover:bg-stone-200'
              }`}
            >
              {kategori}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
