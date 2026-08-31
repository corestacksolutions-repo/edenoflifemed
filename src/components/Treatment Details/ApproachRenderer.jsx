import { treatmentPhilosophies } from "../../data/treatmentPhilosophies";

const ApproachRenderer = ({approach}) => {
  return (
    <div className="w-full lg:flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

      {approach.map(
        ({ id, title, description, icon: Icon }) => (
          <article
            key={id}
            className="
              flex flex-col sm:flex-row xl:flex-col
              gap-4
              p-5
              rounded-2xl
              border border-black/10
              bg-white
            "
          >

            {/* Icon */}
            <div className="shrink-0 bg-emerald-600/10 w-[52px] h-[52px] rounded-full flex items-center justify-center text-emerald-700">
              <Icon size={23} />
            </div>

            {/* Details */}
            <div className="flex flex-col gap-2 text-emerald-950">
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

export default ApproachRenderer;