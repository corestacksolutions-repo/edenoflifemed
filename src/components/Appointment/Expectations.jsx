import { appointmentBookingGuide } from "../../data/appointmentBookingGuide";

const Expectations = () => {
    return (
        <div className="basis-full md:basis-[30%] w-full shadow bg-gradient-to-tr from-blue-200 via-blue-100/80 to-blue-200 p-6 md:p-8 rounded-xl flex flex-col gap-6">

            {/* Heading */}
            <div className="mb-1">

                <h3 className="font-serif text-xl md:text-2xl text-blue-950">
                    Booking Guide
                </h3>

                <p className="mt-1 text-sm text-black/55 leading-relaxed">
                    Here's what to expect when booking your appointment.
                </p>

            </div>


            {/* Guide */}
            {appointmentBookingGuide.map(
                ({ id, title, description, icon: Icon }) => (
                    <div
                        key={id}
                        className="flex gap-3 items-start"
                    >

                        {/* Icon */}
                        <div className="flex items-center justify-center text-white bg-black h-[34px] w-[34px] shrink-0 rounded-full mt-0.5">
                            <Icon size={18} />
                        </div>

                        {/* Text */}
                        <div className="flex flex-col">

                            <h4 className="font-semibold mb-1 leading-tight">
                                {title}
                            </h4>

                            <p className="tracking-wide font-light text-[14px] leading-relaxed text-black/70">
                                {description}
                            </p>

                        </div>

                    </div>
                )
            )}

        </div>
    );
};

export default Expectations;