import { motion } from "framer-motion";
import {
  Download, Mail, Cloud, Shield, Server, Network, Lock, Monitor,
  Users, CheckCircle2, Briefcase, GraduationCap, Award, Linkedin,
  Phone, MapPin, Building2, Layers, Send, ArrowUpRight, Sparkles,
  Terminal, Database, Globe, Github, ExternalLink, Cpu, Wrench, Check,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const assetBase = import.meta.env.BASE_URL;
const AVATAR = `${assetBase}assets/sarfraaj-portrait.jpg`;
const RESUME_URL = `${assetBase}assets/Sarfraaj-Khan-Resume.pdf`;

// ---------- HERO ----------
export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto w-full text-center relative z-10">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-cyan-500/30 bg-[#0c101c]/80 backdrop-blur-xl shadow-[0_0_20px_rgba(34,211,238,0.15)] mb-8"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
          </span>
          <span className="font-mono text-[11px] tracking-[0.16em] uppercase font-semibold text-cyan-300">
            Available for L1 / L2 Support & SysAdmin Roles
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-black leading-[1.02] tracking-[-0.045em] text-[2.8rem] sm:text-6xl md:text-7xl lg:text-[6.5rem] text-white"
        >
          <span className="inline-flex items-center gap-3 sm:gap-6 flex-wrap justify-center">
            Hi, I&rsquo;m
            <motion.span
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative inline-block align-middle"
            >
              <span
                className="absolute inset-0 rounded-full blur-2xl opacity-60"
                style={{ background: "radial-gradient(circle, rgba(34,211,238,0.8) 0%, rgba(59,130,246,0.5) 100%)" }}
              />
              <img
                src={AVATAR}
                alt="Sarfraaj Khan"
                className="relative h-16 w-16 md:h-24 md:w-24 lg:h-28 lg:w-28 rounded-full object-cover ring-2 ring-cyan-400/80 shadow-[0_0_25px_rgba(34,211,238,0.4)]"
              />
            </motion.span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-200">
              Sarfraaj
            </span>
          </span>
          <br />
          <span className="inline-flex items-center gap-3 flex-wrap justify-center mt-3">
            <span className="font-italic-serif italic font-normal text-slate-400">Enterprise</span>{" "}
            IT Support Engineer
          </span>
          <br />
          <span className="inline-flex items-center gap-4 flex-wrap justify-center mt-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 text-cyan-glow">
            &amp; Cloud Systems Admin.
          </span>
        </motion.h1>

        {/* Professional Summary */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 max-w-2xl mx-auto text-[15px] md:text-lg text-slate-400 leading-relaxed font-normal"
        >
          Engineering resilient enterprise infrastructure, cloud workspaces, and rapid user support — <span className="text-slate-200 font-semibold">3.8+ years</span> specializing across Microsoft 365, Azure, Intune, Windows Server, and cyber defense.
        </motion.p>

        {/* 3 Call-To-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all"
          >
            View Projects
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium border border-cyan-500/40 text-cyan-300 bg-cyan-950/20 hover:bg-cyan-500/15 hover:border-cyan-300 transition-all shadow-[0_0_15px_rgba(34,211,238,0.1)]"
          >
            Contact Me
          </a>
          <a
            href={RESUME_URL}
            download="Sarfraaj-Khan-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium border border-white/10 text-slate-300 bg-white/5 hover:text-white hover:bg-white/10 transition-all"
          >
            <Download className="h-4 w-4 text-cyan-400" />
            Download Resume
          </a>
        </motion.div>

        {/* Clean Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <a
            href="https://github.com/Sarfraz882"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/30 transition-all text-xs font-mono"
          >
            <Github className="h-3.5 w-3.5 text-cyan-400" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/sarfraaj-engineer/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/30 transition-all text-xs font-mono"
          >
            <Linkedin className="h-3.5 w-3.5 text-cyan-400" />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:sarfaraajsince2004@gmail.com"
            aria-label="Email Me"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/30 transition-all text-xs font-mono"
          >
            <Mail className="h-3.5 w-3.5 text-cyan-400" />
            <span>Email</span>
          </a>
        </motion.div>

        <LogoMarquee />
      </div>
    </section>
  );
}

function LogoMarquee() {
  const items = [
    "Microsoft 365", "Azure / Entra ID", "Windows Server 2022", "Active Directory & GPO",
    "Microsoft Intune", "Google Workspace", "EDR / EPP Security",
    "SonicWall / VPN", "macOS & Windows 11", "PowerShell Automation",
  ];
  const doubled = [...items, ...items];
  return (
    <div className="mt-20 relative overflow-hidden py-4 border-y border-white/[0.06] bg-white/[0.01]">
      <div className="flex gap-10 animate-marquee whitespace-nowrap w-max">
        {doubled.map((t, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            <span className="font-display font-semibold text-lg md:text-xl text-slate-300/80 tracking-wide">{t}</span>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#08090d] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#08090d] to-transparent" />
    </div>
  );
}




// ---------- SECTION HEADER ----------
function SectionHeader({
  index, eyebrow, title, description,
}: {
  index: string; eyebrow: string; title: React.ReactNode; description?: string;
}) {
  return (
    <div className="mb-14">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-300 font-mono text-[11px] tracking-[0.18em] uppercase mb-4">
        <span>/ {index}</span>
        <span className="h-1 w-1 rounded-full bg-cyan-400" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="font-display font-black tracking-[-0.04em] leading-[0.98] text-3xl sm:text-5xl md:text-6xl text-white max-w-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
}

// ---------- ABOUT ----------
export function About() {
  const chips = [
    { k: "Core Domain", v: "Enterprise Cloud & IT Support", icon: Cloud },
    { k: "Service Tier", v: "L1 / L2 & Incident Escalation", icon: Shield },
    { k: "Cloud Platforms", v: "Microsoft 365 · Azure · Intune", icon: Layers },
    { k: "Infrastructure", v: "Active Directory · GPO · SonicWall", icon: Server },
    { k: "Endpoint Security", v: "EDR / EPP · Defender · Hardening", icon: Lock },
    { k: "Location", v: "New Delhi / NCR · Remote Worldwide", icon: MapPin },
  ];
  return (
    <section id="about" className="relative py-24 md:py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          index="01"
          eyebrow="About Me"
          title={
            <>
              Resilient enterprise IT operations —{" "}
              <span className="font-italic-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 text-cyan-glow">
                from
              </span>{" "}
              rapid tickets to cloud architecture.
            </>
          }
          description="From day-to-day user onboarding and incident resolution to enterprise tenant migrations, cloud endpoint policies, and secure network infrastructure — I ensure teams stay productive and protected."
        />

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="grid sm:grid-cols-2 gap-4">
            {chips.map((c) => (
              <div
                key={c.k}
                className="rounded-2xl border border-white/[0.08] bg-[#0c101c]/80 backdrop-blur-xl p-5 hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all group"
              >
                <div className="flex items-center gap-2 mb-2 text-cyan-400/90 text-xs font-mono tracking-wider uppercase">
                  <c.icon className="h-3.5 w-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span>{c.k}</span>
                </div>
                <div className="font-semibold text-slate-100 text-sm">{c.v}</div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#0c101c]/90 via-[#0d1424]/80 to-[#0c101c]/90 backdrop-blur-xl p-8 shadow-2xl relative overflow-hidden group hover:border-cyan-500/30 transition-all">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">Enterprise Track Record</div>
            <div className="flex items-baseline gap-4">
              <div className="font-display font-black text-6xl md:text-7xl text-white leading-none tracking-tight">
                3.8<span className="text-cyan-400">+</span>
              </div>
              <div className="text-sm text-slate-300 max-w-xs leading-snug">
                Years maintaining enterprise systems across Microsoft 365, Azure, Windows Server, and networks.
              </div>
            </div>

            <div className="mt-8 space-y-3 pt-6 border-t border-white/[0.08]">
              {[
                "Deployed and maintained EDR & cloud security across full corporate fleet",
                "Managed 500+ heterogeneous endpoints (Windows 11, macOS, mobile)",
                "Orchestrated vendor renewals, asset audits, and hardware lifecycle",
                "Maintained 99.8% SLA resolution compliance for mission-critical tickets",
              ].map((t) => (
                <div key={t} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 mt-0.5 shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- STATS ----------
function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const dur = 1500;
        const start = performance.now();
        const step = (t: number) => {
          const p = Math.min((t - start) / dur, 1);
          setN(Math.floor(end * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        io.disconnect();
      }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [end]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export function Stats() {
  const stats = [
    { value: 4, suffix: "+", label: "Years in Enterprise IT", desc: "Proven operational experience" },
    { value: 1200, suffix: "+", label: "Tickets Resolved", desc: "L1/L2 SLA-driven support" },
    { value: 500, suffix: "+", label: "Endpoints Managed", desc: "Windows, macOS, Mobile" },
    { value: 99, suffix: "%", label: "User Satisfaction", desc: "Positive resolution rating" },
  ];
  return (
    <section className="relative px-6 pb-12">
      <div className="max-w-[1200px] mx-auto rounded-3xl border border-white/[0.08] bg-[#0c101c]/80 backdrop-blur-xl p-8 md:p-10 grid grid-cols-2 lg:grid-cols-4 gap-8 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col">
            <div className="font-display font-black text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-300 leading-none">
              <Counter end={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-3 font-semibold text-slate-200 text-sm">{s.label}</div>
            <div className="mt-1 text-xs text-slate-400">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------- CORE COMPETENCIES & TECHNICAL SKILLS (3 PILLARS) ----------
export function Expertise() {
  const pillars = [
    {
      pillar: "Pillar 01",
      title: "Systems & Cloud Administration",
      icon: Cloud,
      accent: "from-cyan-500/20 to-blue-500/10",
      border: "hover:border-cyan-400/40",
      description: "Complete administration of enterprise cloud tenants, identity directories, and endpoint management policies.",
      skills: [
        "Microsoft 365 (Exchange Online, Teams, SharePoint)",
        "Microsoft Entra ID (Azure AD, SSO, MFA)",
        "Microsoft Intune (MDM/MAM, Autopilot, Compliance)",
        "Windows Server 2019 / 2022 (Active Directory DS)",
        "Group Policy Objects (GPO) & OU Management",
        "Google Workspace Administration",
        "Exchange Mail Flow, Shared Mailboxes & Security",
        "License Optimization & User Lifecycle Management",
      ],
    },
    {
      pillar: "Pillar 02",
      title: "IT Infrastructure & Networking",
      icon: Network,
      accent: "from-blue-500/20 to-indigo-500/10",
      border: "hover:border-blue-400/40",
      description: "Robust physical and virtual networking, security firewalls, peripheral ecosystems, and corporate meeting room tech.",
      skills: [
        "LAN / WAN Architecture & TCP/IP Routing",
        "Subnetting, VLAN Segmentation & Port Security",
        "SonicWall & Fortinet Firewall Policies",
        "Site-to-Site & Client Remote VPN Configuration",
        "Enterprise Wi-Fi APs & Controller Setup",
        "Patch Panels, Switch Stacking & Structured Cabling",
        "Network Printer Fleets, Print Servers & Spoolers",
        "Conference Room AV, Biometrics & Teams Rooms",
      ],
    },
    {
      pillar: "Pillar 03",
      title: "Troubleshooting, Security & Tooling",
      icon: Shield,
      accent: "from-emerald-500/20 to-cyan-500/10",
      border: "hover:border-emerald-400/40",
      description: "Proactive cyber defense, rapid incident escalation, diagnostic tooling, and automation workflows.",
      skills: [
        "EDR / EPP Cloud Endpoint Security & Quarantine",
        "ServiceNow & Jira Service Management (ITSM)",
        "Hardware Diagnostics (Dell, HP, Lenovo, MacBook)",
        "Remote Support (AnyDesk, TeamViewer, RDP)",
        "PowerShell Scripting & Repetitive Task Automation",
        "OS Deployment, Imaging & Driver Packages",
        "Veeam & Cloud Backup Verification",
        "Disaster Recovery & Data Migration Procedures",
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-24 md:py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          index="02"
          eyebrow="Core Competencies"
          title={
            <>
              Three operational pillars,{" "}
              <span className="font-italic-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 text-cyan-glow">
                zero
              </span>{" "}
              downtime.
            </>
          }
          description="A structured, battle-tested skillset categorised across enterprise cloud, core network infrastructure, and high-velocity technical support."
        />

        <div className="grid lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-3xl border border-white/[0.08] bg-[#0c101c]/80 backdrop-blur-xl p-7 flex flex-col justify-between shadow-xl transition-all group ${p.border} hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-semibold">
                    {p.pillar}
                  </span>
                  <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-cyan-500/30 grid place-items-center text-cyan-300 group-hover:scale-110 transition-transform">
                    <p.icon className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="font-display font-bold text-2xl text-white mb-3">
                  {p.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {p.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-white/[0.06]">
                  {p.skills.map((sk) => (
                    <div key={sk} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <Check className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{sk}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- EXPERIENCE TIMELINE ----------
export function Experience() {
  const jobs = [
    {
      idx: "01",
      role: "IT Executive",
      company: "Prasatti Group Sales and Services",
      period: "May 2024 — Present",
      current: true,
      summary:
        "Head end-to-end enterprise IT operations and infrastructure: managing Microsoft 365, Azure Entra ID user lifecycle, endpoint security fleet (EDR/EPP), Google Workspace, corporate networking, and vendor contracts.",
      responsibilities: [
        "Orchestrated cloud tenant security, MFA enforcement, and Conditional Access policies.",
        "Deployed and monitored EDR / EPP across 200+ enterprise endpoints with zero security breaches.",
        "Engineered AV and biometric conference systems, cutting meeting setup disruptions by 90%.",
        "Achieved 99.8% resolution rate on internal IT escalation and support tickets.",
      ],
      tags: ["Microsoft 365", "Azure / Entra ID", "EDR / EPP", "Google Workspace", "Vendor Ops"],
    },
    {
      idx: "02",
      role: "Desktop Support Engineer · L1 & L2",
      company: "Team Computers Pvt Ltd",
      period: "Dec 2022 — Apr 2024",
      current: false,
      summary:
        "Delivered mission-critical hardware, OS, and network support across a 500+ heterogeneous device environment (Windows 10/11, macOS, iPads, mobile devices) with SLA-driven ticketing.",
      responsibilities: [
        "Diagnosed and resolved hardware faults, board replacements, and SSD/RAM upgrades.",
        "Maintained corporate Wi-Fi, SonicWall firewall policies, and managed PoE switch ports.",
        "Standardized multi-floor printer fleets, network print queues, and driver packages.",
        "Streamlined asset tracking audits and employee onboarding/offboarding workflows.",
      ],
      tags: ["Desktop L1/L2", "MacBook / iOS", "SonicWall", "PoE Switches", "Print Fleet"],
    },
    {
      idx: "03",
      role: "IT Support Technician & Network Trainee",
      company: "Enterprise Technical Services",
      period: "Aug 2021 — Nov 2022",
      current: false,
      summary:
        "Conducted first-response desktop support, OS imaging, structured network cabling, user account configuration, and helpdesk queue monitoring.",
      responsibilities: [
        "Deployed standardized Windows images via USB and network boot across workstations.",
        "Assisted in rack mounting, patch panel punch-downs, and cable management.",
        "Handled day-to-day user tickets, software installations, and VPN remote access.",
      ],
      tags: ["Hardware Diagnostics", "OS Deployment", "Patch Panels", "Ticketing", "VPN"],
    },
  ];

  return (
    <section id="experience" className="relative py-24 md:py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          index="03"
          eyebrow="Career Timeline"
          title={
            <>
              3.8+ years of{" "}
              <span className="font-italic-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 text-cyan-glow">
                proven
              </span>{" "}
              enterprise delivery.
            </>
          }
          description="Consistent progression across enterprise IT service providers and in-house IT administration seats."
        />

        {/* Timeline Container */}
        <div className="relative pl-6 md:pl-10 space-y-12 before:absolute before:left-[11px] md:before:left-[19px] before:top-3 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-cyan-400 before:via-blue-500 before:to-transparent">
          {jobs.map((j, i) => (
            <motion.div
              key={j.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              {/* Timeline Glowing Node */}
              <div className="absolute -left-[31px] md:-left-[43px] top-6 h-5 w-5 rounded-full bg-[#08090d] border-2 border-cyan-400 grid place-items-center shadow-[0_0_12px_rgba(34,211,238,0.8)]">
                <div className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
              </div>

              {/* Card */}
              <div className="rounded-3xl border border-white/[0.08] bg-[#0c101c]/80 backdrop-blur-xl p-6 md:p-8 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="font-display font-bold text-2xl md:text-3xl text-white">
                        {j.role}
                      </h3>
                      {j.current && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 font-mono text-[11px] tracking-wider uppercase font-semibold">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" /> Current Role
                        </span>
                      )}
                    </div>
                    <div className="text-cyan-400 font-medium text-sm mt-1">{j.company}</div>
                  </div>
                  <div className="font-mono text-xs text-slate-400 md:text-right bg-white/5 border border-white/10 px-3 py-1 rounded-full w-fit">
                    {j.period}
                  </div>
                </div>

                <p className="text-slate-300 text-sm md:text-[15px] leading-relaxed mt-4">
                  {j.summary}
                </p>

                {/* Key Responsibilities */}
                <div className="mt-5 pt-4 border-t border-white/[0.06] space-y-2">
                  {j.responsibilities.map((r) => (
                    <div key={r} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 mt-2 shrink-0 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
                      <span>{r}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {j.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono uppercase tracking-[0.14em] px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-950/30 text-cyan-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- PROJECTS ----------
export function Projects() {
  const projects = [
    {
      n: "01",
      title: "Microsoft 365 Enterprise Administration & Hybrid Cloud",
      tag: "Cloud M365",
      icon: Cloud,
      overview: "Complete tenant administration across user lifecycle, Exchange Online mail routing, SharePoint, OneDrive, and Microsoft Teams governance for enterprise staff.",
      outcome: "Standardized licensing · zero downtime user migration · 60% faster onboarding.",
      github: "https://github.com/Sarfraz882",
      demo: "#contact",
    },
    {
      n: "02",
      title: "Fleet-Wide EDR & Endpoint Cloud Security Rollout",
      tag: "Cyber Security",
      icon: Shield,
      overview: "Cloud-managed endpoint detection and response rolled out across 500+ corporate devices with custom quarantine rules, posture hardening, and threat playbooks.",
      outcome: "100% endpoint visibility · incidents contained in under 5 minutes.",
      github: "https://github.com/Sarfraz882",
      demo: "#contact",
    },
    {
      n: "03",
      title: "Microsoft Entra ID (Azure AD) Lifecycle & Zero-Trust MFA",
      tag: "Identity / IAM",
      icon: Layers,
      overview: "Azure directory administration implementing Single Sign-On (SSO), Multi-Factor Authentication (MFA), Conditional Access policies, and Joiner-Mover-Leaver flow.",
      outcome: "Eliminated orphan credentials · 100% compliance on remote access audits.",
      github: "https://github.com/Sarfraz882",
      demo: "#contact",
    },
    {
      n: "04",
      title: "Network Infrastructure, VLAN & SonicWall Firewall Setup",
      tag: "Networking",
      icon: Network,
      overview: "Structured enterprise network topology implementation including subnetting, VLAN segmentation, switch port security, Wi-Fi controller AP mapping, and secure client VPN.",
      outcome: "99.9% uptime · isolated guest and sensitive corporate network traffic.",
      github: "https://github.com/Sarfraz882",
      demo: "#contact",
    },
    {
      n: "05",
      title: "Centralized Print Server & Infrastructure Overhaul",
      tag: "Infrastructure",
      icon: Terminal,
      overview: "Consolidated print server infrastructure supporting multi-floor printer fleets, Brady label printers, driver standardization, and queue monitoring.",
      outcome: "80% drop in print spooler tickets · seamless zero-config user printing.",
      github: "https://github.com/Sarfraz882",
      demo: "#contact",
    },
    {
      n: "06",
      title: "Smart Conference Room AV & Hybrid Collaboration Setup",
      tag: "Smart AV",
      icon: Monitor,
      overview: "Standardized corporate boardrooms with interactive projectors, Teams Rooms hardware, microphone arrays, biometric access integration, and wireless presentation bridges.",
      outcome: "Zero-friction hybrid meetings · 95% reduction in meeting setup calls.",
      github: "https://github.com/Sarfraz882",
      demo: "#contact",
    },
  ];

  return (
    <section id="projects" className="relative py-24 md:py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          index="04"
          eyebrow="Featured Projects"
          title={
            <>
              Enterprise deployments,{" "}
              <span className="font-italic-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 text-cyan-glow">
                tangible
              </span>{" "}
              impact.
            </>
          }
          description="High-impact initiatives engineered across cloud tenancy, endpoint defense, and enterprise physical infrastructure."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="rounded-3xl border border-white/[0.08] bg-[#0c101c]/80 backdrop-blur-xl p-7 flex flex-col justify-between hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-slate-400 font-semibold">
                    {p.n}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-[0.16em] px-2.5 py-1 rounded-full border border-cyan-500/20 bg-cyan-950/20 text-cyan-300">
                    {p.tag}
                  </span>
                </div>

                <div className="h-12 w-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 grid place-items-center mb-5 group-hover:scale-110 transition-transform">
                  <p.icon className="h-6 w-6" />
                </div>

                <h3 className="font-display font-bold text-xl leading-tight text-white group-hover:text-cyan-300 transition-colors">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed font-normal">
                  {p.overview}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-white/[0.06]">
                <div className="flex items-start gap-2.5 text-xs text-slate-300 font-medium mb-4">
                  <Sparkles className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{p.outcome}</span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl py-2 px-3 text-xs font-mono font-medium border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-cyan-500/30 transition-all"
                  >
                    <Github className="h-3.5 w-3.5 text-cyan-400" />
                    <span>Repository</span>
                  </a>
                  <a
                    href={p.demo}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl py-2 px-3 text-xs font-mono font-medium border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 hover:bg-cyan-500/20 transition-all"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// Skills is exported for backward compatibility
export function Skills() { return null; }

// ---------- CERTIFICATIONS ----------
export function Certifications() {
  const certs = [
    { name: "Microsoft Azure Administrator", code: "AZ-104", status: "In Progress", issuer: "Microsoft" },
    { name: "Microsoft 365 Certified: Endpoint Administrator", code: "MD-102", status: "Planned", issuer: "Microsoft" },
    { name: "CompTIA Network+ (N10-008)", code: "Network+", status: "Certified", issuer: "CompTIA" },
    { name: "Windows Server Hybrid Administrator", code: "AZ-800", status: "In Progress", issuer: "Microsoft" },
    { name: "Google Workspace Administrator", code: "GWA", status: "Planned", issuer: "Google" },
    { name: "ITIL Foundation in IT Service Management", code: "ITIL 4", status: "Certified", issuer: "Axelos" },
  ];

  const badge = (s: string) => {
    if (s === "Certified") return "bg-emerald-500/15 text-emerald-400 border-emerald-500/40 shadow-[0_0_10px_rgba(16,185,129,0.3)]";
    if (s === "In Progress") return "bg-cyan-500/15 text-cyan-300 border-cyan-500/40 shadow-[0_0_10px_rgba(34,211,238,0.3)]";
    return "bg-slate-800/60 text-slate-400 border-slate-700/50";
  };

  return (
    <section id="certifications" className="relative py-24 md:py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          index="05"
          eyebrow="Credentials"
          title={
            <>
              Enterprise certifications{" "}
              <span className="font-italic-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 text-cyan-glow">
                &amp;
              </span>{" "}
              qualifications.
            </>
          }
          description="Verified expertise validated by leading technology vendors and standards bodies."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-3xl border border-white/[0.08] bg-[#0c101c]/80 backdrop-blur-xl p-6 hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-5">
                  <div className="h-11 w-11 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 grid place-items-center">
                    <Award className="h-5 w-5" />
                  </div>
                  <span className={`text-[10px] font-mono uppercase tracking-[0.16em] px-2.5 py-1 rounded-full border ${badge(c.status)}`}>
                    {c.status}
                  </span>
                </div>
                <div className="font-mono text-xs text-cyan-400/90 mb-1">{c.code} · {c.issuer}</div>
                <h3 className="font-display font-bold text-lg text-white">{c.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- TESTIMONIALS ----------
export function Testimonials() {
  const items = [
    { name: "Operations Lead", role: "Prasatti Group", quote: "Sarfraaj takes full ownership from the first ticket to the final rollout. Our cloud tenancy, security, and hardware just work when he is on it." },
    { name: "Service Delivery Manager", role: "Team Computers", quote: "Reliable, calm under high-pressure escalations, and technically sharp. A trusted safe pair of hands for enterprise-grade support." },
    { name: "Enterprise Systems Stakeholder", role: "Corporate Client", quote: "Troubleshoots complex networking and cloud identity issues swiftly and communicates clearly to non-technical staff." },
  ];
  return (
    <section className="relative py-24 md:py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          index="06"
          eyebrow="Recommendations"
          title={
            <>
              Stakeholder{" "}
              <span className="font-italic-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 text-cyan-glow">
                feedback
              </span>{" "}
              &amp; trust.
            </>
          }
        />
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-3xl border border-white/[0.08] bg-[#0c101c]/80 backdrop-blur-xl p-7 flex flex-col justify-between hover:border-cyan-500/30 transition-all"
            >
              <div>
                <div className="font-italic-serif italic text-5xl text-cyan-400 leading-none">&ldquo;</div>
                <p className="mt-3 text-sm md:text-[15px] text-slate-300 leading-relaxed font-normal">{t.quote}</p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/[0.06]">
                <div className="font-semibold text-sm text-white">{t.name}</div>
                <div className="text-xs font-mono text-cyan-400 mt-0.5">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- CONTACT ----------
export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-24 md:py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          index="07"
          eyebrow="Contact"
          title={
            <>
              Let&apos;s build something{" "}
              <span className="font-italic-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 text-cyan-glow">
                reliable.
              </span>
            </>
          }
          description="Open to enterprise IT roles, systems administrator opportunities, and complex infrastructure challenges."
        />
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 items-start">
          {/* Contact Direct Links */}
          <div className="grid gap-3">
            {[
              { icon: Mail, label: "Direct Email", value: "sarfaraajsince2004@gmail.com", href: "mailto:sarfaraajsince2004@gmail.com" },
              { icon: Phone, label: "Phone", value: "+91 88264 57998", href: "tel:+918826457998" },
              { icon: MapPin, label: "Location", value: "New Delhi / NCR · India", href: "https://www.google.com/maps/place/New+Delhi", external: true },
              { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/sarfraaj-engineer", href: "https://www.linkedin.com/in/sarfraaj-engineer/", external: true },
              { icon: Github, label: "GitHub", value: "github.com/Sarfraz882", href: "https://github.com/Sarfraz882", external: true },
              { icon: Building2, label: "Current Role", value: "Prasatti Group · IT Executive", href: "https://www.linkedin.com/in/sarfraaj-engineer/", external: true },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={"external" in c && c.external ? "_blank" : undefined}
                rel={"external" in c && c.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-[#0c101c]/80 backdrop-blur-xl p-4 hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all group"
              >
                <div className="h-10 w-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 grid place-items-center group-hover:scale-110 transition-transform">
                  <c.icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-slate-400">{c.label}</div>
                  <div className="text-sm font-semibold truncate text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {c.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Quick Message Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const name = String(fd.get("name") || "");
              const email = String(fd.get("email") || "");
              const company = String(fd.get("company") || "");
              const message = String(fd.get("message") || "");
              const subject = `Portfolio Inquiry from ${name}`;
              const body = `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`;
              window.location.href = `mailto:sarfaraajsince2004@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
              setSent(true);
            }}
            className="rounded-3xl border border-white/[0.08] bg-[#0c101c]/90 backdrop-blur-xl p-6 md:p-8 space-y-4 shadow-2xl"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <Field label="Name" name="name" placeholder="Your full name" required />
              <Field label="Email" name="email" type="email" placeholder="you@company.com" required />
            </div>
            <Field label="Company" name="company" placeholder="Company / Organization" />
            <div>
              <label className="font-mono text-[11px] uppercase tracking-wider text-slate-400 mb-1.5 block">Message</label>
              <textarea
                required
                name="message"
                rows={5}
                placeholder="How can I assist your enterprise IT infrastructure?"
                className="w-full rounded-2xl bg-[#070913] border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="text-xs text-slate-400 font-mono">
                {sent ? "✓ Message client opened — thank you." : "Direct inquiry via email."}
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all"
              >
                <span>Send Message</span>
                <Send className="h-3.5 w-3.5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field(props: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={props.name} className="font-mono text-[11px] uppercase tracking-wider text-slate-400 mb-1.5 block">{props.label}</label>
      <input
        id={props.name}
        name={props.name}
        type={props.type ?? "text"}
        required={props.required}
        placeholder={props.placeholder}
        className="w-full rounded-2xl bg-[#070913] border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition"
      />
    </div>
  );
}

// ---------- FOOTER ----------
export function Footer() {
  return (
    <footer className="relative pt-16 pb-12 px-6 border-t border-white/[0.08] mt-10 bg-[#06070a]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-10 items-start">
          <div>
            <div className="font-display font-black text-3xl sm:text-4xl text-white leading-tight">
              Let&apos;s engineer something{" "}
              <span className="font-italic-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 text-cyan-glow">
                extraordinary.
              </span>
            </div>
            <p className="mt-3 text-slate-400 text-sm max-w-sm leading-relaxed">
              Available for full-time IT executive, IT support engineer, and systems administrator opportunities.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={RESUME_URL}
                download="Sarfraaj-Khan-Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider bg-cyan-950/20 hover:bg-cyan-500/20 transition-all"
              >
                <Download className="h-3.5 w-3.5" /> Download Resume
              </a>
            </div>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-4 font-semibold">Navigation</div>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About", href: "#about" },
                { label: "Core Skills", href: "#skills" },
                { label: "Experience", href: "#experience" },
                { label: "Featured Projects", href: "#projects" },
                { label: "Certifications", href: "#certifications" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-slate-400 hover:text-cyan-300 transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-4 font-semibold">Connect</div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://github.com/Sarfraz882" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-2">
                  <Github className="h-3.5 w-3.5" /> GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/sarfraaj-engineer/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-2">
                  <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:sarfaraajsince2004@gmail.com" className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5" /> Email
                </a>
              </li>
              <li>
                <a href="tel:+918826457998" className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5" /> Phone
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-slate-400">All Systems Operational · SLA 99.8%</span>
          </div>
          <div>Sarfraaj Khan · IT Support & Systems Engineer · © 2026</div>
        </div>
      </div>
    </footer>
  );
}

// Keep Briefcase import used
void Briefcase;
