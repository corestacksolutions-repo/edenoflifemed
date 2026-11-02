
import { ArrowRight, FaceAngry, LucideX } from "lucide-react";
import { 
   LiaFacebook, 
   LiaLinkedin 
} from "react-icons/lia";
import logo from "../assets/logo/gro.jpg";
import services from "../data/services";
import treatments from "../data/treatments";

import { Link } from "react-router-dom";
import { BsFacebook, BsTiktok, BsTwitterX } from "react-icons/bs";
import { PiFacebookLogo, PiTiktokLogo } from "react-icons/pi";
import { LuFacebook, LuInstagram, LuYoutube } from "react-icons/lu";

export default function Footer() {
           const currentYear = new Date().getFullYear();

           {/*first 7 services */}
           const selectedServices = services.slice(0,7);
           {/*first 7 treatments */}
           const selectedTreatments = treatments.slice(0,7);
           return (
            <footer className="relative w-full bg-black text-white pb-10">
                <div className="w-[92%] lg:w-[85%] mx-auto flex flex-col md:flex-row  gap-3 justify-between rounded-xl md:rounded-3xl p-6 bg-black blue-950 gradient-to-tr from-black via-blue-950 lack to-black lue-950 -translate-y-10">
                      {/*company info */}
                      <div className="flex flex-col items-cener gap-3 w-full md:w-fit mb-10">
                            <Link className="rounded-full overflow-hidden">
                               <img src={logo} alt="company-logo" className="size-[60px] rounded-full" />
                            </Link>
                            <p className="text-[1rem]  text-white leading-tight">
                                To bring hope <br/>
                                To the hopeless
                            </p>
                      </div>

                       
                      {/*links & cta */}
                      
                     <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-2 gap-x-8 gap-y-6 lg:grid-cols-3">
                          {/*services */}
                          <div className="w-full h-full">
                             <h3 className="font-[Roboto] font-semibold">Services</h3>
                             <ul className="flex flex-col gap-2 mt-4 text-white/50">
                                 {selectedServices.map((item)=>
                                   <Link key={item.id} to={`/services/${item.slug}`} className=" text-sm lg:text-base hover:text-white transition-all duration-300">
                                      {item.title}
                                   </Link>
                                 )}
                             </ul>
                             <Link to='/services' className="tracking-wide w-fit flex items-center gap-1 mt-6 border-white/20  text-red-600 transition-all duration-300">
                                All services
                                <ArrowRight className="size-4"/>
                             </Link>

                          </div>

                          {/*treatments */}
                          <div className="w-full h-full">
                             <h3 className="font-[Roboto] font-semibold">Treatments</h3>
                              <ul className="flex flex-col gap-2 mt-4 text-white/50">
                                 {selectedTreatments.map((item)=>
                                   <Link key={item.id} to={`/treatments/${item.slug}`} className="text-sm lg:text-base  hover:text-white transition-all duration-300">
                                      {item.title}
                                   </Link>
                                 )}
                             </ul>
                             <Link to="/treatments" className="tracking-wide w-fit flex items-center gap-1 mt-6 text-red-600 ialic border-white/20">
                                All treatments
                                <ArrowRight className="size-4"/>
                             </Link>
                          </div>

                          {/*home, contact, booking */}
                          <div className="w-full h-full flex flex-col">
                              <h3 className="font-[Roboto] font-semibold">Company</h3>
                              <ul className="md:relative space-y-3 mt-4 text-white/50 h-full">
                                  <li className="">
                                      <Link to="/" className="text-sm lg:text-base  hover:text-white transition-all duration-300">
                                        Home
                                      </Link>
                                  </li>
                                  <li className="">
                                      <Link to="/about" className="text-sm lg:text-base  hover:text-white transition-all duration-300">
                                        About
                                      </Link>
                                  </li>
                                  <li className="">
                                      <Link to="/blog" className="text-sm lg:text-base  hover:text-white transition-all duration-300">
                                        Blog
                                      </Link> 
                                  </li>
                                  <li className="">
                                      <Link to="/contact" className="text-sm lg:text-base  hover:text-white transition-all duration-300">
                                        Contact
                                      </Link> 
                                  </li>
                                   <li className="">
                                      <Link to="/appointment" className="md:absolute -bottom-5 px-3 py-2 bg-red-800 mt-3 whitespace-nowrap text-white/70 rounded-md transition-all duration-300">
                                        Book an Appointment
                                      </Link> 
                                  </li>

                              </ul>
                          </div>

                      </div>
                     
                </div>
                <footer className="w-[92%] lg:w-[85%] mx-auto flex flex-col md:flex-row items-center gap-y-6 justify-between mt-8 border-t border-white/10 py-2">
                    <div className="flex items-center gap-3 flex-wrap">
                     <a href="https://www.linkedin.com/in/eden-of-life-natural-medicine-center-96444a442" 
                        target="_blank" className="hover:scale-110 transition-all duration-300">
                        <LiaLinkedin className="size-8 cursor-pointer text-white/20"/>
                     </a>
                     <a href="/" 
                        target="_blank" 
                        className="hover:scale-110 transition-all duration-300">
                       <BsTwitterX className="cursor-pointer size-6 text-white/20"/>
                     </a> 
                     <a href="https://www.facebook.com/profile.php?id=61563483795198" 
                        target="_blank" 
                        className="hover:scale-110 transition-all duration-300">
                       <LuFacebook className="cursor-pointer size-6 text-white/20"/>
                     </a>
                     <a href="https://www.tiktok.com/@eden.of.life.natu?_r=1&_ZS-9AiAizqvT79" 
                        target="_blank" 
                        className="hover:scale-110 transition-all duration-300">
                       <PiTiktokLogo className="cursor-pointer size-6 text-white/20"/>
                     </a>
                     
                       <a href="/" target="_blank" className="">
                       <LuInstagram className="cursor-pointer size-6 text-white/20"/>
                     </a> 
                     <a href="https://www.youtube.com/@eden-of-life-medicinemedicine" target="_blank" className="">
                       <LuYoutube className="cursor-pointer size-7 text-white/20"/>
                     </a>
                    </div>
                    <div className="text-white/30 italic text-[0.9rem] flex items-center justify-end px-2">
                      © {currentYear} Eden of Life. All rights reserved.
                    </div>
                </footer>

                <div className="hidden absolute left-1/2 -translate-x-1/2 text-white/10 whitespace-nowrap">
                  Powered by 
                  <a href="https://www.corestacksolutions.tech" 
                     target="_blank"
                     rel="noopener noreferrer"
                     referrerPolicy="no-referrer"
                     className="ml-2 text-blue-950 italic">
                     CoreStack Solutions
                  </a>
                </div>
            </footer>
           )
        }

                