import Link from "next/link";
import { getData } from "../data";

export default async function Sidebar() {
  console.log("sidebar");
  const data = await getData();

  return (
    <div className="flex flex-col gap-4">
      <Link prefetch={false} href="/de/">
        Home
      </Link>
      <Link prefetch={false} href="/de/about">
        About
      </Link>
    </div>
  );
}
