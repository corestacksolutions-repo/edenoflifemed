import { bookingBenefits } from "../../data/bookingBenefits";

const BookingBenefits = () => {
    return (
        <div className="mt-7 flex flex-col gap-5 w-full max-w-[370px]">

            {bookingBenefits.map(({ id, title, description, icon: Icon }) => (

                <article key={id} className="flex items-center gap-4 w-full min-w-0">

                    {/* Icon Container */}
                    <div className="bg-white w-12 h-12 sm:w-14 sm:h-14 shrink-0 flex justify-center items-center rounded-full text-blue-700 shadow-lg shadow-black/10">
                        <Icon size={23} strokeWidth={1.8} />
                    </div>

                    {/* Text Container */}
                    <div className="flex flex-col min-w-0 text-white">

                        <h4 className="font-semibold text-base sm:text-lg leading-tight">
                            {title}
                        </h4>

                        <p className="mt-1 text-xs sm:text-sm text-white/65 leading-relaxed">
                            {description}
                        </p>

                    </div>

                </article>

            ))}

        </div>
    );
};

export default BookingBenefits;