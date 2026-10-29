import React from 'react'

function Footer() {
  return (
    <footer className="mt-auto border-t border-stone-200 py-6">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400">
          &copy; {new Date().getFullYear()} Kedai Kopi Senja
        </p>
        <p className="text-[10px] text-stone-300">Jl. Senja No. 7, Makassar</p>
      </div>
    </footer>
  )
}

export default Footer
