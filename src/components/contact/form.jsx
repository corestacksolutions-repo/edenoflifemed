import React, { useState } from "react";
import { LucideSendHorizonal, CheckCircle2, AlertCircle } from "lucide-react";

import { supabase } from "../../database/supabase/supabaseClient.js";

const Form = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        message: "",
    });

    const [error, setError] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // Handles changes to all form fields
    const handleChange = (e) => {
        const { name, value } = e.target;

        // If the user starts editing after a successful submission,
        // remove the success message.
        if (submitted) {
            setSubmitted(false);
        }

        // Clear an existing error when the user starts correcting the form.
        if (error) {
            setError(null);
        }

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prevent duplicate submissions
        if (isSubmitting) return;

        setIsSubmitting(true);
        setError(null);
        setSubmitted(false);

        try {
            const payload = {
                full_name: formData.fullName.trim(),
                email: formData.email.trim(),
                phone: formData.phone.trim(),
                message: formData.message.trim(),
            };

            const { error } = await supabase
                .from("contact_messages")
                .insert(payload);

            if (error) {
                // Keep the detailed Supabase error in the console
                // for development/debugging.
                console.error("Supabase contact form error:", error);

                throw new Error(
                    "We couldn't send your message right now."
                );
            }

            // Submission was successful
            setSubmitted(true);

            // Reset the form
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                message: "",
            });
        } catch (error) {
            console.error("Contact form submission failed:", error);

            setError(
                "We couldn't send your message. Please try again in a moment."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="md:col-span-2 md:pl-16 w-full space-y-8"
        >
            <header className="my-12 md:my-0 md:mb-24">
                <h2 className="font-bold font-[Roboto] text-2xl">
                    Reach Out to Our Team
                </h2>

                <p className="mt-2 text-sm text-black/50">
                    Have a question or need more information? Send us a
                    message and our team will get back to you.
                </p>
            </header>

            {/* Success Message */}
            {submitted && (
                <div
                    role="status"
                    aria-live="polite"
                    className="flex items-start gap-3 rounded-lg bg-emerald-50 border border-emerald-200 p-4 text-emerald-800"
                >
                    <CheckCircle2
                        size={21}
                        className="shrink-0 mt-0.5"
                    />

                    <div>
                        <p className="font-semibold">
                            Message sent successfully.
                        </p>

                        <p className="text-sm mt-1 text-emerald-700">
                            Thank you for reaching out. Our team will get
                            back to you as soon as possible.
                        </p>
                    </div>
                </div>
            )}

            {/* Error Message */}
            {error && (
                <div
                    role="alert"
                    aria-live="assertive"
                    className="flex items-start gap-3 rounded-lg bg-red-50 border border-red-200 p-4 text-red-800"
                >
                    <AlertCircle
                        size={21}
                        className="shrink-0 mt-0.5"
                    />

                    <div>
                        <p className="font-semibold">
                            Something went wrong.
                        </p>

                        <p className="text-sm mt-1 text-red-700">
                            {error}
                        </p>
                    </div>
                </div>
            )}

            {/* Form Fields */}
            <div className="w-full grid lg:grid-cols-2 gap-x-4 gap-y-8">

                {/* Full Name */}
                <fieldset className="w-full flex flex-col gap-1">
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
                        className="w-full p-2 border-b border-black outline-none bg-transparent focus:border-red-800 transition-colors"
                        placeholder="John Doe"
                    />
                </fieldset>

                {/* Email */}
                <fieldset className="w-full flex flex-col gap-1">
                    <label
                        htmlFor="email"
                        className="block text-sm mb-1"
                    >
                        Email
                    </label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        className="w-full p-2 border-b border-black outline-none bg-transparent focus:border-red-800 transition-colors"
                        placeholder="johndoe@email.com"
                    />
                </fieldset>

                {/* Phone */}
                <fieldset className="w-full flex flex-col gap-1">
                    <label
                        htmlFor="phone"
                        className="block text-sm mb-1"
                    >
                        Phone
                    </label>

                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        autoComplete="tel"
                        className="w-full p-2 border-b border-black outline-none bg-transparent focus:border-red-800 transition-colors"
                        placeholder="+265 981 457 286"
                    />
                </fieldset>
            </div>

            {/* Message */}
            <fieldset className="w-full flex flex-col gap-1">
                <label
                    htmlFor="message"
                    className="block text-sm mb-1"
                >
                    Message
                </label>

                <textarea
                    name="message"
                    id="message"
                    rows="5"
                    required
                    className="w-full p-2 border-b border-black outline-none bg-transparent resize-none focus:border-red-800 transition-colors"
                    placeholder="Tell us how we can help..."
                    value={formData.message}
                    onChange={handleChange}
                />
            </fieldset>

            {/* Submit */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-6 md:w-fit bg-red-800 text-white text-lg py-3 px-8 font-semibold rounded-lg hover:bg-red-900 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
                {isSubmitting ? (
                    <>
                        <span>Sending...</span>

                        <span
                            className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"
                            aria-hidden="true"
                        />
                    </>
                ) : (
                    <>
                        <span>Send</span>
                        <LucideSendHorizonal size={16} />
                    </>
                )}
            </button>
        </form>
    );
};

export default Form;