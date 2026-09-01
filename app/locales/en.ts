import { Translations } from './zh'

export const en: Translations = {
  seo: {
    title: "Envis - Smarter Environment Management Tool",
    description: "A cross-platform environment management tool that makes switching development environments as natural as breathing. Supports one-click installation, environment isolation, config export. Reliable and secure. 10+ services supported.",
    ogTitle: "Envis - Smarter Environment Management Tool",
    ogDescription: "A cross-platform environment management tool that makes switching development environments as natural as breathing. Supports one-click installation, environment isolation, and config export.",
    keywords: ["environment management", "development tools", "macOS", "Windows", "Linux", "cross-platform", "version management", "Node.js", "Python", "Go", "Docker", "dev environment", "environment isolation", "config management"]
  },
  nav: {
    github: "GitHub",
    docs: "Documentation",
    download: "Download"
  },
  hero: {
    badge: "Star Envis on GitHub if you like it",
    title: "Smarter Environment Management",
    subtitle: "A cross-platform environment management tool that makes switching development environments as natural as breathing",
    downloadBtn: "Download Now",
    sourceBtn: "View Source"
  },
  stats: {
    services: "Services",
    crossPlatform: "Cross-platform",
    platformSupport: "All Platforms",
    openSource: "Open Source",
    license: "MIT License"
  },
  features: {
    title: "Core Features",
    oneClickInstall: {
      title: "One-Click Install",
      desc: "Automatically download, configure, and start services"
    },
    isolation: {
      title: "Environment Isolation",
      desc: "Complete isolation between projects, no interference"
    },
    export: {
      title: "Config Export",
      desc: "One-click export and import of environment configurations"
    },
    secure: {
      title: "Secure & Reliable",
      desc: "Runs locally, full control of your data"
    }
  },
  quickStart: {
    title: "Quick Start",
    step1: {
      title: "Create",
      desc: "New Environment"
    },
    step2: {
      title: "Configure",
      desc: "Service Configuration"
    },
    step3: {
      title: "Run",
      desc: "One-Click Start"
    }
  },
  scenarios: {
    title: "Use Cases",
    rapid: {
      title: "Rapid Environment Setup",
      desc: "Setting up environments for new projects is often challenging with difficult downloads, complex configurations, and dependency errors. Envis streamlines this with one-click installation, eliminating manual configuration and dependency troubleshooting to get your project running immediately."
    },
    switch: {
      title: "Seamless Multi-Project Switching",
      desc: "When working on multiple projects, one might need Node 14, Java 8, and MySQL, while another requires Node 20, Java 11, and MariaDB. Switching between projects means juggling multiple environment configurations. Envis enables one-click environment switching for effortless management of complex project dependencies."
    },
    team: {
      title: "Standardized Team Environments",
      desc: "Configuring environments on every computer is tedious. Envis supports exporting and importing environment configurations, enabling one-click setup of identical environments across all machines. Eliminate 'it works on my machine' issues and ensure consistent development environments for all team members, guaranteeing stable project execution on different devices."
    }
  },
  showcase: {
    eyebrow: "From setup to running",
    title: "One workspace for every project's environment",
    description: "Stop bouncing between installers, terminals, config files, and system settings. Envis brings the full environment lifecycle into one clear workspace.",
    items: [
      {
        number: "01",
        title: "Create an isolated project environment",
        desc: "Name a dedicated workspace with its own services and versions. Keep the system clean and other projects untouched.",
        image: "/docs/01_main/2.png",
        alt: "Creating a new isolated development environment in Envis"
      },
      {
        number: "02",
        title: "Choose the services and versions you need",
        desc: "Combine languages, databases, and servers around the project. Reuse installed versions or download another when needed.",
        image: "/docs/01_main/3.png",
        alt: "Selecting a Node.js service version in Envis"
      },
      {
        number: "03",
        title: "Keep full control of the details",
        desc: "Configure registries, install prefixes, and runtime settings per service. Envis removes repetition without hiding the controls developers need.",
        image: "/docs/01_main/4.png",
        alt: "Configuring Node.js environment settings in Envis"
      }
    ]
  },
  workflow: {
    eyebrow: "A complete workflow",
    title: "Environment management should feel this direct",
    description: "Turn frequent, error-prone setup work into a visible, reusable, and portable four-step flow.",
    items: [
      { title: "Create", desc: "Make an isolated workspace for each project without disrupting global tools." },
      { title: "Compose", desc: "Add languages, databases, servers, and custom services as needed." },
      { title: "Switch", desc: "Keep multiple version sets and move between projects in one step." },
      { title: "Transfer", desc: "Export the complete setup so another machine can reproduce it quickly." }
    ]
  },
  capabilities: {
    eyebrow: "More capabilities",
    title: "Details built for real development work",
    description: "From daily switching to team onboarding, the essentials live in one local tool.",
    items: [
      { title: "Multiple versions", desc: "Keep several versions of a service and activate them per environment." },
      { title: "Service overview", desc: "See running, stopped, and installed states at a glance." },
      { title: "System monitoring", desc: "Track CPU, memory, disk, and network status in one place." },
      { title: "Quick commands", desc: "Attach project folders, editors, and frequent commands to an environment." },
      { title: "Custom services", desc: "Bring your own tools beyond the built-in catalog." },
      { title: "Hosts management", desc: "Manage and switch local project domains with the environment." },
      { title: "Import and export", desc: "Reproduce setups without scattered onboarding instructions." },
      { title: "Local first", desc: "Keep configuration and project data on your device, under your control." }
    ]
  },
  audience: {
    eyebrow: "Who it is for",
    title: "Less friction solo. More consistency together.",
    items: [
      { title: "Multi-project developers", desc: "Maintain new and legacy projects without manually changing a chain of dependencies." },
      { title: "Full-stack and indie developers", desc: "Compose frontend, backend, databases, and local services in one interface." },
      { title: "Engineering teams", desc: "Share reproducible setups and reduce onboarding and collaboration overhead." }
    ]
  },
  faq: {
    eyebrow: "FAQ",
    title: "A few things to know before you start",
    items: [
      { question: "Is Envis free?", answer: "Yes. Envis is an open-source project released under the MIT License and is free to download and use." },
      { question: "Which operating systems are supported?", answer: "Envis is built for macOS, Windows, and Linux. This page currently offers the macOS Apple Silicon build; follow GitHub Releases for other platforms." },
      { question: "Will it modify my global environment?", answer: "Envis is designed to isolate services and versions between projects, minimizing changes to your global system environment." },
      { question: "Which services can it manage?", answer: "It covers common languages, databases, servers, Hosts, and custom services, with more integrations planned." },
      { question: "How can a team use Envis?", answer: "Export a project environment and let teammates import it to establish a consistent setup faster." }
    ]
  },
  finalCta: {
    eyebrow: "Open source · Local first · Cross-platform",
    title: "Keep your time for code, not environment setup",
    description: "Download Envis and create your first reusable development environment.",
    download: "Download for macOS",
    release: "View GitHub Releases"
  },
  footer: {
    copyright: "© 2025 Envis",
    openSource: "Open Source",
    github: "GitHub",
    docs: "Documentation"
  }
}
