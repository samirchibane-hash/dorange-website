// Water Systems page — point-of-use vs point-of-entry options.
// Intentionally non-technical: no stage counts, media names, or spec details.

const WHSHero = () => (
  <section className="hero-section" style={{ paddingBottom: 60 }}>
    <div style={{
      position: "absolute", inset: 0, pointerEvents: "none", opacity: .55,
      background: "radial-gradient(ellipse 1100px 700px at 80% 10%, var(--orange-soft), transparent 60%)",
    }} />
    <div className="container-wide grid-hero" style={{ position: "relative" }}>
      <div>
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 24 }}>
          <a href="/Whole%20Home%20System" style={{ fontSize: 13, color: "var(--ink-3)" }}>Water Systems</a>
          <span style={{ color: "var(--ink-4)" }}>/</span>
          <span style={{ fontSize: 13, color: "var(--ink-2)" }}>Point of use &amp; point of entry</span>
        </div>

        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 28, flexWrap: "wrap" }}>
          <span className="badge" style={{ background: "var(--orange-soft)", color: "var(--orange-2)", borderColor: "transparent" }}>
            <span className="dot" style={{ background: "var(--orange)" }}></span> Water systems
          </span>
          <span className="badge">Whole-home &amp; single-tap</span>
        </div>

        <h1 style={{ marginBottom: 24 }}>
          Cleaner water,<br/>
          <span style={{ fontStyle: "italic", color: "var(--orange)" }}>every way you use it.</span>
        </h1>
        <p style={{ fontSize: 19, color: "var(--ink-2)", maxWidth: 580, marginBottom: 32, lineHeight: 1.55 }}>
          Whether you want better water at a single tap or throughout your entire home, we offer two
          kinds of systems — installed and tailored to your Florida water by certified local techs.
        </p>

        <div style={{ display: "flex", gap: 12, marginBottom: 48, flexWrap: "wrap" }}>
          <a href="/Book%20Free%20Water%20Test" className="btn btn-primary">Book free water test <Icon name="arrow" size={14} /></a>
          <a href="#options" className="btn btn-ghost">Compare your options <Icon name="arrow" size={12} /></a>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0,
          borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)",
        }}>
          {[
            { n: "Two ways", l: "point of use or point of entry" },
            { n: "Certified", l: "installed by local techs" },
            { n: "Lifetime", l: "support & warranty" },
          ].map((s, i) => (
            <div key={s.l} style={{
              padding: "20px 16px 20px 0",
              borderRight: i < 2 ? "1px solid var(--rule)" : "none",
              paddingLeft: i > 0 ? 16 : 0,
            }}>
              <div style={{ fontFamily: "var(--f-display)", fontSize: 20, fontWeight: 600, lineHeight: 1, letterSpacing: "-0.02em" }}>{s.n}</div>
              <div style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 6 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <WHSHeroVisual />
    </div>
  </section>
);

const WHSHeroVisual = () => (
  <div style={{ position: "relative" }}>
    <div style={{
      aspectRatio: "4/5", borderRadius: 24, overflow: "hidden", boxShadow: "var(--shadow-lg)",
      background: "radial-gradient(120% 100% at 50% 0%, var(--bg-2), #FFFFFF 72%)",
      padding: 36, display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <img src="uploads/water-system-tanks.png" alt="D'Orange water systems in a range of sizes"
        style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", display: "block" }} />
    </div>
    <div className="hero-annotation"><div style={{
      position: "absolute", bottom: 24, left: -24, zIndex: 3,
      background: "var(--paper)", borderRadius: 14, padding: "14px 16px",
      boxShadow: "var(--shadow-md)", border: "1px solid var(--rule)",
      display: "flex", gap: 12, alignItems: "center", minWidth: 230,
    }}>
      <div style={{
        width: 42, height: 42, borderRadius: 10, background: "var(--sea-soft)", color: "var(--sea)",
        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
      }}><Icon name="drop" size={20} /></div>
      <div>
        <div className="kbd-num">TAILORED TO YOU</div>
        <div style={{ fontFamily: "var(--f-display)", fontSize: 16, fontWeight: 600, lineHeight: 1.2 }}>Sized to your home</div>
      </div>
    </div></div>
  </div>
);

// The two categories — point of use vs point of entry
const WHSOptions = () => {
  const options = [
    {
      tag: "Point of Use",
      icon: "drop",
      tone: "sea",
      t: "Cleaner water at a single tap",
      d: "A compact system installed right where you use water most — your kitchen sink, a bathroom, or the shower. Perfect when you want better water at a specific spot, or you live in a condo or rental.",
      points: [
        "Great for kitchens, showers & apartments",
        "Compact — fits at the fixture or under the sink",
        "A simple, affordable place to start",
      ],
    },
    {
      tag: "Point of Entry",
      icon: "home",
      tone: "orange",
      t: "Cleaner water for the whole home",
      d: "Installed where water first enters your home, so every tap, shower, and appliance gets treated water. The complete solution for homeowners who want cleaner water throughout the house.",
      points: [
        "Treats every tap, shower & appliance",
        "One system for your entire home",
        "Ideal for homeowners & larger households",
      ],
    },
  ];
  const tones = {
    sea:    { bg: "var(--sea-soft)",    fg: "var(--sea)" },
    orange: { bg: "var(--orange-soft)", fg: "var(--orange-2)" },
  };
  return (
    <section id="options" style={{ background: "var(--bg-2)" }}>
      <div className="container-wide">
        <div style={{ textAlign: "center", marginBottom: 56, maxWidth: 680, marginInline: "auto" }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>// Two kinds of systems</div>
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
                borderRadius: 22, overflow: "hidden", display: "flex", flexDirection: "column",
              }}>
                <div style={{ padding: 40, display: "flex", flexDirection: "column", flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                    <div style={{
                      width: 48, height: 48, borderRadius: 12, background: t.bg, color: t.fg,
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}><Icon name={o.icon} size={24} /></div>
                    <div className="kbd-num">{o.tag}</div>
                  </div>
                  <h3 style={{ fontFamily: "var(--f-display)", fontSize: 24, marginBottom: 12 }}>{o.t}</h3>
                  <p style={{ color: "var(--ink-2)", fontSize: 15, lineHeight: 1.6, marginBottom: 20 }}>{o.d}</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "grid", gap: 10 }}>
                    {o.points.map(p => (
                      <li key={p} style={{ display: "flex", gap: 10, alignItems: "start", fontSize: 14, color: "var(--ink)" }}>
                        <span style={{ color: t.fg, flexShrink: 0, marginTop: 2 }}><Icon name="check" size={16} /></span>{p}
                      </li>
                    ))}
                  </ul>
                  <a href="/Book%20Free%20Water%20Test" className="btn btn-primary" style={{ marginTop: "auto", justifyContent: "center", padding: "14px 22px" }}>
                    Book free water test <Icon name="arrow" size={14} />
                  </a>
                </div>
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

// Lifestyle benefits — non-technical
const WHSBenefits = () => {
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
          <h2 style={{ maxWidth: 760, margin: "0 auto" }}>The day after we install,<br/><span style={{ fontStyle: "italic", color: "var(--orange)" }}>everything feels different.</span></h2>
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

// Customer testimonial reel, filmed after their install
const WHS_REEL_URL = "https://www.instagram.com/reel/DISC6ZvBbut/";

const WHSTestimonialReel = () => (
  <section id="customer-story">
    <div className="container-wide">
      <div className="grid-hero reel-row">
        <div>
          <div className="eyebrow" style={{ marginBottom: 16 }}>// Customer story</div>
          <h2 style={{ marginBottom: 20 }}>
            Hear it from<br/>
            <span style={{ fontStyle: "italic", color: "var(--orange)" }}>a neighbor.</span>
          </h2>
          <p style={{ color: "var(--ink-2)", fontSize: 17, maxWidth: 460, marginBottom: 24, lineHeight: 1.6 }}>
            A Southwest Florida homeowner on what changed after we installed their system —
            in their own words, a few weeks in.
          </p>
          <p style={{ color: "var(--ink-2)", fontSize: 17, maxWidth: 460, marginBottom: 32, lineHeight: 1.6 }}>
            Every install starts the same way: a free in-home water test, and an honest
            recommendation about what your home actually needs.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="/Book%20Free%20Water%20Test" className="btn btn-primary" style={{ padding: "14px 22px" }}>
              Book free water test <Icon name="arrow" size={14} />
            </a>
            <a href={WHS_REEL_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ padding: "14px 22px" }}>
              Watch on Instagram <Icon name="arrow-ne" size={12} />
            </a>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <InstagramEmbed url={WHS_REEL_URL} />
        </div>
      </div>
    </div>
  </section>
);

// How we help you choose — non-technical process
const WHSProcess = () => {
  const steps = [
    { n: "01", t: "Free in-home water test", d: "We come to you, check your water, and talk through what you'd like to improve." },
    { n: "02", t: "A tailored recommendation", d: "We suggest the right fit — point of use, point of entry, or a combination." },
    { n: "03", t: "Professional install", d: "Certified local techs handle the whole installation, cleanly and on schedule." },
    { n: "04", t: "Ongoing support", d: "We're a phone call away, with service and support for the life of your system." },
  ];
  return (
    <section style={{ background: "var(--bg-2)" }}>
      <div className="container-wide">
        <div style={{ marginBottom: 48, textAlign: "center", maxWidth: 640, marginInline: "auto" }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>// How it works</div>
          <h2>Finding your fit is <span style={{ fontStyle: "italic", color: "var(--orange)" }}>simple.</span></h2>
        </div>
        <div className="grid-4col">
          {steps.map(s => (
            <div key={s.n} style={{ background: "var(--paper)", border: "1px solid var(--rule)", borderRadius: 18, padding: 28 }}>
              <div style={{ fontFamily: "var(--f-mono)", fontSize: 12, color: "var(--orange)", letterSpacing: ".1em", marginBottom: 14 }}>{s.n}</div>
              <h3 style={{ fontFamily: "var(--f-display)", fontSize: 19, marginBottom: 8 }}>{s.t}</h3>
              <p style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.55 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ — non-technical, POU vs POE oriented
const WHSFaq = () => {
  const faqs = [
    { q: "What's the difference between point of use and point of entry?", a: "Point of use treats water at one specific spot — like your kitchen sink or shower. Point of entry treats all the water as it enters your home, so every tap and appliance benefits. Point of use is a great, affordable start; point of entry is the complete whole-home solution." },
    { q: "Which one is right for my home?", a: "It depends on what you'd like to improve and whether you own or rent. If you're focused on drinking water or a single bathroom, point of use may be perfect. If you want cleaner water everywhere, point of entry is the way to go — and your free water test makes the choice clear." },
    { q: "Can I start small and add more later?", a: "Absolutely. Many customers begin with a point-of-use system and later move up to a whole-home system. We'll make sure whatever you choose fits your home and your budget today, with room to grow." },
    { q: "Will a system work in a condo or rental?", a: "Yes. Point-of-use systems are ideal for condos and rentals because they're compact and installed at a single fixture. We'll recommend an option that works for your space." },
    { q: "How long does installation take?", a: "Most installations are completed in a single visit by our certified local techs. We'll give you a clear timeline when we recommend your system." },
    { q: "Is there a warranty and support?", a: "Every system is backed by our warranty and lifetime support. If you ever have a question or need service, you have a direct line to the team that installed it." },
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section>
      <div className="container-wide">
        <div className="grid-faq">
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>// Common questions</div>
            <h2>Questions we hear often.</h2>
          </div>
          <div>
            {faqs.map((f, i) => (
              <div key={i} style={{
                borderTop: i === 0 ? "1px solid var(--rule)" : "none",
                borderBottom: "1px solid var(--rule)",
              }}>
                <button onClick={() => setOpen(open === i ? -1 : i)} style={{
                  width: "100%", textAlign: "left", padding: "22px 0",
                  display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20,
                }}>
                  <span style={{ fontFamily: "var(--f-display)", fontSize: 20, color: "var(--ink)" }}>{f.q}</span>
                  <span style={{
                    width: 34, height: 34, borderRadius: 999,
                    border: "1px solid var(--rule)", background: open === i ? "var(--orange)" : "var(--paper)",
                    color: open === i ? "#fff" : "var(--ink)",
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, transition: "all .2s ease",
                  }}>
                    <Icon name={open === i ? "minus" : "plus"} size={14} />
                  </span>
                </button>
                <div style={{
                  maxHeight: open === i ? 400 : 0, overflow: "hidden",
                  transition: "max-height .4s ease, padding .3s ease",
                  paddingBottom: open === i ? 24 : 0,
                }}>
                  <p style={{ color: "var(--ink-2)", fontSize: 15, maxWidth: 640 }}>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Closing CTA
const WHSCta = () => (
  <section>
    <div className="container-wide">
      <div style={{
        background: "var(--ink)", color: "var(--paper)",
        borderRadius: 28, padding: "64px 64px", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(222,81,19,0.4), transparent 60%)",
        }}/>
        <div className="grid-cta">
          <div>
            <div className="eyebrow" style={{ color: "rgba(255,255,255,0.5)", marginBottom: 16 }}>// Next step</div>
            <h2 style={{ color: "var(--paper)", marginBottom: 14, maxWidth: 640 }}>
              The right water system for your home.
            </h2>
            <p style={{ maxWidth: 520, opacity: .8, fontSize: 17 }}>
              Every home is different. Book a free in-home water test — we&apos;ll check your water and
              recommend the right fit, point of use or point of entry, with no obligation.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <a href="/Book%20Free%20Water%20Test" className="btn btn-primary" style={{ justifyContent: "center", padding: "16px 24px" }}>
              Book free water test <Icon name="arrow" size={14} />
            </a>
            <a href="tel:+12395550199" style={{
              padding: "16px 24px", borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.25)", color: "var(--paper)",
              fontSize: 14, fontWeight: 500, whiteSpace: "nowrap",
              display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10,
            }}>Call (239) 555-0199 <Icon name="phone" size={14} /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { WHSHero, WHSOptions, WHSBenefits, WHSTestimonialReel, WHSProcess, WHSFaq, WHSCta });
