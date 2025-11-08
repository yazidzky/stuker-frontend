import ChatSection from "./ChatSection";
import HeaderChat from "./Header";

export default function ChatPage() {
  const data = {
    urlProfile: "/images/profilePhoto.png",
    username: "Kim Jong Un",
  };
  return (
    <div>
      <HeaderChat urlProfile={data.urlProfile} username={data.username} />
      <div className="w-[100%] h-[100dvh] bg-[url('/illustrations/doodle.svg')] bg-no-repeat bg-center bg-cover flex justify-center items-center">
        <ChatSection />
      </div>
    </div>
  );
}
