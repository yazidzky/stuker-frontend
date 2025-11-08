"use client";

import Image from "next/image";

// 💡 Tipe data pesanan
interface OrderHistoryItem {
  order_id: string;
  stuker_nim: string;
  customer_nim: string;
  pickup_location: string;
  delivery_location: string;
  order_description: string;
  price_estimation: number;
  delivery_fee: number;
  total_price_estimation: number;
  order_date: string;
  status: string; // misal: "completed" | "pending" | "cancelled"
  stuker_image: string;
  stuker_name: string;
}

interface OrderCardProps {
  orderHistory: OrderHistoryItem[];
}

// =====================================================
// 🔹 KOMPONEN UTAMA: OrderCard
// =====================================================
export default function OrderCard({ orderHistory }: OrderCardProps) {
  return (
    <div className="flex flex-col gap-y-2">
      {orderHistory.map((order) => (
        <div
          key={order.order_id}
          className="border border-gray-300 h-36 p-1 rounded-xl hover:scale-[1.01] cursor-pointer transition-all duration-200"
        >
          {/* 🔸 Bagian Atas: Lokasi Pickup & Delivery */}
          <div className="bg-primary rounded-xl p-2 flex flex-col gap-y-1 px-3">
            {/* Lokasi Penjemputan */}
            <div className="flex items-center gap-x-2">
              <Image
                src="/icons/pickup.svg"
                width={20}
                height={20}
                alt="pickup"
              />
              <p className="text-white text-sm truncate">
                {order.pickup_location}
              </p>
            </div>

            {/* Lokasi Pengantaran */}
            <div className="flex items-center gap-x-2">
              <Image
                src="/icons/location.svg"
                width={22}
                height={22}
                alt="delivery"
              />
              <p className="text-white text-sm truncate">
                {order.delivery_location}
              </p>
            </div>
          </div>

          {/* 🔸 Bagian Bawah: Profil & Tanggal */}
          <div className="flex justify-between items-center p-2">
            {/* Profil Stuker */}
            <div className="flex items-center gap-x-2">
              <Image
                src={order.stuker_image}
                alt="stuker profile"
                width={46}
                height={46}
                className="rounded-full"
              />
              <div>
                <p className="text-md font-medium text-gray-800">
                  {order.stuker_name}
                </p>
                <p className="text-sm text-gray-600">Customer</p>
              </div>
            </div>

            {/* Tanggal Pesanan */}
            <div className="text-sm text-gray-600 font-medium">
              <p>{order.order_date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
