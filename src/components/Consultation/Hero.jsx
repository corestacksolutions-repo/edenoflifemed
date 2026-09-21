import backgroundImage from '../../assets/contact page/medical equipment.jpg'
import heart from "../../assets/contact page/heart.jpg"
import naturalPathy from "../../assets/contact page/natural-therapy.png"
import { PiFloppyDiskBackDuotone, PiFlowerLotusDuotone } from 'react-icons/pi'
import { BsFillHeartPulseFill } from "react-icons/bs";

const Hero = () => {
    return (
       <div className="relative w-[100%] min-h-[150px] py-8 pt-[100px]  text-white text-center flex bg-blue-950 overflow-hidden mb-10">  
          {/*overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/70 via-black/50 to-transparent"/>
          {/*hero content*/} 
          <div className="relative w-[98%] md:w-[85%] mx-auto text-center text-white/60 px-4">
                <h2 className="heading font-bold text-[2.5rem] lg:text-[4rem] leading-[40px] lg:leading-[60px] my-4 ">
                  
                </h2>       
          </div> 
        </div>
    )
    
}
export default Hero;    
