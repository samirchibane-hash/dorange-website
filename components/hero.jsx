// Hero — split layout for D'Orange
const Hero = () => {
  return (
    <section className="hero-section">
      {/* Soft sun glow */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", opacity: .6,
        background: "radial-gradient(ellipse 1200px 700px at 75% 10%, var(--orange-soft), transparent 65%)",
      }} />
      <div className="container-wide grid-hero" style={{ position: "relative" }}>
        {/* Left column */}
        <div>
          <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 28, flexWrap: "wrap" }}>
            <span className="badge"><span className="dot"></span> Serving SW Florida since 2014</span>
            <span className="badge" style={{ background: "transparent" }}>
              <Stars n={5} size={12} /> 4.9 · 420+ reviews
            </span>
          </div>
          <h1 style={{ marginBottom: 24 }}>
            Florida-clean water,<br/>
            <span style={{ fontStyle: "italic", color: "var(--orange)" }}>from every tap</span> in your home.
          </h1>
          <p style={{ fontSize: 19, color: "var(--ink-2)", maxWidth: 520, marginBottom: 36, lineHeight: 1.5 }}>
            Whole-home filtration tuned to Naples water — high hardness, chlorine,
            sulfur, and the occasional storm-season surprise. Installed by certified
            local techs, backed for the life of the system.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", maxWidth: 540 }}>
            <a href="Book Free Water Test.html" className="btn btn-primary" style={{
              padding: "16px 22px", fontSize: 15,
            }}>
              Book free water test <Icon name="arrow" size={14} />
            </a>
            <a href="tel:+12395550199" className="btn" style={{
              padding: "16px 22px", fontSize: 15,
              border: "1px solid var(--rule)", background: "var(--paper)",
              color: "var(--ink)",
            }}>
              <Icon name="phone" size={14} /> Call (239) 555-0199
            </a>
          </div>
          <p style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 14 }}>
            Lab-grade on-site test. No obligation. Same-week appointments in Collier &amp; Lee counties.
          </p>

          {/* Trust strip */}
          <div style={{
            display: "flex", gap: 28, marginTop: 56, paddingTop: 28,
            borderTop: "1px solid var(--rule)", maxWidth: 580, flexWrap: "wrap",
          }}>
            {[
              { n: "3,800+", l: "Florida homes served" },
              { n: "NSF", l: "certified media" },
              { n: "Lifetime", l: "equipment warranty" },
            ].map(s => (
              <div key={s.l}>
                <div style={{ fontFamily: "var(--f-display)", fontSize: 28, lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — product hero */}
        <HeroVisual />
      </div>
    </section>
  );
};

const HeroVisual = () => {
  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "relative" }}>
        <div style={{
          aspectRatio: "4/5",
          borderRadius: 24,
          overflow: "hidden",
          background: "linear-gradient(165deg, var(--orange-soft) 0%, var(--bg-2) 60%, var(--leaf-soft) 100%)",
          boxShadow: "var(--shadow-md)",
          position: "relative",
        }}>
          {/* Sun */}
          <div style={{
            position: "absolute", top: -80, right: -80, width: 280, height: 280,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(232,122,42,0.55), transparent 70%)",
          }}/>
          {/* Sliced orange decoration */}
          <svg viewBox="0 0 400 500" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
            {/* faint palm/leaf shapes */}
            <g opacity="0.18">
              <path d="M-20 480 Q 80 380 150 460 T 320 500 L -20 500 Z" fill="#5C9E3D"/>
              <path d="M-20 480 Q 80 420 150 480 T 320 500 L -20 500 Z" fill="#3B7126"/>
            </g>
            {/* Big stylized orange slice */}
            <g transform="translate(200 220)">
              <circle r="120" fill="#FFFCF6" stroke="#E87A2A" strokeWidth="3"/>
              <circle r="105" fill="none" stroke="#E87A2A" strokeWidth="1.4"/>
              {/* segments */}
              {Array.from({length: 10}).map((_, i) => {
                const a = (i * 36 - 90) * Math.PI / 180;
                return <line key={i} x1="0" y1="0" x2={Math.cos(a)*102} y2={Math.sin(a)*102}
                  stroke="#E87A2A" strokeWidth="1.4"/>;
              })}
              {/* pulp dots */}
              {Array.from({length: 30}).map((_, i) => {
                const a = Math.random() * Math.PI * 2;
                const r = 20 + Math.random() * 70;
                return <circle key={i} cx={Math.cos(a)*r} cy={Math.sin(a)*r} r={0.8 + Math.random()*1.4} fill="#E87A2A" opacity="0.4"/>;
              })}
              <circle r="6" fill="#E87A2A"/>
              {/* leaf */}
              <path d="M-20 -120 q 10 -30 40 -30 q -5 25 -30 35Z" fill="#5C9E3D"/>
            </g>
            {/* Water droplets falling */}
            {[80, 160, 240, 320].map((x, i) => (
              <g key={x} style={{ animation: `drift ${3 + i * 0.4}s ease-in-out infinite` }}>
                <path d={`M ${x} ${380 + i*8} q -6 10 0 18 q 6 -8 0 -18 Z`} fill="#2F86A6" opacity="0.7"/>
              </g>
            ))}
          </svg>
        </div>

        {/* Floating annotation 1 — hardness */}
        <div className="hero-annotation"><div style={{
          position: "absolute", top: 40, left: -24,
          background: "var(--paper)",
          borderRadius: 14,
          padding: "12px 14px",
          boxShadow: "var(--shadow-md)",
          border: "1px solid var(--rule)",
          display: "flex", gap: 10, alignItems: "center",
          minWidth: 210,
        }}>
          <div style={{
            width: 38, height: 38, borderRadius: 10,
            background: "var(--leaf-soft)", color: "var(--leaf)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}><Icon name="beaker" size={18} /></div>
          <div>
            <div style={{ fontSize: 11, color: "var(--ink-3)", fontFamily: "var(--f-mono)", letterSpacing: ".08em", textTransform: "uppercase" }}>Naples hardness</div>
            <div style={{ fontFamily: "var(--f-display)", fontSize: 17 }}>
              18 gpg → <span style={{ color: "var(--leaf)" }}>spotless</span>
            </div>
          </div>
        </div></div>

        {/* Floating annotation 2 */}
        <div className="hero-annotation"><div style={{
          position: "absolute", bottom: 110, right: -24,
          background: "var(--paper)",
          borderRadius: 14,
          padding: "12px 14px",
          boxShadow: "var(--shadow-md)",
          border: "1px solid var(--rule)",
          display: "flex", gap: 10, alignItems: "center",
          minWidth: 220,
        }}>
          <div style={{
            width: 38, height: 38, borderRadius: 10,
            background: "var(--orange-soft)", color: "var(--orange-2)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}><Icon name="magnet" size={18} /></div>
          <div>
            <div style={{ fontSize: 11, color: "var(--ink-3)", fontFamily: "var(--f-mono)", letterSpacing: ".08em", textTransform: "uppercase" }}>Salt-free</div>
            <div style={{ fontFamily: "var(--f-display)", fontSize: 17 }}>magnetic field tech</div>
          </div>
        </div></div>

        {/* Bottom ticker */}
        <div style={{
          position: "absolute", bottom: 20, left: 20, right: 20,
          background: "rgba(31,27,23,0.85)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          color: "var(--paper)",
          padding: "14px 18px",
          borderRadius: 14,
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: ".1em", opacity: .6, textTransform: "uppercase", fontFamily: "var(--f-mono)" }}>recent install</div>
            <div style={{ fontFamily: "var(--f-display)", fontSize: 17 }}>Whole-Home System · Pelican Bay, Naples</div>
          </div>
          <a href="Whole Home System.html" style={{
            padding: "8px 14px", borderRadius: 999,
            background: "var(--paper)", color: "var(--ink)", fontSize: 12, fontWeight: 500,
            display: "inline-flex", alignItems: "center", gap: 6,
            textDecoration: "none",
          }}>
            See system <Icon name="arrow-ne" size={12} />
          </a>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { Hero });
