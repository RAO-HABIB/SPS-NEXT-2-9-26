<?php
$page_title = "Sps Website";
$preload_lcp_hero = true;
$page_has_carousels = false; 
include("includes/header.php");
?>
<style>#dzPreloader{display:none!important}
/* Step 16 hero and service card fixes */
.video-bg video.hero-video {
    transition: opacity .35s ease;
}

.video-bg img.hero-fallback {
    transition: opacity .35s ease;
}


@media (max-width:767px){
    .video-bg video.hero-video {
        display:none !important;
    }

    .video-bg img.hero-fallback {
        display:block !important;
        opacity:1 !important;
    }
}

.service-swiper .icon-bx-wraper {
    min-height:380px;
    overflow:visible;
}

@media(max-width:767px){
    .service-swiper .icon-bx-wraper {
        min-height:430px;
    }

    .service-swiper .btn-square {
        right:-80px !important;
        bottom:-30px !important;
    }
}

</style>
<script>document.addEventListener('DOMContentLoaded',function(){var p=document.getElementById('dzPreloader');if(p)p.remove();});</script>

<style>
/* =============================
   GLOBAL
============================= */
.no-scroll {
    overflow: hidden !important;
    height: 100vh !important;
    width: 100% !important;
    position: fixed !important; 
}

.page-content {
    overflow-x: clip;
}

/* =============================
   MODAL
============================= */
.hidden-modal { display: none !important; }
.hidden-modal.active { display: flex !important; }

#appointmentForm input::placeholder,
#appointmentForm textarea::placeholder { font-weight: 500; }

#appointmentModal {
    display: none !important;
    position: fixed !important; 
    inset: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    z-index: 999999 !important;
    background: rgba(15,23,42,.75);
    backdrop-filter: blur(4px);
    align-items:center;
    justify-content:center;
}

#appointmentModal.active { display:flex !important; }

.modal-card {
    background:#fff;
    width:95%;
    max-width:850px; 
    max-height:90vh; 
    border-radius:20px;
    display:flex;
    flex-direction:column;
    overflow-y:auto;
    position:relative;
    box-shadow:0 25px 50px -12px rgba(0,0,0,.5);
}

/* =============================
   HERO SECTION
============================= */
.heroSwiper {
    width:100vw;
    max-width:100vw;
    margin-left:calc(50% - 50vw);
    margin-right:calc(50% - 50vw);
    height:700px;
    overflow:hidden;
    position:relative;
}
.heroSwiper .swiper-wrapper,
.heroSwiper .swiper-slide { width:100%; height:100%; }
.heroSwiper .swiper-slide { background-color: var(--color-secondary); }
.heroSwiper .container { display:flex; align-items:center; height:100%; padding-left:80px; padding-right:80px; max-width:100%; box-sizing:border-box; }
.heroSwiper .hero-slide-content { width:100%; max-width:42rem; text-align:left; }
.heroSwiper .swiper-button-prev { left:16px !important; right:auto !important; }
.heroSwiper .swiper-button-next { right:16px !important; left:auto !important; }

@media (max-width:1023px) {
    .heroSwiper .container { padding-left:24px !important; padding-right:24px !important; }
    .heroSwiper .swiper-button-next,
    .heroSwiper .swiper-button-prev { display:none !important; }
}

/* =============================
   VIDEO & IMAGE BACKGROUND
============================= */
.video-bg {
    position:absolute;
    inset:0;
    width:100%;
    height:100%;
    overflow:hidden;
    z-index:1;
    background-color: var(--color-secondary);
    contain:paint;
}

.video-bg video.hero-video {
    display:none;
    position:absolute;
    inset:0;
    z-index:2;
    width:100%;
    height:100%;
    object-fit:cover;
    object-position:center;
    opacity:1;
}

.video-bg img.hero-fallback {
    display:block !important;
    position:absolute;
    inset:0;
    z-index:1;
    width:100%;
    height:100%;
    object-fit:cover;
    opacity:1;
}

@media (min-width:768px) {
    .video-bg video.hero-video { display:block !important; }
    .video-bg img.hero-fallback { display:none !important; }
}

/* =============================
   SWIPER NAV BUTTONS
============================= */
.swiper-button-next,
.swiper-button-prev {
    color:#fff !important;
    width:48px;
    height:48px;
    border-radius:50%;
    background: rgba(255,255,255,.15);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    box-shadow:0 4px 12px rgba(0,0,0,.25);
    transition: all 0.35s ease;
}
.swiper-button-next:after,
.swiper-button-prev:after { font-size:22px !important; font-weight:bold; }
.swiper-button-next:hover,
.swiper-button-prev:hover { background: rgba(255,255,255,.35); transform: scale(1.12); box-shadow:0 6px 18px rgba(0,0,0,.35); }
.swiper-button-next:active,
.swiper-button-prev:active { transform:scale(0.95); background: rgba(255,255,255,.5); }

/* =============================
   MOBILE HERO HEIGHT
============================= */
@media (max-width:1023px){
    .heroSwiper,
    .heroSwiper .swiper-wrapper,
    .heroSwiper .swiper-slide { height:660px; min-height:660px; }
}

/* =============================
   BUTTONS & ANIMATION
============================= */
.btnpadding { padding:calc(var(--spacing)*1.5) calc(var(--spacing)*6.25); }

@keyframes bounce-slow { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-6px);} }
.animate-bounce-slow { animation:bounce-slow 3s ease-in-out infinite; }

