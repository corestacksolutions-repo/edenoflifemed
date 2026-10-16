import {
    PiCalendarCheckDuotone,
    PiFlowerLotusDuotone,
} from "react-icons/pi";

const Hero = () => {
    return (
        <div className="relative w-full min-h-[150px] py-8 pt-[100px] text-white text-center flex bg-blue-950 overflow-hidden mb-10">

            {/* Background decoration */}
            <PiFlowerLotusDuotone
                size={240}
                className="absolute -top-24 -right-16 text-white/[0.035] rotate-12"
            />

            <PiCalendarCheckDuotone
                size={180}
                className="absolute -bottom-20 -left-10 text-white/[0.035] -rotate-12"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/80 via-blue-950/60 to-transparent" />

            {/* Hero Content */}
            <div className="relative w-[92%] md:w-[85%] mx-auto text-left text-white px-4">

                <div className="flex items-center gap-2 text-red-500 mb-3">
                    <PiCalendarCheckDuotone size={25} />

                    <span className="text-sm uppercase tracking-[0.18em] font-medium">
                        Appointment Booking
                    </span>
                </div>

                <h1 className="font-serif font-semibold text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.05] max-w-3xl">
                    Choose a time that
                    <span className="text-blue-300"> works for you.</span>
                </h1>

                <p className="mt-5 max-w-2xl text-white/70 text-sm md:text-base leading-relaxed">
                    Select a convenient date and time for your appointment,
                    complete your booking, and let us take care of the rest.
                </p>

            </div>

        </div>
    );
};

export default Hero;