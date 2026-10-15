import { Link } from "react-router-dom";
import bgvideo from "../../assets/videos/bgvideo.mp4";
import video from "../../assets/videos/treatments/massage.mp4";
import {  PiHeartbeatFill } from "react-icons/pi";
import { BsArrowRight,} from "react-icons/bs";


const Hero = () => {
    return (
        <div className="w-full fixed inset-0 z-0 h-[80dvh] lg:h-[100dvh] flex bg-black/10 ">

            {/* Video Background */}
            <video src={video} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
            
              {/* Video image  
            <img src={slideImageOne} alt='our doctor preparing tests'  className=" absolute inset-0 w-full h-full object-cover z-0" />    
                */}
            {/* Dark Overlay */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black via-black/70 to-transparent" />

            {/* Hero Content */}
            <div className="relative w-[92%] lg:w-[85%] h-fit mx-auto mt-[30%] lg:m-auto flex flex-col items-start lg:items-center gap-6 text-white rounded-lg lg:pt-16">

                <h1 className="text-4xl md:text-8xl text-start lg:text-center font-[Roboto]  font-bold display text-blue-900">
                    Eden of Life Natural Medicine    
                </h1>

                <h2 className="hidden mt-2 text-2xl sm:text-3xl  leading-tight font-serif font-bold">
                    Hope for your life
                </h2>

                <p className="font-body w-full md:w-[40%] font-[Roboto] lg:text-center text-[1.3rem] text-white/80 tracking-wide">
                    A place to find natural, holistic, and personalized care that help you live a 
                    healthier and happier life.
                </p>

                {/* Booking CTA */}
                <Link to="/consultation" className="cursor-pointer relative mt-3 bg-red-700 hover:bg-red-800 text-white font-medium tracking-wide py-3 px-7 rounded-lg flex items-center gap-3 transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-red-950/30 z-10">
                    Book a Consultation
                    <span className="absolute inset-0 rounded-lg bg-red-800/20 blur opacity-0 transition duration-300 hover:opacity-100" />
                    <span className="absolute inset-0 rounded-lg bg-red-800/20 opacity-0 transition duration-300 hover:opacity-100" />
                    <BsArrowRight size={20} />
                </Link>


            </div>
        </div>
    );
};

export default Hero;