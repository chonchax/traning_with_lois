import Card from "@/components/ui/card/Card";

export default function Home() {
  return (
    <main className="min-h-screen flex bg-[#0f182a]">
      <div className="bg-white/10 w-52"></div>
      <div className="w-full flex flex-col px-10 py-10 gap-y-5">
        <div className="flex gap-x-5">
          <Card
            image="/asset/img/card/gow_ragnarok.webp"
            date="09/11/2022"
            title="God Of War Ragnarök"
            description="Embarquez pour un voyage épique et émouvant..."
            gameId={1}
          />
          <Card
            image="/asset/img/card/ff7_rebirth.jpg"
            date="29/04/2023"
            title="Final Fantasy 7 Rebirth"
            description="Le voyage vers l'inconnu continue..."
            gameId={2}
          />
        </div>
        <div className="flex gap-x-5">
          <Card 
            image="/asset/img/card/rise_of_the_ronin.webp"
            date="22/03/2024"
            title="Rise Of The Ronin"
            description="Forgez votre voie dans ce jeu d'action-aventure inspiré par les samouraïs..."
            gameId={3}
            height="16rem"
            titleSize="text-xl"
          />
          <Card
            image="/asset/img/card/spiderman2.jpg"
            date="20/10/2023"
            title="Spiderman 2"
            description="Dépassez vos limites ensemble..."
            height="16rem"
            gameId={4}
            titleSize="text-xl"
          />
          <Card
            image="/asset/img/card/jedi_survivor.webp"
            date="28/04/2023"
            title="Star Wars Jedi Survivor"
            description="Échappez à l'Empire et survivez..."
            height="16rem"
            gameId={5}
            titleSize="text-xl"
          />
        </div>
      </div>
    </main>
  );
}
