import BottomInputChatComponent from "./BottomInputChatComponent";
import MyChat from "./MyChat";
import TheirChat from "./TheirChat";

export default function ChatSection() {
  return (
    <div className="w-[100%] h-[100dvh] flex flex-col justify-between pb-[3vh] px-3 relative">
      <div className=" flex flex-col gap-y-3 py-2 overflow-y-scroll scrollbar-hide pb-18">
        <TheirChat textChat="Wah keren! Emang project apa yang lagi kamu kerjain sekarang?" />
        <MyChat textChat="Sekarang lagi bikin aplikasi chat sederhana buat latihan, kayak gabungan antara WhatsApp dan Telegram gitu. Sekalian belajar frontend sama backend-nya juga." />
        <TheirChat textChat="Asik banget tuh. Kamu ngerjain sendiri atau bareng tim?" />
        <MyChat textChat="Awalnya sendiri, tapi sekarang udah ada dua temen yang bantu bagian UI sama server. Lumayan rame jadinya tiap malam ngoding bareng di Discord 😂" />
        <TheirChat textChat="Haha mantap! Nanti kalau udah jadi kasih lihat ya, siapa tahu aku bisa ikut nyobain juga." />
        <MyChat textChat="Siap banget! Nanti aku kabarin pas udah versi beta-nya. Sekarang lagi beresin tampilan chat sama notifikasi dulu nih biar lebih smooth." />
        <TheirChat textChat="Good luck yaa! Jangan lupa istirahat juga, jangan full ngoding terus 😆" />
        <MyChat textChat="Haha noted! Makasih ya udah diingetin 🙏🏻" />
      </div>
      <BottomInputChatComponent />
    </div>
  );
}
