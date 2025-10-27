"use client";
import ButtonPrimary from "@/components/ButtonPrimary";
import InputAuth from "@/components/InputAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    nim: "",
    password: "",
  });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    router.push("/dashboard");
  };

  const handleSwitchPage = () => {
    router.push("/auth/register");
  };

  return (
    <div className=" h-[76vh] flex flex-col justify-between py-8 px-6 border-t border-gray-300 ">
      <div onSubmit={handleSubmit}>
        <h1 className="font-sans text-4xl font-semibold mb-5">Login</h1>
        <InputAuth
          label="NIM"
          name="nim"
          type="number"
          placeholder="Masukan Nim"
          value={formData.nim}
          onChange={handleChange}
        />
        <InputAuth
          label="Kata Sandi"
          name="password"
          type="password"
          placeholder="Masukan Kata Sandi"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <ButtonPrimary label="Login" onClick={handleSubmit} />
        <div className="flex justify-center mt-2 gap-x-2">
          <p>Belum Punya Akun?</p>
          <p
            className="font-medium text-primary cursor-pointer active:opacity-20"
            onClick={handleSwitchPage}
          >
            Daftar
          </p>
        </div>
      </div>
    </div>
  );
}
