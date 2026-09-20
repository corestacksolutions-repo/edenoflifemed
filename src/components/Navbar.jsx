import { NavLink } from "react-router-dom";
import logo from "../assets/logo/logo2.png";


import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { HiMenuAlt3 } from "react-icons/hi";


const Navbar = () => {
        
        {/*scroll hide navbar*/}
        const [visible, setVisible] = useState(true);
        const timeoutRef = useRef(null);

        useEffect(() => {
            const handleScroll = () => {
            //setVisible(false);  // hide immediately on any scroll
            clearTimeout(timeoutRef.current);
            
            timeoutRef.current = setTimeout(() => {
              //  setVisible(true);          // show again once scrolling stops
            }, 150);                     // "stopped" = no scroll event for 150ms
            };

            window.addEventListener('scroll', handleScroll);
            return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeoutRef.current);
            };
        }, []);
        
    const [openMenu, setOpenMenu] = useState(false);
    // toggle menu
    const toggleMenu = () =>{
         setOpenMenu(!openMenu);
    }
    return (
        <header className={`fixed top-0 w-full  z-30  py-3 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'} transition-all delay-500 duration-1000`}>
            <nav className="hidden w-[92%] lg:w-[85%] max-w-[1200px] mx-auto   py-3 lg:flex items-center justify-between">
                 <NavLink to="/" className="flex items-center gap-2 rounded-r-full  rounded ">
                     <p className="size-[40px] rounded-full bg-red-800 border border-black"></p>
                     <p className="uppercase text-xl font-bold text-white">edenam</p>
                    <img src={logo} alt="Eden of Life logo" className="hidden w-[62px] h-[62px] md:w-[72px] md:h-[72px] rounded-full object-cover  shadow-lg transition-all duration-300 group-hover:scale-105" />
                </NavLink>

                <div className="flex items-center gap-8 md:gap-16 px px-2 py-[5.5px]  rounded-full bg-white/50 backdrop-blur-[4px] border border-blue-500/20" >
                    <NavLink to="/about" className="text-sm md:text-base font-normal tracking-wide hover:text-blue-400 hover:bg-blac k/5 px-3 py-2 rounded-full transition-colors duration-300">
                        About
                    </NavLink>

                    <NavLink to="/services" className="text-sm md:text-base font-normal tracking-wide hover:text-blue-400 hover:bg-bl ack/5 px-3 py-2 rounded-full transition-colors duration-300">
                        Services
                    </NavLink>

                    <NavLink to="/treatments" className="text-sm md:text-base font-normal tracking-wide hover:text-blue-400 hover:bg-b lack/5 px-3 py-2 rounded-full transition-colors duration-300">
                        Treatments
                    </NavLink>
                    
                    <NavLink to="/blogs" className="text-sm md:text-base font-normal tracking-wide hover:text-blue-400 hover:bg-bla ck/5 px-3 py-2 rounded-full transition-colors duration-300">
                        Blogs
                    </NavLink>
                </div>

                <NavLink to="/contact" className="text-sm md:text-base font-semibold text-white tracking-wide px-6 py-3 rounded-full bg-red-700 hover:text-blue-400 transition-colors duration-300">
                        Contact
                </NavLink>

            </nav>

            {/**mobile */}
            <div className="w-full flex justify-between items-center lg:hidden px-5">
                <div className="w-full flex items-center justify-between border p-3 rounded-3xl bg-black/40 backdrop-blur-sm border-white/20  ">
                    <NavLink to="/" className="flex items-center gap-2 rounded-r-full  rounded ">
                     <p className="size-[40px] rounded-full bg-red-800 border border-black"></p>
                     <p className="uppercase text-xl font-bold text-white">edenam</p>
                    <img src={logo} alt="Eden of Life logo" className="hidden w-[62px] h-[62px] md:w-[72px] md:h-[72px] rounded-full object-cover  shadow-lg transition-all duration-300 group-hover:scale-105" />
                    </NavLink>

                    <button onClick={toggleMenu} className="border bg-white/90 p-2 rounded-xl">
                        <HiMenuAlt3 className="size-5 text-black/70"/>
                    </button>
                </div>
                
                
               <div className={` w-screen fixed top-0  left-0 text-white h-[50vh] bg-blue-950 /80 backdrop-blur-[10px] 
                     ${openMenu ? 'translate-y-0 opacity-100 ':'-translate-y-full opacity-0'} transition-all duration-500
                   `}>
                    {/*close menu */}
                   <div className="flex mt-3">
                       <button onClick={toggleMenu} className="mx-auto w-fit bg-black/20 border border-white/20 p-2 rounded-3xl mb-1">
                         <X className="size-5 text-red-700"/>
                       </button>
                   </div>
                    
                   <nav className={`
                           w-[92%] 
                           mx-auto mt-5 
                           flex 
                           flex-col 
                           items-center 
                           bg-black/0 
                           rounded-xl 
                           font-[Roboto] 
                           font-semibold
                           text-[16px]
                    `}>
                      <NavLink onClick={toggleMenu} to="/" className=" tracking-wide p-3">
                        Home
                      </NavLink>
                      <NavLink onClick={toggleMenu} to="/about" className="tracking-wide p-3">
                        About
                      </NavLink>

                      <NavLink onClick={toggleMenu} to="/services" className="tracking-wide p-3">
                        Services
                      </NavLink>
                      <NavLink onClick={toggleMenu} to="/treatments" className="tracking-wide p-3">
                        Treatments
                      </NavLink>
                      <NavLink onClick={toggleMenu} to="/contact" className=" tracking-wide p-3">
                        Contact
                      </NavLink>

                       <NavLink onClick={toggleMenu} to="/blogs" className=" tracking-wide p-3">
                        Blogs
                      </NavLink>
                    </nav>
               </div>
            </div>
        </header>
    );
};

export default Navbar;