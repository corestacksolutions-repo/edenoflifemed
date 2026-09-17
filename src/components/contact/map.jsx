import { LuMapPin } from "react-icons/lu";


const Map = () => {
    return(
         <div className="w-[92%] lg:w-[85%] m-auto gap-8 mb-24 rounded-xl overflow-hidden">
             {/* google map */}
                <iframe  className=""
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2937.734758670947!2d33.9623025!3d-11.4661245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x191cf7cf3ce57a9f%3A0xe9c9863299811c90!2sEDEN%20OF%20LIFE%20NATURAL%20MEDICINE%20CLINIC!5e1!3m2!1sen!2smw!4v1789632522866!5m2!1sen!2smw" 
                    width="100%" 
                    height="300" 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe> 
         </div>
    )
}   
export default Map;