import { Link } from "react-router-dom";
import bgvideo from "../../assets/videos/bgvideo.mp4";
import { PiArrowRightBold, PiFlowerLotusFill, PiHeart, PiHeartbeatFill } from "react-icons/pi";
import { BsArrowRight, BsWhatsapp } from "react-icons/bs";
import Offers from "./Offers";

import slideImageOne from "../../assets/images/hero-images/doctor-preparing-tests.jpg"

const Hero = () => {
    return (
        <div className="w-full lg:w-[99%] mx-auto h-[60vh] md:h-[70vh] lg:h-[100vh] overflow-hidden relative flex flex-col items-center justify-center bg-zinc-200 lg:rounded-3xl lg:mt-2 overflow-hidden ">

            {/* Video Background */}
            <video src={bgvideo} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0" />
            

              {/* Video image  
            <img src={slideImageOne} alt='our doctor preparing tests'  className=" absolute inset-0 w-full h-full object-cover z-0" />    
                */}
            {/* Dark Overlay */}
            <div className="absolute inset-0 w-full h-full bg-black/5 gradient-to-r from-zinc-50 via-zinc-50/50 to-transparent 05 z-10" />

            {/* Hero Content */}
            <div className="w-[92%] lg:w-[85%] flex flex-col items-center gap-3 z-20 text-white rounded-lg">

                <h1 className="md:text-8xl text-center  font-bold display text-blue-700">
                   Eden of Life,<br/>
                   <span className="text">Natural Medicine</span>    
                </h1>

                <h2 className="hidden mt-2 text-2xl sm:text-3xl  leading-tight font-serif font-bold">
                    Hope for your life
                </h2>

                {/* Lotus Divider */}
                <div className="hidden w-full max-w-[550px] mt-3 mb-1 flex items-center justify-center gap-4">
                    
                    <PiHeartbeatFill className="text-[2.5rem] text-red-600 shrink-0" />
                    <div className="h-px flex-1 bg-blue-500/80" />
                </div>

                <p className="font-body w-full md:w-[40%] font-semibold text-center text-[1.3rem] text-white/80">
                    A place to find natural, holistic, and personalized care that help you live a 
                    healthier and happier life.
                </p>

                {/* Booking CTA */}
                <Link to="/booking" className="mt-3 bg-red-700 hover:bg-red-800 active:bg-red-900 text-white font-medium tracking-wide py-3 px-7 rounded-lg flex items-center gap-3 transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-red-950/30">
                    Book an Appointment
                    <BsArrowRight size={20} />
                </Link>
            </div>

            {/* Whats App */}
            <div  className=" hidden
                    group
                    fixed 
                    bottom-10 
                    right-10  
                    cursor-pointer
                    flx
    
                    z-50
                    h-[80px]
                    w-[80px]
                    rounded-xl
                    border 
                    border-white/20 
                    p-5 
                    bg-white/10 
                    space-y-3
                    backdrop-blur-sm
                    hover:h-[120px]
                    hover:w-[200px]
                    hover:rounded-md
                    transition-all transform
                    duration-500
            ">
                <BsWhatsapp className="size-8 text-emerald-800 group-hover:opacity-0 transition-opacity duration-1000"/>
                <p className="group-hover:flex justify-between rounded-full text-emerald-800 font-semibold border  border-white/30 px-3 py-2 opacity-0 group-hover:opacity-100 enter:opacity-100 transition-opacity ease-in duration-1000 group-hover:duration-1000  group-hover:ease-in ease-out duration-500">
                  <span className=" text-xs">Chat on WhatsApp</span>
                  <BsWhatsapp className=""/>
                </p>   
            </div>

            {/* Video Indicator */}
            {/* <div className="absolute bottom-5 right-6 md:right-10 z-30 flex items-center gap-2 text-white/80 text-sm">
                <span className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center text-xs">Ⅱ</span>
                <span className="hidden sm:block">Pause Video</span>
            </div> */}
        </div>
    );
};

export default Hero;