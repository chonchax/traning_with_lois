import Card from "@/components/ui/card/Card";
import { posts } from "@/mock/posts";

export default function Home() {
  return (
    <main className="min-h-screen flex bg-[#0f182a]">
      <div className="bg-white/10 w-52 hidden md:block"></div>
      <div className="w-full max-w-7xl mx-auto flex flex-col px-10 py-10 gap-y-5">
        <div className="flex gap-x-5">
        {posts.slice(0, 2).map((post, index) => (
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
        <div className="flex gap-x-5 mt-5">
          {posts.slice(2).map((post, index) => (
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
