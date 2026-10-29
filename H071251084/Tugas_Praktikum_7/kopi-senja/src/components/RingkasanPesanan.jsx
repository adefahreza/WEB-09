import React from 'react'

function RingkasanPesanan({ pesanan, totalJumlah, totalHarga, onTambah, onKurang }) {
  const formatHarga = (harga) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(harga)
  }

  return (
    <div className="mb-6">
      <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400 mb-4">Pesanan Anda</p>

      {pesanan.length === 0 ? (
        <div className="py-10 text-center">
          <p className="text-sm text-stone-400 italic">Belum ada item dipilih</p>
        </div>
      ) : (
        <>
          <div className="divide-y divide-stone-100">
            {pesanan.map((item) => (
              <div key={item.id} className="py-3 flex items-center gap-3">
                {item.gambar && (
                  <img
                    src={item.gambar}
                    alt={item.nama}
                    className="w-10 h-10 object-cover rounded border border-stone-200 shrink-0"
                  />
                )}

                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-stone-700 truncate">{item.nama}</p>
                  <p className="text-xs text-stone-400 tabular-nums">
                    {formatHarga(item.harga)}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={() => onKurang(item.id)}
                    className="w-6 h-6 flex items-center justify-center text-stone-400 hover:text-red-500 hover:bg-red-50 transition-colors text-xs border border-stone-200"
                    title="Kurangi"
                  >
                    -
                  </button>
                  <span className="w-5 text-center text-xs font-semibold text-stone-700 tabular-nums">
                    {item.jumlah}
                  </span>
                  <button
                    onClick={() => onTambah(item)}
                    className="w-6 h-6 flex items-center justify-center text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors text-xs border border-stone-200"
                    title="Tambah"
                  >
                    +
                  </button>
                </div>

                <p className="text-sm font-medium text-stone-700 tabular-nums shrink-0">
                  {formatHarga(item.harga * item.jumlah)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-stone-300 flex justify-between items-baseline">
            <span className="text-xs text-stone-500">{totalJumlah} item</span>
            <span className="text-base font-semibold text-stone-800 tabular-nums">{formatHarga(totalHarga)}</span>
          </div>
        </>
      )}
    </div>
  )
}

export default RingkasanPesanan
