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
        lineOne:"+265 991 960 995",
        lineTwo:"+265 881 960 995",
        tell:[
             {
               id:1,
               lineOne:"+265991960995", 
               lineTwo:"+265881960995",
             }
        ]
     },
     {
        id:2,
        icon:LuMail,
        title:"Email",
        lineOne:"info@edenoflifemed.org",
        lineTwo:"manager@edenoflifemed.org",
        mail:[
             {
               id:1,
               lineOne:"info@edenoflifemed.org",
               lineTwo:"manager@edenoflifemed.org",
             }
        ]
     },
     {
        id:3,
        icon:LuMapPin,
        title:"Adress",
        lineOne:"P.O Box 1226",
        lineTwo:"Area 6, MXC House near TNM Tower",
        lineThree:"Mzuzu, Malawi",
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