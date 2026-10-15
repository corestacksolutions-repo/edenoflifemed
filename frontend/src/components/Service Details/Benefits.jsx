import BenefitsRenderer from "./BenefitsRenderer";

const Benefits = ({benefits}) => {
  return (
    <section
      id="benefits"
      className="w-[90%] max-w-7xl mx-auto my-10 md:my-14 px-0 md:px-2 scroll-mt-8"
    >
      <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start">

        {/* Benefit Header */}
        <div className="w-full lg:basis-[25%] shrink-0">
          <p className="text-blue-700 uppercase tracking-[0.12em] text-sm font-semibold">
            Benefits
          </p>

          <h3 className="text-[2.25rem] md:text-4xl leading-[110%] mt-3 font-serif text-emerald-950">
            How it can help you
          </h3>

          <div className="mt-5 w-[40px] h-[2px] bg-blue-700" />
        </div>

        {/* Individual Benefits */}
        <BenefitsRenderer 
          benefits={benefits}
        />

      </div>
    </section>
  );
};

export default Benefits;