/**
 * Appointment Validation Schema
 *
 * This schema defines the validation rules for data received
 * from the appointment booking form.
 *
 * The schema is kept separate from the route and controller
 * because validation is its own responsibility within the
 * appointments module.
 *
 * Express Validator's checkSchema() will consume this schema
 * inside the appointment route.
 *
 * IMPORTANT:
 * This schema validates the structure and basic integrity of
 * incoming data.
 *
 * It does NOT determine:
 * - Whether the requested appointment time is available
 * - Whether the appointment can be confirmed
 * - Whether the user has paid
 * - Whether the appointment conflicts with another booking
 *
 * Those are business rules and should be handled by the
 * appointment service.
 */

export const appointmentValidationSchema = {

    /**
     * FULL NAME
     *
     * The user's full name is required so that the appointment
     * can be associated with the correct person.
     *
     * trim:
     * Removes unnecessary whitespace around the submitted value.
     *
     * isLength:
     * Prevents obviously invalid names and excessively large
     * input values.
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
     * Used to communicate appointment-related information to
     * the user.
     *
     * isEmail:
     * Performs basic email-format validation.
     *
     * normalizeEmail:
     * Normalizes the submitted email address where possible.
     */
    email: {
        trim: true,

        notEmpty: {
            errorMessage: "Email address is required.",
        },

        isEmail: {
            errorMessage:
                "Please provide a valid email address.",
        },

        normalizeEmail: true,
    },


    /**
     * PHONE
     *
     * Phone numbers are intentionally stored as strings rather
     * than numbers.
     *
     * A phone number can contain:
     * - A country code
     * - A leading +
     * - Leading zeros
     *
     * Example:
     * +265123456789
     *
     * The pattern allows an optional + followed by 7-15 digits.
     */
    phone: {
        trim: true,

        notEmpty: {
            errorMessage:
                "Phone number is required.",
        },

        matches: {
            options: /^\+?[1-9]\d{6,14}$/,
            errorMessage:
                "Please provide a valid phone number.",
        },
    },


    /**
     * COUNTRY
     *
     * The frontend currently provides a controlled list of
     * supported countries.
     *
     * isIn:
     * Ensures that the backend only accepts values that exist
     * in the application's country list.
     *
     * If the frontend country options change, this list should
     * also be updated here.
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
     * DATE & TIME
     *
     * The appointment form uses a datetime-local input.
     *
     * The browser normally sends a value such as:
     *
     * 2026-09-20T10:30
     *
     * This validation checks that the received value follows
     * that expected structure.
     *
     * IMPORTANT:
     * This does NOT check whether the appointment time is
     * actually available.
     *
     * Availability belongs in the service/business-logic layer.
     */
    dateTime: {
        trim: true,

        notEmpty: {
            errorMessage:
                "Appointment date and time is required.",
        },

        matches: {
            options:
                /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/,
            errorMessage:
                "Please provide a valid appointment date and time.",
        },
    },


    /**
     * NOTES
     *
     * Notes are additional information the user wants the
     * Eden of Life team to know about the appointment.
     *
     * This field is optional because an appointment can still
     * be valid without additional notes.
     *
     * max length:
     * Prevents unnecessarily large request payloads.
     */
    message: {
        optional: true,

        trim: true,

        isLength: {
            options: {
                max: 2000,
            },
            errorMessage:
                "Message cannot exceed 2000 characters.",
        },
    },
};