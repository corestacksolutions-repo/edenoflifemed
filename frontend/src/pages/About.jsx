
import Hero from '../components/about/hero'
import Nav from '../components/about/nav';
import Story from '../components/about/story';
import Values from '../components/about/values';
import Stats from "../components/about/stats"
import FeaturedTreatment from '../components/about/featured treatments';
import Process from '../components/about/process';
import ChooseUs from '../components/about/why us';
import CTA from '../components/about/cta';
const About = () =>{    
      return(
        <>
          <Hero />
          <Nav/>
          <Story/>
          <Values/>
          <FeaturedTreatment/>
          <Process/>
          <ChooseUs/>
         
          <CTA/>
        </> 
      )
}
export default About;