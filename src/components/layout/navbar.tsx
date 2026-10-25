"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b">
      <div className="container mx-auto flex h-20 items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold text-primary"
        >
          InnerSpace
        </Link>

        <nav className="hidden md:flex gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-medium hover:text-primary transition"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <Button
          className="hidden md:flex bg-primary hover:bg-primary/90"
        >
          Become A Participant
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              className="md:hidden"
            >
              <Menu />
            </Button>
          </SheetTrigger>

          <SheetContent>
            <div className="mt-10 flex flex-col gap-5">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}