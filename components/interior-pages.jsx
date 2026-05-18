// Simpler interior pages — About, How It Works, Book Water Test

// LeadConnector calendar embed (for Book Free Water Test page)
const CalendarEmbed = () => {
  React.useEffect(() => {
    // Load LeadConnector embed script once
    if (document.querySelector('script[src*="form_embed.js"]')) return;
    const s = document.createElement("script");
    s.src = "https://link.msgsndr.com/js/form_embed.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <section id="calendar" style={{ paddingTop: 40 }}>
      <div className="container-wide">
        <div style={{
          background: "var(--paper)",
          border: "1px solid var(--rule)",
          borderRadius: 28,
          padding: "clamp(20px, 3vw, 36px)",
          boxShadow: "var(--shadow-md)",
          maxWidth: 1080,
          margin: "0 auto",
        }}>
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "end",
            marginBottom: 24, gap: 20, flexWrap: "wrap",
            paddingBottom: 20, borderBottom: "1px solid var(--rule)",
          }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 10 }}>// Pick a time</div>
              <h3 style={{ fontFamily: "var(--f-display)", fontSize: 28, letterSpacing: "-0.01em" }}>
                Reserve your free in-home water test.
              </h3>
              <p style={{ color: "var(--ink-3)", fontSize: 14, marginTop: 8, maxWidth: 520 }}>
                45-minute window. A certified D&apos;Orange tech will confirm by text the day before.
              </p>
            </div>
            <div style={{ display: "flex", gap: 18, alignItems: "center", flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--ink-2)" }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--leaf)" }}></span>
                Free
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--ink-2)" }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--orange)" }}></span>
                Same-week
              </div>
            </div>
          </div>

          <div style={{
            borderRadius: 18, overflow: "hidden", background: "var(--bg)",
            minHeight: 680,
          }}>
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/8w8PfkS6mWvm3zCg4aTr"
              style={{ width: "100%", border: "none", overflow: "hidden", display: "block", minHeight: 680 }}
              scrolling="no"
              id="8w8PfkS6mWvm3zCg4aTr_1779110240380"
              title="Book a free water test"
            />
          </div>

          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            marginTop: 24, paddingTop: 20, borderTop: "1px solid var(--rule)",
            flexWrap: "wrap", gap: 16,
          }}>
            <p style={{ fontSize: 13, color: "var(--ink-3)" }}>
              Can&apos;t find a time that works? Call us directly.
            </p>
            <a href="tel:+12395550199" className="btn btn-ghost btn-sm">
              <Icon name="phone" size={12} /> (239) 555-0199
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── About ────────────────────────────────────────────────
const AboutPage = () => (
  <>
    <Nav />
    <main>
      <section className="hero-section" style={{ paddingBottom: 40 }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none", opacity: .5,
          background: "radial-gradient(ellipse 900px 600px at 80% 10%, var(--orange-soft), transparent 60%)",
        }} />
        <div className="container-wide" style={{ position: "relative" }}>
          <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 24 }}>
            <a href="index.html" style={{ fontSize: 13, color: "var(--ink-3)" }}>Home</a>
            <span style={{ color: "var(--ink-4)" }}>/</span>
            <span style={{ fontSize: 13, color: "var(--ink-2)" }}>About</span>
          </div>
          <div className="eyebrow" style={{ marginBottom: 16 }}>// About</div>
          <h1 style={{ maxWidth: 920, marginBottom: 24 }}>
            A family-run water company<br/>
            <span style={{ fontStyle: "italic", color: "var(--orange)" }}>built for Florida homes.</span>
          </h1>
          <p style={{ fontSize: 19, color: "var(--ink-2)", maxWidth: 660, lineHeight: 1.5 }}>
            D&apos;Orange Services started in 2014 in a garage off Pine Ridge Road. A decade later, we&apos;re
            still family-owned, still based in Naples, and still doing every install ourselves.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 40 }}>
        <div className="container-wide">
          <div className="grid-sidebar">
            <div className="sticky-sidebar" style={{ top: 120 }}>
              <div className="eyebrow" style={{ marginBottom: 16 }}>// Our story</div>
              <h2>How we got here.</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 28, fontSize: 17, color: "var(--ink-2)", maxWidth: 680, lineHeight: 1.55 }}>
              <p>
                Naples water is a paradox — clean, regulated, and tested constantly, but
                also some of the hardest, most chlorine-heavy water in the country. Most homeowners
                here notice it in their dishes, their pipes, and their skin before they ever notice it
                in their glass.
              </p>
              <p>
                Our founder started D&apos;Orange after his own family installed a system that didn&apos;t
                fit their water. The company that sold it didn&apos;t test first — they sold the same system
                to everyone. The result was a $4,000 unit that solved 30% of the problem.
              </p>
              <p>
                The principle from day one has been simple: <strong>test before you sell, install once,
                stand behind it for life.</strong> Every D&apos;Orange tech is certified by the Water Quality
                Association, and every customer gets the cell number of the tech who installed their system.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg-2)" }}>
        <div className="container-wide">
          <div style={{ marginBottom: 48 }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>// By the numbers</div>
            <h2>A decade on the gulf coast.</h2>
          </div>
          <div className="grid-4col">
            {[
              { n: "3,800+", l: "homes treated" },
              { n: "2014", l: "founded in Naples" },
              { n: "4.9★", l: "Google rating" },
              { n: "12", l: "certified techs" },
            ].map(s => (
              <div key={s.l} style={{
                background: "var(--paper)", border: "1px solid var(--rule)",
                borderRadius: 20, padding: "32px 28px",
              }}>
                <div style={{ fontFamily: "var(--f-display)", fontSize: 48, lineHeight: 1, letterSpacing: "-0.02em" }}>{s.n}</div>
                <div style={{ fontSize: 13, color: "var(--ink-3)", marginTop: 10 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </main>
    <Footer />
  </>
);

// ─── How It Works ─────────────────────────────────────────
const HowItWorksPage = () => (
  <>
    <Nav />
    <main>
      <section className="hero-section" style={{ paddingBottom: 40 }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none", opacity: .5,
          background: "radial-gradient(ellipse 900px 600px at 80% 10%, var(--orange-soft), transparent 60%)",
        }} />
        <div className="container-wide" style={{ position: "relative" }}>
          <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 24 }}>
            <a href="index.html" style={{ fontSize: 13, color: "var(--ink-3)" }}>Home</a>
            <span style={{ color: "var(--ink-4)" }}>/</span>
            <span style={{ fontSize: 13, color: "var(--ink-2)" }}>How it works</span>
          </div>
          <div className="eyebrow" style={{ marginBottom: 16 }}>// Our process</div>
          <h1 style={{ maxWidth: 920, marginBottom: 24 }}>
            Four steps, one clean install,<br/>
            <span style={{ fontStyle: "italic", color: "var(--orange)" }}>and a lifetime of support.</span>
          </h1>
          <p style={{ fontSize: 19, color: "var(--ink-2)", maxWidth: 620, lineHeight: 1.5 }}>
            We test, we propose, we install, and we stay. Here&apos;s exactly what happens between
            booking your free water test and pouring your first filtered glass.
          </p>
        </div>
      </section>

      <Process />
      <LifeWithIt />

      <section style={{ background: "var(--bg-2)" }}>
        <div className="container-wide">
          <div style={{ marginBottom: 48 }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>// What we test for</div>
            <h2 style={{ maxWidth: 620 }}>32 parameters, tested on your kitchen counter.</h2>
          </div>
          <div className="grid-4col">
            {[
              "Total hardness (gpg)",
              "Chlorine (free & total)",
              "pH",
              "Total dissolved solids",
              "Iron",
              "Hydrogen sulfide",
              "Nitrates",
              "Heavy metals",
              "Tannins",
              "Manganese",
              "Bacteria (coliform)",
              "Turbidity",
            ].map((t, i) => (
              <div key={t} style={{
                background: "var(--paper)", border: "1px solid var(--rule)",
                borderRadius: 14, padding: "20px 18px",
                display: "flex", alignItems: "center", gap: 12,
              }}>
                <span className="kbd-num">{String(i+1).padStart(2, "0")}</span>
                <span style={{ fontSize: 14 }}>{t}</span>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 32, color: "var(--ink-3)", fontSize: 14 }}>
            ...plus 20 more — a full lab-grade panel, hand-delivered to your home.
          </p>
        </div>
      </section>

      <FAQ />
      <Contact />
    </main>
    <Footer />
  </>
);

// ─── Book Free Water Test ─────────────────────────────────
const BookPage = () => (
  <>
    <Nav />
    <main>
      <section className="hero-section" style={{ paddingBottom: 40 }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none", opacity: .55,
          background: "radial-gradient(ellipse 1100px 700px at 75% 10%, var(--orange-soft), transparent 60%)",
        }} />
        <div className="container-wide" style={{ position: "relative", textAlign: "center" }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>// Step 01</div>
          <h1 style={{ maxWidth: 920, margin: "0 auto 24px" }}>
            Book a free water test.<br/>
            <span style={{ fontStyle: "italic", color: "var(--orange)" }}>No obligation.</span>
          </h1>
          <p style={{ fontSize: 19, color: "var(--ink-2)", maxWidth: 580, margin: "0 auto", lineHeight: 1.5 }}>
            A certified D&apos;Orange tech comes to your home, tests your water on the kitchen
            counter, and hands you a report. That&apos;s it. No pitch, no pressure.
          </p>
        </div>
      </section>

      <CalendarEmbed />

      <section style={{ background: "var(--bg-2)" }}>
        <div className="container-wide">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>// What to expect</div>
            <h2>Here&apos;s exactly what happens.</h2>
          </div>
          <div className="grid-3col">
            {[
              { n: "01", t: "We confirm by text", d: "After you submit, we text you within 24 hours to schedule a 45-minute window that works." },
              { n: "02", t: "Tech runs the panel", d: "Your certified tech tests 32 parameters at your kitchen tap — no equipment to leave behind." },
              { n: "03", t: "You get a report", d: "Same day. Plain English. If a system makes sense, you get a fixed-price proposal. If not, we say so." },
            ].map(s => (
              <div key={s.n} style={{
                background: "var(--paper)", border: "1px solid var(--rule)",
                borderRadius: 22, padding: 32,
              }}>
                <div className="kbd-num" style={{ marginBottom: 16 }}>{s.n} / 03</div>
                <h3 style={{ fontFamily: "var(--f-display)", fontSize: 24, marginBottom: 12 }}>{s.t}</h3>
                <p style={{ fontSize: 15, color: "var(--ink-2)" }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
    </main>
    <Footer />
  </>
);

Object.assign(window, { AboutPage, HowItWorksPage, BookPage });
