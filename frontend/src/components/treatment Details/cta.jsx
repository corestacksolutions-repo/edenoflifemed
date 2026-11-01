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
                <div className="relative w-[92%] lg:w-[85%] mx-auto space-y-8 px-6 py-16 text-center rounded-2xl md:border overflow-hidden">
                      
                      <h2 className="relative md:w-[60%] lg:w-[70%] mx-auto text-[2.75rem] font-bold ">
                          {treatment.cta.title}
                      </h2>
                      <p className="relative font-[Roboto] font-light mx-auto text-[1.25rem] lg:w-[60%]">
                         {treatment.cta.description}
                      </p>
                      <div className="w-fit relative flex items-center gap-4 mx-auto">
                          <Link to={`/appointment`}
                                className="shadow p-3 rounded-xl bg-red-800 text-white font-semibold hover:bg-red-900 transition-all duration-300" 
                          >
                            {/* {treatment.cta.primaryLabel}   */}
                            Book an Appointment
                          </Link>
                          <Link to={`/consultation`}
                                className="hidden shadow p-3 lg:px-10 rounded-xl bg-white text-blue-900 font-semibold hover:bg-blue-900 hover:text-white transition-all duration-300" 
                          >
                            {treatment.cta.secondaryLabel}  
                          </Link>
                      </div>

                      
                </div>
           </section>
       )
}