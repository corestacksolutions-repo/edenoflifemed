import { Link } from "react-router-dom"

export default function CTA ({treatment}){
       return(
           <section className="relative w-full py-20 bg-blue-50">
                {/*bg image */}
                <img src="https://i.pinimg.com/1200x/03/02/95/03029570ca59334a95532749123db619.jpg" 
                     alt="cta-image" 
                     className="hidden absolute inset-0 w-full h-full object-cover"
                />
                {/*overlay */}
                <div className="absolute inset-0 w-full h-full"/>
                <div className="relative w-[92%] lg:w-[85%] mx-auto space-y-6 px-6 py-16 rounded-2xl md:border overflow-hidden">
                      {/*background element */}
                      <div className="absolute right-0 top-0  h-[150%] w-[60%] rotate-45 bg-gradient-to-tr from-blue-900/40 to-blue-950/40 rounded-[10%] xl -translate-y-[10%] translate-x-[75%] lg:-translate-y-[0%] lg:translate-x-[40%]">
                          <div className="hidden lg:blok w-40 h-60 -rotate-45 -translate-x-[5%] translate-y-[120%] rounded-3xl bg-gradient-to-br from-blue-950 via-blue-900 to-blue-50/0 overflow-hidden">
                             <img src={treatment.image} alt={treatment.imageAlt} className=" object-cover w-full h-full" />
                          </div>
                      </div>
                      
                      <h2 className="relative md:w-[60%] lg:w-[70%] text-[2.75rem] font-bold ">
                          {treatment.cta.title}
                      </h2>
                      <p className="relative font-[Roboto] font-light text-[1.25rem] lg:w-[60%]">
                         {treatment.cta.description}
                      </p>
                      <div className="relative flex items-center gap-4">
                          <Link to={`/consultation`}
                                className="shadow p-3 rounded-xl bg-red-800 text-white font-semibold hover:bg-red-900 transition-all duration-300" 
                          >
                            {treatment.cta.primaryLabel}  
                          </Link>
                          <Link to={`/consultation`}
                                className="shadow p-3 lg:px-10 rounded-xl bg-white text-blue-900 font-semibold hover:bg-blue-900 hover:text-white transition-all duration-300" 
                          >
                            {treatment.cta.secondaryLabel}  
                          </Link>
                      </div>

                      
                </div>
           </section>
       )
}