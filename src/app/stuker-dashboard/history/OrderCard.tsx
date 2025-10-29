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

export default function OrderCard({
  orderHistory,
}: {
  orderHistory: OrderHistoryItem[];
}) {
  return (
    <div className="flex flex-col gap-y-1">
      {orderHistory.map((order) => (
        <div
          key={order.order_id}
          className="border border-gray-300 h-36 p-1 rounded-xl"
        >
          <div className="bg-primary rounded-xl p-2 flex flex-col gap-y-1 px-3">
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
          <div className="flex p-2 justify-between">
            <div className="flex gap-x-2">
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
            <div className="flex justify-end items-end text-sm text-gray-600">
              <p>{order.order_date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
