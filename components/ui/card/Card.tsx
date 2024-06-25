import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ClockIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type CardProps = {
  image: string | StaticImport;
  gameId?: number;
  date: string;
  title: string;
  description: string;
  className?: string;
  titleClassname?: string;
};
export default function Card({
  image,
  gameId,
  date,
  title,
  description,
  className,
  titleClassname,
}: CardProps) {
  return (
    <Link href={`/games/${gameId}`} className="w-full">
      <div
        className={twMerge("ring-[#344255] hover:ring-4 rounded-2xl shadow-md w-full relative overflow-hidden group/card ring-2 h-80 ", className)}
      >
        <Image
          className="transform transition duration-300 ease-in-out hover:scale-110"
          src={image}
          alt={`Game image ${title}`}
          fill={true}
          objectFit="cover"
        />
        <div className="absolute left-0 right-0 bottom-0 flex flex-col justify-end items-start gap-y-2 p-4 text-white bg-gradient-to-b from-transparent to-70% group-hover/card:to-50% to-black/40">
          <p className="opacity-0 text-sm flex gap-x-2 items-center group-hover/card:opacity-100 transition-opacity">
            <ClockIcon className="h-6 w-6 text-white" />
            {date}
          </p>
          <h2 className={twMerge("font-bold text-4xl", titleClassname)}>
            {title}
          </h2>
          <p className="text-base text-slate-400 group-hover/card:text-white transition-colors">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
