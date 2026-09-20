/**
 * Consultation Validation Schema
 *
 * This schema defines the validation rules for data submitted
 * through the consultation booking form.
 *
 * The schema is kept separate from the route and controller so
 * that validation rules remain:
 *
 * - Easy to find
 * - Easy to maintain
 * - Reusable
 * - Independent from business logic
 *
 * Express Validator's checkSchema() will consume this schema
 * inside the consultation route.
 */

export const consultationValidationSchema = {

    /**
     * FULL NAME
     *
     * Required field.
     *
     * trim()
     * Removes unnecessary whitespace before/after the name.
     *
     * isLength()
     * Prevents extremely short or excessively long values.
     */
    fullName: {
        trim: true,

        notEmpty: {
            errorMessage: "Full name is required.",
        },

        isLength: {
            options: {
                min: 2,
                max: 100,
            },
            errorMessage:
                "Full name must be between 2 and 100 characters.",
        },
    },


    /**
     * EMAIL
     *
     * Required field.
     *
     * isEmail()
     * Ensures the submitted value follows a valid email format.
     *
     * normalizeEmail()
     * Normalizes the email address where possible.
     */
    email: {
        trim: true,

        notEmpty: {
            errorMessage: "Email address is required.",
        },

        isEmail: {
            errorMessage: "Please provide a valid email address.",
        },

        normalizeEmail: true,
    },


    /**
     * PHONE
     *
     * Stored as a string rather than a number because phone
     * numbers may contain:
     *
     * - +
     * - Country codes
     * - Leading zeros
     *
     * Example:
     * +265123456789
     */
    phone: {
        trim: true,

        notEmpty: {
            errorMessage: "Phone number is required.",
        },

        matches: {
            options: /^\+?[1-9]\d{6,14}$/,
            errorMessage:
                "Please provide a valid phone number.",
        },
    },


    /**
     * DATE & TIME
     *
     * The frontend's datetime-local input produces a value
     * similar to:
     *
     * 2026-09-20T10:30
     *
     * We validate the expected structure here.
     *
     * NOTE:
     * This only validates the FORMAT.
     *
     * Whether the selected time is actually available should
     * be handled later by the service/business-logic layer.
     */
    dateTime: {
        trim: true,

        notEmpty: {
            errorMessage:
                "Consultation date and time is required.",
        },

        matches: {
            options:
                /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/,
            errorMessage:
                "Please provide a valid consultation date and time.",
        },
    },


    /**
     * COUNTRY
     *
     * This is a controlled field because the frontend provides
     * a predefined list of countries.
     *
     * isIn() ensures that the backend only accepts values that
     * are actually supported by the application.
     */
    country: {
        trim: true,

        notEmpty: {
            errorMessage: "Country is required.",
        },

        isIn: {
            options: [[
                "Malawi",
                "Zambia",
                "Tanzania",
                "Mozambique",
                "Zimbabwe",
                "South Africa",
                "Other",
            ]],
            errorMessage:
                "Please select a valid country.",
        },
    },


    /**
     * PURPOSE OF CONSULTATION
     *
     * Like country, this is a controlled field.
     *
     * Keeping the allowed values here means that a client cannot
     * simply submit arbitrary purpose values to the API.
     */
    purpose: {
        trim: true,

        notEmpty: {
            errorMessage:
                "Consultation purpose is required.",
        },

        isIn: {
            options: [[
                "General Wellness",
                "Chronic Health Concern",
                "Nutrition & Lifestyle",
                "Natural & Herbal Support",
                "Other Health Concern",
            ]],
            errorMessage:
                "Please select a valid consultation purpose.",
        },
    },


    /**
     * MESSAGE
     *
     * Allows the user to provide additional information about
     * their concern.
     *
     * A reasonable maximum length prevents unnecessarily large
     * request payloads.
     */
    message: {
        trim: true,

        notEmpty: {
            errorMessage:
                "Please tell us a little about your concern.",
        },

        isLength: {
            options: {
                min: 5,
                max: 2000,
            },
            errorMessage:
                "Message must be between 5 and 2000 characters.",
        },
    },
};