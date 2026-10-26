
import React, { useState } from "react";
import { Loader2, AlertCircle, Banknote } from "lucide-react";

const apiBase = import.meta.env.VITE_BACKEND_API_URL;

const CONSULTATION_FEE = "MWK 15,000";

const Form = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        country: "",
        purpose: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (error) {
            setError("");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");
        setIsSubmitting(true);

        try {
            const response = await fetch(
                `${apiBase}/api/create-consultation`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            const data = await response.json().catch(() => ({}));

            console.log("Data from the server:", data);

            if (response.ok && data.redirectUrl) {
                window.location.href = data.redirectUrl;
                return;
            }

            if (!response.ok) {
                const serverMessage =
                    data?.Errors?.[0]?.msg ||
                    data?.errors?.[0]?.msg ||
                    data?.message;

                setError(
                    serverMessage ||
                    "We couldn't process your consultation request. Please try again."
                );

                return;
            }

            throw new Error(
                "We couldn't continue to the payment page. Please try again."
            );
        } catch (error) {
            console.error("Consultation booking failed:", error);

            setError(
                "We couldn't process your consultation request right now. Please check your connection and try again. If the problem continues, please contact our team directly."
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
                    Book Your Consultation
                </h3>

                <p className="mt-2 text-sm text-black/55 leading-relaxed">
                    Tell us a little about yourself and what you'd like
                    support with. We'll take it from there.
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
                        Email Address (Optional)
                    </label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        
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
                        className="w-full p-2 border-b border-black outline-none bg-transparent"
                    >
                        <option value="" disabled>
                            Select your country
                        </option>

                        <option value="Malawi">Malawi</option>
                        <option value="Zambia">Zambia</option>
                        <option value="Tanzania">Tanzania</option>
                        <option value="Mozambique">Mozambique</option>
                        <option value="Zimbabwe">Zimbabwe</option>
                        <option value="South Africa">South Africa</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>

            {/* Purpose */}
            <div className="w-full mb-5">
                <label
                    htmlFor="purpose"
                    className="block text-sm mb-1"
                >
                    Purpose of Consultation
                </label>

                <select
                    id="purpose"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border-b border-black outline-none bg-transparent focus:border-blue-800 transition-colors duration-300"
                >
                    <option value="" disabled>
                        Select a purpose
                    </option>

                    <option value="General Wellness">
                        General Wellness
                    </option>

                    <option value="Chronic Health Concern">
                        Chronic Health Concern
                    </option>

                    <option value="Nutrition & Lifestyle">
                        Nutrition & Lifestyle
                    </option>

                    <option value="Natural & Herbal Support">
                        Natural & Herbal Support
                    </option>

                    <option value="Other Health Concern">
                        Other Health Concern
                    </option>
                </select>
            </div>

            {/* Message */}
            <div className="w-full">
                <label
                    htmlFor="message"
                    className="block text-sm mb-1"
                >
                    Tell us more about your concern
                    <span className="text-black/40">
                        {" "}(Optional)
                    </span>
                </label>

                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-2 border-b border-black outline-none resize-none bg-transparent focus:border-blue-800 transition-colors duration-300"
                    placeholder="Tell us more about what you're experiencing..."
                />
            </div>

            {/* Consultation Fee */}
            <div className="mt-7 rounded-xl border border-blue-950/10 bg-blue-50/70 px-5 py-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-blue-100 text-blue-950 flex items-center justify-center">
                        <Banknote size={21} />
                    </div>

                    <div>
                        <p className="text-sm text-black/60">
                            Consultation Fee
                        </p>

                        <p className="text-xs text-black/45 mt-0.5">
                            Pay securely online
                        </p>
                    </div>
                </div>

                <p className="text-xl md:text-2xl font-semibold text-blue-950 whitespace-nowrap">
                    {CONSULTATION_FEE}
                </p>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="self-start mt-5 px-6 py-3 bg-red-700/90 text-white rounded-lg hover:bg-red-900 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[170px]"
            >
                {isSubmitting ? (
                    <>
                        <Loader2
                            size={18}
                            className="animate-spin"
                        />

                        <span>Processing...</span>
                    </>
                ) : (
                    <span>Proceed to Payment</span>
                )}
            </button>

            {/* Payment Note */}
            <div className="mt-3 rounded-lg bg-gray-50 border border-black/5 px-4 py-3">
                <p className="text-xs text-black/55 leading-relaxed">
                    Your consultation fee is{" "}
                    <span className="font-semibold text-blue-950">
                        {CONSULTATION_FEE}
                    </span>
                    . After submitting your details, you'll be redirected
                    to our secure payment page to complete your payment.
                </p>
            </div>
        </form>
    );
};

export default Form;
