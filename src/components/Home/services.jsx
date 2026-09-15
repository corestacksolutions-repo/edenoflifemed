import { 
    LuLeaf,
    LuApple,
    LuActivity,
    LuHeartPulse,
    LuBrain
 } from "react-icons/lu";
import services from "../../data/services";
import { Link } from "react-router-dom";
import { ArrowBigRight, ArrowBigRightDash, ArrowDownLeftFromCircle, ArrowRight } from "lucide-react";

export default function Services(){
       {/*icon map 
         seperated from data for semantic purposes*/}
        const iconMap = {
                    leaf: LuLeaf,
                    apple: LuApple,
                    activity: LuActivity,
                    "heart-pulse": LuHeartPulse,
                    brain: LuBrain,
              };
        
       return(
            <section className="w-full my-20">
                 <header className="max-w-3xl mx-auto text-center space-y-6 my-10">
                     <h2 className="text-[2.5rem] font- text-blue-800">our services</h2>
                     <p className="text-[1.12rem]">
                        From natural medicine and nutrition to digestive and women's health, 
                        we offer a range of services designed to support different aspects of 
                        your health and wellbeing. Explore the care options available at Eden of Life.
                     </p>

                 </header>

                <div className="relative w-[92%] lg:w-[85%] mx-auto grid md:grid-cols-3 gap-x-6 gap-y-4">
                      {services.map((service)=>{
                        const Icon = iconMap[service.icon];

                        return(
                          <article key={service.id} className="relative group w-full shadow bg-white space-y-4 p-8 rounded-xl">
                             <div className="w-fit p-3 rounded-full border border-blue-100">
                               <Icon className="size-6"/>
                             </div>
                             <h3 className="font-semibold text-blue-800">
                                {service.title}
                             </h3>
                             <p className="">
                                {service.description}
                             </p>

                             <Link to="/services" 
                                   className="absolute bottom-3 right-8 cursor-pointer p-1 bg-black/10 rounded-full text-blue-700 mt-6 -rotate-[35deg] 
                                              translate-y-3 -translate-x-3 opacity-0 group-hover:-translate-y-0 group-hover:translate-x-0 
                                              group-hover:opacity-100 transitiona-all duration-500">
                                 <ArrowRight/>
                              </Link>
                          </article>
                        )})}
                        
                        <Link to="/services "
                              className="w-full md:w-fit absolute bottom-[-80px] md:bottom-0 mt:8 md:right-0 px-6 py-3 flex bg-red-700/90 rounded-xl font-bold">
                             <span className="m-auto text-white">See all</span> 
                        </Link>
                      
                </div>

                <footer className="">

                </footer>
            </section>
       )
}