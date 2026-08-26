import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { FiUser, FiMail, FiPhone, FiCalendar, FiClock, FiFileText } from "react-icons/fi";

const BookingForm = () => {

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        reason: "",
        notes: "",
        consent: false,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        try {
            console.log("Booking submitted:", formData);

            // Backend/API submission will go here later.

        } catch (error) {
            console.error("Booking submission failed:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full min-w-0">

            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">

                {/* Full Name */}
                <div className="flex flex-col gap-2 min-w-0">
                    <label htmlFor="fullName" className="text-sm font-medium text-slate-700">
                        Full Name
                    </label>

                    <div className="relative">
                        <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />

                        <input id="fullName" name="fullName" type="text" value={formData.fullName} onChange={handleChange} placeholder="John Doe" required className="w-full h-11 sm:h-12 pl-11 pr-4 rounded-lg border border-slate-200 bg-slate-50 text-sm sm:text-base text-slate-800 placeholder:text-slate-400 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 transition-all" />
                    </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2 min-w-0">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700">
                        Email Address
                    </label>

                    <div className="relative">
                        <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />

                        <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required className="w-full h-11 sm:h-12 pl-11 pr-4 rounded-lg border border-slate-200 bg-slate-50 text-sm sm:text-base text-slate-800 placeholder:text-slate-400 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 transition-all" />
                    </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2 min-w-0">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-700">
                        Phone Number
                    </label>

                    <div className="relative">
                        <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />

                        <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+265 ..." required className="w-full h-11 sm:h-12 pl-11 pr-4 rounded-lg border border-slate-200 bg-slate-50 text-sm sm:text-base text-slate-800 placeholder:text-slate-400 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 transition-all" />
                    </div>
                </div>

                {/* Date */}
                <div className="flex flex-col gap-2 min-w-0">
                    <label htmlFor="date" className="text-sm font-medium text-slate-700">
                        Preferred Date
                    </label>

                    <div className="relative">
                        <FiCalendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />

                        <input id="date" name="date" type="date" value={formData.date} onChange={handleChange} required className="w-full h-11 sm:h-12 pl-11 pr-4 rounded-lg border border-slate-200 bg-slate-50 text-sm sm:text-base text-slate-800 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 transition-all" />
                    </div>
                </div>

                {/* Time */}
                <div className="flex flex-col gap-2 min-w-0">
                    <label htmlFor="time" className="text-sm font-medium text-slate-700">
                        Preferred Time
                    </label>

                    <div className="relative">
                        <FiClock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />

                        <input id="time" name="time" type="time" value={formData.time} onChange={handleChange} required className="w-full h-11 sm:h-12 pl-11 pr-4 rounded-lg border border-slate-200 bg-slate-50 text-sm sm:text-base text-slate-800 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 transition-all" />
                    </div>
                </div>

                {/* Consultation Reason */}
                <div className="flex flex-col gap-2 min-w-0">
                    <label htmlFor="reason" className="text-sm font-medium text-slate-700">
                        Reason for Consultation
                    </label>

                    <div className="relative">
                        <FiFileText className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />

                        <select id="reason" name="reason" value={formData.reason} onChange={handleChange} required className="w-full h-11 sm:h-12 pl-11 pr-4 rounded-lg border border-slate-200 bg-slate-50 text-sm sm:text-base text-slate-800 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 transition-all appearance-none">
                            <option value="">Select a reason</option>
                            <option value="general-wellness">General Wellness</option>
                            <option value="natural-healing">Natural Healing</option>
                            <option value="nutrition">Nutrition & Lifestyle</option>
                            <option value="chronic-condition">Chronic Health Concern</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>

            </div>

            {/* Additional Notes */}
            <div className="mt-5 flex flex-col gap-2">

                <label htmlFor="notes" className="text-sm font-medium text-slate-700">
                    Additional Notes <span className="text-slate-400 font-normal">(Optional)</span>
                </label>

                <textarea id="notes" name="notes" value={formData.notes} onChange={handleChange} rows="3" placeholder="Tell us anything you'd like our care team to know before your consultation..." className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm sm:text-base text-slate-800 placeholder:text-slate-400 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 transition-all" />

            </div>

            {/* Consent */}
            <div className="mt-5 flex items-start gap-3">

                <input id="consent" name="consent" type="checkbox" checked={formData.consent} onChange={handleChange} required className="mt-1 w-4 h-4 shrink-0 accent-blue-700 cursor-pointer" />

                <label htmlFor="consent" className="text-xs sm:text-sm leading-relaxed text-slate-500 cursor-pointer">
                    I confirm that the information provided is accurate and I agree to be contacted regarding my consultation request.
                </label>

            </div>

            {/* Submit */}
            <button type="submit" disabled={isSubmitting} className="w-full mt-6 h-12 rounded-lg bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white font-medium tracking-wide flex items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-0.5 disabled:hover:translate-y-0 shadow-lg shadow-blue-700/10">
                {isSubmitting ? "Submitting Request..." : "Submit Booking Request"}
                {!isSubmitting && <BsArrowRight size={20} />}
            </button>

            {/* Privacy Message */}
            <p className="mt-3 text-center text-xs leading-relaxed text-slate-400">
                Your information is kept confidential and will only be used to process your consultation request.
            </p>

        </form>
    );
};

export default BookingForm;