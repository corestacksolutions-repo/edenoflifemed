import { PiArrowLeft, PiArrowRight, PiQuotesBold, PiQuotesLight, PiShieldChevronLight } from "react-icons/pi"
import testimonials from "../../data/testimonials"
import { AnimatePresence } from "framer-motion"
import { GoQuote } from "react-icons/go"
import { BsFillChatQuoteFill } from "react-icons/bs"
export default function Testmonials(){
    return(
        <section className="w-full ">
            <header className="w-[92%] md:w-[50%] mx-auto text-center space-y-6">
                <h2 className="text-3xl text-blue-800">From our clients</h2>
                <p className="text-sky-900 text-[1.12rem] leading-relaxed">
                    The experience of care can be just as important as the care itself. 
                    Here's what some of our clients have to say about their experience 
                    at Eden of Life.
                </p>
            </header>
            <div className="border relative z-10 flex justify-between gap-4 overflow-hidden w-[92%] lg:w-[85%] mx-auto px-6 pb-16 my-10">
                 {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="max-w-[330px] shrink-0 flex flex-col items-center bg-white p-4 rounded-2xl border border-gray-200">
                        <BsFillChatQuoteFill className="text-4xl text-green-700 mx-auto mb-4" />
                        <p className="text-lg italic text-center text-gray-700">"{testimonial.quote}"</p>
                        
                        <img src="" alt="CA" className="size-16 rounded-full mt-4 border" />
                        <p className="font-semibold text-blue-900 mt-4">{testimonial.name}</p>
                        
                    </div>
                ))}

                {/*controllers */}
                <div className="absolute z-50 left-[-10px] h-[83%] w-10  rounded-l-2xl flex flex-col justify-center">
                  <button className="px-3 py-1 border">
                     <PiArrowLeft className="text- text-2xl mx-auto" />
                  </button>
                </div>
                <div className="absolute z-50 right-[-10px] h-[83%] w-10  rounded-r-2xl flex flex-col justify-center">
                  <button className="px-3 py-1 border">
                     <PiArrowRight className="text- text-2xl mx-auto" />
                  </button>
                </div>

                {/*sliders */}
                 <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2">
                       {testimonials.map((testimonial) => (
                            <button key={testimonial.id} className="w-[16px] h-[16px] rounded-full bg-sky-800">
                                
                            </button>
                        ))}
                 </div>
            </div>
            <footer className="w-full w-[92%] lg:w-[85%] mx-auto my-8">

            </footer>
        </section>
    )
}