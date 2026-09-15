import Hero from "../components/Home/Hero"
import Offers from "../components/Home/Offers"
import About from "../components/Home/About"
import Services from "../components/Home/services"
import CTA from "../components/Home/cta"
import Testimonials from "../components/Home/Testimonials"
const Home = () => {
  return (
    <div>
        <Hero />
        <About/>
        <Services/>
        <CTA/>
        <Testimonials/>
    </div>
  )
}

export default Home
