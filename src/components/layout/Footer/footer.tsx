import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Clock } from "lucide-react";
import { FaLinkedinIn, FaXTwitter, FaFacebookF, FaYoutube } from "react-icons/fa6";

const iconMap: Record<string, React.ElementType> = {
  "lucide:phone": Phone,
  "lucide:mail": Mail,
  "lucide:clock": Clock,
  "lucide:linkedin": FaLinkedinIn,
  "lucide:twitter": FaXTwitter,
  "lucide:facebook": FaFacebookF,
  "lucide:youtube": FaYoutube,
};
import {
  FOOTER_CONTACT,
  FOOTER_ABOUT,
  FOOTER_SOCIALS,
  FOOTER_COLUMNS,
} from "@/data/footer";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden text-white">
      {/* 1. Base dark background & Glowing Orbs (Behind the glass) */}
      <div className="absolute inset-0 z-0 bg-[#020816]" />
      <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-blue-600/30 blur-[100px]" />
      <div className="absolute right-10 bottom-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-[120px]" />

      {/* 2. The Glass Layer itself */}
      <div className="absolute inset-0 z-0 bg-[#03122F]/40 backdrop-blur-3xl saturate-150" />

      {/* 3. Glossy Glass reflections and inner borders */}
      <div className="absolute inset-0 z-0 shadow-[inset_0_0_30px_rgba(255,255,255,0.03)]" />

      {/* Diagonal gloss reflection on the surface */}
      <div className="absolute inset-0 z-0 bg-linear-to-tr from-white/5 via-transparent to-white/5 pointer-events-none" />

      {/* Top outer glowing edge */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent pointer-events-none" />

      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
            <div className="sm:col-span-2">
              <Link href="/" className="inline-flex items-center gap-2 sm:gap-3">
                <Image
                  src="/images/logo/logo.webp"
                  alt="SPS"
                  width={60}
                  height={60}
                  quality={75}
                  className="rounded-xl shadow-lg ring-1 ring-white/20 h-12 w-12 sm:h-[60px] sm:w-[60px] bg-white"
                />
              </Link>

              <p className="mt-4 sm:mt-5 max-w-sm text-xs sm:text-sm leading-relaxed text-white/90">
                {FOOTER_ABOUT}
              </p>

              <div className="mt-5 sm:mt-6 flex flex-wrap gap-2 sm:gap-3">
                {FOOTER_SOCIALS.map((s, i) => {
                  const SocialIcon = iconMap[s.icon];
                  return (
                    <Link
                      key={i}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow us on ${s.icon.split(':')[1]}`}
                      className="group grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-xl bg-white/10 border border-white/20 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-blue-600 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                    >
                      {SocialIcon && <SocialIcon className="transition-transform duration-300 group-hover:scale-110 w-4 h-4 sm:w-[18px] sm:h-[18px]" />}
                    </Link>
                  );
                })}
              </div>
            </div>

            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                  {col.title}
                </h4>
                <ul className="mt-4 sm:mt-5 space-y-2 sm:space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-xs sm:text-sm text-white/90 transition-colors hover:text-white font-medium"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 sm:mt-14 grid grid-cols-1 gap-4 sm:gap-6 border-t border-white/20 pt-8 sm:pt-10 md:grid-cols-2 lg:grid-cols-3">
            {FOOTER_CONTACT.map((item) => {
              const ContactIcon = iconMap[item.icon];
              const content = (
                <div className="group flex items-center gap-3 sm:gap-4">
                  <div className="grid h-10 w-10 sm:h-12 sm:w-12 shrink-0 place-items-center rounded-2xl bg-white/10 border border-white/20 transition-colors duration-300 group-hover:bg-white group-hover:border-white">
                    {ContactIcon && <ContactIcon className="text-white group-hover:text-blue-600 transition-colors duration-300 w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]" />}
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-white/90">{item.label}</p>
                    <p className="mt-0.5 text-xs sm:text-sm font-bold text-white">{item.value}</p>
                  </div>
                </div>
              );
              return item.href ? (
                <Link key={item.label} href={item.href} className="transition-transform hover:-translate-y-1 block">
                  {content}
                </Link>
              ) : (
                <div key={item.label} className="transition-transform hover:-translate-y-1 cursor-default block">
                  {content}
                </div>
              );
            })}
          </div>
        </div>

        <div className="border-t border-white/20 bg-black/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-6 text-xs sm:text-sm text-white/90 md:flex-row lg:px-8 text-center md:text-left">
            <p className="font-medium">© {new Date().getFullYear()} Software Productivity Strategists, Inc.</p>
            <div className="flex gap-6 sm:gap-8">
              <Link href="/" className="font-medium transition-colors hover:text-white">
                Privacy
              </Link>
              <Link href="/" className="font-medium transition-colors hover:text-white">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}