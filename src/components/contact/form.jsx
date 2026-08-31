import { AlarmCheck, Bell } from "lucide-react";

const Form = () =>{
     return(
             <form className="w-full py-8 space-y-8" >
                <div className="w-full grid lg:grid-cols-2 gap-x-4 gap-y-8">
                    {/*Name*/}
                    <fieldset className="w-full flex flex-col gap-2" >
                        <label htmlFor="name" className="text-[0.8rem] font-semibold">
                            Name
                        </label>
                        <input type="text" placeholder="your full name" className="border p-3 border rounded-lg focus:ring-1 outline-none" />
                    </fieldset>

                    {/*Email*/}
                    <fieldset className="w-full flex flex-col gap-2" >
                        <label htmlFor="email" className="text-[0.8rem] font-semibold">
                            Email
                        </label>
                        <input type="email" placeholder="your email address" className="border p-3 border rounded-lg focus:ring-1 outline-none" />
                    </fieldset>

                    {/*phone*/}
                    <fieldset className="w-full flex flex-col gap-2" >
                            <label htmlFor="phone" className="text-[0.8rem] font-semibold">
                                Phone
                            </label>
                            <input type="text" placeholder="your phone number" className="border p-3 border rounded-lg focus:ring-1 outline-none" />
                    </fieldset>

                    {/*subject*/}
                    <fieldset className="w-full flex flex-col gap-2" >
                        <label htmlFor="subject" className="text-[0.8rem] font-semibold">
                            Subject
                        </label>
                        <input type="text" placeholder="Subject" className="border p-3 border rounded-lg focus:ring-1 outline-none" />
                    </fieldset>
                </div>


                {/*option*/}
                <fieldset className="w-full flex flex-col gap-2" >
                        <label htmlFor="phone" className="text-[0.8rem] font-semibold">
                            How can we help you?
                        </label>
                        <select name="" id="" className="border p-3 border rounded-lg focus:ring-1 outline-none">
                            <option value="" className="">
                                Select an option
                            </option>
                        </select>
                </fieldset>

                {/*message*/}
                <fieldset className="w-full flex flex-col gap-2" >
                        <label htmlFor="message" className="text-[0.8rem] font-semibold">
                            Message
                        </label>
                        <textarea name="message" id="message" rows="5" className="border p-3 border rounded-lg focus:ring-1 outline-none"
                            placeholder="Type your message here...">

                        </textarea>

                </fieldset>

                <div className="w-full flex items-center gap-6 bg-blue-600/10 p-3 rounded-lg">
                  <Bell className="text-blue-500 text-[1.2rem]"/>
                  <p className="text-[0.8rem] text-blue-500 font-semibold tracting-wide">
                     We responde within 24 hours. 
                  </p>  
                </div>

                <button type="submit" className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:opacity-90 transition duration-300">
                    Send Message
                </button>
             </form>

             
     )
}
export default Form;