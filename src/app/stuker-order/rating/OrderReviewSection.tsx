"use client";
import RatingStars from "./RatingStars";
import Button from "@/components/ButtonPrimary";

interface OrderReviewSectionProps {
  setRating: (value: number) => void;
  onSubmit: () => void;
}

export default function OrderReviewSection({
  setRating,
  onSubmit,
}: OrderReviewSectionProps) {
  return (
    <div className="flex flex-col items-center gap-y-3">
      <RatingStars setRating={setRating} />
      <Button
        label="Kirim"
        className="w-[50%] absolute bottom-[-22]"
        onClick={onSubmit}
      />
    </div>
  );
}
