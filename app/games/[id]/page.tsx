import InfosSection from "@/components/ui/InfosSection";
import Card from "@/components/ui/card/Card";
import { posts } from "@/mock/posts";
import React from "react";

export default function Page({ params }: { params: { id: string } }) {
  const game = posts.find(game => String(game.id) === params.id);
  if (!game) {
    return <div>Jeu non trouvé idiot va !!</div>;
  }
  return (
    <main className="min-h-screen bg-[#0f182a] flex justify-center py-10">
      <div className="w-[50%] py-10 flex flex-col">
        <Card
          key={game.id}
          image={game.image}
          date={game.date}
          title={game.title}
          description={game.description}
        />
        <div className="text-white flex justify-evenly py-5">
          <InfosSection label="Last play" value={game.lastPlay} />
          <InfosSection label="Temps de jeu" value={game.playTime} />
          <InfosSection label="Plateforme:" value={game.platform} />
        </div>
      </div>
    </main>
  );
}


