import Footer from "@/components/layout/Footer/footer"
import Navbar from "@/components/layout/Navbar/navbar"
import Awards from "@/features/about/story/Awards"
import CareerCTA from "@/features/about/story/CareerCTA"
import HeroMission from "@/features/about/story/HeroMission"
import StoryHero from "@/features/about/story/StoryHero"
import Process from "@/features/about/story/Implementation"
import Timeline from "@/features/about/story/Timeline"
import Training from "@/features/about/story/Training"
import WhoWeAre from "@/features/about/story/WhoWeAre"

function StoryPage() {
  return (
    <>
      <Navbar />
      <StoryHero />
      <HeroMission />
      <WhoWeAre />
      <Timeline />
      <Awards />
      <Process />
      <Training />
      <CareerCTA />
      <Footer />
    </>
  )
}

export default StoryPage
