import { PiFlowerLotusThin } from "react-icons/pi";
import BookingForm from "./BookingForm";

const BookingFormArea = () => {
    return (
        <div className="w-full lg:basis-[60%] min-w-0 max-w-[760px] bg-white shadow-2xl shadow-black/20 rounded-3xl p-5 sm:p-7 lg:p-8 mt-4 lg:mt-12 text-gray-900">

            {/* Header Part */}
            <header className="w-full flex items-center justify-between gap-4 mb-5">

                {/* Headings */}
                <div className="flex flex-col gap-1 text-blue-950 min-w-0">

                    <h3 className="text-3xl sm:text-[2.35rem] leading-tight font-serif font-semibold">
                        Book a Consultation
                    </h3>

                    <p className="text-sm sm:text-base text-slate-500">
                        Please provide your details and preferred time.
                    </p>

                </div>

                {/* Lotus Icon */}
                <div className="text-blue-700/5 shrink-0 hidden sm:block">
                    <PiFlowerLotusThin size={140} />
                </div>

            </header>

            {/* Underline */}
            <div className="w-full h-px bg-slate-200 mb-6" />

            {/* Actual Form */}
            <BookingForm />

        </div>
    );
};

export default BookingFormArea;