import Image from "next/image";

export default function Header({ imgUrl }: { imgUrl: string }) {
  return (
    <div className="w-[100%] h-28 flex justify-between pt-6 items-center">
      <Image
        src={imgUrl}
        alt="Logo"
        width={90}
        height={90}
        className="w-14 h-14 rounded-full "
      />
      <Image
        src={"/stuker-logo.svg"}
        alt="Logo"
        width={90}
        height={90}
        className="w-11 h-11"
      />
    </div>
  );
}
