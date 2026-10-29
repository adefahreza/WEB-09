import React, { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import MenuList from './components/MenuList.jsx'
import RingkasanPesanan from './components/RingkasanPesanan.jsx'
import FormPesan from './components/FormPesan.jsx'
import Footer from './components/Footer.jsx'

const DATA_MENU = [
  {
    id: 1,
    nama: "Kopi Susu",
    kategori: "Kopi",
    harga: 18000,
    tersedia: true,
    deskripsi: "Espresso dengan susu segar dan gula aren.",
    gambar: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    nama: "Americano",
    kategori: "Kopi",
    harga: 15000,
    tersedia: true,
    deskripsi: "Espresso dengan air panas, rasa kuat dan bersih.",
    gambar: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    nama: "Cappuccino",
    kategori: "Kopi",
    harga: 22000,
    tersedia: true,
    deskripsi: "Espresso, susu panas, dan busa susu tebal.",
    gambar: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    nama: "Matcha Latte",
    kategori: "Non-Kopi",
    harga: 24000,
    tersedia: true,
    deskripsi: "Teh hijau matcha dengan susu.",
    gambar: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    nama: "Teh Tarik",
    kategori: "Non-Kopi",
    harga: 14000,
    tersedia: false,
    deskripsi: "Teh susu yang ditarik hingga berbusa.",
    gambar: "https://plus.unsplash.com/premium_photo-1661715440356-ff1ca9ff72ec?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
  },
  {
    id: 6,
    nama: "Cokelat Panas",
    kategori: "Non-Kopi",
    harga: 20000,
    tersedia: true,
    deskripsi: "Cokelat pekat dengan susu hangat.",
    gambar: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    nama: "Roti Bakar",
    kategori: "Makanan",
    harga: 16000,
    tersedia: true,
    deskripsi: "Roti tebal dengan selai cokelat dan keju.",
    gambar: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    nama: "Pisang Goreng",
    kategori: "Makanan",
    harga: 12000,
    tersedia: false,
    deskripsi: "Pisang goreng renyah dengan taburan keju.",
    gambar: "https://images.unsplash.com/photo-1563336522-c3bd728d3b45?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 9,
    nama: "Nasi Goreng",
    kategori: "Makanan",
    harga: 25000,
    tersedia: true,
    deskripsi: "Nasi goreng kampung dengan telur mata sapi.",
    gambar: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80"
  }
]

function App() {
  const [kategoriAktif, setKategoriAktif] = useState('Semua')
  const [pesanan, setPesanan] = useState([])
  const [notifikasi, setNotifikasi] = useState('')

  const filteredMenu = kategoriAktif === 'Semua'
    ? DATA_MENU
    : DATA_MENU.filter((item) => item.kategori === kategoriAktif)

  const totalJumlah = pesanan.reduce((acc, item) => acc + item.jumlah, 0)
  const totalHarga = pesanan.reduce((acc, item) => acc + item.harga * item.jumlah, 0)

  const handleTambahPesanan = (menuItem) => {
    setPesanan((prev) => {
      const existing = prev.find((p) => p.id === menuItem.id)
      if (existing) {
        return prev.map((p) =>
          p.id === menuItem.id ? { ...p, jumlah: p.jumlah + 1 } : p
        )
      }
      return [...prev, { ...menuItem, jumlah: 1 }]
    })
  }

  const handleKurangiPesanan = (id) => {
    setPesanan((prev) => {
      return prev
        .map((p) => (p.id === id ? { ...p, jumlah: p.jumlah - 1 } : p))
        .filter((p) => p.jumlah > 0)
    })
  }

  const handleSelesaiPesan = () => {
    setPesanan([])
    setNotifikasi('Pesanan berhasil dikirim! Terima kasih.')
    setTimeout(() => {
      setNotifikasi('')
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-stone-800 antialiased">
      <Navbar
        kategoriAktif={kategoriAktif}
        setKategoriAktif={setKategoriAktif}
        totalJumlah={totalJumlah}
        totalHarga={totalHarga}
      />

      <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-10">
        {notifikasi && (
          <div className="mb-8 py-3 px-4 border-l-2 border-green-600 bg-green-50 text-sm text-green-800">
            {notifikasi}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <div className="flex items-baseline justify-between mb-6">
              <h2 className="text-sm font-medium text-stone-800">
                {kategoriAktif === 'Semua' ? 'Semua Menu' : kategoriAktif}
              </h2>
              <span className="text-xs text-stone-400">{filteredMenu.length} item</span>
            </div>
            <MenuList menuList={filteredMenu} onTambah={handleTambahPesanan} />
          </div>

          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24 border border-stone-200 p-6 rounded-[1rem]">
              <RingkasanPesanan
                pesanan={pesanan}
                totalJumlah={totalJumlah}
                totalHarga={totalHarga}
                onTambah={handleTambahPesanan}
                onKurang={handleKurangiPesanan}
              />
              <div className="border-t border-stone-200 pt-6">
                <FormPesan pesanan={pesanan} onSuccess={handleSelesaiPesan} />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
