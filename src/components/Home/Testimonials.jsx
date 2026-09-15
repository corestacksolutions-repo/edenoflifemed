import { PiArrowLeft, PiArrowRight, PiQuotesBold, PiQuotesLight, PiShieldChevronLight } from "react-icons/pi"
import testimonials from "../../data/testimonials"
import TestimonialCard from "./testimonialCard"

import Carousel from "../carousel"
import { AnimatePresence } from "framer-motion"
import { GoQuote } from "react-icons/go"
import { BsFillChatQuoteFill } from "react-icons/bs"
import { Car } from "lucide-react"


export default function Testmonials(){
    return(
        <section className="w-full mx-auto  rounded-3xl  py-20 space-y-10 relative overflow-hidden">
            <header className="w-[92%] md:w-[50%] mx-auto text-center space-y-6">
                <h2 className="text-3xl text-blue-800">From our clients</h2>
                <p className="text-sky-900 text-[1.12rem] leading-relaxed">
                    The experience of care can be just as important as the care itself. 
                    Here's what some of our clients have to say about their experience 
                    at Eden of Life.
                </p>
            </header>


            {/*carousel */}
            <div className="w-[92%] lg:w-[85%] mx-auto relative">
               <Carousel slides={testimonials} />
            </div>

        </section>
    )
}