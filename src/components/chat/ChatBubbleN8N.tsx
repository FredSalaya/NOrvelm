// ChatBubbleN8N.tsx
import { useEffect, useMemo, useRef, useState } from "react";

// Ajustamos el rojo para que sea idéntico al botón "Contáctanos" de tu imagen
const ACCENT_HEX: Record<string, string> = {
  brand: "#DC2626",      // Rojo intenso (Tailwind Red-600)
  teal: "#14b8a6",
  violet: "#8b5cf6",
  emerald: "#10b981",
  cyan: "#06b6d4",
  indigo: "#6366f1",
  sky: "#0ea5e9",
  lime: "#84cc16",
  amber: "#f59e0b",
  pink: "#ec4899",
};

const ACCENTS = {
  brand: "brand", // Mapeamos brand a sí mismo para usar el hex directo
  consultorio: "teal",
  casa: "violet",
  pyme: "emerald",
  carro: "cyan",
  asistente: "indigo",
  educacion: "sky",
  turismo: "lime",
  finanza: "amber",
  comercio: "pink",
  general: "teal",
} as const;

export type AgentType = keyof typeof ACCENTS;

interface ChatBubbleN8NProps {
  url: string;
  agent?: AgentType;
  title?: string;
  subtitle?: string;
  initialOpen?: boolean;
}

function appendParams(url: string, params: Record<string, string | number | boolean | null | undefined> = {}): string {
  try {
    const u = new URL(url, window.location.origin);
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== null) u.searchParams.set(k, String(v));
    });
    return u.toString();
  } catch {
    const hasQuery = url.includes("?");
    const cleanParams: Record<string, string> = {};
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== null) cleanParams[k] = String(v);
    });
    const q = new URLSearchParams(cleanParams).toString();
    return q ? `${url}${hasQuery ? "&" : "?"}${q}` : url;
  }
}

