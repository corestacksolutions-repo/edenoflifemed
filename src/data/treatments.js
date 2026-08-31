import {
    Leaf,
    HeartPulse,
    Apple,
    Sparkles,
    Flower2,
    ShieldCheck,
    Search,
    ClipboardList,
    Heart,
    UserRound,
    MessageCircle,
    Lightbulb,
    CheckCircle2,
    Utensils,
    Moon,
    Sprout,
    Activity,
    Shield,
} from "lucide-react";

import treatmentImage from "../assets/treatment page/treats.jpg";
import overviewImage from "../assets/booking page/prep.jpg";

// Naturopathic consultations
import naturopathicConsultationHero from '../assets/booking page/prep.jpg'
import naturopathicConsultationCTA from '../assets/booking page/prep.jpg'

// Herbal medicine
import herbalMedicineHero from '../assets/booking page/prep.jpg'
import herbalMedicineCTA from '../assets/booking page/prep.jpg'

// Nutrition Therapy 
import nutritionTherapyHero from '../assets/booking page/prep.jpg'
import nutritionTherapyCTA from '../assets/booking page/prep.jpg'

// Detox Cleansing
import detoxCleansingHero from '../assets/booking page/prep.jpg'
import detoxCleansingCTA from '../assets/booking page/prep.jpg'

// Stress Mental Wellness
import stressMentalWellnessHero from '../assets/booking page/prep.jpg'
import stressMentalWellnessCTA from '../assets/booking page/prep.jpg'

// Immune Support
import immuneSupportHero from '../assets/booking page/prep.jpg'
import immuneSupportCTA from '../assets/booking page/prep.jpg'




