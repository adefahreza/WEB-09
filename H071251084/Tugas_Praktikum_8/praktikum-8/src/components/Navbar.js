"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const menus = [
  { name: "Beranda", path: "/" },
  { name: "Katalog", path: "/katalog" },
  { name: "Usulan", path: "/usulan" },
];

export default function Navbar() {
  // Membaca URL yang sedang dibuka, misalnya "/" atau "/katalog"
  const pathname = usePathname();

  return (
    // sticky top-0 : navbar menempel di atas saat halaman di-scroll
    // backdrop-blur: latar agak buram supaya isi di belakangnya tetap samar terlihat
    <nav className="sticky top-0 z-50 border-b border-sky-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/">
          <Image
            src="/PustakaSenja.png"
            alt="Pustaka Senja"
            width={378}
            height={49}
            className="h-8 w-auto sm:h-9"
            priority
          />
        </Link>

        <ul className="flex items-center gap-1">
          {menus.map((menu) => {
            const isActive =
              menu.path === "/"
                ? pathname === "/"
                : pathname.startsWith(menu.path);

            return (
              <li key={menu.path}>
                <Link
                  href={menu.path}
                  className={`rounded-full px-3 py-1.5 text-sm transition-colors sm:px-4 ${
                    isActive
                      ? "bg-sky-100 font-semibold text-sky-800"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {menu.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
