import Hero from "../components/Home/Hero"
import Offers from "../components/Home/Offers"
const Home = () => {
  return (
    <div>
        <Hero />
        <div className="md:hidden">
         <Offers/>
        </div>
    </div>
  )
}

export default Home