export default function ChatBubbleN8N({
  url,
  agent = "brand",
  title = "¿Te ayudo?",
  subtitle = "Estoy en línea",
  initialOpen = false,
}: ChatBubbleN8NProps) {
  const [open, setOpen] = useState<boolean>(initialOpen);
  const [quietMode, setQuietMode] = useState<boolean>(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Lógica para obtener el HEX correcto
  const accentKey = ACCENTS[agent] || "brand";
  const accentHex = ACCENT_HEX[accentKey] || ACCENT_HEX.brand;

  const BUTTON_GAP_PX = 88;

  const iframeSrc = useMemo(
    () => appendParams(url, { embed: "1", agent }),
    [url, agent]
  );

  useEffect(() => {
    const seen = localStorage.getItem("n8nChatOpened") === "1";
    if (seen) setQuietMode(true);
  }, []);

  useEffect(() => {
    if (open) {
      localStorage.setItem("n8nChatOpened", "1");
      setQuietMode(true);
    }
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onClick(e: MouseEvent) {
      if (!open) return;
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        const btn = document.getElementById("n8n-chat-toggle");
        if (btn && btn.contains(e.target as Node)) return;
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <>
      {/* BOTÓN FLOTANTE */}
      <div className="fixed z-[60] bottom-5 right-5" >
        {/* Aura/Glow detrás del botón */}
        <div
          className={[
            "absolute inset-0 translate-x-1/2 translate-y-1/2 pointer-events-none",
            "bottom-1/2 right-1/2 h-24 w-24 rounded-full",
            quietMode ? "opacity-40" : "opacity-70",
            "motion-safe:animate-aura",
          ].join(" ")}
          style={{
            background: `radial-gradient(closest-side, ${accentHex}55, transparent 70%)`,
            filter: "blur(6px)",
          }}
        />

        {!quietMode && (
          <div className="absolute -top-11 right-0 select-none" aria-hidden="true">
            <div className="rounded-xl border border-black/10 bg-white/90 px-3 py-1 text-[11px] text-black/90 shadow backdrop-blur-sm motion-safe:animate-pop">
              {title}
            </div>
          </div>
        )}

        <button
          id="n8n-chat-toggle"
          aria-label="Abrir chat"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={[
            "relative inline-flex items-center gap-2 rounded-full px-6 py-3",
            "text-sm font-semibold tracking-wide text-white",
            // Quitamos las clases dinámicas de bg-... y usamos ring-white con opacidad
            "ring-1 ring-white/20",
            "shadow-xl hover:brightness-[1.1] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
            quietMode
              ? "motion-safe:animate-pulse-soft"
              : "motion-safe:animate-wiggle-loop",
            "overflow-hidden",
          ].join(" ")}
          style={{
            // AQUI ESTA LA MAGIA: Forzamos el color de fondo directamente
            backgroundColor: accentHex,
            boxShadow: quietMode
              ? `0 0 18px 0 ${accentHex}66, 0 0 38px -6px ${accentHex}44`
              : `0 0 22px 2px ${accentHex}88, 0 0 60px -4px ${accentHex}66`,
          }}
        >
          {/* Brillo (sheen) */}
          <span
            aria-hidden
            className={[
              "pointer-events-none absolute -inset-1",
              "bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.35),transparent)]",
              quietMode ? "motion-safe:animate-sheen-slow" : "motion-safe:animate-sheen",
              "mix-blend-screen",
            ].join(" ")}
          />
          {!quietMode && (
            <span
              aria-hidden
              className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-white"
              style={{ boxShadow: `0 0 0 6px ${accentHex}44` }}
            />
          )}

          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M4 16.5V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9.5L6 20l.5-3.5H7"
              stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"
            />
          </svg>
          Chat
        </button>
      </div>

      {/* PANEL */}
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="Chat n8n"
          className={[
            "fixed z-[60] right-5",
            "top-16",
            "w-[min(420px,calc(100vw-1rem))]",
            "rounded-2xl border border-white/10",
            "bg-[#0b0e13]/95 backdrop-blur-md",
            "shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.05)]",
            "overflow-hidden",
            "flex flex-col",
          ].join(" ")}
          style={{
            bottom: `calc(${BUTTON_GAP_PX}px + env(safe-area-inset-bottom))`,
          }}
        >
          {/* Header */}
          <div
            className={[
              "flex items-center justify-between px-3 py-2",
              "border-b border-white/10",
              "shrink-0",
            ].join(" ")}
            style={{
              // También forzamos el gradiente del header usando el HEX
              background: `linear-gradient(to right, ${accentHex}33, transparent)`
            }}
          >
            <div className="flex items-center gap-2">
              <span
                className="inline-block h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"
              />
              <div className="leading-tight">
                <div className="text-[11px] text-white/60">{subtitle}</div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-1 text-white/90 hover:bg-white/10"
              aria-label="Cerrar chat"
              title="Cerrar"
            >
              ✕
            </button>
          </div>

          <iframe
            key={iframeSrc}
            src={iframeSrc}
            className="flex-1 w-full block border-none"
            title="n8n chat"
            allow="clipboard-write; fullscreen"
            referrerPolicy="no-referrer"
          />
        </div>
      )}

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .motion-safe\\:animate-wiggle-loop,
          .motion-safe\\:animate-sheen,
          .motion-safe\\:animate-sheen-slow,
          .motion-safe\\:animate-aura,
          .motion-safe\\:animate-pulse-soft,
          .motion-safe\\:animate-pop { animation: none !important; }
        }

        .motion-safe\\:animate-wiggle-loop {
          animation: wiggleLoop 8s ease-in-out infinite;
        }
        @keyframes wiggleLoop {
          0%, 76%, 100% { transform: translateZ(0) rotate(0deg) scale(1); }
          78% { transform: translateY(-2px) rotate(-1.5deg) scale(1.03); }
          80% { transform: translateY(1px) rotate(1.2deg)  scale(1.02); }
          82% { transform: translateY(-1px) rotate(-1deg)  scale(1.03); }
          84% { transform: translateY(0px)  rotate(0deg)   scale(1.00); }
        }

        .motion-safe\\:animate-aura {
          animation: auraPulse 2.4s ease-in-out infinite;
        }
        @keyframes auraPulse {
          0%, 100% { opacity: .25; transform: scale(0.98); }
          50%      { opacity: .7;  transform: scale(1.05); }
        }

        .motion-safe\\:animate-pulse-soft {
          animation: softPulse 2.8s ease-in-out infinite;
        }
        @keyframes softPulse {
          0%, 100% { transform: scale(1); }
          50%      { transform: scale(1.02); }
        }

        .motion-safe\\:animate-sheen {
          animation: sheen 5.5s linear infinite;
        }
        .motion-safe\\:animate-sheen-slow {
          animation: sheen 8.5s linear infinite;
        }
        @keyframes sheen {
          0%   { transform: translateX(-120%) skewX(-10deg); opacity: 0; }
          6%   { transform: translateX(120%)  skewX(-10deg); opacity: .7; }
          7%,100% { transform: translateX(120%) skewX(-10deg); opacity: 0; }
        }

        .motion-safe\\:animate-pop {
          animation: popIn 450ms cubic-bezier(.18,.89,.32,1.28) both;
        }
        @keyframes popIn {
          0% { transform: translateY(6px) scale(.92); opacity: 0; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }
      `}</style>
    </>
  );
}