
import { ArrowRight, FaceAngry, LucideX } from "lucide-react";
import { 
   LiaFacebook, 
   LiaLinkedin 
} from "react-icons/lia";
import logo from "../assets/logo/lgo.png";
import services from "../data/services";
import treatments from "../data/treatments";

import { Link } from "react-router-dom";
import { BsTiktok, BsTwitterX } from "react-icons/bs";
import { PiTiktokLogo } from "react-icons/pi";
import { LuInstagram } from "react-icons/lu";

export default function Footer() {
           const currentYear = new Date().getFullYear();

           {/*first 7 services */}
           const selectedServices = services.slice(0,7);
           {/*first 7 treatments */}
           const selectedTreatments = treatments.slice(0,7);
           return (
            <footer className="relative w-full bg-black text-white pb-10">
                <div className="w-[92%] lg:w-[85%] mx-auto grid  md:grid-cols-3 gap-3 rounded-xl md:rounded-3xl p-6 bg-blue-950 gradient-to-tr from-black via-blue-950 lack to-black lue-950 -translate-y-10">
                      {/*company info */}
                      <div className="w-full h-20">
                         <div className="flex items-center gap-2">
                            <Link className="size-[45px]">
                               <img src={logo} alt="company-logo" className="w-full h-full" />
                            </Link>
                            <h2 className="text-2xl text-white font-bold uppercase">Edelnam</h2>
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
                             <ul className="flex flex-col gap-2 mt-3 text-white/50">
                                 {selectedServices.map((item)=>
                                   <Link key={item.id} to={`/services/${item.slug}`} className=" hover:text-white transition-all duration-300">
                                      {item.title}
                                   </Link>
                                 )}
                             </ul>
                             <Link to='/services' className="w-fit flex items-center gap-2 mt-6 border-b text-white/50 italic text-white/30 border-white/20">
                                All services
                                <ArrowRight className="hidden size-4 -rotate-[35deg]"/>
                             </Link>

                          </div>

                          {/*treatments */}
                          <div className="w-full h-full">
                             <h3 className="font-[Roboto]">Treatments</h3>
                              <ul className="flex flex-col gap-2 mt-3 text-white/50">
                                 {selectedTreatments.map((item)=>
                                   <Link key={item.id} to={`/treatments/${item.slug}`} className=" hover:text-white transition-all duration-300">
                                      {item.title}
                                   </Link>
                                 )}
                             </ul>
                             <Link to="/treatments" className="w-fit flex items-center gap-2 mt-6 border-b text-white/50 italic border-white/20">
                                All treatments
                                <ArrowRight className="hidden size-4 -rotate-[35deg]"/>
                             </Link>
                          </div>

                          {/*home, contact, booking */}
                          <div className="w-full h-full flex flex-col">
                              <h3 className="font-[Roboto]">Company</h3>
                              <ul className="relative space-y-3 mt-3 text-white/50 h-full">
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
                                   <li className="">
                                      <Link to="/consultation" className="absolute bottom-0 px-3 py-1 bg-red-800 mt-3 text-white/70 transition-all duration-300">
                                        Book Appointment
                                      </Link> 
                                  </li>

                              </ul>
                          </div>

                      </div>
                </div>
                <footer className="w-[92%] lg:w-[85%] mx-auto flex items-center justify-between mt-8 border-t border-white/10 py-2">
                    <div className="flex items-center gap-3 flex-wrap">
                     <a href="/" className="">
                        <LiaLinkedin className="cursor-pointer text-3xl text-white/20"/>
                     </a>
                     <a href="/" className="">
                       <LiaFacebook className="cursor-pointer text-3xl text-white/20"/>
                     </a>
                     <a href="/" className="">
                       <PiTiktokLogo className="cursor-pointer text-2xl text-white/20"/>
                     </a>
                     <a href="/" className="">
                       <LuInstagram className="cursor-pointer text-2xl text-white/20"/>
                     </a>
                     <a href="/" className="">
                       <BsTwitterX className="cursor-pointer text-2xl text-white/20"/>
                     </a>
                       
                       
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
                     referrerPolicy="no-referrer"
                     className="ml-2 text-blue-950 italic">
                     Corestack Solutions
                  </a>
                </div>
            </footer>
           )
        }

                