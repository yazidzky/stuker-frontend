import Image from "next/image";

export default function BottomInputChatComponent() {
  return (
    <div className="fixed bg-white shadow-md rounded-t-sm px-5 flex items-center  w-[100%]  bottom-0 left-1/2 -translate-x-1/2 max-w-112 h-18">
      <div className="flex w-[100%] gap-x-4">
        {/* Input */}
        <input
          type="text"
          placeholder="Ketik pesan"
          className="flex-1 bg-transparent outline-none placeholder-gray-400 text-gray-700 px-2 font-medium"
        />

        {/* Emoji Icon */}
        <button className="flex-shrink-0">
          <Image
            src="/icons/emoji-purple.svg"
            alt="emoji icon"
            width={28}
            height={28}
            className="active:opacity-10 cursor-pointer"
          />
        </button>

        {/* Send Icon */}
        <button className="flex-shrink-0">
          <Image
            src="/icons/send-purple.svg"
            alt="send icon"
            width={36}
            height={36}
            className="active:opacity-10 cursor-pointer"
          />
        </button>
      </div>
    </div>
  );
}
