import { GiTreeBranch } from "react-icons/gi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { treatments } from "../../data/treatments";

const TreatmentGrids = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Individual Card */}
      {
        treatments.map(({ id, title, slug, description, icon: Icon }) => (
          <article key={id} className="bg-white border border-black/10 flex flex-col gap-2 rounded-3xl p-5 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            {/* Watermark */}
            <GiTreeBranch size={65} className="-rotate-180 absolute top-4 right-2 text-gray-300/15" />

            {/* Icon */}
            <div className="bg-blue-100 w-[42px] h-[42px] rounded-full flex items-center justify-center text-emerald-800 shrink-0">
              <Icon size={20} />
            </div>

            {/* Heading */}
            <h3 className="font-serif text-[1rem] font-semibold text-emerald-950 mt-1">
              {title}
            </h3>

            {/* Description */}
            <p className="text-sm tracking-wide text-black/60 leading-relaxed">
              {description}
            </p>

            {/* CTA */}
            <Link to={`/treatments/${slug}`} className="mt-auto pt-2 flex gap-1 tracking-wide items-center text-sm text-blue-700 font-medium w-fit hover:gap-2 transition-all duration-300">
              Learn More
              <IoIosArrowRoundForward size={20} />
            </Link>
          </article>
        ))
      }
    </div>
  )
}

export default TreatmentGrids