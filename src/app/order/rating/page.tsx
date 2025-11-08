"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import RatingStars from "./RatingStars";
import Button from "@/components/ButtonPrimary";
import OrderLocationCard from "./OrderLocationCard";

export default function OrderFinishedPage() {
  const router = useRouter();
  const [rating, setRating] = useState(0);

  // 🔹 Data dummy order (sementara)
  const data = {
    stuker_image: "/images/profilePhoto.png",
    stuker_name: "Marip Ramadan",
    delivery_location: "Kantin atas dekat pohon",
    pickup_location: "Lantai 4 FST, R 4.10",
  };

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
    <div className="w-full h-[100vh] bg-[url('/illustrations/doodle.svg')] bg-no-repeat bg-center bg-cover flex justify-center pt-[8vh]">
      <div className="w-[84%] h-[70vh] bg-gradient-to-b from-[#E1CCEC] to-white rounded-xl shadow-sm flex flex-col items-center justify-center gap-y-4 pt-6 pb-10 relative">
        {/* 🔸 Foto dan nama Stuker */}
        <Image
          src={data.stuker_image}
          alt="stuker profile"
          width={84}
          height={84}
          className="rounded-full"
        />
        <div className="text-center">
          <p className="font-semibold text-2xl">{data.stuker_name}</p>
          <p>Student Walker</p>
        </div>

        {/* 🔸 Lokasi pickup dan delivery */}
        <OrderLocationCard
          pickupLocation={data.pickup_location}
          deliveryLocation={data.delivery_location}
        />

        {/* 🔸 Rating bintang */}
        <RatingStars setRating={setRating} />

        {/* 🔸 Kolom review */}
        <textarea
          placeholder="Tuliskan detail review disini...."
          className="w-[85%] p-3 text-sm border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-primary resize-none max-h-32"
        ></textarea>

        {/* 🔸 Tombol kirim */}
        <Button
          label="Kirim"
          className="w-[50%] absolute bottom-[-22]"
          onClick={() => router.push("/dashboard")}
        />
      </div>
    </div>
  );
}
