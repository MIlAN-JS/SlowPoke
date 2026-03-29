import { useState } from "react";

const NAV_ITEMS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/>
        <path d="M9 21V12h6v9"/>
      </svg>
    ),
    label: "Home",
    active: true,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polygon points="5 3 19 12 5 21 5 3"/>
      </svg>
    ),
    label: "Reels",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
    label: "Messages",
    badge: 1,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
    label: "Search",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    label: "Explore",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
    label: "Notifications",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
      </svg>
    ),
    label: "Create",
  },
  {
    icon: (
      <div className="w-7 h-7 rounded-full overflow-hidden ring-2 ring-transparent group-hover:ring-[#4fc3f7] transition-all duration-300">
        <div className="w-full h-full bg-gradient-to-br from-[#1a3a4a] via-[#2d6a8a] to-[#4fc3f7] flex items-center justify-center text-xs font-bold text-white">U</div>
      </div>
    ),
    label: "Profile",
  },
];

const BOTTOM_ITEMS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
      </svg>
    ),
    label: "More",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="2" width="9" height="9" rx="1"/><rect x="13" y="2" width="9" height="9" rx="1"/><rect x="2" y="13" width="9" height="9" rx="1"/><rect x="13" y="13" width="9" height="9" rx="1"/>
      </svg>
    ),
    label: "Also from Meta",
  },
];

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
  </svg>
);

export default function AsideBar() {
  const [hovered, setHovered] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  return (
    <div className="flex  ">
      {/* Sidebar */}
      <aside
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: hovered ? "240px" : "72px",
          transition: "width 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          backgroundColor: "#0d1f26",
          borderRight: "1px solid rgba(255,255,255,0.05)",
          boxShadow: hovered ? "4px 0 32px rgba(0,0,0,0.4)" : "2px 0 12px rgba(0,0,0,0.2)",
        }}
        className="flex flex-col overflow-hidden relative z-10 h-screen sticky top-0"
      >
        {/* Subtle top accent line */}
        <div
          style={{
            background: "linear-gradient(90deg, #4fc3f7, #0097a7, transparent)",
            height: "2px",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        />

        {/* Logo */}
        <div className="px-4 pt-6 pb-4">
          <div
            className="flex items-center gap-3 cursor-pointer group"
            style={{ minHeight: "44px" }}
          >
            <div
              style={{
                minWidth: "40px",
                color: "#e0f7fa",
                transition: "transform 0.3s ease",
                transform: hovered ? "scale(1.08)" : "scale(1)",
              }}
              className="flex items-center justify-center"
            >
              <InstagramIcon />
            </div>
            <span
              style={{
                opacity: hovered ? 1 : 0,
                transform: hovered ? "translateX(0)" : "translateX(-10px)",
                transition: "opacity 0.25s ease 0.1s, transform 0.25s ease 0.1s",
                whiteSpace: "nowrap",
                fontFamily: "'Georgia', serif",
                fontSize: "22px",
                fontWeight: "700",
                letterSpacing: "-0.5px",
                color: "#e0f7fa",
              }}
            >
              SlowPoke
            </span>
          </div>
        </div>

        {/* Main Nav */}
        <nav className="flex flex-col gap-1 px-2 flex-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => setActiveItem(item.label)}
              className="group relative flex items-center gap-3 w-full text-left"
              style={{
                borderRadius: "12px",
                padding: "10px 10px",
                minHeight: "48px",
                backgroundColor:
                  activeItem === item.label
                    ? "rgba(79, 195, 247, 0.1)"
                    : "transparent",
                transition: "background-color 0.2s ease",
                color:
                  activeItem === item.label ? "#4fc3f7" : "rgba(255,255,255,0.7)",
                cursor: "pointer",
                border: "none",
                outline: "none",
              }}
              onMouseEnter={(e) => {
                if (activeItem !== item.label) {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255,255,255,0.05)";
                  e.currentTarget.style.color = "#fff";
                }
              }}
              onMouseLeave={(e) => {
                if (activeItem !== item.label) {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                }
              }}
            >
              {/* Active indicator bar */}
              {activeItem === item.label && (
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "3px",
                    height: "60%",
                    backgroundColor: "#4fc3f7",
                    borderRadius: "0 3px 3px 0",
                    boxShadow: "0 0 8px #4fc3f7",
                  }}
                />
              )}

              {/* Icon with badge */}
              <div
                style={{ minWidth: "40px", position: "relative" }}
                className="flex items-center justify-center"
              >
                {item.icon}
                {item.badge && (
                  <span
                    style={{
                      position: "absolute",
                      top: "-4px",
                      right: "2px",
                      backgroundColor: "#f44336",
                      color: "#fff",
                      borderRadius: "999px",
                      fontSize: "10px",
                      fontWeight: "700",
                      minWidth: "16px",
                      height: "16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0 4px",
                      border: "2px solid #0d1f26",
                    }}
                  >
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Label */}
              <span
                style={{
                  opacity: hovered ? 1 : 0,
                  transform: hovered ? "translateX(0)" : "translateX(-8px)",
                  transition: "opacity 0.2s ease 0.08s, transform 0.2s ease 0.08s",
                  whiteSpace: "nowrap",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "15px",
                  fontWeight: activeItem === item.label ? "600" : "400",
                  letterSpacing: "0.01em",
                  pointerEvents: "none",
                }}
              >
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        {/* Bottom Items */}
        <div className="flex flex-col gap-1 px-2 pb-6 mt-2">
          <div
            style={{
              height: "1px",
              backgroundColor: "rgba(255,255,255,0.06)",
              margin: "8px 8px",
            }}
          />
          {BOTTOM_ITEMS.map((item) => (
            <button
              key={item.label}
              className="group flex items-center gap-3 w-full text-left"
              style={{
                borderRadius: "12px",
                padding: "10px 10px",
                minHeight: "48px",
                backgroundColor: "transparent",
                color: "rgba(255,255,255,0.5)",
                cursor: "pointer",
                border: "none",
                outline: "none",
                transition: "background-color 0.2s ease, color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "rgba(255,255,255,0.5)";
              }}
            >
              <div
                style={{ minWidth: "40px" }}
                className="flex items-center justify-center"
              >
                {item.icon}
              </div>
              <span
                style={{
                  opacity: hovered ? 1 : 0,
                  transform: hovered ? "translateX(0)" : "translateX(-8px)",
                  transition: "opacity 0.2s ease 0.08s, transform 0.2s ease 0.08s",
                  whiteSpace: "nowrap",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  pointerEvents: "none",
                }}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </aside>

      {/* Main content placeholder */}
     

      {/* Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap');
      `}</style>
    </div>
  );
}