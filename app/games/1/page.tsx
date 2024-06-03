import InfosSection from "@/components/ui/InfosSection";
import Card from "@/components/ui/card/Card";
import React from "react";

export default function page() {
  return (
    <main className="min-h-screen bg-[#0f182a] flex justify-center py-10">
      <div className="w-[50%] py-10 flex flex-col">
        <Card
          image="/asset/img/card/gow_ragnarok.webp"
          date="09/11/2022"
          title="God Of War Ragnarök"
          description="Embarquez pour un voyage épique et émouvant..."
          gameId={1}
          height="24rem"
        />
        <div className="text-white flex justify-evenly py-5">
          <InfosSection label="Last play" value="09/11/2022" />
          <InfosSection label="Temps de jeu" value="4h 23min" />
          <InfosSection label="Plateforme:" value="PlayStation 5" />
        </div>
      </div>
    </main>
  );
}
