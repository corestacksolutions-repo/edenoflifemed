
import React from "react";
import { IoWarningOutline } from "react-icons/io5";

import Expectations from "./Expectations";
import Form from "./Form";

const Body = () => {
    return (
        <section className="w-full mt-20 mb-10 pt-20 pb-10">

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

        </section>
    );
};

export default Body;
