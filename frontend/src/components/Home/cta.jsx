import { 
    Link 
 } from "react-router-dom"
 import medicalAttendance from "../../assets/images/cta-images/medical-attendance.png"
import { motion } from "framer-motion"
import { DivideCircle, Flower, HeartPulse, HeartPulseIcon, LifeBuoy } from "lucide-react"
import { BsFillHeartPulseFill } from "react-icons/bs"

export default function CTA() {
    return(
        <section className="relative w-full bg-white/90 w-full py-40">
            <motion.div className="relative w-[92%] lg:w-[85%] mx-auto rounded-xl lg:rounded-3xl bg-gradient-to-tr from-blue-950 to-blue-900  py-12 overflow-hidden"
                  initial={{opacity:0, y: 60}}
                   whileInView={{opacity:1, y:0}}
                   viewport={{once:true, amount:0.2}}
                   transition={{duration:0.9, ease:"easeOut"}}
            >
                 <div className="flex flex-col justify-center  w-full h-full space-y-8 px-12 md:pl-12">
                     <div className="flex items-center w-fit gap-2 text-sm font-[roboto] font-light text-white/60 font-[Rubik]">
                        <div className="size-4 my-auto bg-green-800 rounded-full animate-pulse"/>
                          Your health, your priority
                     </div> 
                     <h2 className="text-[1.75rem] md:text-[2rem] lg:text-[3.125rem] text-white/80 lg:texxl font-[Roboto] font-bold leading-tight">
                        Let's discuss the next chapter of your life today.
                     </h2>
                     <div className="flex flex-col md:flex-row gap-x-4 gap-y-1">
                         <Link to="/appointment" className="mt-3 bg-red-800 p-3 rounded-lg hover:bg-red-00 font-bold text-center text-white/80">
                           Book an Appointment
                         </Link>
                         <Link to="/contact" className="mt-3 border border-red-800/40 px-12 p-3 text-center  rounded-lg hover:bg-red-800/30 font-bold text-white whitespace-nowrap">
                           Contact us
                         </Link>
                     </div>
                 </div>
                 <div className="absolute -right-5 -bottom-20 p-4 border-box flex">
                    <HeartPulseIcon size={354} className="hidden text-red-900/20"/>
                  {/*<img src={medicalAttendance} 
                       alt="medical attendance" 
                       className="m-auto w-[90%] h-[90%] object-cover rounded-xl bg-white/80" 
                  />
                  */}
                 </div>
                 
            </motion.div>
        </section>
    )}