import {
    LuCalendarCheck,
    LuCreditCard,
    LuMailCheck,
    LuClock3,
} from "react-icons/lu";

export const appointmentBookingGuide = [
    {
        id: 1,
        title: "Choose your time",
        description:
            "Select a preferred date and time that works conveniently for you.",
        icon: LuCalendarCheck,
    },
    {
        id: 2,
        title: "Complete payment",
        description:
            "Proceed to the payment page and pay the MK15,000 appointment booking fee.",
        icon: LuCreditCard,
    },
    {
        id: 3,
        title: "We'll review your booking",
        description:
            "Your appointment details will be reviewed once your payment is completed.",
        icon: LuClock3,
    },
    {
        id: 4,
        title: "Receive confirmation",
        description:
            "You'll receive confirmation and further details once your appointment is verified.",
        icon: LuMailCheck,
    },
];