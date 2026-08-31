import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { LucideMenuSquare, X } from "lucide-react";
import { LuGrid3X3, LuLayoutGrid } from "react-icons/lu";
import { BsChat } from "react-icons/bs";
import { useState } from "react";
import { BiCloset } from "react-icons/bi";

const Navbar = () => {
    const navItems = [
        { label: "About", path: "/about" },
        { label: "Treatments", path: "/treatments" },
        { label: "Contact", path: "/contact" },
        { label: "Blogs", path: "/blogs" },
    ];
    const [openMenu, setOpenMenu] = useState(false);
    // toggle menu
    const toggleMenu = () =>{
         setOpenMenu(!openMenu);
    }
    return (
        <header className="fixed top-0 left-0 w-full min-h-[80px] z-30 text-white bg-white/10 backdrop-blur-[4px]">
            <nav className="hidden w-[92%] lg:w-[70%] max-w-[1200px] mx-auto h-full px-2 md:px-4 py-4 lg:flex items-center justify-between">

                <div className="flex items-center gap-6 md:gap-10">
                    <NavLink to="/about" className="text-sm md:text-base font-normal tracking-wide hover:text-blue-400 transition-colors duration-300">
                        About
                    </NavLink>

                    <NavLink to="/treatments" className="text-sm md:text-base font-normal tracking-wide hover:text-blue-400 transition-colors duration-300">
                        Treatments
                    </NavLink>
                </div>

                <NavLink to="/" className="absolute left-1/2 -translate-x-1/2 top-3 group">
                    <img src={logo} alt="Eden of Life logo" className="w-[62px] h-[62px] md:w-[72px] md:h-[72px] rounded-full object-cover border border-white/30 shadow-lg transition-all duration-300 group-hover:scale-105" />
                </NavLink>

                <div className="flex items-center gap-6 md:gap-10">
                    <NavLink to="/contact" className="text-sm md:text-base font-normal tracking-wide hover:text-blue-400 transition-colors duration-300">
                        Contact
                    </NavLink>

                    <NavLink to="/blogs" className="text-sm md:text-base font-normal tracking-wide hover:text-blue-400 transition-colors duration-300">
                        Blogs
                    </NavLink>
                </div>

            </nav>

            {/**mobile */}
            <div className="w-full flex justify-between items-center lg:hidden py-5 px-5">
                <button className="border border-white/20 p-2 rounded-xl ">
                    <BsChat className="size-5 text-black/70"/>
                </button>

                 <NavLink to="/" className="absolute left-1/2 -translate-x-1/2 top-3 group">
                    <img src={logo} alt="Eden of Life logo" className="w-[62px] h-[62px] md:w-[72px] md:h-[72px] rounded-full object-cover border border-white/30 shadow-lg transition-all duration-300 group-hover:scale-105" />
                </NavLink>

                <button onClick={toggleMenu} className="border border-white/20 p-2 rounded-xl">
                    <LuGrid3X3 className="size-5 text-black/70"/>
                </button>
                
               <div className={` w-screen fixed top-0 left-0 text-white h-[50vh] bg-black/80 backdrop-blur-[10px] border
                     ${openMenu ? '-translate-y-full opacity-0':'translate-y-0 opacity-100'} transition-all duration-500 rounded-xl
                   `}>
                    {/*close menu */}
                   <div className="flex">
                       <button onClick={toggleMenu} className="mx-auto w-fit bg-black border border-white/20 p-2 rounded-3xl mb-1">
                         <X className="size-5 text-white"/>
                       </button>
                   </div>
                    
                   <nav className={`w-[92%] mx-auto flex flex-col bg-black rounded-3xl
                     `}>
                      <NavLink onClick={toggleMenu} to="/about" className="text-sm md:text-base font-normal tracking-wide hover:text-blue-400 transition-colors duration-300 border-b p-3">
                        About
                      </NavLink>

                      <NavLink onClick={toggleMenu} to="/treatments" className="text-sm md:text-base font-normal tracking-wide hover:text-blue-400 transition-colors duration-300  border-b p-3">
                        Treatments
                      </NavLink>
                      <NavLink onClick={toggleMenu} to="/contact" className="text-sm md:text-base font-normal tracking-wide hover:text-blue-400 transition-colors duration-300  border-b p-3">
                        Contact
                      </NavLink>

                       <NavLink onClick={toggleMenu} to="/blogs" className="text-sm md:text-base font-normal tracking-wide hover:text-blue-400 transition-colors duration-300 p-3">
                        Blogs
                      </NavLink>
                    </nav>
               </div>
            </div>
        </header>
    );
};

export default Navbar;