import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { XCircle, RefreshCcw, ArrowLeft } from "lucide-react";

const BookingFailed = () => {
    const navigate = useNavigate();

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


                {/* Error Icon */}
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
                    <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center">
                        <XCircle className="w-12 h-12 text-slate-500" />
                    </div>
                </motion.div>


                {/* Heading */}
                <h1 className="font-serif text-4xl sm:text-5xl text-[#101a3a] leading-tight mb-5">
                    We couldn't complete
                    <span className="block text-[#24478f]">
                        your booking.
                    </span>
                </h1>


                {/* Supporting Text */}
                <p className="max-w-xl mx-auto text-[#101a3a]/65 leading-relaxed text-sm sm:text-base mb-4">
                    Something interrupted the booking process. Your
                    consultation has not been confirmed yet.
                </p>

                <p className="max-w-lg mx-auto text-[#101a3a]/50 text-sm leading-relaxed mb-9">
                    This may have been caused by a temporary connection,
                    payment, or system issue. Please try again.
                </p>


                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">

                    <motion.button
                        onClick={() => navigate(-1)}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full sm:w-auto min-h-12 px-6 py-3 rounded-xl bg-[#101a3a] text-white font-medium flex items-center justify-center gap-2 hover:bg-[#172653] transition-colors duration-300"
                    >
                        <RefreshCcw size={18} />
                        Try Again
                    </motion.button>


                    <motion.button
                        onClick={() => navigate("/")}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full sm:w-auto min-h-12 px-6 py-3 rounded-xl border border-[#101a3a]/15 bg-white text-[#101a3a] font-medium flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors duration-300"
                    >
                        <ArrowLeft size={18} />
                        Back to Home
                    </motion.button>

                </div>

            </motion.div>

        </div>
    );
};

export default BookingFailed;