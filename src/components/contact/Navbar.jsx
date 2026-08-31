import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpeg";
import { LuMail, LuMenu } from "react-icons/lu";

const Navbar = () => {
    const navItems = [
        { label: "About", path: "/about" },
        { label: "Treatments", path: "/treatments" },
        { label: "Contact", path: "/contact" },
        { label: "Blogs", path: "/blogs" },
    ];

    return (
        <header className="w-full min-h-[80px] fixed bg-white top-0 left-0 z-30 text-black border">
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

            {/*mobile */}
            <div className="lg:hidden w-full border mx-auto flex items-center justify-between p-4">
                <a href="/" className="border p-2 rounded-md">
                    <LuMail className="size-6 text-gray-500/40"/>
                </a>

                <NavLink to="/" className="flex items-center gap-2 self-center">
                    <img src={logo} alt="Eden of Life logo" className="w-[50px] h-[50px] rounded-full object-cover border border-white/30 shadow-lg" />
                    <span className="hidden text-sm font-semibold tracking-wide">Eden of Life</span>
                </NavLink>

                <button className="border p-2 rounded-md">
                    <LuMenu className='size-6 text-gray-500/40' />
                </button>


            </div>
        </header>
    );
};

export default Navbar;