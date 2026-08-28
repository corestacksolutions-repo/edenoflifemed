import { Link } from "react-router-dom";
import bgvideo from "../../assets/bgvideo.mp4";
import { PiFlowerLotusFill } from "react-icons/pi";
import { BsArrowRight } from "react-icons/bs";
import Offers from "./Offers";

const Hero = () => {
    return (
        <div className="w-full min-h-screen overflow-hidden relative flex flex-col items-center justify-center bg-black">

            {/* Video Background */}
            <video src={bgvideo} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0" />

            {/* Dark Overlay */}
            <div className="absolute inset-0 w-full h-full bg-black/55 z-10" />

            {/* Hero Content */}
            <div className="w-[90%] md:w-[75%] lg:w-[70%] flex flex-col items-center justify-center z-20 text-white text-center px-4 pb-[100px]">

                <h1 className="text-5xl sm:text-6xl md:text-7xl  leading-[105%] font-serif font-bold uppercase tracking-wide">
                    Eden of Life
                </h1>

                <h2 className="mt-2 text-2xl sm:text-3xl  leading-tight font-serif font-bold">
                    Your wellbeing is <span className="text-blue-500">our priority.</span>
                </h2>

                {/* Lotus Divider */}
                <div className="w-full max-w-[550px] my-3 flex items-center justify-center gap-4">
                    <div className="h-px flex-1 bg-blue-500/80" />
                    <PiFlowerLotusFill className="text-[2.5rem] text-blue-500 shrink-0" />
                    <div className="h-px flex-1 bg-blue-500/80" />
                </div>

                <p className="max-w-[550px] text-sm sm:text-base md:text-[1.12rem] leading-relaxed tracking-wide text-white/90">
                    We provide natural, holistic, and personalized care to help you live a healthier and happier life.
                </p>

                {/* Booking CTA */}
                <Link to="/booking" className="mt-3 bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white font-medium tracking-wide py-3 px-7 rounded-lg flex items-center gap-3 transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-blue-950/30">
                    Book a Consultation
                    <BsArrowRight size={20} />
                </Link>
            </div>

            {/* Offers */}
            <Offers />

            {/* Video Indicator */}
            {/* <div className="absolute bottom-5 right-6 md:right-10 z-30 flex items-center gap-2 text-white/80 text-sm">
                <span className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center text-xs">Ⅱ</span>
                <span className="hidden sm:block">Pause Video</span>
            </div> */}
        </div>
    );
};

export default Hero;