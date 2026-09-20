import { Link } from "react-router-dom";
import { LuArrowLeft, LuLeaf } from "react-icons/lu";
import { PiFlowerLotusDuotone } from "react-icons/pi";

const NoPageFound = () => {
    return (
        <div className="w-full min-h-screen overflow-hidden bg-[#f7f8fb] flex items-center justify-center px-5">

            <div className="w-full max-w-[850px] min-h-[480px] rounded-3xl bg-white border border-[#101a3a]/10 shadow-xl shadow-[#101a3a]/10 relative overflow-hidden flex flex-col items-center justify-center text-center px-6 py-12">

                {/* Decorative Background Elements */}

                <PiFlowerLotusDuotone
                    size={300}
                    className="absolute -top-24 -right-20 text-[#24478f]/[0.045] rotate-12"
                />

                <LuLeaf
                    size={250}
                    className="absolute -bottom-20 -left-20 text-[#101a3a]/[0.04] -rotate-45"
                />

                {/* Subtle Blue Background Glow */}
                <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />


                {/* Content */}

                <div className="relative z-10 flex flex-col items-center">

                    {/* Brand */}

                    <div className="flex items-center gap-3 mb-8">

                        <div className="w-12 h-12 rounded-full bg-[#101a3a] flex items-center justify-center">
                            <span className="font-serif text-xl text-white">
                                E
                            </span>
                        </div>

                        <span className="text-[#101a3a] text-xl font-semibold tracking-wide">
                            EDENAM
                        </span>

                    </div>


                    {/* Icon */}

                    <div className="w-[76px] h-[76px] rounded-full bg-[#eef4ff] text-[#24478f] flex items-center justify-center mb-7">

                        <PiFlowerLotusDuotone size={40} />

                    </div>


                    {/* Small Heading */}

                    <p className="text-[#24478f] uppercase tracking-[0.18em] text-xs sm:text-sm font-semibold mb-4">
                        Eden of Life
                    </p>


                    {/* Main Heading */}

                    <h1 className="font-serif text-4xl md:text-5xl text-[#101a3a] leading-tight">

                        Looks like you've
                        <span className="block text-[#24478f]">
                            taken a wrong turn.
                        </span>

                    </h1>


                    {/* Description */}

                    <p className="max-w-[520px] mt-5 text-[#101a3a]/60 leading-relaxed text-sm md:text-base">

                        The page you're looking for doesn't exist,
                        may have moved, or is no longer available.
                        Let's get you back to where you need to be.

                    </p>


                    {/* CTA */}

                    <Link
                        to="/"
                        className="group mt-8 flex items-center gap-3 bg-[#101a3a] text-white rounded-xl py-3 px-5 font-medium hover:bg-[#172653] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#101a3a]/20 transition-all duration-300"
                    >

                        <span className="w-8 h-8 rounded-lg bg-white text-[#101a3a] flex items-center justify-center group-hover:-translate-x-1 transition-transform duration-300">

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