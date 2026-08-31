import { GrSchedule } from "react-icons/gr"
import { Link } from "react-router-dom";

const CTA = () =>{
      return(
         <div className="w-[92%] md:w-[85%] mx-auto  gap-3 border my-20 rounded-3xl p-6">
               
               <div className="w-full md:w-[60%] mx-auto text-center space-y-6">
                   <small className="uppercase text-blue-700">YOUR WELLNESS JOURNEY STARTS HERE</small>
                   <h1 className="text-4xl font-bold w-2/10 ">
                      Take the First Step Towards Lasting Wellness
                   </h1>
                   <p className="">
                     Connect with our clinicians to discuss your health concerns and discover 
                     a personalised path towards better wellbeing.
                   </p>

                   <div className="w-full md:w-fit flex flex-col md:flex-row gap-4  mx-auto p-4">
                      <Link to='/consultation' className='w-full md:w-fit flex justify-center items-center text-white gap-3 bg-blue-700 rounded-xl p-3 p2 font-semibold'>
                         <GrSchedule className="size-4"/> 
                         Book a consultation
                      </Link>
                      <Link to='/contact' className='w-full md:w-fit border bg-green-50 border-green-500 text-green-600 rounded-xl p-3 -2 font-semibold'>
                          Talk to our team
                      </Link>
                      
                   </div>
               </div>
               
         </div>
      )
}

export default CTA;