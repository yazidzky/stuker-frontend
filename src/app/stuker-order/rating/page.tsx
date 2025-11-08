"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// 🔹 Komponen internal hasil modularisasi
import FinishedHeader from "./FinishedHeader";
import OrderLocationCard from "./OrderLocationCard";
import OrderReviewSection from "./OrderReviewSection";

export default function OrderRatingPage() {
  const router = useRouter();
  const [rating, setRating] = useState(0);

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

  // 🔹 Data dummy (sementara)
  const data = {
    stuker_image: "/images/profilePhoto.png",
    stuker_name: "Marip Ramadan",
    delivery_location: "Kantin atas dekat pohon",
    pickup_location: "Lantai 4 FST, R 4.10",
  };

  // =====================================================
  // 🔧 HANDLER FUNCTIONS
  // =====================================================
  const handleSubmit = () => {
    router.push("/stuker-dashboard");
  };

  // =====================================================
  // 🔹 RENDER UI
  // =====================================================
  return (
    <div className="w-full h-[100dvh] bg-[url('/illustrations/doodle.svg')] bg-no-repeat bg-center bg-cover flex justify-center pt-[8vh]">
      <div className="w-[88%] h-[58vh] bg-gradient-to-b from-[#E1CCEC] to-white rounded-xl shadow-sm flex flex-col justify-center items-center gap-y-4 pb-8 relative">
        {/* 🔸 Header (Foto, Nama, Role) */}
        <FinishedHeader
          imageUrl={data.stuker_image}
          name={data.stuker_name}
          role="Pelanggan"
        />

        {/* 🔸 Lokasi Pickup & Delivery */}
        <OrderLocationCard
          pickupLocation={data.pickup_location}
          deliveryLocation={data.delivery_location}
        />

        {/* 🔸 Rating dan tombol kirim */}
        <OrderReviewSection setRating={setRating} onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
