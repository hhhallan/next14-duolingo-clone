import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { InfinityIcon } from "lucide-react";

type Props = {
  activeCourse: { imageSrc: string; title: string };
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

export const UserProgress = ({
  activeCourse,
  hearts,
  points,
  hasActiveSubscription,
}: Props) => {
  return (
    <div className="flex items-center justify-between gap-x-2 w-full">
      <Link href={"/courses"}>
        <Button variant="ghost">
          <Image
            src={`/flags${activeCourse.imageSrc}`}
            alt={activeCourse.title}
            className="rounded-md border"
            width={32}
            height={32}
          />
        </Button>
      </Link>
      <Link href={"/shop"}>
        <Button variant="ghost" className="text-orange-500">
          <Image
            src="/points.svg"
            alt="Points"
            className="mr-2"
            width={28}
            height={28}
          />
          {points}
        </Button>
      </Link>
      <Link href={"/shop"}>
        <Button variant="ghost" className="text-red-500">
          <Image
            src="/heart.svg"
            alt="Hearts"
            className="mr-2"
            width={22}
            height={22}
          />
          {hasActiveSubscription ? <InfinityIcon /> : hearts}
        </Button>
      </Link>
    </div>
  );
};
