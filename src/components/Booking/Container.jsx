import bg from '../../assets/booking page/wellness.jpg';
import { TbPlant2 } from "react-icons/tb";
import BookingFormArea from './BookingFormArea';
import BookingBenefits from './BookingBenefits';

const Container = () => {
    return (
        <div className="w-full min-h-screen overflow-x-hidden overflow-y-auto relative bg-slate-950">

            {/* Background Image */}
            <img src={bg} alt="Background of some herbal remedies" className="absolute inset-0 w-full h-full object-cover z-0" />

            {/* Overlay */}
            <div className="absolute inset-0 w-full h-full z-10 bg-gradient-to-tr from-black/90 via-black/55 to-white/90" />

            {/* Booking Page Content */}
            <div className="relative z-20 w-full min-h-screen lg:w-[90%] lg:mx-auto flex flex-col lg:flex-row gap-10 lg:gap-14 items-center justify-center px-5 sm:px-8 lg:px-0 py-16 lg:py-20">

                {/* Text Area */}
                <div className="w-full lg:basis-[35%] lg:max-w-[430px] min-w-0 flex flex-col justify-center text-white">

                    <div className="flex items-center gap-2 text-blue-500 uppercase tracking-[0.15em] text-xs sm:text-sm font-medium mb-5">
                        <TbPlant2 size={28} />
                        <span>Book a Consultation</span>
                    </div>

                    <h2 className="text-4xl lg:text-[2.55rem] leading-[115%] font-serif font-bold">
                        We're here to support your <span className="text-blue-500">wellbeing</span> journey.
                    </h2>

                    <p className="mt-5 max-w-[350px] text-white/75 text-sm sm:text-base md:text-lg leading-relaxed">
                        Fill in the form and our care team will get back to you to confirm your consultation.
                    </p>

                    {/* Assurance Icons */}
                    <BookingBenefits />

                </div>

                {/* Form Area */}
                <BookingFormArea />

            </div>

        </div>
    );
};

export default Container;