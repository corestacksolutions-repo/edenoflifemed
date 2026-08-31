
import Hero from '../components/about/hero'
import Story from '../components/about/story';
import Values from '../components/about/values';
import Stats from "../components/about/stats"
import FeaturedTreatment from '../components/about/featured treatments';
import Process from '../components/about/process';
import CTA from '../components/about/cta';
const About = () =>{    
      return(
        <>
          <Hero />
          <Story/>
          <Values/>
          <FeaturedTreatment/>
          <Process/>
          <Stats/>
          <CTA/>
        </> 
      )
}
export default About;