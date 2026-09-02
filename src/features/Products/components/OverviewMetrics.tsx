export default function OverviewMetrics() {
  const metrics = [
    { value: "5K", label: "Years of strong strategic partnership" },
    { value: "76", label: "Projects delivered" },
    { value: "18", label: "Microsoft certifications" },
    { value: "24", label: "Other certifications" }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#ffffff]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center">
          {metrics.map((metric, idx) => (
            <div key={idx} className="relative text-center group">
              <span className="text-6xl sm:text-7xl lg:text-9xl xl:text-[120px] 2xl:text-[150px] font-bold text-cyan-500 leading-none opacity-20 group-hover:opacity-60 transition-opacity duration-300">
                {metric.value}
              </span>
              <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] sm:w-full bg-[#ffffff] px-2 py-1 text-xs sm:text-sm lg:text-base font-bold uppercase tracking-wider text-[#031B3D] leading-tight">
                {metric.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
