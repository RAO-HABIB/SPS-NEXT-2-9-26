"use client";

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
import {
  MotionNavigationMenu,
  MotionNavigationMenuList,
  MotionNavigationMenuItem,
  MotionNavigationMenuTrigger,
  MotionNavigationMenuContent,
  MotionNavigationMenuLink,
} from "@/components/unlumen-ui/motion-navigation-menu";

function chunkGroupsIntoRows<T>(groups: T[], columnsPerRow: number): T[][] {
  const rows: T[][] = [];
  for (let i = 0; i < groups.length; i += columnsPerRow) {
    rows.push(groups.slice(i, i + columnsPerRow));
  }
  return rows;
}

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

  const isMega = (item: NavItem) =>
    !!item.groups && item.groups.length > 0 && !!item.promo;

  const closeAll = useCallback(() => {
    setMobileOpen(false);
    setOpenMobileItem(null);
  }, []);

  const isActive = (href: string) => pathname === href || pathname?.startsWith(href + "/");

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
              src="/images/logo/logo.png"
              width={90}
              height={90}
              quality={75}
              alt="SPS - go to homepage"
              className="h-18 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav - Motion Navigation Menu */}
          <div className="hidden xl:flex items-center flex-1 justify-center">
            <MotionNavigationMenu viewportClassName="border-white/10 bg-[#0a0514]/95 shadow-xl text-white rounded-xl !overflow-visible !mt-8">
              <MotionNavigationMenuList highlightClassName="bg-white/10 rounded-md">
                {NAV.map((item) => {
                  if (!hasChildren(item)) {
                    return (
                      <MotionNavigationMenuItem key={item.label} value={item.label}>
                        <MotionNavigationMenuLink
                          href={item.href}
                          className="px-3 py-2 text-sm font-medium text-white/90 hover:text-cyan-400 transition-colors hover:bg-transparent"
                          data-active={isActive(item.href) ? "true" : "false"}
                        >
                          {item.label}
                        </MotionNavigationMenuLink>
                      </MotionNavigationMenuItem>
                    );
                  }

                  return (
                    <MotionNavigationMenuItem key={item.label} value={item.label}>
                      <MotionNavigationMenuTrigger className="px-3 py-2 text-sm font-medium text-white/90 hover:text-cyan-400 data-[state=open]:text-cyan-400 bg-transparent hover:bg-transparent transition-colors">
                        {item.label}
                      </MotionNavigationMenuTrigger>
                      <MotionNavigationMenuContent>
                        {isMega(item) ? (
                          (() => {
                            const groupsCount = item.groups?.length || 0;
                            const columns = groupsCount > 6 ? 4 : 3;
                            const containerWidth = columns === 4 ? "w-[1000px]" : "w-[850px]";
                            const gridColsClass = columns === 4 ? "grid-cols-4" : "grid-cols-3";

                            return (
                              <div className={`${containerWidth} p-6`}>
                                <div className="grid grid-cols-12 gap-8">
                                  {/* LEFT — image + description + CTA (only if promo exists) */}
                                  {item.promo && (
                                    <div className="col-span-4 flex flex-col">
                                      <div className="relative flex-1 min-h-[192px] w-full overflow-hidden rounded-xl">
                                        <Image
                                          src={item.promo.image}
                                          alt={item.promo.description || item.label}
                                          fill
                                          priority
                                          className="object-cover"
                                          sizes="200px"
                                        />
                                      </div>
                                      <p className="mt-4 text-sm leading-relaxed text-gray-300">
                                        {item.promo.description}
                                      </p>
                                      <Link
                                        href={item.promo.ctaHref}
                                        onClick={closeAll}
                                        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 outline-none hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-500"
                                      >
                                        {item.promo.ctaLabel}
                                      </Link>
                                    </div>
                                  )}

                                  {/* RIGHT — link columns */}
                                  <div className={item.promo ? "col-span-8" : "col-span-12"}>
                                    {chunkGroupsIntoRows(item.groups ?? [], columns).map((row, rowIdx) => (
                                      <div
                                        key={rowIdx}
                                        className={`grid gap-x-6 gap-y-6 ${gridColsClass} ${rowIdx === 0 ? "" : "mt-6 border-t border-white/10 pt-6"
                                          }`}
                                      >
                                        {row.map((group) => (
                                          <div key={group.label}>
                                            {group.href ? (
                                              <Link
                                                href={group.href}
                                                onClick={closeAll}
                                                className="mb-4 block text-base font-bold text-white outline-none hover:text-cyan-400 focus-visible:ring-2 focus-visible:ring-cyan-500"
                                              >
                                                {group.label}
                                              </Link>
                                            ) : (
                                              <p className="mb-4 text-base font-bold text-white">
                                                {group.label}
                                              </p>
                                            )}
                                            <ul className="space-y-2.5">
                                              {(group.items ?? []).map((sub) => (
                                                <li key={sub.label}>
                                                  <Link
                                                    href={sub.href}
                                                    onClick={closeAll}
                                                    aria-current={isActive(sub.href) ? "page" : undefined}
                                                    className="block text-sm text-gray-300 outline-none hover:text-cyan-400 focus-visible:ring-2 focus-visible:ring-cyan-500"
                                                  >
                                                    {sub.label}
                                                  </Link>
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                        ))}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            );
                          })()
                        ) : (
                          <ul className="w-64 p-2 space-y-0.5">
                            {/* Groups-based */}
                            {item.groups?.map((group) => (
                              <NestedMenuItem
                                key={group.label}
                                group={group}
                                isActive={isActive}
                                closeAll={closeAll}
                              />
                            ))}

                            {/* Simple items-based */}
                            {item.items?.map((sub) => (
                              <li key={sub.label} role="none">
                                <Link
                                  href={sub.href}
                                  onClick={closeAll}
                                  className="block rounded px-3 py-2 text-sm text-white/90 outline-none hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-cyan-500"
                                >
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </MotionNavigationMenuContent>
                    </MotionNavigationMenuItem>
                  );
                })}
              </MotionNavigationMenuList>
            </MotionNavigationMenu>
          </div>

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

function NestedMenuItem({
  group,
  isActive,
  closeAll,
}: {
  group: { label: string; href?: string; items: { label: string; href: string }[] };
  isActive: (href: string) => boolean;
  closeAll: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const hasSubItems = group.items && group.items.length > 0;
  const shouldRenderAsLink = group.href && !hasSubItems;

  return (
    <li
      role="none"
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {shouldRenderAsLink ? (
        <Link
          href={group.href!}
          onClick={closeAll}
          role="menuitem"
          aria-haspopup={hasSubItems ? "menu" : undefined}
          aria-expanded={hasSubItems ? isHovered : undefined}
          aria-current={isActive(group.href!) ? "page" : undefined}
          className="flex items-center justify-between rounded px-3 py-2 text-sm font-sm text-white/90 outline-none hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-cyan-500"
        >
          <span>{group.label}</span>
          {hasSubItems && (
            <svg
              aria-hidden="true"
              className="ml-2 h-4 w-4 text-cyan-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          )}
        </Link>
      ) : (
        <div className="flex items-center justify-between rounded px-3 py-2 text-sm font-sm text-white/90 cursor-default hover:bg-white/10 hover:text-white">
          <span>{group.label}</span>
          {hasSubItems && (
            <svg
              aria-hidden="true"
              className="ml-2 h-4 w-4 text-cyan-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          )}
        </div>
      )}

      {hasSubItems && isHovered && (
        <div
          role="menu"
          aria-label={`${group.label} submenu`}
          className="animate-fade-in absolute left-full top-0 ml-1 min-w-56 rounded-xl border border-white/10 bg-[#0a0514]/95 backdrop-blur-md p-2 shadow-xl z-50"
        >
          <ul className="space-y-0.5">
            {group.items.map((sub) => (
              <li key={sub.label} role="none">
                <Link
                  href={sub.href}
                  onClick={closeAll}
                  role="menuitem"
                  aria-current={isActive(sub.href) ? "page" : undefined}
                  className="block rounded px-3 py-2 text-sm text-white/90 outline-none hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-cyan-500"
                >
                  {sub.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}