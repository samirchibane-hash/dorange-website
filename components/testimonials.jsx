// Testimonials carousel
const Testimonials = () => {
  const quotes = [
    {
      q: "Our Naples water was so hard the dishwasher was leaving white film on everything. The D'Orange team tested, explained exactly what was happening, and put in a system that fixed it the same day. A year in — no spots, no scale, no salt to lug.",
      name: "Annie M.", role: "Homeowner · Pelican Bay, Naples", rating: 5,
    },
    {
      q: "We had three different companies quote us. D'Orange was the only one who actually tested our water before recommending anything. Their tech walked my wife through every part of the install. Professional from start to finish.",
      name: "David R.", role: "Homeowner · Estero, FL", rating: 5,
    },
    {
      q: "The water report alone was worth it — I finally understood what was coming out of our taps. The system they proposed wasn't the biggest one in their lineup, it was the right one for us. That earned my trust.",
      name: "Sarah K.", role: "Homeowner · Marco Island, FL", rating: 5,
    },
    {
      q: "Showering is genuinely different. My skin doesn't feel dried out anymore, and my wife says her hair feels lighter. Coffee tastes better too. Worth every dollar.",
      name: "Marcus T.", role: "Homeowner · Bonita Springs, FL", rating: 5,
    },
  ];
  const [idx, setIdx] = React.useState(0);
  const prev = () => setIdx((idx - 1 + quotes.length) % quotes.length);
  const next = () => setIdx((idx + 1) % quotes.length);

  return (
    <section id="testimonials">
      <div className="container-wide">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>// Voices</div>
          <h2>Trusted by Southwest Florida families.</h2>
        </div>

        <div className="testimonials-pad" style={{
          background: "var(--paper)",
          border: "1px solid var(--rule)",
          borderRadius: 28,
          position: "relative",
          maxWidth: 960, margin: "0 auto",
        }}>
          <div style={{
            position: "absolute", top: 32, left: 40,
            fontFamily: "var(--f-display)", fontSize: 120, lineHeight: 1,
            color: "var(--orange-soft)", pointerEvents: "none",
          }}>&ldquo;</div>

          <div style={{ position: "relative" }}>
            <Stars n={5} size={16} />
            <blockquote key={idx} style={{
              margin: "24px 0 32px",
              fontFamily: "var(--f-display)",
              fontSize: 26, lineHeight: 1.35, letterSpacing: "-0.01em",
              color: "var(--ink)",
              animation: "fadeUp .5s ease",
            }}>
              {quotes[idx].q}
            </blockquote>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
              <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 999,
                  background: "var(--orange-soft)", color: "var(--orange-2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--f-display)", fontSize: 18,
                }}>
                  {quotes[idx].name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: 500, fontSize: 15 }}>{quotes[idx].name}</div>
                  <div style={{ fontSize: 13, color: "var(--ink-3)" }}>{quotes[idx].role}</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <span className="kbd-num">{String(idx + 1).padStart(2, "0")} / {String(quotes.length).padStart(2, "0")}</span>
                <button onClick={prev} aria-label="Previous" style={{
                  width: 40, height: 40, borderRadius: 999,
                  border: "1px solid var(--rule)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  color: "var(--ink-2)",
                }}><svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m8 2-5 5 5 5"/></svg></button>
                <button onClick={next} aria-label="Next" style={{
                  width: 40, height: 40, borderRadius: 999,
                  background: "var(--orange)", color: "#fff",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                }}><svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m6 2 5 5-5 5"/></svg></button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="grid-logos" style={{
          marginTop: 64,
          borderTop: "1px solid var(--rule)",
          paddingTop: 40,
        }}>
          {["NSF", "WQA", "BBB A+", "EPA", "Google ★4.9", "Angi"].map(l => (
            <div key={l} style={{
              textAlign: "center", fontFamily: "var(--f-mono)",
              fontSize: 13, color: "var(--ink-3)", letterSpacing: ".12em",
            }}>{l}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ
const FAQ = () => {
  const faqs = [
    { q: "How much does a whole-home system cost?", a: "It depends on your water and your household size. After your free in-home test, we hand you a fixed-price proposal — most whole-home systems land between $2,800 and $5,400 installed, with 0% APR financing available for qualified buyers." },
    { q: "Do you handle well water?", a: "Yes. About 25% of our SW Florida installs are wells — mostly out toward Ave Maria and Golden Gate Estates. We test for iron, sulfur, tannins, nitrates, bacteria, and the heavy metals common in Florida groundwater, then build a multi-stage system specific to your well." },
    { q: "How long does installation take?", a: "Most whole-home installs take 4–6 hours, start to finish. We send one tech per home so your point of contact never changes mid-project." },
    { q: "What's covered under the lifetime warranty?", a: "The composite inner tank, 18/8 stainless steel jacket, valves, and housings are covered for the life of the system. Filter media is replaced on our scheduled service visits, included free for the first two years." },
    { q: "Are your systems NSF certified?", a: "Every system uses NSF-certified media — KDF-55, premium activated carbon, and high-density garnet — with full certification sheets in your customer portal after install." },
    { q: "Will hurricane season affect my system?", a: "Our systems include a bypass that makes it easy to take offline before a storm and bring back online after. We send Collier county customers a storm-prep text when a named system is in the Gulf." },
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section style={{ background: "var(--bg-2)" }} id="faq">
      <div className="container-wide">
        <div className="grid-faq">
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>// Questions</div>
            <h2 style={{ marginBottom: 20 }}>Straight answers.</h2>
            <p style={{ color: "var(--ink-2)", maxWidth: 320, marginBottom: 24 }}>
              Still have a question? Call a real person at <strong>(239) 555-0199</strong> or email <strong>hello@dorangeservices.com</strong>.
            </p>
          </div>
          <div>
            {faqs.map((f, i) => (
              <div key={i} style={{
                borderTop: i === 0 ? "1px solid var(--rule)" : "none",
                borderBottom: "1px solid var(--rule)",
              }}>
                <button onClick={() => setOpen(open === i ? -1 : i)} style={{
                  width: "100%", textAlign: "left",
                  padding: "24px 0",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  gap: 20,
                }}>
                  <span style={{
                    fontFamily: "var(--f-display)", fontSize: 22,
                    color: "var(--ink)", letterSpacing: "-0.01em",
                  }}>{f.q}</span>
                  <span style={{
                    width: 36, height: 36, borderRadius: 999,
                    border: "1px solid var(--rule)", background: open === i ? "var(--orange)" : "var(--paper)",
                    color: open === i ? "#fff" : "var(--ink)",
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, transition: "all .2s ease",
                  }}>
                    <Icon name={open === i ? "minus" : "plus"} size={16} />
                  </span>
                </button>
                <div style={{
                  maxHeight: open === i ? 400 : 0, overflow: "hidden",
                  transition: "max-height .4s ease, padding .3s ease",
                  paddingBottom: open === i ? 28 : 0,
                }}>
                  <p style={{ color: "var(--ink-2)", fontSize: 16, maxWidth: 640 }}>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Testimonials, FAQ });
