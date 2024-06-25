import InfosSection from "@/components/ui/InfosSection";
import Card from "@/components/ui/card/Card";
import { games } from "@/mock/games";
import React from "react";
import { TrophyIcon } from "@heroicons/react/24/outline";

export default function Page({ params }: { params: { id: string } }) {
  const game = games.find((game) => String(game.id) === params.id);
  if (!game) {
    return <div>Jeu non trouvé idiot va !!</div>;
  }
  return (
    <main className="min-h-screen bg-primary-950 flex justify-center py-10">
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
          <InfosSection label={<TrophyIcon className="h-6 w-6" />} value={game.playTime} />
          <InfosSection label="Plateforme:" value={game.platform} />
        </div>
      </div>
    </main>
  );
}
