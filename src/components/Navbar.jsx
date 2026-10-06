import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo/logo2.png";

import treatmentsData from "../data/treatments";
import servicesData from "../data/services";

import{ AnimatePresence, motion} from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { HiMenuAlt3 } from "react-icons/hi";
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
        services: servicesData,
        treatments: treatmentsData
    }[activeGroup];
    const handleGroupChange = (group) => {
        setActiveGroup(group);
    };

  {/*
       ==============================
       menu toggle for mobile
       ==============================
    */}
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () =>{
         setOpenMenu(!openMenu);
    }

    {/*
    =======================================================
      expand/shrink for services& treatments mobile dropdown
    ======================================================
    */}
    const [isExpanded, setIsExpanded] = useState(null)
    const handleExpansion = (item) =>{
        setIsExpanded(isExpanded === item ? null : item);
        console.log('is expanded', isExpanded)
    }
    return (
        <header className={`fixed top-0 w-full  z-30  lg:py-3 ${visible ? 'opacity-100 translate-y-0' : 'lg:opac ity-0 lg:-t ranslate-y-full'} transition-all delay-300 duration-1000`}>
            <nav className=" hidden w-[92%] lg:w-[85%] max-w-[1200px] mx-auto   py-3 lg:flex items-center justify-between">
                 <NavLink to="/" className="flex items-center gap-2 rounded-r-full  rounded ">
                     <p className="size-[40px] rounded-full bg-red-800 border border-black"></p>
                     <p className="uppercase text-xl font-bold text-blue-800">edelnam</p>
                    <img src={logo} alt="Eden of Life logo" className="hidden w-[62px] h-[62px] md:w-[72px] md:h-[72px] rounded-full object-cover  shadow-lg transition-all duration-300 group-hover:scale-105" />
                </NavLink>

                <div className="relative font-[Roboto]">
                  <div className="relative z-10 flex items-center gap-8 md:gap-16 px px-2 py-[5.5px]  rounded-full bg-white/50 backdrop-blur-[4px] border border-blue-500/20" >
                    <NavLink to="/about" className="text-sm md:text-base font-normal tracking-wide hover:text-blue-400 hover:bg-blac k/5 px-3 py-2 rounded-full transition-colors duration-300">
                        About
                    </NavLink>

                    <button onClick={()=>handleGroupChange('services')} className="text-sm md:text-base font-normal tracking-wide hover:text-blue-400 hover:bg-bl ack/5 px-3 py-2 rounded-full transition-colors duration-300">
                        Services
                    </button>

                    <button onClick={()=>handleGroupChange('treatments')} className="text-sm md:text-base font-normal tracking-wide hover:text-blue-400 hover:bg-b lack/5 px-3 py-2 rounded-full transition-colors duration-300">
                        Treatments
                    </button>
                    
                    <NavLink to="/blogs" className="text-sm md:text-base font-normal tracking-wide hover:text-blue-400 hover:bg-bla ck/5 px-3 py-2 rounded-full transition-colors duration-300">
                        Blogs
                    </NavLink>
                  </div>
                  {/*services & treatments dropdown */}
                  <AnimatePresence>
                  {activeGroup && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      onClick={()=>handleGroupChange(null)}
                      className="absolute inset-0 w-full grid grid-cols-2 pt-[12%] pb-6 h-fit bg-white/60 backdrop-blur-[4px] rounded-3xl overflow-hidden">
                      <ul className="
                           w-full flex flex-col gap-3 
                           text-sm tracking-wide text-black/80 font-light font-[Roboto] pl-9">
                           {data.slice(0, data.length / 2).map((item)=>(
                             <li key={item.id}>
                               <Link to={`/${activeGroup}/${item.slug}`} 
                                className="hover:text-blue-400 transition-colors duration-300">
                                 {item.title}
                               </Link>
                             </li>))
                           }
                      </ul>
                      <ul className="
                           w-full flex flex-col gap-3 
                           text-sm tracking-wide text-black/80 font-light font-[Roboto] pl-9">
                             {data.slice(data.length / 2).map((item)=>(
                             <li key={item.id}>
                               <Link to={`/${activeGroup}/${item.slug}`} 
                                className="hover:text-blue-400 transition-colors duration-300">
                                 {item.title}
                               </Link>
                             </li>))
                           }
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
                </div>
                

                <NavLink to="/contact" className="text-sm md:text-base font-semibold text-white tracking-wide px-6 py-3 rounded-full bg-red-700 hover:text-blue-400 transition-colors duration-300">
                        Contact
                </NavLink>

            </nav>

            {/*=========================================================
                                   MOBILE 
            ===========================================================*/}
            <div className=" w-full lg:hidden bg-blue-950">
                <div className="w-full flex items-center justify-between p-3">
                    <NavLink to="/" className="flex items-center gap-2">
                     <p className="size-[40px] rounded-full bg-red-800"></p>
                     <p className="hidden uppercase text-xl font-bold text-white">edelnam</p>
                    <img src={logo} alt="Eden of Life logo" className="hidden w-[62px] h-[62px] md:w-[72px] md:h-[72px] rounded-full object-cover  shadow-lg transition-all duration-300 group-hover:scale-105" />
                    </NavLink>

                    <button onClick={toggleMenu} className="bgwhite/90 rounded-xl">
                        <HiMenuAlt3 className="size-8 text-white black/70"/>
                    </button>
                </div>
                
                
               <div className={`flex flex-col overflow-y-auto w-[70%] fixed top-0  right-0 text-white h-[100vh] bg-blue-950 /80 backdrop-blur-[10px] 
                     ${openMenu ? 'translate-x-0 opacity-100 ':'translate-x-full opacity-0'} transition-all duration-500
                   `}>
                    {/*close menu */}
                   <div className="flex justify-end mt-3 px-3">
                       <button onClick={toggleMenu} className=" w-fit bg-black/20 border border-white/20 p-2 rounded-3xl mb-1">
                         <X className="size-5 text-red-700"/>
                       </button>
                   </div>
                    
                   <nav className={`
                           w-full 
                           mx-auto mt-5 
                           flex 
                           flex-col 
                           items-start 
                           bg-black/0 
                           font-[Roboto] 
                           font-light
                           text-[16px]
                           
                           border-t
                           border-white/20
                    `}>
                      <NavLink onClick={toggleMenu} to="/" className="w-full tracking-wide p-3 pl-8 border-b border-white/20 ">
                        Home
                      </NavLink>
                      <NavLink onClick={toggleMenu} to="/about" className="w-full tracking-wide p-3 pl-8 border-b border-white/20">
                        About
                      </NavLink>
                      
                      {/*=======================================================
                                        SERVICES AND TREATMENTS DROPDOWS
                      ========================================================== */}

                      <button onClick={()=>handleExpansion('s')}  className="flex justify-between items-center w-full tracking-wide p-3 pl-8 border-b border-white/20">
                        Services
                        <LuPlus className={`size-5 ${isExpanded==="s"?'-rotate-45':''} transition-all duration-500`}/>
                      </button>
                        <ul className={`flex flex-col ${isExpanded==="s" ? 'h-[250px] opacity-100 py-2':'h-0 opacity-0 pointer-events-none'} w-full transition-all duration-500`}>
                            {servicesData.map((item)=>
                                <Link key={item.id} to={`/services/${item.slug}`} onClick={toggleMenu} className="my-2 borderborder-white/30 pl-14">
                                  {item.title}
                                </Link>
                            )} 
                        </ul>
                    {/*treatments */}
                      <button onClick={()=>handleExpansion('t')}  className="flex justify-between items-center w-full tracking-wide p-3 pl-8 border-b border-white/20">
                        Treatments
                        <LuPlus className={`size-5 ${isExpanded==="t"?'-rotate-45':''} transition-all duration-500`}/>
                      </button>
                         <ul className={`flex flex-col ${isExpanded==="t" ? 'h-[510px] opacity-100 py-2':'h-0 opacity-0 pointer-events-none'} w-full transition-all duration-500`}>
                            {treatmentsData.map((item)=>
                                <Link key={item.id} to={`/treatments/${item.slug}`} onClick={toggleMenu}  className="my-2 borderborder-white/30 pl-14">
                                  {item.title}
                                </Link>
                            )} 
                        </ul>


                      {/* navs continue */}
                      <NavLink onClick={toggleMenu} to="/contact" className=" w-full tracking-wide p-3 pl-8 border-b border-white/20">
                        Contact
                      </NavLink>


                      <NavLink onClick={toggleMenu} to="/blogs" className="w-full tracking-wide p-3 pl-8 border-b border-white/20">
                        News
                      </NavLink>
                       <NavLink onClick={toggleMenu} to="/blogs" className="w-full tracking-wide p-3 pl-8 border-b border-white/20">
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