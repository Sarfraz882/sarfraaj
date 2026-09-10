import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp, FileText, Menu, Moon, Sun, X } from "lucide-react";

const assetBase = import.meta.env.BASE_URL;
const portraitUrl = `${assetBase}assets/sarfraaj-portrait.jpg`;
const resumeUrl = `${assetBase}assets/Sarfraaj-Khan-Resume.pdf`;

function useTheme() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    // Default to dark mode for futuristic aesthetic
    const isDark = stored ? stored === "dark" : true;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);
  const toggle = () => {
    setDark((d) => {
      const next = !d;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };
  return { dark, toggle };
}

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certs" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { dark, toggle } = useTheme();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <>
      {/* Top Futuristic Scroll Progress Indicator */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 h-[2.5px] origin-left z-[60] bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 shadow-[0_0_12px_rgba(34,211,238,0.7)]"
      />

      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(1200px,94%)]">
        <div className="rounded-full border border-white/10 bg-[#0c101c]/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(34,211,238,0.06)] flex items-center justify-between pl-3 pr-2.5 py-2 transition-all">
          <a href="#top" className="flex items-center gap-2.5 group">
            <span className="relative h-8 w-8 rounded-full overflow-hidden ring-1 ring-cyan-500/30 group-hover:ring-cyan-400 transition-all">
              <img src={portraitUrl} alt="Sarfraaj Khan" className="h-full w-full object-cover" />
              <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-[#0c101c]" />
            </span>
            <div className="flex flex-col text-left">
              <span className="font-display font-bold text-sm tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                Sarfraaj Khan
              </span>
              <span className="font-mono text-[9.5px] tracking-[0.16em] uppercase text-cyan-400/80 -mt-0.5">
                IT Support · SysAdmin
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="px-3.5 py-1.5 text-[13px] text-slate-300 hover:text-cyan-300 rounded-full hover:bg-white/[0.06] transition-all"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              className="md:hidden h-9 w-9 grid place-items-center rounded-full border border-white/10 bg-white/5 text-slate-200 hover:text-white"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="h-9 w-9 grid place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/30 transition-all"
            >
              {dark ? <Sun className="h-4 w-4 text-amber-300" /> : <Moon className="h-4 w-4 text-cyan-300" />}
            </button>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11px] uppercase tracking-[0.16em] font-mono border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all"
            >
              Contact
            </a>
            <a
              href={resumeUrl}
              download="Sarfraaj-Khan-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.16em] font-mono font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 hover:opacity-95 shadow-[0_0_15px_rgba(34,211,238,0.35)] transition-all"
            >
              <FileText className="h-3.5 w-3.5" /> Resume
            </a>
          </div>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-white/10 bg-[#0c101c]/95 backdrop-blur-2xl p-2.5 shadow-2xl flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="px-3.5 py-2 text-sm text-slate-200 hover:text-cyan-300 hover:bg-white/5 rounded-xl transition-all"
              >
                {n.label}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 h-11 w-11 grid place-items-center rounded-full bg-[#0c101c] border border-cyan-500/40 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.25)] hover:scale-110 hover:border-cyan-300 transition-all"
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}
