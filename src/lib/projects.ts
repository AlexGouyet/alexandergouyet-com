export type Section =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] }
  | { type: "kv"; rows: { label: string; value: string }[] }
  | { type: "link"; label: string; href: string; description?: string }
  | { type: "youtube"; id: string; title?: string; caption?: string }
  | { type: "loom"; id: string; title?: string; caption?: string }
  | { type: "pdf"; src: string; title?: string; caption?: string }
  | { type: "image"; src: string; alt: string; caption?: string; aspect?: "square" | "video" | "portrait" }
  | { type: "gallery"; images: { src: string; alt: string; caption?: string }[] };

export type Project = {
  slug: string;
  title: string;
  brand?: string;
  emoji: string;
  year: string;
  tagline: string;
  stack: string[];
  links: { label: string; href: string }[];
  accent: string;
  featured?: boolean;
  hero?: string;
  body?: Section[];
};

export const projects: Project[] = [
  {
    slug: "swift-fit-sales-agent",
    title: "AI Sales Agent for Corporate Wellness",
    brand: "SwiftFit Sales Agent · powered by OpenClaw 🦞",
    emoji: "🤖",
    year: "2024 – Present",
    tagline:
      "Built a full AI-powered sales agent for corporate wellness. A Claude Code plugin orchestrates HubSpot, Notion, Asana, Slack, and Gmail daily. 🏆 Won the Antler VC Hackathon (Feb 2024). Pipeline Lobster — the lead-to-proposal automation inside it — won the Sales Molty at Moltathon ATX 2025.",
    stack: ["Claude Code", "Node.js", "HubSpot", "Notion", "Asana", "Slack", "Vercel"],
    links: [
      { label: "Pipeline Lobster on GitHub", href: "https://github.com/AlexGouyet/pipeline-lobster" },
      { label: "Loom demo", href: "https://www.loom.com/share/770f552c35b645fd87a88579e30f035e" },
    ],
    accent: "#f97316",
    featured: true,
    hero: "/images/pipeline-lobster/pipeline_lobster_hero.png",
    body: [
      {
        type: "loom",
        id: "770f552c35b645fd87a88579e30f035e",
        title: "Pipeline Lobster demo",
        caption: "Pipeline Lobster: lead signal → enrichment → pricing → deploy → Telegram alert in 13 seconds.",
      },
      { type: "h2", text: "What It Is" },
      {
        type: "p",
        text: "SwiftFit Sales Agent is an AI-powered sales operations system I built from scratch for Swift Fit Events, running on top of my personal OpenClaw agent infrastructure. It has two halves: a Claude Code plugin that runs the team's daily sales workflow, and Pipeline Lobster — an automation that turns a lead signal into a deployed, interactive proposal in 13 seconds.",
      },
      { type: "h2", text: "Awards" },
      {
        type: "list",
        items: [
          "🏆 Winner — Antler VC Hackathon (February 2024)",
          "🏆 Winner — Sales Molty, Moltathon ATX 2025 (Pipeline Lobster)",
        ],
      },
      { type: "h2", text: "Half 1 — Claude Code Plugin (daily ops)" },
      {
        type: "p",
        text: "A production Claude Code plugin used daily by the full team. It orchestrates our real tools — HubSpot, Notion, Asana, Slack, Gmail — across the full sales cycle: discovery prep, call recap, proposal build, deal hygiene, pipeline review, weekly reporting.",
      },
      {
        type: "list",
        items: [
          "~20 skills covering every stage of the sales cycle",
          "Live HubSpot integration for deal + contact hygiene automation",
          "Notion-backed knowledge base (PARA framework) for client intel, lessons learned, and nuances",
          "Slack + Gmail + Asana orchestration for communications and task management",
        ],
      },
      { type: "h2", text: "Half 2 — Pipeline Lobster (lead → proposal)" },
      {
        type: "p",
        text: "Pipeline Lobster is the lead-to-proposal automation that won the Sales Molty at Moltathon ATX 2025. Built solo in ~6 hours.",
      },
      {
        type: "quote",
        text: "Linkt AI Signal → Webhook → Enrich + Price → Deploy Landing Page → Telegram Alert. 13 seconds end-to-end.",
      },
      { type: "h3", text: "Architecture" },
      {
        type: "list",
        items: [
          "Lead intelligence: Linkt AI API — entity search + enrichment (industry, HQ, employees, revenue, contacts)",
          "Pricing engine: CSV-driven 146-SKU catalog mapping group size + event type to recommended activations",
          "Proposal generator: Handlebars HTML with inline CSS/JS — interactive quantity controls, toggle upgrades, live recalculation",
          "Deployment: Vercel CLI deploying each proposal to its own URL (e.g. base-power.vercel.app)",
          "Notifications: Telegram Bot API with full pricing breakdown in chat",
        ],
      },
      { type: "h3", text: "The Hardest Parts" },
      {
        type: "list",
        items: [
          "Interactive pricing — client-side JS recalculating totals across 3 tiers with dynamic unit text (per-person / per-hour / flat) as quantities change",
          "Telegram message encoding — multi-byte emoji characters broke HTTP Content-Length until I switched from string.length to Buffer.byteLength",
          "Logo reliability — migrated from logo.dev (expired token) to Google Favicon V2 API for 100% uptime",
        ],
      },
      { type: "h2", text: "Impact" },
      {
        type: "list",
        items: [
          "🏆 Pipeline Lobster won the Sales Molty at Moltathon ATX 2025",
          "Full team uses the Claude Code plugin daily across every sales stage",
          "Live proposals shipped for Base Power, Apptronik, Yeti Coolers, CesiumAstro",
          "Sourced and closed wellness activations for 30+ corporate clients including Morgan Stanley, Google, Prudential, Experian, PayPal, and CVS",
        ],
      },
    ],
  },
  {
    slug: "swift-proposal-builder",
    title: "Interactive Proposal Builder for Corporate Events",
    brand: "Swift Proposal Builder",
    emoji: "📄",
    year: "2025",
    tagline:
      "Built a client-facing, interactive proposal tool for Swift Fit Events. React + TypeScript + Vite + Tailwind. Lets prospects explore activations, adjust group size, and see pricing update live.",
    stack: ["React", "TypeScript", "Vite", "Tailwind"],
    links: [],
    accent: "#06b6d4",
    body: [
      { type: "h2", text: "What It Is" },
      {
        type: "p",
        text: "A client-facing proposal builder for Swift Fit Events. Instead of sending a static PDF that prospects skim once and forget, the proposal is an interactive web app — they adjust the headcount, toggle optional activations, explore bundles, and see pricing recalculate live.",
      },
      { type: "h2", text: "What I Built" },
      {
        type: "list",
        items: [
          "Full React + TypeScript front-end with Vite build pipeline",
          "Interactive pricing engine driven off the Swift Fit activation catalog",
          "Tailwind-based design system for on-brand, polished presentation",
          "Deployed proposals at one-off URLs per prospect",
        ],
      },
      { type: "h2", text: "Stack" },
      { type: "p", text: "React · TypeScript · Vite · Tailwind CSS · Vercel" },
    ],
  },
  {
    slug: "grape",
    title: "Real-Time Powdery Mildew Detection for Vineyard Microclimates",
    brand: "Grape.ag · 2020 Summer Intern Team",
    emoji: "🍇",
    year: "2020 – 2021",
    tagline:
      "Helped ship a production pipeline that runs UC Davis's powdery mildew risk model per vine, every 15 minutes. My piece: the Python algorithm on AWS Lambda, feeding the React Native iOS app that vineyard owners use in the field.",
    stack: ["Python", "pandas", "AWS Lambda", "React Native"],
    links: [
      { label: "GitHub", href: "https://github.com/AlexGouyet/Grape" },
      { label: "App Store", href: "https://apps.apple.com/us/app/grape-ag/id1525749253" },
    ],
    accent: "#8b5cf6",
    hero: "/images/Grape/sensor_vine.jpg",
    body: [
      {
        type: "image",
        src: "/images/Grape/sensor_vine.jpg",
        alt: "Grape.ag IoT sensor mounted on a vine",
        aspect: "square",
        caption: "An IoT sensor mounted per-vine — measuring the temperature and humidity that feed the Powdery Mildew risk model.",
      },
      { type: "h2", text: "The Story" },
      {
        type: "p",
        text: "The Powdery Mildew risk model from UC Davis was published in the 1960s. It's elegant but historically expensive to compute at field scale — for decades it was calculated regionally using weather stations. Computing it per vine block became feasible only when sensor and cloud-compute costs collapsed 60 years later. Grape.ag was the first platform to do it.",
      },
      {
        type: "link",
        label: "UC IPM Grape Powdery Mildew Risk Assessment Index",
        href: "https://ipm.ucanr.edu/DISEASE/DATABASE/grapepowderymildew.html",
        description: "The original UC Davis research our algorithm implements at sensor scale.",
      },
      {
        type: "image",
        src: "/images/Grape/index_table.png",
        alt: "UC Davis Powdery Mildew risk assessment index table",
        caption: "The UC Davis risk index — a lookup table pairing temperature and humidity patterns to mildew risk. The algorithm I built computes this per sensor, every 15 minutes.",
      },
      {
        type: "image",
        src: "/images/Grape/alex_grape_pic.jpg",
        alt: "Alexander at Grape.ag",
        caption: "In the field during my Grape.ag internship.",
      },
      { type: "h2", text: "What I Built" },
      {
        type: "p",
        text: "During my internship at Grape.ag (August 2020 – April 2021) I implemented the UC Davis algorithm in Python. The script ran every 15 minutes on AWS Lambda, ingesting live sensor data and populating the React Native iOS app that vineyard owners carried into the field.",
      },
      {
        type: "quote",
        text: "Powdery Mildew risk is elevated when daily mean temperature > 10°C AND mean relative humidity has been > 85% for 10 consecutive days.",
      },
      { type: "h2", text: "The Algorithm" },
      {
        type: "list",
        items: [
          "Ingest raw sensor readings (timestamp, temperature, humidity, sensor_id) from CSV exports",
          "Bucket into daily windows per sensor using pandas groupby",
          "Compute daily mean temperature → flag if > 10°C",
          "Compute rolling 10-day mean humidity → flag if > 85%",
          "Join conditions into a per-sensor, per-day risk table",
        ],
      },
      {
        type: "image",
        src: "/images/Grape/ios_grape_best.jpg",
        alt: "Grape.ag iOS app — field dashboard",
        caption: "The Grape.ag iOS app — where the algorithm's output surfaces for vineyard owners.",
      },
      { type: "h2", text: "Impact" },
      {
        type: "list",
        items: [
          "~20% improvement in crop protection efficiency (per team measurement)",
          "Shipped to App Store, currently v2.1.0 — still live and actively maintained in 2026",
          "Also contributed 15% revenue growth through market analysis identifying opportunities in Southern Mexico",
        ],
      },
    ],
  },
  {
    slug: "drones",
    title: "Real-Time Solar Panel Efficiency Analysis via UAV / Infrared Camera",
    brand: "McGill AERO Drones · 2019 Team",
    emoji: "🚁",
    year: "2016 – 2021",
    tagline:
      "Helped ship a two-UAV BVLOS system that surveys solar farms, identifies damaged or underperforming panels via FLIR thermal imaging, and flags them with physical markers for repair. 1-of-5 flight team · 2nd place at the Canadian national UAV competition · $5K prize · front-page Montreal Gazette feature I landed.",
    stack: ["Ardupilot", "Pixhawk", "Soldering", "Python", "HTC Vive VR GCS"],
    links: [
      { label: "YouTube tutorial", href: "https://www.youtube.com/watch?v=hrPOWMnhVgA" },
      { label: "Competition video", href: "https://youtu.be/fLqc0ZhI7UY" },
      { label: "Montreal Gazette", href: "https://montrealgazette.com/news/game-of-drones-high-flying-mcgill-ets-students-rule-the-air/" },
    ],
    accent: "#ec4899",
    hero: "/images/drones/alex_drones_hero.webp",
    body: [
      {
        type: "image",
        src: "/images/drones/alex_drones_hero.webp",
        alt: "Alexander with drones",
      },
      { type: "h3", text: "Act 1 — MakeX Palo Alto (2016)" },
      {
        type: "p",
        text: "I built my first quadcopter from scratch at MakeX, the first student-led makerspace in the United States. While I was there I bought a stock Syma X8C — a $100 consumer quadcopter that notoriously lacked altitude hold — and figured out how to add it for $15 in parts. I filmed a tutorial on the mod. It's been up since and has 48K+ views.",
      },
      {
        type: "image",
        src: "/images/drones/china_drone.JPG",
        alt: "Home-built quadcopter over the Great Wall of China",
        caption: "My home-built quadcopter malfunctioned over the Great Wall of China. Ended in a bloody finger.",
      },
      {
        type: "youtube",
        id: "hrPOWMnhVgA",
        title: "$15 Syma X8C Altitude Hold Upgrade",
        caption: "$15 altitude-hold mod tutorial. 48K+ views.",
      },
      { type: "h3", text: "Act 2 — McGill AERO Drones (2017 – 2021)" },
      {
        type: "p",
        text: "Joined McGill's AERO Drones team in 2017 as VP of Marketing. Over four years I grew the team's visibility, recruitment, and narrative. I was also selected 1-of-5 to the competition flight team two years running.",
      },
      {
        type: "image",
        src: "/images/drones/flight_line1.jpg",
        alt: "On the flight line at the national UAV competition",
        caption: "On the flight line — 1 of 5 selected to the competition flight team (2019 & 2020).",
      },
      {
        type: "p",
        text: "The team's 2019 entry was a real-time solar panel efficiency analysis system for the Unmanned Systems Canada Student UAS Competition. The challenge: autonomously survey a solar farm, identify damaged or underperforming panels using thermal imaging, and deliver a physical marker to flag each one for repair — all Beyond Visual Line of Sight (BVLOS). Two aircraft working together:",
      },
      {
        type: "image",
        src: "/images/drones/drones_array.JPG",
        alt: "The McGill AERO drone platform",
        caption: "The team's aircraft — a Tarot X6 hexacopter (the Carrier) and a DAYA 550 quadcopter (the Recce).",
      },
      {
        type: "list",
        items: [
          "The Carrier: a Tarot X6 hexacopter with T-Motor MN5212 motors, Pixhawk 2.1 running Ardupilot, dual-precision GPS (standard + RTK), 8 kg payload, 1+ hour flight time, Sony A5000 DSLR on 3-axis gimbal",
          "The Recce: a DAYA 550 quadcopter with FLIR infrared camera, used for low-altitude IR search",
          "Ground Control: MAVProxy + Mission Planner GCS, with a custom VR-GCS dashboard on HTC Vive giving the Director of Flight Operations a holographic bird's-eye view of both aircraft",
          "Mission payload: servo-driven marker dispenser, 20cm payload delivery turret, motorized winch for precise vertical positioning",
          "Imagery pipeline: OpenDroneMap + OpenCV, 40m altitude survey covering 90,000 m² in under 10 minutes at 1 cm/pixel ground resolution",
        ],
      },
      {
        type: "gallery",
        images: [
          { src: "/images/drones/drones_winter.JPG", alt: "Winter flight testing", caption: "Winter test" },
          { src: "/images/drones/flight_line4.JPG", alt: "On the flight line", caption: "Flight line" },
          { src: "/images/drones/flight_line2.jpg", alt: "On the flight line", caption: "Flight line" },
          { src: "/images/drones/flight_line3.webp", alt: "On the flight line", caption: "Flight line" },
        ],
      },
      {
        type: "p",
        text: "Montreal winters meant testing in snow, sub-zero temps, and wind. Good calibration for a competition flown in Southern Alberta in summer.",
      },
      { type: "h3", text: "Results" },
      {
        type: "list",
        items: [
          "🥈 2nd place — Unmanned Systems Canada 2019 Student UAS Competition",
          "🏆 \"Most Professional\" award — $5,000 team prize",
          "📰 Front-page Montreal Gazette feature I landed — boosted student applications 400%",
        ],
      },
      {
        type: "youtube",
        id: "fLqc0ZhI7UY",
        title: "McGill AERO 2019 competition recap",
        caption: "Competition recap video.",
      },
      { type: "h3", text: "Act 3 — McGill Institute for Aerospace Engineering" },
      {
        type: "p",
        text: "The AERO work led into me becoming President of the McGill Institute for Aerospace Engineering (MIAE). The remit expanded from one engineering team to an entire undergraduate aerospace community.",
      },
      {
        type: "image",
        src: "/images/drones/MIAE_industry_dinner.jpg",
        alt: "MIAE industry dinner, Fall 2019",
        caption: "Fall 2019 — the industry dinner I curated. 40 of Montreal's leading aerospace professionals matched 1-on-1 with 40 of the top McGill aerospace students.",
      },
      { type: "p", text: "Things we ran:" },
      {
        type: "list",
        items: [
          "Industry dinner — 40 Montreal aerospace leaders paired 1-on-1 with 40 top McGill aerospace students (Fall 2019)",
          "Facility tours at Bell Flight and Maxar — the creators of the Canadarm on the International Space Station",
          "Software tutorials for aerospace-adjacent tooling",
          "Interview prep workshops for students going into industry",
          "An entire Aerospace Week — run remotely during COVID",
        ],
      },
    ],
  },
  {
    slug: "coachs-choice",
    title: "Social Media iOS App for Athletes",
    brand: "Coach's Choice",
    emoji: "🏅",
    year: "2020",
    tagline:
      "Built and shipped a social media iOS app for athletes. React Native front-end, Firebase backend, co-built with my brother. Live on the App Store.",
    stack: ["React Native", "Firebase", "Xcode"],
    links: [],
    accent: "#10b981",
    body: [
      { type: "h2", text: "What It Is" },
      {
        type: "p",
        text: "Coach's Choice is a social media app built specifically for athletes — competitive athletes connecting with coaches, sharing training footage, and managing their sports identity online.",
      },
      { type: "h2", text: "What I Built" },
      {
        type: "p",
        text: "I built and shipped the React Native front-end. My brother built most of the backend logic. We shipped together to the App Store.",
      },
      { type: "h2", text: "Stack" },
      { type: "p", text: "React Native · Firebase (auth, realtime database, storage) · Xcode" },
    ],
  },
  {
    slug: "refraction",
    title: "Yelp API + Mapbox Isochrones for Autonomous Robot Deliveries",
    brand: "Refraction AI — REV-1",
    emoji: "🗺️",
    year: "2021",
    tagline:
      "Built a Python tool that pulled all restaurants in a radius from the Yelp API, then used Mapbox isochrones to map which ones the REV-1 delivery robots could actually reach reliably given hills and speed. Surfaced 200+ new leads.",
    stack: ["Python", "Yelp API", "Mapbox Isochrone API"],
    links: [],
    accent: "#eab308",
    hero: "/images/refraction/refraction_hero.JPG",
    body: [
      {
        type: "image",
        src: "/images/refraction/refraction_hero.JPG",
        alt: "Alexander with the Refraction REV-1 delivery robot",
        aspect: "square",
        caption: "On the route with a REV-1.",
      },
      { type: "h2", text: "Context" },
      {
        type: "p",
        text: "Refraction AI operates autonomous delivery robots (the REV-1) for last-mile logistics. As a Product Associate on the go-to-market side, I needed to identify commercial partners near our operational routes — but the existing tooling couldn't answer the real question: \"can the robot actually get there reliably?\"",
      },
      { type: "h2", text: "What I Built" },
      {
        type: "p",
        text: "A two-step Python pipeline:",
      },
      {
        type: "list",
        items: [
          "Step 1 — Yelp API: pulled all restaurants in a radius around our office (and the 78704 zip code when we expanded), including contact info so the sales team could start dialing immediately.",
          "Step 2 — Mapbox Isochrone API: instead of a naive distance circle, generated isochrones — travel-time contours that account for hills and terrain. Flat ground at 15 mph is fine for the REV-1. A steep hill isn't. The isochrone told us which restaurants were actually reachable at robot speed with reliable delivery time.",
        ],
      },
      {
        type: "image",
        src: "/images/refraction/refraction_isocrone.png",
        alt: "Mapbox isochrone showing robot-reachable territory",
        caption: "A Mapbox isochrone — the colored region shows everywhere the REV-1 could actually reach in a given travel time, accounting for hills and routing, not just radial distance.",
      },
      {
        type: "p",
        text: "The output fed the sales team a ranked list of qualified prospects with contact info — and a visual map of our real operational footprint.",
      },
      { type: "h2", text: "Why It Mattered" },
      {
        type: "p",
        text: "Before this: the sales team manually searched Google Maps, guessed at which places were reachable, and spent hours per lead. After: a filtered list of pre-qualified prospects with phone numbers, ready to call.",
      },
      { type: "h2", text: "Results" },
      {
        type: "list",
        items: [
          "Surfaced 200+ new potential clients in the first deployment",
          "Replaced manual Google Maps research with API-driven prospecting",
          "Improved customer retention rates by 25% through product enhancements based on user feedback",
        ],
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

// Smaller "Also built" projects shown as a strip at the bottom of the homepage
export type AlsoBuilt = {
  title: string;
  emoji: string;
  description: string;
  stack: string[];
  href?: string;
};

export const alsoBuilt: AlsoBuilt[] = [
  {
    title: "OpenClaw",
    emoji: "🤖",
    description:
      "My personal 24/7 AI agent infrastructure — multi-model routing, cron jobs, persistent memory, Telegram interface. The runtime underneath SwiftFit Sales Agent. Private.",
    stack: ["Node.js", "GPT-5", "Claude", "Telegram", "ElevenLabs"],
  },
];
