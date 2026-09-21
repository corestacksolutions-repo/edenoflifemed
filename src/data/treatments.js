import {
  Stethoscope,
  ClipboardList,
  HeartPulse,
  TrendingUp
} from "lucide-react";

import qrma from "../assets/images/treatments/QRMA.png"



const treatments = [
  
  /*==================
    BODY MOVEMENT
   ===================*/
  {
    id: 1,
    slug: "massage",
    category: "body-movement",

    title: "Massage",

    excerpt:
      "Hands-on therapy that can help ease everyday tension and stiffness while promoting relaxation and physical comfort.",

    image: "https://i.pinimg.com/1200x/80/52/17/8052171c5245f23f8be1e3b64d20b1fe.jpg",
    imageAlt: "Massage therapy session",

    hero: {
      tagline:
        "Hands-on care to ease everyday tension, support relaxation and promote physical comfort.",
    },

    overview: {
      title: "What is Massage?",
      content:
        "Massage is a hands-on therapy that uses different techniques to work with the muscles and soft tissues of the body. Treatment can be adapted to the individual's needs, areas of concern and comfort.",
    },

    mayHelpWith: {
      title: "What Massage May Help With",
      items: [
        "Muscle tension",
        "Everyday stiffness",
        "Physical discomfort",
        "Relaxation",
        "Stress-related tension",
        "General physical wellbeing",
      ],
    },

    session: {
      title: "What Happens During a Session?",
      steps: [
        {
          number: 1,
          title: "Consultation",
          description:
            "Your practitioner discusses your concerns, areas of discomfort and what you would like from the session.",
        },
        {
          number: 2,
          title: "Preparation",
          description:
            "You are guided into a comfortable position and the practitioner explains what will happen.",
        },
        {
          number: 3,
          title: "Massage",
          description:
            "Hands-on techniques are applied to the relevant areas, with pressure and techniques adjusted according to your needs and comfort.",
        },
        {
          number: 4,
          title: "After the Session",
          description:
            "You can discuss how you feel after the treatment and any appropriate recommendations for continuing your care.",
        },
      ],
    },

    suitability: {
      title: "Is Massage Right for You?",
      content:
        "Massage may be worth discussing if you are experiencing everyday muscle tension, stiffness, physical discomfort or are looking for support with relaxation. Your practitioner can consider your individual circumstances before recommending an appropriate approach.",
    },

    considerations: {
      title: "Important Considerations",
      content:
        "Massage is not appropriate for every situation. Certain injuries, illnesses, infections, skin conditions or other health circumstances may require treatment to be modified, postponed or avoided. Discuss your health circumstances with your practitioner before treatment.",
    },

    expectations: {
      title: "What to Expect",

      before: [
        "Wear comfortable clothing where appropriate.",
        "Allow enough time for your consultation.",
        "Tell the practitioner about relevant health concerns.",
      ],

      during: [
        "Your comfort matters throughout the session.",
        "Pressure and positioning can be adjusted according to your comfort.",
        "Ask questions whenever something is unclear.",
      ],

      after: [
        "Follow any advice provided by your practitioner.",
        "Discuss any concerns you have following treatment.",
      ],
    },

    relatedTreatments: [
      "physiotherapy",
      "hydrotherapy",
      "yoga-meditation",
    ],

    cta: {
      title: "Considering Massage?",
      description:
        "Talk to our team about your needs and find out whether massage is an appropriate option for you.",
      primaryLabel: "Book a Consultation",
      secondaryLabel: "Contact Us",
    },
  },
  {
    id: 2,
    slug: "physiotherapy",
    category: "body-movement",

    title: "Physiotherapy",

    excerpt:
        "Assessment and physical treatment designed to support movement, strength, mobility and recovery from injury or physical conditions.",

    image: "https://i.pinimg.com/1200x/5e/f7/05/5ef705717eba021d45f504e6a44d1e33.jpg",
    imageAlt: "Physiotherapy treatment session",

    hero: {
        tagline:
        "Personalised physical care to support movement, recovery and everyday function.",
    },

    overview: {
        title: "What is Physiotherapy?",
        content:
        "Physiotherapy is a form of healthcare that focuses on movement, physical function and recovery. A physiotherapist assesses your individual needs and may use exercises, hands-on techniques, movement advice and other appropriate approaches to support your recovery and physical wellbeing.",
    },

    mayHelpWith: {
        title: "What Physiotherapy May Help With",
        items: [
        "Pain and physical discomfort",
        "Muscle weakness",
        "Reduced mobility",
        "Injury recovery",
        "Joint and muscle problems",
        "Movement difficulties",
        ],
    },

    session: {
        title: "What Happens During a Session?",
        steps: [
        {
            number: 1,
            title: "Assessment",
            description:
            "Your physiotherapist discusses your concerns and assesses your movement, strength, mobility and other relevant physical factors.",
        },
        {
            number: 2,
            title: "Treatment Plan",
            description:
            "Your assessment helps the physiotherapist determine an appropriate approach based on your condition, needs and goals.",
        },
        {
            number: 3,
            title: "Treatment",
            description:
            "Your session may include therapeutic exercises, manual techniques, movement training or other appropriate forms of physical treatment.",
        },
        {
            number: 4,
            title: "Progress & Guidance",
            description:
            "Your progress can be reviewed over time, with appropriate advice and exercises to support your recovery and everyday function.",
        },
        ],
    },

    suitability: {
        title: "Is Physiotherapy Right for You?",
        content:
        "Physiotherapy may be worth discussing if you are experiencing difficulties with movement, strength, mobility, pain or recovery following an injury or physical condition. Your physiotherapist can assess your circumstances and determine an appropriate approach.",
    },

    considerations: {
        title: "Important Considerations",
        content:
        "The appropriate form of physiotherapy depends on your individual condition and circumstances. Tell your physiotherapist about existing injuries, medical conditions, recent procedures and other treatments you are receiving so your care can be planned appropriately.",
    },

    expectations: {
        title: "What to Expect",

        before: [
        "Be prepared to discuss your symptoms, concerns and physical limitations.",
        "Tell your physiotherapist about relevant medical conditions or previous injuries.",
        "Wear clothing that allows comfortable movement where appropriate.",
        ],

        during: [
        "Your treatment will be guided by your individual assessment.",
        "Exercises and techniques can be adjusted according to your ability and comfort.",
        "You can ask questions and discuss any discomfort during treatment.",
        ],

        after: [
        "Follow any exercises or advice provided by your physiotherapist.",
        "Monitor your progress and communicate any concerns during subsequent visits.",
        ],
    },

    relatedTreatments: [
        "massage",
        "hydrotherapy",
        "yoga-meditation",
    ],

    cta: {
        title: "Considering Physiotherapy?",
        description:
        "Talk to our team about your physical needs and find out how physiotherapy may support your movement and recovery.",
        primaryLabel: "Book a Consultation",
        secondaryLabel: "Contact Us",
    },
},

{
  id: 3,
  slug: "acupuncture",
  category: "body-movement",

  title: "Acupuncture",

  excerpt:
    "A traditional therapy involving the careful placement of fine needles at specific points on the body as part of personalised care.",

  image: "https://i.pinimg.com/236x/48/bd/95/48bd95967b6a11f9f335f0346ca4fdf0.jpg",
  imageAlt: "Acupuncture treatment session",

  hero: {
    tagline:
      "Traditional needle-based therapy provided according to your individual needs and treatment goals.",
  },

  overview: {
    title: "What is Acupuncture?",
    content:
      "Acupuncture involves the careful placement of fine, sterile needles at specific points on the body. It is commonly used as a complementary approach for certain types of pain, muscle tension, relaxation and general wellbeing, with treatment tailored to the individual.",
  },

  mayHelpWith: {
    title: "What Acupuncture May Help With",
    items: [
      "Certain types of pain",
      "Muscle tension",
      "Physical discomfort",
      "Stress and relaxation",
      "General wellbeing",
      "Support alongside other appropriate care",
    ],
  },

  session: {
    title: "What Happens During a Session?",
    steps: [
      {
        number: 1,
        title: "Consultation",
        description:
          "Your practitioner discusses your concerns, health circumstances and what you hope to achieve from treatment.",
      },
      {
        number: 2,
        title: "Preparation",
        description:
          "You are positioned comfortably and the practitioner identifies the appropriate treatment areas.",
      },
      {
        number: 3,
        title: "Acupuncture",
        description:
          "Fine, sterile needles are carefully placed at selected points on the body. Treatment is adjusted according to your individual needs.",
      },
      {
        number: 4,
        title: "After the Session",
        description:
          "The needles are removed and you can discuss how you feel following the treatment and any appropriate guidance for your care.",
      },
    ],
  },

  suitability: {
    title: "Is Acupuncture Right for You?",
    content:
      "Acupuncture may be worth discussing if you are looking for complementary support for certain types of pain, muscle tension, relaxation or other appropriate health concerns. Your practitioner can consider your individual circumstances before treatment.",
  },

  considerations: {
    title: "Important Considerations",
    content:
      "Acupuncture may not be appropriate for everyone or for every condition. Tell your practitioner about relevant medical conditions, medicines, pregnancy, bleeding disorders, allergies or other circumstances that may affect your treatment.",
  },

  expectations: {
    title: "What to Expect",

    before: [
      "Discuss your health concerns and relevant medical history with your practitioner.",
      "Tell the practitioner about medicines or other treatments you are receiving.",
      "Wear clothing that allows access to the areas being treated where appropriate.",
    ],

    during: [
      "Fine sterile needles are inserted at selected points.",
      "You may experience sensations such as mild pressure, tingling or brief discomfort.",
      "Tell your practitioner if you feel uncomfortable at any point.",
    ],

    after: [
      "Needles are carefully removed after treatment.",
      "Take note of how you feel following the session.",
      "Discuss any concerns or unusual reactions with your practitioner.",
    ],
  },

  relatedTreatments: [
    "massage",
    "hydrotherapy",
    "yoga-meditation",
  ],

  cta: {
    title: "Considering Acupuncture?",
    description:
      "Talk to our team about your health concerns and find out whether acupuncture may be appropriate for you.",
    primaryLabel: "Book a Consultation",
    secondaryLabel: "Contact Us",
  },
},

{
  id: 4,
  slug: "hydrotherapy",
  category: "body-movement",

  title: "Hydrotherapy",

  excerpt:
    "Therapeutic use of water to support movement, physical comfort, relaxation and appropriate rehabilitation.",

  image: "https://i.pinimg.com/1200x/41/4d/22/414d226f1bac4eab778a69bd9441436e.jpg",
  imageAlt: "Hydrotherapy treatment session",

  hero: {
    tagline:
      "Using the properties of water to support comfortable movement, physical function and relaxation.",
  },

  overview: {
    title: "What is Hydrotherapy?",
    content:
      "Hydrotherapy uses water as part of therapeutic care. Depending on the treatment, the properties of warm or cool water can be used to support movement, reduce physical discomfort, encourage relaxation and assist appropriate rehabilitation.",
  },

  mayHelpWith: {
    title: "What Hydrotherapy May Help With",
    items: [
      "Movement and mobility",
      "Physical discomfort",
      "Muscle tension",
      "Relaxation",
      "Physical rehabilitation",
      "General physical comfort",
    ],
  },

  session: {
    title: "What Happens During a Session?",
    steps: [
      {
        number: 1,
        title: "Assessment",
        description:
          "Your practitioner discusses your needs and considers your physical condition and treatment goals.",
      },
      {
        number: 2,
        title: "Preparation",
        description:
          "You are introduced to the treatment environment and given guidance on how the water-based session will be carried out.",
      },
      {
        number: 3,
        title: "Hydrotherapy",
        description:
          "Water and its physical properties are used through appropriate exercises, movement or therapeutic applications suited to your needs.",
      },
      {
        number: 4,
        title: "Review",
        description:
          "Your response to the session can be discussed and future care adjusted where appropriate.",
      },
    ],
  },

  suitability: {
    title: "Is Hydrotherapy Right for You?",
    content:
      "Hydrotherapy may be worth discussing if you have difficulty with movement, physical discomfort or are working towards improved mobility or physical function. Your practitioner can assess your circumstances and determine whether water-based therapy is appropriate.",
  },

  considerations: {
    title: "Important Considerations",
    content:
      "Water-based therapy may not be suitable for everyone. Your practitioner should be informed about relevant medical conditions, injuries, skin conditions, infections or other circumstances that may affect your ability to participate safely.",
  },

  expectations: {
    title: "What to Expect",

    before: [
      "Discuss your health concerns and physical limitations with your practitioner.",
      "Follow any preparation instructions provided before your session.",
      "Wear appropriate clothing for the treatment environment.",
    ],

    during: [
      "You will receive guidance throughout the session.",
      "Activities and treatment techniques can be adapted to your physical ability.",
      "Tell your practitioner if you experience discomfort or feel unwell.",
    ],

    after: [
      "Allow yourself time to recover after the session where appropriate.",
      "Follow any movement or care advice provided.",
      "Discuss any concerns with your practitioner.",
    ],
  },

  relatedTreatments: [
    "physiotherapy",
    "massage",
    "yoga-meditation",
  ],

  cta: {
    title: "Considering Hydrotherapy?",
    description:
      "Talk to our team about your physical needs and find out whether hydrotherapy may be suitable for you.",
    primaryLabel: "Book a Consultation",
    secondaryLabel: "Contact Us",
  },
},

{
  id: 5,
  slug: "yoga-meditation",
  category: "body-movement",

  title: "Yoga & Meditation",

  excerpt:
    "Movement, breathing and meditation practices that support relaxation, flexibility, body awareness and mind-body wellbeing.",

  image: "https://i.pinimg.com/736x/88/66/0f/88660f8ccaec0df93224ca5103f7d72f.jpg",
  imageAlt: "Yoga and meditation session",

  hero: {
    tagline:
      "Movement, breathing and mindfulness practices to support relaxation and mind-body wellbeing.",
  },

  overview: {
    title: "What are Yoga & Meditation?",
    content:
      "Yoga and meditation bring together physical movement, breathing, relaxation and focused attention. Sessions can be adapted to different levels of experience and physical ability, with an emphasis on developing greater body awareness and supporting overall wellbeing.",
  },

  mayHelpWith: {
    title: "What Yoga & Meditation May Help With",
    items: [
      "Relaxation",
      "Stress management",
      "Flexibility",
      "Body awareness",
      "Breathing and mindful attention",
      "General mind-body wellbeing",
    ],
  },

  session: {
    title: "What Happens During a Session?",
    steps: [
      {
        number: 1,
        title: "Introduction",
        description:
          "Your practitioner or instructor introduces the session and considers your experience, ability and any relevant physical limitations.",
      },
      {
        number: 2,
        title: "Movement & Breathing",
        description:
          "The session may include gentle physical movements, stretches and breathing practices appropriate to your level.",
      },
      {
        number: 3,
        title: "Meditation & Relaxation",
        description:
          "Focused attention, breathing and relaxation practices are used to encourage calm and greater awareness of the body and mind.",
      },
      {
        number: 4,
        title: "Closing",
        description:
          "The session concludes with a period of relaxation and an opportunity to reflect on the practice.",
      },
    ],
  },

  suitability: {
    title: "Is Yoga & Meditation Right for You?",
    content:
      "Yoga and meditation can be considered by people looking to incorporate movement, relaxation, breathing or mindfulness practices into their routine. Sessions can be adapted according to experience and physical ability.",
  },

  considerations: {
    title: "Important Considerations",
    content:
      "Some movements or positions may not be appropriate for people with particular injuries or physical conditions. Tell your instructor about relevant limitations or health concerns so activities can be adapted appropriately.",
  },

  expectations: {
    title: "What to Expect",

    before: [
      "Wear comfortable clothing that allows you to move freely.",
      "Tell your instructor about relevant injuries or physical limitations.",
      "Bring any equipment you have been asked to use for the session.",
    ],

    during: [
      "Movements and exercises can be adapted to your ability.",
      "You are encouraged to work within your own comfortable range.",
      "Ask for modifications if a movement causes discomfort.",
    ],

    after: [
      "Take a moment to relax and notice how you feel after the session.",
      "Practise any appropriate techniques or exercises recommended for continued use.",
    ],
  },

  relatedTreatments: [
    "massage",
    "hydrotherapy",
    "acupuncture",
  ],

  cta: {
    title: "Ready to Explore Yoga & Meditation?",
    description:
      "Talk to our team about your needs and find out how our yoga and meditation sessions can fit into your wellbeing routine.",
    primaryLabel: "Book a Consultation",
    secondaryLabel: "Contact Us",
  },
},

{
  id: 6,
  slug: "cupping",
  category: "body-movement",

  title: "Cupping",

  excerpt:
    "A traditional therapy that uses specially placed cups to create gentle suction on the skin, commonly used for muscle tension, stiffness and relaxation.",

  image: "https://i.pinimg.com/736x/97/50/48/975048a7f2cba0ee059d3f9fb7771006.jpg",
  imageAlt: "Cupping therapy treatment",

  hero: {
    tagline:
      "Traditional cupping therapy provided carefully and according to your individual needs.",
  },

  overview: {
    title: "What is Cupping?",
    content:
      "Cupping is a traditional therapy that uses specially placed cups to create gentle suction on the skin. It is commonly used as part of care for muscle tension and stiffness and may also be used to encourage relaxation and physical comfort.",
  },

  mayHelpWith: {
    title: "What Cupping May Help With",
    items: [
      "Muscle tension",
      "Everyday stiffness",
      "Physical discomfort",
      "Relaxation",
      "Muscle-related concerns",
      "General physical comfort",
    ],
  },

  session: {
    title: "What Happens During a Session?",
    steps: [
      {
        number: 1,
        title: "Consultation",
        description:
          "Your practitioner discusses your concerns, health circumstances and the areas you would like addressed.",
      },
      {
        number: 2,
        title: "Preparation",
        description:
          "The treatment area is prepared and the practitioner explains how the cups will be placed.",
      },
      {
        number: 3,
        title: "Cupping",
        description:
          "Specially designed cups are placed on selected areas of the skin to create controlled suction. The technique and duration are adjusted according to your needs.",
      },
      {
        number: 4,
        title: "After the Session",
        description:
          "The cups are removed and your practitioner can discuss what to expect following treatment and any appropriate aftercare.",
      },
    ],
  },

  suitability: {
    title: "Is Cupping Right for You?",
    content:
      "Cupping may be worth discussing if you are experiencing muscle tension, stiffness or physical discomfort, or are interested in a traditional approach to relaxation and physical wellbeing. Your practitioner can consider your individual circumstances before treatment.",
  },

  considerations: {
    title: "Important Considerations",
    content:
      "Cupping is not appropriate for every person or situation. Tell your practitioner about relevant medical conditions, skin problems, bleeding disorders, medicines or other circumstances that may affect treatment.",
  },

  expectations: {
    title: "What to Expect",

    before: [
      "Discuss your concerns and relevant health information with your practitioner.",
      "Tell the practitioner about medicines or treatments you are receiving.",
      "Wear clothing that allows access to the areas being treated where appropriate.",
    ],

    during: [
      "Cups are placed on selected areas of the skin.",
      "You will experience a pulling or suction sensation.",
      "Tell your practitioner if the sensation becomes uncomfortable.",
    ],

    after: [
      "Temporary circular marks may remain on the skin after treatment.",
      "Follow any aftercare guidance provided by your practitioner.",
      "Discuss any unexpected or concerning reaction with your practitioner.",
    ],
  },

  relatedTreatments: [
    "massage",
    "acupuncture",
    "hydrotherapy",
  ],

  cta: {
    title: "Considering Cupping?",
    description:
      "Talk to our team about your needs and find out whether cupping may be an appropriate option for you.",
    primaryLabel: "Book a Consultation",
    secondaryLabel: "Contact Us",
  },
},



/*==========================
  THERAPEUTIC TECHNOLOGIES
  =========================*/



  {
  id: 7,
  slug: "tens",
  category: "therapeutic-technologies",

  title: "TENS",

  excerpt:
    "A non-invasive therapy that uses mild electrical impulses through skin electrodes as part of care for certain types of pain and muscle discomfort.",

  image: "https://i.pinimg.com/1200x/78/a1/d1/78a1d1e90a996fa183a6cc53501251e4.jpg",
  imageAlt: "TENS therapy treatment",

  hero: {
    tagline:
      "Non-invasive electrical stimulation used as part of personalised care for pain and physical discomfort.",
  },

  overview: {
    title: "What is TENS?",
    content:
      "Transcutaneous Electrical Nerve Stimulation (TENS) is a non-invasive therapy that delivers mild electrical impulses through electrodes placed on the skin. The intensity and settings are adjusted according to the individual and the area being treated.",
  },

  technology: {
    title: "How Does TENS Work?",
    content:
      "A TENS device sends controlled electrical impulses through electrodes placed on the skin. Different settings can be used depending on the purpose of treatment and individual comfort. TENS is generally used as part of a broader approach to managing certain types of pain or muscle discomfort.",
  },

  mayHelpWith: {
    title: "What TENS May Help With",
    items: [
      "Certain types of pain",
      "Muscle discomfort",
      "Muscle tension",
      "Temporary pain relief",
      "Physical comfort during recovery",
      "Support alongside other appropriate care",
    ],
  },

  session: {
    title: "What Happens During a Session?",
    steps: [
      {
        number: 1,
        title: "Assessment",
        description:
          "Your practitioner discusses your concerns and considers the area being treated and whether electrical stimulation is appropriate for you.",
      },
      {
        number: 2,
        title: "Electrode Placement",
        description:
          "Small electrodes are placed on appropriate areas of the skin according to the treatment plan.",
      },
      {
        number: 3,
        title: "Electrical Stimulation",
        description:
          "The TENS device delivers controlled electrical impulses. The settings are adjusted according to the treatment purpose and your comfort.",
      },
      {
        number: 4,
        title: "Review",
        description:
          "Your response to the treatment is discussed and the approach can be adjusted during future sessions where appropriate.",
      },
    ],
  },

  suitability: {
    title: "Is TENS Right for You?",
    content:
      "TENS may be worth discussing if you are experiencing certain types of pain or muscle discomfort and are looking for a non-invasive approach that may be used alongside other forms of care. Your practitioner can assess whether it is appropriate for your circumstances.",
  },

  considerations: {
    title: "Important Considerations",
    content:
      "TENS is not suitable for everyone or for every area of the body. Tell your practitioner about relevant medical conditions, implanted electrical devices, pregnancy, skin problems, medicines or other circumstances that may affect whether TENS is appropriate.",
  },

  expectations: {
    title: "What to Expect",

    before: [
      "Discuss your symptoms and relevant health information with your practitioner.",
      "Tell your practitioner about implanted electrical devices, pregnancy or other relevant medical conditions.",
      "Ensure the skin in the treatment area is clean and free from products that may interfere with electrode placement.",
    ],

    during: [
      "Small electrodes are placed on the skin in the treatment area.",
      "You will feel a mild electrical sensation as the device operates.",
      "The intensity can be adjusted according to your comfort.",
      "Tell your practitioner if the stimulation feels painful or uncomfortable.",
    ],

    after: [
      "The electrodes are removed after treatment.",
      "Your practitioner may discuss how you responded to the session.",
      "Monitor the treated area and report any unusual skin reaction or other concern.",
    ],
  },

  relatedTreatments: [
    "physiotherapy",
    "massage",
    "acupuncture",
  ],

  cta: {
    title: "Considering TENS?",
    description:
      "Talk to our team about your symptoms and find out whether TENS may be appropriate as part of your care.",
    primaryLabel: "Book a Consultation",
    secondaryLabel: "Contact Us",
  },
},

{
  id: 8,
  slug: "phototherapy",
  category: "therapeutic-technologies",

  title: "Phototherapy",

  excerpt:
    "A controlled light-based therapy used as part of care for selected skin conditions and other appropriate therapeutic applications.",

  image: "https://i.pinimg.com/236x/f3/b1/b6/f3b1b63955f8dcf7b0e730c0605b9d84.jpg",
  imageAlt: "Phototherapy treatment session",

  hero: {
    tagline:
      "Controlled light-based therapy provided according to your skin condition and individual treatment needs.",
  },

  overview: {
    title: "What is Phototherapy?",
    content:
      "Phototherapy uses controlled exposure to specific wavelengths of light as part of the management of selected skin conditions. The type, intensity and duration of light exposure depend on the treatment approach and the individual's needs.",
  },

  technology: {
    title: "How Does Phototherapy Work?",
    content:
      "Phototherapy devices deliver controlled wavelengths of light to a specific treatment area. Different forms of phototherapy use different wavelengths and treatment protocols. Your practitioner determines the appropriate approach based on the condition being addressed and your individual circumstances.",
  },

  mayHelpWith: {
    title: "What Phototherapy May Help With",
    items: [
      "Selected skin conditions",
      "Certain inflammatory skin concerns",
      "Some pigment-related skin conditions",
      "Skin-related symptoms where light therapy is appropriate",
      "Support as part of a broader treatment plan",
    ],
  },

  session: {
    title: "What Happens During a Session?",
    steps: [
      {
        number: 1,
        title: "Assessment",
        description:
          "Your practitioner discusses your skin concerns and considers whether phototherapy is appropriate for your condition.",
      },
      {
        number: 2,
        title: "Preparation",
        description:
          "The treatment area is prepared and you are given guidance on what to expect during exposure to the therapeutic light.",
      },
      {
        number: 3,
        title: "Light Treatment",
        description:
          "The selected area is exposed to controlled light for a prescribed period and at an appropriate intensity.",
      },
      {
        number: 4,
        title: "Review",
        description:
          "Your response is monitored over time and subsequent treatment can be adjusted according to your progress and clinical needs.",
      },
    ],
  },

  suitability: {
    title: "Is Phototherapy Right for You?",
    content:
      "Phototherapy may be considered for certain skin conditions where controlled light treatment is appropriate. Your practitioner should assess your skin condition, medical history and other relevant factors before recommending treatment.",
  },

  considerations: {
    title: "Important Considerations",
    content:
      "Phototherapy is not appropriate for every skin condition or every person. Tell your practitioner about medicines, skin sensitivity, previous reactions to light, existing skin conditions and other relevant health circumstances. Appropriate eye protection should be used when required.",
  },

  expectations: {
    title: "What to Expect",

    before: [
      "Discuss your skin concerns and relevant medical history with your practitioner.",
      "Tell your practitioner about medicines or products that may increase sensitivity to light.",
      "Follow any preparation instructions provided before treatment.",
    ],

    during: [
      "The treatment area is exposed to controlled therapeutic light.",
      "Treatment duration and intensity are determined according to the treatment plan.",
      "Protective measures, including eye protection, may be required depending on the treatment.",
      "Tell your practitioner if you experience significant discomfort or an unexpected reaction.",
    ],

    after: [
      "Follow any skin-care or exposure guidance provided by your practitioner.",
      "Monitor the treated area for changes or irritation.",
      "Attend follow-up sessions as recommended if a course of treatment is being undertaken.",
    ],
  },

  relatedTreatments: [
    "mud-therapy",
    "phytotherapeutic-medicine",
    "tera-hertz-therapy",
  ],

  cta: {
    title: "Considering Phototherapy?",
    description:
      "Talk to our team about your skin concerns and find out whether phototherapy may be appropriate for you.",
    primaryLabel: "Book a Consultation",
    secondaryLabel: "Contact Us",
  },
},

{
  id: 9,
  slug: "tera-hertz-therapy",
  category: "therapeutic-technologies",

  title: "TeraHertz Therapy",

  excerpt:
    "A non-invasive technology-based therapy using electromagnetic waves in the terahertz range as part of personalised wellness care.",

  image: "https://i.pinimg.com/1200x/1e/f1/a3/1ef1a38afb1b069d2ce821241fa64671.jpg",
  imageAlt: "TeraHertz therapy treatment",

  hero: {
    tagline:
      "A non-invasive technology-based approach offered according to individual needs and treatment goals.",
  },

  overview: {
    title: "What is TeraHertz Therapy?",
    content:
      "TeraHertz therapy refers to the use of electromagnetic waves in the terahertz frequency range as part of a non-invasive therapeutic approach. The technology and methods used can vary, so your practitioner should explain the specific equipment, intended use and treatment approach provided at Eden of Life.",
  },

  technology: {
    title: "How Does TeraHertz Therapy Work?",
    content:
      "TeraHertz technology operates using electromagnetic radiation within the terahertz frequency range. Depending on the device and treatment protocol, the technology is applied without invasive procedures. The proposed applications and evidence can vary between devices and conditions, so treatment should be discussed with a qualified practitioner before use.",
  },

  mayHelpWith: {
    title: "What TeraHertz Therapy May Help With",
    items: [
      "Relaxation and general wellbeing",
      "Physical comfort",
      "Support as part of an individualised wellness programme",
      "Complementary care alongside appropriate treatment",
    ],
  },

  session: {
    title: "What Happens During a Session?",
    steps: [
      {
        number: 1,
        title: "Consultation",
        description:
          "Your practitioner discusses your concerns, health circumstances and what you hope to achieve from the session.",
      },
      {
        number: 2,
        title: "Preparation",
        description:
          "The practitioner explains the equipment and treatment process and prepares you for the session according to the specific technology being used.",
      },
      {
        number: 3,
        title: "Treatment",
        description:
          "The device is applied according to the manufacturer's intended use and the practitioner's treatment protocol.",
      },
      {
        number: 4,
        title: "Review",
        description:
          "Your experience and response are discussed, and future sessions can be considered according to your individual needs.",
      },
    ],
  },

  suitability: {
    title: "Is TeraHertz Therapy Right for You?",
    content:
      "TeraHertz therapy may be considered as a complementary or wellness-focused approach depending on the technology and intended application. Your practitioner should discuss the purpose of treatment, available evidence and your individual circumstances before treatment.",
  },

  considerations: {
    title: "Important Considerations",
    content:
      "TeraHertz therapy should not be presented as a replacement for medical diagnosis, emergency care or evidence-based treatment. Tell your practitioner about relevant medical conditions, pregnancy, implanted devices, medicines and other treatments so that the suitability of the technology can be considered appropriately.",
  },

  expectations: {
    title: "What to Expect",

    before: [
      "Discuss your health concerns and treatment goals with your practitioner.",
      "Ask about the specific technology being used and its intended purpose.",
      "Tell your practitioner about relevant medical conditions, medicines and other treatments.",
    ],

    during: [
      "The practitioner will explain how the device is being used during the session.",
      "Treatment is non-invasive and is provided according to the equipment and treatment protocol.",
      "Tell your practitioner if you experience discomfort or have concerns during the session.",
    ],

    after: [
      "Discuss your experience and any concerns with your practitioner.",
      "Follow any guidance provided after the session.",
      "Do not use the treatment as a substitute for medical assessment or treatment where these are required.",
    ],
  },

  relatedTreatments: [
    "tens",
    "phototherapy",
    "qrma",
  ],

  cta: {
    title: "Interested in TeraHertz Therapy?",
    description:
      "Talk to our team to understand the technology, its intended use and whether it may be appropriate for your needs.",
    primaryLabel: "Book a Consultation",
    secondaryLabel: "Contact Us",
  },
},

/*===================
  NATURAL AND PLANT
======================*/

{
  id: 10,
  slug: "mud-therapy",
  category: "natural-plant",

  title: "Mud Therapy",

  excerpt:
    "A traditional therapeutic approach using specially prepared mud as part of care for relaxation, physical comfort and selected wellness needs.",

  image: "https://i.pinimg.com/736x/db/1b/40/db1b4074f45bc20b80bb1e37f7f4d593.jpg",
  imageAlt: "Mud therapy treatment",

  hero: {
    tagline:
      "A natural therapy using specially prepared mud as part of personalised physical and wellness care.",
  },

  overview: {
    title: "What is Mud Therapy?",
    content:
      "Mud therapy involves the therapeutic application of specially prepared mud or mineral-rich materials to selected areas of the body. Depending on the treatment approach, mud may be applied to provide warmth, promote relaxation and support physical comfort.",
  },

  approach: {
    title: "How is Mud Therapy Used?",
    content:
      "The mud used for treatment is prepared and applied according to the intended purpose of the session. It may be applied to specific areas of the body for a set period before being removed. The type of mud, application method and duration can vary according to individual needs.",
  },

  mayHelpWith: {
    title: "What Mud Therapy May Help With",
    items: [
      "Muscle tension and stiffness",
      "Physical discomfort",
      "Relaxation",
      "General physical comfort",
      "Wellness and self-care",
      "Support alongside other appropriate care",
    ],
  },

  session: {
    title: "What Happens During a Session?",
    steps: [
      {
        number: 1,
        title: "Consultation",
        description:
          "Your practitioner discusses your concerns, relevant health information and what you hope to achieve from the session.",
      },
      {
        number: 2,
        title: "Preparation",
        description:
          "The treatment area is prepared and your practitioner explains how the mud will be applied and how long it will remain in place.",
      },
      {
        number: 3,
        title: "Mud Application",
        description:
          "The prepared mud is applied to the selected area according to the treatment approach. You are monitored throughout the session for comfort.",
      },
      {
        number: 4,
        title: "Removal & Review",
        description:
          "The mud is removed after the recommended period and the treated area is cleaned. Your practitioner can discuss your experience and any appropriate aftercare.",
      },
    ],
  },

  suitability: {
    title: "Is Mud Therapy Right for You?",
    content:
      "Mud therapy may be worth discussing if you are looking for a natural approach to relaxation, physical comfort or general wellness. Your practitioner can consider your individual circumstances and determine whether the treatment is appropriate.",
  },

  considerations: {
    title: "Important Considerations",
    content:
      "Natural materials are not automatically suitable for everyone. Tell your practitioner about skin conditions, allergies, infections, injuries, pregnancy, medical conditions or other circumstances that may affect treatment. The mud used should be appropriately prepared and handled.",
  },

  expectations: {
    title: "What to Expect",

    before: [
      "Discuss your health concerns and relevant medical history with your practitioner.",
      "Tell your practitioner about allergies or skin sensitivities.",
      "Follow any preparation instructions provided before the session.",
    ],

    during: [
      "Prepared mud is applied to selected areas of the body.",
      "You may experience warmth, coolness or a feeling of pressure depending on the application.",
      "The treatment area and duration are adjusted according to your needs.",
      "Tell your practitioner if you experience irritation or discomfort.",
    ],

    after: [
      "The mud is removed and the treated area is cleaned.",
      "Follow any aftercare guidance provided by your practitioner.",
      "Monitor the treated area and report any unexpected skin reaction.",
    ],
  },

  relatedTreatments: [
    "hydrotherapy",
    "massage",
    "phytotherapeutic-medicine",
  ],

  cta: {
    title: "Considering Mud Therapy?",
    description:
      "Talk to our team about your needs and find out whether mud therapy may be an appropriate part of your care.",
    primaryLabel: "Book a Consultation",
    secondaryLabel: "Contact Us",
  },
},

{
  id: 11,
  slug: "phytotherapeutic-medicine",
  category: "natural-plant",

  title: "Phytotherapeutic Medicine",

  excerpt:
    "Plant-based healthcare using medicinal plants and plant-derived preparations as part of personalised care.",

  image: "https://i.pinimg.com/1200x/a0/7b/84/a07b848f0363f9f6d3a7ad350c65cc25.jpg",
  imageAlt: "Phytotherapeutic medicine",

  hero: {
    tagline:
      "Personalised plant-based care using medicinal plants and preparations according to individual health needs.",
  },

  overview: {
    title: "What is Phytotherapeutic Medicine?",
    content:
      "Phytotherapeutic medicine involves the use of medicinal plants and plant-derived preparations as part of healthcare. Depending on the individual's needs, preparations may include herbs, extracts or other plant-based formulations selected and used under appropriate professional guidance.",
  },

  approach: {
    title: "How is Phytotherapeutic Medicine Used?",
    content:
      "Care begins with understanding the individual's health concerns, circumstances and existing treatments. Appropriate plant-based preparations may then be selected according to the intended purpose, with guidance provided on how they should be used and monitored.",
  },

  mayHelpWith: {
    title: "What Phytotherapeutic Medicine May Help With",
    items: [
      "Selected health and wellness concerns",
      "Support for general wellbeing",
      "Digestive and nutritional support",
      "Complementary support alongside other appropriate care",
      "Individualised plant-based health management",
    ],
  },

  session: {
    title: "What Happens During a Consultation?",
    steps: [
      {
        number: 1,
        title: "Health Consultation",
        description:
          "Your practitioner discusses your health concerns, lifestyle, relevant medical history and the goals you have for your care.",
      },
      {
        number: 2,
        title: "Assessment",
        description:
          "Your practitioner considers your circumstances, existing treatments and other relevant factors before discussing appropriate plant-based options.",
      },
      {
        number: 3,
        title: "Plant-Based Plan",
        description:
          "Where appropriate, suitable medicinal plants or plant-derived preparations are selected and guidance is provided on their use.",
      },
      {
        number: 4,
        title: "Monitoring & Review",
        description:
          "Your response to the approach can be reviewed over time and the plan adjusted where appropriate.",
      },
    ],
  },

  suitability: {
    title: "Is Phytotherapeutic Medicine Right for You?",
    content:
      "Phytotherapeutic medicine may be considered by people interested in incorporating plant-based approaches into their healthcare. A consultation is important to determine whether a particular preparation is appropriate for your health circumstances.",
  },

  considerations: {
    title: "Important Considerations",
    content:
      "Plant-based medicines can have active effects and are not automatically safe simply because they are natural. Some herbs and plant preparations can interact with medicines or may not be appropriate during pregnancy, for certain medical conditions or for particular individuals. Professional guidance is therefore important.",
  },

  expectations: {
    title: "What to Expect",

    before: [
      "Prepare to discuss your health concerns and treatment goals.",
      "Provide information about medicines, supplements and other treatments you are currently using.",
      "Tell your practitioner about known allergies and relevant medical conditions.",
    ],

    during: [
      "Your practitioner will discuss your health circumstances and relevant lifestyle factors.",
      "Plant-based options may be discussed according to your individual needs.",
      "You will receive guidance on appropriate use where a preparation is recommended.",
      "Ask questions about the preparation, expected use and possible considerations.",
    ],

    after: [
      "Use any recommended preparation according to the guidance provided.",
      "Monitor how you respond and report concerns or unexpected reactions.",
      "Attend follow-up consultations where appropriate to review your progress.",
    ],
  },

  relatedTreatments: [
    "mud-therapy",
    "nutritional-counselling",
    "acupuncture",
  ],

  cta: {
    title: "Considering Plant-Based Care?",
    description:
      "Talk to our team about your health needs and find out whether phytotherapeutic medicine may be appropriate for you.",
    primaryLabel: "Book a Consultation",
    secondaryLabel: "Contact Us",
  },
},

/* =======================
   ASSESSMENT AND WELLNESS
==========================*/

{
  id: 12,
  slug: "quantum-resonance-magnetic-analyser",
  category: "assessment-wellness",

  title: "Quantum Resonance Magnetic Analyser",

  excerpt:
    "A non-invasive assessment tool that records selected measurements and generates a computer-based report for discussion with a practitioner.",

  image: qrma,
  imageAlt: "Quantum Resonance Magnetic Analyser assessment",

  hero: {
    tagline:
      "A non-invasive wellness assessment tool providing additional information to support personalised health discussions.",
  },

  overview: {
    title: "What is Quantum Resonance Magnetic Analyser?",
    content:
      "Quantum Resonance Magnetic Analysis (QRMA) is a computer-based assessment approach that records selected measurements and produces a report for review. At Eden of Life, it can be used as an additional source of information during a broader consultation and wellness assessment.",
  },

  assessment: {
    title: "How Does the Assessment Work?",
    content:
      "The assessment involves using the analyser according to the device's operating procedure to collect selected measurements. The resulting computer-generated information is then reviewed and discussed with the practitioner in the context of your individual concerns and health goals.",
  },

  whatItCanProvide: {
    title: "What the Assessment Can Provide",
    items: [
      "Additional information for a wellness consultation",
      "Computer-generated measurement reports",
      "Information that can support discussion of lifestyle and wellbeing",
      "A starting point for further questions and professional assessment",
    ],
  },

  session: {
    title: "What Happens During an Assessment?",
    steps: [
      {
        number: 1,
        title: "Consultation",
        description:
          "Your practitioner discusses your concerns, health goals and any relevant information before the assessment.",
      },
      {
        number: 2,
        title: "Assessment",
        description:
          "The analyser is used according to the device's procedure to record the selected measurements.",
      },
      {
        number: 3,
        title: "Report",
        description:
          "The collected measurements are processed and presented in a computer-generated report.",
      },
      {
        number: 4,
        title: "Discussion",
        description:
          "Your practitioner discusses the information with you and considers it alongside your concerns and other relevant health information.",
      },
    ],
  },

  suitability: {
    title: "Is This Assessment Right for You?",
    content:
      "The assessment may be useful for people who want additional information to support a wellness consultation or discussion about their health. Your practitioner can explain what the assessment can and cannot provide before you proceed.",
  },

  considerations: {
    title: "Important Limitations",
    content:
      "A computer-generated QRMA report should not be treated as a substitute for a clinical examination, laboratory testing, medical diagnosis or professional medical advice. Measurements and reports should be interpreted cautiously and in the context of appropriate professional assessment.",
  },

  expectations: {
    title: "What to Expect",

    before: [
      "Discuss your health concerns and goals with your practitioner.",
      "Ask what the assessment measures and how the resulting information will be used.",
      "Continue to provide accurate information about relevant medical conditions, medicines and other treatments.",
    ],

    during: [
      "The analyser is used according to the device's assessment procedure.",
      "Selected measurements are recorded without an invasive procedure.",
      "Your practitioner can explain the process and answer questions during the assessment.",
    ],

    after: [
      "The resulting report is reviewed and discussed with your practitioner.",
      "Use the information as part of a broader health and wellness discussion rather than as a standalone diagnosis.",
      "Where a health concern requires further investigation, your practitioner may recommend appropriate professional assessment.",
    ],
  },

  relatedTreatments: [
    "phytotherapeutic-medicine",
    "nutritional-counselling",
    "tera-hertz-therapy",
  ],

  cta: {
    title: "Interested in a Wellness Assessment?",
    description:
      "Talk to our team to understand the assessment process and how QRMA information may be used as part of your consultation.",
    primaryLabel: "Book a Consultation",
    secondaryLabel: "Contact Us",
  },
},

];

export default treatments;