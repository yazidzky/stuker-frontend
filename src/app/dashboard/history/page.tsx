import NoOrderMessage from "./NoOrderMessage";
import OrderCard from "./OrderCardComponent";

export default function HistoryPage() {
  const orderHistory = [
    {
      order_id: "001",
      stuker_nim: "1271129111",
      stuker_name: "Rizky Ramadhan",
      customer_nim: "81829919221",
      pickup_location: "Kantin atas dekat pohon",
      delivery_location: "Lantai 4 FST, R 420",
      order_description: "Deskripsi orderannya sayang",
      price_estimation: 10000,
      delivery_fee: 5000,
      total_price_estimation: 15000,
      order_date: "Mei, 5",
      status: "completed",
      stuker_image: "/images/profilePhoto.png",
    },
    {
      order_id: "002",
      stuker_nim: "1271129222",
      stuker_name: "Fauzan Hakim",
      customer_nim: "81829913331",
      pickup_location: "Koperasi mahasiswa lantai 1",
      delivery_location: "Gedung Dakwah, R 203",
      order_description: "Nitip beli air mineral dan snack ringan",
      price_estimation: 15000,
      delivery_fee: 4000,
      total_price_estimation: 19000,
      order_date: "Mei, 8",
      status: "in_progress",
      stuker_image: "/images/profilePhoto.png",
    },
    {
      order_id: "003",
      stuker_nim: "1271130333",
      stuker_name: "Alya Nurfadila",
      customer_nim: "81829914441",
      pickup_location: "Warung Bu Eni depan kampus",
      delivery_location: "Lantai 3 FTK, R 305",
      order_description: "Nitip nasi ayam geprek level 2 dan es teh",
      price_estimation: 18000,
      delivery_fee: 5000,
      total_price_estimation: 23000,
      order_date: "Mei, 10",
      status: "completed",
      stuker_image: "/images/profilePhoto.png",
    },
    {
      order_id: "004",
      stuker_nim: "1271140444",
      stuker_name: "Naufal Pratama",
      customer_nim: "81829915551",
      pickup_location: "Kantin FSH blok B",
      delivery_location: "Perpustakaan pusat",
      order_description: "Nitip kopi susu dan roti bakar coklat",
      price_estimation: 20000,
      delivery_fee: 6000,
      total_price_estimation: 26000,
      order_date: "Mei, 12",
      status: "pending",
      stuker_image: "/images/profilePhoto.png",
    },
    {
      order_id: "005",
      stuker_nim: "1271150555",
      stuker_name: "Dina Safitri",
      customer_nim: "81829916661",
      pickup_location: "Kantin Fakultas Tarbiyah",
      delivery_location: "Gedung FISIP, R 110",
      order_description: "Nitip nasi goreng dan minumannya jus alpukat",
      price_estimation: 22000,
      delivery_fee: 5000,
      total_price_estimation: 27000,
      order_date: "Mei, 15",
      status: "completed",
      stuker_image: "/images/profilePhoto.png",
    },
  ];

  return (
    <div className="pt-4 px-2 flex flex-col gap-y-2  pb-[11vh]">
      <h1 className="text-primary font-medium text-xl">Riwayat Pesanan</h1>

      {orderHistory && orderHistory.length > 0 ? (
        <OrderCard orderHistory={orderHistory} />
      ) : (
        <NoOrderMessage />
      )}
    </div>
  );
}
