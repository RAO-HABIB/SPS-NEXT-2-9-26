import Link from "next/link";

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative flex min-h-[500px] items-center overflow-hidden bg-[#081B52] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/Hero/Hero8.webp')",
        }}
      >
        {/* Dark Overlay - Opacity thodi badha di taaki text clear dikhe */}
        <div className="absolute inset-0 bg-[#081B52]/40" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl">
              Careers
            </h1>

            <p className="mt-6 text-lg leading-8 text-white/90 md:text-xl">
              Join an amazing team that is passionate about changing the way
              people connect and build innovative software solutions.
            </p>

            <Link
              href="/Activities/Internship"
              className="mt-10 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#3559d8] to-[#2679ff] px-8 py-3 text-base font-semibold text-white transition-all hover:opacity-90 hover:scale-[1.02]"
            >
              INTERNSHIP
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="bg-[#202B4A]">
        <div className="mx-auto max-w-7xl">
          <nav className="flex overflow-x-auto">
            <Link
              href="#open-positions"
              className="border-b-4 border-blue-500 px-6 py-5 text-lg font-semibold text-white md:px-8 md:py-6"
            >
              Career Opportunities
            </Link>

            <Link
              href="#values"
              className="px-6 py-5 text-lg font-semibold text-white/70 transition hover:text-white md:px-8 md:py-6"
            >
              Our Values
            </Link>

            <Link
              href="#benefits"
              className="px-6 py-5 text-lg font-semibold text-white/70 transition hover:text-white md:px-8 md:py-6"
            >
              Benefits
            </Link>
          </nav>
        </div>
      </section>
    </>
  );
}