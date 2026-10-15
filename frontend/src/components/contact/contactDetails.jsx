
import { FaClock, FaPhone, FaWhatsapp } from "react-icons/fa";
import { PiMapPinFill, } from "react-icons/pi";
import { TbMailFilled } from "react-icons/tb";

import backgroundLeaf from "../../assets/contact page/flower.png"
import contactDetails from "../../data/contactDetails";
import Form from "./form";


const ContactDetails = () => {
    return (
        <div className="w-full text-black">
            <div className="w-[92%] lg:w-[85%]  m-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
                <div className="w-full  h-full my-auto space-y-4 rounded-xl">
                    {/*contact details*/}
                    <div className="space-y-4">
                        {
                           contactDetails.map(({id, title, lineOne, lineTwo, lineThree, icon: Icon}) => (
                            <div key={id} className="flex gap-6 items-center border p-2 rounded-xl bg-gradient-to-tr from-blue-200 via-blue-200/40 to-blue-200">
                                {/* Icon */}
                                <div className="flex items-center justify-center text-white bg-black size-[44px] shrink-0 rounded-full">
                                    <Icon size={20} />
                                </div>
                
                                {/* Text Elements */}
                                <div className="flex flex-col leading-none">
                                    <h4 className="font-semibold mb-1">
                                        {title}
                                    </h4>
                
                                    <p className="tracking-wide font-[Roboto] font-light text-[13px] my-2">
                                        {lineOne}
                                    </p>
                                    <p className="tracking-wide font-[Roboto] font-light text-[13px]">
                                        {lineTwo}
                                    </p>
                                     <p className="tracking-wide font-[Roboto] font-light text-[13px] mt-2">
                                        {lineThree}
                                    </p>
                                </div>
                            </div>

                        ))}
                    </div>

                    {/*whatsapp */}
                    <article className="relative flex items-center gap-4 border p-6 rounded-xl bg-blue-900 text-white overflow-hidden">
                        {/*overlay */}
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-black lue-950 to-transparent"/>
                        <div className=" h-full flex items-center rounded-lg">
                            
                        </div>
                        <div className="relative flex flex-col gap-3 text-[0.9rem]">
                            <h3 className="font-[Roboto] font-bold text-[1rem]">Prefer a Quick Chat?</h3>
                            <p className="font-[Roboto]">
                                Connect with us on WhatsApp for 
                                instant support.
                            </p>
                            <button className="md:w-fit flex items-center gap-2 bg-emerald-800 shadow text-white font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition duration-300">
                              <FaWhatsapp className="text-[1.2rem]"/>  Chat on WhatsApp
                            </button>
                        </div> 
                    </article>

                </div>


                {/*form*/}
                 <Form/>
                <div className="hidden flex justify-end lg:col-span-2">
                    <div className="w-full md:w-[93%] h-full  border border-black/10 shadow-md rounded-xl my-auto p-6 space-y-4 ">
                        <header className="hidden w-full space-y-4 border-b pb-6">
                            <h2 className="text-3xl font-bold text-green-900">Send us a message</h2>  
                            <p className="">
                                Fill in the form below and our team will get back to you as soon as possible.
                            </p>
                        </header>
                        <Form/>
                    </div>
                    
                </div>
            </div> 
        </div>
    )
}   

export default ContactDetails; 