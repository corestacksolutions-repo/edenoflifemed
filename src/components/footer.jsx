
import { ArrowRight } from "lucide-react";
import { 
   LiaFacebook, 
   LiaLinkedin 
} from "react-icons/lia";


import { Link } from "react-router-dom";

export default function Footer() {
           const currentYear = new Date().getFullYear();
           return (
            <footer className="relative w-full bg-black text-white pb-10">
                <div className="w-[92%] lg:w-[85%] mx-auto grid  md:grid-cols-3 gap-3 rounded-xl md:rounded-3xl p-6 bg-blue-950 -translate-y-10">
                      {/*company info */}
                      <div className="w-full h-20">
                         <div className="flex items-center gap-2">
                            <span className="size-[45px] rounded-full bg-red-900">
                            </span>
                            <h2 className="text-2xl text-white font-bold uppercase">Edenam</h2>
                         </div>
                            <p className="hidden text-[1.15rem] text-white leading-tight">
                                Hope for your life
                            </p>

                      </div>

                      {/*quick links & cta */}
                      <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-2 gap-3 lg:grid-cols-3">
                          {/*services */}
                          <div className="w-full h-full">
                             <h3 className="font-[Roboto]">Services</h3>
                             <ul className="space-y-3 mt-3 text-white/50">
                                <li>
                                   <Link to="/services" className=" hover:text-white transition-all duration-300">
                                      Natural Medicine Services
                                   </Link>
                                </li>
                                <li>
                                   <Link to="/services" className=" hover:text-white transition-all duration-300">
                                      Health Assessments
                                   </Link>
                                </li>
                                <li>
                                   <Link to="/services" className=" hover:text-white transition-all duration-300">
                                      NutritionalCounselling
                                   </Link>
                                </li>
                                <li>
                                   <Link to="/services" className=" hover:text-white transition-all duration-300">
                                      Therapeutic Diet Planning
                                   </Link>
                                </li>
                                <li>
                                   <Link to="/services" className="text-white/50 hover:text-white transition-all duration-300">
                                      Digestive Health Support
                                   </Link>
                                </li>
                                <li>
                                   <Link to="/services" className="text-white/50 hover:text-white transition-all duration-300">
                                     Nutritional Supplements
                                   </Link>
                                </li>
                                <li>
                                   <Link to="/services" className="text-white/50 hover:text-white transition-all duration-300">
                                      HerbalMedicine.
                                   </Link>
                                </li>
                             </ul>
                             <button className="flex items-center gap-2 mt-6 border-b text-white/50 italic text-white/30 border-white/20">
                                view all services
                                <ArrowRight className="size-4 -rotate-[35deg]"/>
                             </button>

                          </div>

                          {/*treatments */}
                          <div className="w-full h-full">
                             <h3 className="font-[Roboto]">Treatments</h3>
                             <ul className="space-y-3 mt-3 text-white/50">
                                <li>
                                   <Link to="/services" className=" hover:text-white transition-all duration-300">
                                      Massage
                                   </Link>
                                </li>
                                <li>
                                   <Link to="/services" className=" hover:text-white transition-all duration-300">
                                      Cupping
                                   </Link>
                                </li>
                                <li>
                                   <Link to="/services" className=" hover:text-white transition-all duration-300">
                                      Acupuncture
                                   </Link>
                                </li>
                                <li>
                                   <Link to="/services" className=" hover:text-white transition-all duration-300">
                                      Physiotherapy
                                   </Link>
                                </li>
                                <li>
                                   <Link to="/services" className="text-white/50 hover:text-white transition-all duration-300">
                                      Hydrotherapy
                                   </Link>
                                </li>
                                <li>
                                   <Link to="/services" className="text-white/50 hover:text-white transition-all duration-300">
                                     Photo therapy
                                   </Link>
                                </li>
                                <li>
                                   <Link to="/services" className="text-white/50 hover:text-white transition-all duration-300">
                                      Quantum Resistance
                                   </Link>
                                </li>
                             </ul>
                             <button className=" flex items-center gap-2 mt-6 border-b text-white/50 italic border-white/20">
                                All treatments
                                <ArrowRight className="size-4 -rotate-[35deg]"/>
                             </button>
                          </div>

                          {/*home, contact, booking */}
                          <div className="w-full h-full flex flex-col">
                              <h3 className="font-[Roboto]">Company</h3>
                              <ul className="space-y-3 mt-3 text-white/50">
                                  <li className="">
                                      <Link to="/" className=" hover:text-white transition-all duration-300">
                                        Home
                                      </Link>
                                  </li>
                                  <li className="">
                                      <Link to="/about" className=" hover:text-white transition-all duration-300">
                                        About
                                      </Link>
                                  </li>
                                  <li className="">
                                      <Link to="/blog" className=" hover:text-white transition-all duration-300">
                                        Blog
                                      </Link> 
                                  </li>
                                  <li className="">
                                      <Link to="/contact" className=" hover:text-white transition-all duration-300">
                                        Contact
                                      </Link> 
                                  </li>

                              </ul>

                              <Link to="/booking" className="hidden w-fit flex items-center gap-2 font-semibold bg-red-900 px-4  py-3 text-white/60 rounded-lg">
                                Book an Appointment
                                <ArrowRight className="size-4"/>
                             </Link>
                          </div>

                      </div>
                </div>
                <footer className="w-[92%] lg:w-[85%] mx-auto flex items-center justify-between mt-8 border-t border-white/10 py-2">
                    <div className="flex items-center gap-2">
                       <LiaLinkedin className="cursor-pointer text-3xl text-white/20"/>
                       <LiaFacebook className="cursor-pointer text-3xl text-white/20"/>
                    </div>
                    <div className="text-white/30 italic text-[0.9rem] flex items-center justify-end px-2">
                      © {currentYear} Eden of Life. All rights reserved.
                    </div>
                </footer>

                <div className="absolute left-1/2 -translate-x-1/2 text-white/10 whitespace-nowrap">
                  Powered by 
                  <a href="https://www.corestacksolutions.tech" 
                     target="_blank"
                     rel="noopener noreferrer"
                     referrerpolicy="no-referrer"
                     className="ml-2 text-blue-950 italic">
                     Costack Solutions
                  </a>
                </div>
            </footer>
           )
        }

                