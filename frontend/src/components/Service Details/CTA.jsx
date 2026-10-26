import bg from '../../assets/treatment page/treats.jpg';
import { LuCalendarCheck } from "react-icons/lu";
import { Link } from 'react-router-dom';

const CTA = ({cta}) => {
  return (
    <section className="w-[90%] max-w-7xl mx-auto my-8 md:my-12 h-[320px] md:h-[360px] rounded-3xl overflow-hidden relative bg-emerald-950">

      {/* Background Image */}
      <img
        src={cta.image}
        alt="Background image of some remedy ingredients"
        className="absolute inset-0 z-0 w-full h-full object-cover scale-x-[-1]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-10 w-full h-full bg-gradient-to-r from-black/95 via-black/85 to-black/10" />

      {/* Content */}
      <div className="relative z-20 w-[90%] max-w-7xl h-full mx-auto px-2 sm:px-5 flex flex-col justify-center">

        <div className="max-w-[470px] text-white">

          {/* Heading */}
          <h3 className="text-[2.1rem] md:text-4xl leading-[110%] font-serif">
            {cta.heading}
          </h3>

          {/* Paragraph */}
          <p className="mt-4 max-w-[380px] text-white/75 leading-relaxed text-sm md:text-base">
            {cta.description}
          </p>

          {/* CTA */}
          <Link
            to="/appointment"
            className="
              w-fit
              mt-6
              flex items-center gap-2
              justify-center
              text-red-900
              font-medium
              bg-white
              rounded-lg
              py-2.5 px-4
              text-sm
              hover:bg-red-50
              transition-colors duration-300
            "
          >
            <LuCalendarCheck size={18} />
            Book an Appointment
          </Link>

        </div>

      </div>
    </section>
  );
};

export default CTA;