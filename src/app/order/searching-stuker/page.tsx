"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ButtonPrimary from "@/components/ButtonPrimary";

export default function SearchingStudent() {
  const router = useRouter();

  // 🔹 Navigasi otomatis setelah 2 detik
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/order/waiting");
    }, 2000);

    // Cleanup timer saat komponen unmount
    return () => clearTimeout(timer);
  }, [router]);

  // Mencegah back kehalaman sebelumnya
  useEffect(() => {
    // ✅ Hapus halaman sebelumnya dari history
    history.pushState(null, "", location.href);
    window.onpopstate = () => {
      history.pushState(null, "", location.href);
    };

    // 🧹 Bersihkan event listener saat unmount
    return () => {
      window.onpopstate = null;
    };
  }, []);
  // =====================================================
  // 🔹 RENDER UI
  // =====================================================
  return (
    <div className="px-4">
      {/* 🔸 Ilustrasi pencarian stuker */}
      <div className="w-full h-[85vh] flex flex-col justify-center items-center">
        <Image
          src="/illustrations/lookingstuker.svg"
          alt="Looking Stuker"
          width={180}
          height={180}
        />
        <h1 className="text-2xl mt-5 text-primary font-medium">
          Mencari Stuker...
        </h1>
      </div>

      {/* 🔸 Tombol batal (kembali ke halaman sebelumnya) */}
      <ButtonPrimary label="Batalkan" onClick={() => router.push("/order")} />
    </div>
  );
}
