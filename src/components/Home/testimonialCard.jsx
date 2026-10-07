import { LuQuote } from "react-icons/lu";

export default function TestimonialCard({testimonial}) {
     return(
        <div key={testimonial.id} className="border border-black/5 h-fit flex flex-col gap-3 md:flex-row items-center d:items-start justify-between rounded p-6 md:p-0">
            <div className="w-full md:w-[70%] md:pl-8 text-start">
                <LuQuote className="md:hidden size-6 mx-auto  mb-4" />
                 <p className="hidden md:block text-3xl font-bold font-[Roboto]  my-4">
                    {testimonial.name}
                </p> 
                <p className="text-lg italic ">
                    {testimonial.quote}
                </p>
            </div>

            <div className="flex flex-col items-center md:block w-fit md:w-60 md:h-full">
                <img src={testimonial.image} alt={testimonial.alt} className="w-20 h-20 md:h-[95%] rounded-full md:rounded-none md:w-full" />
                <p className="md:hidden font-semibold  my-4">
                    {testimonial.name}
                </p>  
            </div> 
        </div>
     )
}