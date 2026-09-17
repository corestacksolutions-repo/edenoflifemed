import { 
  LuClock, 
  LuMail, 
  LuMapPin, 
  LuPhone 
} from "react-icons/lu";

const contactDetails =[
     {
        id:1,
        icon:LuPhone,
        title:"Phone",
        lineOne:"+265 981 457 286",
        lineTwo:"+265 981 457 286",
     },
     {
        id:2,
        icon:LuMail,
        title:"Email",
        lineOne:"info@edenoflifemed.org",
        lineTwo:"manager@edenoflifemed.org",
     },
     {
        id:3,
        icon:LuMapPin,
        title:"Adress",
        lineOne:"Area 6, Plot 8",
        lineTwo:"Mzuzu, Malawi",
     },
      {
        id:4,
        icon:LuClock,
        title:"Hours",
        lineOne:"Monday - Friday: 8:00 AM - 5:00 PM",
        lineTwo:"Sunday: Saturday: Closed",
        lineThree:"Sunday: 9:00 AM - 1:00 PM",
     },
  
]

export default contactDetails