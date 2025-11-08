"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// 🔹 Komponen internal utama
import CustomerSection from "./CustomerSection";
import Alert from "@/components/Alert";
import ConfirmModalComponent from "@/components/ConfirmationModal";

// 🔹 Komponen modular hasil pemecahan
import ActiveOrderHeader from "./ActiveOrderHeader";
import OrderDetailSection from "./OrderDetailSection";
import ConfirmFinishButton from "./ConfirmFinishButton";

export default function OrderProcessPage() {
  const router = useRouter();
  const [showModal, setShowModal] = useState<boolean>(false);

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

  // 🔹 Data dummy pesanan (sementara)
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

  // =====================================================
  // 🔧 HANDLER FUNCTIONS
  // =====================================================

  // 👉 Konfirmasi pesanan selesai
  const handleConfirmFinish = () => {
    setShowModal(false);
    localStorage.removeItem("orderNotificationShown");
    router.push("/stuker-order/rating");
  };

  // =====================================================
  // 🔹 RENDER UI
  // =====================================================
  return (
    <div className="h-[100dvh] px-4 flex flex-col justify-center">
      {/* 🔸 Alert notifikasi */}
      <Alert
        message="Pesanan berhasil diambil, jangan buat pelanggan kamu menunggu terlalu lama ya"
        localStorageName="orderNotificationShown"
      />

      {/* 🔸 Modal konfirmasi selesai */}
      <ConfirmModalComponent
        illustrationUrl="/illustrations/orderFinish.svg"
        message="apakah kamu yakin pesanan sudah selesai?"
        confirm={handleConfirmFinish}
        showModal={showModal}
        setShowModal={setShowModal}
      />

      {/* 🔸 Header pesanan */}
      <ActiveOrderHeader />

      {/* 🔸 Informasi customer */}
      <CustomerSection
        stukerImage={data.stuker_image}
        customerRate={data.customer_rate}
      />

      {/* 🔸 Detail pesanan & pembayaran */}
      <OrderDetailSection
        pickupLocation="Jl. Merdeka No. 45, Bandung, Dekat tukang siomay"
        deliveryLocation="Jl. Braga No. 12, Bandung"
        orderDescription={`Nitip kopi susu panas tanpa gula, 
        dua roti bakar coklat keju, 
        dan pastikan pakai plastik terpisah biar nggak lembek ya.`}
        priceEstimation={data.price_estimation}
        deliveryFee={data.delivery_fee}
      />

      {/* 🔸 Tombol konfirmasi */}
      <ConfirmFinishButton onClick={() => setShowModal(true)} />
    </div>
  );
}
