import { ArrowRightFromLineIcon, ArrowUpFromDotIcon, ArrowUpRightFromCircle } from "lucide-react";
import { FaClover } from "react-icons/fa6"
import { FiCheck } from "react-icons/fi";
import { LuArrowBigUp } from "react-icons/lu";
import { RiMarkPenLine } from "react-icons/ri";


const FeaturedTreatment = ()=>{
      return(
        <div className="w-[92%] md:w-[85%] mx-auto ">
            <div className="grid md:grid-cols-3 gap-3">
               <div className="md:col-span-2">
                   <header className="flex flex-col gap-3">
                      <small className="uppercase tracking-wide text-blue-700">featured treatments</small>
                      <h className="text-2xl font-semibold">Some of the treatments we provide.</h>
                    </header>   

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-6 py-8">

                        <article className="h-[200px] relative rounded-2xl overflow-hidden">
                            <img src='https://i.pinimg.com/736x/ad/ae/41/adae418cf13fcfcc6d29f1997bb3bf02.jpg' 
                                alt="" 
                                className="w-full  h-full"
                            />
                            <h2 className=" bg-white/50 absolute left-2 bottom-2 px-2 font-semibold rounded-full backdrop-blur-sm">
                                Aromatherapy
                            </h2>
                            <div className="cursor-pointer flex items-center justify-center 
                                    size-[45px] bg-white/50 absolute right-2 bottom-2 
                                    rounded-full rounded-tr-[45px] backdrop-blur-sm 
                                    hover:scale-110 transition-all duration-500">
                                <ArrowUpFromDotIcon className="rotate-45 text-red-800"/>
                            </div>
                        </article>
                        <article className="h-[200px] relative rounded-2xl overflow-hidden">
                            <img src='https://i.pinimg.com/1200x/2f/b4/9e/2fb49e7421ba9f0e4462ebc2b1285ab9.jpg' 
                                alt="" 
                                className="w-full  h-full"
                            />
                            <h2 className=" bg-white/50 absolute left-2 bottom-2 px-2 font-semibold rounded-full backdrop-blur-sm">
                                Hydrotherapy
                            </h2>
                            <div className="cursor-pointer flex items-center justify-center 
                                    size-[45px] bg-white/50 absolute right-2 bottom-2 
                                    rounded-full rounded-tr-[45px] backdrop-blur-sm 
                                    hover:scale-110 transition-all duration-500">
                                <ArrowUpFromDotIcon className="rotate-45 text-red-800"/>
                            </div>
                        </article>
                        <article className="h-[200px] border relative rounded-2xl overflow-hidden">
                            <img src='https://i.pinimg.com/736x/c5/9b/10/c59b1015f172961962cd715379306caf.jpg' 
                                alt="" 
                                className="w-full h-full "
                            />
                            <h2 className=" bg-white/50 absolute left-2 bottom-2 px-2 font-semibold rounded-full backdrop-blur-sm">
                                Mind-bodyTtherapy
                            </h2>
                            <div className="cursor-pointer flex items-center justify-center 
                                    size-[45px] bg-white/50 absolute right-2 bottom-2 
                                    rounded-full rounded-tr-[45px] backdrop-blur-sm 
                                    hover:scale-110 transition-all duration-500">
                                <ArrowUpFromDotIcon className="rotate-45 text-red-800"/>
                            </div>
                        </article>
                        <article className="h-[200px] relative rounded-2xl overflow-hidden">
                            <img src='https://i.pinimg.com/1200x/64/8a/62/648a626beb281e44678d7dea02b5cc1d.jpg' 
                                alt="" 
                                className="w-full  h-full"
                            />
                            <h2 className=" bg-white/50 absolute left-2 bottom-2 px-2 font-semibold rounded-full backdrop-blur-sm">
                                Nutritional Therapy
                            </h2>
                            <div className="cursor-pointer flex items-center justify-center 
                                    size-[45px] bg-white/50 absolute right-2 bottom-2 
                                    rounded-full rounded-tr-[45px] backdrop-blur-sm 
                                    hover:scale-110 transition-all duration-500">
                                <ArrowUpFromDotIcon className="rotate-45 text-red-800"/>
                            </div>
                        </article>
                        <article className="h-[200px] relative rounded-2xl overflow-hidden">
                            <img src='https://i.pinimg.com/1200x/a6/81/33/a681335b536af32ffce3baa4179fd532.jpg' 
                                alt="" 
                                className=" w-full  h-full"
                            />
                            <h2 className=" bg-white/50 absolute left-2 bottom-2 px-2 font-semibold rounded-full backdrop-blur-sm">
                                Physical medicine
                            </h2>
                            <div className="cursor-pointer flex items-center justify-center 
                                    size-[45px] bg-white/50 absolute right-2 bottom-2 
                                    rounded-full rounded-tr-[45px] backdrop-blur-sm 
                                    hover:scale-110 transition-all duration-500">
                                <ArrowUpFromDotIcon className="rotate-45 text-red-800"/>
                            </div>
                        </article>             
                    </div>
              </div>
              {/*why choose us */}
              <div className="h-fit bg-black lue-800 border-blue-300 rounded-2xl text-white p-6">
                 <small className="">reasons for choosing us</small>
                 <h1 className="text-2xl font-bold">Why Clients Choose Us</h1>
                 
                 <div className="my-10  space-y-3">
                    <p className="flex gap-3 items-center">
                      <span className="p-1 rounded-full bg-white">
                        <FiCheck className="size-4 text-blue-800"/> 
                      </span>
                      Get personalised natural healthcare
                    </p>
                    <p className="flex gap-3 items-center ">
                      <span className="p-1 rounded-full bg-white">
                        <FiCheck className="size-4 text-blue-800"/> 
                      </span>
                      Treat your whole wellbeing
                    </p>
                    <p className="flex gap-3 items-center ">
                      <span className="p-1 rounded-full bg-white">
                        <FiCheck className="size-4 text-blue-800"/> 
                      </span>
                      Address underlying health causes
                    </p>
                    <p className="flex gap-3 items-center ">
                      <span className="p-1 rounded-full bg-white">
                        <FiCheck className="size-4 text-blue-800"/> 
                      </span>
                      Access diverse natural therapies
                    </p>
                    <p className="flex gap-3 items-center">
                      <span className="p-1 rounded-full bg-white">
                        <FiCheck className="size-4 text-blue-800"/> 
                      </span>
                      Make informed health decisions
                    </p>
                    <p className="flex gap-3 items-center">
                      <span className="p-1 rounded-full bg-white">
                        <FiCheck className="size-4 text-blue-800"/> 
                      </span>
                      Experience compassionate professional care
                    </p>
                    <p className="flex gap-3 items-center">
                      <span className="p-1 rounded-full bg-white">
                        <FiCheck className="size-4 text-blue-800"/> 
                      </span>
                      Use natural therapies responsibly
                    </p>
                    <p className="flex gap-3 items-center">
                      <span className="p-1 rounded-full bg-white">
                        <FiCheck className="size-4 text-blue-800"/> 
                      </span>
                      Build long-term wellness
                    </p>
                 </div>
              </div>
            </div>
        </div>
      )
}
export default FeaturedTreatment;