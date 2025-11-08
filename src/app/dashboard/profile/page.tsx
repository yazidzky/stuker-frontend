"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

// 🔹 Komponen internal halaman profil
import HeaderProfilePage from "./HeaderProfilePage";
import PhotoProfileSection from "./PhotoProfileSection";
import Rating from "./Rating";

// 🔹 Komponen utilitas global
import Button from "@/components/ButtonPrimary";
import ConfirmModalComponent from "@/components/ConfirmationModal";
import Alert from "@/components/Alert";

import ProfileFieldsSection from "./ProfileFieldsSection";

export default function ProfilePage() {
  const router = useRouter();

  // 🔹 State utama
  const [showModal, setShowModal] = useState<boolean>(false);
  const [alert, setAlert] = useState<boolean>(false);
  const [image, setImage] = useState("/images/profilePhoto.png");

  const fileInputRef = useRef<HTMLInputElement>(null);

  // 🔹 Data profil pengguna
  const [profile, setProfile] = useState({
    name: "Marip Ramadhan",
    nim: "1237050069",
    phone: "+62 754 4374 2834",
    password: "****************",
  });

  // 🔹 Data sementara (belum disimpan)
  const [editedData, setEditedData] = useState(profile);

  // =====================================================
  // 🔧 HANDLER FUNCTIONS
  // =====================================================

  // 👉 Update data yang sedang diedit
  const handleFieldChange = (field: keyof typeof profile, value: string) => {
    setEditedData((prev) => ({ ...prev, [field]: value }));
  };

  // 👉 Ganti halaman ke dashboard Stuker
  const handleSwitch = () => {
    router.push("/stuker-dashboard");
  };

  // 👉 Simpan perubahan dan tampilkan alert
  const handleOverride = () => {
    setProfile(editedData);
    setAlert(true);

    setTimeout(() => {
      setAlert(false);
      localStorage.removeItem("saveProfile");
    }, 4000);
  };

  // 👉 Trigger input file saat foto diklik
  const handleClick = () => {
    fileInputRef.current?.click();
  };

  // 👉 Update foto profil yang dipilih user
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
    <div className="px-4 flex flex-col">
      {/* 🔸 Alert: tampil setelah data ditimpa */}
      {alert && (
        <Alert
          message="Data profil berhasil ditimpa!"
          localStorageName="saveProfile"
        />
      )}

      {/* 🔸 Modal konfirmasi penyimpanan */}
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

      {/* 🔸 Header halaman */}
      <HeaderProfilePage />

      {/* 🔸 Foto profil */}
      <PhotoProfileSection
        handleClick={handleClick}
        handleFileChange={handleFileChange}
        fileInputRef={fileInputRef}
        imageUrl={image}
      />

      {/* 🔸 Rating pengguna */}
      <Rating rating={35} reviews={40} />

      {/* 🔸 Bidang data profil */}
      <ProfileFieldsSection
        editedData={editedData}
        onFieldChange={handleFieldChange}
      />

      {/* 🔸 Aksi tombol bawah */}
      <div className="flex gap-x-2">
        <div className="flex flex-3">
          <Button
            label="Beralih ke Stuker"
            className="text-md rounded-lg py-3"
            onClick={handleSwitch}
          />
        </div>
        <div className="flex-4">
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
