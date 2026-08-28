import bg from '../../assets/treatment page/treats.jpg'
import { PiFlowerLotusDuotone } from "react-icons/pi";

const Hero = () => {
  return (
    <section className="w-full h-[380px] overflow-hidden relative bg-emerald-950">
      {/* Background Image */}
      <img 
        src={bg} 
        alt="Background image of some remedy ingredients" 
        className="w-full h-full object-cover scale-x-[-1] absolute inset-0 z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 w-full h-full z-10 bg-gradient-to-r from-emerald-950/90 via-emerald-900/80 to-emerald-500/10"></div>

      {/* Text Box */}
      <div className="relative w-[90%] max-w-7xl mx-auto mt-10 px-5 h-full flex flex-col justify-center z-20">
        {/* Mini Heading */}
        <div className="text-blue-700 font-semibold tracking-wide relative uppercase flex items-center gap-3 text-sm w-fit">
          <PiFlowerLotusDuotone size={30} />
          <span>Treatments</span>
          <div className="absolute h-[1px] w-[32px] -bottom-1 left-0 border border-blue-700"></div>
        </div>

        {/* Heading */}
        <h2 className="font-serif text-[42px] md:text-[48px] leading-[105%] my-4 max-w-[460px] text-white">
          Natural solutions for lasting <span className="text-blue-700">wellness</span>.
        </h2>

        {/* Paragraph */}
        <p className="max-w-[380px] text-white/75 leading-relaxed text-sm md:text-base">
          Our treatments are designed to work with your body, promote healing, and support your journey to optimal health.
        </p>
      </div>
    </section>
  )
}

export default Hero