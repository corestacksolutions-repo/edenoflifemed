import {
    Leaf,
    HeartPulse,
    Apple,
    Sparkles,
    Flower2,
    FileText,
    Edit3,
    ShieldCheck,
    ShieldAlert,
    Search,
    ClipboardList,
    Heart,
    Network,
    UserRound,
    UserCheck,
    TestTube,
    Beaker,
    Sliders,
    Package,
    Lock,
    MessageCircle,
    Lightbulb,
    CheckCircle2,
    Utensils,
    Moon,
    Zap,
    ChefHat,
    Award,
    Repeat1,
    UtensilsCrossed,
    RotateCcw,
    FastForward,
    Layers,
    Sprout,
    ShoppingBag,
    Activity,
    Stethoscope,
 SearchCheck,
  LineChart,
  CalendarCheck,
  Flame,
  Move,
  Shield,
  GraduationCap,
  Footprints,
  Repeat,
  BookOpen,
  Target,
  Compass,
  Brain,

  
  FileSpreadsheet,
  FileSearch,
  Presentation,
  Eye,
  Pill,
  History,
  ListOrdered,
  RefreshCw,
  Microscope,
  Cpu,
  Fingerprint,
  BatteryCharging
} from "lucide-react";

import { Contact, FileCheck, Users } from "lucide-react";
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



 const services = [

   {
    id: 1,

    title: "Naturopathy & Natural Medicine",

    slug: "naturopathy-natural-medicine",

    excerpt:
        "Comprehensive, holistic healthcare utilizing natural therapies, clinical nutrition, and botanical remedies to support your body's self-healing mechanisms.",

    icon: Leaf,
    image: "https://i.pinimg.com/1200x/87/0f/3c/870f3caba73d5e3db0c07d756c1c821c.jpg",
    imageAlt: "naturopathy-and-natural-medicine",

    /* =========================
       HERO
    ========================= */

    hero: {
        eyebrow: "Holistic Healing & Natural Care",

        description:
            "A whole-person clinical approach combining traditional healing wisdom with modern evidence-based natural therapies to restore internal balance and optimal vitality.",
        
        image: "https://i.pinimg.com/1200x/db/21/30/db213083d793a1f51d10ce6be6f2a6ad.jpg",
        imageAlt: immuneSupportHero
    },

    /* =========================
       OVERVIEW
    ========================= */

    overview: {
        eyebrow: "Overview",

        heading: "Harmonize. Restore. Flourish.",

        paragraphs: [
            "Naturopathy and Natural Medicine focuses on treating the whole person rather than isolating single symptoms. By addressing the physiological, environmental, and lifestyle factors that influence health, naturopathic care stimulates the body's innate capacity to heal.",

            "Our practitioners employ a range of gentle, non-invasive modalities—including clinical nutrition, functional testing, herbal formulations, and lifestyle interventions—to build a safe, personalized care pathway tailored to your unique biology.",
        ],

        duration: "60 - 90 minutes",

        idealFor:
            "Individuals seeking a comprehensive, natural approach to primary wellness and chronic health management under clinical supervision.",

        suitableFor: [
            "Want to identify and address underlying health imbalances naturally",
            "Prefer non-invasive, gentle therapeutic modalities",
            "Are seeking integrated care that supports overall vitality and immunity",
            "Want personalized guidance on natural therapies aligned with modern science",
            "Are looking for long-term health restoration rather than temporary symptom suppression",
        ],

        image: overviewImage,
    },

    /* =========================
       BENEFITS
    ========================= */

    benefits: [
        {
            id: 1,
            title: "Whole-Person Focus",
            description:
                "Evaluates physical, mental, and environmental influences to support complete systemic health.",
            icon: Heart,
        },

        {
            id: 2,
            title: "Natural Therapies",
            description:
                "Utilizes evidence-aligned botanical medicine, nutrition, and non-invasive natural treatments.",
            icon: Sparkles,
        },

        {
            id: 3,
            title: "Innate Healing Support",
            description:
                "Strengthens the body's self-regulatory and self-repair mechanisms for lasting resilience.",
            icon: ShieldCheck,
        },

        {
            id: 4,
            title: "Custom Care Plans",
            description:
                "Every recommendation is tailored specifically to your unique health profile and lifestyle.",
            icon: UserRound,
        },
    ],

    /* =========================
       WHAT TO EXPECT
    ========================= */

    expectations: [
        {
            id: 1,
            title: "Evaluate",
            description:
                "We take a deep dive into your medical history, diet, stress factors, and current health concerns.",
            icon: ClipboardList,
        },

        {
            id: 2,
            title: "Investigate",
            description:
                "We assess functional body systems to uncover underlying imbalances and physiological stress points.",
            icon: Search,
        },

        {
            id: 3,
            title: "Formulate",
            description:
                "You receive an integrative natural health plan featuring clinical nutrition, botanicals, and lifestyle advice.",
            icon: Lightbulb,
        },

        {
            id: 4,
            title: "Guide",
            description:
                "We provide ongoing monitoring, education, and adjustments as your vitality restores over time.",
            icon: Compass,
        },
    ],

    /* =========================
       OUR APPROACH
    ========================= */

    approach: [
        {
            id: 1,
            title: "Root-Cause Focused",
            description:
                "We target the fundamental drivers of dysfunction rather than applying short-term fixes.",
            icon: Stethoscope,
        },

        {
            id: 2,
            title: "First, Do No Harm",
            description:
                "We prioritize gentle, effective therapies with low risks of side effects.",
            icon: Shield,
        },

        {
            id: 3,
            title: "Doctor as Teacher",
            description:
                "Empowering you with the knowledge needed to take active control of your health journey.",
            icon: BookOpen,
        },

        {
            id: 4,
            title: "Integrative",
            description:
                "Natural remedies are safely aligned with your existing medical treatments and primary doctors.",
            icon: Network,
        },
    ],

    /* =========================
       CTA
    ========================= */

    cta: {
        heading: "Begin your natural health journey.",

        description:
            "Schedule a comprehensive naturopathic consultation and discover a holistic path to sustainable wellness.",

        image:" naturopathyCTA"
    },
},

{
    id: 2,

    title: "Comprehensive Health Assessments",

    slug: "comprehensive-health-assessments",

    excerpt:
        "In-depth clinical evaluations, functional diagnostic reviews, and baseline health profiling to establish a clear picture of your current wellness.",

    icon: Activity,
    image: "https://i.pinimg.com/1200x/64/73/45/647345bfa892f3e8f49e1a2b3c4d5e6f.jpg",
    imageAlt: "comprehensive-health-assessments",

    /* =========================
       HERO
    ========================= */

    hero: {
        eyebrow: "Diagnostic Clarity & Health Profiling",

        description:
            "A thorough, system-by-system health evaluation designed to uncover hidden vulnerabilities, assess organ function, and establish a scientific baseline for longevity.",
        
        image: "https://i.pinimg.com/1200x/75/84/56/758456cfa892f3e8f49e1a2b3c4d5e6f.jpg",
        imageAlt: immuneSupportHero
    },

    /* =========================
       OVERVIEW
    ========================= */

    overview: {
        eyebrow: "Overview",

        heading: "Analyze. Understand. Optimize.",

        paragraphs: [
            "A Comprehensive Health Assessment provides a complete blueprint of your physical, metabolic, and functional wellbeing. Rather than looking at isolated complaints, this deep-dive evaluation analyzes how your body systems interact as a whole.",

            "Through detailed clinical reviews, risk screening, lifestyle audits, and advanced functional marker analysis, we gather essential data to prevent future disease and build a personalized roadmap for long-term health.",
        ],

        duration: "75 - 90 minutes",

        idealFor:
            "Individuals looking for an all-inclusive health check-up, baseline physiological profiling, or early disease risk detection.",

        suitableFor: [
            "Want a clear, data-driven picture of your overall physical and functional health",
            "Are seeking to establish a health baseline before starting a new clinical or lifestyle protocol",
            "Have unexplained symptoms that require systematic diagnostic review",
            "Want to identify metabolic, cardiovascular, or hormonal risk factors early",
            "Value preventative healthcare grounded in thorough clinical analysis",
        ],

        image: overviewImage,
    },

    /* =========================
       BENEFITS
    ========================= */

    benefits: [
        {
            id: 1,
            title: "System-Wide Review",
            description:
                "Evaluates metabolic, cardiovascular, digestive, and hormonal systems in one cohesive assessment.",
            icon: LineChart,
        },

        {
            id: 2,
            title: "Early Detection",
            description:
                "Pinpoints subtle risk factors and biochemical imbalances before symptoms progress.",
            icon: SearchCheck,
        },

        {
            id: 3,
            title: "Data-Driven Insights",
            description:
                "Combines clinical observation with functional marker analysis for objective health tracking.",
            icon: FileSpreadsheet,
        },

        {
            id: 4,
            title: "Clear Roadmap",
            description:
                "Provides an actionable, prioritized report outlining exact next steps for optimization.",
            icon: Compass,
        },
    ],

    /* =========================
       WHAT TO EXPECT
    ========================= */

    expectations: [
        {
            id: 1,
            title: "Intake",
            description:
                "Comprehensive review of family history, personal medical records, daily habits, and active concerns.",
            icon: ClipboardList,
        },

        {
            id: 2,
            title: "Assessment",
            description:
                "Physical, functional, and metabolic screening tests conducted in a supportive clinical environment.",
            icon: Stethoscope,
        },

        {
            id: 3,
            title: "Analysis",
            description:
                "In-depth synthesis of all clinical findings into an easy-to-understand health profile.",
            icon: FileSearch,
        },

        {
            id: 4,
            title: "Review",
            description:
                "A dedicated consultation to discuss results and outline your personalized preventive strategy.",
            icon: Presentation,
        },
    ],

    /* =========================
       OUR APPROACH
    ========================= */

    approach: [
        {
            id: 1,
            title: "Thorough",
            description:
                "No detail is overlooked—from sleep architecture and nutrition to physiological biomarkers.",
            icon: Eye,
        },

        {
            id: 2,
            title: "Preventative",
            description:
                "Focused on proactive risk mitigation rather than reactive treatment.",
            icon: ShieldCheck,
        },

        {
            id: 3,
            title: "Patient-Centered",
            description:
                "Findings are presented clearly, empowering you to make informed decisions about your body.",
            icon: UserCheck,
        },

        {
            id: 4,
            title: "Actionable",
            description:
                "Translates complex diagnostic data into realistic, daily health practices.",
            icon: CheckCircle2,
        },
    ],

    /* =========================
       CTA
    ========================= */

    cta: {
        heading: "Get complete clarity on your health.",

        description:
            "Book a comprehensive assessment today to establish your baseline and protect your future vitality.",

        image: "assessmentsCTA"
    },
},

    /* =====================================================
       Root-Cause Health Consultations
    ===================================================== */

    {
    id: 3,

    title: "Root-Cause Health Consultations",

    slug: "root-cause-health-consultations",

    excerpt:
        "Investigative health consultations focused on unearthing the underlying biological drivers of persistent, unexplained, or complex chronic symptoms.",

    icon: Target,
    image: "https://i.pinimg.com/1200x/12/34/56/123456789abcdef123456789abcdef.jpg",
    imageAlt: "root-cause-health-consultations",

    /* =========================
       HERO
    ========================= */

    hero: {
        eyebrow: "Investigative Functional Medicine",

        description:
            "Go beyond superficial symptom management. We dig deep into environmental, genetic, and metabolic factors to fix the core issues driving illness.",
        
        image: "https://i.pinimg.com/1200x/98/76/54/987654321fedcba987654321fedcba.jpg",
        imageAlt: "root-cause-health-consultations"
    },

    /* =========================
       OVERVIEW
    ========================= */

    overview: {
        eyebrow: "Overview",

        heading: "Investigate. Discover. Resolve.",

        paragraphs: [
            "Chronic health issues like persistent fatigue, joint pain, skin breakouts, and brain fog are rarely isolated problems—they are signals of underlying biological dysfunction. Root-Cause Health Consultations focus on asking *why* these symptoms exist in the first place.",

            "By applying functional medicine principles, we investigate gut microbiome balance, environmental toxin exposure, systemic inflammation, chronic stress, and nutrient deficiencies. Resolving the root cause allows true healing to take place naturally.",
        ],

        duration: "60 - 90 minutes",

        idealFor:
            "Patients suffering from complex, chronic, or unresolved health issues who want to treat the underlying source of their symptoms.",

        suitableFor: [
            "Struggle with persistent, unexplained symptoms despite normal conventional test results",
            "Want to move past managing symptoms with temporary medications",
            "Are dealing with complex conditions involving multiple body systems",
            "Want a deep-dive investigation into immune, gut, endocrine, and metabolic health",
            "Are ready to commit to a targeted, therapeutic healing process",
        ],

        image: overviewImage,
    },

    /* =========================
       BENEFITS
    ========================= */

    benefits: [
        {
            id: 1,
            title: "Targeted Resolution",
            description:
                "Focuses therapeutic effort on the true source of dysfunction for lasting relief.",
            icon: Target,
        },

        {
            id: 2,
            title: "Advanced Investigation",
            description:
                "Explores immune triggers, gut permeability, hormone balance, and cellular health.",
            icon: Search,
        },

        {
            id: 3,
            title: "Reduced Pill Burden",
            description:
                "Aims to resolve conditions so you don't rely on lifelong symptom-masking remedies.",
            icon: Pill,
        },

        {
            id: 4,
            title: "Empowered Understanding",
            description:
                "Gain deep insights into how your specific genetics, environment, and lifestyle interact.",
            icon: Lightbulb,
        },
    ],

    /* =========================
       WHAT TO EXPECT
    ========================= */

    expectations: [
        {
            id: 1,
            title: "Timeline Review",
            description:
                "We map your complete health history from birth to present to identify key triggering events.",
            icon: History,
        },

        {
            id: 2,
            title: "Functional Mapping",
            description:
                "We organize symptoms into biological systems to uncover interconnected patterns of dysfunction.",
            icon: Network,
        },

        {
            id: 3,
            title: "Targeted Protocol",
            description:
                "You receive a multi-stage care plan designed to remove triggers and repair damaged systems.",
            icon: ListOrdered,
        },

        {
            id: 4,
            title: "Ongoing Refinement",
            description:
                "We measure functional shifts and adapt the protocol as core biological systems recover.",
            icon: RefreshCw,
        },
    ],

    /* =========================
       OUR APPROACH
    ========================= */

    approach: [
        {
            id: 1,
            title: "Investigative",
            description:
                "Treating symptoms as clues to unravel the complex web of chronic illness.",
            icon: Microscope,
        },

        {
            id: 2,
            title: "Systems-Based",
            description:
                "Recognizing that gut, brain, immune, and endocrine systems work as one continuous network.",
            icon: Cpu,
        },

        {
            id: 3,
            title: "Personalized",
            description:
                "No cookie-cutter protocols—every intervention fits your precise biochemical individuality.",
            icon: Fingerprint,
        },

        {
            id: 4,
            title: "Restorative",
            description:
                "Rebuilding cellular energy and tissue function from the ground up.",
            icon: BatteryCharging,
        },
    ],

    /* =========================
       CTA
    ========================= */

    cta: {
        heading: "Uncover the cause behind your symptoms.",

        description:
            "Book a root-cause consultation to stop masking symptoms and start fixing the real underlying issue.",

        image: immuneSupportCTA
    },
},


    /* =====================================================
       Nutritional Counselling
    ===================================================== */

    {
    id: 4,

    title: "Nutritional Counselling",

    slug: "nutritional-counselling",

    excerpt:
        "Expert, evidence-based nutritional guidance to help you build healthy eating habits, correct nutrient deficiencies, and nourish your body.",

    icon: Apple,
    image: "https://i.pinimg.com/1200x/33/44/55/334455bfa892f3e8f49e1a2b3c4d5e6f.jpg",
    imageAlt: "nutritional-counselling",

    /* =========================
       HERO
    ========================= */

    hero: {
        eyebrow: "Personalized Dietary Guidance",

        description:
            "Transform your relationship with food through customized nutrition strategies designed to fuel your metabolism, support energy, and foster sustainable health.",
        
        image: "https://i.pinimg.com/1200x/44/55/66/445566cfa892f3e8f49e1a2b3c4d5e6f.jpg",
        imageAlt: "nutritional-counselling"
    },

    /* =========================
       OVERVIEW
    ========================= */

    overview: {
        eyebrow: "Overview",

        heading: "Nourish. Balance. Energize.",

        paragraphs: [
            "Food is far more than simple calories—it provides the essential biochemical building blocks for every organ, hormone, and cell in your body. Nutritional Counselling helps you cut through confusing dietary fads and establish an eating pattern tailored to your unique biology.",

            "Whether you want to manage weight, improve athletic performance, address nutrient deficiencies, or support metabolic health, our clinical nutritionists provide practical education, meal strategies, and supportive accountability to make healthy eating simple and enjoyable.",
        ],

        duration: "45 - 60 minutes",

        idealFor:
            "Anyone looking to optimize their dietary intake, build healthier eating habits, or resolve food-related health concerns.",

        suitableFor: [
            "Want to establish a balanced, wholesome dietary routine suited to your busy lifestyle",
            "Are confused by conflicting diet trends and want evidence-backed nutritional guidance",
            "Need help optimizing macronutrients and micronutrients for daily performance",
            "Are seeking to address energy slumps, food cravings, or metabolic slowness",
            "Want empathetic, ongoing support to cultivate a healthy, positive relationship with food",
        ],

        image: overviewImage,
    },

    /* =========================
       BENEFITS
    ========================= */

    benefits: [
        {
            id: 1,
            title: "Personalized Diets",
            description:
                "Nutritional plans built around your food preferences, culture, lifestyle, and health goals.",
            icon: Utensils,
        },

        {
            id: 2,
            title: "Nutrient Optimization",
            description:
                "Identify and correct vitamin, mineral, and essential fatty acid deficiencies safely.",
            icon: Apple,
        },

        {
            id: 3,
            title: "Sustained Energy",
            description:
                "Stabilize blood sugar levels to eliminate energy crashes, brain fog, and intense cravings.",
            icon: Zap,
        },

        {
            id: 4,
            title: "Practical Education",
            description:
                "Learn meal prepping, label reading, and smart grocery shopping strategies for real-life success.",
            icon: ShoppingBag,
        },
    ],

    /* =========================
       WHAT TO EXPECT
    ========================= */

    expectations: [
        {
            id: 1,
            title: "Dietary Audit",
            description:
                "We analyze your current food intake, eating schedules, fluid habits, and nutrient levels.",
            icon: ClipboardList,
        },

        {
            id: 2,
            title: "Goal Alignment",
            description:
                "We establish clear, achievable nutritional objectives tailored to your health priorities.",
            icon: Target,
        },

        {
            id: 3,
            title: "Plan Creation",
            description:
                "You receive a flexible, practical nutrition outline with tailored meal suggestions and recipes.",
            icon: ChefHat,
        },

        {
            id: 4,
            title: "Accountability",
            description:
                "Regular check-ins keep you motivated, troubleshoot challenges, and refine habits over time.",
            icon: UserCheck,
        },
    ],

    /* =========================
       OUR APPROACH
    ========================= */

    approach: [
        {
            id: 1,
            title: "Nourishment First",
            description:
                "We focus on adding nutrient-dense, wholesome foods rather than restrictive diets.",
            icon: Heart,
        },

        {
            id: 2,
            title: "Evidence-Based",
            description:
                "All guidance is backed by verified clinical nutritional science.",
            icon: Award,
        },

        {
            id: 3,
            title: "Sustainable",
            description:
                "Building lifelong, practical dietary habits that fit seamlessly into daily routines.",
            icon:  Repeat1,
        },

        {
            id: 4,
            title: "Individualized",
            description:
                "Respecting food sensitivities, cultural habits, and personal culinary choices.",
            icon: Compass,
        },
    ],

    /* =========================
       CTA
    ========================= */

    cta: {
        heading: "Fuel your body the right way.",

        description:
            "Book a nutritional counselling session today to create a meal plan that nourishes your lifestyle.",

        image: ""
    },
},


    /* =====================================================
       Therapeutic Diet Planning.
    ===================================================== */

    {
    id: 5,

    title: "Therapeutic Diet Planning",

    slug: "therapeutic-diet-planning",

    excerpt:
        "Targeted, clinical dietary interventions designed to manage medical conditions, reduce inflammation, and support specialized healing protocols.",

    icon: UtensilsCrossed,
    image: "https://i.pinimg.com/1200x/55/66/77/556677cfa892f3e8f49e1a2b3c4d5e6f.jpg",
    imageAlt: "therapeutic-diet-planning",

    /* =========================
       HERO
    ========================= */

    hero: {
        eyebrow: "Clinical Clinical Nutrition",

        description:
            "Medically supervised dietary protocols—such as Low-FODMAP, Elimination, anti-inflammatory, or renal diets—tailored to treat specific medical conditions.",
        
        image: "https://i.pinimg.com/1200x/66/77/88/667788cfa892f3e8f49e1a2b3c4d5e6f.jpg",
        imageAlt: "therapeutic-diet-planning"
    },

    /* =========================
       OVERVIEW
    ========================= */

    overview: {
        eyebrow: "Overview",

        heading: "Targeted. Therapeutic. Effective.",

        paragraphs: [
            "Therapeutic Diet Planning uses specialized food protocols as a direct clinical intervention for managing specific medical conditions. When dealing with autoimmune diseases, severe IBS, food allergies, cardiovascular disease, or kidney impairment, standard nutritional advice is often insufficient.",

            "Our clinical nutrition team designs strict, time-bound therapeutic diet plans (e.g., Anti-Inflammatory, Elimination, Low-FODMAP, Ketogenic, or Specific Carbohydrate Diets). We guide you step-by-step through execution, reintroduction phases, and long-term maintenance to ensure nutritional adequacy and symptom control.",
        ],

        duration: "60 minutes",

        idealFor:
            "Patients who require specialized medical nutrition therapy to manage diagnosed health conditions, food intolerance, or acute inflammation.",

        suitableFor: [
            "Are diagnosed with conditions requiring dietary control (e.g., Celiac, IBS, IBD, Gout, Diabetes)",
            "Need to identify triggering foods through a structured elimination and reintroduction process",
            "Are managing autoimmune diseases requiring anti-inflammatory dietary support",
            "Require precise nutrient intake supervision to protect organ function",
            "Need expert help maintaining balanced nutrition while adhering to strict medical diets",
        ],

        image: overviewImage,
    },

    /* =========================
       BENEFITS
    ========================= */

    benefits: [
        {
            id: 1,
            title: "Medical Symptom Control",
            description:
                "Clinically proven protocols designed to reduce flare-ups, pain, and systemic inflammation.",
            icon: ShieldAlert,
        },

        {
            id: 2,
            title: "Food Intolerance Clarity",
            description:
                "Systematically pinpoint food triggers without guessing or unnecessary restrictions.",
            icon: Search,
        },

        {
            id: 3,
            title: "Nutritional Safety",
            description:
                "Ensure specialized diets maintain full vitamin and mineral adequacy during therapeutic phases.",
            icon: CheckCircle2,
        },

        {
            id: 4,
            title: "Step-by-Step Reintroduction",
            description:
                "Clear guidance on expanding your diet safely once gut or tissue healing has occurred.",
            icon: RotateCcw,
        },
    ],

    /* =========================
       WHAT TO EXPECT
    ========================= */

    expectations: [
        {
            id: 1,
            title: "Clinical Review",
            description:
                "We review medical diagnoses, lab tests, and doctor notes to determine the correct diet therapy.",
            icon: FileText,
        },

        {
            id: 2,
            title: "Protocol Design",
            description:
                "We construct a detailed therapeutic food framework with explicit inclusions and exclusions.",
            icon: Edit3,
        },

        {
            id: 3,
            title: "Implementation",
            description:
                "You receive meal outlines, ingredient swap guides, and shopping resources for home preparation.",
            icon: BookOpen,
        },

        {
            id: 4,
            title: "Reintroduction & Stabilization",
            description:
                "We systematically test foods to establish your long-term, sustainable maintenance diet.",
            icon: FastForward,
        },
    ],

    /* =========================
       OUR APPROACH
    ========================= */

    approach: [
        {
            id: 1,
            title: "Protocol-Driven",
            description:
                "Leveraging clinically validated dietary frameworks supported by medical literature.",
            icon: FileCheck,
        },

        {
            id: 2,
            title: "Safety-Screened",
            description:
                "Preventing accidental nutritional deficiencies during restrictive healing protocols.",
            icon: Shield,
        },

        {
            id: 3,
            title: "Phased Execution",
            description:
                "Structuring diets into clear elimination, healing, and reintroduction stages.",
            icon: Layers,
        },

        {
            id: 4,
            title: "Collaborative",
            description:
                "Working alongside your physicians and specialists to align with overall care goals.",
            icon: Users,
        },
    ],

    /* =========================
       CTA
    ========================= */

    cta: {
        heading: "Optimize your health with targeted food protocols.",

        description:
            "Consult our clinical nutritionists to build a therapeutic diet tailored to your medical needs.",

        image: ""
    },
},


    /* =====================================================
       Herbal Medicine
    ===================================================== */

    {
    id: 6,

    title: "Herbal Medicine",

    slug: "herbal-medicine",

    excerpt:
        "Custom botanical formulations, tinctures, and teas crafted from medicinal plants to gently support organ function, immunity, and balance.",

    icon: Flower2,
    image: "https://i.pinimg.com/1200x/77/88/99/778899cfa892f3e8f49e1a2b3c4d5e6f.jpg",
    imageAlt: "herbal-medicine",

    /* =========================
       HERO
    ========================= */

    hero: {
        eyebrow: "Clinical Phytotherapy & Botanical Care",

        description:
            "Harness the therapeutic power of medicinal plants through professionally formulated liquid extracts, capsules, and teas compounded for your specific physiology.",
        
        image: "https://i.pinimg.com/1200x/88/99/00/889900cfa892f3e8f49e1a2b3c4d5e6f.jpg",
        imageAlt: "herbal-medicine"
    },

    /* =========================
       OVERVIEW
    ========================= */

    overview: {
        eyebrow: "Overview",

        heading: "Natural. Potent. Precision-Blended.",

        paragraphs: [
            "Herbal Medicine (Phytotherapy) is one of the world's oldest forms of healthcare, utilizing plant extracts to balance body systems, improve resilience, and treat illness. Modern medical herbalism combines centuries of traditional plant knowledge with modern pharmacology.",

            "Our qualified medical herbalists create custom-blended herbal tinctures, teas, and standardized extracts designed specifically for your health needs. Herbal remedies work synergistically with your body to modulate stress responses, ease digestion, balance hormones, and strengthen immunity.",
        ],

        duration: "45 - 60 minutes",

        idealFor:
            "Patients seeking effective, natural plant-based remedies compounded specifically for their health profile.",

        suitableFor: [
            "Are looking for natural plant-based solutions for stress, sleep, digestion, or low mood",
            "Want custom-compounded herbal formulas tailored to their body's exact requirements",
            "Prefer gentle, plant-derived remedies with a broad spectrum of supportive active constituents",
            "Are seeking safe herbal support that respects ongoing conventional medication schedules",
            "Want guidance from qualified herbalists who understand plant pharmacology and safety",
        ],

        image: overviewImage,
    },

    /* =========================
       BENEFITS
    ========================= */

    benefits: [
        {
            id: 1,
            title: "Custom Formulations",
            description:
                "Herbal tinctures and teas blended specifically for your unique combination of symptoms.",
            icon: TestTube,
        },

        {
            id: 2,
            title: "Synergistic Action",
            description:
                "Whole plant extracts offer broad-spectrum support that is gentler and highly bioavailable.",
            icon: Sparkles,
        },

        {
            id: 3,
            title: "Systemic Support",
            description:
                "Adaptogens, nervines, and tonic herbs nourish stressed nervous, digestive, and immune systems.",
            icon: ShieldCheck,
        },

        {
            id: 4,
            title: "Pharmacological Safety",
            description:
                "Formulated with expert oversight to avoid herb-drug interactions or unintended side effects.",
            icon: ShieldAlert,
        },
    ],

    /* =========================
       WHAT TO EXPECT
    ========================= */

    expectations: [
        {
            id: 1,
            title: "Consultation",
            description:
                "We evaluate your health state, current medications, organ function, and botanical goals.",
            icon: ClipboardList,
        },

        {
            id: 2,
            title: "Formulation",
            description:
                "Our herbalist crafts a custom herbal formula choosing specific adaptogens, tonics, or alteratives.",
            icon: Beaker,
        },

        {
            id: 3,
            title: "Dispensing",
            description:
                "You receive your custom liquid extract, tea blend, or capsule regimen with clear dosage instructions.",
            icon: Package,
        },

        {
            id: 4,
            title: "Refinement",
            description:
                "We adjust the botanical constituents as your symptoms improve and body balance restores.",
            icon: Sliders,
        },
    ],

    /* =========================
       OUR APPROACH
    ========================= */

    approach: [
        {
            id: 1,
            title: "Individualized",
            description:
                "We never rely on pre-packaged remedies; every formula is custom-blended for the patient.",
            icon: UserRound,
        },

        {
            id: 2,
            title: "Quality Assured",
            description:
                "Using organic, ethically harvested, and laboratory-tested botanical extracts.",
            icon: Award,
        },

        {
            id: 3,
            title: "Safety-Centric",
            description:
                "Thorough screening prevents potential herb-drug interactions with prescribed pharmaceuticals.",
            icon: Shield,
        },

        {
            id: 4,
            title: "Evidence-Informed",
            description:
                "Combining traditional phytotherapy principles with modern scientific research.",
            icon: BookOpen,
        },
    ],

    /* =========================
       CTA
    ========================= */

    cta: {
        heading: "Experience the healing power of plants.",

        description:
            "Schedule an herbal medicine consultation to receive a custom botanical formula crafted for you.",

        image: ""
    },
},

    /*====================
     Nutritional Supplements
     =====================*/

     {
    id: 7,

    title: "Nutritional Supplements",

    slug: "nutritional-supplements",

    excerpt:
        "Targeted, clinical-grade supplementation recommendations designed to address nutrient deficiencies, support recovery, and optimize cellular function.",

    icon: Pill,
    image: "https://i.pinimg.com/1200x/11/22/33/112233bfa892f3e8f49e1a2b3c4d5e6f.jpg",
    imageAlt: "nutritional-supplements",

    /* =========================
       HERO
    ========================= */

    hero: {
        eyebrow: "Targeted Micronutrient Therapy",

        description:
            "Evidence-backed, practitioner-grade supplement protocols tailored to your biological needs—eliminating guesswork and ensuring maximum absorption and safety.",
        
        image: "https://i.pinimg.com/1200x/22/33/44/223344cfa892f3e8f49e1a2b3c4d5e6f.jpg",
        imageAlt: "nutritional-supplements"
    },

    /* =========================
       OVERVIEW
    ========================= */

    overview: {
        eyebrow: "Overview",

        heading: "Precise. Pure. Purpose-Driven.",

        paragraphs: [
            "With thousands of dietary supplements available on store shelves, knowing what your body actually needs can be overwhelming. Nutritional Supplementation guidance provides clinical clarity, ensuring you take only the vitamins, minerals, and nutraceuticals necessary for your body.",

            "We assess your bioavailability, dietary gaps, and lab results to prescribe practitioner-grade supplements with high potency and purity. Our primary focus is preventing dangerous drug-supplement interactions while optimizing dosages to support your health goals effectively.",
        ],

        duration: "30 - 45 minutes",

        idealFor:
            "Individuals wanting targeted, high-quality supplement protocols that address real biological gaps without wasting money on unneeded products.",

        suitableFor: [
            "Want to streamline current supplement intake and eliminate redundant pills",
            "Have confirmed nutrient deficiencies (e.g., Vitamin D, B12, Iron, Magnesium) needing correction",
            "Need practitioner-grade nutraceuticals with proven bioavailability and purity",
            "Are taking medications and want to ensure their supplement routine is completely safe",
            "Require specific nutritional support for recovery, intense exercise, or chronic stress",
        ],

        image: overviewImage,
    },

    /* =========================
       BENEFITS
    ========================= */

    benefits: [
        {
            id: 1,
            title: "Clinical Potency",
            description:
                "Access high-grade, bioavailable supplement formulations unavailable in high-street shops.",
            icon: CheckCircle2,
        },

        {
            id: 2,
            title: "Safety & Interaction Review",
            description:
                "Rigorous screening guarantees supplements won't interfere with your prescription drugs.",
            icon: ShieldAlert,
        },

        {
            id: 3,
            title: "Targeted Precision",
            description:
                "Eliminate supplement clutter by taking only what your body specifically requires.",
            icon: Target,
        },

        {
            id: 4,
            title: "Cost Efficiency",
            description:
                "Save money by avoiding low-quality fillers, incorrect dosages, and unnecessary pills.",
            icon: ShieldCheck,
        },
    ],

    /* =========================
       WHAT TO EXPECT
    ========================= */

    expectations: [
        {
            id: 1,
            title: "Supplement Audit",
            description:
                "We review everything you currently take, evaluating ingredients, dosages, and quality.",
            icon: Search,
        },

        {
            id: 2,
            title: "Deficiency Analysis",
            description:
                "We correlate symptoms and bloodwork to pinpoint true micronutrient shortfalls.",
            icon: LineChart,
        },

        {
            id: 3,
            title: "Prescription Plan",
            description:
                "You receive a streamlined supplement schedule with exact dosages, forms, and timing.",
            icon: ClipboardList,
        },

        {
            id: 4,
            title: "Re-Testing",
            description:
                "We reassess nutrient levels after a set period to adjust or discontinue supplements.",
            icon: RefreshCw,
        },
    ],

    /* =========================
       OUR APPROACH
    ========================= */

    approach: [
        {
            id: 1,
            title: "Practitioner-Grade",
            description:
                "We recommend third-party tested products free from artificial fillers and allergens.",
            icon: ShieldCheck,
        },

        {
            id: 2,
            title: "Bioavailability-Focused",
            description:
                "Choosing active nutrient forms (e.g., methylated folate) that your body absorbs easily.",
            icon: Zap,
        },

        {
            id: 3,
            title: "Safety-First",
            description:
                "Cross-checking all recommendations against clinical drug databases to guarantee safety.",
            icon: Shield,
        },

        {
            id: 4,
            title: "Temporary & Targeted",
            description:
                "Using supplements to correct deficiencies while focusing on food for long-term health.",
            icon: RefreshCw,
        },
    ],

    /* =========================
       CTA
    ========================= */

    cta: {
        heading: "Streamline your supplement routine.",

        description:
            "Schedule a supplement consultation to ensure you are taking the right nutrients safely.",

        image: ""
    },
},

{
    id: 8,

    title: "Lifestyle Medicine",

    slug: "lifestyle-medicine",

    excerpt:
        "Evidence-based therapeutic lifestyle interventions—covering sleep, physical activity, stress, and environmental exposures—to prevent and reverse chronic disease.",

    icon: Compass,
    image: "https://i.pinimg.com/1200x/99/00/11/990011bfa892f3e8f49e1a2b3c4d5e6f.jpg",
    imageAlt: "lifestyle-medicine",

    /* =========================
       HERO
    ========================= */

    hero: {
        eyebrow: "Behavioral Health & Chronic Disease Prevention",

        description:
            "Transform your health by addressing the core lifestyle drivers of modern illness: sleep hygiene, physical movement, stress resilience, and environmental health.",
        
        image: "https://i.pinimg.com/1200x/00/11/22/001122cfa892f3e8f49e1a2b3c4d5e6f.jpg",
        imageAlt: "lifestyle-medicine"
    },

    /* =========================
       OVERVIEW
    ========================= */

    overview: {
        eyebrow: "Overview",

        heading: "Habits. Environment. Transformation.",

        paragraphs: [
            "Lifestyle Medicine is an established clinical discipline that uses evidence-based behavioral interventions to prevent, manage, and often reverse chronic conditions like Type 2 diabetes, heart disease, and metabolic syndrome.",

            "By focusing on the core pillars of lifestyle health—whole-food nutrition, physical activity, restorative sleep, stress management, social connection, and toxin avoidance—we empower you to make meaningful changes that transform your everyday health.",
        ],

        duration: "60 minutes",

        idealFor:
            "Individuals seeking structured, medical lifestyle interventions to manage chronic conditions and optimize daily health habits.",

        suitableFor: [
            "Are managing lifestyle-related conditions (e.g., hypertension, high cholesterol, prediabetes)",
            "Struggle with chronic insomnia, low physical energy, or poor sleep quality",
            "Want structured, evidence-based guidance to build sustainable exercise routines",
            "Need help reducing daily stress levels and building mental resilience",
            "Want to optimize their home and daily environment for long-term wellness",
        ],

        image: overviewImage,
    },

    /* =========================
       BENEFITS
    ========================= */

    benefits: [
        {
            id: 1,
            title: "Disease Reversal Potential",
            description:
                "Target the root lifestyle habits responsible for chronic metabolic conditions.",
            icon: Activity,
        },

        {
            id: 2,
            title: "Restorative Sleep",
            description:
                "Optimize circadian rhythms and bedtime habits to achieve deep, restful sleep.",
            icon: Moon,
        },

        {
            id: 3,
            title: "Physical Vitality",
            description:
                "Develop safe, scalable movement habits suited to your body's capabilities.",
            icon: Footprints,
        },

        {
            id: 4,
            title: "Toxin Mitigation",
            description:
                "Identify and reduce exposure to environmental chemicals, microplastics, and pollutants.",
            icon: ShieldCheck,
        },
    ],

    /* =========================
       WHAT TO EXPECT
    ========================= */

    expectations: [
        {
            id: 1,
            title: "Lifestyle Audit",
            description:
                "We evaluate your daily movement, sleep patterns, stress levels, and environmental habits.",
            icon: ClipboardList,
        },

        {
            id: 2,
            title: "Pillar Prioritization",
            description:
                "We identify which lifestyle pillar requires the most immediate focus for quick health gains.",
            icon: Target,
        },

        {
            id: 3,
            title: "Habit Blueprint",
            description:
                "You receive a clear, step-by-step action plan with manageable daily adjustments.",
            icon: Lightbulb,
        },

        {
            id: 4,
            title: "Follow-Up Support",
            description:
                "Regular sessions ensure habit adherence, troubleshoot barriers, and maintain momentum.",
            icon: UserCheck,
        },
    ],

    /* =========================
       OUR APPROACH
    ========================= */

    approach: [
        {
            id: 1,
            title: "Six-Pillar Focus",
            description:
                "Addressing nutrition, activity, sleep, stress, relationships, and substance reduction.",
            icon: Compass,
        },

        {
            id: 2,
            title: "Evidence-Based",
            description:
                "Grounded in lifestyle medicine guidelines recognized by global medical bodies.",
            icon: ShieldCheck,
        },

        {
            id: 3,
            title: "Behavioral Psychology",
            description:
                "Utilizing proven habit-formation methods for long-term success.",
            icon: Brain,
        },

        {
            id: 4,
            title: "Empowering",
            description:
                "Putting you in the driver's seat of your own health trajectory.",
            icon: UserRound,
        },
    ],

    /* =========================
       CTA
    ========================= */

    cta: {
        heading: "Transform your daily habits for lifelong health.",

        description:
            "Book a lifestyle medicine consultation to build a habits plan for lasting wellness.",

        image: ""
    },
},

{
    id: 9,

    title: "Digestive Health Support",

    slug: "digestive-health-support",

    excerpt:
        "Comprehensive natural management for IBS, bloating, acid reflux, leaky gut, and microbiome imbalances to restore gut comfort and absorption.",

    icon: Stethoscope,
    image: "https://i.pinimg.com/1200x/ab/cd/ef/abcdef123456789abcdef123456789a.jpg",
    imageAlt: "digestive-health-support",

    /* =========================
       HERO
    ========================= */

    hero: {
        eyebrow: "Gastrointestinal Wellness & Microbiome Care",

        description:
            "Restore your gut health from the ground up with targeted therapies designed to relieve bloating, balance intestinal flora, and strengthen mucosal lining.",
        
        image: "https://i.pinimg.com/1200x/bc/de/fg/bcdefg234567890bcdefg234567890b.jpg",
        imageAlt: "digestive-health-support"
    },

    /* =========================
       OVERVIEW
    ========================= */

    overview: {
        eyebrow: "Overview",

        heading: "Soothe. Rebalance. Absorb.",

        paragraphs: [
            "A healthy gut is the foundation of whole-body wellness. Chronic digestive symptoms—such as bloating, gas, reflux, abdominal pain, irregular bowel habits, or food intolerances—indicate underlying disruptions in your gastrointestinal tract.",

            "Our Digestive Health Support service utilizes a systematic approach to gut repair. We identify microbial dysbiosis, SIBO, leaky gut, or enzyme deficiencies, utilizing targeted dietary protocols, probiotics, and healing botanical compounds to restore gut integrity.",
        ],

        duration: "60 minutes",

        idealFor:
            "Patients suffering from chronic digestive discomfort, IBS, acid reflux, or gut microbiome imbalances.",

        suitableFor: [
            "Suffer from chronic bloating, gas, constipation, diarrhea, or abdominal discomfort",
            "Have been diagnosed with IBS, SIBO, acid reflux (GERD), or food intolerances",
            "Suspect gut issues are driving systemic symptoms like skin flare-ups, joint pain, or brain fog",
            "Want to restore healthy gut flora following antibiotic treatments or infections",
            "Are looking for natural ways to support optimal digestion and nutrient absorption",
        ],

        image: overviewImage,
    },

    /* =========================
       BENEFITS
    ========================= */

    benefits: [
        {
            id: 1,
            title: "Symptom Relief",
            description:
                "Calm digestive distress, ease bloating, and regulate daily bowel movements naturally.",
            icon: Heart,
        },

        {
            id: 2,
            title: "Microbiome Balance",
            description:
                "Rebalance beneficial gut bacteria to support immune function and digestion.",
            icon: ShieldCheck,
        },

        {
            id: 3,
            title: "Gut Barrier Repair",
            description:
                "Strengthen the intestinal lining to reduce intestinal permeability (leaky gut).",
            icon: Shield,
        },

        {
            id: 4,
            title: "Enhanced Nutrient Absorption",
            description:
                "Optimize stomach acid and enzyme production to absorb vitamins and minerals efficiently.",
            icon: Sparkles,
        },
    ],

    /* =========================
       WHAT TO EXPECT
    ========================= */

    expectations: [
        {
            id: 1,
            title: "Digestive History",
            description:
                "We analyze your complete gut history, stool patterns, diet, and medication usage.",
            icon: ClipboardList,
        },

        {
            id: 2,
            title: "Dysbiosis Evaluation",
            description:
                "We identify microbial imbalances, food sensitivities, and inflammatory triggers.",
            icon: Search,
        },

        {
            id: 3,
            title: "5-R Gut Protocol",
            description:
                "We apply the 5-R gut framework: Remove, Replace, Reinoculate, Repair, and Rebalance.",
            icon: Repeat,
        },

        {
            id: 4,
            title: "Maintenance",
            description:
                "We transition you to a sustainable, gut-friendly diet and lifestyle plan for long-term health.",
            icon: CheckCircle2,
        },
    ],

    /* =========================
       OUR APPROACH
    ========================= */

    approach: [
        {
            id: 1,
            title: "Root-Cause Driven",
            description:
                "Looking beyond IBS labels to fix enzyme gaps, motility issues, and dysbiosis.",
            icon: Target,
        },

        {
            id: 2,
            title: "5-R Framework",
            description:
                "Utilizing the gold-standard functional medicine protocol for gastrointestinal healing.",
            icon: Stethoscope,
        },

        {
            id: 3,
            title: "Gut-Brain Focus",
            description:
                "Addressing the vagus nerve and nervous system influences on gut motility.",
            icon: Brain,
        },

        {
            id: 4,
            title: "Gentle & Restorative",
            description:
                "Using soothing botanicals and targeted nutrients to heal fragile mucosal tissues.",
            icon: Leaf,
        },
    ],

    /* =========================
       CTA
    ========================= */

    cta: {
        heading: "Reclaim gut comfort and digestion.",

        description:
            "Book a digestive health consultation to relieve bloating and repair your gut microbiome.",

        image: ""
    },
  },


    /* =====================================================
       Stress Management & Mind-Body Support
    ===================================================== */

    {
    id: 10,

    title: "Stress Management & Mind-Body Support",

    slug: "stress-management-mind-body-support",

    excerpt:
        "Holistic stress resilience strategies, mindfulness techniques, and nervous system regulation to combat burnout, anxiety, and mental fatigue.",

    icon: Brain,
    image: "https://i.pinimg.com/1200x/dd/ee/ff/ddeeff123456789abcdef123456789a.jpg",
    imageAlt: "stress-management-mind-body-support",

    /* =========================
       HERO
    ========================= */

    hero: {
        eyebrow: "Nervous System Regulation & Mental Resilience",

        description:
            "Calm your overactive nervous system, manage chronic stress, and restore emotional equilibrium using integrative mind-body techniques and lifestyle medicine.",
        
        image: "https://i.pinimg.com/1200x/ee/ff/00/eeff00234567890bcdefg234567890b.jpg",
        imageAlt: "stress-management-mind-body-support"
    },

    /* =========================
       OVERVIEW
    ========================= */

    overview: {
        eyebrow: "Overview",

        heading: "Calm. Regulate. Restore.",

        paragraphs: [
            "Chronic stress is a major contributor to modern chronic illness, driving systemic inflammation, hormonal dysregulation, digestive issues, and sleep disruption. When your body remains stuck in fight-or-flight mode, long-term health suffers.",

            "Our Stress Management & Mind-Body Support program provides practical tools to shift your autonomic nervous system into a state of rest and recovery. Combining breathwork, mindfulness, biofeedback principles, adaptogenic herbs, and sleep optimization, we help you build lasting mental and physical resilience.",
        ],

        duration: "45 - 60 minutes",

        idealFor:
            "Individuals experiencing chronic stress, overwhelm, work burnout, anxiety, or stress-related physical symptoms.",

        suitableFor: [
            "Feel constantly overwhelmed, anxious, or unable to switch off mental chatter",
            "Are experiencing physical signs of stress (e.g., muscle tension, racing heart, digestive upsets)",
            "Struggle with fatigue, burnout, or feeling drained despite sleeping",
            "Want to learn practical, evidence-backed breathwork and relaxation techniques",
            "Are seeking natural nervous system support alongside conventional therapy",
        ],

        image: overviewImage,
    },

    /* =========================
       BENEFITS
    ========================= */

    benefits: [
        {
            id: 1,
            title: "Vagus Nerve Activation",
            description:
                "Learn physical techniques to activate the parasympathetic rest-and-digest response quickly.",
            icon: HeartPulse,
        },

        {
            id: 2,
            title: "Burnout Recovery",
            description:
                "Rebuild adrenal energy reserves and mental clarity using restorative therapies.",
            icon: BatteryCharging,
        },

        {
            id: 3,
            title: "Emotional Balance",
            description:
                "Develop self-regulation tools to navigate daily workplace and life stressors calmly.",
            icon: Heart,
        },

        {
            id: 4,
            title: "Improved Sleep Quality",
            description:
                "Calm a racing mind at night to transition into deeper, more rejuvenating sleep.",
            icon: Moon,
        },
    ],

    /* =========================
       WHAT TO EXPECT
    ========================= */

    expectations: [
        {
            id: 1,
            title: "Stress Mapping",
            description:
                "We identify your primary mental, physical, and environmental stress triggers.",
            icon: Search,
        },

        {
            id: 2,
            title: "Nervous System Assessment",
            description:
                "We evaluate how stress is impacting your sleep, digestion, and physiological markers.",
            icon: Activity,
        },

        {
            id: 3,
            title: "Toolkit Creation",
            description:
                "You learn customized breathwork routines, mindfulness strategies, and botanical support plans.",
            icon: ShieldCheck,
        },

        {
            id: 4,
            title: "Integration",
            description:
                "We embed quick, 5-minute daily reset habits seamlessly into your existing workday routine.",
            icon: Repeat,
        },
    ],

    /* =========================
       OUR APPROACH
    ========================= */

    approach: [
        {
            id: 1,
            title: "Somatic & Mindful",
            description:
                "Combining body-based nervous system tools with mental refocusing strategies.",
            icon: Brain,
        },

        {
            id: 2,
            title: "Physiological Focus",
            description:
                "Treating stress as a physical biochemical state that requires active regulation.",
            icon: Heart,
        },

        {
            id: 3,
            title: "Practical & Scalable",
            description:
                "Simple techniques designed to be used anytime—at your desk, home, or on the go.",
            icon: CheckCircle2,
        },

        {
            id: 4,
            title: "Holistic Integration",
            description:
                "Addressing nutrition, sleep, and lifestyle alongside stress practices.",
            icon: Compass,
        },
    ],

    /* =========================
       CTA
    ========================= */

    cta: {
        heading: "Restore balance to your nervous system.",

        description:
            "Book a stress management session to learn proven techniques for calm, clarity, and burnout recovery.",

        image: ""
    },
},

{
    id: 11,

    title: "Women's Health Support",

    slug: "womens-health-support",

    excerpt:
        "Specialized natural healthcare for hormonal balance, menstrual health, PCOS, endometriosis, fertility support, perimenopause, and menopause transition.",

    icon: Flower2,
    image: "https://i.pinimg.com/1200x/ff/00/11/ff001134567890bcdefg234567890b.jpg",
    imageAlt: "womens-health-support",

    /* =========================
       HERO
    ========================= */

    hero: {
        eyebrow: "Hormonal Balance & Reproductive Care",

        description:
            "Empowered, whole-woman healthcare tailored to every stage of life—providing compassionate natural solutions for hormonal, reproductive, and metabolic wellbeing.",
        
        image: "https://i.pinimg.com/1200x/00/11/22/00112245678901cdefg345678901c.jpg",
        imageAlt: "womens-health-support"
    },

    /* =========================
       OVERVIEW
    ========================= */

    overview: {
        eyebrow: "Overview",

        heading: "Balance. Empower. Sustain.",

        paragraphs: [
            "Women's bodies undergo complex hormonal shifts across every stage of life—from early menstruation through childbearing years, perimenopause, and menopause. When hormones fall out of balance, it can lead to PMS, painful periods, mood fluctuations, fatigue, weight changes, and sleep issues.",

            "Our Women's Health Support service provides individualized, natural clinical management for conditions such as PCOS, Endometriosis, Fibroids, PMS/PMDD, and Menopause symptoms. By combining clinical nutrition, herbal medicine, and hormonal balancing, we help you feel comfortable, energized, and in tune with your body.",
        ],

        duration: "60 minutes",

        idealFor:
            "Women looking for natural, evidence-based solutions for hormonal imbalances, menstrual discomfort, fertility optimization, or menopause transitions.",

        suitableFor: [
            "Experience irregular, painful, or heavy menstrual cycles",
            "Are managing diagnosed hormonal conditions like PCOS, Endometriosis, or Thyroid imbalances",
            "Are navigating perimenopause or menopause symptoms (hot flashes, night sweats, brain fog)",
            "Want natural preconception or postpartum health optimization",
            "Are looking for safe alternatives or complements to hormonal therapies",
        ],

        image: overviewImage,
    },

    /* =========================
       BENEFITS
    ========================= */

    benefits: [
        {
            id: 1,
            title: "Hormonal Harmony",
            description:
                "Support healthy estrogen, progesterone, and androgen metabolism naturally.",
            icon: Sparkles,
        },

        {
            id: 2,
            title: "Cycle Regularity & Comfort",
            description:
                "Reduce menstrual cramps, PMS mood changes, and cycle irregularity effectively.",
            icon: CalendarCheck,
        },

        {
            id: 3,
            title: "Menopause Transition Support",
            description:
                "Ease hot flashes, night sweats, sleep disruption, and anxiety during perimenopause.",
            icon: Moon,
        },

        {
            id: 4,
            title: "Metabolic & Weight Health",
            description:
                "Address insulin resistance and metabolic factors linked to conditions like PCOS.",
            icon: Activity,
        },
    ],

    /* =========================
       WHAT TO EXPECT
    ========================= */

    expectations: [
        {
            id: 1,
            title: "Hormonal Review",
            description:
                "We map your complete menstrual history, cycle length, symptoms, and hormonal patterns.",
            icon: ClipboardList,
        },

        {
            id: 2,
            title: "Targeted Evaluation",
            description:
                "We analyze potential triggers like thyroid function, adrenal stress, and nutrient gaps.",
            icon: Search,
        },

        {
            id: 3,
            title: "Care Protocol",
            description:
                "You receive a tailored plan featuring herbal remedies, clinical nutrition, and lifestyle habits.",
            icon: Heart,
        },

        {
            id: 4,
            title: "Cyclical Monitoring",
            description:
                "We evaluate your symptoms across multiple cycle phases to fine-tune your ongoing care.",
            icon: RefreshCw,
        },
    ],

    /* =========================
       OUR APPROACH
    ========================= */

    approach: [
        {
            id: 1,
            title: "Life-Stage Specific",
            description:
                "Tailoring interventions to young adulthood, reproductive years, or menopause.",
            icon: UserRound,
        },

        {
            id: 2,
            title: "Root-Hormone Focus",
            description:
                "Supporting liver clearance and gut excretion of excess hormones naturally.",
            icon: ShieldCheck,
        },

        {
            id: 3,
            title: "Compassionate",
            description:
                "Providing a safe, supportive clinical environment for sensitive health concerns.",
            icon: Heart,
        },

        {
            id: 4,
            title: "Integrative",
            description:
                "Coordinating care safely with your gynecologist or endocrinologist.",
            icon: Network,
        },
    ],

    /* =========================
       CTA
    ========================= */

    cta: {
        heading: "Restore your natural hormonal rhythm.",

        description:
            "Schedule a women's health consultation to manage PMS, PCOS, or menopause naturally.",

        image: ""
    },
},

{
    id: 12,

    title: "Men's Health Support",

    slug: "mens-health-support",

    excerpt:
        "Targeted natural management for testosterone optimization, prostate care, cardiovascular health, energy, and stress resilience in men.",

    icon: Shield,
    image: "https://i.pinimg.com/1200x/11/22/33/11223356789012defg456789012d.jpg",
    imageAlt: "mens-health-support",

    /* =========================
       HERO
    ========================= */

    hero: {
        eyebrow: "Vitality, Hormonal & Prostate Optimization",

        description:
            "A practical, science-backed approach to men's health—focusing on maintaining healthy testosterone levels, prostate health, cardiovascular fitness, and mental stamina.",
        
        image: "https://i.pinimg.com/1200x/22/33/44/22334467890123efgh567890123e.jpg",
        imageAlt: "mens-health-support"
    },

    /* =========================
       OVERVIEW
    ========================= */

    overview: {
        eyebrow: "Overview",

        heading: "Strength. Stamina. Vitality.",

        paragraphs: [
            "Men face unique physiological challenges as they age, including gradual declines in testosterone, metabolic changes, prostate enlargement, and increased cardiovascular risks. Often, early symptoms like fatigue, low drive, muscle loss, and brain fog are dismissed as inevitable signs of aging.",

            "Our Men's Health Support service offers targeted, evidence-based protocols to protect your long-term health. We focus on optimizing endocrine function, cardiovascular risk reduction, prostate care, and performance recovery through targeted nutrition, natural supplements, and lifestyle medicine.",
        ],

        duration: "45 - 60 minutes",

        idealFor:
            "Men seeking proactive natural strategies to optimize hormone balance, prostate health, physical stamina, and cardiovascular fitness.",

        suitableFor: [
            "Are experiencing unexplained fatigue, loss of muscle mass, or declining stamina",
            "Want to optimize natural testosterone production through lifestyle and nutrition",
            "Are seeking proactive natural support for prostate health and urinary comfort",
            "Want to address cardiovascular risk factors (blood pressure, cholesterol, blood sugar)",
            "Are looking for practical, direct health guidance tailored specifically for men",
        ],

        image: overviewImage,
    },

    /* =========================
       BENEFITS
    ========================= */

    benefits: [
        {
            id: 1,
            title: "Testosterone Optimization",
            description:
                "Support healthy androgen levels naturally through sleep, nutrition, and targeted nutrients.",
            icon: Zap,
        },

        {
            id: 2,
            title: "Prostate Health",
            description:
                "Utilize evidence-based botanicals to maintain urinary flow and prostate wellness.",
            icon: ShieldCheck,
        },

        {
            id: 3,
            title: "Cardiovascular Protection",
            description:
                "Improve arterial health, blood pressure, and lipid profiles through lifestyle changes.",
            icon: Heart,
        },

        {
            id: 4,
            title: "Physical & Mental Stamina",
            description:
                "Rebuild daily energy, mental focus, and athletic performance recovery.",
            icon: Activity,
        },
    ],

    /* =========================
       WHAT TO EXPECT
    ========================= */

    expectations: [
        {
            id: 1,
            title: "Vitality Evaluation",
            description:
                "We assess energy levels, stress factors, sleep habits, metabolic markers, and drive.",
            icon: ClipboardList,
        },

        {
            id: 2,
            title: "Risk Assessment",
            description:
                "We evaluate cardiovascular, prostate, and hormonal indicators to spot early trends.",
            icon: Search,
        },

        {
            id: 3,
            title: "Action Plan",
            description:
                "You receive a clear, targeted protocol covering diet adjustments, key nutrients, and training.",
            icon: FileText,
        },

        {
            id: 4,
            title: "Progress Tracking",
            description:
                "We track physical improvements, energy scales, and health markers over time.",
            icon: Activity,
        },
    ],

    /* =========================
       OUR APPROACH
    ========================= */

    approach: [
        {
            id: 1,
            title: "Practical & Direct",
            description:
                "Clear, straightforward health advice designed for seamless real-world execution.",
            icon: Target,
        },

        {
            id: 2,
            title: "Evidence-Grounded",
            description:
                "Relying on clinical nutrition and phytotherapy with proven efficacy in men's health.",
            icon: ShieldCheck,
        },

        {
            id: 3,
            title: "Preventative Focus",
            description:
                "Protecting prostate, heart, and metabolic health decades before major issues develop.",
            icon: Shield,
        },

        {
            id: 4,
            title: "Performance-Aligned",
            description:
                "Helping you feel strong, energized, and focused in work, life, and fitness.",
            icon: Activity,
        },
    ],

    /* =========================
       CTA
    ========================= */

    cta: {
        heading: "Reclaim your energy and stamina.",

        description:
            "Book a men's health consultation to build a personalized plan for long-term vitality.",

        image: ""
    },
},

    /* =====================================================
       Children’s and Family Wellness
    ===================================================== */
{
    id: 13,

    title: "Children's and Family Wellness",

    slug: "childrens-family-wellness",

    excerpt:
        "Gentle, natural pediatric guidance and family health planning to support growing immune systems, digestion, healthy habits, and childhood vitality.",

    icon: Heart,
    image: "https://i.pinimg.com/1200x/33/44/55/33445578901234fghi678901234f.jpg",
    imageAlt: "childrens-family-wellness",

    /* =========================
       HERO
    ========================= */

    hero: {
        eyebrow: "Pediatric & Family Natural Care",

        description:
            "Safe, gentle natural therapies and practical family health routines designed to support your child's growth, immune resilience, digestion, and lifelong habits.",
        
        image: "https://i.pinimg.com/1200x/44/55/66/44556689012345ghij789012345g.jpg",
        imageAlt: "childrens-family-wellness"
    },

    /* =========================
       OVERVIEW
    ========================= */

    overview: {
        eyebrow: "Overview",

        heading: "Gentle. Nurturing. Family-Centered.",

        paragraphs: [
            "Building a foundation of good health starts in childhood. Children's bodies respond wonderfully to gentle, natural therapies, but their growing systems require specialized, cautious clinical care.",

            "Our Children's and Family Wellness service provides safe, age-appropriate natural support for common childhood concerns—such as recurrent infections, skin sensitivities, digestive troubles, food allergies, and poor sleep. We also help parents build healthy, stress-free family meal routines that benefit everyone at home.",
        ],

        duration: "45 - 60 minutes",

        idealFor:
            "Parents seeking safe, gentle, and effective natural health guidance for infants, children, teenagers, and overall family routines.",

        suitableFor: [
            "Want gentle natural remedies to support your child's immune system during school term",
            "Are dealing with childhood eczema, allergies, or chronic skin flare-ups",
            "Need practical strategies for picky eaters and nutrient gaps in children",
            "Want safe solutions for childhood digestive issues (constipation, stomachaches)",
            "Are looking to build healthy, balanced lifestyle routines for the entire household",
        ],

        image: overviewImage,
    },

    /* =========================
       BENEFITS
    ========================= */

    benefits: [
        {
            id: 1,
            title: "Gentle & Safe Therapies",
            description:
                "Age-appropriate remedies formulated specifically for children's sensitive systems.",
            icon: ShieldCheck,
        },

        {
            id: 2,
            title: "Immune System Support",
            description:
                "Reduce frequent colds and ear infections with targeted, gentle natural nutrients.",
            icon: Shield,
        },

        {
            id: 3,
            title: "Picky-Eater Strategies",
            description:
                "Stress-free, kid-approved nutritional ideas to ensure growing bodies get essential nutrients.",
            icon: Apple,
        },

        {
            id: 4,
            title: "Family Household Alignment",
            description:
                "Create wholesome meal plans and lifestyle routines that benefit parents and kids alike.",
            icon: Heart,
        },
    ],

    /* =========================
       WHAT TO EXPECT
    ========================= */

    expectations: [
        {
            id: 1,
            title: "Family History Review",
            description:
                "We discuss birth history, developmental milestones, diet, and active health concerns.",
            icon: ClipboardList,
        },

        {
            id: 2,
            title: "Gentle Screening",
            description:
                "We evaluate dietary patterns, gut health, and environmental triggers in a kid-friendly way.",
            icon: Search,
        },

        {
            id: 3,
            title: "Family Plan Creation",
            description:
                "You receive easy-to-implement guidance on kid-safe supplements, herbs, and tasty meals.",
            icon: Lightbulb,
        },

        {
            id: 4,
            title: "Support & Coaching",
            description:
                "We help parents adjust routines smoothly without causing mealtime battles.",
            icon: UserCheck,
        },
    ],

    /* =========================
       OUR APPROACH
    ========================= */

    approach: [
        {
            id: 1,
            title: "Safety First",
            description:
                "Using strictly pediatric-approved dosages and ultra-gentle botanical remedies.",
            icon: ShieldAlert,
        },

        {
            id: 2,
            title: "Practical & Fun",
            description:
                "Making healthy food and habits engaging and easy for kids to embrace.",
            icon: Sparkles,
        },

        {
            id: 3,
            title: "Whole-Family Focus",
            description:
                "Supporting parents so that healthy choices become a natural home environment.",
            icon: UserRound,
        },

        {
            id: 4,
            title: "Collaborative",
            description:
                "Working in harmony with your family's pediatrician or GP.",
            icon: Network,
        },
    ],

    /* =========================
       CTA
    ========================= */

    cta: {
        heading: "Nurture your family's health naturally.",

        description:
            "Schedule a family wellness consultation to build safe, natural health habits for your kids.",

        image: ""
    },
},

{
    id: 14,

    title: "Chronic Health Condition Support",

    slug: "chronic-health-condition-support",

    excerpt:
        "Integrative, long-term natural care plans to manage chronic diseases, enhance resilience, ease symptoms, and improve overall quality of life.",

    icon: Activity,
    image: "https://i.pinimg.com/1200x/55/66/77/55667790123456hijk890123456h.jpg",
    imageAlt: "chronic-health-condition-support",

    /* =========================
       HERO
    ========================= */

    hero: {
        eyebrow: "Integrative Long-Term Disease Care",

        description:
            "Compassionate, evidence-based natural management for long-term health conditions—helping you minimize symptoms, support body systems, and maintain independence.",
        
        image: "https://i.pinimg.com/1200x/66/77/88/66778801234567ijkl901234567i.jpg",
        imageAlt: "chronic-health-condition-support"
    },

    /* =========================
       OVERVIEW
    ========================= */

    overview: {
        eyebrow: "Overview",

        heading: "Support. Manage. Live Well.",

        paragraphs: [
            "Living with a chronic health condition—such as autoimmune disease, fibromyalgia, chronic fatigue syndrome, cardiovascular disease, or arthritis—can feel exhausting and overwhelming. Managing your condition requires consistent, coordinated care that looks at your whole life.",

            "Our Chronic Health Condition Support service works alongside your existing medical treatment to improve daily functioning and quality of life. By focusing on systemic inflammation reduction, mitochondrial energy support, gut integrity, and stress resilience, we help your body adapt and thrive.",
        ],

        duration: "60 - 90 minutes",

        idealFor:
            "Patients managing long-term chronic illness who want to safely incorporate supportive natural medicine alongside their standard medical treatment.",

        suitableFor: [
            "Are living with long-term chronic conditions (e.g., Autoimmune diseases, Fibromyalgia, Long COVID, Chronic Fatigue)",
            "Want to safely integrate natural supportive therapies with prescribed medical care",
            "Are seeking to reduce systemic inflammation and manage day-to-day pain or fatigue",
            "Need empathetic, long-term clinical guidance to navigate health fluctuations",
            "Want to optimize daily functional capacity and maintain independence",
        ],

        image: overviewImage,
    },

    /* =========================
       BENEFITS
    ========================= */

    benefits: [
        {
            id: 1,
            title: "Improved Quality of Life",
            description:
                "Focus on practical daily gains in energy, comfort, sleep, and physical mobility.",
            icon: HeartPulse,
        },

        {
            id: 2,
            title: "Systemic Inflammatory Support",
            description:
                "Calm chronic inflammatory processes using evidence-based diet and natural therapies.",
            icon: ShieldAlert,
        },

        {
            id: 3,
            title: "Mitochondrial & Energy Care",
            description:
                "Support cellular energy pathways to fight persistent physical and mental fatigue.",
            icon: BatteryCharging,
        },

        {
            id: 4,
            title: "Safe Medical Co-Management",
            description:
                "All natural therapies are thoroughly screened against your current prescription drugs.",
            icon: ShieldCheck,
        },
    ],

    /* =========================
       WHAT TO EXPECT
    ========================= */

    expectations: [
        {
            id: 1,
            title: "Comprehensive History",
            description:
                "We complete an exhaustive review of your medical diagnosis, drug regimens, and symptom patterns.",
            icon: ClipboardList,
        },

        {
            id: 2,
            title: "System Stress Audit",
            description:
                "We evaluate which body systems require the most immediate support to ease your load.",
            icon: Search,
        },

        {
            id: 3,
            title: "Co-Care Protocol",
            description:
                "You receive a gentle, phased plan combining nutrition, botanical support, and pacing.",
            icon: FileText,
        },

        {
            id: 4,
            title: "Long-Term Partnership",
            description:
                "We provide steady, ongoing care and protocol adjustments as your health fluctuates.",
            icon: Heart,
        },
    ],

    /* =========================
       OUR APPROACH
    ========================= */

    approach: [
        {
            id: 1,
            title: "Compassionate & Patient",
            description:
                "We understand the non-linear path of chronic illness and adapt to your pace.",
            icon: Heart,
        },

        {
            id: 2,
            title: "Coordinated Care",
            description:
                "Working collaboratively with your medical specialists and general practitioner.",
            icon: Network,
        },

        {
            id: 3,
            title: "Integrative Safety",
            description:
                "Strict adherence to drug-herb-nutrient safety screening to prevent interactions.",
            icon: Shield,
        },

        {
            id: 4,
            title: "Pacing & Resilience",
            description:
                "Helping you conserve cellular energy and prevent post-exertional crashes.",
            icon: Compass,
        },
    ],

    /* =========================
       CTA
    ========================= */

    cta: {
        heading: "Take control of your chronic health management.",

        description:
            "Book a chronic condition consultation to add supportive natural medicine to your care plan.",

        image: ""
    },
},

    /* =====================================================
       PREVENTIVE HEALTH AND WELLNESS PROGRAMMES
    ===================================================== */

 {
    id: 15,

    title: "Preventive Health and Wellness Programmes",

    slug: "preventive-health-wellness-programmes",

    excerpt:
        "Proactive, data-driven health screenings, lifestyle assessments, and risk-reduction strategies designed to catch health issues early and optimize lifelong vitality.",

    icon: ShieldCheck,

    hero: {
        eyebrow: "Proactive Health & Longevity Management",

        description:
            "A comprehensive wellness program focused on early detection, lifestyle risk mitigation, and personalized health optimization to keep you feeling your best at every stage of life.",

        heroImage: "preventiveHealthHero"
    },

    overview: {
        eyebrow: "Overview",

        heading: "Predict. Protect. Prosper.",

        paragraphs: [
            "Preventive Health and Wellness Programmes shift the healthcare focus from reacting to illness to proactively safeguarding your vitality. By identifying potential health risks before symptoms arise, we empower you with actionable strategies to maintain long-term physical, mental, and metabolic wellbeing.",

            "Our clinical team combines comprehensive health risk assessments, metabolic screening reviews, nutrition planning, and lifestyle coaching into a unified care pathway. Whether your goal is optimizing heart health, enhancing metabolic function, or extending your healthy lifespan, our evidence-backed programs provide a clear roadmap for proactive living.",
        ],

        duration: "60 - 90 minutes (Initial Assessment)",

        idealFor:
            "Individuals looking to take control of their long-term health, identify hidden risk factors early, and adopt evidence-backed preventive habits.",

        suitableFor: [
            "Want to get ahead of age-related health risks, metabolic changes, or cardiovascular issues",
            "Have a family history of chronic illness (e.g., heart disease, diabetes, hypertension)",
            "Are seeking a comprehensive baseline assessment of lifestyle, nutrition, and fitness",
            "Want clear guidance on evidence-based screening schedules and health metrics",
            "Are looking to optimize energy, mental clarity, and physical resilience long-term",
        ],

        image: overviewImage,
    },

    benefits: [
        {
            id: 1,
            title: "Early Risk Detection",
            description:
                "Identify subtle biomarkers and lifestyle risk factors long before they develop into chronic conditions.",
            icon: SearchCheck,
        },

        {
            id: 2,
            title: "Metabolic Optimization",
            description:
                "Balance energy, blood sugar regulation, and cardiovascular fitness through targeted lifestyle interventions.",
            icon: Activity,
        },

        {
            id: 3,
            title: "Longevity Roadmap",
            description:
                "Receive a personalized long-term plan encompassing nutrition, sleep, stress management, and routine screenings.",
            icon: Compass,
        },

        {
            id: 4,
            title: "Clinical Guidance",
            description:
                "Partner with healthcare professionals who track your health trajectory and update your strategies annually.",
            icon: Stethoscope,
        },
    ],

    expectations: [
        {
            id: 1,
            title: "Assess",
            description:
                "We conduct a comprehensive evaluation of your health history, baseline biomarkers, family background, and daily habits.",
            icon: ClipboardList,
        },

        {
            id: 2,
            title: "Analyze",
            description:
                "We analyze risk patterns across cardiovascular, metabolic, physical, and mental health domains.",
            icon: LineChart,
        },

        {
            id: 3,
            title: "Plan",
            description:
                "You receive a tailored preventive care protocol featuring nutritional targets, activity schedules, and lifestyle adjustments.",
            icon: Lightbulb,
        },

        {
            id: 4,
            title: "Track",
            description:
                "We establish periodic check-ins and follow-up metrics to measure your progress and refine your program over time.",
            icon: CalendarCheck,
        },
    ],

    approach: [
        {
            id: 1,
            title: "Proactive Focus",
            description:
                "We emphasize early intervention and risk reduction rather than waiting for symptoms to manifest.",
            icon: Shield,
        },

        {
            id: 2,
            title: "Evidence-Based",
            description:
                "All screening recommendations and lifestyle guidelines adhere to established preventive health standards.",
            icon: FileCheck,
        },

        {
            id: 3,
            title: "Whole-System",
            description:
                "Cardiovascular health, gut wellness, metabolic balance, and stress resilience are addressed as an interconnected whole.",
            icon: HeartPulse,
        },

        {
            id: 4,
            title: "Customized",
            description:
                "Your program reflects your unique genetic predispositions, age, gender, occupation, and personal wellness goals.",
            icon: UserRound,
        },
    ],

    cta: {
        heading: "Invest in your future health today.",

        description:
            "Schedule a preventive health assessment and unlock a personalized roadmap for lifelong health and vitality.",

        image: immuneSupportHero
    },
},
    /* =====================================================
       NATURAL PAIN AND INFLAMATION SUPPORT
    ===================================================== */

 {
    id: 16,

    title: "Natural Pain and Inflammation Support",

    slug: "natural-pain-inflammation-support",

    excerpt:
        "Evidence-based natural strategies, anti-inflammatory nutrition, and lifestyle therapies to relieve joint discomfort, ease stiffness, and promote healthy inflammatory responses.",

    icon: Flame,

    hero: {
        eyebrow: "Holistic Comfort & Mobility Management",

        description:
            "A comprehensive non-pharmacological approach combining anti-inflammatory diet recommendations, targeted botanical remedies, and therapeutic movement to support long-term joint and muscle health.",

        heroImage: overviewImage
    },

    overview: {
        eyebrow: "Overview",

        heading: "Soothe. Restore. Reclaim.",

        paragraphs: [
            "Persistent pain and systemic inflammation can significantly impact daily mobility, sleep quality, and overall health. Natural Pain and Inflammation Support provides an integrative framework to address the underlying drivers of chronic discomfort without relying solely on medication.",

            "Our clinical team evaluates your pain triggers, dietary factors, stress levels, and joint mechanics to design a safe, individualized regimen. By leveraging anti-inflammatory nutrition, evidence-aligned phytonutrients, and targeted physical therapies, we help you restore natural movement and comfort.",
        ],

        duration: "45 - 60 minutes (Initial Consultation)",

        idealFor:
            "Individuals seeking non-pharmacological, evidence-based methods to manage joint stiffness, muscle aches, or systemic inflammation safely.",

        suitableFor: [
            "Are experiencing joint stiffness, back discomfort, or recurring muscle tension",
            "Want to reduce systemic inflammation through targeted dietary and lifestyle changes",
            "Are looking for safe botanical or nutritional options that complement current pain therapies",
            "Prefer a non-invasive, whole-person approach to physical recovery and mobility",
            "Want to manage chronic inflammatory conditions under clinical oversight",
        ],

        image: overviewImage,
    },

    benefits: [
        {
            id: 1,
            title: "Joint & Muscle Relief",
            description:
                "Target localized discomfort and stiffness using evidence-aligned natural therapies and lifestyle adjustments.",
            icon: Activity,
        },

        {
            id: 2,
            title: "Anti-Inflammatory Nutrition",
            description:
                "Learn how targeted phytonutrients, omega fatty acids, and whole foods modulate body-wide inflammatory markers.",
            icon: Apple,
        },

        {
            id: 3,
            title: "Mobility & Restoration",
            description:
                "Restore functional movement patterns and joint flexibility through gentle, tailored therapeutic physical strategies.",
            icon: Move,
        },

        {
            id: 4,
            title: "Medication Coordination",
            description:
                "Ensure all natural anti-inflammatory supplements and herbs are safe to take alongside your existing prescriptions.",
            icon: ShieldCheck,
        },
    ],

    expectations: [
        {
            id: 1,
            title: "Evaluate",
            description:
                "We review your health history, pain triggers, current medications, dietary habits, and mobility goals.",
            icon: ClipboardList,
        },

        {
            id: 2,
            title: "Identify",
            description:
                "We pinpoint dietary triggers, postural stressors, and systemic factors contributing to inflammatory responses.",
            icon: Search,
        },

        {
            id: 3,
            title: "Formulate",
            description:
                "You receive an anti-inflammatory care plan featuring nutrition strategies, natural supplements, and lifestyle habits.",
            icon: Lightbulb,
        },

        {
            id: 4,
            title: "Sustain",
            description:
                "We track your pain scales and mobility over time, refining recommendations to support long-term relief.",
            icon: HeartPulse,
        },
    ],

    approach: [
        {
            id: 1,
            title: "Anti-Inflammatory",
            description:
                "We focus on food choices and natural compounds known to down-regulate inflammatory pathways naturally.",
            icon: Leaf,
        },

        {
            id: 2,
            title: "Whole-Person",
            description:
                "Pain is addressed through a combination of physical movement, stress regulation, sleep optimization, and nutrition.",
            icon: Heart,
        },

        {
            id: 3,
            title: "Safety-Screened",
            description:
                "All recommended natural supplements are thoroughly evaluated for potential contraindications or drug interactions.",
            icon: Shield,
        },

        {
            id: 4,
            title: "Individualized",
            description:
                "Strategies are custom-built around your specific diagnosis, tolerance level, and daily physical demands.",
            icon: UserRound,
        },
    ],

    cta: {
        heading: "Reclaim comfort and natural movement.",

        description:
            "Book a consultation to explore practical, evidence-backed natural strategies for managing pain and inflammation.",

        image: immuneSupportHero
    },
},
    /* =====================================================
       Health Education and Patient Coaching.
    ===================================================== */
    

    {
        id: 17,

        title: "Health Education and Patient Coaching",

        slug: "health-education-patient-coaching",

        excerpt:
            "Empowering personalized coaching and health education to help you build sustainable lifestyle habits, manage chronic conditions, and navigate your wellness journey.",

        icon: GraduationCap,

        hero: {
            eyebrow: "Empowerment & Behavioral Health Coaching",

            description:
                "A collaborative, evidence-based service that equips you with actionable health knowledge, personalized goal-setting, and practical strategies for lasting wellbeing.",

            heroImage: overviewImage
        },

        overview: {
            eyebrow: "Overview",

            heading: "Learn. Adapt. Sustain.",

            paragraphs: [
                "Health Education and Patient Coaching bridges the gap between medical advice and daily living. Understanding what to do for your health is only half the battle; knowing how to integrate those changes into a busy, real-world lifestyle is where sustainable transformation happens.",

                "Our dedicated health coaches work one-on-one with you to translate complex clinical guidance into clear, achievable habits. Whether you are managing a chronic health condition, optimizing daily energy, or looking to prevent long-term illness, we provide the accountability, tools, and education needed to help you take control of your health.",
            ],

            duration: "45 - 60 minutes (Initial Consultation)",

            idealFor:
                "Individuals seeking practical guidance, structured accountability, and evidence-based education to turn health goals into lifelong habits.",

            suitableFor: [
                "Want to turn medical recommendations into actionable, daily lifestyle routines",
                "Are managing chronic conditions (e.g., prediabetes, hypertension, fatigue, high cholesterol)",
                "Need help establishing consistent nutrition, movement, stress, or sleep habits",
                "Feel overwhelmed by conflicting health information found online or in media",
                "Are looking for long-term accountability, motivation, and practical goal-setting",
            ],

            image: overviewImage,
        },

        benefits: [
            {
                id: 1,
                title: "Actionable Guidance",
                description:
                    "Translate complex clinical recommendations into simple, manageable steps tailored to your daily schedule.",
                icon: Footprints,
            },

            {
                id: 2,
                title: "Sustainable Habits",
                description:
                    "Focus on gradual behavioral changes designed for long-term adherence rather than quick fixes.",
                icon: Repeat,
            },

            {
                id: 3,
                title: "Personal Accountability",
                description:
                    "Partner with a supportive coach who tracks your progress, celebrates wins, and helps overcome obstacles.",
                icon: UserCheck,
            },

            {
                id: 4,
                title: "Health Literacy",
                description:
                    "Gain a clear, reliable understanding of your body, nutrition, stress mechanisms, and preventative care.",
                icon: BookOpen,
            },
        ],

        expectations: [
            {
                id: 1,
                title: "Assess",
                description:
                    "We review your health history, current habits, primary motivations, and lifestyle barriers.",
                icon: ClipboardList,
            },

            {
                id: 2,
                title: "Educate",
                description:
                    "We unpack relevant health topics, clarifying conflicting advice and framing core principles.",
                icon: Lightbulb,
            },

            {
                id: 3,
                title: "Goal-Set",
                description:
                    "We co-create SMART (Specific, Measurable, Achievable, Relevant, Time-bound) health goals.",
                icon: Target,
            },

            {
                id: 4,
                title: "Support",
                description:
                    "You receive ongoing follow-up, practical strategies, and behavioral adjustments along the way.",
                icon: Compass,
            },
        ],

        approach: [
            {
                id: 1,
                title: "Patient-Centered",
                description:
                    "You are the expert on your life; recommendations are tailored around your unique preferences and values.",
                icon: Heart,
            },

            {
                id: 2,
                title: "Behavior-Based",
                description:
                    "We apply proven psychological frameworks for habit formation and sustainable motivation.",
                icon: Brain,
            },

            {
                id: 3,
                title: "Evidence-Informed",
                description:
                    "All educational materials and lifestyle recommendations are grounded in verified clinical research.",
                icon: CheckCircle2,
            },

            {
                id: 4,
                title: "Holistic Scope",
                description:
                    "Nutrition, movement, stress resilience, sleep hygiene, and mindset are addressed in harmony.",
                icon: Sparkles,
            },
        ],

        cta: {
            heading: "Take charge of your health journey.",

            description:
                "Book a patient coaching session to build practical habits and gain the clarity needed for long-term wellbeing.",

            image: overviewImage
        },
    },

      /* =====================================================
       Complementary Therapy Coordination
    ===================================================== */

    {
        id: 18,

        title: "Complementary Therapy Coordination.",

        slug: "complementary-thrapy-coordination",

        excerpt:
            "Personalized wellness guidance focused on lifestyle habits that support your body's normal defenses.",
        icon: Stethoscope,

        hero: {
        eyebrow: "Integrative Health & Care Synchronization",

        description:
            "A structured clinical service aligning non-mainstream modalities such as acupuncture, dietetics, massage, and mindfulness-safely with your primary medical care team.",

        heroImage: overviewImage,

       },

        overview: {
        eyebrow: "Overview",

        heading: "Unified. Safe. Patient-Centered.",

        paragraphs: [
            "Complementary Therapy Coordination bridges the gap between conventional clinical medicine and evidence-based complementary healthcare. Instead of navigating non-mainstream treatments independently, our service ensures every therapy you receive is vetted, safe, and aligned with your overall treatment plan.",

            "We conduct thorough safety screenings to avoid herb-drug interactions, coordinate with your primary care physicians, and pair you with licensed specialists to optimize your recovery, manage side effects, and improve overall quality of life.",
        ],

        duration: "45 - 60 minutes (Initial Consultation)",

        idealFor:
            "Patients seeking to safely combine non-mainstream therapies with conventional medical treatments under expert clinical supervision.",

        suitableFor: [
            "Are undergoing active medical treatments (e.g., oncology, neurology, chronic pain management)",
            "Want to ensure dietary supplements or herbs do not interact with prescription drugs",
            "Are seeking evidence-based relief for chronic stress, nausea, fatigue, or inflammation",
            "Prefer a coordinated care plan shared across primary doctors and complementary specialists",
            "Want access to vetted, licensed, and credentialed integrative health practitioners",
        ],

        image: overviewImage,
        },

        benefits: [
            {
                id: 1,
                title: "Safety & Screening",
                description:
                    "Prevent potential herb-drug interactions and physical contraindications with expert clinical oversight.",
                icon: ShieldAlert,
            },

            {
                id: 2,
                title: "Care Synchronization",
                description:
                    "Unify primary care physicians, specialists, and complementary therapists under one clear communication plan.",
                icon: Network,
            },

            {
                id: 3,
                title: "Vetted Specialists",
                description:
                    "Access a curated network of credentialed practitioners, including licensed acupuncturists and registered dietitians.",
                icon: UserCheck,
            },

            {
                id: 4,
                title: "Symptom Management",
                description:
                    "Address treatment side effects like nausea, muscle pain, anxiety, and fatigue using evidence-based modalities.",
                icon: HeartPulse,
            },
       ],

    expectations: [
        {
            id: 1,
            title: "Review",
            description:
                "We evaluate your current diagnosis, prescription drugs, medical history, and overall wellness goals.",
            icon: ClipboardList,
        },

        {
            id: 2,
            title: "Screen",
            description:
                "We identify evidence-based therapies while screening out unsafe interactions or contraindications.",
            icon: Search,
        },

        {
            id: 3,
            title: "Coordinate",
            description:
                "We connect with your medical doctors and match you with licensed complementary practitioners.",
            icon: Contact,
        },

        {
            id: 4,
            title: "Monitor",
            description:
                "We document progress in your healthcare records and adjust the care plan as your treatment evolves.",
            icon: Activity,
        },
       ], 

        approach: [
           {
            id: 1,
            title: "Evidence-Based",
            description:
                "We prioritize complementary modalities supported by clinical research and proven outcomes.",
            icon: FileCheck,
        },

        {
            id: 2,
            title: "Collaborative",
            description:
                "Your primary physician, oncologist, or specialist is kept informed every step of the way.",
            icon: Users,
        },
        {
            id: 3,
            title: "Safety-First",
            description:
                "Rigorous evaluations protect against adverse biological reactions and physical risks.",
            icon: Lock,
        },
        {
            id: 4,
            title: "Personalized",
            description:
                "Care schedules are tailored around your primary medical treatments and daily capacity.",
            icon: UserRound,
        },
        ],

        cta: {
        heading: "Harmonize your healthcare journey.",

        description:
            "Schedule a coordination assessment to safely integrate evidence-based complementary care into your treatment plan.",

        image: "complementaryTherapyCTA"
    },
    },
     
];

export default services;