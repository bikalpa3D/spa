import { Features } from "@/components/features"
import { FitnessGoals } from "@/components/fitness-goals"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Nav } from "@/components/nav"
import { Partners } from "@/components/partners"
import { Pricing } from "@/components/pricing"
import { Programs } from "@/components/programs"
import { Testimonials } from "@/components/testimonials"

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Partners />
      <Programs />
      <FitnessGoals />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </main>
  )
}

