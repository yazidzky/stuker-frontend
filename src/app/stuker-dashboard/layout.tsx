import Image from "next/image";
import BottomNav from "./BottomNav";

export default function StukerDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" w-[100%] h-[100vh] relative">
      <div className="h-[100vh] overflow-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] pb-[11vh]">
        {children}
      </div>
      <BottomNav />
    </div>
  );
}
