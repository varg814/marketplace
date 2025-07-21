import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="text-xl font-bold bg-black text-white max-sm:hidden px-2 py-1 rounded-full">
      MyMarket
    </Link>
  );
}
