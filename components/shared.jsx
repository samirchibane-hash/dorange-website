// Placeholder imagery — subtle striped SVG with monospace labels.
const Placeholder = ({ label, aspect = "4/3", tone = "orange", rounded = 14, style = {} }) => {
  const tones = {
    orange: { a: "#FBE3CB", b: "#F6CDA6", ink: "#D9651A" },
    leaf:   { a: "#DFEBCF", b: "#CDDDB6", ink: "#4E8732" },
    sea:    { a: "#CFE1EA", b: "#B6D0DC", ink: "#2F86A6" },
    warm:   { a: "#F2EBDA", b: "#E8DFC7", ink: "#6B6259" },
    ink:    { a: "#2A2620", b: "#1F1B17", ink: "#FAF6EE" },
    paper:  { a: "#F4EFE3", b: "#E8E0CD", ink: "#6B6259" },
  };
  const t = tones[tone] || tones.orange;
  return (
    <div style={{
      position: "relative",
      aspectRatio: aspect,
      borderRadius: rounded,
      overflow: "hidden",
      background: `repeating-linear-gradient(135deg, ${t.a} 0 14px, ${t.b} 14px 28px)`,
      ...style,
    }}>
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: t.ink,
        fontFamily: "var(--f-mono)",
        fontSize: 11,
        letterSpacing: ".14em",
        textTransform: "uppercase",
        opacity: .85,
        textAlign: "center",
        padding: "0 20px",
      }}>
        {label}
      </div>
      <div style={{
        position: "absolute", top: 10, left: 12,
        color: t.ink, fontFamily: "var(--f-mono)", fontSize: 10, opacity: .6,
      }}>▢ image</div>
    </div>
  );
};

// Tiny icon set
const Icon = ({ name, size = 18, stroke = 1.5 }) => {
  const props = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: stroke, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "drop":
      return <svg {...props}><path d="M12 3s-6 7-6 12a6 6 0 0 0 12 0c0-5-6-12-6-12Z"/></svg>;
    case "arrow":
      return <svg {...props}><path d="M5 12h14M13 5l7 7-7 7"/></svg>;
    case "arrow-ne":
      return <svg {...props}><path d="M7 17 17 7M8 7h9v9"/></svg>;
    case "check":
      return <svg {...props}><path d="m4 12 5 5L20 6"/></svg>;
    case "star":
      return <svg {...props}><path d="m12 3 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.6 9.8l6.5-.9L12 3Z" fill="currentColor" stroke="none"/></svg>;
    case "sparkle":
      return <svg {...props}><path d="M12 3v6M12 15v6M3 12h6M15 12h6M5.6 5.6l4.2 4.2M14.2 14.2l4.2 4.2M5.6 18.4l4.2-4.2M14.2 9.8l4.2-4.2"/></svg>;
    case "sun":
      return <svg {...props}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>;
    case "search":
      return <svg {...props}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>;
    case "mail":
      return <svg {...props}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>;
    case "phone":
      return <svg {...props}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L7.9 9.6a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2-.5c.8.3 1.7.5 2.5.6A2 2 0 0 1 22 17Z"/></svg>;
    case "pin":
      return <svg {...props}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
    case "plus":
      return <svg {...props}><path d="M12 5v14M5 12h14"/></svg>;
    case "minus":
      return <svg {...props}><path d="M5 12h14"/></svg>;
    case "play":
      return <svg {...props}><path d="M6 4v16l14-8L6 4Z" fill="currentColor" stroke="none"/></svg>;
    case "shield":
      return <svg {...props}><path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3Z"/><path d="m9 12 2 2 4-4"/></svg>;
    case "beaker":
      return <svg {...props}><path d="M9 3h6M10 3v6L5 19a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 19l-5-10V3"/><path d="M7.5 14h9"/></svg>;
    case "leaf":
      return <svg {...props}><path d="M11 20A7 7 0 0 1 4 13V4h9a7 7 0 0 1 7 7v1a8 8 0 0 1-8 8Z"/><path d="M4 4c6 2 10 6 12 12"/></svg>;
    case "home":
      return <svg {...props}><path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1Z"/></svg>;
    case "wrench":
      return <svg {...props}><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-2.4 2.6-2.6Z"/></svg>;
    case "magnet":
      return <svg {...props}><path d="M6 3v9a6 6 0 0 0 12 0V3M6 3h4v6H6M14 3h4v6h-4"/></svg>;
    case "shower":
      return <svg {...props}><path d="M4 4h8a6 6 0 0 1 6 6v2M12 4v6"/><path d="M8 16v.01M11 18v.01M14 16v.01M8 20v.01M14 20v.01M11 22v.01M17 18v.01"/></svg>;
    case "waves":
      return <svg {...props}><path d="M2 7c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2 2 2 4 2"/><path d="M2 13c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2 2 2 4 2"/><path d="M2 19c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2 2 2 4 2"/></svg>;
    case "filter":
      return <svg {...props}><path d="M3 4h18l-7 9v6l-4 2v-8L3 4Z"/></svg>;
  }
  return null;
};

// Star rating
const Stars = ({ n = 5, size = 14 }) => (
  <div style={{ display: "inline-flex", gap: 2, color: "var(--orange)" }}>
    {Array.from({ length: n }).map((_, i) => <Icon key={i} name="star" size={size} />)}
  </div>
);

// Orange-slice logo mark (echoes the D'Orange logo's citrus motif)
const LogoMark = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" style={{ display: "block" }}>
    {/* leaf */}
    <path d="M22 8c1 -5 8 -6 11 -3 -1 5 -6 8 -10 7Z" fill="#5C9E3D" />
    <path d="M22 8c4 -2 7 -1 11 -3" stroke="#3B7126" strokeWidth="0.8" strokeLinecap="round" />
    {/* outer half-circle */}
    <path d="M10 32a22 22 0 0 1 44 0Z"
      fill="none" stroke="#E87A2A" strokeWidth="3" strokeLinejoin="round" />
    {/* inner ring */}
    <path d="M16 32a16 16 0 0 1 32 0Z"
      fill="none" stroke="#E87A2A" strokeWidth="1.4" />
    {/* segments */}
    {[-60, -30, 0, 30, 60].map(a => {
      const r = 15.2;
      const x = 32 + r * Math.cos((a - 90) * Math.PI / 180);
      const y = 32 + r * Math.sin((a - 90) * Math.PI / 180);
      return <line key={a} x1="32" y1="32" x2={x} y2={y} stroke="#E87A2A" strokeWidth="1.4" strokeLinecap="round" />;
    })}
    {/* center dot */}
    <circle cx="32" cy="32" r="1.8" fill="#E87A2A" />
  </svg>
);

const useIsMobile = (bp = 768) => {
  const [m, setM] = React.useState(typeof window !== "undefined" && window.innerWidth < bp);
  React.useEffect(() => {
    const h = () => setM(window.innerWidth < bp);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, [bp]);
  return m;
};

Object.assign(window, { Placeholder, Icon, Stars, LogoMark, useIsMobile });
