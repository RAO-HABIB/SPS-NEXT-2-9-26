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
  DrawerClose,
} from "@/components/ui/drawer";
import { X, MapPin, Mail, Phone } from "lucide-react";
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const DesktopNav = dynamic(() => import("./DesktopNav"), {
  ssr: false,
  loading: () => <div className="hidden xl:flex items-center flex-1 justify-center h-10" />,
});

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
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
    setContactOpen(false);
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
              fetchPriority="high"
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
            
            <Link
              href="/admin/login"
              className="rounded-lg border-2 border-cyan-500/50 bg-cyan-500/10 px-4 py-1.5 text-sm font-bold text-cyan-300 transition-all hover:bg-cyan-500/20 outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
            >
              Admin
            </Link>

            <Drawer open={contactOpen} onOpenChange={setContactOpen} swipeDirection="right">
              <DrawerTrigger
                aria-label="More information"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40 text-white/90 outline-none hover:border-cyan-300 hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-500 bg-transparent cursor-pointer"
              >
                <span aria-hidden="true">i</span>
              </DrawerTrigger>

              <DrawerContent className="bg-[#f8f9fa] shadow-2xl border-l border-white/10 text-gray-800 flex flex-col w-[350px] sm:w-[450px] right-0 top-0 bottom-0 mt-0 rounded-none overflow-hidden h-full z-[100] fixed">
                <DrawerTitle className="sr-only">Contact Us</DrawerTitle>
                <div className="bg-[#2a52be] text-white p-6 relative">
                  <DrawerClose className="absolute top-4 right-4 p-1.5 text-white/70 hover:text-white border border-white/20 hover:bg-white/10 rounded-md transition-colors cursor-pointer z-10">
                    <X className="w-4 h-4" />
                  </DrawerClose>
                  <p className="text-[10px] uppercase tracking-widest text-white/70 font-semibold mb-1">Software Productivity Strategists</p>
                  <h2 className="text-xl font-bold">Get in Touch</h2>
                </div>
                
                <div className="p-6 overflow-y-auto flex-1 flex flex-col gap-6">
                  {/* Intro card */}
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                    <Image
                      src="/images/logo/logo.webp"
                      alt="SPS Logo"
                      width={120}
                      height={40}
                      className="h-10 w-auto object-contain mb-4"
                    />
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Whether you are an entrepreneur looking for an engineering team or an enterprise pursuing digital transformation, we can help you bring your vision to reality.
                    </p>
                  </div>

                  {/* Contact section */}
                  <div>
                    <h3 className="text-xs font-bold tracking-wider text-gray-900 mb-4 uppercase">Contact</h3>
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <div className="mt-1 shrink-0 h-8 w-8 rounded bg-gray-100 flex items-center justify-center text-gray-500">
                          <MapPin className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-gray-400 tracking-wider mb-0.5">ADDRESS</p>
                          <p className="text-sm text-gray-600">2400 Research Blvd, Suite 115, Rockville, MD 20850 USA.</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="mt-1 shrink-0 h-8 w-8 rounded bg-gray-100 flex items-center justify-center text-gray-500">
                          <Mail className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-gray-400 tracking-wider mb-0.5">EMAIL</p>
                          <p className="text-sm text-gray-600">support@spsnet.com</p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="mt-1 shrink-0 h-8 w-8 rounded bg-gray-100 flex items-center justify-center text-gray-500">
                          <Phone className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-gray-400 tracking-wider mb-0.5">PHONE</p>
                          <p className="text-sm text-gray-600">+1-301-337-2290</p>
                        </div>
                      </div>
                    </div>
                    
                    <Link href="/Contact-Us" onClick={() => setContactOpen(false)} className="mt-6 block w-full bg-[#2a52be] hover:bg-blue-700 text-white text-center py-2.5 rounded-lg text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                      Request Consultation
                    </Link>
                  </div>

                  {/* Hours section */}
                  <div>
                    <h3 className="text-xs font-bold tracking-wider text-gray-900 mb-3 uppercase">Hours</h3>
                    <p className="text-sm text-gray-600">Mon - Sat: 7:00 - 17:00</p>
                  </div>

                  {/* Follow us section */}
                  <div>
                    <h3 className="text-xs font-bold tracking-wider text-gray-900 mb-3 uppercase">Follow Us</h3>
                    <div className="flex gap-2">
                      <a href="https://www.linkedin.com/company/spsnet/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="h-9 w-9 rounded border border-gray-200 flex items-center justify-center text-blue-600 hover:bg-gray-50 transition-colors"><FaLinkedin className="w-4 h-4" /></a>
                      <a href="#" aria-label="Instagram" className="h-9 w-9 rounded border border-gray-200 flex items-center justify-center text-blue-600 hover:bg-gray-50 transition-colors"><FaInstagram className="w-4 h-4" /></a>
                      <a href="https://www.facebook.com/spsnet" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="h-9 w-9 rounded border border-gray-200 flex items-center justify-center text-blue-600 hover:bg-gray-50 transition-colors"><FaFacebook className="w-4 h-4" /></a>
                      <a href="https://twitter.com/SPSnet" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="h-9 w-9 rounded border border-gray-200 flex items-center justify-center text-blue-600 hover:bg-gray-50 transition-colors"><FaTwitter className="w-4 h-4" /></a>
                    </div>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
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
                
                <Link
                  href="/admin/login"
                  onClick={closeAll}
                  className="mt-3 block w-full rounded-lg border-2 border-cyan-500/50 bg-cyan-500/10 px-4 py-3 text-center font-semibold text-cyan-300 outline-none hover:bg-cyan-500/20 focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  Admin Panel
                </Link>
              </div>
            </DrawerContent>
          </Drawer>
        </nav>
      </header>
    </>
  );
}