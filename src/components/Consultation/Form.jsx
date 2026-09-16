import React, { useState } from "react";

const Form = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        dateTime: "",
        country: "",
        purpose: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        try {
            // Your API/payment logic will go here
            console.log("Consultation booking:", formData);

            // Example:
            // await fetch("/api/consultations", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify(formData),
            // });

            // After successful submission:
            // navigate("/payment");

        } catch (error) {
            console.error("Booking submission failed:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="basis-[68%] w-full p-2 flex flex-col"
        >

            {/* Full Name + Email */}
            <div className="flex items-center justify-between mb-4 gap-5">

                <div className="basis-[48%] w-full">
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
                        className="w-full p-2 border-b border-black outline-none"
                        placeholder="John Doe"
                    />
                </div>

                <div className="basis-[48%] w-full">
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
                        className="w-full p-2 border-b border-black outline-none"
                        placeholder="johndoe@email.com"
                    />
                </div>

            </div>


            {/* Phone + Date/Time */}
            <div className="flex items-center justify-between mb-4 gap-5">

                <div className="basis-[48%] w-full">
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
                        className="w-full p-2 border-b border-black outline-none"
                        placeholder="+265123456789"
                    />
                </div>

                <div className="basis-[48%] w-full">
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
                        className="w-full p-2 border-b border-black outline-none"
                    />
                </div>

            </div>


            {/* Country + Purpose */}
            <div className="flex items-center justify-between mb-4 gap-5">

                <div className="basis-[48%] w-full">
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


                <div className="basis-[48%] w-full">
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
                        className="w-full p-2 border-b border-black outline-none bg-transparent"
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

            </div>


            {/* Message */}
            <div className="w-full mt-2">

                {/* <label
                    htmlFor="message"
                    className="block text-sm mb-1"
                >
                    Tell us more about your concern
                </label> */}

                <textarea
                    id="message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-2 border-b border-black outline-none resize-none"
                    placeholder="Tell us more about what you're experiencing..."
                />

            </div>


            {/* Submit */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="self-start mt-6 px-6 py-3 bg-red-700/90 text-white rounded-lg hover:bg-red-900 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting
                    ? "Processing..."
                    : "Proceed to Payment"
                }
            </button>

        </form>
    );
};

export default Form;