"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV, type NavItem } from "../../lib/navigation";
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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

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
          : "bg-transparent"
          }`}
      >
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-3 lg:px-10"
        >
          {/* Logo */}
          <Link href="/" onClick={closeAll} className="flex shrink-0 items-center gap-3">
            <Image
              src="/logo/logo.png"
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
                          className="px-3 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors hover:bg-transparent"
                          data-active={isActive(item.href) ? "true" : "false"}
                        >
                          {item.label}
                        </MotionNavigationMenuLink>
                      </MotionNavigationMenuItem>
                    );
                  }

                  return (
                    <MotionNavigationMenuItem key={item.label} value={item.label}>
                      <MotionNavigationMenuTrigger className="px-3 py-2 text-sm font-medium text-white/90 hover:text-white data-[state=open]:text-white bg-transparent hover:bg-transparent transition-colors">
                        {item.label}
                      </MotionNavigationMenuTrigger>
                      <MotionNavigationMenuContent>
                        {isMega(item) ? (
                          <div className="w-[850px] p-6">
                            <div className="grid grid-cols-12 gap-8">
                              {/* LEFT — image + description + CTA (only if promo exists) */}
                              {item.promo && (
                                <div className="col-span-4">
                                  <div className="relative h-48 w-full overflow-hidden rounded-xl">
                                    <Image
                                      src={item.promo.image}
                                      alt={item.promo.description || item.label}
                                      fill
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
                                {chunkGroupsIntoRows(item.groups ?? [], 3).map((row, rowIdx) => (
                                  <div
                                    key={rowIdx}
                                    className={
                                      rowIdx === 0
                                        ? "grid grid-cols-3 gap-x-6 gap-y-6"
                                        : "mt-6 grid grid-cols-3 gap-x-6 gap-y-6 border-t border-white/10 pt-6"
                                    }
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
                                <MotionNavigationMenuLink
                                  href={sub.href}
                                  onClick={closeAll}
                                  className="block rounded px-3 py-2 text-sm text-white/90 outline-none hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-cyan-500"
                                >
                                  {sub.label}
                                </MotionNavigationMenuLink>
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
              href="/"
              className="rounded-sm bg-blue-600 px-5 py-2 text-sm font-semibold text-white outline-none hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-500"
            >
              Internship
            </Link>
            <button
              type="button"
              aria-label="More information"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40 text-white/90 outline-none hover:border-cyan-300 hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-500"
            >
              <span aria-hidden="true">i</span>
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((v) => !v)}
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
                d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </nav>

        {/* ===== MOBILE DRAWER ===== */}
        {mobileOpen && (
          <div
            id="mobile-menu"
            className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-white/10 bg-[#03122F] px-4 py-4 xl:hidden"
          >
            <ul className="space-y-1">
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
              className="mt-4 block rounded-lg bg-blue-600 px-4 py-2 text-center font-semibold text-white outline-none hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              Internship
            </Link>
          </div>
        )}
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