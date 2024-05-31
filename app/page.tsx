import Card from "@/components/ui/card/Card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex bg-[#0f182a]">
      <div className="bg-white/10 w-48 h-screen"></div>
      <div className="w-full h-screen flex gap-x-5 px-10 py-10">
        <Card
          image="/asset/img/card/sonic.jpg"
          date="16/10/1984"
          title="Sonic le retour du vieux"
          description="Du haut de ses 40 ans sonic va toujours aussi vite"
          gameId={1}
        />
        <Card
          image="/asset/img/card/sonic.jpg"
          date="01/01/2024"
          title="Sonic"
          description="Trop vite frerot"
        />
        <Card
          image="/asset/img/card/sonic.jpg"
          date="01/01/2024"
          title="Sonic"
          description="Trop vite frerot"
        />
      </div>
    </main>
  );
}
