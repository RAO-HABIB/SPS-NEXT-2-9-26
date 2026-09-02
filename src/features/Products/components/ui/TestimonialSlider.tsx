"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Icon } from "@iconify-icon/react";
import { Testimonial } from "@/data/products-data";

export default function TestimonialSlider({ items }: { items: Testimonial[] }) {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:mx-0 group">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          prevEl: ".testimonial-prev",
          nextEl: ".testimonial-next",
        }}
        pagination={{ clickable: true, el: ".testimonial-pagination" }}
        className="pb-12"
      >
        {items.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl relative mt-10">
              {/* Quote Icon */}
              <div className="absolute -top-6 left-8 sm:left-10 bg-[#00a7e1] text-white p-3 rounded-full shadow-lg">
                <Icon icon="lucide:quote" width={24} />
              </div>

              <p className="text-slate-700 text-lg sm:text-xl font-medium leading-relaxed mb-8 mt-2">
                "{item.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-slate-100 border-2 border-slate-200 shrink-0">
                  <Image src={item.avatar} alt={item.author} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-[#031B3D] font-bold text-lg">{item.author}</h4>
                  <p className="text-slate-500 text-sm font-medium">{item.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom Navigation */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-12 z-10 cursor-pointer testimonial-prev flex items-center justify-center w-10 h-10 rounded-full bg-white text-[#031B3D] shadow-md hover:bg-slate-50 transition-colors hidden sm:flex">
        <Icon icon="lucide:chevron-left" width={24} />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-12 z-10 cursor-pointer testimonial-next flex items-center justify-center w-10 h-10 rounded-full bg-white text-[#031B3D] shadow-md hover:bg-slate-50 transition-colors hidden sm:flex">
        <Icon icon="lucide:chevron-right" width={24} />
      </div>

      <div className="testimonial-pagination absolute bottom-0 left-0 w-full flex justify-center gap-2 z-10" />
    </div>
  );
}
