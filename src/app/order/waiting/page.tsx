"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CustomerSection from "./CustomerSection";
import Alert from "@/components/Alert";
import ConfirmModalComponent from "@/components/ConfirmationModal";

// 🔹 Komponen baru hasil modularisasi
import ActiveOrderHeader from "./ActiveOrderHeader";
import OrderDetailSection from "./OrderDetailSection";
import ConfirmButton from "./ConfirmButton";

export default function WaitingPage() {
  const router = useRouter();
  const [showModal, setShowModal] = useState<boolean>(false);

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

  const data = {
    order_id: "001",
    stuker_nim: "1271129111",
    stuker_name: "Rizky Ramadhan",
    customer_nim: "81829919221",
    pickup_location: "Kantin atas dekat pohon",
    customer_rate: 49,
    delivery_location: "Lantai 4 FST, R 420",
    order_description: "Deskripsi orderannya sayang",
    price_estimation: 10000,
    delivery_fee: 5000,
    total_price_estimation: 15000,
    order_date: "Mei, 5",
    status: "completed",
    stuker_image: "/images/profilePhoto.png",
  };

  // 🔹 Handler konfirmasi pesanan selesai
  const handleConfirm = () => {
    setShowModal(false);
    localStorage.removeItem("orderNotificationShown");
    router.push("/order/rating");
  };

  return (
    <div className="h-[100dvh] flex flex-col justify-center px-4">
      {/* 🔸 Header Pesanan Aktif */}
      <ActiveOrderHeader />

      {/* 🔸 Informasi Customer */}
      <CustomerSection
        stukerImage={data.stuker_image}
        stukerName={data.stuker_name}
      />

      {/* 🔸 Rincian Order & Pembayaran */}
      <OrderDetailSection
        pickupLocation="Jl. Merdeka No. 45, Bandung, Dekat tukang siomay"
        deliveryLocation="Jl. Braga No. 12, Bandung"
        orderDescription={`Nitip kopi susu panas tanpa gula, 
        dua roti bakar coklat keju, 
        dan pastikan pakai plastik terpisah biar nggak lembek ya.`}
        priceEstimation={data.price_estimation}
        deliveryFee={data.delivery_fee}
      />

      {/* 🔸 Tombol Konfirmasi */}
      <ConfirmButton onClick={() => setShowModal(true)} />

      {/* =====================================================
          🔸 Komponen Non-Visible (Modal & Alert)
      ===================================================== */}
      <Alert
        message="Yeay! 🎉 Pesanan kamu sudah diambil oleh stuker. Mohon tunggu ya"
        localStorageName="orderNotificationShown"
      />

      <ConfirmModalComponent
        illustrationUrl="/illustrations/orderFinish.svg"
        message="apakah kamu yakin pesanan sudah selesai?"
        confirm={handleConfirm}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
}
