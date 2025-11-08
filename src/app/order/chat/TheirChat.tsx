export default function TheirChat({ textChat }: { textChat: string }) {
  return (
    <p className="bg-[#BE9FE1] max-w-[75%] px-4 py-3 font-medium rounded-2xl rounded-bl-sm">
      {textChat}
    </p>
  );
}
