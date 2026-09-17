import { ArrowRightFromLineIcon, ArrowUpFromDotIcon, } from "lucide-react";



import { Link } from "react-router-dom";
import treatments from "../../data/treatments-featured";
import careBenefits from "../../data/careBenefits";

const FeaturedTreatment = ()=>{
      return(
        <section id="featured-treatments" className="scroll-mt-40 w-full  py-20 bg-blue-950">
            <div className="w-[92%] lg:w-[85%] mx-auto gap-3">
               <div className="md:col-span-4">
                   <header className="font-[Roboto] space-y-3">
                      <small className="uppercase tracking-wide text-red-700">featured treatments</small>
                      <h2 className="text-2xl font-semibold text-white/60">Some of the treatments we provide.</h2>
                    </header>   

                    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-6 py-8">
                         {treatments.map((item)=>
                          <article key={item.id} className="relative overflow-hidden">
                            <img src={item.image} 
                                 alt={item.alt} 
                                 className="w-full  h-60"
                            />
                            <div className="w-full text-gray-400 mt-6">
                                <h2 className="font-semibold font-serif">
                                    {item.title}
                                </h2>
                                <p className="font-[Roboto] font-light text-[16px] md:text-[14px] track text-justify md:text-left">
                                  {item.description}
                                </p>
                                <div className="invisible cursor-pointer flex items-center justify-center   
                                        hover:scale-110 transition-all duration-500">
                                    <ArrowUpFromDotIcon className="rotate-45 text-red-800"/>
                                </div>
                            </div>
                          </article>
                         )}
                    </div>
              </div> 
            </div>

            <footer className="relative w-[92%] lg:w-[85%] mx-auto">
              {/*view all treatments cta */}
              <Link to="/treatments" className="absolute bottom-0 right-2 text-red-700 font-semibold hover:opacity-70">
                 See all treatments
              </Link>
            </footer>
        </section>
      )
}
export default FeaturedTreatment;