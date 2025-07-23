import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-200 py-4">
      <div className="max-w-[1488px] mx-auto px-4">
        <div className="flex gap-4 justify-center text-sm text-gray-600">
          <p>© 2025 Marketplace</p>
          <Link href="#" className="hover:underline">Privacy Policy</Link>
          <Link href="#" className="hover:underline">Terms of Service</Link>
          <Link href="#" className="hover:underline">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
