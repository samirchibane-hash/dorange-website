// Top navigation — sticky with scroll state
const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobileExpanded, setMobileExpanded] = React.useState(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const links = [
    { label: "Home", href: "/", items: null },
    { label: "Water Systems", href: "/Whole%20Home%20System", items: null },
    { label: "Water Test", href: "/How%20It%20Works", items: null },
    { label: "Other Services", items: [
      { label: "JuiceMaster Juice Extractor", href: "/JuiceMaster" },
      { label: "Deluxe Air Purifier",         href: "/Air%20Purifier" },
      { label: "Sleep System Ultra Tech",     href: "/Grounding%20Sleep%20System" },
      { label: "Ultra Tech 2 Cookware",       href: "/Ultra%20Tech%20Cookware" },
    ] },
    { label: "Service areas", items: [
      { label: "Naples",         href: "/naples-water-treatment" },
      { label: "Bonita Springs", href: "/bonita-springs-water-treatment" },
      { label: "Marco Island",   href: "/marco-island-water-treatment" },
      { label: "Estero",         href: "/estero-water-treatment" },
      { label: "Fort Myers",     href: "/fort-myers-water-treatment" },
      { label: "Cape Coral",     href: "/cape-coral-water-treatment" },
    ] },
    { label: "About", href: "/About", items: null },
  ];

  return (
    <>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "all .3s ease",
        background: scrolled ? "rgba(255,255,255,0.88)" : "transparent",
        backdropFilter: scrolled ? "saturate(160%) blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "saturate(160%) blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid var(--rule)" : "1px solid transparent",
      }}>
        <div className="container-wide" style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "14px 0",
        }}>
          <a href="/" style={{ display: "flex", alignItems: "center" }} aria-label="D'Orange Services — home">
            <img src="assets/logo.png" alt="D'Orange Services" style={{ height: 40, width: "auto", display: "block" }} />
          </a>

          {/* Desktop nav */}
          <nav className="nav-desktop" style={{ display: "flex", gap: 4 }}>
            {links.map(l => {
              const ButtonTag = l.href ? "a" : "button";
              return (
                <div key={l.label}
                     onMouseEnter={() => l.items && setMenuOpen(l.label)}
                     onMouseLeave={() => setMenuOpen(null)}
                     style={{ position: "relative" }}>
                  <ButtonTag
                    href={l.href}
                    style={{
                      padding: "10px 14px", fontSize: 14, color: "var(--ink-2)",
                      display: "inline-flex", alignItems: "center", gap: 6,
                      textDecoration: "none",
                    }}>
                    {l.label}
                    {l.items && <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m2 3.5 3 3 3-3"/></svg>}
                  </ButtonTag>
                  {l.items && menuOpen === l.label && (
                    <div style={{
                      position: "absolute", top: "100%", left: 0,
                      background: "var(--paper)", borderRadius: 14, padding: 8,
                      border: "1px solid var(--rule)", boxShadow: "var(--shadow-md)",
                      minWidth: ["Solutions", "Other Services", "Service areas"].includes(l.label) ? 320 : 200,
                    }}>
                      {l.items.map(it => {
                        const label = typeof it === "string" ? it : it.label;
                        const href = typeof it === "string" ? "#" : it.href;
                        const sub = typeof it === "string" ? null : it.sub;
                        return (
                          <a key={label} href={href} style={{
                            display: "block", padding: "12px 14px", borderRadius: 8,
                            fontSize: 14, color: "var(--ink)",
                          }}
                          onMouseEnter={e => e.currentTarget.style.background = "var(--bg-2)"}
                          onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                            <div style={{ fontWeight: 500 }}>{label}</div>
                            {sub && <div style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 2 }}>{sub}</div>}
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="nav-cta" style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <a href="tel:+12395550199" className="btn btn-sm" style={{ color: "var(--ink-2)" }}>
              <Icon name="phone" size={12} /> (239) 555-0199
            </a>
            <a href="/Book%20Free%20Water%20Test" className="btn btn-primary btn-sm">Free water test</a>
          </div>

          {/* Hamburger */}
          <button className="nav-hamburger" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Close menu" : "Open menu"}>
            {mobileOpen
              ? <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4l12 12M16 4L4 16"/></svg>
              : <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 5h14M3 10h14M3 15h14"/></svg>
            }
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 49,
          background: "var(--bg)",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
        }}>
          <div style={{ height: 72, flexShrink: 0 }} />
          <div style={{ flex: 1, padding: "24px 20px" }}>
            {links.map(l => (
              <div key={l.label} style={{ borderBottom: "1px solid var(--rule)" }}>
                {l.items ? (
                  <>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === l.label ? null : l.label)}
                      style={{
                        width: "100%", textAlign: "left",
                        padding: "20px 0",
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                        fontFamily: "var(--f-display)", fontSize: 28, color: "var(--ink)",
                      }}>
                      {l.label}
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"
                        style={{ transform: mobileExpanded === l.label ? "rotate(180deg)" : "none", transition: "transform .2s ease" }}>
                        <path d="m3 6 5 5 5-5"/>
                      </svg>
                    </button>
                    {mobileExpanded === l.label && (
                      <div style={{ paddingBottom: 12 }}>
                        {l.items.map(it => {
                          const label = typeof it === "string" ? it : it.label;
                          const href = typeof it === "string" ? "#" : it.href;
                          return (
                            <a key={label} href={href} style={{
                              display: "block", padding: "12px 16px",
                              fontSize: 16, color: "var(--ink-2)",
                              borderRadius: 8,
                            }}>{label}</a>
                          );
                        })}
                      </div>
                    )}
                  </>
                ) : (
                  <a href={l.href} style={{
                    display: "block", padding: "20px 0",
                    fontFamily: "var(--f-display)", fontSize: 28, color: "var(--ink)",
                    textDecoration: "none",
                  }}>{l.label}</a>
                )}
              </div>
            ))}
          </div>
          <div style={{ padding: "24px 20px", borderTop: "1px solid var(--rule)" }}>
            <a href="/Book%20Free%20Water%20Test" className="btn btn-primary" style={{ width: "100%", justifyContent: "center", padding: "16px 22px" }}>
              Book free water test <Icon name="arrow" size={14} />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

Object.assign(window, { Nav });
