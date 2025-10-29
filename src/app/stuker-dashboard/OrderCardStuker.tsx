import Image from "next/image";
interface OrderHistoryItem {
  order_id: string;
  stuker_nim: string;
  customer_nim: string;
  pickup_location: string;
  delivery_location: string;
  order_description: string;
  price_estimation: number;
  delivery_fee: number;
  total_price_estimation: number;
  order_date: string;
  status: string; // bisa pakai union type
  stuker_image: string;
  stuker_name: string;
}

export default function OrderCardStuker({
  activeOrders,
}: {
  activeOrders: OrderHistoryItem[];
}) {
  function toRupiah(number: number) {
    if (isNaN(number)) return "Input bukan angka";

    // Gunakan Intl.NumberFormat untuk format IDR
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0, // hilangkan “,00”
      maximumFractionDigits: 0,
    }).format(number);
  }
  return (
    <div className="flex flex-col gap-y-1">
      {activeOrders.map((order) => (
        <div
          key={order.order_id}
          className="border border-gray-300 h-36 p-1 rounded-xl hover:bg-[#E1CCEC] hover:scale-101 cursor-pointer"
        >
          <div className="bg-primary rounded-xl p-2 flex flex justify-between gap-y-1 px-3 ">
            <div className="flex flex-col justify-center">
              <div className="flex gap-x-2 items-center">
                <Image
                  src={"/icons/pickup.svg"}
                  width={24}
                  height={24}
                  alt="pickup"
                />
                <p className="text-white text-sm">{order.pickup_location}</p>
              </div>
              <div className="flex gap-x-2 items-center">
                <Image
                  src={"/icons/location.svg"}
                  width={26}
                  height={26}
                  alt="delivery"
                />
                <p className="text-white text-sm">{order.delivery_location}</p>
              </div>
            </div>
            <div>
              <p className="bg-[#E1CCEC] text-sm rounded-lg px-2 py-1 mb-1 font-medium">
                {toRupiah(order.price_estimation)}
              </p>
              <p className="bg-[#F49BAB] text-sm rounded-lg px-2 py-1 font-medium">
                {toRupiah(order.delivery_fee)}
              </p>
            </div>
          </div>
          <div className="flex p-2 justify-between">
            <div className="flex gap-x-2 flex-5">
              <Image
                src={order.stuker_image}
                alt="stuker profile"
                width={46}
                height={46}
                className="rounded-full"
              />
              <div>
                <p className="text-md font-medium">{order.stuker_name}</p>
                <p className="text-sm">Customer</p>
              </div>
            </div>
            <div className="flex text-sm text-gray-600 overflow-hidden h-11 flex-5 justify-start  border-l-1 pl-1">
              <p className="w-[100%] text-black text-md">
                {order.order_description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
