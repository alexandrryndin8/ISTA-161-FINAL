import { useEffect, useState } from "react";

export default function Into() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 139, 246, 0.12), transparent 40%)`,
        }}
      />

      <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none" />

      <div className="relative z-10 min-h-screen w-full flex items-center">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
            <div className="w-full">
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-tight">
                Holistic Portfolio for ISTA 161 SP26 102 202 502
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-200 bg-clip-text text-transparent">
                  by Ryndin Alexandr
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base sm:text-lg lg:text-xl leading-7 text-slate-300">
                The main goal of my work was to study the data-processing
                process in more detail, especially its ethical aspects, and to
                understand what rules should be followed to build honest
                data-based research.
              </p>
            </div>

            <div className="w-full">
              <div className="relative mx-auto w-full max-w-2xl">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-blue-300/20 blur-2xl" />

                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur-xl shadow-2xl">
                  <img
                    src="/cyberpunk-justice-scales.jpg"
                    alt="Image"
                    className="h-[260px] sm:h-[360px] lg:h-[500px] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
