import {
  Search,
  Leaf,
  UserRound,
  Lightbulb,
} from "lucide-react";
import { treatmentPhilosophies } from "../../data/treatmentPhilosophies";

const PhilosophyRenderer = () => {
  return (
    <div className="w-full lg:flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {/* Philosophy Item */}
      {
        treatmentPhilosophies.map(({ id, title, description, icon: Icon }) => (
          <div key={id} className="flex gap-3 items-start">
            {/* Icon */}
            <div className="shrink-0 text-emerald-600 pt-1">
              <Icon size={21} />
            </div>

            {/* Philosophy Details */}
            <div className="flex flex-col gap-2 text-emerald-800">
              <h4 className="font-semibold text-[0.95rem]">
                {title}
              </h4>

              <p className="text-sm leading-relaxed text-emerald-800/75">
                {description}
              </p>
            </div>
          </div>
        ))
      } 
    </div>
  )
}

export default PhilosophyRenderer