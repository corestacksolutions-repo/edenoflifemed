import { Link } from 'react-router-dom'
import bg from '../../assets/treatment page/treats.jpg'
import { LuCalendarCheck } from "react-icons/lu";

const CTA = () => {
  return (
    <div className="w-full min-h-[250px] relative rounded-3xl overflow-hidden">
      {/* Background Image */}
      <img 
        src={bg} 
        alt="Background image of some remedy ingredients" 
        className="w-full h-full object-cover scale-x-[-1] absolute inset-0 z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 w-full h-full z-10 bg-gradient-to-r from-emerald-950/95 via-emerald-900/80 to-emerald-500/10"></div>

      {/* Text Box */}
      <div className="relative w-[90%] mx-auto px-2 min-h-[250px] flex flex-col justify-center z-20">
        <div className="w-full max-w-[240px] text-white">
          {/* Heading */}
          <h3 className="font-serif text-[1.45rem] leading-tight">
            Ready to begin your wellness journey?
          </h3>

          {/* Leading Text */}
          <p className="my-3 text-sm text-white/75 leading-relaxed">
            Book a consultation and let our care team support you.
          </p>

          {/* Action Button */}
          <Link to="/booking" className="flex items-center mt-4 gap-2 cursor-pointer text-center justify-center text-emerald-800 font-medium bg-white rounded-lg py-2.5 px-3 text-sm hover:bg-blue-50 transition-colors duration-300">
            <LuCalendarCheck size={18} />
            Book a Consultation
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CTA