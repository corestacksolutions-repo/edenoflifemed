import logo from "../../assets/logo.jpeg";
import { Link } from "react-router-dom";

export default function HeroDemo() {
  return (
        <div className="w-full w-[92%] md:w-[85%] mx-auto border">
           {/*nav */}
           <div className="w-full  flex justify-between py-4  border">
                <Link to="/">
                    <img src={logo} alt="Eden of Life logo" className="w-[62px] h-[62px] md:w-[72px] md:h-[72px] rounded-full object-cover border border-white/30 shadow-lg transition-all duration-300 group-hover:scale-105" />
                </Link>

                <nav className="hidden lg:flex items-center gap-6 md:gap-10 border">
                    <Link to="/about" className="text-sm md:text-base font-normal tracking-wide hover:text-blue-400 transition-colors duration-300">
                        About
                    </Link>
                    <Link to="/Services" className="text-sm md:text-base font-normal tracking-wide hover:text-blue-400 transition-colors duration-300">
                        Services
                    </Link>
                    <Link to="/treatments" className="text-sm md:text-base font-normal tracking-wide hover:text-blue-400 transition-colors duration-300">
                        Treatments
                    </Link>
                    <Link to="/contact" className="p-3 bg-red-600 rounded-sm text-sm md:text-base font-normal tracking-wide hover:text-blue-400 transition-colors duration-300">
                        Contact
                    </Link>
                    <Link to="/blogs" className="text-sm md:text-base font-normal tracking-wide hover:text-blue-400 transition-colors duration-300">
                        Blogs
                    </Link>
                </nav>

                {/**hero */}
                <div className="w-full h-[80vh] border "></div>
           </div>


        </div>
     )
}
