import { LuQuote } from "react-icons/lu";

export default function TestimonialCard({testimonial}) {
     return(
        <div  className="w-full h-full shrink-0 flex flex-col items-center  p-4  border-r border-gray-200">
            <LuQuote className="text-4xl  mx-auto mb-4" />
            <p className="text-lg italic text-center ">"{testimonial.quote}"</p>
            
            <img src="" alt="CA" className="size-16 rounded-full mt-4 border" />
            <p className="font-semibold  mt-4">{testimonial.name}</p>   
        </div>
     )
}