"use client";

import dynamic from "next/dynamic";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV, type NavItem } from "@/data/navigation";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const DesktopNav = dynamic(() => import("./DesktopNav"), {
  ssr: false,
  loading: () => <div className="hidden xl:flex items-center flex-1 justify-center h-10" />,
});

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileItem, setOpenMobileItem] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hasChildren = (item: NavItem) =>
    (item.groups && item.groups.length > 0) || (item.items && item.items.length > 0);

  const closeAll = useCallback(() => {
    setMobileOpen(false);
    setOpenMobileItem(null);
  }, []);

  const isActive = (href: string) => pathname === href || pathname?.startsWith(href + "/");

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(min-width: 1280px)").matches) {
      setIsDesktop(true);
    }
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-[#03122F]/80 backdrop-blur-lg shadow-lg border-b border-white/10"
          : "bg-transparent border-b border-white/20"
          }`}
      >
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-3 lg:px-10"
        >
          {/* Logo */}
          <Link href="/" onClick={closeAll} className="flex shrink-0 items-center gap-3">
            <Image
              src="/images/logo/logo-nav.webp"
              width={90}
              height={90}
              quality={75}
              alt="SPS - go to homepage"
              className="h-18 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav - dynamically imported only on desktop screens */}
          {isDesktop ? (
            <DesktopNav isActive={isActive} closeAll={closeAll} />
          ) : (
            <div className="hidden xl:flex items-center flex-1 justify-center h-10" />
          )}

          {/* CTA */}
          <div className="hidden shrink-0 items-center gap-3 xl:flex">
            <Link
              href="/Activities/Internship"
              className="rounded-lg border-2 border-white/70 px-4 py-1.5 text-sm font-bold text-white transition-all hover:bg-white/10 outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
            >
              Internships
            </Link>
            <button
              type="button"
              aria-label="More information"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40 text-white/90 outline-none hover:border-cyan-300 hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-500"
            >
              <span aria-hidden="true">i</span>
            </button>
          </div>

          {/* Mobile toggle with Shadcn Drawer */}
          <Drawer open={mobileOpen} onOpenChange={setMobileOpen} swipeDirection="right">
            <DrawerTrigger
              aria-label="Open menu"
              className="rounded p-2 text-white outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 xl:hidden"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </DrawerTrigger>

            <DrawerContent className="bg-[#03122F]/80 backdrop-blur-xl shadow-2xl border-white/10 text-white flex flex-col">
              <DrawerTitle className="sr-only">Mobile Menu</DrawerTitle>
              <div className="overflow-y-auto px-4 py-6 flex flex-col flex-1">
                <ul className="space-y-1 flex-1">
                  {NAV.map((item) => {
                    const open = openMobileItem === item.label;
                    if (!hasChildren(item)) {
                      return (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            onClick={closeAll}
                            aria-current={isActive(item.href) ? "page" : undefined}
                            className="block rounded px-3 py-2 font-medium text-white outline-none hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-cyan-400"
                          >
                            {item.label}
                          </Link>
                        </li>
                      );
                    }
                    return (
                      <li key={item.label} className="border-b border-white/10 last:border-0">
                        <button
                          type="button"
                          aria-expanded={open}
                          aria-controls={`mobile-submenu-${item.label}`}
                          onClick={() => setOpenMobileItem(open ? null : item.label)}
                          className="flex w-full items-center justify-between rounded px-3 py-2 text-left font-medium text-white outline-none hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-cyan-400"
                        >
                          {item.label}
                          <span aria-hidden="true" className="text-cyan-300">
                            {open ? "−" : "+"}
                          </span>
                        </button>

                        {open && (
                          <div id={`mobile-submenu-${item.label}`} className="pb-2 pl-4">
                            {item.groups && item.groups.length > 0
                              ? item.groups.map((group) => {
                                const groupHasItems = group.items && group.items.length > 0;
                                const renderAsLink = group.href && !groupHasItems;

                                return (
                                  <div key={group.label} className="mt-2">
                                    {renderAsLink ? (
                                      <Link
                                        href={group.href!}
                                        onClick={closeAll}
                                        className="block px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-300 hover:text-cyan-100"
                                      >
                                        {group.label}
                                      </Link>
                                    ) : (
                                      <p className="px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-300">
                                        {group.label}
                                      </p>
                                    )}
                                    <ul>
                                      {(group.items ?? []).map((sub) => (
                                        <li key={sub.label}>
                                          <Link
                                            href={sub.href}
                                            onClick={closeAll}
                                            aria-current={isActive(sub.href) ? "page" : undefined}
                                            className="block rounded px-3 py-1.5 text-sm text-white/90 outline-none hover:bg-white/10 hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400"
                                          >
                                            {sub.label}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                );
                              })
                              : (item.items ?? []).map((sub) => (
                                <Link
                                  key={sub.label}
                                  href={sub.href}
                                  onClick={closeAll}
                                  aria-current={isActive(sub.href) ? "page" : undefined}
                                  className="block rounded px-3 py-1.5 text-sm text-white/90 outline-none hover:bg-white/10 hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400"
                                >
                                  {sub.label}
                                </Link>
                              ))}
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>

                <Link
                  href="/"
                  onClick={closeAll}
                  className="mt-6 block w-full rounded-lg bg-blue-600 px-4 py-3 text-center font-semibold text-white outline-none hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  Internship
                </Link>
              </div>
            </DrawerContent>
          </Drawer>
        </nav>
      </header>
    </>
  );
}