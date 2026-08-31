import { RxPeople } from "react-icons/rx";
import { SlClock } from "react-icons/sl";
import OverviewSupport from "./OverviewSupport";

const Overview = ({overview}) => {
  return (
    <section
      id="overview"
      className="w-[90%] max-w-7xl mx-auto mt-8 md:mt-12 px-0 md:px-2 scroll-mt-8"
    >
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-stretch">

        {/* Main Overview */}
        <div className="w-full lg:basis-[38%]">
          
          <header>
            <p className="text-blue-700 uppercase tracking-[0.12em] text-sm font-semibold">
              {overview.eyebrow}
            </p>

            <h3 className="text-[2.25rem] md:text-4xl leading-[110%] mt-3 mb-8 font-serif relative text-emerald-950">
              {/* Understand. Heal.{" "}
              <span className="text-blue-700">Thrive.</span> */}

              {overview.heading}

              <span className="absolute h-[2px] w-[40px] bg-blue-700 -bottom-4 left-0" />
            </h3>
          </header>

          {/* Description */}
          <div className="mb-7 text-black/65">
            <p className="leading-relaxed tracking-wide">
              {overview.paragraphs[0]}
            </p>

            <p className="mt-4 leading-relaxed tracking-wide">
              {overview.paragraphs[1]}
            </p>
          </div>

          {/* Key Information */}
          <div className="flex flex-col gap-3">
            
            <div className="flex items-center gap-4">
              <SlClock
                size={23}
                className="shrink-0 text-blue-700"
              />

              <p className="tracking-wide text-sm text-black/65">
                <span className="font-semibold text-emerald-950">
                  Duration:
                </span>{" "}
                {overview.duration}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <RxPeople
                size={23}
                className="shrink-0 text-blue-700"
              />

              <p className="tracking-wide text-sm text-black/65">
                <span className="font-semibold text-emerald-950">
                  Ideal for:
                </span>{" "}
                {overview.idealFor}
              </p>
            </div>

          </div>
        </div>

        {/* Supporting Content */}
        <OverviewSupport 
            support={overview}
        />

      </div>

      {/* Divider */}
      <div className="w-full h-px bg-black/10 my-10 md:my-14" />
    </section>
  );
};

export default Overview;