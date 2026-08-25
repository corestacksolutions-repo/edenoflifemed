import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpeg";

const Navbar = () => {
    const navItems = [
        { label: "About", path: "/about" },
        { label: "Treatments", path: "/treatments" },
        { label: "Contact", path: "/contact" },
        { label: "Blogs", path: "/blogs" },
    ];

    return (
        <header className="w-full min-h-[80px] absolute top-0 left-0 z-30 text-white">
            <nav className="w-[92%] lg:w-[70%] max-w-[1200px] mx-auto h-full px-2 md:px-4 py-4 flex items-center justify-between">

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
        </header>
    );
};

export default Navbar;