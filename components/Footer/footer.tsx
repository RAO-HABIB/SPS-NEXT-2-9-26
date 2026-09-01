import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify-icon/react";
import {
  FOOTER_CONTACT,
  FOOTER_ABOUT,
  FOOTER_SOCIALS,
  FOOTER_COLUMNS,
} from "../../lib/footer";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden text-white bg-cyan-900">
      <div className="absolute inset-0 z-0 bg-linear-to-br from-cyan-900 via-blue-900 to-[#020b1e]" />

      <div className="relative z-10 w-full border-t border-white/30 bg-white/5 bg-linear-to-b from-white/10 to-transparent backdrop-blur-3xl backdrop-saturate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
            <div className="sm:col-span-2">
              <Link href="/" className="inline-flex items-center gap-2 sm:gap-3">
                <Image
                  src="/logo/logo.jpg"
                  alt="SPS"
                  width={60}
                  height={60}
                  quality={75}
                  className="rounded-xl shadow-lg ring-1 ring-white/20 h-12 w-12 sm:h-[60px] sm:w-[60px]"
                />
                <span className="text-lg sm:text-xl font-extrabold tracking-wide text-white">SPS</span>
              </Link>

              <p className="mt-4 sm:mt-5 max-w-sm text-xs sm:text-sm leading-relaxed text-white/90">
                {FOOTER_ABOUT}
              </p>

              <div className="mt-5 sm:mt-6 flex flex-wrap gap-2 sm:gap-3">
                {FOOTER_SOCIALS.map((s, i) => (
                  <Link
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${s.icon.split(':')[1]}`}
                    className="group grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-xl bg-white/10 border border-white/20 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-blue-600 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                  >
                    <Icon icon={s.icon} width={18} className="transition-transform duration-300 group-hover:scale-110 w-4 sm:w-[18px]" />
                  </Link>
                ))}
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
              const content = (
                <div className="group flex items-center gap-3 sm:gap-4">
                  <div className="grid h-10 w-10 sm:h-12 sm:w-12 shrink-0 place-items-center rounded-2xl bg-white/10 border border-white/20 transition-colors duration-300 group-hover:bg-white group-hover:border-white">
                    <Icon icon={item.icon} width={20} className="text-white group-hover:text-blue-600 transition-colors duration-300 w-[18px] sm:w-[20px]" />
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