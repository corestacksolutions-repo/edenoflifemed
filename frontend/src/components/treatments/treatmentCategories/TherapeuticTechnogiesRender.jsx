
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function TherapeuticTechnologiesRender({treatments}){
      return(
        <section className="w-full py-10">
              <div className="w-[92%] md:w-[85%] lg:w-[65%] mx-auto gap-4 my-10 ">
                        <header className="text-center my-8">
                            <h2 className="font-bold font-[Roboto] text-2xl">
                                Therapeutic Technologies
                            </h2>
                            <h3 className="hidden font-semibold">
                               Modern approaches to care
                            </h3>
                            <p className="hidden text-[1rem]">
                              Our therapeutic technologies offer additional approaches that can be incorporated 
                              into personalized care. We take time to understand your needs and explain how 
                              each technology is used, what it is intended for and whether it may be appropriate
                              for you.
                            </p>
                        </header>
                         <div className="grid md:grid-cols-3 gap-8">
                               {treatments.map((item)=>
                         <Link to={`/treatments/${item.slug}`} key={item.id} className="relative group w-full h-80 rounded-2xl overflow-hidden shadow overflow-hidden">
                              <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black/70 to-black/10"/>
                              <figure className="w-full">
                                  <img src={item.image} alt={item.imageAlt} className="h-[100%]  object-cover group-hover:scale-105 transition-all duration-500" />
                               </figure>
                               <div className="md:w-full flex flex-col gap-4 p-6">
                                  <p className="absolute left-3 top-3 font-semibold font-[Roboto] text-white/70 group-hover:text-black transition-all duration-500">
                                      {item.title}
                                  </p>
                                   <p className="hidden">
                                      {item.excerpt}
                                   </p>
                                  <Link to={`/treatments/${item.slug}`} className="absolute right-2 top-3 text-white/20">
                                    <ArrowRight className=" text -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transiton-all duration-500"/>
                                 </Link>
                                  
                               </div>  
                         </Link>  
                         )}
                         </div>
                        
              </div>
        </section>
      )
}