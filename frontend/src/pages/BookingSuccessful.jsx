import { motion } from "framer-motion";
import { useNavigate, useSearchParams } from "react-router-dom";
import { CheckCircle, ArrowRight, Mail, Phone } from "lucide-react";

const BookingSuccess = () => {
    const navigate = useNavigate();
    const [params] = useSearchParams();

    const ref = params.get("ref");

    return (
        <div className="min-h-screen bg-[#f7f8fb] relative overflow-hidden flex items-center justify-center px-5">

            {/* Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">

                <motion.div
                    className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-blue-100/60 blur-3xl"
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.5, 0.7, 0.5],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                    }}
                />

                <motion.div
                    className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-slate-200/70 blur-3xl"
                    animate={{
                        scale: [1.15, 1, 1.15],
                        opacity: [0.5, 0.7, 0.5],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                    }}
                />

            </div>


            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 w-full max-w-2xl text-center"
            >

                {/* Brand */}
                <div className="flex justify-center mb-8">
                    <div className="flex items-center gap-3">

                        <div className="w-11 h-11 rounded-full bg-[#101a3a] flex items-center justify-center">
                            <span className="text-white font-serif text-xl">
                                E
                            </span>
                        </div>

                        <span className="text-[#101a3a] text-xl font-semibold tracking-wide">
                            EDENAM
                        </span>

                    </div>
                </div>


                {/* Success Icon */}
                <motion.div
                    initial={{ scale: 0.75 }}
                    animate={{ scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 120,
                        delay: 0.15,
                    }}
                    className="flex justify-center mb-7"
                >
                    <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center">
                        <CheckCircle className="w-12 h-12 text-[#24478f]" />
                    </div>
                </motion.div>


                {/* Heading */}
                <h1 className="font-serif text-4xl sm:text-5xl text-[#101a3a] leading-tight mb-5">
                    Your consultation
                    <span className="block text-[#24478f]">
                        is confirmed.
                    </span>
                </h1>


                {/* Supporting Text */}
                <p className="max-w-xl mx-auto text-[#101a3a]/65 leading-relaxed text-sm sm:text-base mb-4">
                    Thank you for choosing Eden of Life. We've received
                    your booking and payment successfully.
                </p>

                <p className="max-w-lg mx-auto text-[#101a3a]/50 text-sm leading-relaxed mb-7">
                    A confirmation email with your booking details will
                    be sent to you shortly. Our team will also follow up
                    with you directly to check in and confirm your
                    consultation details.
                </p>


                {/* Reference */}
                {ref && (
                    <div className="inline-flex items-center gap-2 px-4 py-2.5 mb-8 rounded-full bg-white border border-[#101a3a]/10 text-sm">

                        <span className="text-[#101a3a]/50">
                            Reference
                        </span>

                        <span className="font-medium text-[#101a3a]">
                            {ref}
                        </span>

                    </div>
                )}


                {/* Next Steps */}
                <div className="max-w-md mx-auto mb-9 grid grid-cols-1 sm:grid-cols-2 gap-3">

                    {/* Email */}
                    <div className="bg-white border border-[#101a3a]/10 rounded-2xl p-4 text-left">

                        <Mail
                            size={20}
                            className="text-[#24478f] mb-3"
                        />

                        <p className="text-sm font-medium text-[#101a3a] mb-1">
                            Check your email
                        </p>

                        <p className="text-xs text-[#101a3a]/50 leading-relaxed">
                            Your confirmation and booking details will
                            be sent to you.
                        </p>

                    </div>


                    {/* Follow Up */}
                    <div className="bg-white border border-[#101a3a]/10 rounded-2xl p-4 text-left">

                        <Phone
                            size={20}
                            className="text-[#24478f] mb-3"
                        />

                        <p className="text-sm font-medium text-[#101a3a] mb-1">
                            Expect a follow-up
                        </p>

                        <p className="text-xs text-[#101a3a]/50 leading-relaxed">
                            Our team will contact you to confirm your
                            consultation details.
                        </p>

                    </div>

                </div>


                {/* Action */}
                <motion.button
                    onClick={() => navigate("/")}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="mx-auto min-h-12 px-6 py-3 rounded-xl bg-[#101a3a] text-white font-medium flex items-center justify-center gap-2 hover:bg-[#172653] transition-colors duration-300"
                >
                    <span>
                        Back to Home
                    </span>

                    <ArrowRight size={18} />

                </motion.button>

            </motion.div>

        </div>
    );
};

export default BookingSuccess;