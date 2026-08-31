import { LuMapPin } from "react-icons/lu";


const Map = () => {
    return(
         <div className=" w-[92%] lg:w-[85%] m-auto grid md:grid-cols-3 gap-8 shadow p-4 rounded-xl ">
            
             <div className="w-full h-full space-y-4 text-sm md:w-[80%] rounded-xl">
                <small className="uppercase text-blue-700">visit us</small>
                <p className="text-2xl font-bold">
                     We Always Welcome You
                </p>
                <p className="">
                    Our center is a peaceful space 
                    designed to support your healing and wellness journey.
                </p>
                <p className="w-ft flex items-center gap-4 bg-blue-600/10 text-blue-600/70 font-bold border border-blue-600/40 rounded p-2">
                    <LuMapPin className="size-6" />
                    Get Directions
                </p>
             </div>

             {/* google map */}
             <div className="rounded-lg w-full md:col-span-2 h-full m-auto overflow-hidden">
                <iframe  className=""
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.191151922508!2d33.9623025!3d-11.4661245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x191cf7cf3ce57a9f%3A0xe9c9863299811c90!2sEDEN%20OF%20LIFE%20NATURAL%20MEDICINE%20CLINIC!5e0!3m2!1sen!2smw!4v1788034984594!5m2!1sen!2smw" 
                    width="100%" 
                    height="100%" 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
             </div>
         </div>
    )
}   
export default Map;