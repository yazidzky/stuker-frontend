import BottomCTA from "./BottomCTA";
import HeaderOrder from "./HeaderOrder";
import InputSection from "./InputSection";
import OrderGuide from "./OrderGuide";

export default function OrderPage() {
  const data = {
    total_price_estimation: 19000,
  };
  return (
    <div className=" px-4 relative h-[100dvh]">
      <div className="overflow-scroll pb-24 scrollbar-hide">
        <HeaderOrder />
        <OrderGuide />
        <InputSection />
      </div>
      <BottomCTA total={data.total_price_estimation} />
    </div>
  );
}
