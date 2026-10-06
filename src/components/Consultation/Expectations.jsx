import { bookingSteps } from "../../data/consultationBookingGuide";

const Expectations = () => {
    return (
        <div className="basis-full md:basis-[30%] w-full shadow bg-gradient-to-tr from-blue-200 via-blue-100/80 to-blue-200 p-6 md:p-8 rounded-xl flex flex-col gap-6">

            {bookingSteps.map(({ id, title, description, icon: Icon }) => (
                <div
                    key={id}
                    className="flex gap-3 items-start"
                >

                    {/* Icon */}
                    <div className="flex items-center justify-center text-white bg-black h-[34px] w-[34px] shrink-0 rounded-full mt-0.5">
                        <Icon size={19} />
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
            ))}

        </div>
    )
}

export default Expectations;