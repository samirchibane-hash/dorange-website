// Middle-of-page sections: value props, process, gallery
const ValueProps = () => {
  const cards = [
    {
      tag: "01", icon: "sun", tone: "orange",
      title: "Built for Florida water",
      body: "Naples water runs hard and chlorine-heavy. Every system we install is dialed to your home's specific chemistry — not a one-size kit off a shelf.",
      stat: "Tuned to your home", link: "How we test",
    },
    {
      tag: "02", icon: "beaker", tone: "leaf",
      title: "Lab-grade, in-home testing",
      body: "We come to your house and test 32 parameters on the kitchen counter — hardness, chlorine, iron, TDS, pH, hydrogen sulfide. You get a real water report before any sales pitch.",
      stat: "Free, 24hr results", link: "See a sample report",
    },
    {
      tag: "03", icon: "shield", tone: "sea",
      title: "Installed for life",
      body: "Every system ships with lifetime tank and jacket warranty, annual filter service, and a direct line to the tech who installed it.",
      stat: "Lifetime warranty", link: "Read the warranty",
    },
  ];
  const tones = {
    orange: { bg: "var(--orange-soft)", fg: "var(--orange-2)" },
    leaf:   { bg: "var(--leaf-soft)",   fg: "var(--leaf)" },
    sea:    { bg: "var(--sea-soft)",    fg: "var(--sea)" },
  };
  return (
    <section id="value">
      <div className="container-wide">
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "end",
          marginBottom: 56, gap: 40, flexWrap: "wrap",
        }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>// Why D&apos;Orange</div>
            <h2 style={{ maxWidth: 760 }}>
              Crystal-clear water.<br/>
              <span style={{ fontStyle: "italic", color: "var(--ink-3)" }}>Chemical-free, glass after glass.</span>
            </h2>
          </div>
          <p style={{ color: "var(--ink-2)", maxWidth: 380, fontSize: 16 }}>
            We&apos;re a family-run team of certified water specialists based out of Naples.
            We don&apos;t sell systems — we solve water problems.
          </p>
        </div>

        <div className="grid-3col">
          {cards.map(c => {
            const t = tones[c.tone];
            return (
              <article key={c.tag} style={{
                background: "var(--paper)",
                borderRadius: 22,
                padding: 28,
                border: "1px solid var(--rule)",
                display: "flex", flexDirection: "column",
                minHeight: 400,
                transition: "transform .3s ease, box-shadow .3s ease",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "var(--shadow-lg)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 32 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: t.bg, color: t.fg,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon name={c.icon} size={22} />
                  </div>
                  <span className="kbd-num">{c.tag} / 03</span>
                </div>
                <h3 style={{ marginBottom: 12 }}>{c.title}</h3>
                <p style={{ color: "var(--ink-2)", marginBottom: 24, fontSize: 15 }}>{c.body}</p>
                <div style={{
                  marginTop: "auto", paddingTop: 20,
                  borderTop: "1px solid var(--rule)",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                }}>
                  <span style={{ fontSize: 13, color: t.fg, fontWeight: 500 }}>{c.stat}</span>
                  <a href="#" style={{
                    fontSize: 13, color: "var(--ink)",
                    display: "inline-flex", alignItems: "center", gap: 6,
                  }}>
                    {c.link} <Icon name="arrow-ne" size={12} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Process
const Process = () => {
  const steps = [
    { n: "01", t: "Free in-home water test", d: "A certified D'Orange tech visits your home, draws a sample at your kitchen tap, and tests 32 parameters on the spot — chlorine, hardness, iron, sulfur, pH, TDS, and more." },
    { n: "02", t: "Custom system proposal", d: "You get a full water report and a fixed-price proposal sized to your specific home and water chemistry. We tell you what you need — and what you don't." },
    { n: "03", t: "Install in a single day", d: "Most whole-home installs take 4–6 hours. We bring tarps, clean up after ourselves, and walk you through the system before we leave." },
    { n: "04", t: "Lifetime support", d: "Annual filter and bed service, salt-free magnetic technology (no recurring salt to lug), and a direct text line to the tech who installed your system." },
  ];
  return (
    <section style={{ background: "var(--bg-2)" }} id="how">
      <div className="container-wide">
        <div className="grid-sidebar">
          <div className="sticky-sidebar" style={{ top: 120 }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>// How it works</div>
            <h2 style={{ marginBottom: 20 }}>Four steps.<br/>One clean install.</h2>
            <p style={{ color: "var(--ink-2)", maxWidth: 380, marginBottom: 28 }}>
              From the first sample to your first glass — every step is documented, transparent, and built around your home.
            </p>
            <a href="Book Free Water Test.html" className="btn btn-primary">Book your free test <Icon name="arrow" size={14} /></a>
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

// What changes when you have it — visual benefits
const LifeWithIt = () => {
  const items = [
    { icon: "shower", t: "Silkier hair, softer skin", d: "Chlorine and hardness gone before they hit your shower head. Notice the difference in the first rinse." },
    { icon: "sparkle", t: "Spot-free dishes & glassware", d: "Less detergent, fewer rewashes. Your stemware comes out of the rack looking polished." },
    { icon: "shield", t: "Appliances last longer", d: "No scale on heating elements. Dishwashers, washers, water heaters all run cleaner, longer." },
    { icon: "waves", t: "Pipes stay clear", d: "Magnetic conditioning prevents scale buildup — and reverses what's already there over time." },
  ];
  return (
    <section>
      <div className="container-wide">
        <div style={{ marginBottom: 56, textAlign: "center" }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>// Life with the system</div>
          <h2 style={{ maxWidth: 760, margin: "0 auto" }}>
            The water you&apos;ve been living with,<br/>
            <span style={{ fontStyle: "italic", color: "var(--orange)" }}>quietly upgraded.</span>
          </h2>
        </div>
        <div className="grid-4col">
          {items.map((b, i) => (
            <div key={b.t} style={{
              background: "var(--paper)", border: "1px solid var(--rule)",
              borderRadius: 20, padding: 28, minHeight: 240,
              position: "relative", overflow: "hidden",
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: "var(--orange-soft)", color: "var(--orange-2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 20,
              }}>
                <Icon name={b.icon} size={20} />
              </div>
              <h3 style={{ fontFamily: "var(--f-display)", fontSize: 20, marginBottom: 8 }}>{b.t}</h3>
              <p style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.5 }}>{b.d}</p>
              <div style={{
                position: "absolute", top: 16, right: 16,
                fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--ink-4)",
              }}>0{i + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Service areas — Naples-centric
const ServiceMap = () => {
  const cities = [
    { n: "Naples", note: "HQ" },
    { n: "Bonita Springs" },
    { n: "Marco Island" },
    { n: "Estero" },
    { n: "Fort Myers" },
    { n: "Cape Coral" },
    { n: "Ave Maria" },
    { n: "Pelican Bay" },
    { n: "Olde Naples" },
    { n: "Park Shore" },
    { n: "Vanderbilt Beach" },
    { n: "Lely Resort" },
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
            <div className="eyebrow" style={{ marginBottom: 16, color: "rgba(250,246,238,0.55)" }}>// Service areas</div>
            <h2 style={{ color: "var(--paper)", marginBottom: 20 }}>
              Collier &amp; Lee counties.<br/>
              <span style={{ fontStyle: "italic", color: "var(--orange)" }}>Same-week installs.</span>
            </h2>
            <p style={{ color: "rgba(250,246,238,0.75)", maxWidth: 380, marginBottom: 28 }}>
              We&apos;re based in Naples and we service everywhere our trucks can reach in a workday.
              If you&apos;re close to the Gulf, we&apos;re close to you.
            </p>
            <a href="Book Free Water Test.html" className="btn btn-light">
              Check my address <Icon name="arrow" size={14} />
            </a>
          </div>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1,
            background: "rgba(250,246,238,0.12)", borderRadius: 18, overflow: "hidden",
          }}>
            {cities.map((c, i) => (
              <div key={c.n} style={{
                background: "var(--ink)", padding: "24px 20px",
                display: "flex", flexDirection: "column", justifyContent: "space-between",
                minHeight: 110,
              }}>
                <span className="kbd-num" style={{ color: "rgba(250,246,238,0.5)" }}>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <div style={{ fontFamily: "var(--f-display)", fontSize: 20, color: "var(--paper)" }}>{c.n}</div>
                  {c.note && <div style={{ fontSize: 11, fontFamily: "var(--f-mono)", color: "var(--orange)", marginTop: 4, letterSpacing: ".1em" }}>● {c.note}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { ValueProps, Process, LifeWithIt, ServiceMap });
