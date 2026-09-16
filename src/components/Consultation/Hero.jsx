import backgroundImage from '../../assets/contact page/medical equipment.jpg'
import heart from "../../assets/contact page/heart.jpg"
import naturalPathy from "../../assets/contact page/natural-therapy.png"
import { PiFloppyDiskBackDuotone, PiFlowerLotusDuotone } from 'react-icons/pi'
import { BsFillHeartPulseFill } from "react-icons/bs";

const Hero = () => {
    return (
        <div className="relative w-[100%] min-h-[380px] py-8 pt-[100px] mb-10  text-white text-center flex bg-emerald-800 black/40 overflow-hidden">  
            {/*overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 via-blue-100/80 to-blue-200"/>
            {/*bg image */}
            <img src={backgroundImage} 
                 alt="background image" 
                 className="hidden absolute inset-0 w-full h-full object-cover mix-blend-overlay" />
          
          {/*hero content*/} 
          <div className="w-[92%] md:w-[85%] mx-auto">
            <div className="relative flex flex-col gap-6 md:flex-row justify-between overflow-hidden ">
              {/*left content */}
             <div className="text-start w-full my-auto space-y-6">
                 <div className="text-red-700/90 font-semibold tracking-wide relative uppercase flex items-center gap-3 text-sm w-fit">
                    <BsFillHeartPulseFill size={30} />
                    {/* <span>About us</span> */}
                    <div className="absolute h-[1px] w-[32px] -bottom-1 left-0 border border-red-700"></div>
                </div>
                {/* Heading */}
                <h2 className="font-serif text-[42px] md:text-[48px] leading-[105%] my-4 max-w-[460px] text-white">
                You don’t have to <br/> figure  it out <span className="text-blue-700"> alone.</span>
                </h2>

                <p className="text-lg italic p-3 border border-dotted rounded-2xl w-fit bg-white/10 backdrop-blur-sm">
                    You don’t have to navigate your health journey alone. <br /> 
                    Your consultation gives us the opportunity to understand <br /> what you’re experiencing, 
                    explore what may be at the root of it, <br /> and guide you toward a 
                    natural approach tailored to you.
                </p>
             </div>
            </div> 
          </div> 
        </div>
    )
    
}
export default Hero;    
