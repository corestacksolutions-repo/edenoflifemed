import { AlarmCheck, Bell, LucideSendHorizonal, Send, SendHorizonal } from "lucide-react";

const Form = () =>{
     return(
             <form className="md:col-span-2 md:pl-16 w-full space-y-8 " >
                <header className="my-12 md:my-0 md:mb-24">
                    <h2 className="font-bold font-[Roboto] text-2xl">Reach Out to Our Team</h2>
                </header>
                <div className="w-full grid lg:grid-cols-2 gap-x-4 gap-y-8">
                    {/*Name*/}
                    <fieldset className="w-full flex flex-col gap-1" >
                       <label
                        htmlFor="fullName"
                        className="block text-sm mb-1"
                       >
                        Full Name
                       </label>

                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value=""
                        onChange="{handleChange}"
                        required
                        autoComplete="name"
                        className="w-full p-2 border-b border-black outline-none"
                        placeholder="John Doe"
                       />
                    </fieldset>

                    {/*Email*/}
                    
                    <fieldset className="w-full flex flex-col gap-1" >
                       <label
                        htmlFor="email"
                        className="block text-sm mb-1"
                       >
                        Email
                       </label>

                      <input
                        type="email"
                        id="email"
                        name="fullName"
                        value=""
                        onChange="{handleChange}"
                        required
                        autoComplete="name"
                        className="w-full p-2 border-b border-black outline-none bg-transparen"
                        placeholder="Your email"
                       />
                    </fieldset>
                   
                    {/*phone*/}
                    <fieldset className="w-full flex flex-col gap-1" >
                       <label
                        htmlFor="phone"
                        className="block text-sm mb-1"
                       >
                        Phone
                       </label>

                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        value=""
                        onChange="{handleChange}"
                        required
                        autoComplete="name"
                        className="w-full p-2 border-b border-black outline-none bg-transparen"
                        placeholder="Your phone"
                       />
                    </fieldset>

                
                </div>

                {/*message*/}
                <fieldset className="w-full flex flex-col gap-1" >
                        <label
                          htmlFor="phone"
                          className="block text-sm mb-1"
                        >
                         Phone
                        </label>
                        <textarea name="message" id="message" rows="5" 
                        className="w-full p-2 border-b border-black outline-none bg-transparent"
                        placeholder="Your message...">

                        </textarea>

                </fieldset>


                <button type="submit" className="flex items-center gap-6 md:w-fit bg-red-800 text-white lext-lg py-3 px-8 font-semibold rounded-lg hover:opacity-90 transition duration-300">
                    Send 
                    <LucideSendHorizonal size={16}/>
                </button>
             </form>

             
     )
}
export default Form;