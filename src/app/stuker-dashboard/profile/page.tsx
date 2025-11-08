"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Lock, User, IdCard, Phone } from "lucide-react";

// 🔹 Komponen internal
import HeaderProfilePage from "./HeaderProfilePage";
import PhotoProfileSection from "./PhotoProfileSection";
import Rating from "./Rating";
import ProfileField from "./ProfileField";

// 🔹 Komponen global
import Button from "@/components/ButtonPrimary";
import ConfirmModalComponent from "@/components/ConfirmationModal";
import Alert from "@/components/Alert";

// 💡 Halaman Profil Stuker — menampilkan dan mengedit data akun pengguna.
export default function ProfilePage() {
  const router = useRouter();

  // =====================================================
  // 🔹 STATE MANAGEMENT
  // =====================================================
  const [showModal, setShowModal] = useState<boolean>(false);
  const [alert, setAlert] = useState<boolean>(false);
  const [image, setImage] = useState("/images/profilePhoto.png");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 🔹 Data profil & edit sementara
  const [profile, setProfile] = useState({
    name: "Marip Ramadhan",
    nim: "1237050069",
    phone: "+62 754 4374 2834",
    password: "****************",
  });
  const [editedData, setEditedData] = useState(profile);

  // =====================================================
  // 🔹 HANDLER FUNCTIONS
  // =====================================================

  // 👉 Perubahan pada setiap field
  const handleFieldChange = (field: keyof typeof profile, value: string) => {
    setEditedData((prev) => ({ ...prev, [field]: value }));
  };

  // 👉 Tombol "Beralih ke Customer"
  const handleSwitch = () => {
    router.push("/dashboard");
  };

  // 👉 Simpan perubahan profil
  const handleOverride = () => {
    setProfile(editedData);
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
      localStorage.removeItem("saveProfileStuker");
    }, 4000);
  };

  // 👉 Upload foto profil
  const handleClick = () => fileInputRef.current?.click();
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  // =====================================================
  // 🔹 RENDER UI
  // =====================================================
  return (
    <div className="px-4 flex flex-col relative">
      {/* 🔸 Alert Notifikasi */}
      {alert && (
        <Alert
          message="Data profil berhasil ditimpa!"
          localStorageName="saveProfileStuker"
        />
      )}

      {/* 🔸 Modal Konfirmasi */}
      <ConfirmModalComponent
        illustrationUrl="/illustrations/saveProfile.svg"
        message="apakah kamu yakin ingin menyimpan perubahan?"
        confirm={() => {
          handleOverride();
          setShowModal(false);
        }}
        showModal={showModal}
        setShowModal={setShowModal}
      />

      {/* 🔸 Header & Foto Profil */}
      <HeaderProfilePage />
      <PhotoProfileSection
        handleClick={handleClick}
        handleFileChange={handleFileChange}
        fileInputRef={fileInputRef}
        imageUrl={image}
      />

      {/* 🔸 Rating Stuker */}
      <Rating rating={35} reviews={40} />

      {/* 🔸 Field Informasi Profil */}
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

      {/* 🔸 Tombol Aksi */}
      <div className="flex gap-x-2 mt-2">
        <div className="flex-1">
          <Button
            label="Beralih ke Customer"
            className="text-md rounded-lg py-3"
            onClick={handleSwitch}
          />
        </div>
        <div className="flex-1">
          <Button
            label="Simpan Perubahan"
            onClick={() => setShowModal(true)}
            className="text-md rounded-lg py-3"
          />
        </div>
      </div>
    </div>
  );
}
