import { Link } from "react-router-dom";

export default function BodyMovementRender({treatments}){
               
               
               
               return(
                <section className="w-full">
                      <header className="hidden text-center">
                          <h2 className="font-bold text-2xl">
                              Body and Movement Treatments
                          </h2>
                      </header>
                      
                      <div className="bg-blue-50 py-20 lg:py-40 ">
                        <div className="w-[92%] lg:w-[85%] mx-auto grid md:grid-cols-3 lg:grd-cols-4 gap-4">
                        {treatments.map((item)=>
                           <Link to={`/treatments/${item.slug}`} key={item.id} className="group flex gap-4 bg-white shadow w-full h-20 rounded-2xl p-2">
                              <div  className="w-20 overflow-hidden border bg-red-50 30 rounded-xl">
                                 <img src={item.image} alt={item.imageAlt} className="w-full h-full object-cober" />
                              </div>
                              <div className="flex flex-col justify-between space-y-2">
                                 <p className="font-semibold font-[Roboto] text-[0.875rem]">{item.title}</p>   
                                 <p className="text-red-800 text-[0.85rem] font-[Roboto] group-hover:underline transition-all duration-300">
                                    Explore {item.title}
                                 </p>
                              </div> 
                          </Link>   
                        )}
                        </div>
                      </div>
                </section>
               )
} 