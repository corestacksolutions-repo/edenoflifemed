
import { FaClock, FaPhone, FaWhatsapp } from "react-icons/fa";
import { PiMapPinFill, } from "react-icons/pi";
import { TbMailFilled } from "react-icons/tb";

import backgroundLeaf from "../../assets/contact page/flower.png"

import Form from "./form";


const ContactDetails = () => {
    return (
        <div className="w-full text-black">
            <div className="w-[92%] lg:w-[85%]  m-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
                <div className="w-full  h-full my-auto space-y-4 rounded-xl">
                    {/*badge*/}
                    <small className="uppercase">get in touch</small>
                    <p className="text-[1.5rem] font-bold">How Can We Help You?</p>
                    <p className="text-[0.8rem] text-gray-600 tracking-wide">
                        Whether you have a question about our services, 
                        need assistance, or just want to say hello, 
                        we're here to help. 
                        Reach out to us and we'll respond as soon as we can.
                    </p>

                    {/*contact details*/}
                    <div className="space-y-4">
                        {/*phone */}
                        <div className="flex items-center gap-4 border p-2 rounded-xl">
                             <div className="flex items-center p-4 bg-gray-100 rounded-full">
                                <FaPhone className="tex text-[1.2rem] text-gray-400"/>
                             </div>
                             <div className="flex flex-col gap-1 text-[0.7rem]">
                                <h3 className="font-bold text-[0.8rem]">Phone</h3>
                                <a href="tel:+256981457286" className="text-gray-600">+256 981 457 286</a>
                                <a href="tel:+256981457286" className="text-gray-600">+256 981 457 286</a>
                             </div> 
                        </div>

                        {/*email */}
                        <div className="flex items-center gap-4 border p-2 rounded-xl">
                             <div className="flex items-center p-4 bg-gray-100 rounded-full">
                                <TbMailFilled className="text-[1.2rem] text-gray-400"/>
                             </div>
                             <div className="flex flex-col gap-1 text-[0.7rem]">
                                <h3 className="font-bold text-[0.8rem]">Email</h3>
                                <a href="mailto:info@edenoflifemed.com" className="text-gray-600">
                                    info@edenoflifemed.com
                                </a>
                                <a href="mailto:hello@edenoflifemed.com" className="text-gray-600">
                                    hello@edenoflifemed.com
                                </a>
                             </div> 
                        </div>

                        {/*address */}
                        <div className="flex items-center gap-4 border p-2 rounded-xl">
                             <div className="flex items-center p-4 bg-gray-100 rounded-full">
                                <PiMapPinFill className="text-[1.2rem] text-gray-400"/>
                             </div>
                             <div className="flex flex-col gap-1 text-[0.7rem]">
                                <h3 className="font-bold text-[0.8rem]">Address</h3>
                                <p className="text-gray-600">Area 6, Street 12</p>
                                <p className="text-gray-600">Mzuzu, Malawi</p>
                             </div> 
                        </div>

                        {/*hours */}
                        <div className="flex items-center gap-4 border p-2 rounded-xl">
                             <div className="flex items-center p-4 bg-gray-100 rounded-full">
                                <FaClock className="text-[1.2rem] text-gray-400"/>
                             </div>
                             <div className="flex flex-col gap-1 text-[0.7rem]">
                                <h3 className="font-bold text-[0.8rem]">Hours</h3>
                                <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                                <p className="text-gray-600">Saturday: Closed</p>
                                <p className="text-gray-600">Sunday: 9:00 AM - 1:00 PM</p>
                             </div> 
                        </div>
                    </div>

                    {/*whatsapp */}
                    <article className="relative flex items-center gap-4 border p-6 rounded-xl bg-green-900 text-white overflow-hidden">
                        {/*overlay */}
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-950 to-transparent"></div>
                        <img src={backgroundLeaf} 
                                 alt="natural leaf" 
                                 className="absolute inset-0 object-cover h-full w-full mix-blend-overlay opacity-50" />
                        <div className=" h-full flex items-center rounded-lg">
                            
                        </div>
                        <div className="relative flex flex-col gap-3 text-[0.9rem]">
                            <h3 className="font-bold text-[1rem]">Prefer a Quick Chat?</h3>
                            <p className="">
                                Connect with us on WhatsApp for 
                                instant support.
                            </p>
                            <button className="flex items-center gap-2 bg-white text-blue-600 py-2 px-4 rounded-lg hover:opacity-90 transition duration-300">
                              <FaWhatsapp className="text-[1.2rem]"/>  Chat on WhatsApp
                            </button>
                        </div> 
                    </article>

                </div>


                {/*form*/}
                <div className="flex justify-end lg:col-span-2">
                    <div className="w-full md:w-[93%] h-full  border border-black/10 shadow-md rounded-xl my-auto p-6 space-y-4 ">
                        <header className="w-full space-y-4 border-b pb-6">
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