"use client";
import { useState } from "react";
import Button from "../../atoms/Button/Button";
import rame from "../../../favicon.ico";
import Image from "next/image";

export default function UserActions() {
  const [isOpen, setIsOpen] = useState(false);
  const isAuthenticated = true;

  const toggleDropdown = () => setIsOpen(!isOpen);

  if (!isAuthenticated) {
    return <Button className="p-2 border rounded-md">Login</Button>;
  }

  return (
    <div className="relative">
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
        <div className="absolute right-0 top-16 w-48 border">
          <p className="px-4 py-2 text-sm text-gray-500 border-b">
            Hello, Giorgi
          </p>
          <ul>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Profile
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              My Listings
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Messages
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Favorites
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Settings
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500 border-t">
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