export const treatments = [

    {
        id: 1,

        title: "Naturopathic Consultation",

        slug: "naturopathic-consultation",

        excerpt:
            "A comprehensive assessment of your health to identify root causes and create a personalized wellness plan.",

        icon: Leaf,


        /* =========================
           HERO
        ========================= */

        hero: {
            eyebrow: "Treatments / Naturopathic Consultation",

            description:
                "A comprehensive assessment of your health to understand your needs, explore possible contributing factors, and develop a personalized wellness plan.",
            
            heroImage: naturopathicConsultationHero
        },


        /* =========================
           OVERVIEW
        ========================= */

        overview: {
            eyebrow: "Overview",

            heading: "Understand. Heal. Thrive.",

            paragraphs: [
                "Our naturopathic consultation is the first step toward understanding your health from a whole-person perspective. We take time to listen to your concerns, explore your health history, and understand the factors that may be influencing your wellbeing.",

                "From there, we develop a personalized wellness plan with practical, natural recommendations suited to your individual needs and goals.",
            ],

            duration: "60 - 90 minutes",

            idealFor:
                "Anyone seeking a more personalized approach to their wellbeing.",

            suitableFor: [
                "Want to improve your overall wellbeing",
                "Want to better understand your health concerns",
                "Are interested in natural approaches to wellness",
                "Want guidance tailored to your individual needs",
                "Are ready to take a more active role in your health",
            ],

            image: overviewImage,
        },


        /* =========================
           BENEFITS
        ========================= */

        benefits: [
            {
                id: 1,
                title: "Personalized Guidance",
                description:
                    "Receive recommendations shaped around your individual health needs and goals.",
                icon: UserRound,
            },

            {
                id: 2,
                title: "Whole-Person Focus",
                description:
                    "Your lifestyle, habits, wellbeing, and broader health picture are considered together.",
                icon: Heart,
            },

            {
                id: 3,
                title: "Root Cause Exploration",
                description:
                    "Look beyond individual symptoms and explore factors that may be contributing to your concerns.",
                icon: Search,
            },

            {
                id: 4,
                title: "Practical Next Steps",
                description:
                    "Leave with clear recommendations and practical steps you can incorporate into your routine.",
                icon: Lightbulb,
            },
        ],


        /* =========================
           WHAT TO EXPECT
        ========================= */

        expectations: [
            {
                id: 1,
                title: "Listen",
                description:
                    "We begin by understanding your concerns, history, lifestyle, and goals.",
                icon: MessageCircle,
            },

            {
                id: 2,
                title: "Assess",
                description:
                    "We explore your overall health and identify areas that may need attention.",
                icon: ClipboardList,
            },

            {
                id: 3,
                title: "Plan",
                description:
                    "Together, we develop practical recommendations suited to your needs.",
                icon: Lightbulb,
            },

            {
                id: 4,
                title: "Move Forward",
                description:
                    "You leave with clear next steps to support your ongoing wellness journey.",
                icon: CheckCircle2,
            },
        ],


        /* =========================
           OUR APPROACH
        ========================= */

        approach: [
            {
                id: 1,
                title: "Root Cause Focused",
                description:
                    "We look beyond symptoms to understand the wider factors affecting your wellbeing.",
                icon: Search,
            },

            {
                id: 2,
                title: "Natural & Safe",
                description:
                    "Recommendations emphasize practical, natural approaches appropriate to your needs.",
                icon: Sprout,
            },

            {
                id: 3,
                title: "Personalized Care",
                description:
                    "Your recommendations are shaped around your health, lifestyle, and individual goals.",
                icon: UserRound,
            },

            {
                id: 4,
                title: "Empowering You",
                description:
                    "We help you understand your health and take an active role in your wellness journey.",
                icon: Lightbulb,
            },
        ],


        /* =========================
           CTA
        ========================= */

        cta: {
            heading: "Ready to take your first step?",

            description:
                "Book your naturopathic consultation and begin your journey toward a more balanced approach to wellness.",

            image: naturopathicConsultationCTA
        },
    },


    /* =====================================================
       HERBAL MEDICINE
    ===================================================== */

    {
        id: 2,

        title: "Herbal Medicine",

        slug: "herbal-medicine",

        excerpt:
            "Plant-based remedies designed to support wellbeing and complement your natural health goals.",

        icon: Flower2,

        hero: {
            eyebrow: "Treatments / Herbal Medicine",

            description:
                "A personalized approach to using plant-based preparations as part of a broader natural wellness plan.",

            heroImage: herbalMedicineHero
        },

        overview: {
            eyebrow: "Overview",

            heading: "Nature. Balance. Wellness.",

            paragraphs: [
                "Herbal medicine uses carefully selected plants and preparations as part of a personalized approach to wellbeing.",

                "We consider your individual needs, lifestyle, and wellness goals when recommending herbal approaches that can complement your broader health plan.",
            ],

            duration: "45 - 60 minutes",

            idealFor:
                "Those interested in incorporating herbal approaches into their wellness routine.",

            suitableFor: [
                "Are interested in plant-based wellness",
                "Want to explore traditional herbal approaches",
                "Prefer personalized natural recommendations",
                "Want to complement an existing wellness routine",
                "Are looking for practical guidance on herbal use",
            ],

            image: treatmentImage,
        },

        benefits: [
            {
                id: 1,
                title: "Plant-Based Support",
                description:
                    "Explore carefully selected herbal options suited to your individual wellness goals.",
                icon: Flower2,
            },

            {
                id: 2,
                title: "Personalized Recommendations",
                description:
                    "Herbal recommendations are considered within your wider health and lifestyle context.",
                icon: UserRound,
            },

            {
                id: 3,
                title: "Traditional Knowledge",
                description:
                    "Draw on established herbal traditions while taking a thoughtful, individualized approach.",
                icon: Sprout,
            },

            {
                id: 4,
                title: "Wellness Integration",
                description:
                    "Learn how herbal approaches can fit practically into your broader wellness routine.",
                icon: Heart,
            },
        ],

        expectations: [
            {
                id: 1,
                title: "Discuss",
                description:
                    "We explore your health goals, lifestyle, and current wellness routine.",
                icon: MessageCircle,
            },

            {
                id: 2,
                title: "Review",
                description:
                    "We consider your current needs and discuss suitable herbal options.",
                icon: ClipboardList,
            },

            {
                id: 3,
                title: "Recommend",
                description:
                    "You receive personalized guidance on appropriate herbal approaches.",
                icon: Leaf,
            },

            {
                id: 4,
                title: "Integrate",
                description:
                    "We discuss practical ways to incorporate recommendations into your routine.",
                icon: CheckCircle2,
            },
        ],

        approach: [
            {
                id: 1,
                title: "Individualized",
                description:
                    "Herbal recommendations are considered according to your unique circumstances.",
                icon: UserRound,
            },

            {
                id: 2,
                title: "Natural",
                description:
                    "We work with plant-based approaches as part of a broader wellness strategy.",
                icon: Leaf,
            },

            {
                id: 3,
                title: "Thoughtful",
                description:
                    "We consider your existing routines and needs before making recommendations.",
                icon: Search,
            },

            {
                id: 4,
                title: "Empowering",
                description:
                    "You gain practical knowledge to make informed choices about your wellness.",
                icon: Lightbulb,
            },
        ],

        cta: {
            heading: "Explore the power of plants.",

            description:
                "Book a consultation to explore whether herbal approaches may fit into your wellness journey.",

            image: herbalMedicineCTA
        },
    },


    /* =====================================================
       NUTRITION THERAPY
    ===================================================== */

    {
        id: 3,

        title: "Nutrition Therapy",

        slug: "nutrition-therapy",

        excerpt:
            "Personalized nutrition guidance to support healthier eating, energy, and overall wellbeing.",

        icon: Apple,

        hero: {
            eyebrow: "Treatments / Nutrition Therapy",

            description:
                "Personalized nutrition guidance designed to help you build practical and sustainable habits around food and wellbeing.",

            heroImage: nutritionTherapyHero
        },

        overview: {
            eyebrow: "Overview",

            heading: "Nourish. Restore. Thrive.",

            paragraphs: [
                "Nutrition plays an important role in everyday wellbeing. Our nutrition therapy approach looks at your current eating habits, lifestyle, goals, and individual needs.",

                "Rather than focusing on restrictive plans, we help you develop practical and sustainable nutrition habits that fit your life.",
            ],

            duration: "45 - 60 minutes",

            idealFor:
                "Anyone looking to develop healthier and more sustainable nutrition habits.",

            suitableFor: [
                "Want to improve your everyday eating habits",
                "Want practical nutrition guidance",
                "Are looking for sustainable lifestyle changes",
                "Want to better understand your nutritional needs",
                "Want to support your overall wellbeing through food",
            ],

            image: overviewImage,
        },

        benefits: [
            {
                id: 1,
                title: "Personalized Nutrition",
                description:
                    "Recommendations are shaped around your lifestyle, preferences, and individual goals.",
                icon: UserRound,
            },

            {
                id: 2,
                title: "Better Food Awareness",
                description:
                    "Develop a clearer understanding of how your everyday food choices fit into your wellbeing.",
                icon: Apple,
            },

            {
                id: 3,
                title: "Sustainable Habits",
                description:
                    "Focus on practical changes that can become part of your everyday routine.",
                icon: CheckCircle2,
            },

            {
                id: 4,
                title: "Balanced Approach",
                description:
                    "Build a healthier relationship with food without unnecessary complexity or restriction.",
                icon: Heart,
            },
        ],

        expectations: [
            {
                id: 1,
                title: "Discuss",
                description:
                    "We talk through your current eating habits, lifestyle, and goals.",
                icon: MessageCircle,
            },

            {
                id: 2,
                title: "Understand",
                description:
                    "We identify areas where your current nutrition routine could be improved.",
                icon: Search,
            },

            {
                id: 3,
                title: "Plan",
                description:
                    "We create practical nutrition recommendations tailored to your needs.",
                icon: ClipboardList,
            },

            {
                id: 4,
                title: "Build",
                description:
                    "You leave with realistic steps for developing healthier habits.",
                icon: CheckCircle2,
            },
        ],

        approach: [
            {
                id: 1,
                title: "Personalized",
                description:
                    "Your nutrition guidance is shaped around your individual circumstances.",
                icon: UserRound,
            },

            {
                id: 2,
                title: "Balanced",
                description:
                    "We focus on nourishing habits rather than unnecessary restriction.",
                icon: Apple,
            },

            {
                id: 3,
                title: "Practical",
                description:
                    "Recommendations are designed to work within your everyday lifestyle.",
                icon: Utensils,
            },

            {
                id: 4,
                title: "Sustainable",
                description:
                    "We focus on changes you can realistically maintain over time.",
                icon: CheckCircle2,
            },
        ],

        cta: {
            heading: "Ready to nourish your wellbeing?",

            description:
                "Book a nutrition consultation and take the next step toward healthier, sustainable habits.",

            image: nutritionTherapyCTA
        },
    },


    /* =====================================================
       DETOX & CLEANSING
    ===================================================== */

    {
        id: 4,

        title: "Detox & Cleansing",

        slug: "detox-cleansing",

        excerpt:
            "Natural wellness approaches that support healthy lifestyle habits and the body's normal processes.",

        icon: Sparkles,

        hero: {
            eyebrow: "Treatments / Detox & Cleansing",

            description:
                "A supportive wellness approach focused on healthy habits, nutrition, hydration, and lifestyle practices.",

            heroImage: detoxCleansingHero
        },

        overview: {
            eyebrow: "Overview",

            heading: "Reset. Restore. Rebalance.",

            paragraphs: [
                "Our detox and cleansing approach focuses on supporting healthy everyday habits rather than extreme or restrictive cleansing practices.",

                "We consider nutrition, hydration, rest, movement, and lifestyle factors when creating a practical wellness plan suited to you.",
            ],

            duration: "45 - 60 minutes",

            idealFor:
                "Those looking to review and improve habits that support everyday wellbeing.",

            suitableFor: [
                "Want to improve everyday wellness habits",
                "Want to review your nutrition and hydration",
                "Want to establish healthier routines",
                "Feel ready for a lifestyle reset",
                "Want guidance around sustainable wellness practices",
            ],

            image: treatmentImage,
        },

        benefits: [
            {
                id: 1,
                title: "Healthy Habits",
                description:
                    "Identify practical lifestyle habits that can support your everyday wellbeing.",
                icon: CheckCircle2,
            },

            {
                id: 2,
                title: "Nutrition Support",
                description:
                    "Explore nourishing food choices that fit into a balanced wellness routine.",
                icon: Apple,
            },

            {
                id: 3,
                title: "Lifestyle Balance",
                description:
                    "Consider hydration, rest, movement, and other factors that contribute to wellbeing.",
                icon: Activity,
            },

            {
                id: 4,
                title: "Personalized Guidance",
                description:
                    "Receive recommendations based on your individual goals and lifestyle.",
                icon: UserRound,
            },
        ],

        expectations: [
            {
                id: 1,
                title: "Review",
                description:
                    "We look at your current lifestyle, nutrition, hydration, and wellness habits.",
                icon: ClipboardList,
            },

            {
                id: 2,
                title: "Identify",
                description:
                    "Together, we identify habits that may be worth improving.",
                icon: Search,
            },

            {
                id: 3,
                title: "Plan",
                description:
                    "We develop realistic recommendations for supporting healthier routines.",
                icon: Lightbulb,
            },

            {
                id: 4,
                title: "Reset",
                description:
                    "You leave with practical steps for creating a more balanced routine.",
                icon: Sparkles,
            },
        ],

        approach: [
            {
                id: 1,
                title: "Gentle",
                description:
                    "We avoid extreme approaches and focus on sustainable lifestyle practices.",
                icon: Leaf,
            },

            {
                id: 2,
                title: "Balanced",
                description:
                    "Nutrition, hydration, rest, and lifestyle are considered together.",
                icon: Heart,
            },

            {
                id: 3,
                title: "Personalized",
                description:
                    "Recommendations are adapted to your individual circumstances.",
                icon: UserRound,
            },

            {
                id: 4,
                title: "Sustainable",
                description:
                    "The focus is on habits you can realistically maintain.",
                icon: CheckCircle2,
            },
        ],

        cta: {
            heading: "Ready for a healthier reset?",

            description:
                "Book a consultation and explore practical ways to refresh your everyday wellness routine.",

            image: detoxCleansingCTA
        },
    },


    /* =====================================================
       STRESS & MENTAL WELLNESS
    ===================================================== */

    {
        id: 5,

        title: "Stress & Mental Wellness",

        slug: "stress-mental-wellness",

        excerpt:
            "Natural wellness strategies to support stress management, rest, emotional balance, and everyday wellbeing.",

        icon: HeartPulse,

        hero: {
            eyebrow: "Treatments / Stress & Mental Wellness",

            description:
                "A supportive approach to understanding lifestyle factors that may influence stress, rest, and emotional wellbeing.",

            heroImage: stressMentalWellnessHero
        },

        overview: {
            eyebrow: "Overview",

            heading: "Slow Down. Reconnect. Restore.",

            paragraphs: [
                "Modern life can place significant demands on our minds and bodies. Our stress and mental wellness approach creates space to understand your current lifestyle and identify areas that may be affecting your wellbeing.",

                "Together, we explore practical strategies around rest, routines, nutrition, movement, and self-care that can support a healthier sense of balance.",
            ],

            duration: "45 - 60 minutes",

            idealFor:
                "Anyone looking for practical support with stress and everyday emotional wellbeing.",

            suitableFor: [
                "Feel overwhelmed by everyday demands",
                "Want to improve your rest and daily routines",
                "Want healthier ways to manage everyday stress",
                "Want to create more balance in your lifestyle",
                "Are looking for supportive wellness guidance",
            ],

            image: treatmentImage,
        },

        benefits: [
            {
                id: 1,
                title: "Stress Awareness",
                description:
                    "Develop a clearer understanding of lifestyle factors that may influence your stress levels.",
                icon: Search,
            },

            {
                id: 2,
                title: "Better Routines",
                description:
                    "Explore practical habits that can create more balance in your everyday life.",
                icon: CheckCircle2,
            },

            {
                id: 3,
                title: "Rest & Recovery",
                description:
                    "Identify lifestyle practices that can support healthier rest and recovery.",
                icon: Moon,
            },

            {
                id: 4,
                title: "Personal Support",
                description:
                    "Receive guidance shaped around your individual circumstances and wellness goals.",
                icon: Heart,
            },
        ],

        expectations: [
            {
                id: 1,
                title: "Talk",
                description:
                    "We create space to discuss your current lifestyle, challenges, and goals.",
                icon: MessageCircle,
            },

            {
                id: 2,
                title: "Explore",
                description:
                    "We consider routines and lifestyle factors that may be affecting your wellbeing.",
                icon: Search,
            },

            {
                id: 3,
                title: "Plan",
                description:
                    "Together, we identify practical strategies suited to your everyday life.",
                icon: Lightbulb,
            },

            {
                id: 4,
                title: "Practice",
                description:
                    "You leave with realistic steps for building healthier routines.",
                icon: CheckCircle2,
            },
        ],

        approach: [
            {
                id: 1,
                title: "Compassionate",
                description:
                    "We create a supportive environment where your concerns can be heard without judgment.",
                icon: Heart,
            },

            {
                id: 2,
                title: "Holistic",
                description:
                    "Lifestyle, rest, nutrition, movement, and wellbeing are considered together.",
                icon: Leaf,
            },

            {
                id: 3,
                title: "Personalized",
                description:
                    "Recommendations are shaped around your circumstances and individual goals.",
                icon: UserRound,
            },

            {
                id: 4,
                title: "Empowering",
                description:
                    "We help you develop practical strategies you can apply in everyday life.",
                icon: Lightbulb,
            },
        ],

        cta: {
            heading: "Make space for your wellbeing.",

            description:
                "Book a consultation and take a supportive step toward greater balance in your everyday life.",

            image: stressMentalWellnessCTA
        },
    },


    /* =====================================================
       IMMUNE SUPPORT
    ===================================================== */

    {
        id: 6,

        title: "Immune Support",

        slug: "immune-support",

        excerpt:
            "Personalized wellness guidance focused on lifestyle habits that support your body's normal defenses.",

        icon: ShieldCheck,

        hero: {
            eyebrow: "Treatments / Immune Support",

            description:
                "A personalized wellness approach focused on nutrition, lifestyle, rest, and other habits that support everyday immune health.",

            heroImage: immuneSupportHero
        },

        overview: {
            eyebrow: "Overview",

            heading: "Support. Strengthen. Thrive.",

            paragraphs: [
                "Supporting immune wellbeing starts with the everyday habits that help your body function at its best. We look at nutrition, rest, stress, movement, and lifestyle as part of the bigger picture.",

                "Your recommendations are tailored around your individual needs and focused on practical habits that can become part of your everyday routine.",
            ],

            duration: "45 - 60 minutes",

            idealFor:
                "Those looking to strengthen everyday habits that support general immune wellbeing.",

            suitableFor: [
                "Want to support your general wellbeing",
                "Want to review lifestyle habits related to immune health",
                "Want guidance around nutrition and rest",
                "Are looking for personalized wellness recommendations",
                "Want to build healthier everyday routines",
            ],

            image: overviewImage,
        },

        benefits: [
            {
                id: 1,
                title: "Lifestyle Support",
                description:
                    "Explore everyday habits that contribute to overall health and immune wellbeing.",
                icon: Activity,
            },

            {
                id: 2,
                title: "Nutrition Guidance",
                description:
                    "Discuss nourishing dietary habits that can form part of a balanced wellness routine.",
                icon: Apple,
            },

            {
                id: 3,
                title: "Rest & Recovery",
                description:
                    "Consider the role of healthy rest and recovery in maintaining everyday wellbeing.",
                icon: Moon,
            },

            {
                id: 4,
                title: "Personalized Care",
                description:
                    "Receive recommendations that take your individual lifestyle and goals into account.",
                icon: UserRound,
            },
        ],

        expectations: [
            {
                id: 1,
                title: "Review",
                description:
                    "We discuss your current lifestyle, nutrition, rest, and wellness habits.",
                icon: ClipboardList,
            },

            {
                id: 2,
                title: "Identify",
                description:
                    "We identify areas where healthy lifestyle changes may be beneficial.",
                icon: Search,
            },

            {
                id: 3,
                title: "Recommend",
                description:
                    "You receive practical recommendations suited to your individual needs.",
                icon: Lightbulb,
            },

            {
                id: 4,
                title: "Support",
                description:
                    "You leave with clear steps for strengthening your everyday wellness routine.",
                icon: ShieldCheck,
            },
        ],

        approach: [
            {
                id: 1,
                title: "Whole-Person",
                description:
                    "Immune wellbeing is considered within the context of your overall health and lifestyle.",
                icon: Heart,
            },

            {
                id: 2,
                title: "Nutrition-Focused",
                description:
                    "We consider nourishing dietary habits as part of a balanced wellness strategy.",
                icon: Apple,
            },

            {
                id: 3,
                title: "Lifestyle-Based",
                description:
                    "Rest, movement, stress, and everyday habits are considered alongside nutrition.",
                icon: Activity,
            },

            {
                id: 4,
                title: "Personalized",
                description:
                    "Your wellness recommendations are shaped around your individual needs and goals.",
                icon: UserRound,
            },
        ],

        cta: {
            heading: "Give your wellbeing more support.",

            description:
                "Book a consultation and explore practical ways to support healthier everyday habits.",

            image: immuneSupportCTA
        },
    },

];