/* =============================
   CUSTOM COLORS & READ MORE
============================= */
.nav-bg { background:#d1caca !important; }
.logo-clr { color:#2554ad !important; }

.read-more-text {
    display:-webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
    overflow:hidden;
    transition:max-height .3s ease;
}
.read-more-text.expanded { -webkit-line-clamp:unset; }

/* =============================
   MOBILE FALLBACK
============================= */
.video-bg img.mobile-fallback {
    display:none;
    width:100%;
    height:100%;
    object-fit:cover;
}
@media (max-width:500px){
    .video-bg video { display:none !important; }
    .video-bg img.mobile-fallback { display:block !important; }
}

/* =============================
   ACCESSIBILITY
============================= */
.n_links,
.link-hover,
.read-more-btn { display:inline-flex; align-items:center; min-height:44px; }



/* =============================
   HOME PAGE RENDERING BUDGET
============================= */
.home-deferred {
    content-visibility: auto;
    contain-intrinsic-size: auto 760px;
}

@media (max-width: 767px) {
    /* .heroSwiper .swiper-wrapper {
        display: block !important;
        transform: none !important;
        transition: none !important;
    }

    .heroSwiper .swiper-slide {
        display: none !important;
        transform: none !important;
    }

    .heroSwiper .swiper-slide:first-child {
        display: block !important;
    }

    .heroSwiper .swiper-pagination,
    .heroSwiper .swiper-button-next,
    .heroSwiper .swiper-button-prev {
        display: none !important;
    } */

    .page-content .wow,
    .page-content .animate-bounce-slow {
        animation: none !important;
        transition: none !important;
        visibility: visible !important;
        opacity: 1 !important;
        transform: none !important;
    }

    .home-deferred {
        contain-intrinsic-size: auto 900px;
    }

 
    .service-swiper,
    .testimonial-swiper1,
    .awards-swiper,
    .client-swiper2 {
        overflow-x: auto !important;
        overflow-y: hidden !important;
        scroll-snap-type: x mandatory;
        overscroll-behavior-inline: contain;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
        touch-action: pan-x pan-y;
    }

    
    .service-swiper::-webkit-scrollbar,
    .testimonial-swiper1::-webkit-scrollbar,
    .awards-swiper::-webkit-scrollbar,
    .client-swiper2::-webkit-scrollbar {
        display: none;
    }

    .service-swiper > .swiper-wrapper,
    .testimonial-swiper1 > .swiper-wrapper,
    .awards-swiper > .swiper-wrapper,
    .client-swiper2 > .swiper-wrapper {
        display: flex !important;
        width: max-content !important;
        transform: none !important;
        transition: none !important;
        gap: 16px;
    }

    .service-swiper > .swiper-wrapper > .swiper-slide,
    .testimonial-swiper1 > .swiper-wrapper > .swiper-slide {
        width: min(86vw, 360px) !important;
        flex: 0 0 min(86vw, 360px) !important;
        scroll-snap-align: start;
    }

    .awards-swiper > .swiper-wrapper > .swiper-slide {
        width: min(68vw, 260px) !important;
        flex: 0 0 min(68vw, 260px) !important;
        scroll-snap-align: start;
    }

    .client-swiper2 > .swiper-wrapper > .swiper-slide {
        width: 140px !important;
        flex: 0 0 140px !important;
        scroll-snap-align: start;
    }
}

@media (prefers-reduced-motion: reduce) {
    .page-content *,
    .page-content *::before,
    .page-content *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}

/* SVG and icon rendering safeguards */
img[src$=".svg"] {
    display:block;
    max-width:100%;
}
.swiper1-button-prev img,
.swiper1-button-next img {
    width:32px;
    height:32px;
    object-fit:contain;
}
.fa, .fas, .far, .fab,
[class^="flaticon-"], [class*=" flaticon-"] {
    font-style:normal;
    visibility:visible;
}

</style>
<main class="page-content">
<div class="swiper heroSwiper relative overflow-hidden w-full">

    <div class="swiper-wrapper h-full">

        <!-- Slide 0 -->
        <div class="swiper-slide relative h-full">
            <div class="video-bg">
               <video
    class="hero-video lg:block"
    muted
    loop
    autoplay
    playsinline
    preload="auto"
    poster="<?= $app_path ?>assets/images/spsimg/banner/bg-v4.avif"
    aria-hidden="true"
>
    <source
        src="<?= $app_path ?>assets/images/spsvideo/v5.webm"
        type="video/webm"
    >
</video>
                <img
                    class="hero-fallback block lg:hidden"
                    src="<?= $app_path ?>assets/images/spsimg/banner/bg-v4.avif"
                    alt="SPS digital transformation solutions"
                    width="417"
                    height="626"
                    fetchpriority="high"
                    loading="eager"
                    decoding="async"
                />
            </div>
            <div class="container h-full relative z-10">
                <div class="text-white hero-slide-content">
                    <h1 class="text-5xl font-bold mb-4 text-white">What If</h1>
                    <ul class="list-disc pl-5 space-y-2 text-white mb-4">
                        <li>You could enhance your Identity Management.</li>
                        <li>You could modernize your legacy enterprise information systems.</li>
                        <li>You could have Security Operations Center 24x7.</li>
                        <li>You could have your Cyber Security environment managed for you.</li>
                        <li>You could have Compliance Artifacts for your Auditors at click of a button.</li>
                    </ul>
                    <a href="<?= $app_path ?>comingsoon.php" class="btn btn-primary mr-3">Request Consultation</a>
                    <button type="button" onclick="toggleAppointmentModal(event)" class="btn btn-secondary">
                        How can we help you today
                    </button>
                </div>
            </div>
        </div>

        <!-- Slide 1 -->
        <div class="swiper-slide relative h-full">
            <div class="video-bg">
                <video class="hero-video lg:block" muted loop playsinline preload="none" poster="<?= $app_path ?>assets/images/spsimg/banner/bg-v3.avif" aria-hidden="true">
                    <!-- <source src="<?= $app_path ?>assets/images/spsvideo/v2.webm" type="video/webm"> -->
               <source 
data-src="<?= $app_path ?>assets/images/spsvideo/v2.webm"
type="video/webm">
                </video>
                <img
                    class="hero-fallback block lg:hidden"
                    src="<?= $app_path ?>assets/images/spsimg/banner/bg-v3.avif"
                    alt="Artificial Intelligence solutions hero banner"
                    width="417"
                    height="626"
                    loading="lazy"
                    decoding="async"
                />
            </div>
            <div class="container h-full relative z-10">
                <div class="text-white hero-slide-content">
                    <h2 class="text-5xl font-bold mb-4 text-white">Artificial Intelligence</h2>
                    <p class="text-xl mb-2 text-white">Transforming businesses with AI-driven automation.</p>
                    <p class="text-lg mb-4 text-white">Implement AI strategies to reduce operational costs and enhance customer experience.</p>
                    <p class="text-lg mb-6 text-white">Our AI solutions adapt to your business needs.</p>
                    <a href="<?= $app_path ?>comingsoon.php" class="btn btn-primary mr-3">Explore AI</a>
                    <a href="<?= $app_path ?>comingsoon.php" class="btn btn-secondary">Contact Us</a>
                </div>
            </div>
        </div>

        <!-- Slide 2 -->
        <div class="swiper-slide relative h-full">
            <div class="video-bg">
                <video class="hero-video lg:block" muted loop playsinline preload="none" poster="<?= $app_path ?>assets/images/spsimg/banner/bg-v2.webp" aria-hidden="true">
                    <!-- <source src="<?= $app_path ?>assets/images/spsvideo/v3.webm" type="video/webm"> -->
                    <source data-src="<?= $app_path ?>assets/images/spsvideo/v3.webm" type="video/webm">
                </video>
                <img
                    class="hero-fallback block lg:hidden"
                    src="<?= $app_path ?>assets/images/spsimg/banner/bg-v2.webp"
                    alt="Cloud Solutions hero banner"
                    width="417"
                    height="626"
                    loading="lazy"
                    decoding="async"
                />
            </div>
            <div class="container h-full relative z-10">
                <div class="text-white hero-slide-content">
                    <h2 class="text-5xl font-bold mb-4 text-white">Cloud Solutions</h2>
                    <p class="text-xl mb-2 text-white">Scale your business with secure cloud technology.</p>
                    <p class="text-lg mb-4 text-white">Migrate to the cloud seamlessly.</p>
                    <p class="text-lg mb-6 text-white">High performance & 24/7 availability.</p>
                    <a href="<?= $app_path ?>comingsoon.php" class="btn btn-primary mr-3">Explore Cloud</a>
                    <a href="<?= $app_path ?>comingsoon.php" class="btn btn-secondary">Contact Us</a>
                </div>
            </div>
        </div>

        <!-- Slide 3 -->
        <div class="swiper-slide relative h-full">
            <div class="video-bg">
              <video class="hero-video lg:block" muted loop playsinline preload="none" poster="<?= $app_path ?>assets/images/spsimg/banner/bg-v1.webp" aria-hidden="true">
            <source data-src="<?= $app_path ?>assets/images/spsvideo/v1.webm" type="video/webm">
        </video>
        <img
            class="hero-fallback block lg:hidden"
            src="<?= $app_path ?>assets/images/spsimg/banner/bg-v1-420w.webp"
            srcset="
                <?= $app_path ?>assets/images/spsimg/banner/bg-v1-420w.webp 420w,
                <?= $app_path ?>assets/images/spsimg/banner/bg-v1-630w.webp 630w,
                <?= $app_path ?>assets/images/spsimg/banner/bg-v1.webp 990w
            "
            sizes="100vw"
            alt="Cybersecurity Services hero banner"
            width="417"
            height="626"
            loading="lazy"
            decoding="async"
        />
            </div>
            <div class="container h-full relative z-10">
                <div class="text-white hero-slide-content">
                    <h2 class="text-5xl font-bold mb-4 text-white">Cybersecurity Services</h2>
                    <p class="text-xl mb-2 text-white">Protect your business with advanced cyber defense.</p>
                    <p class="text-lg mb-4 text-white">Safeguard digital assets against threats.</p>
                    <p class="text-lg mb-6 text-white">Continuous monitoring & rapid response.</p>
                    <a href="<?= $app_path ?>comingsoon.php" class="btn btn-primary mr-3">Explore Security</a>
                    <a href="<?= $app_path ?>comingsoon.php" class="btn btn-secondary">Contact Us</a>
                </div>
            </div>
        </div>

    </div>

    <!-- Pagination -->
    <div class="swiper-pagination"></div>

    <!-- Navigation Arrows -->
    <div class="swiper-button-next max-lg:hidden"></div>
    <div class="swiper-button-prev max-lg:hidden"></div>
</div>

    <section class="home-deferred 2xl:pt-25 2xl:pb-17.5 md:pt-17.5 md:pb-10 sm:pt-12.5 sm:pb-5 pt-10 pb-5 bg-light">
        <div class="container">
            <div class="row content-wrapper style-25 items-center">
                <div class="lg:w-1/2 w-full mb-3.75">
                    <div class="2xxl:-ml-20 2xxl:pr-48.75 xl:pr-33.75 lg:pr-18.75 max-lg:mb-5">
                      <div class="flex items-center relative max-lg:h-130 max-sm:h-87.5!">
    <img src="<?= $app_path ?>assets/images/spsimg/ab1-430w.webp"
        srcset="
            <?= $app_path ?>assets/images/spsimg/ab1-430w.webp 430w,
            <?= $app_path ?>assets/images/spsimg/ab1-660w.webp 660w,
            <?= $app_path ?>assets/images/spsimg/ab1.webp 530w
        "
        sizes="(min-width: 992px) 50vw, 100vw"
        alt="Digital transformation and technology illustration"
        loading="lazy"
        decoding="async"
        width="530"
        height="650"
        class="size-full object-cover rounded-2xl">
    
    <img src="<?= $app_path ?>assets/images/spsimg/ab2.webp" alt="" aria-hidden="true"
        loading="lazy"
        decoding="async"
        width="220"
        height="110"
        class="xl:-ml-32.5 -ml-25 xl:w-55 w-37.5 xl:h-65 h-45 object-cover rounded-2xl">
</div>
                    </div>
                </div>
                <div class="lg:w-1/2 w-full mb-7.5">
                    <div class="sm:mb-7.5 mb-5">
                        <div class="text-primary font-semibold leading-5 uppercase text-lg inline-flex gap-1.25"
                            data-wow-delay="0.2s" data-wow-duration="0.8s">About Us</div>

                        <h2 class="2xxl:text-4xxl lg:text-[38px] sm:text-[32px] text-2xxl capitalize wow fadeInUp"
                            data-wow-delay="0.2s" data-wow-duration="0.8s">
                            We Specialize in Digital Transformation
                        </h2>

                        <p class="xl:text-lg text-base font-light md:mb-12 mb-6 wow fadeInUp" data-wow-delay="0.4s"
                            data-wow-duration="0.8s">
                            Whether you are an entrepreneur looking for an engineering team or an enterprise
                            pursuing digital transformation, we can help you bring your vision to reality.
                        </p>
                    </div>

                    <div class="flex flex-wrap items-center wow fadeInUp" data-wow-delay="0.8s"
                        data-wow-duration="0.8s">
                        <a href="<?= $app_path ?>comingsoon.php" class="btn btn-primary btn-rounded me-6 wow fadeInUp"
                            data-wow-delay="0.6s" data-wow-duration="0.8s">
                            Read More
                            <i class="feather icon-arrow-right ms-2"></i>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <!-- <div class="relative -mt-16 z-20">
        <div class="container mx-auto">
            <div class="bg-white rounded-2xl p-6 shadow-xl text-center animate-bounce-slow">
                <h4 class="text-sm md:text-sm font-bold p-5">
                    Whether you are an entrepreneur looking for an engineering team or an enterprise
                    pursuing digital transformation, we can help you bring your vision to reality.
                </h4>
            </div>
        </div>
    </div> -->
    <!-- <div class="relative -mt-16 z-20">
        <div class="container mx-auto">
            <div class="bg-white rounded-2xl p-6 shadow-xl text-center animate-bounce-slow">
                <h4 class="text-sm md:text-sm font-bold p-5 text-white bg-secondary">
                    Whether you are an entrepreneur looking for an engineering team or an enterprise
                    pursuing digital transformation, we can help you bring your vision to reality.
                </h4>
            </div>
        </div>
    </div> -->
    <div class="text-center">
        <div class="xl:py-10.5 md:py-10 py-7.5">
            <div class="container">
                <div class="row">
                    <div class="w-full">
                        <!-- <div class="sm:mb-7.5 mb-5">
                            <h4 class="text-xxl inline-block mb-0 relative after:absolute after:top-1/2 after:-left-40 after:w-37.5 after:h-px after:bg-black after:opacity-15 before:absolute before:top-1/2 before:-right-40 before:w-37.5 before:h-px before:bg-black before:opacity-15"
                                style="background: #2554ad1f;padding: 5px;border-radius: 10px;">
                                Whether you are an entrepreneur looking for an engineering team or an enterprise
                                pursuing digital transformation we can help you bring your vision to reality.</h4>

                        </div> -->

                        <div class="mb-5 text-start">
                            <div class="custom-tab">
                                <ul class="flex flex-wrap justify-center">
                                    <li class="tab-title tab-underline active"
                                        style=" border: 1px solid #416482; margin-left: 5px; border-radius: 10px; ">
                                        <button
                                            class="py-2.5 px-5 font-medium -mb-0.5 text-secondary rounded-2lg cursor-pointer relative duration-500 [.tab-title.active_&]:bg-primary">
                                            <i class="fa-solid fa-shield-halved me-2"></i> Cybersecurity
                                        </button>
                                    </li>

                                    <li class="tab-title tab-underline"
                                        style=" border: 1px solid #416482; margin-left: 5px; border-radius: 10px; ">
                                        <button
                                            class="py-2.5 px-5 font-medium -mb-0.5 text-secondary rounded-2lg cursor-pointer relative duration-500 [.tab-title.active_&]:bg-primary [.tab-title.active_&]:text-white!">
                                            <i class="fa-solid fa-cloud me-2"></i> Cloud
                                        </button>
                                    </li>

                                    <li class="tab-title tab-underline"
                                        style=" border: 1px solid #416482; margin-left: 5px; border-radius: 10px; ">
                                        <button
                                            class="py-2.5 px-5 font-medium -mb-0.5 text-secondary rounded-2lg cursor-pointer relative duration-500 [.tab-title.active_&]:bg-primary [.tab-title.active_&]:text-white!">
                                            <i class="fa-solid fa-robot me-2"></i> AI & Automation
                                        </button>
                                    </li>

                                    <li class="tab-title tab-underline"
                                        style=" border: 1px solid #416482; margin-left: 5px; border-radius: 10px; ">
                                        <button
                                            class="py-2.5 px-5 font-medium -mb-0.5 text-secondary rounded-2lg cursor-pointer relative duration-500 [.tab-title.active_&]:bg-primary [.tab-title.active_&]:text-white!">
                                            <i class="fa-solid fa-users me-2"></i> Collaboration
                                        </button>
                                    </li>
                                </ul>
                                <div class="tab-contents">
                                    <div class="tab-content active">
                                        <div class="w-full">
                                            <div class="sm:mb-7.5 mb-5 mt-5">
                                                <p class="text-sm text-center px-5">
                                                    SPS Cybersecurity team has the following practices: Digital
                                                    Trust (User Security, Data Security, Mobile Device Management),
                                                    Threat Management (Cybersecurity Program, SIEM systems,
                                                    Application Security, Network Security), Keysight (Professional
                                                    Services, Help Desk Services, Security Operations), and SAP
                                                    Security.

                                                </p>
                                            </div>
                                            <div class="mb-5 text-start">
                                                <div
                                                    class="swiper service-swiper">
                                                    <div class="swiper-wrapper box-hover-wrapper">
                                                        <div class="swiper-slide">
                                                            <div
                                                                class="min-h-95 h-auto relative rounded-2xxl p-7.5 z-1 flex flex-col after:absolute after:bg-light after:size-full after:top-0 after:left-0 after:-z-1 after:rounded-2xxl after:mask-none after:mask-bottom-right after:duration-500 icon-bx-wraper [.box-hover.active]:after:bg-primary box-hover group">
                                                                <div class="mb-auto">
                                                                    <div
                                                                        class="relative size-15 block mb-2.5 text-center">
                                                                        <span
                                                                            class="[.box-hover.active_&]:[--color-primary:#fff]">
                                                                            <!-- Network Icon -->
                                                                            <i
                                                                                class="fa-solid fa-network-wired text-5xl text-primary"></i>
                                                                        </span>
                                                                    </div>
                                                                    <span
                                                                        class="absolute right-1.25 top-1.25 w-35 opacity-[0.025]">
                                                                        <!-- Faded background icon -->
                                                                        <i
                                                                            class="fa-solid fa-network-wired text-[60px]"></i>
                                                                    </span>
                                                                    <div class="overflow-hidden">
                                                                        <h3
                                                                            class="text-xl font-bold mb-3 [.box-hover.active_&]:text-white">
                                                                            Network Security
                                                                        </h3>
                                                                        <p
                                                                            class="text-2sm font-light mb-0 [.box-hover.active_&]:text-white">
                                                                            <a class="n_links"
                                                                                href="https://www.spsnet.com/service-detail/security/network-security/network-visibility-operations-services/">Network
                                                                                Visibility Operations Services</a>, <a
                                                                                class="n_links"
                                                                                href="https://www.spsnet.com/service-detail/security/network-security/network-visibility-design-implementation-services/">Network
                                                                                Visibility Design & Implementation
                                                                                Services</a>, and <a class="n_links"
                                                                                href="https://www.spsnet.com/service-detail/security/network-security/keysight-ixnetwork-training/">Keysight
                                                                                IxNetwork Training</a>.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    class="relative pt-5 mt-auto mr-12.5 duration-500 before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-linear-(--icon-bx-footer-gradient) [.box-hover.active_&]:before:bg-linear-(--icon-bx-footer-white-gradient) before:duration-500 before:bg-size-[10px_1px] before:bg-repeat-x">
                                                                    <span
                                                                        class="text-sm text-secondary flex items-center gap-2 leading-[1.2] [.box-hover.active_&]:text-white">
                                                                        <i
                                                                            class="fa fa-circle text-tiny text-primary duration-500 [.box-hover.active_&]:text-secondary"></i>
                                                                        Read More
                                                                    </span>
                                                                   <a href="<?= $app_path ?>comingsoon.php"
    aria-label="Read more about our services"
    class="btn btn-primary btn-square shadow-btn-squre !absolute -right-20 -bottom-7.5 !text-xl !rounded-full">
     <i class="feather icon-arrow-up-right group-hover:animate-toTopRight"
        aria-hidden="true"></i>
</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- SMaaS -->
                                                        <div class="swiper-slide">
                                                            <div
                                                                class="min-h-95 h-auto relative rounded-2xxl p-7.5 z-1 flex flex-col after:absolute after:bg-light after:size-full after:top-0 after:left-0 after:-z-1 after:rounded-2xxl after:mask-none after:mask-bottom-right after:duration-500 icon-bx-wraper [.box-hover.active]:after:bg-primary box-hover group">
                                                                <div class="mb-auto">
                                                                    <div
                                                                        class="relative size-15 block mb-2.5 text-center">
                                                                        <span
                                                                            class="[.box-hover.active_&]:[--color-primary:#fff]">
                                                                            <i
                                                                                class="fa-solid fa-server text-5xl text-primary"></i>
                                                                        </span>
                                                                    </div>
                                                                    <span
                                                                        class="absolute right-1.25 top-1.25 w-35 opacity-[0.025]">
                                                                        <i class="fa-solid fa-server text-[60px]"></i>
                                                                    </span>
                                                                    <div class="overflow-hidden">
                                                                        <h3
                                                                            class="text-xl font-bold mb-3 [.box-hover.active_&]:text-white">
                                                                            SMaaS</h3>
                                                                        <p
                                                                            class="text-2sm font-light mb-0 [.box-hover.active_&]:text-white">
                                                                            <a class="n_links"
                                                                                href="<?= $app_path ?>comingsoon.php">Service
                                                                                Management as a Service</a>, including
                                                                            cloud monitoring and operations solutions.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    class="relative pt-5 mt-auto mr-12.5 duration-500 before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-linear-(--icon-bx-footer-gradient) [.box-hover.active_&]:before:bg-linear-(--icon-bx-footer-white-gradient) before:duration-500 before:bg-[length:10px_1px] before:bg-repeat-x">
                                                                    <span
                                                                        class="text-sm text-secondary flex items-center gap-2 leading-[1.2] [.box-hover.active_&]:text-white">
                                                                        <i
                                                                            class="fa fa-circle text-tiny text-primary duration-500 [.box-hover.active_&]:text-secondary"></i>
                                                                        Read More
                                                                    </span>
                                                                    <a href="<?= $app_path ?>comingsoon.php"
                                                                        aria-label="Read more about SMaaS services"
                                                                        class="btn btn-primary btn-square shadow-btn-squre !absolute -right-20 -bottom-7.5 !text-xl !rounded-full">
                                                                        <i class="feather icon-arrow-up-right group-hover:animate-toTopRight"
                                                                            aria-hidden="true"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- GRC -->
                                                        <div class="swiper-slide">
                                                            <div
                                                                class="min-h-95 h-auto relative rounded-2xxl p-7.5 z-1 flex flex-col after:absolute after:bg-light after:size-full after:top-0 after:left-0 after:-z-1 after:rounded-2xxl after:mask-none after:mask-bottom-right after:duration-500 icon-bx-wraper [.box-hover.active]:after:bg-primary box-hover group">
                                                                <div class="mb-auto">
                                                                    <div
                                                                        class="relative size-15 block mb-2.5 text-center">
                                                                        <span
                                                                            class="[.box-hover.active_&]:[--color-primary:#fff]">
                                                                            <i
                                                                                class="fa-solid fa-shield-halved text-5xl text-primary"></i>
                                                                        </span>
                                                                    </div>
                                                                    <span
                                                                        class="absolute right-1.25 top-1.25 w-35 opacity-[0.025]">
                                                                        <i
                                                                            class="fa-solid fa-shield-halved text-[60px]"></i>
                                                                    </span>
                                                                    <div class="overflow-hidden">
                                                                        <h3
                                                                            class="text-xl font-bold mb-3 [.box-hover.active_&]:text-white">
                                                                            GRC</h3>
                                                                        <p
                                                                            class="text-2sm font-light mb-0 [.box-hover.active_&]:text-white">
                                                                            <a class="n_links"
                                                                                href="<?= $app_path ?>comingsoon.php">Governance,
                                                                                Risk
                                                                                & Compliance</a> solutions for
                                                                            enterprise-wide policies and controls.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    class="relative pt-5 mt-auto mr-12.5 duration-500 before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-linear-(--icon-bx-footer-gradient) [.box-hover.active_&]:before:bg-linear-(--icon-bx-footer-white-gradient) before:duration-500 before:bg-[length:10px_1px] before:bg-repeat-x">
                                                                    <span
                                                                        class="text-sm text-secondary flex items-center gap-2 leading-[1.2] [.box-hover.active_&]:text-white">
                                                                        <i
                                                                            class="fa fa-circle text-tiny text-primary duration-500 [.box-hover.active_&]:text-secondary"></i>
                                                                        Read More
                                                                    </span>
                                                                    <a href="<?= $app_path ?>comingsoon.php"
                                                                        aria-label="Read more about GRC services"
                                                                        class="btn btn-primary btn-square shadow-btn-squre !absolute -right-20 -bottom-7.5 !text-xl !rounded-full">
                                                                        <i class="feather icon-arrow-up-right group-hover:animate-toTopRight"
                                                                            aria-hidden="true"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Identity & Access -->
                                                        <div class="swiper-slide">
                                                            <div
                                                                class="min-h-95 h-auto relative rounded-2xxl p-7.5 z-1 flex flex-col after:absolute after:bg-light after:size-full after:top-0 after:left-0 after:-z-1 after:rounded-2xxl after:mask-none after:mask-bottom-right after:duration-500 icon-bx-wraper [.box-hover.active]:after:bg-primary box-hover group">
                                                                <div class="mb-auto">
                                                                    <div
                                                                        class="relative size-15 block mb-2.5 text-center">
                                                                        <span
                                                                            class="[.box-hover.active_&]:[--color-primary:#fff]">
                                                                            <i
                                                                                class="fa-solid fa-user-shield text-5xl text-primary"></i>
                                                                        </span>
                                                                    </div>
                                                                    <span
                                                                        class="absolute right-1.25 top-1.25 w-35 opacity-[0.025]">
                                                                        <i
                                                                            class="fa-solid fa-user-shield text-[60px]"></i>
                                                                    </span>
                                                                    <div class="overflow-hidden">
                                                                        <h3
                                                                            class="text-xl font-bold mb-3 [.box-hover.active_&]:text-white">
                                                                            Identity & Access</h3>
                                                                        <p
                                                                            class="text-2sm font-light mb-0 [.box-hover.active_&]:text-white">
                                                                            <a class="n_links"
                                                                                href="<?= $app_path ?>comingsoon.php">Identity
                                                                                &
                                                                                Access Management</a> solutions for
                                                                            secure authentication and authorization.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    class="relative pt-5 mt-auto mr-12.5 duration-500 before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-linear-(--icon-bx-footer-gradient) [.box-hover.active_&]:before:bg-linear-(--icon-bx-footer-white-gradient) before:duration-500 before:bg-[length:10px_1px] before:bg-repeat-x">
                                                                    <span
                                                                        class="text-sm text-secondary flex items-center gap-2 leading-[1.2] [.box-hover.active_&]:text-white">
                                                                        <i
                                                                            class="fa fa-circle text-tiny text-primary duration-500 [.box-hover.active_&]:text-secondary"></i>
                                                                        Read More
                                                                    </span>
                                                                    <a href="<?= $app_path ?>comingsoon.php"
                                                                        aria-label="Read more about Identity & Access services"
                                                                        class="btn btn-primary btn-square shadow-btn-squre !absolute -right-20 -bottom-7.5 !text-xl !rounded-full">
                                                                        <i class="feather icon-arrow-up-right group-hover:animate-toTopRight"
                                                                            aria-hidden="true"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Threat Management -->
                                                        <div class="swiper-slide">
                                                            <div
                                                                class="min-h-95 h-auto relative rounded-2xxl p-7.5 z-1 flex flex-col after:absolute after:bg-light after:size-full after:top-0 after:left-0 after:-z-1 after:rounded-2xxl after:mask-none after:mask-bottom-right after:duration-500 icon-bx-wraper [.box-hover.active]:after:bg-primary box-hover group">
                                                                <div class="mb-auto">
                                                                    <div
                                                                        class="relative size-15 block mb-2.5 text-center">
                                                                        <span
                                                                            class="[.box-hover.active_&]:[--color-primary:#fff]">
                                                                            <i
                                                                                class="fa-solid fa-bug text-5xl text-primary"></i>
                                                                        </span>
                                                                    </div>
                                                                    <span
                                                                        class="absolute right-1.25 top-1.25 w-35 opacity-[0.025]">
                                                                        <i class="fa-solid fa-bug text-[60px]"></i>
                                                                    </span>
                                                                    <div class="overflow-hidden">
                                                                        <h3
                                                                            class="text-xl font-bold mb-3 [.box-hover.active_&]:text-white">
                                                                            Threat Management</h3>
                                                                        <p
                                                                            class="text-2sm font-light mb-0 [.box-hover.active_&]:text-white">
                                                                            <a class="n_links"
                                                                                href="<?= $app_path ?>comingsoon.php">Threat
                                                                                Management</a> solutions for proactive
                                                                            detection and mitigation of cyber threats.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    class="relative pt-5 mt-auto mr-12.5 duration-500 before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-linear-(--icon-bx-footer-gradient) [.box-hover.active_&]:before:bg-linear-(--icon-bx-footer-white-gradient) before:duration-500 before:bg-[length:10px_1px] before:bg-repeat-x">
                                                                    <span
                                                                        class="text-sm text-secondary flex items-center gap-2 leading-[1.2] [.box-hover.active_&]:text-white">
                                                                        <i
                                                                            class="fa fa-circle text-tiny text-primary duration-500 [.box-hover.active_&]:text-secondary"></i>
                                                                        Read More
                                                                    </span>
                                                                    <a href="<?= $app_path ?>comingsoon.php"
                                                                        aria-label="Read more about Threat Management services"
                                                                        class="btn btn-primary btn-square shadow-btn-squre !absolute -right-20 -bottom-7.5 !text-xl !rounded-full">
                                                                        <i class="feather icon-arrow-up-right group-hover:animate-toTopRight"
                                                                            aria-hidden="true"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span class="swiper-notification" aria-live="assertive"
                                                        aria-atomic="true"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-content">
                                        <div class="w-full">
                                            <div class="sm:mb-7.5 mb-5 mt-5">
                                                <p class="text-sm text-center px-5">
                                                    SPS Cloud team offers services in DevOps (CI/CD Pipelines,
                                                    Automation, Containerization)
                                                    and Migration Services (Cloud Strategy, Application Migration, Data
                                                    Migration, Multi-cloud Solutions).
                                                </p>
                                            </div>
                                            <div class="mb-5 text-start">
                                                <div class="swiper service-swiper">
                                                    <div class="swiper-wrapper box-hover-wrapper">
                                                        <!-- DevOps Card -->
                                                        <div class="swiper-slide">
                                                            <div class="min-h-95 h-auto relative rounded-2xxl p-7.5 z-1 flex flex-col after:absolute after:bg-light after:size-full after:top-0 after:left-0 after:-z-1 after:rounded-2xxl after:mask-none after:mask-bottom-right after:duration-500 icon-bx-wraper box-hover group">
                                                                <div class="mb-auto">
                                                                    <div
                                                                        class="relative size-15 block mb-2.5 text-center">
                                                                        <span>
                                                                            <i
                                                                                class="fa-solid fa-code-branch text-5xl text-primary"></i>
                                                                        </span>
                                                                    </div>
                                                                    <span
                                                                        class="absolute right-1.25 top-1.25 w-35 opacity-[0.025]">
                                                                        <i
                                                                            class="fa-solid fa-code-branch text-[60px]"></i>
                                                                    </span>
                                                                    <div class="overflow-hidden">
                                                                        <h3 class="text-xl font-bold mb-3">DevOps</h3>
                                                                        <ul>
                                                                            <li><a class="n_links"
                                                                                    href="https://www.spsnet.com/service-detail/cloud/devops/cloud-application-development/">Cloud
                                                                                    Application Development</a>
                                                                            </li>
                                                                            <li><a class="n_links"
                                                                                    href="https://www.spsnet.com/service-detail/cloud/devops/it-ops-and-support/">IT
                                                                                    Ops and Support</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    class="relative pt-5 mt-5 mr-12.5 before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-linear-(--icon-bx-footer-gradient) before:duration-500 before:bg-[length:10px_1px] before:bg-repeat-x">
                                                                    <span
                                                                        class="text-sm text-secondary flex items-center gap-2 leading-[1.2]">
                                                                        <i
                                                                            class="fa fa-circle text-tiny text-primary"></i>
                                                                        Read More
                                                                    </span>
                                                                    <a href="<?= $app_path ?>comingsoon.php"
                                                                        aria-label="Read more about DevOps services"
                                                                        class="btn btn-primary btn-square shadow-btn-squre !absolute -right-20 -bottom-7.5 !text-xl !rounded-full">
                                                                        <i class="feather icon-arrow-up-right group-hover:animate-toTopRight"
                                                                            aria-hidden="true"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <!-- Migration Services Card -->
                                                        <div class="swiper-slide">
                                                            <div class="min-h-95 h-auto relative rounded-2xxl p-7.5 z-1 flex flex-col after:absolute after:bg-light after:size-full after:top-0 after:left-0 after:-z-1 after:rounded-2xxl after:mask-none after:mask-bottom-right after:duration-500 icon-bx-wraper box-hover group">
                                                                <div class="mb-auto">
                                                                    <div
                                                                        class="relative size-15 block mb-2.5 text-center">
                                                                        <span>
                                                                            <i
                                                                                class="fa-solid fa-cloud-arrow-up text-5xl text-primary"></i>
                                                                        </span>
                                                                    </div>
                                                                    <span
                                                                        class="absolute right-1.25 top-1.25 w-35 opacity-[0.025]">
                                                                        <i
                                                                            class="fa-solid fa-cloud-arrow-up text-[60px]"></i>
                                                                    </span>
                                                                    <div class="overflow-hidden">
                                                                        <h3 class="text-xl font-bold mb-3">Migration
                                                                            Services</h3>
                                                                        <ul>
                                                                            <li><a class="n_links"
                                                                                    href="https://www.spsnet.com/service-detail/cloud/public-cloud/migrate-vmware-workload-to-cloud/">Migrate
                                                                                    VMware Workload to Cloud</a>
                                                                            </li>
                                                                            <li><a class="n_links"
                                                                                    href="https://www.spsnet.com/service-detail/cloud/public-cloud/migrate-ms-exchange-to-office-365/">Migrate
                                                                                    MS Exchange to office 365</a>
                                                                            </li>
                                                                            <li><a class="n_links"
                                                                                    href="https://www.spsnet.com/service-detail/cloud/public-cloud/migrate-ibm-power-to-cloud/">Migrate
                                                                                    IBM Power to Cloud</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    class="relative pt-5 mt-5 mr-12.5 before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-linear-(--icon-bx-footer-gradient) before:duration-500 before:bg-[length:10px_1px] before:bg-repeat-x">
                                                                    <span
                                                                        class="text-sm text-secondary flex items-center gap-2 leading-[1.2]">
                                                                        <i
                                                                            class="fa fa-circle text-tiny text-primary"></i>
                                                                        Read More
                                                                    </span>
                                                                    <a href="<?= $app_path ?>comingsoon.php"
                                                                        aria-label="Read more about Migration services"
                                                                        class="btn btn-primary btn-square shadow-btn-squre !absolute -right-20 -bottom-7.5 !text-xl !rounded-full">
                                                                        <i class="feather icon-arrow-up-right group-hover:animate-toTopRight"
                                                                            aria-hidden="true"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span class="swiper-notification" aria-live="assertive"
                                                        aria-atomic="true"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="tab-content">
                                        <div class="w-full">
                                            <div class="sm:mb-7.5 mb-5 mt-5">
                                                <p class="text-sm text-center px-5">
                                                    SPS AI & Automation team offers solutions in Automation (Robotic
                                                    Process Automation, Workflow Automation)
                                                    and Data Science (Machine Learning, Predictive Analytics, AI Model
                                                    Development).
                                                </p>
                                            </div>
                                            <div class="mb-5 text-start">
                                                <div class="swiper service-swiper">
                                                    <div class="swiper-wrapper box-hover-wrapper">
                                                        <!-- Automation Card -->
                                                        <div class="swiper-slide">
                                                            <div class="min-h-95 h-auto relative rounded-2xxl p-7.5 z-1 flex flex-col after:absolute after:bg-light after:size-full after:top-0 after:left-0 after:-z-1 after:rounded-2xxl after:mask-none after:mask-bottom-right after:duration-500 icon-bx-wraper box-hover group">
                                                                <div class="mb-auto">
                                                                    <div
                                                                        class="relative size-15 block mb-2.5 text-center">
                                                                        <span>
                                                                            <i
                                                                                class="fa-solid fa-robot text-5xl text-primary"></i>
                                                                        </span>
                                                                    </div>
                                                                    <span
                                                                        class="absolute right-1.25 top-1.25 w-35 opacity-[0.025]">
                                                                        <i class="fa-solid fa-robot text-[60px]"></i>
                                                                    </span>
                                                                    <div class="overflow-hidden">
                                                                        <h3 class="text-xl font-bold mb-3">Automation
                                                                        </h3>
                                                                        <ul>
                                                                            <li><a class="n_links"
                                                                                    href="https://www.spsnet.com/service-detail/ai/automation/business-process-modeling-using-aris/">Business
                                                                                    Process Modeling Using ARIS</a>
                                                                            </li>
                                                                            <li><a class="n_links"
                                                                                    href="https://www.spsnet.com/service-detail/ai/automation/business-process-automation-using-webmethods/">Business
                                                                                    Process Automation Using
                                                                                    webMethods</a>
                                                                            </li>
                                                                            <li><a class="n_links"
                                                                                    href="https://www.spsnet.com/service-detail/ai/automation/low-code-application-development-using-appian/">Code
                                                                                    Application Development Using
                                                                                    Appian</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    class="relative pt-5 mt-5 mr-12.5 before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-linear-(--icon-bx-footer-gradient) before:duration-500 before:bg-[length:10px_1px] before:bg-repeat-x">
                                                                    <span
                                                                        class="text-sm text-secondary flex items-center gap-2 leading-[1.2]">
                                                                        <i
                                                                            class="fa fa-circle text-tiny text-primary"></i>
                                                                        Read More
                                                                    </span>
                                                                    <a href="<?= $app_path ?>comingsoon.php"
                                                                        aria-label="Read more about Automation services"
                                                                        class="btn btn-primary btn-square shadow-btn-squre !absolute -right-20 -bottom-7.5 !text-xl !rounded-full">
                                                                        <i class="feather icon-arrow-up-right group-hover:animate-toTopRight"
                                                                            aria-hidden="true"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <!-- Data Science Card -->
                                                        <div class="swiper-slide">
                                                            <div class="min-h-95 h-auto relative rounded-2xxl p-7.5 z-1 flex flex-col after:absolute after:bg-light after:size-full after:top-0 after:left-0 after:-z-1 after:rounded-2xxl after:mask-none after:mask-bottom-right after:duration-500 icon-bx-wraper box-hover group">
                                                                <div class="mb-auto">
                                                                    <div
                                                                        class="relative size-15 block mb-2.5 text-center">
                                                                        <span>
                                                                            <i
                                                                                class="fa-solid fa-brain text-5xl text-primary"></i>
                                                                        </span>
                                                                    </div>
                                                                    <span
                                                                        class="absolute right-1.25 top-1.25 w-35 opacity-[0.025]">
                                                                        <i class="fa-solid fa-brain text-[60px]"></i>
                                                                    </span>
                                                                    <div class="overflow-hidden">
                                                                        <h3 class="text-xl font-bold mb-3">Data Science
                                                                        </h3>
                                                                        <ul>
                                                                            <li><a class="n_links"
                                                                                    href="https://www.spsnet.com/service-detail/ai/data-science/generative-ai/">Generative
                                                                                    AI</a>
                                                                            </li>
                                                                            <li><a class="n_links"
                                                                                    href="https://www.spsnet.com/service-detail/ai/data-science/internet-of-things/">Internet
                                                                                    of Things</a>
                                                                            </li>
                                                                            <li><a class="n_links"
                                                                                    href="https://www.spsnet.com/service-detail/ai/data-science/data-analytics/">Data
                                                                                    Analytics</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    class="relative pt-5 mt-5 mr-12.5 before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-linear-(--icon-bx-footer-gradient) before:duration-500 before:bg-[length:10px_1px] before:bg-repeat-x">
                                                                    <span
                                                                        class="text-sm text-secondary flex items-center gap-2 leading-[1.2]">
                                                                        <i
                                                                            class="fa fa-circle text-tiny text-primary"></i>
                                                                        Read More
                                                                    </span>
                                                                    <a href="<?= $app_path ?>comingsoon.php"
                                                                        aria-label="Read more about Data Science services"
                                                                        class="btn btn-primary btn-square shadow-btn-squre !absolute -right-20 -bottom-7.5 !text-xl !rounded-full">
                                                                        <i class="feather icon-arrow-up-right group-hover:animate-toTopRight"
                                                                            aria-hidden="true"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <span class="swiper-notification" aria-live="assertive"
                                                        aria-atomic="true"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="tab-content">
                                        <div class="w-full">
                                            <div class="sm:mb-7.5 mb-5 mt-5">
                                                <p class="text-sm text-center px-5">
                                                    SPS Collaboration team focuses on enhancing organizational learning
                                                    and engagement through Learning initiatives and Events.
                                                </p>
                                            </div>
                                            <div class="mb-5 text-start">
                                                <div class="swiper service-swiper">
                                                    <div class="swiper-wrapper box-hover-wrapper">
                                                        <!-- Learning Card -->
                                                        <div class="swiper-slide">
                                                            <div class="min-h-95 h-auto relative rounded-2xxl p-7.5 z-1 flex flex-col after:absolute after:bg-light after:size-full after:top-0 after:left-0 after:-z-1 after:rounded-2xxl after:mask-none after:mask-bottom-right after:duration-500 icon-bx-wraper box-hover group">
                                                                <div class="mb-auto">
                                                                    <div
                                                                        class="relative size-15 block mb-2.5 text-center">
                                                                        <span>
                                                                            <i
                                                                                class="fa-solid fa-graduation-cap text-5xl text-primary"></i>
                                                                        </span>
                                                                    </div>
                                                                    <span
                                                                        class="absolute right-1.25 top-1.25 w-35 opacity-[0.025]">
                                                                        <i
                                                                            class="fa-solid fa-graduation-cap text-[60px]"></i>
                                                                    </span>
                                                                    <div class="overflow-hidden">
                                                                        <h3 class="text-xl font-bold mb-3">Learning</h3>
                                                                        <ul>
                                                                            <li><a class="n_links"
                                                                                    href="<?= $app_path ?>comingsoon.php">Training
                                                                                    Programs</a>
                                                                            </li>
                                                                            <li><a class="n_links"
                                                                                    href="<?= $app_path ?>comingsoon.php">Workshops</a>
                                                                            </li>
                                                                            <li><a class="n_links"
                                                                                    href="<?= $app_path ?>comingsoon.php">Knowledge
                                                                                    Sharing</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    class="relative pt-5 mt-5 mr-12.5 before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-linear-(--icon-bx-footer-gradient) before:duration-500 before:bg-[length:10px_1px] before:bg-repeat-x">
                                                                    <span
                                                                        class="text-sm text-secondary flex items-center gap-2 leading-[1.2]">
                                                                        <i
                                                                            class="fa fa-circle text-tiny text-primary"></i>
                                                                        Read More
                                                                    </span>
                                                                    <a href="<?= $app_path ?>comingsoon.php"
                                                                        aria-label="Read more about Learning services"
                                                                        class="btn btn-primary btn-square shadow-btn-squre !absolute -right-20 -bottom-7.5 !text-xl !rounded-full">
                                                                        <i class="feather icon-arrow-up-right group-hover:animate-toTopRight"
                                                                            aria-hidden="true"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <!-- Events Card -->
                                                        <div class="swiper-slide">
                                                            <div class="min-h-95 h-auto relative rounded-2xxl p-7.5 z-1 flex flex-col after:absolute after:bg-light after:size-full after:top-0 after:left-0 after:-z-1 after:rounded-2xxl after:mask-none after:mask-bottom-right after:duration-500 icon-bx-wraper box-hover group">
                                                                <div class="mb-auto">
                                                                    <div
                                                                        class="relative size-15 block mb-2.5 text-center">
                                                                        <span>
                                                                            <i
                                                                                class="fa-solid fa-calendar-days text-5xl text-primary"></i>
                                                                        </span>
                                                                    </div>
                                                                    <span
                                                                        class="absolute right-1.25 top-1.25 w-35 opacity-[0.025]">
                                                                        <i
                                                                            class="fa-solid fa-calendar-days text-[60px]"></i>
                                                                    </span>
                                                                    <div class="overflow-hidden">
                                                                        <h3 class="text-xl font-bold mb-3">Events</h3>
                                                                        <ul>
                                                                            <li><a class="n_links"
                                                                                    href="https://www.spsnet.com/service-detail/events/events/events-services/">Events
                                                                                    Services</a>
                                                                            </li>
                                                                            <li><a class="n_links"
                                                                                    href="https://www.spsnet.com/service-detail/events/events/virtual-platform-training/">Virtual
                                                                                    Platform Training</a>
                                                                            </li>
                                                                            <li><a class="n_links"
                                                                                    href="https://www.spsnet.com/service-detail/events/events/recording-editing/">Recording
                                                                                    &amp; Editing</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    class="relative pt-5 mt-5 mr-12.5 before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-linear-(--icon-bx-footer-gradient) before:duration-500 before:bg-[length:10px_1px] before:bg-repeat-x">
                                                                    <span
                                                                        class="text-sm text-secondary flex items-center gap-2 leading-[1.2]">
                                                                        <i
                                                                            class="fa fa-circle text-tiny text-primary"></i>
                                                                        Read More
                                                                    </span>
                                                                    <a href="<?= $app_path ?>comingsoon.php"
                                                                        aria-label="Read more about Events"
                                                                        class="btn btn-primary btn-square shadow-btn-squre !absolute -right-20 -bottom-7.5 !text-xl !rounded-full">
                                                                        <i class="feather icon-arrow-up-right group-hover:animate-toTopRight"
                                                                            aria-hidden="true"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <span class="swiper-notification" aria-live="assertive"
                                                        aria-atomic="true"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section class="home-deferred relative lg:pt-20 lg:pb-10 pt-12.5 pb-5 bg-secondary min-h-[500px]">
        <div class="absolute inset-0">
            <img src="<?= $app_path ?>assets/images/background/bg1.webp" alt="" aria-hidden="true"
                class="w-full h-full object-cover opacity-10" loading="lazy" decoding="async">
        </div>

        <div class="relative container mx-auto text-center z-10">
            <h3 class="text-white text-3xl lg:text-3xl font-semibold mb-2">Our Startups</h3>
            <p class="text-white text-lg lg:text-xl font-normal">
                Digital solutions we have built for ourselves and our customers
            </p>

            <p class="text-white text-base lg:text-lg mb-10">
                We develop AI-based solutions for corporate & startups. From strategy to execution, we guide our clients
                through their next digital transformation leveraging technologies like Data Analytics, Natural Language
                Processing, Computer Vision, Machine Learning, Deep Learning & IoT.
            </p>
        </div>
    </section>

    <section class="home-deferred">
        <div class="xl:py-17.5 md:py-10 py-7.5 bg-light">
            <div class="container">
                <div class="row box-hover-wrapper">
                    <!-- GateKeyper -->
                    <div class="xl:w-1/4 md:w-1/2 w-full mb-7.5">
                        <div
                            class="relative rounded-2xxl p-7.5 z-1 h-full flex flex-col after:absolute after:bg-white after:size-full after:top-0 after:left-0 after:-z-1 after:rounded-2xxl after:duration-500 icon-bx-wraper [.box-hover.active]:after:bg-primary box-hover group active">
                            <div class="mb-auto">
                                <div class="relative size-15 block mb-7.5">
                                    <span class="[.box-hover.active_&]:[--color-primary:#fff]">
                                        <img src="<?= $app_path ?>assets/images/spsimg/products/g.webp"
                                            alt="GateKeyper Icon" class="size-full object-contain" / loading="lazy" decoding="async">
                                    </span>
                                </div>
                                <span class="absolute right-1.25 top-1.25 w-35 opacity-[0.025]">
                                    <img src="<?= $app_path ?>assets/images/spsimg/products/g.webp"
                                        alt="Background AI Icon" class="w-full h-full object-cover" / loading="lazy" decoding="async">
                                </span>
                                <div class="overflow-hidden">
                                    <h4 class="text-xl font-bold mb-3 [.box-hover.active_&]:text-white">GateKeyper</h4>
                                    <p class="text-2sm font-light mb-0 [.box-hover.active_&]:text-white">
                                        Dennis Beam, who held a patent on the safety of heavy equipment, wanted to build
                                        an app to ensure safety of professional operators.
                                    </p>
                                </div>
                            </div>
                            <div
                                class="relative pt-5 mt-auto mr-12.5 duration-500 before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-linear-(--icon-bx-footer-gradient) [.box-hover.active_&]:before:bg-linear-(--icon-bx-footer-white-gradient) before:duration-500 before:bg-[length:10px_1px] before:bg-repeat-x">
                                <span
                                    class="text-sm text-secondary flex items-center gap-2 leading-[1.2] [.box-hover.active_&]:text-white">
                                    <i
                                        class="fa fa-circle text-tiny text-primary duration-500 [.box-hover.active_&]:text-secondary"></i>
                                    Read More
                                </span>
                                <a href="<?= $app_path ?>comingsoon.php" aria-label="Read more about GateKeyper"
                                    class="btn btn-primary btn-square shadow-btn-squre !absolute -right-20 -bottom-7.5 !text-xl !rounded-full">
                                    <i class="feather icon-arrow-up-right group-hover:animate-toTopRight"
                                        aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- CREyield -->
                    <div class="xl:w-1/4 md:w-1/2 w-full mb-7.5">
                        <div
                            class="relative rounded-2xxl p-7.5 z-1 h-full flex flex-col after:absolute after:bg-white after:size-full after:top-0 after:left-0 after:-z-1 after:rounded-2xxl after:duration-500 icon-bx-wraper [.box-hover.active]:after:bg-primary box-hover group">
                            <div class="mb-auto">
                                <div class="relative size-15 block mb-7.5">
                                    <span class="[.box-hover.active_&]:[--color-primary:#fff]">
                                        <img src="<?= $app_path ?>assets/images/spsimg/products/creyield.webp" alt="CREyield Icon"
                                            class="size-full object-contain" / loading="lazy" decoding="async">
                                    </span>
                                </div>
                                <span class="absolute right-1.25 top-1.25 w-35 opacity-[0.025]">
                                    <img src="<?= $app_path ?>assets/images/spsimg/products/creyield.webp" alt="CREyield Background"
                                        class="w-full h-full object-cover" / loading="lazy" decoding="async">
                                </span>
                                <div class="overflow-hidden">
                                    <h4 class="text-xl font-bold mb-3 [.box-hover.active_&]:text-white">CREyield</h4>
                                    <p class="text-2sm font-light mb-0 [.box-hover.active_&]:text-white">
                                        CREyield streamlines real estate investment analytics and reporting for better
                                        decision-making.
                                    </p>
                                </div>
                            </div>
                            <div
                                class="relative pt-5 mt-auto mr-12.5 duration-500 before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-linear-(--icon-bx-footer-gradient) [.box-hover.active_&]:before:bg-linear-(--icon-bx-footer-white-gradient) before:duration-500 before:bg-[length:10px_1px] before:bg-repeat-x">
                                <span
                                    class="text-sm text-secondary flex items-center gap-2 leading-[1.2] [.box-hover.active_&]:text-white">
                                    <i
                                        class="fa fa-circle text-tiny text-primary duration-500 [.box-hover.active_&]:text-secondary"></i>
                                    Read More
                                </span>
                                <a href="<?= $app_path ?>comingsoon.php" aria-label="Read more about CREyield"
                                    class="btn btn-primary btn-square shadow-btn-squre !absolute -right-20 -bottom-7.5 !text-xl !rounded-full">
                                    <i class="feather icon-arrow-up-right group-hover:animate-toTopRight"
                                        aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- CSM -->
                    <div class="xl:w-1/4 md:w-1/2 w-full mb-7.5">
                        <div
                            class="relative rounded-2xxl p-7.5 z-1 h-full flex flex-col after:absolute after:bg-white after:size-full after:top-0 after:left-0 after:-z-1 after:rounded-2xxl after:duration-500 icon-bx-wraper [.box-hover.active]:after:bg-primary box-hover group">
                            <div class="mb-auto">
                                <div class="relative size-15 block mb-7.5">
                                    <span class="[.box-hover.active_&]:[--color-primary:#fff]">
                                        <img src="<?= $app_path ?>assets/images/spsimg/products/csm.webp" alt="CSM Icon"
                                            class="size-full object-contain" / loading="lazy" decoding="async">
                                    </span>
                                </div>
                                <span class="absolute right-1.25 top-1.25 w-35 opacity-[0.025]">
                                    <img src="<?= $app_path ?>assets/images/spsimg/products/csm.webp" alt="CSM Background"
                                        class="w-full h-full object-cover" / loading="lazy" decoding="async">
                                </span>
                                <div class="overflow-hidden">
                                    <h4 class="text-xl font-bold mb-3 [.box-hover.active_&]:text-white">CSM</h4>
                                    <p class="text-2sm font-light mb-0 [.box-hover.active_&]:text-white">
                                        CSM enables efficient customer service management with AI-driven insights and
                                        automation.
                                    </p>
                                </div>
                            </div>
                            <div
                                class="relative pt-5 mt-auto mr-12.5 duration-500 before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-linear-(--icon-bx-footer-gradient) [.box-hover.active_&]:before:bg-linear-(--icon-bx-footer-white-gradient) before:duration-500 before:bg-[length:10px_1px] before:bg-repeat-x">
                                <span
                                    class="text-sm text-secondary flex items-center gap-2 leading-[1.2] [.box-hover.active_&]:text-white">
                                    <i
                                        class="fa fa-circle text-tiny text-primary duration-500 [.box-hover.active_&]:text-secondary"></i>
                                    Read More
                                </span>
                                <a href="<?= $app_path ?>comingsoon.php" aria-label="Read more about CSM"
                                    class="btn btn-primary btn-square shadow-btn-squre !absolute -right-20 -bottom-7.5 !text-xl !rounded-full">
                                    <i class="feather icon-arrow-up-right group-hover:animate-toTopRight"
                                        aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- MyHealthChart -->
                    <div class="xl:w-1/4 md:w-1/2 w-full mb-7.5">
                        <div
                            class="relative rounded-2xxl p-7.5 z-1 h-full flex flex-col after:absolute after:bg-white after:size-full after:top-0 after:left-0 after:-z-1 after:rounded-2xxl after:duration-500 icon-bx-wraper [.box-hover.active]:after:bg-primary box-hover group">
                            <div class="mb-auto">
                                <div class="relative size-15 block mb-7.5">
                                    <span class="[.box-hover.active_&]:[--color-primary:#fff]">
                                        <img src="<?= $app_path ?>assets/images/spsimg/products/myhealthcard.webp"
                                            alt="MyHealthChart Icon" class="size-full object-contain" / loading="lazy" decoding="async">
                                    </span>
                                </div>
                                <span class="absolute right-1.25 top-1.25 w-35 opacity-[0.025]">
                                    <img src="<?= $app_path ?>assets/images/spsimg/products/myhealthcard.webp"
                                        alt="MyHealthChart Background" class="w-full h-full object-cover" / loading="lazy" decoding="async">
                                </span>
                                <div class="overflow-hidden">
                                    <h4 class="text-xl font-bold mb-3 [.box-hover.active_&]:text-white">MyHealthChart
                                    </h4>
                                    <p class="text-2sm font-light mb-0 [.box-hover.active_&]:text-white">
                                        MyHealthChart provides patients with an integrated view of their health records
                                        and insights.
                                    </p>
                                </div>
                            </div>
                            <div
                                class="relative pt-5 mt-auto mr-12.5 duration-500 before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-linear-(--icon-bx-footer-gradient) [.box-hover.active_&]:before:bg-linear-(--icon-bx-footer-white-gradient) before:duration-500 before:bg-[length:10px_1px] before:bg-repeat-x">
                                <span
                                    class="text-sm text-secondary flex items-center gap-2 leading-[1.2] [.box-hover.active_&]:text-white">
                                    <i
                                        class="fa fa-circle text-tiny text-primary duration-500 [.box-hover.active_&]:text-secondary"></i>
                                    Read More
                                </span>
                                <a href="<?= $app_path ?>comingsoon.php" aria-label="Read more about MyHealthChart"
                                    class="btn btn-primary btn-square shadow-btn-squre !absolute -right-20 -bottom-7.5 !text-xl !rounded-full">
                                    <i class="feather icon-arrow-up-right group-hover:animate-toTopRight"
                                        aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Analytics Dashboard -->
                    <div class="xl:w-1/4 md:w-1/2 w-full mb-7.5">
                        <div
                            class="relative rounded-2xxl p-7.5 z-1 h-full flex flex-col after:absolute after:bg-white after:size-full after:top-0 after:left-0 after:-z-1 after:rounded-2xxl after:duration-500 icon-bx-wraper [.box-hover.active]:after:bg-primary box-hover group">
                            <div class="mb-auto">
                                <div class="relative size-15 block mb-7.5">
                                    <span class="[.box-hover.active_&]:[--color-primary:#fff]">
                                        <img src="<?= $app_path ?>assets/images/spsimg/products/dashboard.webp"
                                            alt="Analytics Dashboard Icon" class="size-full object-contain" / loading="lazy" decoding="async">
                                    </span>
                                </div>
                                <span class="absolute right-1.25 top-1.25 w-35 opacity-[0.025]">
                                    <img src="<?= $app_path ?>assets/images/spsimg/products/dashboard.webp"
                                        alt="Analytics Dashboard Background" class="w-full h-full object-cover" / loading="lazy" decoding="async">
                                </span>
                                <div class="overflow-hidden">
                                    <h4 class="text-xl font-bold mb-3 [.box-hover.active_&]:text-white">Analytics
                                        Dashboard</h4>
                                    <p class="text-2sm font-light mb-0 [.box-hover.active_&]:text-white">
                                        Analytics Dashboard provides actionable insights and visualizations for business
                                        decision-making.
                                    </p>
                                </div>
                            </div>
                            <div
                                class="relative pt-5 mt-auto mr-12.5 duration-500 before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-linear-(--icon-bx-footer-gradient) [.box-hover.active_&]:before:bg-linear-(--icon-bx-footer-white-gradient) before:duration-500 before:bg-[length:10px_1px] before:bg-repeat-x">
                                <span
                                    class="text-sm text-secondary flex items-center gap-2 leading-[1.2] [.box-hover.active_&]:text-white">
                                    <i
                                        class="fa fa-circle text-tiny text-primary duration-500 [.box-hover.active_&]:text-secondary"></i>
                                    Read More
                                </span>
                                <a href="<?= $app_path ?>comingsoon.php"
                                    aria-label="Read more about Analytics Dashboard"
                                    class="btn btn-primary btn-square shadow-btn-squre !absolute -right-20 -bottom-7.5 !text-xl !rounded-full">
                                    <i class="feather icon-arrow-up-right group-hover:animate-toTopRight"
                                        aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- AIMY -->
                    <div class="xl:w-1/4 md:w-1/2 w-full mb-7.5">
                        <div
                            class="relative rounded-2xxl p-7.5 z-1 h-full flex flex-col after:absolute after:bg-white after:size-full after:top-0 after:left-0 after:-z-1 after:rounded-2xxl after:duration-500 icon-bx-wraper [.box-hover.active]:after:bg-primary box-hover group">
                            <div class="mb-auto">
                                <div class="relative size-15 block mb-7.5">
                                    <span class="[.box-hover.active_&]:[--color-primary:#fff]">
                                        <img src="<?= $app_path ?>assets/images/spsimg/products/aimy.webp"
                                            alt="AIMY Icon" class="size-full object-contain" / loading="lazy" decoding="async">
                                    </span>
                                </div>
                                <span class="absolute right-1.25 top-1.25 w-35 opacity-[0.025]">
                                    <img src="<?= $app_path ?>assets/images/spsimg/products/aimy.webp"
                                        alt="AIMY Background" class="w-full h-full object-cover" / loading="lazy" decoding="async">
                                </span>
                                <div class="overflow-hidden">
                                    <h4 class="text-xl font-bold mb-3 [.box-hover.active_&]:text-white">AIMY</h4>
                                    <p class="text-2sm font-light mb-0 [.box-hover.active_&]:text-white">
                                        AIMY is an AI-driven personal assistant that helps businesses automate routine
                                        tasks efficiently.
                                    </p>
                                </div>
                            </div>
                            <div
                                class="relative pt-5 mt-auto mr-12.5 duration-500 before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-linear-(--icon-bx-footer-gradient) [.box-hover.active_&]:before:bg-linear-(--icon-bx-footer-white-gradient) before:duration-500 before:bg-[length:10px_1px] before:bg-repeat-x">
                                <span
                                    class="text-sm text-secondary flex items-center gap-2 leading-[1.2] [.box-hover.active_&]:text-white">
                                    <i
                                        class="fa fa-circle text-tiny text-primary duration-500 [.box-hover.active_&]:text-secondary"></i>
                                    Read More
                                </span>
                                <a href="<?= $app_path ?>comingsoon.php" aria-label="Read more about AIMY"
                                    class="btn btn-primary btn-square shadow-btn-squre !absolute -right-20 -bottom-7.5 !text-xl !rounded-full">
                                    <i class="feather icon-arrow-up-right group-hover:animate-toTopRight"
                                        aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- HerDomain -->
                    <div class="xl:w-1/4 md:w-1/2 w-full mb-7.5">
                        <div
                            class="relative rounded-2xxl p-7.5 z-1 h-full flex flex-col after:absolute after:bg-white after:size-full after:top-0 after:left-0 after:-z-1 after:rounded-2xxl after:duration-500 icon-bx-wraper [.box-hover.active]:after:bg-primary box-hover group">
                            <div class="mb-auto">
                                <div class="relative size-15 block mb-7.5">
                                    <span class="[.box-hover.active_&]:[--color-primary:#fff]">
                                        <img src="<?= $app_path ?>assets/images/spsimg/products/herdomain.webp"
                                            alt="HerDomain Icon" class="size-full object-contain" / loading="lazy" decoding="async">
                                    </span>
                                </div>
                                <span class="absolute right-1.25 top-1.25 w-35 opacity-[0.025]">
                                    <img src="<?= $app_path ?>assets/images/spsimg/products/herdomain.webp"
                                        alt="HerDomain Background" class="w-full h-full object-cover" / loading="lazy" decoding="async">
                                </span>
                                <div class="overflow-hidden">
                                    <h4 class="text-xl font-bold mb-3 [.box-hover.active_&]:text-white">HerDomain</h4>
                                    <p class="text-2sm font-light mb-0 [.box-hover.active_&]:text-white">
                                        HerDomain is a platform empowering women entrepreneurs with digital tools and
                                        resources.
                                    </p>
                                </div>
                            </div>
                            <div
                                class="relative pt-5 mt-auto mr-12.5 duration-500 before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-linear-(--icon-bx-footer-gradient) [.box-hover.active_&]:before:bg-linear-(--icon-bx-footer-white-gradient) before:duration-500 before:bg-[length:10px_1px] before:bg-repeat-x">
                                <span
                                    class="text-sm text-secondary flex items-center gap-2 leading-[1.2] [.box-hover.active_&]:text-white">
                                    <i
                                        class="fa fa-circle text-tiny text-primary duration-500 [.box-hover.active_&]:text-secondary"></i>
                                    Read More
                                </span>
                                <a href="<?= $app_path ?>comingsoon.php" aria-label="Read more about HerDomain"
                                    class="btn btn-primary btn-square shadow-btn-squre !absolute -right-20 -bottom-7.5 !text-xl !rounded-full">
                                    <i class="feather icon-arrow-up-right group-hover:animate-toTopRight"
                                        aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Watch Over -->
                    <div class="xl:w-1/4 md:w-1/2 w-full mb-7.5">
                        <div
                            class="relative rounded-2xxl p-7.5 z-1 h-full flex flex-col after:absolute after:bg-white after:size-full after:top-0 after:left-0 after:-z-1 after:rounded-2xxl after:duration-500 icon-bx-wraper [.box-hover.active]:after:bg-primary box-hover group">
                            <div class="mb-auto">
                                <div class="relative size-15 block mb-7.5">
                                    <span class="[.box-hover.active_&]:[--color-primary:#fff]">
                                        <img src="<?= $app_path ?>assets/images/spsimg/products/watchover.webp"
                                            alt="Watch Over Icon" class="size-full object-contain" / loading="lazy" decoding="async">
                                    </span>
                                </div>
                                <span class="absolute right-1.25 top-1.25 w-35 opacity-[0.025]">
                                    <img src="<?= $app_path ?>assets/images/spsimg/products/watchover.webp"
                                        alt="Watch Over Background" class="w-full h-full object-cover" / loading="lazy" decoding="async">
                                </span>
                                <div class="overflow-hidden">
                                    <h4 class="text-xl font-bold mb-3 [.box-hover.active_&]:text-white">Watch Over</h4>
                                    <p class="text-2sm font-light mb-0 [.box-hover.active_&]:text-white">
                                        Watch Over monitors critical systems and processes, providing real-time alerts
                                        and insights.
                                    </p>
                                </div>
                            </div>
                            <div
                                class="relative pt-5 mt-auto mr-12.5 duration-500 before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-linear-(--icon-bx-footer-gradient) [.box-hover.active_&]:before:bg-linear-(--icon-bx-footer-white-gradient) before:duration-500 before:bg-[length:10px_1px] before:bg-repeat-x">
                                <span
                                    class="text-sm text-secondary flex items-center gap-2 leading-[1.2] [.box-hover.active_&]:text-white">
                                    <i
                                        class="fa fa-circle text-tiny text-primary duration-500 [.box-hover.active_&]:text-secondary"></i>
                                    Read More
                                </span>
                                <a href="<?= $app_path ?>comingsoon.php" aria-label="Read more about Watch Over"
                                    class="btn btn-primary btn-square shadow-btn-squre !absolute -right-20 -bottom-7.5 !text-xl !rounded-full">
                                    <i class="feather icon-arrow-up-right group-hover:animate-toTopRight"
                                        aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </section>
    <section class="home-deferred 2xxl:pt-25 2xxl:pb-17.5 md:pt-17.5 md:pb-10 sm:pt-12.5 pt-10 pb-5 relative before:absolute before:left-0 before:top-0 before:size-full before:bg-secondary before:opacity-90 bg-blend-luminosity bg-fixed overflow-hidden bg-no-repeat bg-position-[right_center] bg-cover bg-[url(<?= $app_path ?>assets/images/background/bg1.webp)]">
        <div class="container">
            <div class="row items-center">
                <!-- Image + Experience -->
                <div class="lg:w-1/2 w-full mb-7.5">
                    <div class="relative xl:mr-12.5">
                        <div class="relative overflow-hidden sm:rounded-3xl rounded-xxl">
                            <img loading="lazy" src="<?= $app_path ?>assets/images/spsimg/595.webp" alt="img5"
                                width="600" height="600"
                                class="mask-none mask-center mask-no-repeat mask-size-[99%] w-full" decoding="async" />
                        </div>
                        <div class="absolute right-0 bottom-0 2xxl:w-45.5 sm:w-42.5 w-26.5">
                            <div class="sn:p-6.25 sm:pt-5 p-3.75 rounded-2xl bg-primary text-center">
                                <span class="sm:text-5xxl text-2xxl font-bold text-white"><span class="value"
                                        data-value="20">20</span>+</span>
                                <span class="sm:text-xl text-2xs font-medium mb-0 text-white/80">Years <br />
                                    Driving Innovation</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Content -->
                <div class="lg:w-1/2 w-full mb-7.5">
                    <div class="section-head style-1 mb-7.5">
                        <h2
                            class="xl:text-4xxl sm:text-3xxl text-2xxl font-bold text-white capitalize relative [--bs-gutter-y:40px] mb-0">
                            Organization Trusted SPS Products
                        </h2>
                    </div>

                    <div class="row ![--bs-gutter-y:40px] g-5">

                        <!-- Card 1 -->
                        <div class="sm:w-1/2 max-sm:!mt-5">
                            <div
                                class="relative rounded-2xl p-5 bg-white/5 backdrop-blur-[30px] text-center text-white after:w-px after:h-full after:opacity-20 after:-right-6.5 after:absolute after:-bottom-5 after:bg-linear-(--content-wrapper-gradient) before:w-full before:h-px before:opacity-20 before:-bottom-5 before:-right-6.5 before:absolute before:bg-linear-(--content-wrapper-2-gradient) max-sm:after:hidden max-sm:before:hidden">
                                <div class="mx-auto size-25 rounded-full flex items-center justify-center mb-2.5">
                                    <span>
                                        <img loading="lazy"
                                            src="<?= $app_path ?>assets/images/spsimg/products/azalio.webp" alt="check1"
                                            width="200" height="18" decoding="async" />
                                    </span>
                                </div>
                                <div class="icon-content">
                                    <h3 class="sm:text-lg text-base text-white">
                                        Azalio
                                    </h3>
                                    <p class="text-white/70 text-2sm/normal font-extralight mb-0">
                                        Keep your frontline employees happy, Reward Employees. Track employee
                                        engagement. Manage workforce operations.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Card 2 -->
                        <div class="sm:w-1/2 max-sm:!mt-5">
                            <div
                                class="relative rounded-2xl p-5 bg-white/5 backdrop-blur-[30px] text-center text-white after:w-full after:h-px after:opacity-20 after:-left-6.5 after:absolute after:-bottom-5 after:bg-linear-(--content-wrapper-gradient) max-sm:after:hidden">
                                <div class="mx-auto size-25 rounded-full flex items-center justify-center mb-2.5">
                                    <span>
                                        <img loading="lazy"
                                            src="<?= $app_path ?>assets/images/spsimg/products/myid.webp" alt="check2"
                                            width="200" height="18" decoding="async" />
                                    </span>
                                </div>
                                <div class="icon-content">
                                    <h3 class="sm:text-lg text-base text-white">
                                        MYID Self Verify
                                    </h3>
                                    <p class="text-white/70 text-2sm/normal font-extralight mb-0">
                                        MYID helps organizations allow their employees to manage their corporate
                                        identity through secure and easy-to-use mobile application.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Card 3 -->
                        <div class="sm:w-1/2 max-sm:!mt-5">
                            <div
                                class="relative rounded-2xl p-5 bg-white/5 backdrop-blur-[30px] text-center text-white before:w-px before:h-full before:opacity-20 before:-top-5 before:-right-6.5 before:absolute before:bg-linear-(--content-wrapper-2-gradient) max-sm:before:hidden">
                                <div class="mx-auto size-25 rounded-full flex items-center justify-center mb-2.5">
                                    <span>
                                        <img loading="lazy" src="<?= $app_path ?>assets/images/spsimg/products/csm.webp"
                                            alt="check3" width="80" height="18" decoding="async" />
                                    </span>
                                </div>
                                <div class="icon-content">
                                    <h3 class="sm:text-lg text-base text-white">
                                        CSM
                                    </h3>
                                    <p class="text-white/70 text-2sm/normal font-extralight mb-0">
                                        Protect your business with SOC services, zero-trust security, endpoint defense,
                                        and SIEM/SOAR solutions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Card 4 -->
                        <div class="sm:w-1/2 max-sm:!mt-5">
                            <div
                                class="relative rounded-2xl p-5 bg-white/5 backdrop-blur-[30px] text-center text-white">
                                <div class="mx-auto size-25 rounded-full flex items-center justify-center mb-2.5">
                                    <span>
                                        <img loading="lazy" src="<?= $app_path ?>assets/images/spsimg/products/bms.webp"
                                            alt="check" width="200" height="18" decoding="async" />
                                    </span>
                                </div>
                                <div class="icon-content">
                                    <h3 class="sm:text-lg text-base text-white">
                                        BMS
                                    </h3>
                                    <p class="text-white/70 text-2sm/normal font-extralight mb-0">
                                        Get real-time insights into every aspect of your company’s performance, optimize
                                        processes and streamline business with our Business Management System.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div> <!-- /row -->
                </div>
            </div>
        </div>
    </section>
    <section class="home-deferred 2xxl:pt-25 md:pt-17.5 sm:pt-12.5 pt-10 bg-light z-2 bg-[url(<?= $app_path ?>assets/images/background/bg5.webp)]">
        <div class="container">
            <div class="row items-end max-lg:flex-col-reverse">
                <div class="lg:w-1/2 w-full text-center">
                    <img loading="lazy" src="<?= $app_path ?>assets/images/spsimg/s4.webp" alt="img03" width="600"
                        height="600" class="max-lg:mx-auto" decoding="async" />
                </div>
                <div class="lg:w-1/2 w-full">
                    <div class="relative lg:pl-12.5 xl:ml-15 lg:-mb-10 mb-7.5">
                        <div
                            class="[writing-mode:tb] -rotate-180 rounded-tr-2xxl rounded-br-2xxl text-white text-center px-7.5 py-2.5 text-lg uppercase font-semibold bg-secondary w-12.5 flex items-center justify-center absolute left-0 top-11.25 max-lg:hidden">
                            Appointment Now
                        </div>
                        <div
                            class="form-primary-panel sm:rounded-3xl rounded-xxl xl:py-12.5 xl:px-10 py-8.75 px-7.5 bg-primary bg-cover relative"
                            style="--form-panel-bg:url(<?= $app_path ?>assets/images/background/bg02.webp)">
                            <div class="sm:mb-7.5 mb-5">
                                <h2 class="sm:text-2xxl text-xl text-white mb-0">
                                    Manage Your
                                    <span class="text-secondary font-bold">IT Services</span>

                                    <br />
                                    Request Software Solutions
                                </h2>
                            </div>
                            <form action="assets/script/contact_smtp.php" class="dzForm" method="POST">
                                <input type="hidden" class="form-control" name="dzToDo" value="Appointment" />
                                <input type="hidden" class="form-control" name="reCaptchaEnable" value="0" />
                                <div class="dzFormMsg"></div>
                                <div class="row">
                                    <div class="sm:w-1/2 w-full mb-7.5">
                                        <div class="relative">
                                            <input name="dzName" type="text"
                                                class="py-3.75 text-lg text-left text-white border-b-2 border-white duration-300 focus:border-white placeholder:text-white/0 peer w-full"
                                                id="inputYourName" placeholder="Your Name" />
                                            <label
                                                class="absolute left-0 top-3.75 text-lg text-white duration-300 transform -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5.5 peer-focus:text-white peer-placeholder-shown:text-white pointer-events-none"
                                                for="inputYourName">Your Name</label>
                                        </div>
                                    </div>
                                    <div class="sm:w-1/2 w-full mb-7.5">
                                        <div class="relative">
                                            <input name="dzEmail" type="email"
                                                class="py-3.75 text-lg text-left text-white border-b-2 border-white duration-300 focus:border-white placeholder:text-white/0 peer w-full"
                                                id="inputYourEmail" placeholder="Your Email" />
                                            <label
                                                class="absolute left-0 top-3.75 text-lg text-white duration-300 transform -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5.5 peer-focus:text-white peer-placeholder-shown:text-white pointer-events-none"
                                                for="inputYourEmail">Your Email</label>
                                        </div>
                                    </div>
                                    <div class="sm:w-1/2 w-full mb-7.5">
                                        <div class="relative">
                                            <input name="dzPhoneNumber" type="text"
                                                class="py-3.75 text-lg text-left text-white border-b-2 border-white duration-300 focus:border-white placeholder:text-white/0 peer w-full dz-number"
                                                id="inputPhoneNumber" placeholder="Phone Number" />
                                            <label
                                                class="absolute left-0 top-3.75 text-lg text-white duration-300 transform -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5.5 peer-focus:text-white peer-placeholder-shown:text-white pointer-events-none"
                                                for="inputPhoneNumber">Phone Number</label>
                                        </div>
                                    </div>
                                    <div class="sm:w-1/2 w-full mb-7.5">
                                        <div class="relative custom-select">
                                            <div data-label="Services">
                                                <select name="dzOther[Services]" class="dynamic-select"
                                                    id="sortingSelect">
                                                    <option value="AI Solutions">AI Solutions</option>
                                                    <option value="Cloud Services">Cloud Services</option>
                                                    <option value="Cybersecurity">Cybersecurity</option>
                                                    <option value="Software Development">Software Development</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="w-full mb-7.5">
                                        <div class="relative">
                                            <textarea name="dzMessage"
                                                class="py-3.75 text-lg text-left text-white border-b-2 border-white duration-300 focus:border-white placeholder:text-white/0 w-full peer"
                                                id="inputMessage" rows="6" placeholder="Select Service"></textarea>
                                            <label
                                                class="absolute left-0 top-3.75 text-lg text-white duration-300 transform -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5.5 peer-focus:text-white peer-placeholder-shown:text-white pointer-events-none"
                                                for="inputMessage">Message</label>
                                        </div>
                                    </div>
                                    <div class="w-full">
                                        <button type="submit" name="submit" value="submit"
                                            class="btn btn-lg btn-icon btn-white group">
                                            Appointment
                                            <span
                                                class="size-11 min-w-11 bg-secondary text-white rounded-2lg inline-flex items-center justify-center -my-2.75 -mr-4.5 ml-3 duration-500 group-hover:bg-white group-hover:text-secondary"><i
                                                    class="feather icon-arrow-right group-hover:animate-toRightFromLeft"></i></span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="home-deferred clearfix pt-12.5 relative before:absolute before:left-0 before:top-0 before:size-full before:bg-secondary before:opacity-90 bg-primary bg-blend-multiply overflow-hidden bg-position-[right_center] bg-cover bg-[url(<?= $app_path ?>assets/images/background/bg3.webp)]">
        <div class="container relative z-1">
            <div class="row max-xl:flex-col-reverse">
                <div class="xl:w-1/2 w-full">
                    <div class="relative xl:w-162.5 sm:w-137.5 w-full max-xl:mx-auto max-xl:mt-7.5">
                        <div class="xl:pr-37.5 lg:pr-20 sm:pr-12.5 relative overflow-hidden">
                            <img loading="lazy" src="<?= $app_path ?>assets/images/spsimg/ai.webp" alt="Tech Image"
                                width="525" height="655" class="w-full" decoding="async" />
                        </div>

                        <!-- Animated Circles -->
                        <div
                            class="xxl:w-162.5 sm:w-150 w-87.5 aspect-square absolute -z-1 sm:-bottom-25 bottom-0 sm:-left-15 -left-2.5">
                            <span
                                class="w-4/5 rounded-full block absolute top-1/2 left-1/2 aspect-square border-2 border-white/10 animate-circleWrapper">
                                <span
                                    class="bg-primary block size-2.5 rounded-full absolute right-17.5 top-17.5"></span>
                                <span class="bg-primary block size-2.5 rounded-full absolute left-2.5 top-40.75"></span>
                                <span
                                    class="bg-primary block size-2.5 rounded-full absolute right-3.75 top-37.5"></span>
                            </span>
                            <span
                                class="w-full rounded-full block absolute top-1/2 left-1/2 aspect-square border-2 border-white/10 animate-circleWrapper">
                                <span class="bg-primary block size-2.5 rounded-full absolute right-19.5 top-25"></span>
                                <span
                                    class="bg-primary block size-2.5 rounded-full absolute right-0.5 bottom-62.5"></span>
                                <span class="bg-primary block size-2.5 rounded-full absolute left-0 top-62.5"></span>
                            </span>
                        </div>

                        <!-- Side Box — 150k+ Deployments -->
                        <div class="absolute 2xxl:-left-20 -left-10 bottom-16.25 max-sm:hidden" data-speed="0.95">
                            <div
                                class="rounded-6xl shadow-1 flex items-center justify-center bg-white p-3.75 pr-3.75 animate-move3">
                                <div class="flex">
                                    <img class="size-10 rounded-full border-white border-2 first:ml-0 -ml-3"
                                        src="<?= $app_path ?>assets/images/avatar/small/avatar1.webp" alt="avatar1" / loading="lazy" decoding="async">
                                    <img class="size-10 rounded-full border-white border-2 first:ml-0 -ml-3"
                                        src="<?= $app_path ?>assets/images/avatar/small/avatar2.webp" alt="avatar2" / loading="lazy" decoding="async">
                                    <img class="size-10 rounded-full border-white border-2 first:ml-0 -ml-3"
                                        src="<?= $app_path ?>assets/images/avatar/small/avatar3.webp" alt="avatar3" / loading="lazy" decoding="async">
                                    <img class="size-10 rounded-full border-white border-2 first:ml-0 -ml-3"
                                        src="<?= $app_path ?>assets/images/avatar/small/avatar4.webp" alt="avatar4" / loading="lazy" decoding="async">
                                </div>
                                <div class="clearfix ms-2">
                                    <span
                                        class="sm:text-lg text-base leading-[1.2] font-bold block text-primary">150k+</span>
                                    <span class="text-sm block">Deployments Worldwide</span>
                                </div>
                            </div>
                        </div>

                        <!-- Right Floating Review -->
                        <div class="absolute xl:right-20 md:-right-10 right-0 bottom-55 max-sm:hidden" data-speed="1.1">
                            <div class="shadow-info-widget-3 w-68.75 rounded-2xxl bg-white p-5 animate-move1">
                                <div class="flex gap-3 mb-3">
                                    <div class="size-11.25 overflow-hidden rounded-full">
                                        <img loading="lazy"
                                            src="<?= $app_path ?>assets/images/avatar/small/avatar5.webp"
                                            alt="Tech Leader" decoding="async" />
                                    </div>
                                    <div class="widget-content">
                                        <span class="text-secondary font-bold block">Farhan Akmal</span>
                                        <ul class="flex gap-1.25">
                                            <li class="text-base text-star"><i class="fa fa-star"></i></li>
                                            <li class="text-base text-star"><i class="fa fa-star"></i></li>
                                            <li class="text-base text-star"><i class="fa fa-star"></i></li>
                                            <li class="text-base text-star"><i class="fa fa-star"></i></li>
                                            <li class="text-base text-star"><i class="fa fa-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                                <p class="text-2xs/[1.4] mb-0">
                                    "A powerful, scalable, and secure AI-driven platform that has transformed our
                                    digital
                                    operations."
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                <!-- Text + Slider -->
                <div class="xl:w-1/2 lg:w-5/6 w-full self-center mb-7.5">
                    <div class="sm:mb-7.5 mb-5">
                        <h2 class="xl:text-4xxl sm:text-3xxl text-2xxl font-bold capitalize text-white mb-0">
                            Real Teams. Real Innovation. And Our Impact.
                        </h2>
                    </div>

                    <div class="relative">
                        <div class="swiper testimonial-swiper1">
                            <div class="swiper-wrapper">

                                <!-- SLIDE 1 -->
                                <div class="swiper-slide">
                                    <div
                                        class="flex bg-white sm:rounded-3xl rounded-xxl overflow-hidden relative max-sm:flex-col">

                                        <div
                                            class="sm:min-w-52.5 sm:w-52.5 w-full relative overflow-hidden max-sm:flex items-center max-sm:p-5 max-sm:pb-0">
                                            <div class="relative">
                                                <img loading="lazy"
                                                    src="<?= $app_path ?>assets/images/testimonial/img1.webp"
                                                    alt="AI Developer" class="max-sm:w-17.5 max-sm:rounded-lg" decoding="async" />
                                            </div>
                                            <div class="sm:bg-light sm:p-3 p-3.75 sm:text-center">
                                                <span class="sm:text-lg text-base text-secondary font-semibold block">
                                                    Kenneth Fong
                                                </span>
                                                <span class="text-sm text-primary">AI Developer</span>
                                            </div>
                                        </div>

                                        <div
                                            class="sm:py-10 sm:px-7.5 p-5 flex flex-col items-center justify-center relative z-1 after:bg-qoute after:w-33.75 after:h-25 after:absolute after:right-7.5 after:bottom-8.75 after:-z-1 after:opacity-5">
                                            <div class="relative z-1">
                                                <h3 class="md:text-xl text-lg">Outstanding AI Performance</h3>
                                                <p class="text-secondary leading-[1.7] mb-0 max-md:text-sm">
                                                    Our AI engine improved processing speeds by 200%, allowing teams to
                                                    automate workflows, detect threats faster, and scale cloud workloads
                                                    effortlessly.
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <!-- SLIDE 2 -->
                                <div class="swiper-slide">
                                    <div
                                        class="flex bg-white sm:rounded-3xl rounded-xxl overflow-hidden relative max-sm:flex-col">

                                        <div
                                            class="sm:min-w-52.5 sm:w-52.5 w-full relative overflow-hidden max-sm:flex items-center max-sm:p-5 max-sm:pb-0">
                                            <div class="relative">
                                                <img loading="lazy"
                                                    src="<?= $app_path ?>assets/images/testimonial/img2.webp"
                                                    alt="Cloud Architect" class="max-sm:w-17.5 max-sm:rounded-lg" decoding="async" />
                                            </div>
                                            <div class="sm:bg-light sm:p-3 p-3.75 sm:text-center">
                                                <span class="sm:text-lg text-base text-secondary font-semibold block">
                                                    Sarah Liu
                                                </span>
                                                <span class="text-sm text-primary">Cloud Architect</span>
                                            </div>
                                        </div>

                                        <div
                                            class="sm:py-10 sm:px-7.5 p-5 flex flex-col items-center justify-center relative z-1 after:bg-qoute after:w-33.75 after:h-25 after:absolute after:right-7.5 after:bottom-8.75 after:-z-1 after:opacity-5">
                                            <div class="relative z-1">
                                                <h3 class="md:text-xl text-lg">Cloud Scalability</h3>
                                                <p class="text-secondary leading-[1.7] mb-0 max-md:text-sm">
                                                    By shifting to our cloud-native framework, their organization
                                                    reduced
                                                    infrastructure costs by 40% and achieved near-zero downtime
                                                    performance.
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <!-- SLIDE 3 -->
                                <div class="swiper-slide">
                                    <div
                                        class="flex bg-white sm:rounded-3xl rounded-xxl overflow-hidden relative max-sm:flex-col">

                                        <div
                                            class="sm:min-w-52.5 sm:w-52.5 w-full relative overflow-hidden max-sm:flex items-center max-sm:p-5 max-sm:pb-0">
                                            <div class="relative">
                                                <img loading="lazy"
                                                    src="<?= $app_path ?>assets/images/testimonial/img2.webp"
                                                    alt="Cybersecurity Analyst"
                                                    class="max-sm:w-17.5 max-sm:rounded-lg" decoding="async" />
                                            </div>
                                            <div class="sm:bg-light sm:p-3 p-3.75 sm:text-center">
                                                <span class="sm:text-lg text-base text-secondary font-semibold block">
                                                    Farhan Akmal
                                                </span>
                                                <span class="text-sm text-primary">Cybersecurity Analyst</span>
                                            </div>
                                        </div>

                                        <div
                                            class="sm:py-10 sm:px-7.5 p-5 flex flex-col items-center justify-center relative z-1 after:bg-qoute after:w-33.75 after:h-25 after:absolute after:right-7.5 after:bottom-8.75 after:-z-1 after:opacity-5">
                                            <div class="relative z-1">
                                                <h3 class="md:text-xl text-lg">Threat Detection Excellence</h3>
                                                <p class="text-secondary leading-[1.7] mb-0 max-md:text-sm">
                                                    Our threat-intelligence engine helped them block 98% of attacks in
                                                    real
                                                    time, improving security posture across the entire enterprise
                                                    network.
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                        <!-- Slider Arrows -->
                        <div
                            class="swiper1-button-prev absolute top-1/2 -translate-y-1/2 -left-17.5 opacity-20 cursor-pointer duration-500 hover:opacity-100 max-lg:hidden">
                            <img src="<?= $app_path ?>assets/images/svg/arrow-left.svg" alt="Previous testimonial" width="32" height="32" decoding="async" />
                        </div>

                        <div
                            class="swiper1-button-next absolute top-1/2 -translate-y-1/2 -right-17.5 opacity-20 cursor-pointer duration-500 hover:opacity-100 max-lg:hidden">
                            <img src="<?= $app_path ?>assets/images/svg/arrow-right.svg" alt="Next testimonial" width="32" height="32" decoding="async" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>


    <section class="home-deferred 2xxl:pt-25 2xxl:pb-17.5 md:pt-17.5 md:pb-10 sm:pt-12.5 pt-10 pb-5">
        <div class="container">
            <div class="row content-wrapper style-3">
                <div class="xl:w-1/3 w-full mb-7.5 pe-xl-4">
                    <div class="sm:mb-7.5 mb-5">
                        <h2 class="xl:text-4xxl sm:text-3xxl text-2xxl font-bold capitalize mb-0">
                            How It Works
                        </h2>
                        <p class="sm:text-lg text-base leading-[1.6] font-light">
                            SPS helps organizations accelerate their Digital Transformation journey by adopting Cloud,
                            AI, Cybersecurity, and other emerging technologies through a structured, scalable approach.
                        </p>
                    </div>
                    <div class="row">
                        <div class="xl:w-full md:w-1/2 w-full">
                            <div class="relative flex items-center gap-3.75 mb-5 group">
                                <div
                                    class="size-15 flex items-center text-primary text-2xl justify-center bg-light rounded-full duration-500 group-hover:bg-primary group-hover:text-white relative before:absolute before:top-0 before:left-0 before:size-full before:bg-primary before:scale-0 before:opacity-10 before:rounded-full group-hover:before:scale-[1.3] after:absolute after:top-0 after:left-0 after:size-full after:bg-primary after:scale-0 after:opacity-5 after:rounded-full group-hover:after:scale-[1.6]">
                                    <span><i class="feather icon-clock flex"></i></span>
                                </div>
                                <div class="overflow-hidden">
                                    <h3 class="text-xl mb-0 font-medium">
                                        Schedule Consultation
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div class="xl:w-full md:w-1/2 w-full">
                            <div class="relative flex items-center gap-3.75 mb-5 group">
                                <div
                                    class="size-15 flex items-center text-primary text-2xl justify-center bg-light rounded-full duration-500 group-hover:bg-primary group-hover:text-white relative before:absolute before:top-0 before:left-0 before:size-full before:bg-primary before:scale-0 before:opacity-10 before:rounded-full group-hover:before:scale-[1.3] after:absolute after:top-0 after:left-0 after:size-full after:bg-primary after:scale-0 after:opacity-5 after:rounded-full group-hover:after:scale-[1.6]">
                                    <span><i class="flaticon-list flex"></i></span>
                                </div>
                                <div class="overflow-hidden">
                                    <h3 class="text-xl mb-0 font-medium">
                                        Plan & Strategize
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div class="xl:w-full md:w-1/2 w-full">
                            <div class="relative flex items-center gap-3.75 mb-5 group">
                                <div
                                    class="size-15 flex items-center text-primary text-2xl justify-center bg-light rounded-full duration-500 group-hover:bg-primary group-hover:text-white relative before:absolute before:top-0 before:left-0 before:size-full before:bg-primary before:scale-0 before:opacity-10 before:rounded-full group-hover:before:scale-[1.3] after:absolute after:top-0 after:left-0 after:size-full after:bg-primary after:scale-0 after:opacity-5 after:rounded-full group-hover:after:scale-[1.6]">
                                    <span><i class="flaticon-stethoscope flex"></i></span>
                                </div>
                                <div class="overflow-hidden">
                                    <h3 class="text-xl mb-0 font-medium">
                                        Execute Solutions
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div class="xl:w-full md:w-1/2 w-full">
                            <div class="relative flex items-center gap-3.75 mb-5 group">
                                <div
                                    class="size-15 flex items-center text-primary text-2xl justify-center bg-light rounded-full duration-500 group-hover:bg-primary group-hover:text-white relative before:absolute before:top-0 before:left-0 before:size-full before:bg-primary before:scale-0 before:opacity-10 before:rounded-full group-hover:before:scale-[1.3] after:absolute after:top-0 after:left-0 after:size-full after:bg-primary after:scale-0 after:opacity-5 after:rounded-full group-hover:after:scale-[1.6]">
                                    <span><i class="flaticon-hand-holding-usd flex"></i></span>
                                </div>
                                <div class="overflow-hidden">
                                    <h3 class="text-xl mb-0 font-medium">
                                        Deliver Results & Payment
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="xl:w-2/3 w-full">
                    <div class="relative pb-10">
                        <div
                            class="sm:rounded-xxl rounded-lg lg:h-127.5 md:h-105 sm:h-80 h-62.5 bg-light relative overflow-hidden">
                            <img loading="lazy" src="<?= $app_path ?>assets/images/spsimg/867.webp"
                                alt="SPS Tech Solutions" width="1200" height="715" class="size-full object-cover" decoding="async" />
                            <div
                                class="absolute bottom-0 left-0 bg-white pt-3.75 pr-3.75 rounded-se-2xxl before:bg-rounded-corner before:size-6.25 before:absolute before:bg-no-repeat before:bg-center before:bg-size-[100%] before:left-0 before:-top-6.25 after:bg-rounded-corner after:size-6.25 after:absolute after:bg-no-repeat after:bg-center after:bg-size-[100%] after:-right-6.25 after:bottom-0">
                                <a href="<?= $app_path ?>comingsoon.php"
                                    class="btn btn-lg btn-icon btn-secondary btn-shadow group">
                                    Book Appointment
                                    <span
                                        class="size-11 min-w-11 bg-white rounded-2lg text-heading inline-flex items-center justify-center -my-2.75 -mr-4.5 ml-3">
                                        <i class="feather icon-arrow-right group-hover:animate-toRightFromLeft"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div class="md:absolute static bottom-0 2xxl:right-11.25 right-6.25 2xxl:max-w-120 2xxl:w-120 lg:max-w-112.5 lg:w-112.5 md:max-w-87.5 md:w-87.5 w-full max-md:mt-5 max-md:!transform-none"
                            data-speed="0.95">
                            <div class="sm:p-6.25 p-4 rounded-2lg bg-primary">
                                <div class="row g-0">
                                    <div
                                        class="w-1/2 flex relative after:h-full after:w-px after:opacity-50 after:bg-linear-(--vertical-divider-gradient)">
                                        <div class="m-auto text-center">
                                            <span class="lg:text-5xl text-3xl font-bold text-white"><span class="value"
                                                    data-value="180">180</span>+</span>
                                            <span
                                                class="sm:text-lg text-base font-light text-white block">Expert
                                                Specialists</span>
                                        </div>
                                    </div>
                                    <div class="w-1/2 flex">
                                        <div class="m-auto text-center">
                                            <span class="lg:text-5xl text-3xl font-bold text-white"><span class="value"
                                                    data-value="45">45</span>K</span>
                                            <span
                                                class="sm:text-lg text-base font-light text-white block">Happy
                                                Clients</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="home-deferred 2xxl:py-25 xl:py-17.5 sm:py-10 py-7.5 bg-light overflow-hidden">
        <div class="container">
            <div class="row g-0 items-center">
                <div class="xl:w-1/4 2lg:w-1/4">
                    <div class="sm:mb-7.5">
                        <h2 class="xl:text-4xxl sm:text-3xxl text-2xxl font-bold capitalize">
                            Our Technology Partners
                        </h2>
                        <p class="sm:text-lg text-base leading-[1.6] font-light mb-0">
                            We work with world-class technology vendors to deliver secure,
                            scalable, and innovative solutions across Cloud, AI,
                            Cybersecurity, and Enterprise IT.
                        </p>
                    </div>

                    <!-- Partner Filters (Optional) -->
                    <!-- <button type="button"
                        class="btn btn-outline-light !rounded-5xl mr-1.25 mb-2.5 duration-500 hover:bg-primary hover:!text-white">
                        Cloud
                    </button>
                    <button type="button"
                        class="btn btn-outline-light !rounded-5xl mr-1.25 mb-2.5 duration-500 hover:bg-primary hover:!text-white">
                        AI
                    </button>
                    <button type="button"
                        class="btn btn-outline-light !rounded-5xl mr-1.25 mb-2.5 duration-500 hover:bg-primary hover:!text-white">
                        Cybersecurity
                    </button>
                    <button type="button"
                        class="btn btn-outline-light !rounded-5xl mr-1.25 mb-2.5 duration-500 hover:bg-primary hover:!text-white">
                        Networking
                    </button>
                    <button type="button"
                        class="btn btn-outline-light !rounded-5xl mr-1.25 mb-2.5 duration-500 hover:bg-primary hover:!text-white">
                        DevOps
                    </button> -->
                    <!-- <button type="button"
                        class="btn btn-outline-light !rounded-5xl mr-1.25 mb-2.5 duration-500 hover:bg-primary hover:!text-white">
                        View All
                    </button> -->
                </div>

                <div class="lg:w-3/4 2xl:w-3/4">
                    <div class="swiper awards-swiper xl:!ml-12.5 xl:!-mr-87.5 -mr-30 max-xl:mt-7.5">
                        <div class="swiper-wrapper">

                            <!-- Partner 1 -->
                            <div class="swiper-slide">
                                <div
                                    class="flex flex-col justify-center bg-white sm:rounded-xxl rounded-lg md:py-11.25 md:px-8.75 py-8.75 px-6.25 gap-3 items-center text-center dz-img-box h-80">

                                    <div class="flex justify-center sm:w-37.5 w-30 relative overflow-hidden">
                                        <img loading="lazy"
                                            src="<?= $app_path ?>assets/images/spsimg/techpartnersimg/ibm1.webp"
                                            alt="ibm Partner" class="w-full h-full" decoding="async" />
                                    </div>

                                    <div class="dz-content">
                                        <h3 class="md:text-2xl text-xl mb-1.25 font-bold">
                                            IBM Security
                                        </h3>
                                        <p class="md:text-base text-sm mb-2 font-medium">
                                            Identity • Access & Zero Trust Solutions
                                        </p>
                                        <a href="<?= $app_path ?>comingsoon.php"
                                            class="md:text-sm text-2xs text-primary">Learn More</a>
                                    </div>

                                </div>
                            </div>

                            <!-- Partner 2 -->
                            <div class="swiper-slide">
                                <div
                                    class="flex flex-col justify-center bg-white sm:rounded-xxl rounded-lg md:py-11.25 md:px-8.75 py-8.75 px-6.25 gap-3 items-center text-center dz-img-box h-80">

                                    <div class="flex justify-center sm:w-37.5 w-30 relative overflow-hidden">
                                        <img loading="lazy"
                                            src="<?= $app_path ?>assets/images/spsimg/techpartnersimg/lenovo.webp"
                                            alt="ibm Partner" class="w-full h-full" decoding="async" />
                                    </div>

                                    <div class="dz-content">
                                        <h3 class="md:text-2xl text-xl mb-1.25 font-bold">
                                            Lenovo
                                        </h3>
                                        <p class="md:text-base text-sm mb-2 font-medium">
                                            Devices • Infrastructure • Computing
                                        </p>
                                        <a href="<?= $app_path ?>comingsoon.php"
                                            class="md:text-sm text-2xs text-primary">Learn More</a>
                                    </div>

                                </div>
                            </div>
                            <!-- Partner 3 -->
                            <div class="swiper-slide">
                                <div
                                    class="flex flex-col justify-center bg-white sm:rounded-xxl rounded-lg md:py-11.25 md:px-8.75 py-8.75 px-6.25 gap-3 items-center text-center dz-img-box h-80">

                                    <div class="flex justify-center sm:w-37.5 w-30 relative overflow-hidden">
                                        <img loading="lazy"
                                            src="<?= $app_path ?>assets/images/spsimg/techpartnersimg/sap.webp"
                                            alt="ibm Partner" class="w-full h-full" decoding="async" />
                                    </div>

                                    <div class="dz-content">
                                        <h3 class="md:text-2xl text-xl mb-1.25 font-bold">
                                            SAP
                                        </h3>
                                        <p class="md:text-base text-sm mb-2 font-medium">
                                            Enterprise Resource Planning
                                        </p>
                                        <a href="<?= $app_path ?>comingsoon.php"
                                            class="md:text-sm text-2xs text-primary">Learn More</a>
                                    </div>

                                </div>
                            </div>

                            <!-- Partner 5 -->
                            <div class="swiper-slide">
                                <div
                                    class="flex flex-col justify-center bg-white sm:rounded-xxl rounded-lg md:py-11.25 md:px-8.75 py-8.75 px-6.25 gap-3 items-center text-center dz-img-box h-80">

                                    <div class="flex justify-center sm:w-37.5 w-30 relative overflow-hidden">
                                        <img loading="lazy"
                                            src="<?= $app_path ?>assets/images/spsimg/techpartnersimg/red-hat.webp"
                                            alt="ibm Partner" class="w-full h-full" decoding="async" />
                                    </div>

                                    <div class="dz-content">
                                        <h3 class="md:text-2xl text-xl mb-1.25 font-bold">
                                            Red Hat
                                        </h3>
                                        <p class="md:text-base text-sm mb-2 font-medium">
                                            Open Source Cloud
                                        </p>
                                        <a href="<?= $app_path ?>comingsoon.php"
                                            class="md:text-sm text-2xs text-primary">Learn More</a>
                                    </div>

                                </div>
                            </div>

                            <!-- Partner 6 -->
                            <div class="swiper-slide">
                                <div
                                    class="flex flex-col justify-center bg-white sm:rounded-xxl rounded-lg md:py-11.25 md:px-8.75 py-8.75 px-6.25 gap-3 items-center text-center dz-img-box h-80">

                                    <div class="flex justify-center sm:w-37.5 w-30 relative overflow-hidden">
                                        <img loading="lazy"
                                            src="<?= $app_path ?>assets/images/spsimg/techpartnersimg/microsoft.webp"
                                            alt="ibm Partner" class="w-full h-full" decoding="async" />
                                    </div>

                                    <div class="dz-content">
                                        <h3 class="md:text-2xl text-xl mb-1.25 font-bold">
                                            Microsoft
                                        </h3>
                                        <p class="md:text-base text-sm mb-2 font-medium">
                                            Cloud • Security • Productivity Solutions
                                        </p>
                                        <a href="<?= $app_path ?>comingsoon.php"
                                            class="md:text-sm text-2xs text-primary">Learn More</a>
                                    </div>

                                </div>
                            </div>

                            <!-- Partner 7 -->
                            <div class="swiper-slide">
                                <div
                                    class="flex flex-col justify-center bg-white sm:rounded-xxl rounded-lg md:py-11.25 md:px-8.75 py-8.75 px-6.25 gap-3 items-center text-center dz-img-box h-80">

                                    <div class="flex justify-center sm:w-37.5 w-30 relative overflow-hidden">
                                        <img loading="lazy"
                                            src="<?= $app_path ?>assets/images/spsimg/techpartnersimg/google.webp"
                                            alt="ibm Partner" class="w-full h-full" decoding="async" />
                                    </div>

                                    <div class="dz-content">
                                        <h3 class="md:text-2xl text-xl mb-1.25 font-bold">
                                            Google
                                        </h3>
                                        <p class="md:text-base text-sm mb-2 font-medium">
                                            Cloud • Data • Infrastructure
                                        </p>
                                        <a href="<?= $app_path ?>comingsoon.php"
                                            class="md:text-sm text-2xs text-primary">Learn More</a>
                                    </div>

                                </div>
                            </div>

                            <!-- Partner 8 -->
                            <div class="swiper-slide">
                                <div
                                    class="flex flex-col justify-center bg-white sm:rounded-xxl rounded-lg md:py-11.25 md:px-8.75 py-8.75 px-6.25 gap-3 items-center text-center dz-img-box h-80">

                                    <div class="flex justify-center sm:w-37.5 w-30 relative overflow-hidden">
                                        <img loading="lazy"
                                            src="<?= $app_path ?>assets/images/spsimg/techpartnersimg/juniper-networks.webp"
                                            alt="ibm Partner" class="w-full h-full" decoding="async" />
                                    </div>

                                    <div class="dz-content">
                                        <h3 class="md:text-2xl text-xl mb-1.25 font-bold">
                                            Juniper
                                        </h3>
                                        <p class="md:text-base text-sm mb-2 font-medium">
                                            Networking • AI • Routing
                                        </p>
                                        <a href="<?= $app_path ?>comingsoon.php"
                                            class="md:text-sm text-2xs text-primary">Learn More</a>
                                    </div>

                                </div>
                            </div>

                            <div class="swiper-slide">
                                <div
                                    class="flex flex-col justify-center bg-white sm:rounded-xxl rounded-lg md:py-11.25 md:px-8.75 py-8.75 px-6.25 gap-3 items-center text-center dz-img-box h-80">

                                    <div class="flex justify-center sm:w-37.5 w-30 relative overflow-hidden">
                                        <img loading="lazy"
                                            src="<?= $app_path ?>assets/images/spsimg/techpartnersimg/nutanix.webp"
                                            alt="ibm Partner" class="w-full h-full" decoding="async" />
                                    </div>

                                    <div class="dz-content">
                                        <h3 class="md:text-2xl text-xl mb-1.25 font-bold">
                                            Nutanix
                                        </h3>
                                        <p class="md:text-base text-sm mb-2 font-medium">
                                            Hybrid Multicloud Infrastructure
                                        </p>
                                        <a href="<?= $app_path ?>comingsoon.php"
                                            class="md:text-sm text-2xs text-primary">Learn More</a>
                                    </div>

                                </div>
                            </div>

                            <div class="swiper-slide">
                                <div
                                    class="flex flex-col justify-center bg-white sm:rounded-xxl rounded-lg md:py-11.25 md:px-8.75 py-8.75 px-6.25 gap-3 items-center text-center dz-img-box h-80">

                                    <div class="flex justify-center sm:w-37.5 w-30 relative overflow-hidden">
                                        <img loading="lazy"
                                            src="<?= $app_path ?>assets/images/spsimg/techpartnersimg/sophos.webp"
                                            alt="ibm Partner" class="w-full h-full" decoding="async" />
                                    </div>

                                    <div class="dz-content">
                                        <h3 class="md:text-2xl text-xl mb-1.25 font-bold">
                                            Sophos
                                        </h3>
                                        <p class="md:text-base text-sm mb-2 font-medium">
                                            Endpoint • Network Security
                                        </p>
                                        <a href="<?= $app_path ?>comingsoon.php"
                                            class="md:text-sm text-2xs text-primary">Learn More</a>
                                    </div>

                                </div>
                            </div>

                            <div class="swiper-slide">
                                <div
                                    class="flex flex-col justify-center bg-white sm:rounded-xxl rounded-lg md:py-11.25 md:px-8.75 py-8.75 px-6.25 gap-3 items-center text-center dz-img-box h-80">

                                    <div class="flex justify-center sm:w-37.5 w-30 relative overflow-hidden">
                                        <img loading="lazy"
                                            src="<?= $app_path ?>assets/images/spsimg/techpartnersimg/keysight.webp"
                                            alt="ibm Partner" class="w-full h-full" decoding="async" />
                                    </div>

                                    <div class="dz-content">
                                        <h3 class="md:text-2xl text-xl mb-1.25 font-bold">
                                            Keysight
                                        </h3>
                                        <p class="md:text-base text-sm mb-2 font-medium">
                                            Design • Emulation • Test
                                        </p>
                                        <a href="<?= $app_path ?>comingsoon.php"
                                            class="md:text-sm text-2xs text-primary">Learn More</a>
                                    </div>

                                </div>
                            </div>

                            <div class="swiper-slide">
                                <div
                                    class="flex flex-col justify-center bg-white sm:rounded-xxl rounded-lg md:py-11.25 md:px-8.75 py-8.75 px-6.25 gap-3 items-center text-center dz-img-box h-80">

                                    <div class="flex justify-center sm:w-37.5 w-30 relative overflow-hidden">
                                        <img loading="lazy"
                                            src="<?= $app_path ?>assets/images/spsimg/techpartnersimg/okta.webp"
                                            alt="ibm Partner" class="w-full h-full" decoding="async" />
                                    </div>

                                    <div class="dz-content">
                                        <h3 class="md:text-2xl text-xl mb-1.25 font-bold">
                                            Okta
                                        </h3>
                                        <p class="md:text-base text-sm mb-2 font-medium">
                                            Identity • Access Management
                                        </p>
                                        <a href="<?= $app_path ?>comingsoon.php"
                                            class="md:text-sm text-2xs text-primary">Learn More</a>
                                    </div>

                                </div>
                            </div>

                            <div class="swiper-slide">
                                <div
                                    class="flex flex-col justify-center bg-white sm:rounded-xxl rounded-lg md:py-11.25 md:px-8.75 py-8.75 px-6.25 gap-3 items-center text-center dz-img-box h-80">

                                    <div class="flex justify-center sm:w-37.5 w-30 relative overflow-hidden">
                                        <img loading="lazy"
                                            src="<?= $app_path ?>assets/images/spsimg/techpartnersimg/fortinet.webp"
                                            alt="ibm Partner" class="w-full h-full" decoding="async" />
                                    </div>

                                    <div class="dz-content">
                                        <h3 class="md:text-2xl text-xl mb-1.25 font-bold">
                                            Fortinet
                                        </h3>
                                        <p class="md:text-base text-sm mb-2 font-medium">
                                            Firewall • Network Security
                                        </p>
                                        <a href="<?= $app_path ?>comingsoon.php"
                                            class="md:text-sm text-2xs text-primary">Learn More</a>
                                    </div>

                                </div>
                            </div>

                            <div class="swiper-slide">
                                <div
                                    class="flex flex-col justify-center bg-white sm:rounded-xxl rounded-lg md:py-11.25 md:px-8.75 py-8.75 px-6.25 gap-3 items-center text-center dz-img-box h-80">

                                    <div class="flex justify-center sm:w-37.5 w-30 relative overflow-hidden">
                                        <img loading="lazy"
                                            src="<?= $app_path ?>assets/images/spsimg/techpartnersimg/Schneider-Electric2.webp"
                                            alt="ibm Partner" class="w-full h-full" decoding="async" />
                                    </div>

                                    <div class="dz-content">
                                        <h3 class="md:text-2xl text-xl mb-1.25 font-bold">
                                            Schneider Electric
                                        </h3>
                                        <p class="md:text-base text-sm mb-2 font-medium">
                                            Energy • Automation • Sustainability
                                        </p>
                                        <a href="<?= $app_path ?>comingsoon.php"
                                            class="md:text-sm text-2xs text-primary">Learn More</a>
                                    </div>

                                </div>
                            </div>

                            <div class="swiper-slide">
                                <div
                                    class="flex flex-col justify-center bg-white sm:rounded-xxl rounded-lg md:py-11.25 md:px-8.75 py-8.75 px-6.25 gap-3 items-center text-center dz-img-box h-80">

                                    <div class="flex justify-center sm:w-37.5 w-30 relative overflow-hidden">
                                        <img loading="lazy"
                                            src="<?= $app_path ?>assets/images/spsimg/techpartnersimg/cyber-grx.webp"
                                            alt="ibm Partner" class="w-full h-full" decoding="async" />
                                    </div>

                                    <div class="dz-content">
                                        <h3 class="md:text-2xl text-xl mb-1.25 font-bold">
                                            Cyber GRX
                                        </h3>
                                        <p class="md:text-base text-sm mb-2 font-medium">
                                            Third-Party Risk Management
                                        </p>
                                        <a href="<?= $app_path ?>comingsoon.php"
                                            class="md:text-sm text-2xs text-primary">Learn More</a>
                                    </div>

                                </div>
                            </div>

                            <div class="swiper-slide">
                                <div
                                    class="flex flex-col justify-center bg-white sm:rounded-xxl rounded-lg md:py-11.25 md:px-8.75 py-8.75 px-6.25 gap-3 items-center text-center dz-img-box h-80">

                                    <div class="flex justify-center sm:w-37.5 w-30 relative overflow-hidden">
                                        <img loading="lazy"
                                            src="<?= $app_path ?>assets/images/spsimg/techpartnersimg/timestream.webp"
                                            alt="ibm Partner" class="w-full h-full" decoding="async" />
                                    </div>

                                    <div class="dz-content">
                                        <h3 class="md:text-2xl text-xl mb-1.25 font-bold">
                                            Time stream
                                        </h3>
                                        <p class="md:text-base text-sm mb-2 font-medium">
                                            Time-Series Database Analytics
                                        </p>
                                        <a href="<?= $app_path ?>comingsoon.php"
                                            class="md:text-sm text-2xs text-primary">Learn More</a>
                                    </div>

                                </div>
                            </div>

                            <div class="swiper-slide">
                                <div
                                    class="flex flex-col justify-center bg-white sm:rounded-xxl rounded-lg md:py-11.25 md:px-8.75 py-8.75 px-6.25 gap-3 items-center text-center dz-img-box h-80">

                                    <div class="flex justify-center sm:w-37.5 w-30 relative overflow-hidden">
                                        <img loading="lazy"
                                            src="<?= $app_path ?>assets/images/spsimg/techpartnersimg/knowBe4.webp"
                                            alt="ibm Partner" class="w-full h-full" decoding="async" />
                                    </div>

                                    <div class="dz-content">
                                        <h3 class="md:text-2xl text-xl mb-1.25 font-bold">
                                            Know Be 4
                                        </h3>
                                        <p class="md:text-base text-sm mb-2 font-medium">
                                            Security Awareness Training
                                        </p>
                                        <a href="<?= $app_path ?>comingsoon.php"
                                            class="md:text-sm text-2xs text-primary">Learn More</a>
                                    </div>

                                </div>
                            </div>

                            <div class="swiper-slide">
                                <div
                                    class="flex flex-col justify-center bg-white sm:rounded-xxl rounded-lg md:py-11.25 md:px-8.75 py-8.75 px-6.25 gap-3 items-center text-center dz-img-box h-80">

                                    <div class="flex justify-center sm:w-37.5 w-30 relative overflow-hidden">
                                        <img loading="lazy"
                                            src="<?= $app_path ?>assets/images/spsimg/techpartnersimg/tenable1.webp"
                                            alt="ibm Partner" class="w-full h-full" decoding="async" />
                                    </div>

                                    <div class="dz-content">
                                        <h3 class="md:text-2xl text-xl mb-1.25 font-bold">
                                            Tenable
                                        </h3>
                                        <p class="md:text-base text-sm mb-2 font-medium">
                                            Vulnerability • Exposure Management
                                        </p>
                                        <a href="<?= $app_path ?>comingsoon.php"
                                            class="md:text-sm text-2xs text-primary">Learn More</a>
                                    </div>

                                </div>
                            </div>

                            <div class="swiper-slide">
                                <div
                                    class="flex flex-col justify-center bg-white sm:rounded-xxl rounded-lg md:py-11.25 md:px-8.75 py-8.75 px-6.25 gap-3 items-center text-center dz-img-box h-80">

                                    <div class="flex justify-center sm:w-37.5 w-30 relative overflow-hidden">
                                        <img loading="lazy"
                                            src="<?= $app_path ?>assets/images/spsimg/techpartnersimg/fischer-identity.webp"
                                            alt="ibm Partner" class="w-full h-full" decoding="async" />
                                    </div>

                                    <div class="dz-content">
                                        <h3 class="md:text-2xl text-xl mb-1.25 font-bold">
                                            Fischer Identity
                                        </h3>
                                        <p class="md:text-base text-sm mb-2 font-medium">
                                            Governance • Identity Lifecycle
                                        </p>
                                        <a href="<?= $app_path ?>comingsoon.php"
                                            class="md:text-sm text-2xs text-primary">Learn More</a>
                                    </div>

                                </div>
                            </div>



                        </div><!-- .swiper-wrapper -->
                    </div><!-- .swiper -->
                </div>
            </div>
        </div>
    </section>
    <!-- <section class="home-deferred lg:pt-20 lg:pb-10 pt-12.5 pb-5 bg-secondary bg-blend-multiply bg-fixed bg-no-repeat bg-position-[right_center] bg-cover bg-[url(<?= $app_path ?>assets/images/background/bg2.webp)]">
        <div class="text-center container">
            <h3 class="text-white text-lg lg:text-xl font-bold">We have an award-winning team that includes
                IBM-certified inventors and champions who have won multiple worldwide competitions.</h3>
            <p class="text-white text-sm lg:text-lg mb-10">
                As an enterprise-class innovator and solution creator with expertise across all phases of product
                design, development, deployment, security, operations, monitoring, and support, we have been helping our
                clients build, deploy and secure applications. Our development, quality, cybersecurity, training,
                operations, monitoring, and support teams work in tandem to create high-performance, secure, reliable,
                scalable, and manageable systems.
            </p>
        </div>
    </section> -->
    <section class="home-deferred relative lg:pt-20 lg:pb-10 pt-12.5 pb-5 bg-secondary min-h-[500px]">
        <div class="absolute inset-0">
            <img src="<?= $app_path ?>assets/images/background/bg1.webp" alt="" aria-hidden="true"
                class="w-full h-full object-cover opacity-10" loading="lazy" decoding="async">
        </div>
        <div class="relative container mx-auto text-center z-10">
            <h3 class="text-white text-lg lg:text-xl font-bold mb-4">
                We have an award-winning team that includes IBM-certified inventors and champions who have won multiple
                worldwide competitions.
            </h3>
            <p class="text-white text-sm lg:text-lg mb-10">
                As an enterprise-class innovator and solution creator with expertise across all phases of product
                design, development, deployment, security, operations, monitoring, and support, we have been helping our
                clients build, deploy and secure applications. Our development, quality, cybersecurity, training,
                operations, monitoring, and support teams work in tandem to create high-performance, secure, reliable,
                scalable, and manageable systems.
            </p>
        </div>

    </section>


    <section class="home-deferred 2xxl:pt-25 md:pt-17.5 sm:pt-12.5 pt-10 2xxl:pb-17.5 md:pb-10 pb-5 bg-light">
        <div class="container">
            <div class="row items-center">
                <div class="xl:w-1/3">
                    <div class="sm:mb-7.5 mb-5 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                        <h2 class="2xxl:text-4xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize mb-0">
                            Customers we are proud to work with.</h2>
                    </div>
                </div>
                <div class="xl:w-2/3 mb-7.5">
                    <div class="swiper client-swiper2">
                        <div class="swiper-wrapper">
                            <!-- maryland-judiciary -->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0 p-3"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/maryland-judiciary.webp" alt="Maryland Judiciary logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- mychart -->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.3s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0 p-3"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/mychart.webp" alt="MyChart logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- cibc -->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.5s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="w-full h-full object-cover" width="120" height="120"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/cibc3.webp" alt="CIBC logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- myeyedr -->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.5s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/myeyedr.webp" alt="MyEyeDr logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- MetaCoastal -->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.6s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/MetaCoastal.webp" alt="Metacoastal logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- anne-arundel -->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.7s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/anne-arundel.webp" alt="Anne Arundel logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- Allied-Bank -->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.8s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0 p-3"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/Allied-Bank.webp" alt="Allied Bank logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- askari-bank -->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.1s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/askari-bank4.webp" alt="Askari Bank logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- CREYeild -->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.1s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0 p-3"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/CREYeild.webp" alt="CREyield logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- bakg -->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.1s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0 p-3"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/bakg.webp" alt="Bakg logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- brytemap -->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.1s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/brytemap.webp" alt="Brytemap logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- comptroller-maryland -->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.1s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0 p-3"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/comptroller-maryland.webp" alt="Comptroller Maryland logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- rockvile-maryland -->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.1s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0 p-3"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/rockvile-maryland.webp" alt="Rockvile Maryland logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- dc -->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.1s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0 p-3"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/dc.webp" alt="Washington DC logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- maryland-human-service -->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.1s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0 p-3"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/maryland-human-services.webp" alt="Maryland Human Services logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- doit -->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.1s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0 p-3"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/doit.webp" alt="Doit logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- maryland-justice1 -->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.1s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0 p-3"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/maryland-justice1.webp" alt="Maryland Justice logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- maryland-public-safety -->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.5s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="w-full h-full object-cover" width="120" height="120"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/maryland-public-safety.webp" alt="Maryland Public Safety logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- flouracity -->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.5s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="w-full h-full object-cover" width="120" height="120"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/flouracity1.webp" alt="Flouracity logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- first-midwest-bank -->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.1s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/first-midwest-bank.webp" alt="First Midwest Bank logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- GB-pant-institute.webp -->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.1s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/GB-pant-institute.webp" alt="GB Pant Institute logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- gatekeyper -->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.1s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/gatekeyper.webp" alt="Gatekeyper logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- hamdard -->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.1s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/hamdard.webp" alt="Hamdard logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- highmark-health -->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.1s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/highmark-health.webp" alt="Highmark Health logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- k-electric -->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.1s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0 p-3"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/k-electric1.webp" alt="K Electric logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- kuwait-energy -->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.1s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0 p-3"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/kuwait-energy.webp" alt="Kuwait Energy logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- SBE -->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.5s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="w-full h-full object-cover" width="120" height="120"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/SBE.webp" alt="SBE logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- dgs -->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.1s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0 p-3"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/dgs.webp" alt="Dgs logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- maryland-health -->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.1s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/maryland-health1.webp" alt="Maryland Health logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- maryland-juvenile -->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.1s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0 p-3"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/maryland-juvenile.webp" alt="Maryland Juvenile logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- maryland-transportation -->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.1s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/maryland-transportation.webp" alt="Maryland Transportation logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- maryland-transportation-authority -->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.1s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/maryland-transportation-authority.webp" alt="Maryland Transportation Authority logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- sha -->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.1s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0 p-3"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/sha.webp" alt="SHA logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- maryland-retirement -->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.1s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0 p-3"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/maryland-retirement.webp" alt="Maryland Retirement logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- ndc-tech -->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.1s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0 p-3"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/ndc-tech.webp" alt="NDC Tech logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- maryland-attorney-general -->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.1s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0 p-3"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/maryland-attorney-general.webp" alt="Maryland Attorney General logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- physician-loan -->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.1s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0 p-3"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/physician-loan.webp" alt="Physician Loan logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- county-of-spotsylvania-->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.1s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0 p-3"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/county-of-spotsylvania.webp" alt="County Of Spotsylvania logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- county-of-spotsylvania-->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.1s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/seal-of-state-indiana.webp" alt="Seal Of State Indiana logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- transunion-->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.1s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/transunion.webp" alt="Transunion logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- total-vision-->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.1s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0 p-3"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/total-vision.webp" alt="Total Vision logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- asphlundh-->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.1s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/asphlundh.webp" alt="Asphlundh logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- vcu-->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.1s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0 p-3"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/vcu.webp" alt="VCU logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- avnet-->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.1s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0 p-3"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/avnet.webp" alt="Avnet logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- keysight-->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.1s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/keysight.webp" alt="Keysight logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- loudon-county-->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.1s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/loudon-county.webp" alt="Loudon County logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- uni-nevada-las-vegas  unlv-->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.1s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0 p-3"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/unlv.webp" alt="UNLV logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- acps-->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.1s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0 p-3"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/acps.webp" alt="ACPS logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- ibm-->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.1s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0 p-3"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/ibm1.webp" alt="IBM logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- altria-->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.1s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/altria.webp" alt="Altria logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- mandel-->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.1s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0 p-3"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/mandel.webp" alt="Mandel logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- telenor-->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.1s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0 p-3"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/telenor.webp" alt="Telenor logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- ufone-->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.1s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0 p-3"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/ufone.webp" alt="Ufone logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                            <!-- the-presentation-company-->
                            <div class="swiper-slide wow bounceIn" data-wow-delay="0.1s" data-wow-duration="0.8s">
                                <div class="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center shrink-0"
                                    style="width: 120px !important; height: 120px !important;">
                                    <img class="max-w-full max-h-full object-cover" width="96" height="96"
                                        src="<?= $app_path ?>assets/images/spsimg/customers/the-presentation-company1.webp" alt="The Presentation Company logo" loading="lazy" decoding="async">
                                </div>
                            </div>
                        </div>
                        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="home-deferred 2xxl:py-25 xl:py-17.5 md:py-10 py-7.5">
        <div class="container">
            <div class="mb-7.5 row items-end">
                <div class="lg:w-7/12 md:w-2/3">
                    <h2 class="xl:text-4xxl sm:text-3xxl text-2xxl font-bold capitalize mb-0">
                        Stay Updated with <br> Our Latest News & Insights
                    </h2>
                </div>
                <div class="lg:w-5/12 md:w-1/3 md:text-end hidden md:block">
                    <a href="<?= $app_path ?>comingsoon.php" class="btn btn-icon btn-primary btn-shadow group">
                        View All
                        <span
                            class="size-11 min-w-11 bg-white rounded-2lg text-heading inline-flex items-center justify-center -my-2.75 md:-mr-5 ml-3 -mr-4 max-sm:hidden">
                            <i class="feather icon-arrow-right group-hover:animate-toRightFromLeft"></i>
                        </span>
                    </a>
                </div>
            </div>

            <div class="row g-20">

                <!-- MAIN BIG LEFT BLOG (NEWS 1) -->
                <div class="lg:w-1/3 w-full">
                    <div class="relative overflow-hidden sm:rounded-3xl rounded-xxl xl:h-137.5 h-105 bg-light bg-cover"
                        style="background-image: url('<?= $app_path ?>assets/images/spsimg/news/news1.webp');">
                        <div class="relative !pt-17.5 xl:p-7.5 p-5 size-full flex flex-col z-1">
                            <div class="max-w-1/2">
                                <div class="py-1.25 px-3.75 absolute top-7.5 left-7.5 z-1 text-secondary bg-white font-medium text-xs uppercase rounded-5xl">
                                    News Update
                                </div>
                                <h3 class="xl:text-2xl text-xl mb-0 text-white">
                                    <a href="<?= $app_path ?>comingsoon.php">
                                        Hash Malik at a cloud partner panel discussion — “Succeeding with IBM”
                                    </a>
                                </h3>
                            </div>
                            <div class="flex items-end gap-7.5 flex-1 justify-between">
                                <a href="<?= $app_path ?>comingsoon.php" class="btn btn-icon btn-lg btn-primary">
                                    Read More
                                    <span
                                        class="size-11 min-w-11 bg-white rounded-2lg text-heading inline-flex items-center justify-center ml-3">
                                        <i class="feather icon-arrow-right"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- LARGE CENTER BLOG (NEWS 2) -->
                <div class="xl:w-5/12 lg:w-2/3 w-full">
                    <div class="relative overflow-hidden sm:rounded-3xl rounded-xxl xl:h-137.5 h-105 bg-light bg-cover after:absolute after:left-0 after:size-full after:top-0 after:bg-linear-(--card-2-gradient)"
                        style="background-image: url('<?= $app_path ?>assets/images/spsimg/news/news2.webp');">
                        <div class="relative !pt-17.5 xl:p-7.5 p-5 size-full flex flex-col z-1">
                            <div class="py-1.25 px-3.75 absolute top-7.5 left-7.5 z-1 text-secondary bg-white font-medium text-xs uppercase rounded-5xl">
                                IoT Summit
                            </div>
                            <div class="flex items-end gap-7.5 flex-1 justify-between">
                                <h3 class="xl:text-2xl text-xl mb-0 text-white">
                                    <a href="<?= $app_path ?>comingsoon.php">
                                        SPS makes a push into IoT through Mars rover demo
                                    </a>
                                </h3>
                                <a href="<?= $app_path ?>comingsoon.php"
                                    aria-label="Read more about SPS IoT Mars rover demo"
                                    class="btn btn-square btn-white !rounded-full group">
                                    <i class="feather icon-arrow-up-right group-hover:animate-toTopRight"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- RIGHT SMALL TWO BLOGS (NEWS 3 + CUSTOM EMPTY) -->
                <div class="xl:w-1/4 lg:w-full">
                    <div class="row g-20">

                        <!-- SMALL CARD (NEWS 3) -->
                        <div class="xl:w-full md:w-1/2 w-full">
                            <div class="relative overflow-hidden sm:rounded-3xl rounded-xxl h-66.25 bg-light bg-cover after:absolute after:left-0 after:size-full after:top-0 after:bg-linear-(--card-2-gradient)"
                                style="background-image:url('<?= $app_path ?>assets/images/spsimg/news/news3.webp');">
                                <div class="relative !pt-17.5 xl:p-7.5 p-5 size-full flex flex-col z-1">
                                    <div class="py-1.25 px-3.75 absolute top-7.5 left-7.5 z-1 text-secondary bg-white font-medium text-xs uppercase rounded-5xl">
                                        Expert Opinion
                                    </div>

                                    <div class="flex items-end gap-7.5 flex-1 justify-between">
                                        <h3 class="text-xl mb-0 text-white">
                                            <a href="<?= $app_path ?>comingsoon.php">
                                                How To Secure & Monitor Your AI Models
                                            </a>
                                        </h3>
                                        <a href="<?= $app_path ?>comingsoon.php"
                                            aria-label="Read more about securing and monitoring AI models"
                                            class="btn btn-square btn-white !rounded-full group">
                                            <i class="feather icon-arrow-up-right group-hover:animate-toTopRight"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- SMALL EMPTY BLOG CARD (OPTIONAL / CAN REMOVE) -->
                        <div class="xl:w-full md:w-1/2 w-full">
                            <div class="relative overflow-hidden sm:rounded-3xl rounded-xxl h-66.25 bg-secondary">
                                <div class="relative !pt-17.5 xl:p-7.5 p-5 size-full flex flex-col z-1 text-white">
                                    <h3 class="text-xl mb-0 text-white">
                                        <a href="<?= $app_path ?>comingsoon.php">More updates coming soon...</a>
                                    </h3>
                                    <div class="flex items-end gap-7.5 flex-1 justify-between ms-auto">
                                        <a href="<?= $app_path ?>comingsoon.php"
                                            aria-label="View more news updates"
                                            class="btn btn-square btn-white !rounded-full group">
                                            <i class="feather icon-arrow-up-right group-hover:animate-toTopRight"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    </section>

    <section class="home-deferred 2xxl:py-25 xl:py-17.5 md:py-12.5 sm:py-10 py-7.5 bg-light bg-cover">
    <div class="container">
        <div class="mb-7.5 text-center" data-wow-delay="0.2s" data-wow-duration="0.8s">
            <span class="text-primary font-semibold leading-5 uppercase text-lg inline-flex gap-1.25 items-center">
                SPS Verticals
            </span>
            <h2 class="2xxl:text-2xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize mb-0 wow fadeInUp">
                Comprehensive Industry Solutions <br> &amp; Digital Transformation
            </h2>
        </div>
        <div class="row gx-lg-4 box-hover-wrapper">

            <!-- PUBLIC SECTOR -->
            <div class="xl:w-1/4 md:w-1/2 w-full mb-7.5 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                <div class="bg-center h-full relative rounded-2xl min-h-93.75 shadow-20 after:absolute after:top-0 after:left-0 after:size-full after:duration-700 after:rounded-2xl after:bg-white [.box-hover.active]:after:[background:var(--service-card-gradient)] box-hover bg-cover"
                    style="background-image: url(<?= $app_path ?>assets/images/spsimg/verticles/v1.webp);">
                    <div class="relative z-1 flex flex-col h-full p-8.75">
                        <div>
                            <h3 class="w-full text-2xl relative [.box-hover.active_&amp;]:text-white">Public Sector</h3>
                            <p class="text-base mb-0 [.box-hover.active_&amp;]:text-white read-more-text">
                                Now more than ever, governments need to adapt to changing environments...
                            </p>
                            <button class="read-more-btn mt-auto font-medium text-primary duration-700 [.box-hover.active_&]:text-white">Read More</button>
                            <ul class="verticals-list space-y-2 my-6 flex-grow text-base mb-0 [.box-hover.active_&amp;]:text-white">
                                <li>Government</li>
                                <li>Public Safety</li>
                                <li>Education</li>
                                <li>Healthcare – Mid Atl</li>
                                <li>County Government</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- INDUSTRIALS -->
            <div class="xl:w-1/4 md:w-1/2 w-full mb-7.5 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                <div class="bg-center h-full relative rounded-2xl min-h-93.75 shadow-20 after:absolute after:top-0 after:left-0 after:size-full after:duration-700 after:rounded-2xl after:bg-white [.box-hover.active]:after:[background:var(--service-card-gradient)] box-hover bg-cover active"
                    style="background-image: url(<?= $app_path ?>assets/images/spsimg/verticles/v2.webp);">
                    <div class="relative z-1 flex flex-col h-full p-8.75">
                        <div>
                            <h3 class="w-full text-2xl relative [.box-hover.active_&amp;]:text-white">Industrials</h3>
                            <p class="text-base mb-0 [.box-hover.active_&amp;]:text-white read-more-text">
                                Many industrial enterprises are prime for analytics and IoT...
                            </p>
                            <button class="read-more-btn mt-auto font-medium text-primary duration-700 [.box-hover.active_&]:text-white">Read More</button>
                            <ul class="verticals-list space-y-2 my-6 flex-grow text-base mb-0 [.box-hover.active_&amp;]:text-white">
                                <li>Manufacturing</li>
                                <li>Textile</li>
                                <li>Utilities</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- HEALTHCARE -->
            <div class="xl:w-1/4 md:w-1/2 w-full mb-7.5 wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
                <div class="bg-center h-full relative rounded-2xl min-h-93.75 shadow-20 after:absolute after:top-0 after:left-0 after:size-full after:duration-700 after:rounded-2xl after:bg-white [.box-hover.active]:after:[background:var(--service-card-gradient)] box-hover bg-cover"
                    style="background-image: url(<?= $app_path ?>assets/images/spsimg/verticles/v3.webp);">
                    <div class="relative z-1 flex flex-col h-full p-8.75">
                        <div>
                            <h3 class="w-full text-2xl relative [.box-hover.active_&amp;]:text-white">Healthcare</h3>
                            <p class="text-base mb-0 [.box-hover.active_&amp;]:text-white read-more-text">
                                We support the healthcare industry and those who deliver health and human services...
                            </p>
                            <button class="read-more-btn mt-auto font-medium text-primary duration-700 [.box-hover.active_&]:text-white">Read More</button>
                            <ul class="verticals-list space-y-2 my-6 flex-grow text-base mb-0 [.box-hover.active_&amp;]:text-white">
                                <li>Telehealth &amp; Remote Monitoring</li>
                                <li>Multi-Clinic Consolidation</li>
                                <li>Compliance Requirements</li>
                                <li>Patient Experience</li>
                                <li>Health Systems Interoperability</li>
                                <li>Retail</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- RETAIL -->
            <div class="xl:w-1/4 md:w-1/2 w-full mb-7.5 wow fadeInUp" data-wow-delay="1.0s" data-wow-duration="0.8s">
                <div class="bg-center h-full relative rounded-2xl min-h-93.75 shadow-20 after:absolute after:top-0 after:left-0 after:size-full after:duration-700 after:rounded-2xl after:bg-white [.box-hover.active]:after:[background:var(--service-card-gradient)] box-hover bg-cover"
                    style="background-image: url(<?= $app_path ?>assets/images/spsimg/verticles/v4.webp);">
                    <div class="relative z-1 flex flex-col h-full p-8.75">
                        <div>
                            <h3 class="w-full text-2xl relative [.box-hover.active_&amp;]:text-white">Retail</h3>
                            <p class="text-base mb-0 [.box-hover.active_&amp;]:text-white read-more-text">
                                The challenges facing retailers can be overwhelming...
                            </p>
                            <button class="read-more-btn mt-auto font-medium text-primary duration-700 [.box-hover.active_&]:text-white">Read More</button>
                            <ul class="verticals-list space-y-2 my-6 flex-grow text-base mb-0 [.box-hover.active_&amp;]:text-white">
                                <li>Supply Chain</li>
                                <li>Marketing / Merchandising</li>
                                <li>Personalization &amp; Localization</li>
                                <li>Omni-channel Operations</li>
                                <li>Convenience Stores</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ENERGY -->
            <div class="xl:w-1/4 md:w-1/2 w-full mb-7.5 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                <div class="bg-center h-full relative rounded-2xl min-h-93.75 shadow-20 after:absolute after:top-0 after:left-0 after:size-full after:duration-700 after:rounded-2xl after:bg-white [.box-hover.active]:after:[background:var(--service-card-gradient)] box-hover bg-cover"
                    style="background-image: url(<?= $app_path ?>assets/images/spsimg/verticles/v5.webp);">
                    <div class="relative z-1 flex flex-col h-full p-8.75">
                        <div>
                            <h3 class="w-full text-2xl relative [.box-hover.active_&amp;]:text-white">Energy</h3>
                            <p class="text-base mb-0 [.box-hover.active_&amp;]:text-white read-more-text">
                                In today's changing energy landscape, business leaders recognize that sustainability is fundamental...
                            </p>
                            <button class="read-more-btn mt-auto font-medium text-primary duration-700 [.box-hover.active_&]:text-white">Read More</button>
                            <ul class="verticals-list space-y-2 my-6 flex-grow text-base mb-0 [.box-hover.active_&amp;]:text-white">
                                <li>Electric</li>
                                <li>Oil &amp; Gas</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- FINANCIAL -->
            <div class="xl:w-1/4 md:w-1/2 w-full mb-7.5 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                <div class="bg-center h-full relative rounded-2xl min-h-93.75 shadow-20 after:absolute after:top-0 after:left-0 after:size-full after:duration-700 after:rounded-2xl after:bg-white [.box-hover.active]:after:[background:var(--service-card-gradient)] box-hover bg-cover"
                    style="background-image: url(<?= $app_path ?>assets/images/spsimg/verticles/v6.webp);">
                    <div class="relative z-1 flex flex-col h-full p-8.75">
                        <div>
                            <h3 class="w-full text-2xl relative [.box-hover.active_&amp;]:text-white">Financial</h3>
                            <p class="text-base mb-0 [.box-hover.active_&amp;]:text-white read-more-text">
                                Financial services firms require real-time modernization...
                            </p>
                            <button class="read-more-btn mt-auto font-medium text-primary duration-700 [.box-hover.active_&]:text-white">Read More</button>
                            <ul class="verticals-list space-y-2 my-6 flex-grow text-base mb-0 [.box-hover.active_&amp;]:text-white">
                                <li>Insurance</li>
                                <li>Banking</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- TELECOMMUNICATIONS -->
            <div class="xl:w-1/4 md:w-1/2 w-full mb-7.5 wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
                <div class="bg-center h-full relative rounded-2xl min-h-93.75 shadow-20 after:absolute after:top-0 after:left-0 after:size-full after:duration-700 after:rounded-2xl after:bg-white [.box-hover.active]:after:[background:var(--service-card-gradient)] box-hover bg-cover"
                    style="background-image: url(<?= $app_path ?>assets/images/spsimg/verticles/v7.webp);">
                    <div class="relative z-1 flex flex-col h-full p-8.75">
                        <div>
                            <h3 class="w-full text-2xl relative [.box-hover.active_&amp;]:text-white">Telecommunications</h3>
                            <p class="text-base mb-0 [.box-hover.active_&amp;]:text-white read-more-text">
                                Telecommunications is experiencing a seismic shift...
                            </p>
                            <button class="read-more-btn mt-auto font-medium text-primary duration-700 [.box-hover.active_&]:text-white">Read More</button>
                            <ul class="verticals-list space-y-2 my-6 flex-grow text-base mb-0 [.box-hover.active_&amp;]:text-white">
                                <li>Telcos</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>

<div id="appointmentModal" 
     class="hidden-modal fixed inset-0 w-full h-full z-[999999] flex items-center justify-center p-5"
     onclick="closeModal()">
    
    <div class="absolute inset-0 bg-secondary/80 backdrop-blur-sm -z-10"></div>

    <div class="modal-card bg-white w-full max-w-[700px] rounded-xl shadow-2xl flex flex-col border border-gray-200"
         onclick="event.stopPropagation()">
        
        <div class="px-6 py-3 border-b border-gray-100 flex justify-between items-center bg-white shrink-0">
            <h3 class="text-lg font-bold text-secondary">Request a Quote</h3>
            <button type="button" 
                    onclick="closeModal()" 
                    class="text-gray-400 hover:text-primary transition-all text-xl p-2 leading-none">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>
        
        <div class="p-5 bg-white">
            <form id="appointmentForm" class="space-y-4">
                
                <div class="space-y-1">
                    <label class="text-[10px] font-bold text-secondary/60 uppercase tracking-widest ml-1">Name</label>
                    <input type="text" placeholder="Full Name" 
                        class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:bg-white focus:border-primary transition-all text-sm">
                </div>

                <div class="grid grid-cols-2 md:grid-cols-2 gap-4">
                    <div class="space-y-1">
                        <label class="text-[10px] font-bold text-secondary/60 uppercase tracking-widest ml-1">Email Address</label>
                        <input type="email" placeholder="Email" 
                            class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:bg-white focus:border-primary transition-all text-sm">
                    </div>
                    <div class="space-y-1">
                        <label class="text-[10px] font-bold text-secondary/60 uppercase tracking-widest ml-1">Phone</label>
                        <input type="tel" placeholder="Phone Number" 
                            class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:bg-white focus:border-primary transition-all text-sm">
                    </div>
                </div>

                <div class="space-y-1">
                    <label class="text-[10px] font-bold text-secondary/60 uppercase tracking-widest ml-1">Requirements</label>
                    <textarea placeholder="How can we help?" rows="3"
                        class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:bg-white focus:border-primary transition-all text-sm resize-none"></textarea>
                </div>

                <div class="pt-2">
    <div class="max-w-[280px] p-3 border border-gray-200 rounded-lg bg-gray-50/50 flex items-center justify-between shadow-sm">
        <div class="flex items-center gap-3">
            <div class="w-5 h-5 border-2 border-gray-300 bg-white rounded cursor-pointer hover:border-primary transition-colors"></div>
            <span class="text-[12px] text-gray-600 font-medium">I'm not a robot</span>
        </div>
        <div class="flex flex-col items-center">
            <!-- <img src="https://www.gstatic.com/recaptcha/api2/logo_48.webp" alt="captcha" class="w-5 opacity-70 grayscale" loading="lazy" decoding="async"> -->
            <span class="text-[7px] text-gray-400 mt-0.5 font-bold uppercase tracking-tighter leading-none">reCAPTCHA</span>
            <div class="flex gap-1 mt-0.5">
                <span class="text-[6px] text-gray-400 hover:underline cursor-pointer">Privacy</span>
                <span class="text-[6px] text-gray-400 hover:underline cursor-pointer">Terms</span>
            </div>
        </div>
    </div>
</div>
            </form>
        </div>

        <div class="px-6 py-4 bg-light text-secondary border-t border-gray-100 flex justify-end items-center gap-4 shrink-0">
            <button type="button" onclick="closeModal()" class="text-[10px] font-bold text-gray-400 hover:text-secondary uppercase tracking-widest">
                Cancel
            </button>
            <button type="submit" 
                    form="appointmentForm" 
                    class="bg-primary hover:bg-secondary text-white font-bold py-2.5 px-8 rounded-lg shadow-md active:scale-95 transition-all uppercase text-[10px] tracking-widest">
                Send Message
            </button>
        </div>
    </div>
</div>

</main>
<?php include("includes/index-scripts.php"); ?>
<?php include("includes/footer.php"); ?>


<script>
document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.hero-video').forEach(function(video){
        var parent = video.closest('.video-bg');
        var fallback = parent ? parent.querySelector('.hero-fallback') : null;
        if(video && fallback){
            video.addEventListener('playing', function(){
                video.style.opacity = '1';
                fallback.style.opacity = '0';
            });
        }
    });
});
</script>
