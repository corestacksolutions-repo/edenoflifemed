import { Link } from 'react-router-dom'
import bg from '../../assets/treatment page/treats.jpg'
import { LuCalendarCheck } from "react-icons/lu";

const CTA = () => {
  return (
    <div className="w-full min-h-[250px] relative rounded-3xl overflow-hidden">
      {/* Background Image */}
      <img 
        src='https://i.pinimg.com/1200x/c8/e9/f8/c8e9f8981d8e6bb2346ec817d52565c0.jpg' 
        alt="Background image of some remedy ingredients" 
        className="w-full h-full object-cover scale-x-[-1] absolute inset-0 z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 w-full h-full z-10 bg-gradient-to-r from-black/70 via-black/30 to-emerald-500/0"></div>

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
          <Link to="/consultation" className="flex items-center mt-4 gap-2 cursor-pointer text-center justify-center text-white font-medium bg-red-800 rounded-lg py-2.5 px-3 text-sm hover:bg-red-900 transition-colors duration-300">
            <LuCalendarCheck size={18} />
            Book a Consultation
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CTA