import Hero from "@/components/Home/Hero"
import LetsTalk from "@/components/Home/LetsTalk"
import Services from "@/components/Home/Services"
import Testimonials from "@/components/Home/Testimonials"
import WhatWeDo from "@/components/Home/WhatWeDo"
import WorkProcess from "@/components/Home/WorkProcess"
import MainLayout from "@/layouts/MainLayout"

export default function Home() {
  return (
      <MainLayout>
        <Hero/>
        <WhatWeDo/>
        <Services/>
        <WorkProcess/>
        <Testimonials/>
        <LetsTalk/>
      </MainLayout>
  )
}
