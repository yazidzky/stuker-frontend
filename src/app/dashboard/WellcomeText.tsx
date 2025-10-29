export default function WellcomeText({
  username = "Teman",
}: {
  username: string;
}) {
  return (
    <div className="font-sans flex flex-col">
      <h1 className="text-3xl font-normal font-sans">Selamat Pagi,</h1>
      <h1 className="text-4xl font-bold text-[#F49BAB] font-sans">
        {username}!
      </h1>
    </div>
  );
}
