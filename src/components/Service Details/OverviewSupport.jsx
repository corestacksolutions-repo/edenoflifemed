import { FaHandHoldingHeart } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
import img from '../../assets/booking page/prep.jpg';

const OverviewSupport = ({support}) => {
  const points = [
    "Want to improve your overall wellbeing",
    "Are looking for natural approaches to health",
    "Want to understand the root of your concerns",
    "Are ready for a personalized wellness plan",
    "Want ongoing guidance on your health journey",
  ];

  return (
    <div className="w-full lg:flex-1 grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">

      {/* Conditions / Requirements */}
      <div className="bg-emerald-50 border border-emerald-900/5 p-5 md:p-6 rounded-2xl">

        {/* Heading */}
        <div className="flex items-center gap-4 text-emerald-900 mb-6">
          <div className="w-[48px] h-[48px] p-1 shrink-0 rounded-full flex items-center justify-center bg-white border border-emerald-900/10 text-emerald-700">
            <FaHandHoldingHeart size={25} />
          </div>

          <h4 className="text-xl md:text-2xl font-serif leading-tight">
            This treatment is for you if you:
          </h4>
        </div>

        {/* List */}
        <div className="flex flex-col gap-4">
          {support.suitableFor.map((point, index) => (
            <div
              key={index}
              className="text-emerald-800 flex items-start gap-3"
            >
              <div className="w-[20px] h-[20px] shrink-0 mt-0.5 rounded-full flex items-center justify-center bg-emerald-500 text-white">
                <IoCheckmark size={14} />
              </div>

              <p className="text-sm leading-relaxed">
                {point}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Picture */}
      <div className="min-h-[280px] overflow-hidden rounded-2xl">
        <img
          src={support.image}
          alt={support.heading}
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  );
};

export default OverviewSupport;