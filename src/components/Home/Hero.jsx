import { Link } from "react-router-dom";
import bgvideo from "../../assets/videos/bgvideo.mp4";
import {  PiHeartbeatFill } from "react-icons/pi";
import { BsArrowRight,} from "react-icons/bs";


const Hero = () => {
    return (
        <div className="w-full fixed inset-0 z-0 h-[50dvh] lg:h-[100dvh] flex bg-black/10 ">

            {/* Video Background */}
            <video src={bgvideo} autoPlay loop muted playsInline className="hidden absolute inset-0 w-full h-full object-cover" />
            
              {/* Video image  
            <img src={slideImageOne} alt='our doctor preparing tests'  className=" absolute inset-0 w-full h-full object-cover z-0" />    
                */}
            {/* Dark Overlay */}
            <div className="absolute inset-0 w-full h-full gradient-to-r from- bg-black via-zinc- bg-black/90 to-transparent" />

            {/* Hero Content */}
            <div className="relative w-[92%] lg:w-[85%] m-auto flex flex-col items-center gap-3 text-white rounded-lg pt-16">

                <h1 className="text-5xl md:text-8xl text-center font-[Roboto]  font-bold display text-blue-700">
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
                <Link to="/consultation" className="cursor-pointer relative mt-3 bg-red-700 hover:bg-red-800 text-white font-medium tracking-wide py-3 px-7 rounded-lg flex items-center gap-3 transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-red-950/30 z-10">
                    Book an Appointment
                    <BsArrowRight size={20} />
                </Link>
            </div>
        </div>
    );
};

export default Hero;