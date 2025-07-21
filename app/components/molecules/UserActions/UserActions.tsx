"use client";
import { useState } from "react";
import Button from "../../atoms/Button/Button";
import rame from "../../../favicon.ico";
import Image from "next/image";
import Link from "next/link";

export default function UserActions() {
  const [isOpen, setIsOpen] = useState(false);
  const isAuthenticated = true;

  const toggleDropdown = () => setIsOpen(!isOpen);

  if (!isAuthenticated) {
    return <Button className="p-2 border rounded-md">Login</Button>;
  }

  return (
    <div className="relative flex justify-center items-center">
      <Button
        onClick={toggleDropdown}
        className="rounded-full border cursor-pointer"
      >
        <Image
          src={rame}
          alt="user avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
      </Button>

      {isOpen && (
        <div className="absolute flex flex-col right-0 top-16 w-48 gap-2 p-2 rounded-md bg-gray-200 z-50">
          <Link href="/profile" className="h-10 flex items-center px-4 rounded-md bg-gray-300 hover:bg-gray-400">profile 👨</Link>
          <Link href="/cart" className="h-10 flex items-center px-4 rounded-md bg-gray-300 hover:bg-gray-400">cart 🛒</Link>
          <Link href="/wishlist" className="h-10 flex items-center px-4 rounded-md bg-gray-300 hover:bg-gray-400">wishlist ❤️</Link>
          <Link href="/sign-in" className="h-10 flex items-center px-4 rounded-md bg-gray-300 hover:bg-gray-400">logout 🚪</Link>
        </div>
      )}
    </div>
  );
}
