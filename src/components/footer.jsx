
import { ArrowRight } from "lucide-react";
import { 
    PiLinkedinLogoBold, 
    PiFacebookLogo 
} from "react-icons/pi";

import { Link } from "react-router-dom";

export default function Footer() {
           const currentYear = new Date().getFullYear();
           return (
            <footer className="w-full bg-blue-950 text-white py-10">
                <div className="w-[92%] lg:w-[85%] mx-auto grid md:grid-cols-3 gap-3">
                      {/*company info */}
                      <div className="w-full h-60">
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
                      <div className="md:col-span-2 grid md:grid-cols-2 gap-3 lg:grid-cols-3 md:border-l border-white/10">
                          {/*services */}
                          <div className="w-full h-full">
                             <h3 className="md:text-center font-semibold">Services</h3>
                             <ul className="space-y-3 mt-3 md:text-center text-white/50">
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
                             <button className="md:mx-auto flex items-center gap-2 mt-6 border-b border-white/20">
                                view all services
                                <ArrowRight className="size-4 -rotate-[35deg]"/>
                             </button>

                          </div>

                          {/*treatments */}
                          <div className="w-full h-full">
                             <h3 className="md:text-center font-semibold">Treatments</h3>
                             <ul className="space-y-3 mt-3 md:text-center text-white/50">
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
                             <button className="md:mx-auto flex items-center gap-2 mt-6 border-b border-white/20">
                                view all treatments
                                <ArrowRight className="size-4 -rotate-[35deg]"/>
                             </button>
                          </div>

                          {/*home, contact, booking */}
                          <div className="w-full h-full flex flex-col gap-20">
                              <ul className="space-y-3 text-white/50">
                                  <li className="">
                                      <Link to="/" className=" hover:text-white transition-all duration-300">
                                        Home
                                      </Link>
                                  </li>
                                  <li className="">
                                      <Link to="/contact" className=" hover:text-white transition-all duration-300">
                                        Contact
                                      </Link> 
                                  </li>
                              </ul>

                              <Link to="/booking" className="w-fit flex items-center gap-2 font-semibold bg-red-900 px-4  py-3 text-white/60 rounded-lg">
                                Book an Appointment
                                <ArrowRight className="size-4"/>
                             </Link>
                          </div>

                      </div>
                </div>
                <footer className="w-[92%] lg:w-[85%] mx-auto flex items-center justify-between mt-8 border-t border-white/10 py-2">
                    <div className="flex items-center gap-2">
                       <PiLinkedinLogoBold className="text-3xl text-white/20"/>
                       <PiFacebookLogo className="text-3xl text-white/20"/>
                    </div>
                    <div className="text-white/30 italic text-[0.9rem] flex items-center justify-end px-2">
                        Copyright © {currentYear} Eden of Life. All rights reserved.
                    </div>
                </footer>
            </footer>
           )
        }

                