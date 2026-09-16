import { IoCheckmarkOutline } from "react-icons/io5";
import { LuClipboardPenLine, LuCreditCard, LuMailCheck, LuPhoneCall } from "react-icons/lu";

export const bookingSteps = [
    {
        id: 1,
        title: "Complete the form",
        description: "Provide your details and preferred consultation date and time.",
        icon: LuClipboardPenLine,
    },
    {
        id: 2,
        title: "Complete payment",
        description: "Proceed to the payment page and pay the consultation booking fee.",
        icon: LuCreditCard,
    },
    {
        id: 3,
        title: "Receive confirmation",
        description: "A confirmation email will be sent once your booking has been received.",
        icon: LuMailCheck,
    },
    {
        id: 4,
        title: "We'll follow up",
        description: "A member of our team will contact you to confirm the appointment and check in with you.",
        icon: LuPhoneCall,
    },
];