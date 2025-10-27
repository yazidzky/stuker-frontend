import Image from "next/image";

export default function LoginPage({ children }: { children: React.ReactNode }) {
  return (
    <div className=" w-[100%] h-[100vh]">
      <div>{children}</div>
    </div>
  );
}
