import bg from '../../assets/treatment page/treats.jpg';
import { PiFlowerLotusDuotone } from "react-icons/pi";
import { treatments } from '../../data/treatments';

const Hero = ({hero}) => {
  return (
    <section className="w-full h-[380px] overflow-hidden relative bg-emerald-950">
      
      {/* Background Image */}
      <img
        src={hero.hero.heroImage}
        alt="Background image of some remedy ingredients"
        className="absolute inset-0 z-0 w-full h-full object-cover scale-x-[-1]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-10 w-full h-full bg-gradient-to-r from-emerald-950/95 via-emerald-900/85 to-emerald-500/10" />

      {/* Text Box */}
      <div className="relative z-20 w-[90%] max-w-7xl h-full mx-auto px-2 sm:px-5 flex flex-col justify-center py-10">
        
        {/* Mini Heading */}
        <div className="relative flex items-center gap-3 w-fit text-blue-600 uppercase tracking-[0.12em] font-semibold text-xs sm:text-sm">
          <PiFlowerLotusDuotone size={28} />

          <span> {hero.hero.eyebrow}</span>

          <div className="absolute left-0 -bottom-2 w-[32px] h-[1px] bg-blue-600" />
        </div>

        {/* Heading */}
        <h2 className="font-serif text-[38px] sm:text-[44px] md:text-[48px] leading-[105%] my-4 max-w-[500px] text-white">
          {hero.title}
        </h2>

        {/* Paragraph */}
        <p className="max-w-[420px] text-white/75 leading-relaxed text-sm md:text-base">
          {hero.hero.description}
        </p>

      </div>
    </section>
  );
};

export default Hero;