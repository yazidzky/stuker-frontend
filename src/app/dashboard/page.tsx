import ActionCard from "./ActionCard";
import Header from "./Header";
import NotificationSection from "./NotificationSection";
import WellcomeText from "./WellcomeText";
export default function Dashboard() {
  const data = {
    imgUrl: "/images/profilePhoto.png",
    username: "Marip",
  };
  const notifications = [
    {
      notification_id: "NTF001",
      message:
        "Pesanan kamu #ORD892 sudah diterima oleh penjual dan sedang diproses 🛍️",
      created_at: "2025-10-05T09:30:00Z",
    },
    {
      notification_id: "NTF002",
      message:
        "Titipan kamu sedang dalam perjalanan ke Indonesia ✈️ Estimasi tiba 2 hari lagi.",
      created_at: "2025-10-06T14:15:00Z",
    },
    {
      notification_id: "NTF003",
      message:
        "Pembayaran untuk pesanan #ORD892 telah dikonfirmasi ✅ Terima kasih sudah menggunakan layanan kami!",
      created_at: "2025-10-07T08:00:00Z",
    },
    {
      notification_id: "NTF004",
      message:
        "Promo spesial minggu ini! Cashback 10% untuk semua titipan luar negeri 🌏",
      created_at: "2025-10-08T10:45:00Z",
    },
  ];

  return (
    <div className="w-[100%]  px-4">
      <Header imgUrl={data.imgUrl} />
      <WellcomeText username={data.username} />
      <ActionCard />
      <NotificationSection notifications={notifications} />
    </div>
  );
}
