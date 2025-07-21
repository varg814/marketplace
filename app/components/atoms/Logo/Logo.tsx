import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="text-xl font-bold bg-gray-300 text-black max-sm:hidden px-2 py-1 rounded-full">
      MyMarket
    </Link>
  );
}
