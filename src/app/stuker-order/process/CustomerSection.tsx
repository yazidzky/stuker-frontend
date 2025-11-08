import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CustomerSection({
  stukerImage,
  customerRate,
}: {
  stukerImage: string;
  customerRate: number;
}) {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center  rounded-md">
      <div className="flex gap-x-3 p-2">
        <Image
          src={stukerImage}
          alt="stuker profile"
          width={54}
          height={54}
          className="rounded-full"
        />
        <div className="flex flex-col justify-center">
          <p className="font-medium">Marip Ramadhan</p>
          <p className="text-sm">Pelanggan</p>
        </div>
      </div>
      <div
        className=" p-2 flex rounded-md gap-x-1 items-center mr-1 border border-gray-300 rounded-full cursor-pointer active:opacity-30"
        onClick={() => router.push("/stuker-order/chat")}
      >
        <Image
          src={"/icons/message-purple.svg"}
          alt="Message"
          width={30}
          height={30}
        />
      </div>
    </div>
  );
}
