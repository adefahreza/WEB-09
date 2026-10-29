import React, { useState } from 'react'

function FormPesan({ pesanan, onSuccess }) {
  const [nama, setNama] = useState('')
  const [nomorMeja, setNomorMeja] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (pesanan.length === 0) {
      setErrorMsg('Pesanan masih kosong!')
      return
    }

    if (nama.trim() === '' || nomorMeja.trim() === '') {
      setErrorMsg('Mohon isi nama dan nomor meja!')
      return
    }

    if (isNaN(nomorMeja)) {
      setErrorMsg('Nomor meja tidak sesuai!')
      return
    }

    setErrorMsg('')
    setNama('')
    setNomorMeja('')
    onSuccess()
  }

  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400 mb-4">Info Pemesan</p>

      {errorMsg && (
        <p className="text-xs text-red-500 mb-3 pl-3 border-l-2 border-red-300">{errorMsg}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label htmlFor="nama" className="block text-xs text-stone-500 mb-1">Nama</label>
          <input
            type="text"
            id="nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="—"
            className="w-full px-3 py-2 text-sm bg-transparent border-b border-stone-300 focus:border-stone-700 outline-none transition-colors placeholder:text-stone-300"
          />
        </div>

        <div>
          <label htmlFor="nomorMeja" className="block text-xs text-stone-500 mb-1">No. Meja</label>
          <input
            type="text"
            id="nomorMeja"
            value={nomorMeja}
            onChange={(e) => setNomorMeja(e.target.value)}
            placeholder="—"
            className="w-full px-3 py-2 text-sm bg-transparent border-b border-stone-300 focus:border-stone-700 outline-none transition-colors placeholder:text-stone-300"
          />
        </div>

        <button
          type="submit"
          className="w-full mt-2 py-2.5 bg-stone-800 text-stone-100 text-xs uppercase tracking-widest rounded-full hover:bg-stone-900 transition-colors"
        >
          Kirim Pesanan
        </button>
      </form>
    </div>
  )
}

export default FormPesan
