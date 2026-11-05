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
            <a href="tel:+12393992676" className="btn btn-ghost btn-sm">
              <Icon name="phone" size={12} /> (239) 399-2676
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
            <a href="/" style={{ fontSize: 13, color: "var(--ink-3)" }}>Home</a>
            <span style={{ color: "var(--ink-4)" }}>/</span>
            <span style={{ fontSize: 13, color: "var(--ink-2)" }}>About</span>
          </div>
          <div className="eyebrow" style={{ marginBottom: 16 }}>// About</div>
          <h1 style={{ maxWidth: 920, marginBottom: 24 }}>
            More Than Our Business—<br/>
            <span style={{ fontStyle: "italic", color: "var(--orange)" }}>Water Is Our Passion.</span>
          </h1>
          <p style={{ fontSize: 19, color: "var(--ink-2)", maxWidth: 660, lineHeight: 1.5 }}>
            For over 23 years, I have worked on the front lines of the water purification industry, representing the most advanced filtration systems on the market.
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
                In two decades in this industry, I&apos;ve seen it all. I know what is mostly marketing hype, and I know what genuinely performs. The technology we represent is truly unique. It isn&apos;t like the ordinary filters on the market—it actually works.
              </p>
              <p>
                After spending years seeing firsthand how this technology changes lives, I knew I had to take my commitment a step further. Bringing together my decades of field experience with the deep knowledge and vision of my wife, Fernanda, we became independent distributors and founded D&apos;Orange Services.
              </p>
              <p>
                We don&apos;t just love this system for what it does—we love it for what it gives back to people. There is nothing quite like helping a family transform their daily health, or seeing the look on their faces the very first time they taste real, pure, clean water right from their own tap.
              </p>
              <p>
                Our purpose is simple: to help you and your family live a healthier, longer life, starting with the most essential element on earth—water.
              </p>
              <p>
                This is more than our business. It&apos;s our passion.
              </p>
              <div style={{ paddingTop: 8, borderTop: "1px solid var(--rule)" }}>
                <div style={{ fontFamily: "var(--f-display)", fontWeight: 600, fontSize: 18, color: "var(--ink)", letterSpacing: "-0.01em" }}>
                  Fernanda Ospina &amp; Danny Gonzalez
                </div>
                <div style={{ fontSize: 14, color: "var(--ink-3)", marginTop: 6 }}>
                  Founders, D&apos;Orange Services | Independent Distributors
                </div>
              </div>
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
                minWidth: 0,
              }}>
                <div style={{ fontFamily: "var(--f-display)", fontSize: "clamp(32px, 9vw, 48px)", lineHeight: 1, letterSpacing: "-0.02em" }}>{s.n}</div>
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
// Same reel the city pages carry, angled at the test visit itself. Embed sits
// left here so it doesn't read as a carbon copy of the city-page version, and
// the section stays on paper to break the tint of <Process /> above it.
const WATER_TEST_REEL_URL = "https://www.instagram.com/reel/DHtvOMLiQ7O/";

const WaterTestReel = () => (
  <section id="see-it">
    <div className="container-wide">
      <div className="grid-hero reel-row">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <InstagramEmbed url={WATER_TEST_REEL_URL} />
        </div>

        <div>
          <div className="eyebrow" style={{ marginBottom: 16 }}>// See it for yourself</div>
          <h2 style={{ marginBottom: 20, maxWidth: 480 }}>
            What the visit<br/>
            <span style={{ fontStyle: "italic", color: "var(--orange)" }}>actually looks like.</span>
          </h2>
          <p style={{ color: "var(--ink-2)", fontSize: 17, maxWidth: 460, marginBottom: 24, lineHeight: 1.6 }}>
            A short look at the certified local crew who run every water test across Southwest
            Florida — the same people who&apos;ll knock on your door.
          </p>
          <p style={{ color: "var(--ink-2)", fontSize: 17, maxWidth: 460, marginBottom: 32, lineHeight: 1.6 }}>
            No lab drop-off and no waiting on results. We test at your kitchen tap and walk you
            through the numbers before we leave.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="/Book%20Free%20Water%20Test" className="btn btn-primary" style={{ padding: "14px 22px" }}>
              Book free water test <Icon name="arrow" size={14} />
            </a>
            <a href={WATER_TEST_REEL_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ padding: "14px 22px" }}>
              Watch on Instagram <Icon name="arrow-ne" size={12} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

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
            <a href="/" style={{ fontSize: 13, color: "var(--ink-3)" }}>Home</a>
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
      <WaterTestReel />
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
