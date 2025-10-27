"use client";
import ButtonPrimary from "@/components/ButtonPrimary";
import InputAuth from "@/components/InputAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    nim: "",
    username: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
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
    router.push("/auth");
  };
  return (
    <div className=" h-[80vh] flex flex-col justify-between py-5 px-6 border-t border-gray-300 ">
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
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <ButtonPrimary label="Daftar" onClick={handleSubmit} />
        <div className="flex justify-center mt-2 gap-x-2">
          <p>Sudah Punya Akun?</p>
          <p
            className="font-medium text-primary cursor-pointer active:opacity-20"
            onClick={handleSwitchPage}
          >
            Login
          </p>
        </div>
      </div>
    </div>
  );
}
