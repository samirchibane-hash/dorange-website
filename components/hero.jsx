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
          boxShadow: "var(--shadow-lg)",
          position: "relative",
        }}>
          <img
            src="uploads/WhatsApp Image 2024-07-18 at 18.26.41.jpeg"
            alt="D'Orange Services whole-home water filtration installation"
            style={{
              width: "100%", height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          />
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
