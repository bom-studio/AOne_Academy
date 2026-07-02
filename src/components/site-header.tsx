"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { navigationItems, siteInfo } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="section-container flex h-18 items-center justify-between gap-4 py-3 lg:h-20">
        <Link href="/" className="flex flex-col">
          <span className="text-lg font-bold text-slate-900">{siteInfo.name}</span>
          <span className="text-xs text-slate-500">중·고등 전문 수학학원</span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition hover:text-sky-600",
                pathname === item.href ? "text-sky-600" : "text-slate-600",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild>
            <Link href="/reservation">상담예약</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 lg:hidden"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-slate-200 bg-white transition-all lg:hidden",
          open ? "max-h-[480px]" : "max-h-0 border-t-0",
        )}
      >
        <div className="section-container flex flex-col gap-1 py-4">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-sky-50",
                pathname === item.href ? "bg-sky-50 text-sky-700" : "text-slate-700",
              )}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="mt-2">
            <Link href="/reservation" onClick={() => setOpen(false)}>
              상담예약
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
