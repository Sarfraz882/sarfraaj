export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none">
      {/* Deep Cybernetic Background Color */}
      <div className="absolute inset-0 bg-[#07080c]" />

      {/* Top Ambient Cyan Glow Orb */}
      <div
        className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[140px] opacity-25 animate-pulse-glow"
        style={{
          background: "radial-gradient(circle, rgba(34, 211, 238, 0.45) 0%, rgba(59, 130, 246, 0.2) 60%, transparent 80%)",
        }}
      />

      {/* Bottom Right Electric Blue Accent Orb */}
      <div
        className="absolute top-[45%] -right-[15%] w-[650px] h-[650px] rounded-full blur-[160px] opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, rgba(34, 211, 238, 0.2) 50%, transparent 75%)",
        }}
      />

      {/* Middle Left Subtle Violet/Indigo Aura */}
      <div
        className="absolute top-[80%] -left-[10%] w-[600px] h-[600px] rounded-full blur-[160px] opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, rgba(34, 211, 238, 0.15) 50%, transparent 75%)",
        }}
      />

      {/* Cybernetic High-Tech Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
        }}
      />

      {/* Radial Edge Vignette to keep focus in the center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#07080c_95%)] opacity-80" />
    </div>
  );
}
