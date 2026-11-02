import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo/gro.jpg";

import treatmentsData from "../data/treatments";
import servicesData from "../data/services";

import{ AnimatePresence, motion} from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp, X , ArrowRight } from "lucide-react";

import { HiMenu, HiMenuAlt3 } from "react-icons/hi";
import { LuPlus } from "react-icons/lu";


const Navbar = () => {
        
        {/*scroll hide navbar*/}
        const [visible, setVisible] = useState(true);
        const timeoutRef = useRef(null);

        useEffect(() => {
            const handleScroll = () => {
            setVisible(false);  // hide immediately on any scroll
            clearTimeout(timeoutRef.current);
            
            timeoutRef.current = setTimeout(() => {
               setVisible(true);          // show again once scrolling stops
            }, 150);                     // "stopped" = no scroll event for 150ms
            };

            window.addEventListener('scroll', handleScroll);
            return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeoutRef.current);
            };
        }, []);
    {/*
       ==============================
       services & treatments dropdown
       ==============================
    */}
    const [activeGroup, setActiveGroup] = useState(null); // default active group
    const data = {
        services   : servicesData,
        treatments : treatmentsData
    } [activeGroup] ;
    
    const handleGroupChange = (group) => {
        setActiveGroup(!activeGroup ? group : null)  
    };
    
    {/*services / treatments chunk size*/}
    //const chunkSize = Math.ceil(data.length / 3)

    const handleMouseOver = ()=>{
      console.log('mouse is overed');
    }
    {/*
       ==============================
       menu toggle for mobile
       ==============================
    */}
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () =>{
         setIsOpen(!isOpen);
    }

    {/*
    =======================================================
      expand/shrink for services& treatments mobile dropdown
    ======================================================
    */}
    const [isExpanded, setIsExpanded] = useState(null)
    const handleExpansion = (item) =>{
        setIsExpanded(isExpanded === item ? null : item);
    }
    return (
        <header className={`fixed top-0 w-full  z-50  lg: ${visible ? 'opacity-100 translate-y-0' : 'lg:opac ity-0 lg:-t ranslate-y-full'} transition-all delay-300 duration-1000`}>
            <nav className=" hidden w-[92%] mx-auto   py-3 lg:flex items-center justify-between">
                 <NavLink to="/" className="relative">
                    <img src={logo} alt="Eden of Life logo" className="size-[80px]  rounded-full" /> 
                </NavLink>

                <nav className="relative font-[Roboto]">
                  <div className="relative z-10 flex items-center gap-4 md:gap-8 px px-2 py-[5.5px]  rounded-full bg-white/50 backdrop-blur-[4px]" >
                    <NavLink to="/about" className="text-sm md:text-base font-normal tracking-wide hover:text-blue-800 hover:bg-blac k/5 px-3 py-2 rounded-full transition-colors duration-300
                     "
                      style={({isActive})=>({color: isActive? "blue" : ""})}
                    >
                        About
                    </NavLink>

                    <div className="cursor-pointer group relative flex items-center gap-2 text-sm md:text-base font-normal tracking-wide hover:text-blue-800 px-3 py-2 rounded-full transition-colors duration-300">
                        <NavLink to='/services' className="flex items-center gap-2" style={({isActive})=>({color: isActive? "blue" : ""})} >
                           Services
                           <ChevronDown className={`size-5 group-hover:rotate-180 transition-all duration-500`}/>
                        </NavLink> 
                        
                         
                         {/*services drowdown */}
                         <div 
                           className="
                             w-fit 
                             flex
                             gap-6
                             max-h-[85vh]
                             absolute 
                             top-[65px] 
                             left-1/2 
                             -translate-x-[35%]
                             bg-white
                             rounded-3xl

                             p-6
                             
                             bg-white/80 
                             backdrop-blur-[4px]

                             opacity-0
                             invisible
                             group-hover:opacity-100
                             group-hover:visible
                             group-hover:top-[50px]
                             transition-all
                             duration-300
                             ">
                              {/*first half */}
                            <ul className="
                              w-full flex flex-col gap-3 
                              text-sm tracking-wide text-black/80 font-light font-[Roboto]">
                              {servicesData.slice(0, servicesData.length/2).map((item)=>(
                                <li key={item.id}>
                                  <Link to={`/services/${item.slug}`} 
                                    className="w-full tracking-wider hover:text-blue-600 transition-colors duration-300 whitespace-nowrap">
                                    {item.title}
                                  </Link>
                                </li>))
                              }
                            </ul>

                              {/*second half */}
                            <ul className="
                              w-full flex flex-col gap-3 
                              text-sm tracking-wide text-black/80 font-light font-[Roboto]">
                              {servicesData.slice(servicesData.length/2).map((item)=>(
                                <li key={item.id}>
                                  <Link to={`/services/${item.slug}`} 
                                    className="w-full tracking-wider hover:text-blue-600 transition-colors duration-300 whitespace-nowrap">
                                    {item.title}
                                  </Link>
                                </li>))
                              }
                            </ul>

                         </div>
                    </div>

                    {/*=======================
                    TREATMENTS
                    =======================*/}

                    <div className="cursor-pointer group relative flex items-center gap-2 text-sm md:text-base font-normal tracking-wide hover:text-blue-800 px-3 py-2 rounded-full transition-colors duration-300">
                        <NavLink to='/treatments' className="flex items-center gap-2" style={({isActive})=>({color: isActive? "blue" : ""})} >
                           Treatments
                           <ChevronDown className={`size-5 group-hover:rotate-180 transition-all duration-500`}/>
                        </NavLink> 
                         
                         {/*treatments drowdown */}
                         <div 
                           className="
                             w-fit 
                             flex
                             gap-6
                             max-h-[85vh]
                             absolute 
                             top-[65px] 
                             left-1/2 
                             -translate-x-[65%] 
                             bg-white
                             rounded-3xl
                             
                             bg-white/80 
                             backdrop-blur-[4px]


                             opacity-0
                             invisible
                             group-hover:opacity-100
                             group-hover:visible
                             group-hover:top-[50px]
                             transition-all
                             duration-300
                             ">

                            {/*first half*/}
                            <ul className="
                              w-full flex flex-col  gap-3 
                              text-sm tracking-wide text-black/80 font-light font-[Roboto] px-6 py-3">
                              {treatmentsData.slice(0, treatmentsData.length/2).map((item)=>(
                                <li key={item.id}>
                                  <Link to={`/treatments/${item.slug}`} 
                                    className="tracking-wider hover:text-blue-600 transition-colors duration-300 whitespace-nowrap">
                                    {item.title}
                                  </Link>
                                </li>))
                              }
                            </ul>

                            {/*second half*/}
                            <ul className="
                              w-full flex flex-col gap-3 
                              text-sm tracking-wide text-black/80 font-light font-[Roboto] px-6 py-3">
                              {treatmentsData.slice(treatmentsData.length/2).map((item)=>(
                                <li key={item.id}>
                                  <Link to={`/treatments/${item.slug}`} 
                                    className="tracking-wider hover:text-blue-600 transition-colors duration-300 whitespace-nowrap">
                                    {item.title}
                                  </Link>
                                </li>))
                              }
                            </ul>
                         </div>
                    </div>


                    <NavLink to="/blogs" className="text-sm md:text-base font-normal tracking-wide hover:text-blue-800 hover:bg-bla ck/5 px-3 py-2 rounded-full transition-colors duration-300"
                             style={({isActive})=>({color: isActive? "blue" : ""})}
                    >
                        Blogs
                    </NavLink>
                  </div>


                  {/*{/*services & treatments dropdown }
                  <AnimatePresence>
                  {activeGroup && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="fixed top-[6rem] left-0 z-10 border-t border-black/5 w-full  min-h-[40vh] bg-gray-200  overflow-hidden">
                      
                      <div className="w-[100%] mx-auto grid grid-cols-4 p-6">
                         {/*all services/treatments link }
                         <ul className="
                            w-full flex flex-col gap-3 
                            text-sm tracking-wide text-black/80 font-light font-[Roboto] pl-9">
                            {data.slice(0, data.length/3).map((item)=>(
                              <li key={item.id}>
                                <Link to={`/${activeGroup}/${item.slug}`} onMouseEnter={()=>handleMouseOver} onClick={()=>setActiveGroup(null)} 
                                  className="tracking-wider hover:text-blue-600 transition-colors duration-300">
                                  {item.title}
                                </Link>
                              </li>))
                            }
                        </ul>
                        <ul className="
                            w-full flex flex-col gap-3 
                            text-sm tracking-wide text-black/80 font-light font-[Roboto] pl-9">
                            {data.slice(data.length/3, data.length/3 * 2).map((item)=>(
                              <li key={item.id}>
                                <Link to={`/${activeGroup}/${item.slug}`} onMouseEnter={()=>handleMouseOver} onClick={()=>setActiveGroup(null)} 
                                  className="tracking-wider hover:text-blue-600 transition-colors duration-300">
                                  {item.title}
                                </Link>
                              </li>))
                            }
                        </ul>
                        <ul className="
                           w-full flex flex-col gap-3 
                           text-sm tracking-wide text-black/80 font-light font-[Roboto] pl-9">
                             {data.slice((data.length/3) * 2).map((item)=>(
                             <li key={item.id}>
                               <Link to={`/${activeGroup}/${item.slug}`}  onClick={()=>setActiveGroup(null)}
                                className="tracking-wider hover:text-blue-600 transition-colors duration-300">
                                 {item.title}
                               </Link>
                             </li>))
                           }
                       </ul>

                        ==================================
                        {/*all services/treatments link }
                        =================================

                        {activeGroup==='services'
                        ?
                         <Link to={`/services`} onClick={()=>setActiveGroup(null)} className="relative flex border w-full rounded-3xl overflow-hidden">
                          <img src="https://i.pinimg.com/736x/bc/e8/f6/bce8f621543d0960fad099a07f95a3a2.jpg" 
                            alt="cupping" className="absolute inset-0 m-auto w-full h-full object-cober" />
                            {/*overlay }
                         <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-white/0 via-black/70 to-white/0"/>
                         
                         <p className="relative m-auto text-white/70 font-semibold">
                               All Services
                          </p>
                         </Link>
                        :
                         <Link to={`/treatments`} onClick={()=>setActiveGroup(null)} className="relative flex border h-full w-full rounded-3xl overflow-hidden">
                           ===============================
                           {/*treatment image}
                           ===============================
                           <img src="https://i.pinimg.com/236x/73/dd/8f/73dd8f2aa96d473f69eed35db944472e.jpg" 
                            alt="cupping" className="absolute inset-0 w-full h-full object-cober" />
                            {/*overlay }
                           <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-white/0 via-black/70 to-white/0"/>
                          <p className="relative m-auto text-white/70 font-semibold">
                               All treatments
                          </p>
                         </Link>
                        }
                      </div>
                     
                    </motion.div>
                  )}
                </AnimatePresence>*/}
                </nav>
                

                <NavLink to="/contact" className="relative group text-sm md:text-base font-semibold tracking-wide px-6 py-2  border border-red-800/60 rounded-full hover:text-blue-400 transition-colors duration-300 overflow-hidden">
                       <div className="absolute inset-0 w-0 h-full bg-red-800 group-hover:w-full transition-all duration-500"/>
                        <p className="relative text-red-800 group-hover:text-white transition-all duration-500">
                          Contact
                        </p>
                </NavLink>

            </nav>

            {/*=========================================================
                                   MOBILE 
            ===========================================================*/}
            <div className="lg:hidden  w-full bg-white blue-950/50">
                <div className="bg-white w-full flex items-center justify-between p-3">
                   <NavLink to="/" onClick={()=>setIsOpen(false)} className="size-[50px] rounded-full flex items-center gap-2 shadow">
                      <img src={logo} alt="logo" className="w-full h-full scale-120 rounded-full object-cover transition-all duration-300 group-hover:scale-105" />
                   </NavLink>

                  <button 
                      onClick={toggleMenu}
                      className="relative size-fit h-fit scale-110  rounded-full p-[6px] shadow"
                      aria-label={isOpen ? "Close menu" : "Open menu"}
                  >
                    <HiMenu
                        className={`absolute inset- size-6 transition-all duration-500 ${
                           isOpen
                           ? "rotate-90 scale-0 opacity-0"
                           : "rotate-0 scale-100 opacity-100"
                        }`}
                     />

                      <X
                           className={`absolut inset-0 size-6 transition-all duration-500  z-50  rounded-full ${
                              isOpen
                              ? "rotate-0 scale-100 opacity-100  "
                              : "-rotate-90 scale-0 opacity-0"
                           }`}
                     />
                </button>
                </div>
                
                {/*
                 ============================
                  MENU
                 ============================
                 */}

               <div className={`fixed  right-0 translate-y- flex flex-col overflow-y-auto w-[100%]   h-[100vh] bg-white  
                     ${ isOpen ? 'translate-x-0 opacity-100 ':'translate-x-full opacity-0'} transition-all duration-500 
                   `}>

                   <nav className={`
                           absolute
                           
                           left-0
                           w-full
                           mt-5 
                           px-3
                           flex
                           flex-col 
                           items-start 
                           bg-black/0 
                           font-[Roboto] 
                           font-normal
                           text-[1.125rem]
                           
                           
                           
                    `}>
                      <NavLink onClick={toggleMenu} to="/" className="w-full tracking-wide p-3">
                        Home
                      </NavLink>
                      <NavLink onClick={toggleMenu} to="/about" className="w-full tracking-wide p-3">
                        About
                      </NavLink>
                      
                      {/*=======================================================
                                        SERVICES AND TREATMENTS DROPDOWS
                      ========================================================== */}

                      <button onClick={()=>handleExpansion('s')}  className="w-fit flex gap-2 justify-between items-center tracking-wide p-3">
                        Services
                        <LuPlus className={`size-4 ${isExpanded==="s"?'-rotate-45':''} text-black/40 transition-all duration-500`}/>
                      </button>
                        <ul className={`flex flex-col gap-2 ${isExpanded==="s" ? 'h-fit opacity-100 pr-4 pb-2':'h-0 opacity-0 pointer-events-none'} w-full transition-all duration-500`}>
                            {servicesData.slice(0,5).map((item)=>
                                <Link 
                                  key={item.id} 
                                  to={`/services/${item.slug}`} 
                                  onClick={toggleMenu} 
                                  className="flex items-center gap-1 tracking-wider text-sm pl-6 my-[2px] text-blue-800">
                                  {item.title}
                                   <ArrowRight className='hidden size-3'/>
                                </Link>
                            )} 

                            <Link to="/services" onClick={toggleMenu} className="w-fit flex items-center gap-1 underline tracking-wider text-sm pl-6 text-red-600">
                               All services
                               <ArrowRight className='size-4'/>
                            </Link>
                        </ul>
                    {/*treatments */}
                      <button onClick={()=>handleExpansion('t')}  className="w-fit flex gap-2 justify-between items-center tracking-wide p-3">
                        Treatments
                        <LuPlus className={`size-4 ${isExpanded==="t" ? '-rotate-45':''} text-black/40 transition-all duration-500`}/>
                      </button>
                         <ul className={`flex flex-col gap-2 ${isExpanded==="t" ? ' h-fit opacity-100 pr-4 pb-2':'h-0 opacity-0 pointer-events-none'} w-full transition-all duration-500`}>
                            {treatmentsData.slice(0,5).map((item)=>
                                <Link key={item.id} to={`/treatments/${item.slug}`} onClick={toggleMenu}  className="tracking-wider text-sm pl-6 my-[2px] text-blue-800">
                                  {item.title}
                                </Link>
                            )} 

                            <Link to="/treatments" onClick={toggleMenu} className="w-fit flex items-center gap-1 underline tracking-wider text-sm pl-6 text-red-600">
                               All treatments
                               <ArrowRight className='size-4'/>
                            </Link>
                        </ul>


                      {/* navs continue */}
                      <NavLink onClick={toggleMenu} to="/contact" className=" w-full tracking-wide p-3 ">
                        Contact
                      </NavLink>

                       <NavLink onClick={toggleMenu} to="/blogs" className="w-full tracking-wide p-3">
                        Blogs
                      </NavLink>
                    </nav>

                    {/*contant + social */}
                    <div className="hidden w-full  border">

                    </div>
               </div>
            </div>
        </header>
    );
};

export default Navbar;