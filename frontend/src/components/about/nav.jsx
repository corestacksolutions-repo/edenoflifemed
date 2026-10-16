import { Link } from "react-router-dom";



export default function Nav(){
      return(
           <section className="w-[92%] md:w-[85%] mx-auto shadow rounded-2xl my-3 md:my-0 md:-translate-y-1/2 bg-white gradient-to-tr from-blue-900 via-black to-blue-800">
               <nav className="flex justify-between gap-3 overflow-x-auto  p-3 font-[Roboto] font-light text-[16px]">
                  <li className="shrink-0 px-3 py-1 rounded-lg list-none text-lg bg-black/5">
                      <a href="#our-story" className=" ">our story</a>
                  </li>
                  <li className="shrink-0 px-3 py-1 rounded-lg list-none text-lg bg-black/5">
                      <a href="#our-values" className="">our values</a>
                  </li>
                  <li className="shrink-0 px-3 py-1 rounded-lg list-none text-lg bg-black/5">
                      <a href="#mission-and-vision" className=" ">mission & vision</a>
                  </li>
                  <li className="shrink-0 px-3 py-1 rounded-lg list-none text-lg bg-black/5">
                      <a href="#featured-treatments" className="">featured treatments</a>
                  </li>
                  <li className="shrink-0 px-3 py-1 rounded-lg list-none text-lg bg-black/5">
                      <a href="#our-process" className="">our process</a>
                  </li>
                  <li className="shrink-0 px-3 py-1 rounded-lg list-none text-lg bg-black/5">
                      <a href="#why-us" className="">why choose us</a>
                  </li>


                  <Link to='/consultation' className="shrink-0 px-3 py-1  rounded-lg list-none text-white font-normal text-lg bg-red-800 ">
                     book consultament
                  </Link>
               </nav>
           </section>
      )
}