import backgroundImage from '../../assets/contact page/medical equipment.jpg'
import heart from "../../assets/contact page/heart.jpg"
import naturalPathy from "../../assets/contact page/natural-therapy.png"
import { PiFloppyDiskBackDuotone, PiFlowerLotusDuotone } from 'react-icons/pi'

const Hero = () => {
    return (
        <div className="relative w-[100%] min-h-[380px] py-8 pt-[100px]  text-white text-center flex bg-emerald-800 black/40 overflow-hidden">  
            {/*overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"/>
            {/*bg image */}
            <img src={backgroundImage} 
                 alt="background image" 
                 className="hidden absolute inset-0 w-full h-full object-cover mix-blend-overlay" />
          
          {/*hero content*/} 
          <div className="w-[92%] md:w-[85%] mx-auto">
            <div className="relative flex flex-col gap-6 md:flex-row justify-between overflow-hidden ">
              {/*left content */}
             <div className="text-start w-full my-auto space-y-6">
                 <div className="text-blue-700 font-semibold tracking-wide relative uppercase flex items-center gap-3 text-sm w-fit">
                    <PiFlowerLotusDuotone size={30} />
                    <span>About us</span>
                    <div className="absolute h-[1px] w-[32px] -bottom-1 left-0 border border-blue-700"></div>
                </div>
                {/* Heading */}
                <h2 className="font-serif text-[42px] md:text-[48px] leading-[105%] my-4 max-w-[460px] text-white">
                Rooted in nature <br/> committed to <span className="text-blue-700">
                you.</span>
                </h2>

                <p className="text-lg italic p-3 border border-dotted rounded-2xl w-fit bg-white/10 backdrop-blur-sm">
                    Eden of Life is a naturalpathy and wellness center 
                    <br/>
                    dedicated to helping you achieve lasting health
                    <br/>
                    through natural, holistic, and personalised care.
                </p>
             </div>
            </div> 
          </div> 
        </div>
    )
    
}
export default Hero;    
