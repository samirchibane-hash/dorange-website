// Contact + Footer
const Contact = () => {
  const [form, setForm] = React.useState({ name: "", email: "", phone: "", address: "", message: "" });
  const [errors, setErrors] = React.useState({});
  const [sent, setSent] = React.useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = "Name required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Valid email required";
    if (form.phone && !/^[\d\s\-\(\)\+]{7,}$/.test(form.phone)) errs.phone = "Invalid phone";
    if (form.message.trim().length < 10) errs.message = "Tell us a bit more";
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSent(true);
  };

  return (
    <section id="contact">
      <div className="container-wide">
        <div className="grid-contact">
          {/* Left panel — coastal panel */}
          <div className="contact-image-wrap" style={{
            position: "relative", borderRadius: 28, overflow: "hidden",
            minHeight: 600,
            background: "linear-gradient(165deg, var(--orange) 0%, var(--orange-2) 45%, #8a3a14 100%)",
          }}>
            {/* Sun + waves illustration */}
            <svg viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
              {/* sun */}
              <circle cx="450" cy="180" r="120" fill="rgba(255,252,246,0.25)"/>
              <circle cx="450" cy="180" r="80" fill="rgba(255,252,246,0.4)"/>
              {/* leaf silhouettes */}
              <g opacity="0.18">
                <path d="M-40 600 Q 120 480 280 580 T 600 620 L 600 800 L -40 800 Z" fill="#1a3b08"/>
                <path d="M-40 660 Q 120 560 280 640 T 600 680 L 600 800 L -40 800 Z" fill="#0d2104"/>
              </g>
              {/* wave lines */}
              <g stroke="rgba(255,252,246,0.35)" fill="none" strokeWidth="1.5">
                <path d="M -20 460 Q 100 440 220 460 T 460 460 T 700 460"/>
                <path d="M -20 490 Q 100 470 220 490 T 460 490 T 700 490"/>
                <path d="M -20 520 Q 100 500 220 520 T 460 520 T 700 520"/>
              </g>
            </svg>
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(180deg, transparent 0%, transparent 40%, rgba(31,27,23,0.72) 100%)",
              padding: 36,
              display: "flex", flexDirection: "column", justifyContent: "space-between",
              color: "var(--paper)",
            }}>
              <div>
                <div className="eyebrow" style={{ color: "rgba(255,252,246,0.8)", marginBottom: 16 }}>// Talk to a human</div>
                <h2 style={{ color: "var(--paper)", maxWidth: 420 }}>
                  Get in touch<br/>
                  <span style={{ fontStyle: "italic" }}>today.</span>
                </h2>
              </div>
              <div style={{ display: "grid", gap: 20, maxWidth: 380 }}>
                <InfoRow icon="mail"  label="Email" value="hello@dorangeservices.com" />
                <InfoRow icon="phone" label="Phone" value="(239) 555-0199" />
                <InfoRow icon="pin"   label="Office" value="1245 Tamiami Trail N · Naples, FL 34102" />
              </div>
            </div>
          </div>

          {/* Right panel — form */}
          <div style={{
            background: "var(--paper)", borderRadius: 28,
            padding: 40, border: "1px solid var(--rule)",
          }}>
            {!sent ? (
              <form onSubmit={submit}>
                <h3 style={{ marginBottom: 8 }}>Book a free water test</h3>
                <p style={{ color: "var(--ink-3)", fontSize: 14, marginBottom: 28 }}>
                  A certified D&apos;Orange tech will reach out within 24 hours to schedule.
                </p>

                <Field label="Name" error={errors.name}>
                  <input type="text" value={form.name} onChange={update("name")}
                    placeholder="Jane Appleseed"
                    style={inputStyle(errors.name)} />
                </Field>
                <Field label="Email" error={errors.email}>
                  <input type="email" value={form.email} onChange={update("email")}
                    placeholder="jane@home.com"
                    style={inputStyle(errors.email)} />
                </Field>
                <Field label="Phone (optional)" error={errors.phone}>
                  <input type="tel" value={form.phone} onChange={update("phone")}
                    placeholder="(239) 555-0199"
                    style={inputStyle(errors.phone)} />
                </Field>
                <Field label="Home ZIP">
                  <input type="text" value={form.address} onChange={update("address")}
                    placeholder="34102"
                    style={inputStyle(false)} />
                </Field>
                <Field label="What's going on with your water?" error={errors.message}>
                  <textarea value={form.message} onChange={update("message")}
                    rows={4}
                    placeholder="Spots on the glasses, dry skin after showers, well went yellow…"
                    style={{ ...inputStyle(errors.message), resize: "vertical", fontFamily: "inherit" }} />
                </Field>

                <div style={{ display: "flex", gap: 10, alignItems: "center", marginTop: 24 }}>
                  <button type="submit" className="btn btn-primary" style={{ flex: 1, justifyContent: "center", padding: "16px 22px" }}>
                    Request my free test <Icon name="arrow" size={14} />
                  </button>
                </div>
                <p style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 14, textAlign: "center" }}>
                  By submitting, you agree to our privacy policy. No spam — ever.
                </p>
              </form>
            ) : (
              <div style={{
                height: "100%", display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", textAlign: "center",
                padding: "40px 20px",
              }}>
                <div style={{
                  width: 64, height: 64, borderRadius: 999,
                  background: "var(--leaf-soft)", color: "var(--leaf)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 24,
                }}>
                  <Icon name="check" size={28} />
                </div>
                <h3 style={{ marginBottom: 8 }}>Request received.</h3>
                <p style={{ color: "var(--ink-2)", maxWidth: 320 }}>
                  A D&apos;Orange tech will reach out within 24 hours to schedule your free water test.
                </p>
                <button onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", address: "", message: "" }); }}
                  className="btn btn-ghost" style={{ marginTop: 28 }}>
                  Submit another request
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoRow = ({ icon, label, value }) => (
  <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
    <div style={{
      width: 40, height: 40, borderRadius: 10,
      background: "rgba(255,252,246,0.18)",
      backdropFilter: "blur(8px)",
      color: "var(--paper)",
      display: "flex", alignItems: "center", justifyContent: "center",
      border: "1px solid rgba(255,252,246,0.25)",
    }}>
      <Icon name={icon} size={16} />
    </div>
    <div>
      <div style={{ fontSize: 11, fontFamily: "var(--f-mono)", letterSpacing: ".12em", textTransform: "uppercase", opacity: .7 }}>{label}</div>
      <div style={{ fontSize: 15, marginTop: 2 }}>{value}</div>
    </div>
  </div>
);

const Field = ({ label, error, children }) => (
  <label style={{ display: "block", marginBottom: 16 }}>
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
      <span style={{ fontSize: 13, color: "var(--ink-2)", fontWeight: 500 }}>{label}</span>
      {error && <span style={{ fontSize: 12, color: "#B84C3F" }}>{error}</span>}
    </div>
    {children}
  </label>
);

const inputStyle = (err) => ({
  width: "100%",
  padding: "12px 14px",
  border: `1px solid ${err ? "#B84C3F" : "var(--rule)"}`,
  borderRadius: 10,
  background: "var(--bg)",
  fontSize: 14,
  fontFamily: "inherit",
  outline: "none",
  transition: "border-color .2s ease",
});

// Footer
const Footer = () => {
  const cols = [
    { title: "Solutions", links: [
      { l: "Whole-Home Filtration System", href: "Whole Home System.html" },
    ] },
    { title: "Company", links: [
      { l: "About", href: "About.html" },
      { l: "How it works", href: "How It Works.html" },
      { l: "Book free water test", href: "Book Free Water Test.html" },
    ] },
    { title: "Service areas", links: [
      { l: "Naples" }, { l: "Bonita Springs" }, { l: "Marco Island" },
      { l: "Estero" }, { l: "Fort Myers" }, { l: "Cape Coral" },
    ] },
    { title: "Resources", links: [
      { l: "Water test reports" }, { l: "Warranty" }, { l: "Financing" }, { l: "Customer portal" },
    ] },
  ];
  return (
    <footer style={{ background: "var(--ink)", color: "var(--paper)", paddingTop: 80, paddingBottom: 32 }}>
      <div className="container-wide">
        <div className="grid-footer" style={{ marginBottom: 64 }}>
          <div>
            <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 20, color: "var(--paper)" }}>
              <LogoMark size={44} />
              <span style={{ fontFamily: "var(--f-display)", fontSize: 22 }}>
                D&apos;Orange <span style={{ fontStyle: "italic", color: "var(--orange)" }}>Services</span>
              </span>
            </div>
            <p style={{ fontSize: 14, opacity: .7, maxWidth: 320, marginBottom: 24 }}>
              Family-owned water treatment for Southwest Florida homes. Naples, FL · Since 2014.
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              {["IG", "FB", "YT", "G"].map(s => (
                <a key={s} href="#" style={{
                  width: 36, height: 36, borderRadius: 999,
                  background: "rgba(250,246,238,0.08)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  fontSize: 11, fontFamily: "var(--f-mono)", letterSpacing: ".1em",
                }}>{s}</a>
              ))}
            </div>
          </div>
          {cols.map(c => (
            <div key={c.title}>
              <div className="eyebrow" style={{ color: "rgba(250,246,238,0.5)", marginBottom: 16 }}>{c.title}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
                {c.links.map(item => (
                  <li key={item.l}><a href={item.href || "#"} style={{ fontSize: 14, opacity: .75 }}
                    onMouseEnter={e => e.currentTarget.style.opacity = 1}
                    onMouseLeave={e => e.currentTarget.style.opacity = 0.75}>{item.l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Giant wordmark */}
        <div style={{
          fontFamily: "var(--f-display)",
          fontSize: "clamp(80px, 15vw, 240px)",
          lineHeight: 0.9,
          letterSpacing: "-0.04em",
          color: "rgba(250,246,238,0.07)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          marginBottom: 32,
          fontStyle: "italic",
          fontWeight: 400,
        }}>
          D&apos;Orange Services.
        </div>

        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          paddingTop: 24, borderTop: "1px solid rgba(250,246,238,0.1)",
          fontSize: 12, opacity: .55,
          flexWrap: "wrap", gap: 16,
        }}>
          <div>© {new Date().getFullYear()} D&apos;Orange Services, LLC · FL Lic. #CWC-XXXXX · Naples, FL</div>
          <div style={{ display: "flex", gap: 20 }}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Accessibility</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

Object.assign(window, { Contact, Footer });
