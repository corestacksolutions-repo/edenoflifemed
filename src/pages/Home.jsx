import Hero from "../components/Home/Hero"
import Offers from "../components/Home/Offers"
import About from "../components/Home/About"
import Services from "../components/Home/services"
import CTA from "../components/Home/cta"
import Testimonials from "../components/Home/Testimonials"
import Footer from "../components/footer"
const Home = () => {
  return (
    <div>
        <Hero />
        <About/>
        <Services/>
        <CTA/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default Home
