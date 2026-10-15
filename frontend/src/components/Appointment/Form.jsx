import React, { useState } from "react";
import { AlertCircle, Loader2 } from "lucide-react";

const apiBase = import.meta.env.VITE_BACKEND_API_URL;

const Form = () => {

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        country: "",
        dateTime: "",
        notes: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");


    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Clear any previous error when the user starts editing again.
        if (error) {
            setError("");
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");
        setIsSubmitting(true);

        try {

            const payload = {
                full_name: formData.fullName,
                email: formData.email,
                phone: formData.phone,
                country: formData.country,
                date_time: formData.dateTime,
                notes: formData.notes
            }

            const response = await fetch(
                `${apiBase}/api/create-appointment`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                }
            );


            // Safely attempt to parse the response.
            const data = await response.json().catch(() => ({}));

            console.log("Data from the server:", data);


            /*
             * The backend is expected to return a redirectUrl
             * after successfully creating the appointment.
             */
            if (response.ok && data.redirectUrl) {

                window.location.href = data.redirectUrl;

                return;
            }

            /*
             * The server responded with an error.
             */
            if (!response.ok || data.Errors) {
                console.error("Server responded with an error:", data.Errors[0].msg);
                setError(
                    `Server responded with an error:", ${data.Errors[0].msg}`
                )
            }

            setFormData({
                fullName: "",
                email: "",
                phone: "",
                country: "",
                dateTime: "",
                notes: "",
            })


            /*
             * The request may have technically succeeded,
             * but without a payment URL we cannot continue.
             */
            throw new Error(
                "We couldn't continue to the payment page. Please try again."
            );

        } catch (error) {

            console.error(
                "Appointment booking failed:",
                error
            );

            setError(
                "We couldn't process your appointment booking right now. Please check your connection and try again. If the problem continues, please contact our team directly."
            );

        } finally {

            setIsSubmitting(false);

        }
    };


    return (
        <form
            onSubmit={handleSubmit}
            className="basis-full md:basis-[68%] w-full p-2 flex flex-col"
        >

            {/* Form Heading */}
            <div className="mb-6">

                <h3 className="font-serif text-2xl md:text-3xl text-blue-950">
                    Schedule Your Appointment
                </h3>

                <p className="mt-2 text-sm text-black/55 leading-relaxed">
                    Choose a date and time that works for you and provide
                    your details below to continue with your booking.
                </p>

            </div>


            {/* Error Message */}
            {error && (
                <div
                    role="alert"
                    aria-live="polite"
                    className="mb-6 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-800"
                >

                    <AlertCircle
                        size={20}
                        className="shrink-0 mt-0.5"
                    />

                    <p className="text-sm leading-relaxed">
                        {error}
                    </p>

                </div>
            )}


            {/* Full Name + Email */}
            <div className="flex flex-col md:flex-row items-start justify-between mb-5 gap-5">

                <div className="w-full md:basis-[48%]">

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
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                        className="w-full p-2 border-b border-black outline-none bg-transparent focus:border-blue-800 transition-colors duration-300"
                        placeholder="John Doe"
                    />

                </div>


                <div className="w-full md:basis-[48%]">

                    <label
                        htmlFor="email"
                        className="block text-sm mb-1"
                    >
                        Email Address
                    </label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        className="w-full p-2 border-b border-black outline-none bg-transparent focus:border-blue-800 transition-colors duration-300"
                        placeholder="johndoe@email.com"
                    />

                </div>

            </div>


            {/* Phone + Country */}
            <div className="flex flex-col md:flex-row items-start justify-between mb-5 gap-5">

                <div className="w-full md:basis-[48%]">

                    <label
                        htmlFor="phone"
                        className="block text-sm mb-1"
                    >
                        Phone Number
                    </label>

                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        autoComplete="tel"
                        className="w-full p-2 border-b border-black outline-none bg-transparent focus:border-blue-800 transition-colors duration-300"
                        placeholder="+265123456789"
                    />

                </div>


                <div className="w-full md:basis-[48%]">

                    <label
                        htmlFor="country"
                        className="block text-sm mb-1"
                    >
                        Country
                    </label>

                    <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border-b border-black outline-none bg-transparent focus:border-blue-800 transition-colors duration-300"
                    >

                        <option value="" disabled>
                            Select your country
                        </option>

                        <option value="Malawi">
                            Malawi
                        </option>

                        <option value="Zambia">
                            Zambia
                        </option>

                        <option value="Tanzania">
                            Tanzania
                        </option>

                        <option value="Mozambique">
                            Mozambique
                        </option>

                        <option value="Zimbabwe">
                            Zimbabwe
                        </option>

                        <option value="South Africa">
                            South Africa
                        </option>

                        <option value="Other">
                            Other
                        </option>

                    </select>

                </div>

            </div>


            {/* Date & Time */}
            <div className="w-full mb-5">

                <label
                    htmlFor="dateTime"
                    className="block text-sm mb-1"
                >
                    Preferred Date & Time
                </label>

                <input
                    type="datetime-local"
                    id="dateTime"
                    name="dateTime"
                    value={formData.dateTime}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border-b border-black outline-none bg-transparent focus:border-blue-800 transition-colors duration-300"
                />

                <p className="mt-2 text-xs text-black/45">
                    Please choose a time that is convenient for you.
                    Our team will confirm the appointment after your
                    booking is reviewed.
                </p>

            </div>


            {/* Notes */}
            <div className="w-full">

                <label
                    htmlFor="notes"
                    className="block text-sm mb-1"
                >
                    Additional Notes
                    <span className="text-black/40">
                        {" "}(Optional)
                    </span>
                </label>

                <textarea
                    id="notes"
                    name="notes"
                    rows="4"
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full p-2 border-b border-black outline-none resize-none bg-transparent focus:border-blue-800 transition-colors duration-300"
                    placeholder="Is there anything else you'd like us to know?"
                />

            </div>


            {/* Fee Notice */}
            <div className="mt-6 rounded-lg bg-blue-950/5 border border-blue-950/10 px-4 py-3">

                <div className="flex items-center justify-between gap-4">

                    <div>

                        <p className="text-sm font-medium text-blue-950">
                            Appointment Booking Fee
                        </p>

                        <p className="text-xs text-black/50 mt-1">
                            Required to proceed with your booking.
                        </p>

                    </div>

                    <p className="text-lg font-semibold text-blue-950 whitespace-nowrap">
                        MK4,000
                    </p>

                </div>

            </div>


            {/* Submit */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="self-start mt-7 px-6 py-3 bg-red-700/90 text-white rounded-lg hover:bg-red-900 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[190px]"
            >

                {isSubmitting ? (
                    <>
                        <Loader2
                            size={18}
                            className="animate-spin"
                        />

                        <span>
                            Processing...
                        </span>
                    </>
                ) : (
                    <span>
                        Proceed to Payment
                    </span>
                )}

            </button>


            {/* Payment Note */}
            <p className="mt-3 text-xs text-black/45 leading-relaxed">
                You will be redirected to our secure payment page to
                complete the MK4,000 appointment booking fee.
            </p>

        </form>
    );
};

export default Form;