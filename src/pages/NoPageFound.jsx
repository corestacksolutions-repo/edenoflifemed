import { Link } from "react-router-dom";
import { LuArrowLeft, LuLeaf } from "react-icons/lu";
import { PiFlowerLotusDuotone } from "react-icons/pi";

const NoPageFound = () => {
    return (
        <div className="w-full min-h-screen overflow-hidden bg-[#f7f8f4] flex items-center justify-center px-5">
            <div className="w-full max-w-[850px] min-h-[430px] rounded-3xl border border-emerald-900/10 bg-white shadow-xl shadow-emerald-950/5 relative overflow-hidden flex flex-col items-center justify-center text-center px-6 py-12">
                
                {/* Decorative Background Elements */}
                <PiFlowerLotusDuotone size={260} className="absolute -top-20 -right-16 text-emerald-900/[0.035] rotate-12" />
                <LuLeaf size={220} className="absolute -bottom-16 -left-16 text-emerald-900/[0.035] -rotate-45" />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center">
                    
                    {/* Icon */}
                    <div className="w-[70px] h-[70px] rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mb-7">
                        <PiFlowerLotusDuotone size={38} />
                    </div>

                    {/* Small Heading */}
                    <p className="text-emerald-700 uppercase tracking-[0.18em] text-sm font-semibold mb-4">
                        Eden of Life
                    </p>

                    {/* Main Heading */}
                    <h1 className="font-serif text-4xl md:text-5xl text-emerald-950 leading-tight">
                        This page seems to have
                        <span className="text-blue-700"> wandered off.</span>
                    </h1>

                    {/* Description */}
                    <p className="max-w-[520px] mt-5 text-emerald-950/60 leading-relaxed text-sm md:text-base">
                        The page you're looking for doesn't exist or may have
                        moved. Let's get you back on the path to wellbeing.
                    </p>

                    {/* CTA */}
                    <Link
                        to="/"
                        className="group mt-8 flex items-center gap-3 bg-emerald-800 text-white rounded-full py-2.5 px-5 font-medium hover:bg-emerald-900 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-900/20 transition-all duration-300"
                    >
                        <span className="w-8 h-8 rounded-full bg-white text-emerald-800 flex items-center justify-center group-hover:-translate-x-1 transition-transform duration-300">
                            <LuArrowLeft size={17} />
                        </span>
                        Return Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NoPageFound;