export default function MyChat({ textChat }: { textChat: string }) {
  return (
    <p className="bg-[#7F55B1] max-w-[75%] px-4 py-3 font-medium rounded-2xl rounded-br-sm self-end text-white">
      {textChat}
    </p>
  );
}
