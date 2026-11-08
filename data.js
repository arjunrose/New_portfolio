/*
  ARJUN ROSE J S: PORTFOLIO CONTENT
  ---------------------------------
  This is the ONE file you edit to change what the site says.
  It is plain JavaScript (no build step needed). Keep the quotes "like this"
  and the commas between items, and the whole site updates.

  Skill levels:  "adv" = advanced, "int" = intermediate, "hands" = hands-on, "bas" = basic
  Project domains: "automation", "robotics", "vision", "embedded"
  Dates: "YYYY-MM". Use "present" for something ongoing.
*/
window.PORTFOLIO = {
  site: {
    url: "https://arjunrose.github.io/Arjun_Rose_J_S/",
    title: "Arjun Rose J S | Robotics and Automation Engineer",
    description:
      "Arjun Rose J S, B.Tech Robotics & Automation graduate (AI specialization). Siemens PLC, Festo MPS, Yaskawa, Igus and Dobot robots, computer vision. Open to robotics and PLC roles.",
    ogImage: "assets/img/og.png"
  },

  person: {
    name: "Arjun Rose J S",
    first: "Arjun",
    role: "Robotics and automation engineer",
    status: "Graduated and open to work",
    openTo: ["PLC and automation", "Robotics and AI"],
    pitch:
      "I build systems that sense, decide and move: Siemens PLC logic, industrial robot cells and OpenCV vision, tested on real hardware and in CAD digital twins.",
    summary:
      "B.Tech Robotics and Automation engineer (AI specialization, CGPA 7.66, First Class) with hands-on experience in Festo MPS, Siemens PLC programming in TIA Portal, and digital manufacturing workflows. Works with industrial and collaborative robots including Yaskawa Motoman and the HC10 cobot, the Igus Delta robot and the Dobot Magician, and pairs automation with computer vision, Industrial IoT and CAD digital twins.",
    photo: "assets/img/arjun.jpg",
    resume: "assets/Arjun_Rose_J_S_Resume.pdf",
    email: "arjunrose2005@gmail.com",
    phone: "+91 83173 12557",
    phoneHref: "+918317312557",
    linkedin: "https://www.linkedin.com/in/arjun-rose-j-s",
    github: "https://github.com/arjunrose",
    githubUser: "arjunrose",
    /* Repositories left out of the live GitHub feed (profile, site and scratch repos). Edit freely. */
    githubHide: ["arjunrose", "arjunrose.github.io", "arjunrosejs.github.io", "Arjun_Rose_J_S", "arjun-rose-portfolio", "hello_arjun", "new1", "awards"]
  },

  /* Four quick facts for people who skim. {projects}, {certs} are filled in automatically. */
  glance: [
    { label: "Degree", text: "B.Tech Robotics and Automation, AI specialization. CGPA 7.66, First Class." },
    { label: "Industry", text: "Internships at Yaskawa India and Tamil Nadu Newsprint and Papers." },
    { label: "PLC", text: "Siemens S7-300, S7-400, S7-1200 and S7-1500 in TIA Portal." },
    { label: "Builds", text: "{projects} projects across robotics, vision, embedded and automation." }
  ],

  /* Hardware he has worked on directly */
  platforms: {
    robots: [
      "Yaskawa Motoman GP8",
      "Yaskawa Motoman MH24",
      "Yaskawa HC10 cobot",
      "Igus Delta robot",
      "Dobot Magician"
    ],
    plcFamilies: ["S7-300", "S7-400", "S7-1200", "S7-1500"],
    cells: ["Festo MPS"]
  },

  experience: [
    {
      id: "yaskawa",
      org: "Yaskawa India Pvt. Ltd.",
      role: "Internship",
      kind: "industry",
      start: "2025-06",
      end: "2025-07",
      text:
        "Operated the Motoman MH24 (DX200) with automatic tool changers and grippers, including welding applications. Studied tool-changer logic, workflow sequencing and robot commissioning, and observed AC-drive manufacturing and Production Support Software integration.",
      skills: ["Yaskawa Motoman", "Robotics"]
    },
    {
      id: "siemens-training",
      org: "Siemens PLC training",
      role: "Training",
      kind: "industry",
      start: "2025-04",
      end: "2025-04",
      text:
        "S7-300, S7-400, S7-1200 and S7-1500: programming, SCADA, drive control, web configuration and TIA Portal.",
      skills: ["Siemens PLC", "TIA Portal", "SCADA"]
    },
    {
      id: "tnpl",
      org: "Tamil Nadu Newsprint & Papers Ltd.",
      role: "Internship",
      kind: "industry",
      start: "2024-06",
      end: "2024-07",
      text:
        "PLC systems, ASRS, conveyors, sensors and paper-machine operations. Studied plant automation architecture, system integration and control strategies in continuous manufacturing.",
      skills: ["Siemens PLC"]
    },
    {
      id: "gdsc",
      org: "Google Developer Student Club",
      role: "Member",
      kind: "club",
      start: "2023-09",
      end: "present",
      text:
        "Completed the Google Computing Foundations and Generative AI Level 3 pathways and was awarded Google swag.",
      skills: []
    },
    {
      id: "iot-club",
      org: "IoT & Robotics Club, Karunya",
      role: "Member",
      kind: "club",
      start: "2023-01",
      end: "2024-12",
      text:
        "Hands-on IoT and robotics projects with NVIDIA Jetson Nano and Raspberry Pi at the Computer Technology Centre.",
      skills: ["Jetson Nano", "Raspberry Pi"]
    },
    {
      id: "degree",
      org: "Karunya Institute of Technology and Sciences",
      role: "B.Tech Robotics and Automation, AI specialization",
      short: "Karunya Institute",
      roleShort: "B.Tech degree",
      kind: "study",
      start: "2022-08",
      end: "2026-05",
      text: "CGPA 7.66, First Class. Coimbatore.",
      skills: []
    }
  ],

  /* Single-day or short moments drawn as markers on the timing diagram */
  milestones: [
    { id: "mindcraft", date: "2024-02", label: "Project Exhibition Award, MindCraft" }
  ],

  projects: [
    {
      id: "siemens-plc",
      title: "Siemens PLC-Based Industrial Automation & Control",
      domains: ["automation"],
      tags: ["TIA Portal", "Ladder", "HMI"],
      skills: ["Siemens PLC", "TIA Portal", "Ladder Logic"],
      featured: true,
      art: "plc",
      summary:
        "Programmed Siemens PLCs in ladder logic using TIA Portal, with HMI faceplates for automated systems. Configured the I/O modules and followed the software development lifecycle from technical specification to testing, to simulate cost-efficient production.",
      facts: [
        ["Controller", "Siemens PLC"],
        ["Software", "TIA Portal"],
        ["Language", "Ladder logic"],
        ["Interface", "HMI faceplates"],
        ["Process", "Specification, I/O configuration, test"]
      ]
    },
    {
      id: "areca-robot",
      links: [{ label: "Project page", href: "https://arjunrose.github.io/Areca_Robot/" }, { label: "Source on GitHub", href: "https://github.com/arjunrose/Areca_Robot" }],
      title: "Areca Palm Tree Climbing & Harvesting Robot",
      domains: ["robotics"],
      tags: ["Fusion 360", "Digital twin"],
      skills: ["Fusion 360"],
      featured: true,
      art: "climber",
      summary:
        "Designed and simulated a climbing robot in Autodesk Fusion 360: motor enclosures, wheel geometry and a spring-based gripper. Used generative design and motion links as a digital twin to validate the mechanics before building.",
      facts: [
        ["CAD", "Autodesk Fusion 360"],
        ["Mechanisms", "Motor enclosures, wheel geometry, spring gripper"],
        ["Validation", "Generative design, motion links"],
        ["Approach", "Digital twin"]
      ]
    },
    {
      id: "vision-sorting",
      title: "Vision-Based Industrial Sorting Automation",
      domains: ["vision", "automation"],
      tags: ["Python", "OpenCV", "Pneumatics"],
      skills: ["Python", "OpenCV", "Computer Vision", "Hydraulics & Pneumatics"],
      featured: true,
      art: "vision",
      summary:
        "Built an automated sorting system with Python and OpenCV. Integrated sensor-triggered pneumatic actuation and diagnosed signal timing and mechanical alignment to keep accuracy high.",
      facts: [
        ["Vision", "Python, OpenCV"],
        ["Actuation", "Sensor-triggered pneumatics"],
        ["Diagnostics", "Signal timing, mechanical alignment"]
      ]
    },
    {
      id: "mimic-arm",
      title: "Mimic Robotic Arm with Real-Time Control",
      domains: ["robotics", "embedded"],
      tags: ["Servos", "Sensors"],
      skills: ["Robotics"],
      featured: true,
      art: "arm",
      summary:
        "Built a microcontroller-based robotic arm with real-time servo actuation from sensor input. Wrote the control logic and signal processing for stable, synchronized motion.",
      facts: [
        ["Control", "Microcontroller"],
        ["Actuation", "Servos, driven in real time"],
        ["Input", "Sensors"],
        ["Work", "Control logic, signal processing"]
      ]
    },

    { id: "mapping-robot", title: "Autonomous 2D Mapping Robot", domains: ["robotics"], tags: ["MATLAB", "DFS"], skills: ["MATLAB", "Robotics"] },
    { id: "floor-drawing", title: "Autonomous Floor Drawing Robot", domains: ["robotics"], tags: ["Robotics"], skills: ["Robotics"], links: [{ label: "Source on GitHub", href: "https://github.com/arjunrose/Drawing_Robot" }] },
    { id: "human-detection", title: "Human Detection in Disaster Areas", domains: ["vision"], tags: ["Jetson Nano"], skills: ["Jetson Nano", "Computer Vision"] },
    { id: "face-detection", title: "Face Detection System", domains: ["vision"], tags: ["Raspberry Pi 4"], skills: ["Raspberry Pi", "Computer Vision"] },
    { id: "humanoid", title: "Humanoid Robot", domains: ["robotics"], tags: ["Robotics"], skills: ["Robotics"] },
    { id: "can-protocol", title: "CAN Protocol Communication", domains: ["embedded"], tags: ["STM32", "ESP32", "CAN"], skills: ["CAN", "STM32F407", "ESP32"] },
    { id: "id-card", title: "Student ID Card Detection & Management", domains: ["vision"], tags: ["YOLOv8"], skills: ["Computer Vision"] },
    { id: "dobot-kinematics", title: "Kinematic Analysis of Dobot Magician", domains: ["robotics"], tags: ["Kinematics"], skills: ["Dobot Magician", "Robotics"] },
    { id: "plant-monitor", title: "Smart Plant Monitoring System", domains: ["embedded"], tags: ["IoT"], skills: [] },
    { id: "head-cursor", title: "Wireless PC Cursor Control via Head Movements", domains: ["embedded"], tags: ["Sensors", "ESP8266", "MPU6050"], skills: ["ESP8266", "Python"], links: [{ label: "Source on GitHub", href: "https://github.com/arjunrose/Smart-Headset-Cursor-Controller-with-ESP8266-and-MPU6050" }] },
    { id: "level-scale", title: "Digital Level Scale", domains: ["embedded"], tags: ["Embedded"], skills: [] },
    { id: "steam-engine", title: "Steam Engine Prototype Demonstration", domains: ["robotics"], tags: ["Mechanical"], skills: [] },
    { id: "light-tracker", title: "Light Tracking Robot", domains: ["robotics"], tags: ["Robotics"], skills: ["Robotics"] },
    { id: "dtmf-home", title: "DTMF-Based Home Automation", domains: ["embedded"], tags: ["DTMF"], skills: [] },
    { id: "grass-cutter", title: "Bluetooth-Controlled Grass Cutting Robot", domains: ["robotics"], tags: ["Bluetooth"], skills: ["Robotics"] },
    { id: "obstacle-avoid", title: "Obstacle Avoidance Robot", domains: ["robotics"], tags: ["Robotics"], skills: ["Robotics"] },
    { id: "line-follower", title: "Line Follower Robot", domains: ["robotics"], tags: ["Robotics"], skills: ["Robotics"] }
  ],

  domainLabels: {
    automation: "Automation",
    robotics: "Robotics and mechanical",
    vision: "Vision and AI",
    embedded: "Embedded and IoT"
  },

  levelLabels: { adv: "Advanced", int: "Intermediate", hands: "Hands-on", bas: "Basic" },

  skills: [
    {
      group: "Automation",
      items: [
        { n: "Siemens PLC", lvl: "adv" },
        { n: "TIA Portal", lvl: "adv" },
        { n: "Ladder Logic", lvl: "hands" },
        { n: "Festo MPS", lvl: "hands" },
        { n: "SCADA", lvl: "hands" },
        { n: "Hydraulics & Pneumatics", lvl: "int" }
      ]
    },
    {
      group: "Robotics and vision",
      items: [
        { n: "Yaskawa Motoman", lvl: "hands" },
        { n: "Yaskawa HC10 Cobot", lvl: "hands" },
        { n: "Igus Delta", lvl: "hands" },
        { n: "Dobot Magician", lvl: "hands" },
        { n: "Robotics", lvl: "int" },
        { n: "Computer Vision", lvl: "int" },
        { n: "OpenCV", lvl: "hands" }
      ]
    },
    {
      group: "Programming",
      items: [
        { n: "Python", lvl: "int" },
        { n: "C", lvl: "bas" },
        { n: "C++", lvl: "bas" },
        { n: "MATLAB", lvl: "bas" },
        { n: "LaTeX", lvl: "bas" },
        { n: "HTML", lvl: "bas" }
      ]
    },
    {
      group: "Tools",
      items: [
        { n: "Arduino IDE", lvl: "adv" },
        { n: "GitHub", lvl: "int" },
        { n: "Fusion 360", lvl: "int" },
        { n: "SolidWorks", lvl: "int" },
        { n: "AutoCAD", lvl: "int" },
        { n: "Keil µVision", lvl: "int" },
        { n: "CODESYS", lvl: "hands" },
        { n: "LabVIEW", lvl: "bas" },
        { n: "Thonny", lvl: "bas" }
      ]
    },
    {
      group: "Platforms",
      items: [
        { n: "Raspberry Pi", lvl: "int" },
        { n: "Jetson Nano", lvl: "int" },
        { n: "ESP32", lvl: "int" },
        { n: "ESP8266", lvl: "int" },
        { n: "Arduino", lvl: "int" },
        { n: "Linux", lvl: "int" },
        { n: "Windows", lvl: "int" },
        { n: "STM32F407", lvl: "bas" },
        { n: "CAN", lvl: "hands" }
      ]
    },
    {
      group: "Working style",
      soft: true,
      items: [
        { n: "Leadership" },
        { n: "Team collaboration" },
        { n: "Project management" },
        { n: "Problem-solving" },
        { n: "Time management" }
      ]
    }
  ],

  education: [
    {
      title: "B.Tech Robotics and Automation (AI specialization)",
      org: "Karunya Institute of Technology and Sciences, Coimbatore",
      years: "2022 to 2026",
      result: "CGPA 7.66, First Class"
    },
    {
      title: "Higher Secondary Certificate",
      org: "Good Shepherd Matriculation Higher Secondary School, Marthandam",
      years: "2021 to 2022",
      result: "66.67%"
    },
    {
      title: "Secondary School Leaving Certificate",
      org: "Good Shepherd Matriculation Higher Secondary School, Marthandam",
      years: "2010 to 2020",
      result: "57.60%"
    }
  ],

  awards: [
    { title: "Project Exhibition Award", org: "MindCraft, Karunya", when: "Feb 2024" },
    { title: "Outstanding Performance, Life Induction Program", org: "Karunya", when: "Aug 2022" }
  ],

  community: [
    {
      title: "NCC Brass Band, Karunya",
      text: "Euphonium player. Performed on Republic Day and Independence Day.",
      when: "Aug 2022 to present"
    },
    { title: "Rotaract Club, Karunya", text: "Community service.", when: "Aug 2023 to Jun 2024" },
    { title: "National Service Scheme, Karunya", text: "Social service.", when: "Aug 2022 to Jun 2023" }
  ],

  certs: [
    { title: "Siemens Certified Training: Basic Industrial PLC", issuer: "Siemens", topic: "automation" },
    { title: "Introduction to Industry 4.0 and Industrial IoT", issuer: "NPTEL", topic: "automation" },
    { title: "Getting Started with AI on Jetson Nano", issuer: "NVIDIA", topic: "vision" },
    { title: "AWS DeepRacer: Driven by Reinforcement Learning", issuer: "AWS", topic: "ai" },
    { title: "Autodesk Fusion 360", issuer: "Autodesk", topic: "cad" },
    { title: "MATLAB Onramp", issuer: "MathWorks", topic: "programming" },
    { title: "Python", issuer: "Kaggle, Simplilearn, GUVI", topic: "programming" },
    { title: "AI For India 2.0", issuer: "GUVI", topic: "ai" },
    { title: "Problem Solving Using Computational Thinking", issuer: "Coursera", topic: "programming" },
    { title: "Google Cybersecurity Professional Certificate", issuer: "Google", topic: "it" },
    { title: "Microsoft Azure Fundamentals", issuer: "Microsoft", topic: "it" },
    { title: "Network Addressing and Basic Troubleshooting", issuer: "Cisco", topic: "it" },
    { title: "Linux Tutorial", issuer: "Great Learning Academy", topic: "it" },
    { title: "Speaking Effectively", issuer: "NPTEL", topic: "soft" }
  ]
};
