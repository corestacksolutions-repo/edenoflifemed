import ApproachRenderer from "./ApproachRenderer";

const Approach = ({approach}) => {
  return (
    <section
      id="our-approach"
      className="w-[90%] max-w-7xl mx-auto my-10 md:my-14 px-0 md:px-2 scroll-mt-8"
    >
      <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start">

        {/* Section Header */}
        <div className="w-full lg:basis-[25%] shrink-0">
          <p className="text-blue-700 uppercase tracking-[0.12em] text-sm font-semibold">
            Our Approach
          </p>

          <h3 className="text-[2.25rem] md:text-4xl leading-[110%] mt-3 font-serif text-emerald-950">
            Natural. Evidence-informed.{" "}
            <span className="text-blue-700">You.</span>
          </h3>

          <div className="mt-5 w-[40px] h-[2px] bg-blue-700" />
        </div>

        {/* Approach */}
        <ApproachRenderer 
          approach={approach}
        />

      </div>
    </section>
  );
};

export default Approach;