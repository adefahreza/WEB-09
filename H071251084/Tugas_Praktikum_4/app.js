const dataPraktikan = [ 
    { nama: "Budi", nilaiTugas: [80, 85, 90] }, 
    { nama: "Siti", nilaiTugas: [60, 60, 60] }, 
    { nama: "Andi", nilaiTugas: [90, 90, 90] }, 
    { nama: "Dewi", nilaiTugas: [75, 75, 75] }, 
    { nama: "Eko", nilaiTugas: [45, 45, 45] } 
]; 

function kalkulasi(nilai) {
    for (let i = 0; i < nilai.length; i++) {
        const data = nilai[i];
        let jumlah = data.nilaiTugas.reduce(function(a, b){
            return a + b
        }, 0)
        let rataRata = jumlah/data.nilaiTugas.length
        nilai[i] = {
            nama : data.nama,
            nilaiTugas : data.nilaiTugas,
            rataRata : rataRata
        }
    }
    return nilai
}

function validasi(nilai){
    for (let i = 0; i < nilai.length; i++) {
        const data = nilai[i];
        let status
        if (data.rataRata >= 75) {
            status = "Lulus"
        } else{
            status = "Tidak Lulus"
        }
        nilai[i] = {
            nama : data.nama,
            nilaiTugas : data.nilaiTugas,
            rataRata : data.rataRata,
            status : status
        }
    }
    return nilai
}


let namaAslab = prompt("Masukkan Nama Praktikan").toLowerCase()


if (namaAslab == "ade") {
    kalkulasi(dataPraktikan)
    validasi(dataPraktikan)
    
    document.write(`
        <div class="font-mono">
            <div class="bg-blue-500 flex flex-col gap-6 justify-center items-center p-12 rounded-b-3xl shadow-md text-white">
                <h1 class="text-6xl font-extrabold">Laporan Praktikum</h1>
                <h1 class="text-3xl font-bold capitalize">Nama Asisten Lab: ${namaAslab}</h1>
            </div>
        </div>
    `)
    document.write(`
        <div class="flex flex-col justify-center items-center bg-white my-4 mx-80 rounded-xl border border-black/25 shadow-lg p-12">
        `)
    dataPraktikan.forEach(item => {
        let Nama = item.nama
        let RataRata = item.rataRata
        let Status = item.status
    
        let warnaStatus
    
        if (Status == "Lulus") {
            warnaStatus = "bg-emerald-100 text-emerald-700"
        } else {
            warnaStatus = "bg-red-100 text-red-700"
        }
    
        document.write(`
            <div class="bg-white shadow-lg rounded-2xl flex flex-row items-center justify-between hover:scale-105 transition-transform m-6 w-[700px] p-6 border border-l-8 border-l-blue-500">
                <div class="flex flex-col space-x-0 justify-start gap-4">
                    <div class="font-bold text-5xl text-blue-700">
                        <p>${Nama}</p>
                    </div>
                    <div class="font-bold text-xl text-blue-600">
                        <p>Nilai Rata-Rata: ${RataRata}</p>
                    </div>
                </div>
                <div class="font-bold text-md ${warnaStatus} px-4 py-2 rounded-full">
                    <p>${Status}</p>
                </div>
            </div>
        `)
    })
    document.write(`
        </div>
        `)
    
    } else {
    document.write(`
        <div class="font-serif">

            <div class="bg-red-500 flex flex-col gap-4 justify-center items-center p-12 rounded-b-3xl shadow-md text-white">
                <h1 class="text-6xl font-extrabold">Akses Ditolak</h1>
                <p class="text-xl font-medium opacity-90">Sistem Laporan Praktikum</p>
            </div>
            
            <div class="flex flex-col justify-center items-center my-12">
                <div class="bg-white shadow-lg rounded-2xl flex flex-col items-center justify-center p-8 border border-l-8 border-l-red-500 w-[700px] text-center gap-4">
                    
                    <h2 class="text-2xl font-bold text-black">Nama Asisten Tidak Sesuai</h2>
                    <p class="text-gray-600">
                        Nama <span class="font-semibold text-red-600">"${namaAslab}"</span> tidak terdaftar sebagai Asisten. Silakan muat ulang halaman dan coba lagi.
                    </p>
                    <button onclick="location.reload()" class="mt-4 px-6 py-2 bg-red-500 text-white rounded-full font-semibold hover:bg-red-700 transition-colors">
                        Coba Lagi
                    </button>
                </div>
            </div>
        </div>
    `)
    }
    
