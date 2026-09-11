import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

interface Props {
  title: string;
  breadcrumb: { label: string; href?: string }[];
}

export default function WebinarHero({ title, breadcrumb }: Props) {
  return (
    <section
      aria-labelledby="webinar-hero-title"
      className="relative overflow-hidden bg-slate-950 px-4 py-16 sm:px-6 md:py-20 lg:px-8"
    >
      <Image
        src="/images/Hero/Hero8.webp"
        alt="Hero Background"
        fill
        priority
        className="object-cover opacity-50 mix-blend-luminosity"
      />

      <div className="relative mx-auto max-w-7xl z-10">
        <div className="border-l-4 border-[#1BA6C7] pl-4 sm:pl-6">
          <h1
            id="webinar-hero-title"
            className="mb-3 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl tracking-tight"
          >
            {title}
          </h1>

          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-slate-300 sm:text-sm">
              {breadcrumb.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="uppercase tracking-wider hover:text-[#1BA6C7] transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span
                      aria-current="page"
                      className="uppercase tracking-wider text-cyan-400 font-semibold"
                    >
                      {item.label}
                    </span>
                  )}
                  {idx < breadcrumb.length - 1 && (
                    <ChevronRight
                      aria-hidden="true"
                      className="h-3.5 w-3.5 text-slate-500"
                    />
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
}