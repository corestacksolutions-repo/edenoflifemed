import { 
    Link 
 } from "react-router-dom"
 import medicalAttendance from "../../assets/images/cta-images/medical-attendance.png"
import { motion } from "framer-motion"

export default function CTA() {
    return(
        <section className="relative bg-white/90 sky-50 w-full py-16">
            <motion.div className="w-[92%] lg:w-[85%] mx-auto grid md:grid-cols-2 rounded-xl lg:rounded-3xl bg-gradient-to-tr from-blue-950 to-blue-900  overflow-hidden"
                  initial={{opacity:0, y: 60}}
                   whileInView={{opacity:1, y:0}}
                   viewport={{once:true, amount:0.2}}
                   transition={{duration:0.9, ease:"easeOut"}}
            >
                 <div className="flex flex-col justify-center  w-full h-full space-y-4 px-6 py-8 md:pl-12">
                     <span className="text-xl font-[roboto] text-white/80 font-[Rubik]">
                        Your health,your priority
                     </span> 
                     <h2 className="text-[2.2rem] text-white/80 lg:text-5xl font-[Roboto] font-bold leading-tight">
                        Let's discuss the next chapter of your life today.
                     </h2>
                     <div className="flex flex-col md:flex-row gap-x-4 gap-y-1">
                         <Link to="/booking" className="mt-3 bg-red-800 p-3 rounded-lg hover:bg-red-00 font-bold text-center text-white/80">
                           Book an Appointment
                         </Link>
                         <Link to="/contact" className="mt-3 border border-green-800/40 px-12 p-3 text-center  rounded-lg bg-green-700 hover:bg-green-800/50 font-bold text-white">
                           Contact us
                         </Link>
                     </div>
                 </div>
                 <div className="p-4 border-box flex">
                  <img src={medicalAttendance} 
                       alt="medical attendance" 
                       className="m-auto w-[90%] h-[90%] object-cover rounded-xl bg-white/80" 
                  />
                  
                 </div>
                 
            </motion.div>
        </section>
    )}