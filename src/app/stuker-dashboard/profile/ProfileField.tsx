"use client";
import { useState } from "react";
import { Pencil } from "lucide-react";

interface ProfileFieldProps {
  label: string; // Nama field (misal: "Nama pengguna")
  icon: React.ReactNode; // Icon dari lucide-react atau lainnya
  value: string; // Nilai awal
  editable?: boolean; // Apakah bisa diedit
  onChange?: (newValue: string) => void; // Callback kalau value berubah
}

export default function ProfileField({
  label,
  icon,
  value,
  editable = false,
  onChange,
}: ProfileFieldProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const handleSave = () => {
    setIsEditing(false);
    onChange?.(inputValue);
  };

  return (
    <div className="flex items-center gap-5 border border-gray-300 rounded-xl p-3 mb-3 shadow-sm">
      {/* Icon */}
      <div className="text-gray-500">{icon}</div>

      {/* Content */}
      <div className="flex-1">
        <p className="text-xs text-gray-500">{label}</p>

        {isEditing ? (
          <input
            type="text"
            className="w-full border-b border-gray-400 focus:outline-none text-gray-800 font-medium"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={handleSave}
            autoFocus
          />
        ) : (
          <p className="text-gray-900 font-medium">{inputValue}</p>
        )}
      </div>

      {/* Tombol edit */}
      {editable && !isEditing && (
        <button
          onClick={() => setIsEditing(true)}
          className="text-gray-400 hover:text-gray-600 transition"
        >
          <Pencil size={18} />
        </button>
      )}
    </div>
  );
}
