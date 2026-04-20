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
    slug: "pipeline-lobster",
    title: "Pipeline Lobster",
    emoji: "🦞",
    year: "2025",
    tagline:
      "AI pipeline that turns a corporate lead signal into a deployed, interactive proposal in 13 seconds. 🏆 Won the Sales Molty at Moltathon ATX 2025.",
    stack: ["Node.js", "Handlebars", "Telegram Bot", "Vercel", "Linkt AI"],
    links: [
      { label: "GitHub", href: "https://github.com/AlexGouyet/pipeline-lobster" },
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
        caption: "Full pipeline: lead signal → enrichment → pricing → deploy → Telegram alert in 13 seconds.",
      },
      { type: "h2", text: "The Problem" },
      {
        type: "p",
        text: "Corporate wellness sales is slow. A rep spots a funding round or office expansion on LinkedIn, manually researches the company, builds a proposal in Canva, emails it as a PDF, and hopes for the best. The whole cycle takes days. The proposal is static. There's no way for the prospect to explore pricing or customize their package.",
      },
      { type: "h2", text: "The Solution" },
      {
        type: "p",
        text: "I built Pipeline Lobster to replace that entire workflow with an AI pipeline that runs autonomously:",
      },
      {
        type: "quote",
        text: "Linkt AI Signal → Webhook → Enrich + Price → Deploy Landing Page → Telegram Alert. 13 seconds end-to-end.",
      },
      {
        type: "p",
        text: "A corporate lead signal fires. 13 seconds later, the sales rep has a Telegram message with a live URL to a fully personalized, interactive proposal — co-branded with the prospect's logo, driven off a 146-SKU pricing catalog, deployed to its own Vercel URL.",
      },
      { type: "h2", text: "Architecture" },
      {
        type: "list",
        items: [
          "Lead intelligence: Linkt AI API — entity search, company enrichment (industry, HQ, employees, revenue, contacts)",
          "Pricing engine: Custom CSV-driven 146-SKU catalog mapping group size + event type to recommended activations",
          "Proposal generator: Handlebars HTML with inline CSS/JS — interactive quantity controls, toggle upgrades, live recalculation",
          "Deployment: Vercel CLI deploying each proposal to its own URL (e.g. base-power.vercel.app)",
          "Notifications: Telegram Bot API with full pricing breakdown in chat",
        ],
      },
      { type: "h2", text: "The Hardest Parts" },
      {
        type: "list",
        items: [
          "Interactive pricing — client-side JS recalculating totals across 3 tiers with dynamic unit text (per-person / per-hour / flat-rate) as quantities change",
          "Telegram message encoding — multi-byte emoji characters broke HTTP Content-Length until I switched from string.length to Buffer.byteLength",
          "Logo reliability — migrated from logo.dev (expired token) to Google Favicon V2 API for 100% uptime",
        ],
      },
      { type: "h2", text: "Results" },
      {
        type: "list",
        items: [
          "🏆 Winner, Sales Molty Award — Moltathon ATX 2025",
          "Built solo in ~6 hours",
          "Live proposals shipped for: Base Power, Apptronik, Yeti Coolers, CesiumAstro",
          "Zero external frameworks — pure Node.js, three npm dependencies",
        ],
      },
    ],
  },
  {
    slug: "swift-fit-events",
    title: "Swift Fit Events",
    emoji: "💪",
    year: "2024 – Present",
    tagline:
      "Delivered corporate wellness activations for 30+ clients including Morgan Stanley, Google, Prudential, Experian, PayPal, and CVS. Built the company's sales infrastructure from scratch and shipped a production Claude Code plugin that runs the full sales stack.",
    stack: ["HubSpot", "Notion", "Asana", "Slack", "Claude Code"],
    links: [{ label: "swiftfitevents.com", href: "https://swiftfitevents.com" }],
    accent: "#06b6d4",
    body: [
      { type: "h2", text: "The Role" },
      {
        type: "p",
        text: "I joined Swift Fit Events as the sole sales operator and have since scaled the pipeline to ~$100K ARR. My role blends sales, operations, and engineering — I close the deals and I build the systems that run underneath them.",
      },
      { type: "h2", text: "Clients" },
      {
        type: "p",
        text: "Delivered corporate wellness activations for 30+ clients including Morgan Stanley, Google, Prudential, Experian, PayPal, and CVS.",
      },
      { type: "h2", text: "What I Built" },
      {
        type: "list",
        items: [
          "End-to-end sales infrastructure from scratch: CRM setup, outreach sequences, proposal workflow, and event operations",
          "Production Claude Code plugin used daily by the full team — orchestrates HubSpot, Notion, Asana, Slack, and Gmail across the entire sales cycle",
          "Pipeline Lobster — the AI proposal pipeline that won the Sales Molty at Moltathon ATX 2025 (see separate case study)",
        ],
      },
      { type: "h2", text: "Stack" },
      {
        type: "p",
        text: "HubSpot · Notion · Asana · Slack · Gmail · Claude Code · Google Drive · Telegram",
      },
    ],
  },
  {
    slug: "openclaw",
    title: "OpenClaw",
    emoji: "🤖",
    year: "2025 – Present",
    tagline:
      "Personal AI operating system — always-on autonomous agent running 24/7 on Apple Silicon. Multi-model routing across GPT-5, Claude, and Gemini. Cron-scheduled skills, persistent memory, Telegram interface.",
    stack: ["Node.js", "GPT-5", "Claude", "Telegram", "Notion", "ElevenLabs", "DALL·E"],
    links: [],
    accent: "#6366f1",
    body: [
      { type: "h2", text: "Not a Chatbot" },
      {
        type: "p",
        text: "OpenClaw is a 24/7 autonomous AI system running on a Mac Mini. It receives messages via Telegram, runs scheduled background jobs, coordinates subagents, and maintains a structured knowledge base across sessions — all without human intervention.",
      },
      {
        type: "quote",
        text: "The core design principle: help the user be more decisive, not more organized.",
      },
      { type: "h2", text: "What Makes It Different" },
      {
        type: "list",
        items: [
          "Always on — boots automatically, loads full context, monitors email/calendar/tasks hourly via heartbeat",
          "Persistent memory — every session loads a five-layer memory stack (SOUL, IDENTITY, USER, daily log, MEMORY). Nothing is forgotten.",
          "Autonomous scheduling — cron jobs run independently: journaling prompts, task reviews, auto-commits, monthly memory audits",
          "Subagent delegation — complex tasks handed off to isolated subagents on separate model quotas",
          "Multi-model routing — six LLMs available; model selection is dynamic based on task and quota",
        ],
      },
      { type: "h2", text: "Active Skills" },
      {
        type: "list",
        items: [
          "Prayer Forge — 13-section nightly reflection with Strava integration, pattern analysis, Notion submission, DALL·E art generation",
          "Tasks — Notion-backed task manager with auto-project matching",
          "Week Goals — weekly ritual across 7 life categories, calendar synced",
          "Mission Control — CRUD dashboard for Captain's Log, tasks, memories, agents, cron jobs",
          "Moment Maker — extracts emotional peak from journal → woodcut-style DALL·E 3 art",
          "Swift Fit Proposals — integration with Pipeline Lobster for CLI proposal generation",
          "Summarize — URLs, PDFs, audio, YouTube via multiple LLM providers",
        ],
      },
      { type: "h2", text: "Stack" },
      {
        type: "p",
        text: "Node 22 on macOS (Apple Silicon) · Telegram Bot API · GPT-5, Claude Opus/Sonnet/Haiku, Gemini, o3 · Brave Search · Notion (PARA) · Strava · ElevenLabs · DALL·E 3 · Git-backed persistence auto-committed every 12h.",
      },
      { type: "h2", text: "Status" },
      {
        type: "p",
        text: "Production. Running continuously on my Mac Mini. Backed up to private GitHub every 12 hours. Repo is private.",
      },
    ],
  },
  {
    slug: "grape",
    title: "Grape.ag",
    emoji: "🍇",
    year: "2020 – 2021",
    tagline:
      "Implemented UC Davis powdery mildew research as a production Python pipeline running every 15 minutes on AWS Lambda, populating the shipped iOS app for vineyard owners in real time.",
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
    title: "Drones",
    emoji: "🚁",
    year: "2016 – 2021",
    tagline:
      "Flight team member at McGill AERO (1-of-5, two years running). Team took 2nd place + \"Most Professional\" at Canada's national UAV competition. Landed us the front page of the Montreal Gazette — grew student applications 400%. Started with a $15 altitude-hold hack on a consumer drone, 48K views on YouTube.",
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
        text: "The team's 2019 entry for the Unmanned Systems Canada Student UAS Competition was a Beyond Visual Line of Sight (BVLOS) survey and payload-delivery system. Two aircraft working together:",
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
          {
            src: "/images/drones/drones_winter.JPG",
            alt: "Winter flight testing",
            caption: "Winter test",
          },
          {
            src: "/images/drones/flight_line4.JPG",
            alt: "On the flight line",
            caption: "Flight line",
          },
          {
            src: "/images/drones/flight_line2.jpg",
            alt: "On the flight line",
            caption: "Flight line",
          },
          {
            src: "/images/drones/flight_line3.webp",
            alt: "On the flight line",
            caption: "Flight line",
          },
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
      {
        type: "p",
        text: "Things we ran:",
      },
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
    title: "Coach's Choice",
    emoji: "🏅",
    year: "2020",
    tagline:
      "Shipped social media app for athletes to the App Store. Built the React Native front-end with Firebase backend, in partnership with my brother.",
    stack: ["React Native", "Firebase"],
    links: [],
    accent: "#10b981",
    body: [
      { type: "h2", text: "What It Is" },
      {
        type: "p",
        text: "Coach's Choice is a social media app built specifically for athletes — competitive athletes connecting with coaches, sharing training footage, and managing their sports identity online.",
      },
      { type: "h2", text: "My Role" },
      {
        type: "p",
        text: "I built and shipped the React Native front-end. My brother built most of the backend logic. We shipped together to the App Store.",
      },
      { type: "h2", text: "Stack" },
      {
        type: "p",
        text: "React Native · Firebase (auth, realtime database, storage) · Xcode",
      },
    ],
  },
  {
    slug: "refraction",
    title: "Refraction AI — Sales Tracker",
    emoji: "🗺️",
    year: "2021",
    tagline:
      "Built a custom sales territory tool with Python and Mapbox that surfaced 200+ new potential clients for Refraction AI's autonomous delivery robots.",
    stack: ["Python", "Mapbox", "React"],
    links: [],
    accent: "#eab308",
    body: [
      { type: "h2", text: "Context" },
      {
        type: "p",
        text: "Refraction AI operates autonomous delivery robots (the REV-1) for last-mile logistics. As a Product Associate on the go-to-market side, I was responsible for identifying new commercial partners near our operational routes — but the existing tooling made it hard to see which prospects were actually reachable by our fleet.",
      },
      { type: "h2", text: "What I Built" },
      {
        type: "p",
        text: "A custom sales territory visualization tool using Python and Mapbox. It layered our operational radius onto a live map of prospect businesses, letting the sales team filter by distance, category, and signal. I built it to cut research time from hours to minutes.",
      },
      { type: "h2", text: "Results" },
      {
        type: "list",
        items: [
          "Surfaced 200+ new potential clients in the first deployment",
          "Improved customer retention rates by 25% through product enhancements based on user feedback",
          "Shifted the sales team's daily workflow from manual Google Maps research to map-driven prospecting",
        ],
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
