"use client";
import ButtonPrimary from "@/components/ButtonPrimary";
import { useRouter } from "next/navigation";

export default function BottomCTA({ total }: { total: number }) {
  const router = useRouter();
  return (
    <div className="w-[100%] left-1/2 -translate-x-1/2 bg-[#9B7EBD] h-22 fixed max-w-112 bottom-0 left-0 rounded-t-xl flex items-center px-4">
      <div className="w-[50%] ps-7">
        <p className="text-white">Total:</p>
        <p className="text-white font-semibold text-xl">Rp{total}</p>
      </div>
      <ButtonPrimary
        label="Buat Pesanan"
        className="w-[50%] h-14"
        onClick={() => router.push("/order/searching-stuker")}
      />
    </div>
  );
}
