import { GiTreeBranch } from "react-icons/gi";
import { PiFlowerLotusDuotone } from "react-icons/pi";
import { IoCheckmarkOutline } from "react-icons/io5";
import { expectations } from "../../data/treatmentExpectations";

const Expectations = () => {
  return (
    <div className="bg-emerald-50 p-5 w-full min-h-[250px] overflow-hidden relative rounded-3xl border border-emerald-900/5">
      {/* Watermark */}
      <GiTreeBranch size={150} className="scale-x-[-1] rotate-90 absolute -bottom-2 -right-4 text-emerald-900/5" />

      {/* Header */}
      <header className="mb-5 relative z-10">
        <h3 className="text-emerald-800 font-semibold tracking-wide relative uppercase flex items-center gap-3 text-base">
          <PiFlowerLotusDuotone size={25} className="text-blue-600" />
          What to Expect
          <div className="absolute h-[1px] w-[24px] -bottom-1 left-0 border border-blue-600"></div>
        </h3>
      </header>

      {/* Expectation Items */}
      <div className="flex flex-col gap-3 relative z-10">
        {
          expectations.map(({ id, description }) => (
            <div key={id} className="flex gap-3 items-start max-w-[360px]">
              {/* Icon */}
              <div className="w-[20px] h-[20px] shrink-0 flex justify-center items-center rounded-full bg-emerald-500 text-white mt-0.5">
                <IoCheckmarkOutline size={14} />
              </div>

              {/* Description */}
              <p className="tracking-wide text-sm text-emerald-800 leading-relaxed">
                {description}
              </p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Expectations