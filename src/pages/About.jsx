
import Hero from '../components/about/hero'
import Story from '../components/about/story';
import Values from '../components/about/values';
import Stats from "../components/about/stats"
import FeaturedTreatment from '../components/about/featured treatments';
const About = () =>{    
      return(
        <>
          <Hero />
          <Story/>
          <Values/>
          <FeaturedTreatment/>
          <Stats/>
        </> 
      )
}
export default About;