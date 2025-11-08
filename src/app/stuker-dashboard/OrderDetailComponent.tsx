"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import CustomerSection from "./CustomerSection";
import OrderSummary from "./OrderSummary";
import PaymentSummary from "./PaymentSummary";
import Button from "@/components/ButtonPrimary";

interface OrderDetailComponentProps {
  setOrderDetailVisibility: (value: boolean) => void;
  orderDetailVisibility: boolean;
}

export default function OrderDetailComponent({
  setOrderDetailVisibility,
  orderDetailVisibility,
}: OrderDetailComponentProps) {
  const router = useRouter();

  // 🔹 Data dummy (sementara)
  const data = {
    order_id: "001",
    customer_name: "Marip Ramadan",
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
    customer_image: "/images/profilePhoto.png",
  };

  // =====================================================
  // 🔹 RENDER UI
  // =====================================================
  return (
    <>
      {/* 🔸 Overlay (klik di luar untuk menutup modal) */}
      {orderDetailVisibility && (
        <div
          className="fixed inset-0 bg-black opacity-20 backdrop-blur-[1px] z-40 transition-opacity duration-300"
          onClick={() => setOrderDetailVisibility(false)}
        ></div>
      )}

      {/* 🔸 Kontainer utama */}
      <div
        className={`z-50 w-full h-[96vh] bg-gray-100 absolute fixed border-t border-gray-300 ${
          orderDetailVisibility
            ? "translate-y-4 opacity-100"
            : "translate-y-full opacity-0"
        } -translate-x-1/2 -translate-y-1/2 rounded-3xl left-1/2 p-3 duration-300 transition-all max-w-112 flex flex-col gap-y-2`}
      >
        {/* 🔹 Header */}
        <div className="flex justify-between items-center">
          <p className="font-medium text-lg self-end">Pemesan</p>
          <Image
            src="/icons/close.svg"
            alt="Close"
            width={30}
            height={30}
            onClick={() => setOrderDetailVisibility(false)}
            className="text-primary hover:scale-105 opacity-90 hover:opacity-100 cursor-pointer active:opacity-10"
          />
        </div>

        {/* 🔹 Informasi Customer */}
        <CustomerSection
          customerName={data.customer_name}
          customerImage={data.customer_image}
          customerRate={data.customer_rate}
        />

        {/* 🔹 Rincian Order dan Pembayaran */}
        <div className="space-y-2 max-h-[60vh] overflow-scroll scrollbar-hide">
          <OrderSummary
            pickupLocation="Jl. Merdeka No. 45, Bandung, Dekat tukang siomay"
            deliveryLocation="Jl. Braga No. 12, Bandung"
            orderDescription={`Nitip kopi susu panas tanpa gula, 
            dua roti bakar coklat keju, 
            dan pastikan pakai plastik terpisah biar nggak lembek ya.`}
          />
          <PaymentSummary
            priceEstimation={data.price_estimation}
            deliveryFee={data.delivery_fee}
          />
        </div>

        {/* 🔹 Tombol Aksi */}
        <Button
          label="Terima Pesanan"
          className="mt-2"
          onClick={() => router.push("/stuker-order/process")}
        />
      </div>
    </>
  );
}
