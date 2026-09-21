import { Link } from "react-router-dom"

export default function CTA ({treatment}){
       return(
           <section className="hidden relative w-full py-20 lg:py-40">
                {/*bg image */}
                <img src="https://i.pinimg.com/1200x/03/02/95/03029570ca59334a95532749123db619.jpg" 
                     alt="cta-image" 
                     className="absolute inset-0 w-full h-full object-cover"
                />
                {/*overlay */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-white/70 via-black/60 to-black/0"/>
                <div className="relative w-[92%] lg:w-[65%] mx-auto text-center space-y-6">
                      <h2 className="text-[3rem] lg:text-[3.5rem] font-bold">
                          {treatment.cta.title}
                      </h2>
                      <p className="font-[Roboto] font-light text-[2rem]">
                         {treatment.cta.description}
                      </p>
                      <div className="flex justify-center items-center gap-4">
                          <Link to={`/consultation`}
                                className="border p-3 rounded-xl" 
                          >
                            {treatment.cta.primaryLabel}  
                          </Link>
                          <Link to={`/consultation`}
                                className="" 
                          >
                            {treatment.cta.secondaryLabel}  
                          </Link>
                      </div>
                </div>
           </section>
       )
}