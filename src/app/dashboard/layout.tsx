import Image from "next/image";
import BottomNav from "./BottomNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" w-[100%] relative">
      <div className="h-[100dvh] overflow-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        {children}
      </div>
      <BottomNav />
    </div>
  );
}
