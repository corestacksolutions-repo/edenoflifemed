import { IoCheckmarkOutline } from "react-icons/io5";
import { treatmentPhilosophies } from "../../data/treatmentPhilosophies";

const ExpectationsRenderer = ({expectations}) => {
  return (
    <div className="w-full lg:flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 bg-emerald-50 border border-emerald-900/10 rounded-2xl p-4 md:p-5">

      {expectations.map(
        ({ id, title, description, icon: Icon }) => (
          <article
            key={id}
            className="
              flex flex-col items-center text-center
              gap-4
              p-4
              rounded-xl
              bg-white/60
              border border-emerald-900/5
              last:border-r-0
            "
          >

            {/* Icon */}
            <div className="relative shrink-0 w-[48px] h-[48px] rounded-full flex items-center justify-center bg-emerald-600 text-white">
              <Icon size={21} />

              <div className="absolute -right-1 -bottom-1 w-[18px] h-[18px] rounded-full bg-blue-600 flex items-center justify-center border-2 border-white">
                <IoCheckmarkOutline size={11} />
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col gap-2 text-emerald-900">
              <h4 className="font-semibold text-[0.95rem]">
                {title}
              </h4>

              <p className="text-sm leading-relaxed text-black/55">
                {description}
              </p>
            </div>

          </article>
        )
      )}

    </div>
  );
};

export default ExpectationsRenderer;