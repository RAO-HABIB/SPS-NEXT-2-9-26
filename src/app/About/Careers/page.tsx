import Footer from "@/components/layout/Footer/footer"
import Navbar from "@/components/layout/Navbar/navbar"
import Benefits from "@/features/about/careers/Benefits"
import OpenPositions from "@/features/about/careers/OpenPositions"
import OurValues from "@/features/about/careers/OurValue"
import Hero from "@/features/about/careers/Hero"


function CareerPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <OpenPositions />
      <OurValues />
      <Benefits />
      <Footer />
    </>
  )
}

export default CareerPage
