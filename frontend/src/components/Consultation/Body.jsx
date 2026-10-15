import React from "react";
import { Link } from "react-router-dom";
import { IoWarningOutline } from "react-icons/io5";
import { LuCalendarClock, LuArrowRight } from "react-icons/lu";

import Expectations from "./Expectations";
import Form from "./Form";

const Body = () => {

    return (
        <section className="w-full mb-10 pb-10">

            {/* Main Consultation Area */}
            <div className="w-[92%] md:w-[85%] mx-auto flex flex-col md:flex-row items-start justify-between gap-10">

                <Expectations />

                <Form />

            </div>


            {/* Confidentiality Note */}
            <div className="w-[92%] md:w-[85%] mx-auto mt-10 py-4 px-5 md:px-8 rounded-lg bg-blue-950/10">

                <div className="flex items-start gap-3 text-blue-950">

                    <IoWarningOutline
                        size={23}
                        className="shrink-0 mt-0.5"
                    />

                    <p className="text-sm md:text-base leading-relaxed">
                        Please note that all information provided will be
                        kept confidential and handled with care.
                    </p>

                </div>

            </div>


            {/* Appointment CTA */}
            <div className="w-[92%] md:w-[85%] mx-auto mt-6">

                <div className="rounded-xl border border-blue-950/10 bg-white shadow-sm px-5 py-5 md:px-7 md:py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">

                    {/* CTA Content */}
                    <div className="flex items-start gap-4">

                        <div className="w-11 h-11 shrink-0 rounded-full bg-blue-100 text-blue-950 flex items-center justify-center">
                            <LuCalendarClock size={21} />
                        </div>

                        <div>

                            <h3 className="font-semibold text-blue-950 text-lg">
                                Need to choose your own time?
                            </h3>

                            <p className="mt-1 text-sm text-black/55 leading-relaxed max-w-2xl">
                                If you'd prefer to schedule an appointment
                                at a time that works for you, you can book
                                an appointment directly instead.
                            </p>

                        </div>

                    </div>


                    {/* CTA Button */}
                    <Link
                        to="/appointment"
                        className="shrink-0 flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-blue-950 text-white text-sm font-medium hover:bg-blue-900 transition-colors duration-300"
                    >
                        <span>
                            Schedule an Appointment
                        </span>

                        <LuArrowRight size={17} />

                    </Link>

                </div>

            </div>

        </section>
    );
};

export default Body;