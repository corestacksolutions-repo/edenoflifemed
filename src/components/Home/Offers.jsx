import { wellnessServices } from "../../data/heroOffers";

const Offers = () => {
    return (
        <div className="w-[92%] lg:w-[85%] min-h-[120px] mx-auto mb-5 mt-3 z-20  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 bg-black/55 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden">

            {wellnessServices.map(({ id, title, description, icon: Icon }, index) => (
                <article key={id} className={`min-h-[120px] p-4 lg:p-3 flex flex-col gap-2 text-center items-center justify-center cursor-pointer transition-all duration-300 hover:bg-blue-700/20 ${index !== wellnessServices.length - 1 ? "lg:border-r lg:border-white/20" : ""}`}>

                    <div className="bg-white w-[42px] h-[42px] rounded-full flex items-center justify-center text-blue-700 shrink-0 shadow-md">
                        <Icon size={15} strokeWidth={1.8} />
                    </div>

                    <h3 className="text-white font-medium text-base lg:text-lg leading-tight">
                        {title}
                    </h3>

                    <p className="text-white/75 font-light text-xs lg:text-sm leading-relaxed max-w-[190px]">
                        {description}
                    </p>

                </article>
            ))}
        </div>
    );
};

export default Offers;