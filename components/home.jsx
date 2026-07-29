// Home page — water systems & service only.
// Intentionally non-technical: no stage counts, media names, or spec details.
// Structure: hero → two kinds of systems → what changes → how we work →
// service areas → free-test banner.

// ─── Hero ──────────────────────────────────────────────────
const HomeHero = () => (
  <section className="hero-section" style={{ textAlign: "center", paddingBottom: 72 }}>
    <div style={{
      position: "absolute", inset: 0, pointerEvents: "none", opacity: .7,
      background: "radial-gradient(ellipse 1100px 620px at 50% -5%, var(--orange-soft), transparent 62%)",
    }} />
    <div className="container" style={{ position: "relative", maxWidth: 900, marginInline: "auto" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 28, flexWrap: "wrap" }}>
        <span className="badge"><span className="dot"></span> Serving SW Florida since 2014</span>
        <span className="badge" style={{ background: "transparent" }}><Stars n={5} size={12} /> 4.9 · 420+ reviews</span>
      </div>
      <h1 style={{ marginBottom: 24 }}>
        Cleaner water at home,<br/>
        <span style={{ fontStyle: "italic", color: "var(--orange)" }}>installed &amp; looked after.</span>
      </h1>
      <p style={{ fontSize: 19, color: "var(--ink-2)", maxWidth: 640, margin: "0 auto 36px", lineHeight: 1.55 }}>
        D&apos;Orange Services installs water systems for Southwest Florida homes — at a single tap
        or throughout the whole house — and stands behind them with local, certified service.
      </p>
      <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
        <a href="/Book%20Free%20Water%20Test" className="btn btn-primary" style={{ padding: "16px 24px", fontSize: 15 }}>
          Book free water test <Icon name="arrow" size={14} />
        </a>
        <a href="/Whole%20Home%20System" className="btn" style={{
          padding: "16px 24px", fontSize: 15,
          border: "1px solid var(--rule)", background: "var(--paper)", color: "var(--ink)",
        }}>
          See water systems
        </a>
      </div>

      <div style={{
        display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, marginTop: 56,
        borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)",
        maxWidth: 680, marginInline: "auto",
      }}>
        {[
          { n: "Free", l: "in-home water test" },
          { n: "Certified", l: "local installers" },
          { n: "Lifetime", l: "support & warranty" },
        ].map((s, i) => (
          <div key={s.l} style={{
            padding: "20px 16px",
            borderRight: i < 2 ? "1px solid var(--rule)" : "none",
          }}>
            <div style={{ fontFamily: "var(--f-display)", fontSize: 20, fontWeight: 600, lineHeight: 1, letterSpacing: "-0.02em" }}>{s.n}</div>
            <div style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 6 }}>{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── The two kinds of systems ──────────────────────────────
const HomeSystems = () => {
  const options = [
    {
      tag: "Point of Use",
      icon: "drop",
      tone: "sea",
      t: "Cleaner water at a single tap",
      d: "A compact system installed right where you use water most — the kitchen sink, a bathroom, or the shower. A simple place to start, and ideal for condos and rentals.",
    },
    {
      tag: "Point of Entry",
      icon: "home",
      tone: "orange",
      t: "Cleaner water for the whole home",
      d: "Installed where water first enters your home, so every tap, shower, and appliance gets treated water. The complete solution for homeowners who want it everywhere.",
    },
  ];
  const tones = {
    sea:    { bg: "var(--sea-soft)",    fg: "var(--sea)" },
    orange: { bg: "var(--orange-soft)", fg: "var(--orange-2)" },
  };
  return (
    <section id="systems" style={{ background: "var(--bg-2)" }}>
      <div className="container-wide">
        <div style={{ textAlign: "center", marginBottom: 56, maxWidth: 680, marginInline: "auto" }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>// Water systems</div>
          <h2 style={{ marginBottom: 16 }}>
            Point of use, or<br/>
            <span style={{ fontStyle: "italic", color: "var(--orange)" }}>point of entry?</span>
          </h2>
          <p style={{ color: "var(--ink-2)" }}>
            Both give you cleaner, better-tasting water — the right choice just depends on your home
            and how much of it you want covered.
          </p>
        </div>

        <div className="grid-2col">
          {options.map(o => {
            const t = tones[o.tone];
            return (
              <article key={o.tag} style={{
                background: "var(--paper)", border: "1px solid var(--rule)",
                borderRadius: 22, padding: 40, display: "flex", flexDirection: "column",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 12, background: t.bg, color: t.fg,
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}><Icon name={o.icon} size={24} /></div>
                  <div className="kbd-num">{o.tag}</div>
                </div>
                <h3 style={{ fontFamily: "var(--f-display)", fontSize: 24, marginBottom: 12 }}>{o.t}</h3>
                <p style={{ color: "var(--ink-2)", fontSize: 15, lineHeight: 1.6, marginBottom: 28 }}>{o.d}</p>
                <a href="/Whole%20Home%20System" className="btn btn-dark" style={{ marginTop: "auto", alignSelf: "start", padding: "14px 22px" }}>
                  Learn more <Icon name="arrow" size={14} />
                </a>
              </article>
            );
          })}
        </div>

        <p style={{ textAlign: "center", color: "var(--ink-3)", fontSize: 14, marginTop: 32 }}>
          Not sure which you need? Your free in-home water test tells us exactly what your home calls for.
        </p>
      </div>
    </section>
  );
};

// ─── What changes (lifestyle benefits, non-technical) ──────
const HomeBenefits = () => {
  const items = [
    { icon: "shower",  t: "Softer skin & hair",   d: "Water that's gentler on your skin and hair, shower after shower." },
    { icon: "drop",    t: "Better-tasting water", d: "Fresh, clean water for drinking, cooking, and coffee." },
    { icon: "sparkle", t: "Spot-free dishes",     d: "Glassware and fixtures that come out clean and clear." },
    { icon: "home",    t: "Kinder to your home",  d: "Cleaner water that's easier on your plumbing and appliances." },
  ];
  return (
    <section>
      <div className="container-wide">
        <div style={{ marginBottom: 48, textAlign: "center" }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>// What changes</div>
          <h2 style={{ maxWidth: 760, margin: "0 auto" }}>
            The day after we install,<br/>
            <span style={{ fontStyle: "italic", color: "var(--orange)" }}>everything feels different.</span>
          </h2>
        </div>
        <div className="grid-4col">
          {items.map(b => (
            <div key={b.t} style={{
              background: "var(--paper)", border: "1px solid var(--rule)",
              borderRadius: 20, padding: 28, minHeight: 200, position: "relative", overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", top: -20, right: -20, width: 80, height: 80, borderRadius: "50%",
                background: "var(--orange-soft)", opacity: 0.5,
              }}/>
              <div style={{
                width: 44, height: 44, borderRadius: 10, background: "var(--orange-soft)", color: "var(--orange-2)",
                display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, position: "relative",
              }}>
                <Icon name={b.icon} size={20} />
              </div>
              <h3 style={{ fontFamily: "var(--f-display)", fontSize: 19, marginBottom: 8 }}>{b.t}</h3>
              <p style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.5 }}>{b.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── The service (how we work) ─────────────────────────────
const HomeService = () => {
  const steps = [
    { n: "01", t: "Free in-home water test", d: "We come to you, check your water, and talk through what you'd like to improve." },
    { n: "02", t: "A tailored recommendation", d: "We suggest the right fit — point of use, point of entry, or a combination." },
    { n: "03", t: "Professional install", d: "Certified local techs handle the whole installation, cleanly and on schedule." },
    { n: "04", t: "Ongoing support", d: "We're a phone call away, with service and support for the life of your system." },
  ];
  return (
    <section style={{ background: "var(--bg-2)" }} id="service">
      <div className="container-wide">
        <div className="grid-sidebar">
          <div className="sticky-sidebar" style={{ top: 120 }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>// The service</div>
            <h2 style={{ marginBottom: 20 }}>
              A local team,<br/>
              <span style={{ fontStyle: "italic", color: "var(--orange)" }}>start to finish.</span>
            </h2>
            <p style={{ color: "var(--ink-2)", maxWidth: 380, marginBottom: 28 }}>
              We&apos;re a family-run team based in Naples. The same people who test your water
              install your system — and pick up the phone years later.
            </p>
            <a href="/Book%20Free%20Water%20Test" className="btn btn-primary">Book your free test <Icon name="arrow" size={14} /></a>
          </div>
          <div>
            {steps.map((s, i) => (
              <div key={s.n} style={{
                display: "grid", gridTemplateColumns: "80px 1fr",
                gap: 24, padding: "32px 0",
                borderTop: i === 0 ? "1px solid var(--rule)" : "none",
                borderBottom: "1px solid var(--rule)",
                alignItems: "start",
              }}>
                <div className="kbd-num" style={{ fontSize: 13 }}>{s.n}</div>
                <div>
                  <h3 style={{ marginBottom: 8, fontFamily: "var(--f-display)" }}>{s.t}</h3>
                  <p style={{ color: "var(--ink-2)", maxWidth: 560 }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Service areas ─────────────────────────────────────────
const HomeServiceAreas = () => {
  const cities = [
    { n: "Naples",         href: "/naples-water-treatment", note: "HQ" },
    { n: "Bonita Springs", href: "/bonita-springs-water-treatment" },
    { n: "Marco Island",   href: "/marco-island-water-treatment" },
    { n: "Estero",         href: "/estero-water-treatment" },
    { n: "Fort Myers",     href: "/fort-myers-water-treatment" },
    { n: "Cape Coral",     href: "/cape-coral-water-treatment" },
  ];
  return (
    <section style={{ background: "var(--ink)", color: "var(--paper)", position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", inset: 0, opacity: 0.18,
        background: "radial-gradient(ellipse 800px 500px at 80% 30%, var(--orange), transparent 60%)",
      }}/>
      <div className="container-wide" style={{ position: "relative" }}>
        <div className="grid-sidebar">
          <div>
            <div className="eyebrow" style={{ marginBottom: 16, color: "rgba(255,255,255,0.55)" }}>// Service areas</div>
            <h2 style={{ color: "var(--paper)", marginBottom: 20 }}>
              Collier &amp; Lee counties.<br/>
              <span style={{ fontStyle: "italic", color: "var(--orange)" }}>Same-week installs.</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.75)", maxWidth: 380, marginBottom: 28 }}>
              We&apos;re based in Naples and we service everywhere our trucks can reach in a workday.
              If you&apos;re close to the Gulf, we&apos;re close to you.
            </p>
            <a href="/Book%20Free%20Water%20Test" className="btn btn-light">
              Check my address <Icon name="arrow" size={14} />
            </a>
          </div>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1,
            background: "rgba(255,255,255,0.12)", borderRadius: 18, overflow: "hidden",
          }}>
            {cities.map((c, i) => (
              <a key={c.n} href={c.href} style={{
                background: "var(--ink)", padding: "24px 20px", textDecoration: "none",
                display: "flex", flexDirection: "column", justifyContent: "space-between",
                minHeight: 110, transition: "background .2s ease",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "#2E2E2E"}
              onMouseLeave={e => e.currentTarget.style.background = "var(--ink)"}>
                <span className="kbd-num" style={{ color: "rgba(255,255,255,0.5)" }}>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <div style={{ fontFamily: "var(--f-display)", fontSize: 20, color: "var(--paper)" }}>{c.n}</div>
                  {c.note && <div style={{ fontSize: 11, fontFamily: "var(--f-mono)", color: "var(--orange)", marginTop: 4, letterSpacing: ".1em" }}>● {c.note}</div>}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Free in-home water test banner ────────────────────────
const FreeTestBanner = () => (
  <section>
    <div className="container-wide">
      <div style={{
        position: "relative", borderRadius: 28, overflow: "hidden",
        minHeight: 360, display: "flex", alignItems: "center",
      }}>
        <img src="uploads/WhatsApp Image 2024-07-18 at 18.26.41.jpeg" alt=""
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(34,34,34,.88) 0%, rgba(34,34,34,.55) 55%, rgba(34,34,34,.25) 100%)" }} />
        <div style={{ position: "relative", padding: "clamp(40px, 6vw, 72px)", color: "#fff", maxWidth: 640 }}>
          <div className="eyebrow" style={{ color: "rgba(255,255,255,.7)", marginBottom: 16 }}>// Southwest Florida</div>
          <h2 style={{ color: "#fff", marginBottom: 16 }}>
            Florida resident?<br/>
            <span style={{ fontStyle: "italic" }}>Get a free in-home water test.</span>
          </h2>
          <p style={{ opacity: .88, marginBottom: 28, maxWidth: 500, fontSize: 17, lineHeight: 1.55 }}>
            A certified D&apos;Orange tech comes to your home, checks your water on the spot, and walks
            you through what we find — no obligation, same-week appointments.
          </p>
          <a href="/Book%20Free%20Water%20Test" className="btn btn-primary" style={{ padding: "16px 24px", fontSize: 15 }}>
            Schedule yours <Icon name="arrow" size={14} />
          </a>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { HomeHero, HomeSystems, HomeBenefits, HomeService, HomeServiceAreas, FreeTestBanner });
