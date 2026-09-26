export interface Course {
  id: string;
  title: string;
  tagline: string;
  grade: string;
  category: "KEAM & NEET" | "CBSE" | "Kerala State Board" | "Foundations" | "1-on-1 Research";
  target: string;
  duration: string;
  mode: string;
  price: number;
  originalPrice: number;
  discount: string;
  badge?: string;
  description: string;
  highlights: string[];
  syllabus: {
    unit: string;
    topics: string[];
  }[];
  mentorLead: {
    name: string;
    institute: string;
    subject: string;
  };
}

export const COURSES: Course[] = [
  {
    id: "keam-neet-mastery",
    title: "KEAM & NEET Intensive Mastery",
    tagline: "Speed, high-yield accuracy, and first-principles mastery for Kerala's premier entrance exams.",
    grade: "Classes 11, 12 & Repeaters",
    category: "KEAM & NEET",
    target: "KEAM (Engineering/Pharmacy) & NEET (Medical)",
    duration: "1 Year / Fast-Track Crash Available",
    mode: "Live 1-on-1 Sessions + High-Yield Question Banks",
    price: 3499,
    originalPrice: 6999,
    discount: "50% OFF",
    badge: "Most Popular",
    description: "Prepare for KEAM and NEET with structured syllabus coverage, targeted practice, and exam-pattern-based assessments. Avoid burnout and rote drilling with conceptual clarity directly from scholars who conquered these exams.",
    highlights: [
      "1-on-1 weekly personal diagnostic & weak-area targeting",
      "Full coverage of Physics, Chemistry & Biology/Mathematics",
      "Timed KEAM & NEET mock tests with detailed performance review",
      "Direct doubt clearing with IISER & Medical College scholars"
    ],
    syllabus: [
      {
        unit: "Physics Mechanics & Electrodynamics",
        topics: ["Kinematics & Rotational Dynamics from First Principles", "Work, Energy & Momentum Conservation", "Electrostatics & Current Electricity Shortcuts", "Electromagnetic Induction & Wave Optics"]
      },
      {
        unit: "Chemistry Foundations & Organic Synthesis",
        topics: ["Chemical Equilibrium & Thermodynamics", "Periodic Trends & Coordination Compounds", "Reaction Mechanisms & Conversions Made Intuitive", "Physical Chemistry Numerical Speed Mastery"]
      },
      {
        unit: "Math / Biology High-Yield Problem Sets",
        topics: ["Differential & Integral Calculus for KEAM", "Coordinate Geometry & Vectors Quick-Solve", "Human Physiology & Genetics Conceptual Maps (NEET)", "NCERT Line-by-Line High-Probability Question Banks"]
      }
    ],
    mentorLead: {
      name: "Anirudh & Dr. Rihaan",
      institute: "IISER Tirupati & GMC Thrissur",
      subject: "Physics, Math & Medical Sciences"
    }
  },
  {
    id: "cbse-11-12-science",
    title: "CBSE Classes 11 & 12 Science (PCM / PCB)",
    tagline: "Build unshakeable conceptual foundations and score 95%+ in Board exams without exam anxiety.",
    grade: "Classes 11 & 12",
    category: "CBSE",
    target: "CBSE Board Examination & Competitive Readiness",
    duration: "Academic Year 2026–2027",
    mode: "Personalised Study Plans + 1-on-1 Mentorship",
    price: 2999,
    originalPrice: 5999,
    discount: "50% OFF",
    badge: "Comprehensive",
    description: "Master the NCERT curriculum with deep conceptual understanding. Our mentors break down intimidating derivations, calculus proofs, and chemical mechanisms into clear, relatable ideas.",
    highlights: [
      "Personalised study schedule tailored to school exam timelines",
      "NCERT Exemplar and previous 10-year question breakdowns",
      "Zero-judgment doubt clearing sessions anytime",
      "Practical exam and viva preparation tips"
    ],
    syllabus: [
      {
        unit: "Physics Core Curriculum",
        topics: ["Laws of Motion & System of Particles", "Thermodynamics & Kinetic Theory", "Ray & Wave Optics", "Modern Physics & Semiconductors"]
      },
      {
        unit: "Chemistry Core Curriculum",
        topics: ["Atomic Structure & Chemical Bonding", "Solutions & Electrochemistry", "Aldehydes, Ketones & Amines", "Biomolecules & Everyday Chemistry"]
      },
      {
        unit: "Mathematics / Biology",
        topics: ["Continuity, Differentiability & Integrals", "Three Dimensional Geometry & Probability", "Reproduction, Ecology & Biotechnology"]
      }
    ],
    mentorLead: {
      name: "Rithik & Anirudh",
      institute: "IISER TVM & IISER Tirupati",
      subject: "Pure Math & Physics"
    }
  },
  {
    id: "kerala-state-plus-two",
    title: "Kerala State Board Higher Secondary (+1 & +2)",
    tagline: "Focused preparation designed specifically for the Kerala Higher Secondary SCERT pattern.",
    grade: "Plus One & Plus Two (+1 & +2)",
    category: "Kerala State Board",
    target: "Kerala DHSE Board Exams (Full A+ Target)",
    duration: "Full Academic Cycle",
    mode: "Malayalam / English Bilingual Support Available",
    price: 2799,
    originalPrice: 5599,
    discount: "50% OFF",
    badge: "State Topper Track",
    description: "Structured according to the Kerala DHSE evaluation scheme. We focus on high-weightage topics, recurring question patterns, and step-wise mark distribution so students comfortably score Full A+.",
    highlights: [
      "Bilingual explanation (English + Malayalam) for tough concepts",
      "Special focus on SCERT question pools and model question papers",
      "Regular mock assessments with line-by-line answer key evaluation",
      "Mentors who topped Kerala State Board themselves"
    ],
    syllabus: [
      {
        unit: "Physics DHSE Syllabus",
        topics: ["Units, Vectors & Motion Analysis", "Gravitation & Properties of Bulk Matter", "Oscillations & Waves", "Magnetism & Alternating Currents"]
      },
      {
        unit: "Chemistry DHSE Syllabus",
        topics: ["States of Matter & Equilibrium", "Hydrocarbons & Organic Principles", "Chemical Kinetics & Surface Chemistry", "Coordination Chemistry & Polymers"]
      },
      {
        unit: "Mathematics / Biology DHSE",
        topics: ["Relations, Functions & Matrices", "Linear Programming & Differential Equations", "Plant Physiology & Human Anatomy"]
      }
    ],
    mentorLead: {
      name: "Alen & Rihaan",
      institute: "IIT Roorkee & GMC Thrissur",
      subject: "Applied Sciences & State Prep"
    }
  },
  {
    id: "foundation-8-10",
    title: "Foundation Pioneers (Classes 8, 9 & 10)",
    tagline: "Cultivate mathematical thinking, scientific curiosity, and exam confidence early on.",
    grade: "Classes 8, 9 & 10",
    category: "Foundations",
    target: "School Excellence + Olympiads & Early Entrance Readiness",
    duration: "Year-round Guided Track",
    mode: "Interactive Group Circles + 1-on-1 Guidance",
    price: 2499,
    originalPrice: 4999,
    discount: "50% OFF",
    badge: "Early Spark",
    description: "Prevent high school shock by building genuine curiosity and intuitive problem-solving skills early. Students explore the 'why' behind formulas rather than just cramming them.",
    highlights: [
      "Axiomatic mathematics and real-world science demos",
      "Early introduction to NTSE, Olympiad and Olympiad-level logic",
      "Study habit coaching, focus enhancement & time management",
      "Fun, stress-free learning environment"
    ],
    syllabus: [
      {
        unit: "Intuitive Physics & Math",
        topics: ["Forces, Motion & Gravitation Demystified", "Light, Reflection & Lenses with Visual Optics", "Algebraic Identities, Quadratic Equations & Geometry Intuition", "Trigonometry from Unit Circles"]
      },
      {
        unit: "Chemistry & Life Sciences",
        topics: ["Atoms, Molecules & Chemical Reactions", "Acids, Bases & Salts Laboratory Insights", "Cell Biology, Genetics & Ecology Fundamentals", "Scientific Method & Hypothesis Testing"]
      }
    ],
    mentorLead: {
      name: "Akshath & Team",
      institute: "SVYSTM & IISER Scholars",
      subject: "Foundation Science & Strategy"
    }
  },
  {
    id: "research-first-principles",
    title: "1-on-1 Frontier Research & Olympiad Mentorship",
    tagline: "Exclusive bespoke mentorship with active IISER & IIT research scholars for passionate learners.",
    grade: "Classes 9–12 & College Entrants",
    category: "1-on-1 Research",
    target: "KVPY, IAT, NEST, Olympiads & Academic Deep-Dive",
    duration: "Flexible 3-Month / 6-Month Sprints",
    mode: "Direct 1-on-1 Personal Research Guidance",
    price: 4999,
    originalPrice: 9999,
    discount: "50% OFF",
    badge: "Elite Mentorship",
    description: "For students who want to go far beyond standard syllabi. Work directly with researchers from premier research institutes (IISER, IIT) on axiomatic physics, higher mathematics, computational logic, and paper reading.",
    highlights: [
      "100% individual attention tailored to your exact pace",
      "Deep dive into advanced topics (Classical Mechanics, Linear Algebra, Biophysics)",
      "Assistance with science fair projects, olympiads, and research ideas",
      "Guidance for admission into IISc, IISERs, and global universities"
    ],
    syllabus: [
      {
        unit: "Advanced Physics & Mathematics",
        topics: ["Lagrangian Mechanics & Variational Principles", "Multivariable Calculus & Abstract Vector Spaces", "Quantum Phenomena Conceptual Foundation", "Olympiad Level Non-Routine Problem Solving"]
      },
      {
        unit: "Scientific Inquiry & Research Thinking",
        topics: ["Reading and Analyzing Scientific Research Papers", "Formulating Hypotheses and Designing Controlled Experiments", "Computational Modeling with Python & Mathematica Basics", "Independent Capstone Problem Investigation"]
      }
    ],
    mentorLead: {
      name: "Anirudh",
      institute: "IISER Tirupati",
      subject: "Founder · Physics & Mathematics"
    }
  }
];
