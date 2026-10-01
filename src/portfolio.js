/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Cyrus John Machete",
  title: "Hi all, I'm Cyrus",
  subTitle: emoji(
    "Full Stack Developer 🚀 experienced in building websites, web applications, and eCommerce solutions. Skilled in React.js, Node.js, Java, Shopify, WordPress, WooCommerce, and Shopify Liquid. Experienced with GSAP, API integrations, GHL, Zapier, Kajabi, AWS, and CI/CD, with a focus on responsive, user-friendly, and reliable solutions."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1iP2ROmRj8TphEZQIX5CCcb6yMj3yJaqE/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sairus16/",
  linkedin: "https://www.linkedin.com/in/cyrus-john-machete-8a0a9b102/",
  gmail: "cyrusjohn16@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saiiirus",
  instagram: "https://www.instagram.com/saiiiiirus_/",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER EXPERIENCED IN WEB DEVELOPMENT, ECOMMERCE, INTEGRATIONS, AND CLOUD TECHNOLOGIES",
  skills: [
    emoji(
      "⚡ Build responsive and interactive web applications using React.js, JavaScript, HTML5, CSS3, and GSAP"
    ),
    emoji(
      "⚡ Develop scalable backend applications and REST APIs using Node.js, Express.js, and Java EE"
    ),
    emoji(
      "⚡ Build and customize Shopify, WordPress, WooCommerce, and Elementor websites, including eCommerce stores and custom product pages"
    ),
    emoji(
      "⚡ Integrate third-party services, payment gateways, REST APIs, GoHighLevel, Zapier, and Kajabi"
    ),
    emoji(
      "⚡ Deploy and manage applications using AWS, Edge Cloud, GitHub Actions, and CI/CD workflows"
    ),
    emoji(
      "⚡ Develop interactive landing pages, custom websites, and user-friendly digital experiences with a focus on performance and SEO"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
  {
    skillName: "html-5",
    fontAwesomeClassname: "fab fa-html5"
  },
  {
    skillName: "css3",
    fontAwesomeClassname: "fab fa-css3-alt"
  },
  {
    skillName: "javascript",
    fontAwesomeClassname: "fab fa-js"
  },
  
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
  {
    skillName: "reactjs",
    fontAwesomeClassname: "fab fa-react"
  },
  {
    skillName: "nodejs",
    fontAwesomeClassname: "fab fa-node-js"
  },
  {
    skillName: "aws",
    fontAwesomeClassname: "fab fa-aws"
  },
  {
    skillName: "java",
    fontAwesomeClassname: "fab fa-java"
  },
  {
    skillName: "shopify",
    fontAwesomeClassname: "fab fa-shopify"
  },
  {
    skillName: "wordpress",
    fontAwesomeClassname: "fab fa-wordpress"
  },
  {
    skillName: "npm",
    fontAwesomeClassname: "fab fa-npm"
  },
  {
    skillName: "mysql",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "sql-database",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "aws",
    fontAwesomeClassname: "fab fa-aws"
  },
  {
    skillName: "git",
    fontAwesomeClassname: "fab fa-git-alt"
  }
],
display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "AMA Computer Learning Center",
      logo: require("./assets/images/ama-logo.png"),
      subHeader: "Bachelor of Science in Information Technology",
      duration: "Graduated 2015",
      desc: "Completed a Bachelor of Science in Information Technology."
    },
    {
      schoolName: "Emmaus Christian School Inc.",
      logo: require("./assets/images/ecs.jpeg"),
      subHeader: "Secondary Education",
      duration: "Graduated 2012",
      desc: "Completed secondary education in Malanday, Valenzuela City."
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software/Web Developer",
      company: "ELI Information Technology Solutions",
      companylogo: require("./assets/images/eli-logo.png"),
      date: "April 2022 – March 2025",
      desc: "Developed and maintained web applications using React.js, Node.js, REST APIs, WordPress, Odoo, and MySQL. Led a team of 4+ developers and worked with Agile methodologies, Jira, Git, AWS, Edge Cloud, and CI/CD.",
      descBullets: [
        "Led a team of developers and managed projects using Agile sprints and Jira.",
        "Developed scalable React.js and Node.js applications and RESTful APIs.",
        "Designed and developed booking and appointment websites using WordPress and Odoo.",
        "Integrated PayMongo and third-party APIs into web applications.",
        "Deployed applications using AWS, Edge Cloud, GitHub Actions, and CI/CD pipelines."
      ]
    },
    {
      role: "IT Programmer",
      company: "MegaKarte SmartCard Corporation",
      companylogo: require("./assets/images/megakarte-logo.jpeg"),
      date: "March 2016 – April 2021",
      desc: "Designed, developed, and deployed Java EE applications using JBoss Application Server for asset tracking, loyalty management, sales performance, barangay registration, and event check-in systems.",
      descBullets: [
        "Developed scalable Java EE applications using JBoss Application Server.",
        "Built systems for asset tracking, customer loyalty, sales performance, and event management.",
        "Integrated applications with frontend systems and third-party APIs.",
        "Optimized application performance using JBoss clustering and connection pooling."
      ]
    },
    {
      role: "IT Intern",
      company: "WeDo BPO",
      companylogo: require("./assets/images/wedo-logo.png"),
      date: "2015",
      desc: "Provided IT support and assisted with internal systems, software, networking, databases, and data management.",
      descBullets: [
        "Provided technical support for software, hardware, and network-related issues.",
        "Assisted with system maintenance, backups, and database queries."
      ]
    },
    {
      role: "IT Intern",
      company: "Rockfort Documentation Services",
      companylogo: require("./assets/images/rockfort-logo.jpeg"),
      date: "2015",
      desc: "Designed and developed a responsive WordPress website while focusing on accessibility, web standards, and user navigation.",
      descBullets: [
        "Developed and customized a responsive WordPress website.",
        "Improved website accessibility and user navigation."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SELECTED WEB APPLICATIONS, ECOMMERCE SOLUTIONS, AND BUSINESS SYSTEMS",
  projects: [
    {
      image: require("./assets/images/asset-logo.jpg"),
      projectName: "Asset Tracking System",
      projectDesc:
        "Enterprise system developed using Java EE and JBoss for real-time tracking and management of organizational assets."
    },
    {
      image: require("./assets/images/loyalty-logo.jpg"),
      projectName: "Loyalty System",
      projectDesc:
        "Customer loyalty platform supporting point-based rewards, redemption workflows, and customer retention."
    },
    {
      image: require("./assets/images/sales-logo.png"),
      projectName: "Sales Performance System",
      projectDesc:
        "Dashboard and reporting system providing sales analytics and performance evaluation for business teams."
    },
    {
      image: require("./assets/images/barangay-logo.png"),
      projectName: "Barangay Registration System",
      projectDesc:
        "Web-based system designed to digitize and manage community registration and administrative data."
    },
    {
      image: require("./assets/images/event-logo.png"),
      projectName: "Event Check-in System",
      projectDesc:
        "Event management system enabling attendee validation and real-time check-in tracking."
    },
    {
      image: require("./assets/images/web-logo.jpeg"),
      projectName: "Ecommerce & Business Websites",
      projectDesc:
        "Developed custom Shopify, WordPress, WooCommerce, and Elementor websites including product pages, landing pages, checkout customization, and third-party integrations."
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements & Highlights 🏆"),
  subtitle:
    "Professional achievements, technical contributions, and key projects throughout my career.",

  achievementsCards: [
    {
      title: "Led a Development Team",
      subtitle:
        "Led a team of developers at ELI Information Technology Solutions, managing Agile sprints, Jira tasks, code collaboration, and project delivery.",
      image: require("./assets/images/lead.png"),
      imageAlt: "Development Team",
      footerLink: []
    },
    {
      title: "Enterprise Java Applications",
      subtitle:
        "Designed and deployed multiple Java EE applications using JBoss, including Asset Tracking, Loyalty, Sales Performance, Barangay Registration, and Event Check-in systems.",
      image: require("./assets/images/java-applications.png"),
      imageAlt: "Enterprise Java Applications",
      footerLink: []
    },
    {
      title: "Cloud & CI/CD Deployment",
      subtitle:
        "Deployed web applications using AWS and Edge Cloud platforms and implemented GitHub Actions CI/CD pipelines to streamline development and deployment workflows.",
      image: require("./assets/images/ci-cd.png"),
      imageAlt: "Cloud and CI/CD",
      footerLink: []
    },
    {
      title: "Full Stack Web Development",
      subtitle:
        "Developed responsive web applications using React.js, Node.js, REST APIs, WordPress, Shopify, WooCommerce, and other modern web technologies.",
      image: require("./assets/images/fullstack.png"),
      imageAlt: "Full Stack Development",
      footerLink: []
    }
  ],

  display: true
};

// Blogs Section

const blogSection = {
  title: "Technical Insights",
  subtitle:
    "Sharing practical experience and insights from web development, eCommerce, cloud technologies, and software engineering.",
  displayMediumBlogs: "false",
  blogs: [
    {
      url: "",
      title: "Modern Full Stack Web Development",
      description:
        "Exploring frontend and backend development using React.js, Node.js, REST APIs, Java, and modern web technologies."
    },
    {
      url: "",
      title: "Shopify & WordPress Development",
      description:
        "Practical experience building custom eCommerce stores, product pages, landing pages, and integrations using Shopify, WordPress, WooCommerce, and Elementor."
    },
    {
      url: "",
      title: "API Integrations & Automation",
      description:
        "Working with REST APIs, GoHighLevel, Zapier, Kajabi, payment gateways, and third-party services to create connected business workflows."
    },
    {
      url: "",
      title: "Cloud & CI/CD",
      description:
        "Experience deploying applications with AWS, Edge Cloud, GitHub Actions, and CI/CD workflows for reliable development and deployment."
    }
  ],
  display: true
};

// Talks Sections

const talkSection = {
  title: "PROFESSIONAL FOCUS",
  subtitle: emoji(
    "BUILDING PRACTICAL, RESPONSIVE, AND RELIABLE WEB SOLUTIONS 🚀"
  ),

  talks: [
    {
      title: "Full Stack Web Development",
      subtitle:
        "React.js, Node.js, Java, REST APIs, and modern frontend and backend development",
      slides_url: "",
      event_url: ""
    },
    {
      title: "eCommerce & CMS Development",
      subtitle:
        "Shopify, Shopify Liquid, WordPress, Elementor, WooCommerce, and custom eCommerce solutions",
      slides_url: "",
      event_url: ""
    },
    {
      title: "Cloud & DevOps",
      subtitle:
        "AWS, Edge Cloud, GitHub Actions, CI/CD, and scalable application deployment",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Have a project in mind or want to connect? Feel free to reach out.",
  number: "+63 906 083 4195",
  email_address: "cyrusjohn16@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
