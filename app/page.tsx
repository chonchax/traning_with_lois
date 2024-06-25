import Card from "@/components/ui/card/Card";
import { games } from "@/mock/games";

export default function Home() {
  return (
    <main className="min-h-screen flex bg-primary-950">
      <div className="w-full max-w-7xl mx-auto flex flex-col px-10 py-10 gap-y-5">
        <div className="flex gap-x-5">
          {games.slice(0, 2).map((post, index) => (
            <Card
              key={index}
              image={post.image}
              date={post.date}
              title={post.title}
              description={post.description}
              gameId={post.id}
            />
          ))}
        </div>
        <div className="flex gap-x-5">
          {games.slice(2).map((post, index) => (
            <Card
              key={index}
              image={post.image}
              date={post.date}
              title={post.title}
              description={post.description}
              gameId={post.id}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
