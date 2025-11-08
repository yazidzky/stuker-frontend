"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ButtonPrimary from "@/components/ButtonPrimary";
import InputAuth from "@/components/InputAuth";

export default function LoginPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    nim: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault(); // biar nggak reload halaman
    router.push("/dashboard");
  };

  const handleSwitchPage = () => {
    router.push("/auth/register");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-[80dvh] flex flex-col justify-between py-8 px-6 border-t border-gray-300"
    >
      {/* Header + Input Fields */}
      <div>
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

      {/* Button + Switch Page */}
      <div>
        <ButtonPrimary label="Login" type="submit" onClick={handleSubmit} />

        <div className="flex justify-center mt-2 gap-x-2">
          <p>Belum Punya Akun?</p>
          <p
            onClick={handleSwitchPage}
            className="font-medium text-primary cursor-pointer active:opacity-20"
          >
            Daftar
          </p>
        </div>
      </div>
    </form>
  );
}
