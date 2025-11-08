import Image from "next/image";
import InputOrder from "./InputOrder";

export default function InputSection() {
  return (
    <div className="w-[98%] justify-self-center">
      <textarea
        placeholder="Tuliskan detail order kamu disini...."
        className="w-full h-40 p-3 text-sm border-1 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary resize-none"
      ></textarea>
      <InputOrder
        label="Perkiraan Biaya (Rp)"
        type="number"
        placeholder="Contoh: 30000"
      />
      <InputOrder
        label="Ongkos (Rp)"
        type="number"
        placeholder="Contoh: 5000"
      />
      <div className="flex mt-2 gap-x-4">
        <Image
          src={"/icons/pickup-black.svg"}
          alt="Pickup"
          width={36}
          height={36}
        />
        <InputOrder
          label="Lokasi Pengambilan"
          type="text"
          placeholder="Contoh: Kantin atas dekat pohon"
        />
      </div>
      <div className="flex mt-2 gap-x-4">
        <Image
          src={"/icons/location-black.svg"}
          alt="Pickup"
          width={38}
          height={38}
        />
        <InputOrder
          label="Lokasi Penerimaan"
          type="text"
          placeholder="Contoh: Lantai 4 FST, R 4.10"
        />
      </div>
    </div>
  );
}
