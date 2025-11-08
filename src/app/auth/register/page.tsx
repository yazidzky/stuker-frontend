"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ButtonPrimary from "@/components/ButtonPrimary";
import InputAuth from "@/components/InputAuth";

export default function RegisterPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    nim: "",
    username: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  // 👉 Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 👉 Handle submit (Enter / Button)
  const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault(); // biar gak reload browser
    router.push("/dashboard");
  };

  // 👉 Switch to Login page
  const handleSwitchPage = () => {
    router.push("/auth");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-[80dvh] flex flex-col justify-between py-5 px-6 border-t border-gray-300"
    >
      {/* ================= Header & Form Fields ================= */}
      <div>
        <h1 className="font-sans text-4xl font-semibold mb-5">Daftar</h1>

        <InputAuth
          label="NIM"
          name="nim"
          type="text"
          placeholder="Masukan Nim"
          value={formData.nim}
          onChange={handleChange}
        />

        <InputAuth
          label="Nama Pengguna"
          name="username"
          type="text"
          placeholder="Masukan nama pengguna"
          value={formData.username}
          onChange={handleChange}
        />

        <InputAuth
          label="Nomor Telepon"
          name="phoneNumber"
          type="text"
          placeholder="Masukan nomor telepon"
          value={formData.phoneNumber}
          onChange={handleChange}
        />

        <InputAuth
          label="Kata Sandi"
          name="password"
          type="password"
          placeholder="Masukan kata sandi"
          value={formData.password}
          onChange={handleChange}
        />

        <InputAuth
          label="Konfirmasi Kata Sandi"
          name="confirmPassword"
          type="password"
          placeholder="Masukan ulang kata sandi"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </div>

      {/* ================= Button & Page Switch ================= */}
      <div>
        <ButtonPrimary label="Daftar" type="submit" onClick={() => {}} />

        <div className="flex justify-center mt-2 gap-x-2">
          <p>Sudah Punya Akun?</p>
          <p
            onClick={handleSwitchPage}
            className="font-medium text-primary cursor-pointer active:opacity-20"
          >
            Login
          </p>
        </div>
      </div>
    </form>
  );
}
