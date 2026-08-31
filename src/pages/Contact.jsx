import Navbar from '../components/contact/Navbar'
import Hero from '../components/contact/hero'
import ContactDetails from '../components/contact/contactDetails'
import Map from '../components/contact/map'
import Footer from '../components/contact/footer'
const Contact = () =>{
       
       return(
            <div>
               <Hero/>
               <ContactDetails/>
               <Map/>
               <Footer/>
               <div className="w-full h-100 bg-black"></div>
              
            </div>
       )
}
export default Contact;
