"use client";
import { useRef, useState } from "react";
import HeaderProfilePage from "./HeaderProfilePage";
import Image from "next/image";
import PhotoProfileSection from "./PhotoProfileSection";
import Rating from "./Rating";
import ProfileField from "./ProfileField";
import { Lock, User, IdCard, Phone } from "lucide-react";
import Button from "@/components/ButtonPrimary";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  const [image, setImage] = useState("/images/profilePhoto.png");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [profile, setProfile] = useState({
    name: "Marip Ramadhan",
    nim: "1237050069",
    phone: "+62 754 4374 2834",
    password: "****************",
  });

  // 🔹 Data edit sementara (belum disimpan)
  const [editedData, setEditedData] = useState(profile);

  // 🔹 Fungsi untuk update value yang diedit
  const handleFieldChange = (field: keyof typeof profile, value: string) => {
    setEditedData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSwitch = () => {
    router.push("/dashboard");
  };
  // 🔹 Fungsi untuk menimpa (simpan perubahan)
  const handleOverride = () => {
    setProfile(editedData);
    alert("✅ Data profil berhasil ditimpa!");
  };
  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <div className="px-4 flex flex-col">
      <HeaderProfilePage />
      <PhotoProfileSection
        handleClick={handleClick}
        handleFileChange={handleFileChange}
        fileInputRef={fileInputRef}
        imageUrl={image}
      />
      <Rating rating={35} reviews={40} />
      <ProfileField
        label="Nama pengguna"
        icon={<User size={20} />}
        value={editedData.name}
        editable
        onChange={(v) => handleFieldChange("name", v)}
      />
      <ProfileField
        label="NIM"
        icon={<IdCard size={20} />}
        value={editedData.nim}
      />
      <ProfileField
        label="Nomor telepon"
        icon={<Phone size={20} />}
        value={editedData.phone}
        editable
        onChange={(v) => handleFieldChange("phone", v)}
      />
      <ProfileField
        label="Kata sandi"
        icon={<Lock size={20} />}
        value={editedData.password}
        editable
        onChange={(v) => handleFieldChange("password", v)}
      />
      <div className="flex gap-x-2">
        <div className="flex flex-4">
          <Button
            label="Beralih ke Customer"
            className="text-md rounded-lg py-3"
            onClick={handleSwitch}
          />
        </div>
        <div className="flex-5">
          <Button
            label="Simpan Perubahan"
            onClick={handleOverride}
            className="text-md rounded-lg py-3"
          />
        </div>
      </div>
    </div>
  );
}
