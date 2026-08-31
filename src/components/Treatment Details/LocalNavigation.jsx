import { LuCalendarCheck } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { localNavigation } from "../../data/localNavigation";

const LocalNavigation = () => {
  return (
    <section className="w-[90%] max-w-7xl mx-auto my-6 md:my-8 bg-white rounded-2xl border border-black/10 shadow-sm px-4 py-4 md:px-6">
      
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4">
        
        {/* Local Navigation */}
        <nav className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-2">
          {localNavigation.map(({ id, title, slug, icon: Icon }) => (
            <a
              href={`#${slug}`}
              key={id}
              className="
                flex items-center justify-center gap-2
                px-3 py-2.5
                rounded-lg
                text-sm
                text-black/50
                hover:text-emerald-800
                hover:bg-emerald-50
                transition-all duration-300
              "
            >
              <Icon size={18} />
              <span>{title}</span>
            </a>
          ))}
        </nav>

        {/* CTA */}
        <Link
          to="/booking"
          className="
            shrink-0
            flex items-center justify-center gap-2
            w-full lg:w-auto
            text-center
            text-white
            font-medium
            bg-emerald-800
            rounded-lg
            py-2.5 px-5
            text-sm
            hover:bg-emerald-900
            transition-colors duration-300
          "
        >
          <LuCalendarCheck size={18} />
          Book a Consultation
        </Link>

      </div>
    </section>
  );
};

export default LocalNavigation;