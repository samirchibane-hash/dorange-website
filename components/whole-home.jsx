// Whole-Home Filtration System page — based on the tech sheet
// 4-stage system, two sizes (WH 500 / WH 750), salt-free magnetic conditioning

const WHSHero = () => (
  <section className="hero-section" style={{ paddingBottom: 60 }}>
    <div style={{
      position: "absolute", inset: 0, pointerEvents: "none", opacity: .55,
      background: "radial-gradient(ellipse 1100px 700px at 80% 10%, var(--orange-soft), transparent 60%)",
    }} />
    <div className="container-wide grid-hero" style={{ position: "relative" }}>
      <div>
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 24 }}>
          <a href="index.html" style={{ fontSize: 13, color: "var(--ink-3)" }}>Solutions</a>
          <span style={{ color: "var(--ink-4)" }}>/</span>
          <span style={{ fontSize: 13, color: "var(--ink-2)" }}>Whole-Home Filtration System</span>
        </div>

        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 28, flexWrap: "wrap" }}>
          <span className="badge" style={{ background: "var(--orange-soft)", color: "var(--orange-2)", borderColor: "transparent" }}>
            <span className="dot" style={{ background: "var(--orange)" }}></span> Flagship system
          </span>
          <span className="badge">4 stages · salt-free</span>
        </div>

        <h1 style={{ marginBottom: 24 }}>
          Chemical-free, crystal-clear water<br/>
          <span style={{ fontStyle: "italic", color: "var(--orange)" }}>for your entire home.</span>
        </h1>
        <p style={{ fontSize: 19, color: "var(--ink-2)", maxWidth: 580, marginBottom: 32, lineHeight: 1.5 }}>
          A four-stage point-of-entry system that filters, conditions, and polishes every gallon
          entering your home — using NSF-certified media, a composite inner tank, and a
          breakthrough magnetic field that conditions hard water without salt or electricity.
        </p>

        <div style={{ display: "flex", gap: 12, marginBottom: 48, flexWrap: "wrap" }}>
          <a href="Book Free Water Test.html" className="btn btn-primary">Book free water test <Icon name="arrow" size={14} /></a>
          <button className="btn btn-ghost">Download spec sheet <Icon name="arrow-ne" size={12} /></button>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0,
          borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)",
        }}>
          {[
            { n: "4", l: "filtration stages" },
            { n: "Salt-free", l: "magnetic conditioning" },
            { n: "750k", l: "gallons max capacity" },
            { n: "18/8", l: "stainless steel jacket" },
          ].map((s, i) => (
            <div key={s.l} style={{
              padding: "20px 16px 20px 0",
              borderRight: i < 3 ? "1px solid var(--rule)" : "none",
              paddingLeft: i > 0 ? 16 : 0,
            }}>
              <div style={{ fontFamily: "var(--f-display)", fontSize: 22, lineHeight: 1, letterSpacing: "-0.02em" }}>{s.n}</div>
              <div style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 6 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <WHSDeviceVisual />
    </div>
  </section>
);

const WHSDeviceVisual = () => (
  <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", minHeight: 680 }}>
    {/* concentric rings */}
    <div style={{
      position: "absolute", width: 460, height: 460, borderRadius: "50%",
      border: "1px dashed var(--rule)",
    }}/>
    <div style={{
      position: "absolute", width: 580, height: 580, borderRadius: "50%",
      border: "1px dashed var(--rule)", opacity: .5,
    }}/>
    <div style={{
      position: "absolute", width: 380, height: 380, borderRadius: "50%",
      background: "radial-gradient(circle, var(--orange-soft), transparent 70%)",
      opacity: .9,
    }}/>

    {/* Original SVG illustration of the system */}
    <svg viewBox="0 0 280 640" style={{
      height: 640, width: "auto", position: "relative", zIndex: 2,
      filter: "drop-shadow(0 30px 50px rgba(31,27,23,.18))",
    }}>
      <defs>
        <linearGradient id="bigJacket" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7a7a7a"/>
          <stop offset="15%" stopColor="#cfcfcf"/>
          <stop offset="35%" stopColor="#f4f4f4"/>
          <stop offset="55%" stopColor="#dcdcdc"/>
          <stop offset="80%" stopColor="#9c9c9c"/>
          <stop offset="100%" stopColor="#5a5a5a"/>
        </linearGradient>
        <linearGradient id="bigCap" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a2620"/>
          <stop offset="100%" stopColor="#1F1B17"/>
        </linearGradient>
        <clipPath id="cutaway">
          <rect x="140" y="120" width="84" height="380"/>
        </clipPath>
      </defs>

      {/* top valve cap */}
      <rect x="60" y="30" width="160" height="44" rx="10" fill="url(#bigCap)"/>
      <rect x="86" y="14" width="108" height="22" rx="6" fill="#2a2620"/>
      <circle cx="140" cy="25" r="4" fill="#E87A2A"/>
      {/* IN / OUT ports */}
      <rect x="40" y="40" width="22" height="14" rx="3" fill="#2a2620"/>
      <rect x="218" y="40" width="22" height="14" rx="3" fill="#2a2620"/>

      {/* tank body — stainless jacket */}
      <rect x="40" y="74" width="200" height="520" rx="14" fill="url(#bigJacket)" stroke="#5a5a5a" strokeWidth="0.6"/>

      {/* subtle vertical highlight */}
      <rect x="62" y="80" width="6" height="500" rx="3" fill="rgba(255,255,255,0.4)"/>

      {/* base ring */}
      <rect x="50" y="582" width="180" height="30" rx="8" fill="#1F1B17"/>
      <rect x="56" y="606" width="168" height="14" rx="4" fill="#0a0907"/>

      {/* Brand band */}
      <rect x="64" y="250" width="152" height="110" fill="#1F1B17" opacity="0.92"/>
      <text x="140" y="288" textAnchor="middle" fontSize="16" fill="#FAF6EE" fontFamily="Fraunces" fontStyle="italic">D&apos;Orange</text>
      <text x="140" y="318" textAnchor="middle" fontSize="10" fill="#E87A2A" fontFamily="JetBrains Mono" letterSpacing="2">WHOLE-HOME</text>
      <text x="140" y="338" textAnchor="middle" fontSize="9" fill="rgba(250,246,238,0.6)" fontFamily="JetBrains Mono">FILTRATION SYSTEM</text>

      {/* Cutaway window showing the 4 layers */}
      <g clipPath="url(#cutaway)">
        {/* glass background of cutaway */}
        <rect x="140" y="120" width="84" height="380" fill="#FAF6EE"/>
        {/* layer 1: KDF (dark) */}
        <rect x="140" y="120" width="84" height="95" fill="#2A2620"/>
        {[...Array(20)].map((_, j) => (
          <circle key={`a${j}`}
            cx={148 + (j % 5) * 16 + (Math.floor(j / 5) % 2) * 8}
            cy={130 + Math.floor(j / 5) * 22}
            r="2" fill="rgba(255,255,255,0.32)" />
        ))}
        {/* layer 2: Ultra Blend (deep ink) */}
        <rect x="140" y="215" width="84" height="95" fill="#1F1B17"/>
        {[...Array(20)].map((_, j) => (
          <circle key={`b${j}`}
            cx={148 + (j % 5) * 16 + (Math.floor(j / 5) % 2) * 8}
            cy={225 + Math.floor(j / 5) * 22}
            r="1.8" fill="rgba(255,255,255,0.28)" />
        ))}
        {/* layer 3: Garnet */}
        <rect x="140" y="310" width="84" height="95" fill="#7A2A1A"/>
        {[...Array(28)].map((_, j) => (
          <circle key={`c${j}`}
            cx={146 + (j % 6) * 14 + (Math.floor(j / 6) % 2) * 7}
            cy={320 + Math.floor(j / 6) * 18}
            r="1.6" fill="rgba(255,200,180,0.35)" />
        ))}
        {/* layer 4: Magnetic field / orange */}
        <rect x="140" y="405" width="84" height="95" fill="#E87A2A"/>
        {/* magnetic field lines */}
        {[0, 1, 2, 3].map(i => (
          <path key={`m${i}`}
            d={`M 144 ${420 + i * 22} Q 182 ${410 + i * 22} 220 ${420 + i * 22}`}
            stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none"/>
        ))}
        {/* upward arrows showing flow */}
        {[0, 1, 2, 3].map(i => (
          <g key={`arrow${i}`} opacity="0.55">
            <path d={`M ${165 + i * 18} 130 L ${165 + i * 18} 490`}
              stroke="#3aa7d1" strokeWidth="1.2" strokeDasharray="2 4" fill="none"/>
            <polygon points={`${165 + i * 18 - 3},132 ${165 + i * 18 + 3},132 ${165 + i * 18},126`}
              fill="#3aa7d1"/>
          </g>
        ))}
      </g>

      {/* cutaway window frame */}
      <rect x="140" y="120" width="84" height="380" fill="none" stroke="#2a2620" strokeWidth="1" strokeDasharray="3 3" opacity="0.6"/>

      {/* "cut" indicator label */}
      <text x="182" y="115" textAnchor="middle" fontSize="8" fill="#6B6259" fontFamily="JetBrains Mono" letterSpacing="1">CUTAWAY</text>

      {/* Decorative pressure gauge */}
      <circle cx="100" cy="450" r="16" fill="#1F1B17"/>
      <circle cx="100" cy="450" r="13" fill="#FAF6EE"/>
      <line x1="100" y1="450" x2="108" y2="442" stroke="#E87A2A" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="100" cy="450" r="1.4" fill="#1F1B17"/>
    </svg>

    <div style={{
      position: "absolute", top: 60, right: -10, zIndex: 3,
      background: "var(--ink)", color: "var(--paper)",
      padding: "10px 14px", borderRadius: 12, boxShadow: "var(--shadow-md)",
    }}>
      <div className="kbd-num" style={{ fontSize: 10, color: "rgba(250,246,238,0.6)" }}>BACKWASHING</div>
      <div style={{ fontSize: 13, marginTop: 4, fontFamily: "var(--f-display)" }}>Self-cleaning, no pre-filter</div>
    </div>

    <div style={{
      position: "absolute", top: 240, left: -10, zIndex: 3,
      background: "var(--paper)", padding: "10px 14px", borderRadius: 12,
      border: "1px solid var(--rule)", boxShadow: "var(--shadow-md)", maxWidth: 200,
    }}>
      <div className="kbd-num" style={{ fontSize: 10 }}>COMPOSITE TANK</div>
      <div style={{ fontSize: 13, marginTop: 4, fontFamily: "var(--f-display)" }}>Lightweight · high performance</div>
    </div>

    <div style={{
      position: "absolute", bottom: 110, right: -10, zIndex: 3,
      background: "var(--paper)", padding: "10px 14px", borderRadius: 12,
      border: "1px solid var(--rule)", boxShadow: "var(--shadow-md)", maxWidth: 220,
    }}>
      <div className="kbd-num" style={{ fontSize: 10 }}>4 STAGES STACKED</div>
      <div style={{ fontSize: 13, marginTop: 4, fontFamily: "var(--f-display)" }}>KDF · Ultra Blend · Garnet · Magnetic</div>
    </div>
  </div>
);

// Two sizes side by side — WH 500 / WH 750
const WHSSizes = () => {
  const sizes = [
    {
      model: "WH 500",
      tagline: "Standard households",
      capacity: "500,000",
      dim: "10\" × 35\"",
      people: "2–4 people per household",
      footprint: "Standard utility closet",
      featured: false,
    },
    {
      model: "WH 750",
      tagline: "Larger households",
      capacity: "750,000",
      dim: "10\" × 54\"",
      people: "5+ people · larger homes",
      footprint: "Standard utility closet",
      featured: true,
    },
  ];
  return (
    <section style={{ background: "var(--bg-2)" }} id="sizes">
      <div className="container-wide">
        <div style={{ marginBottom: 56, textAlign: "center" }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>// Two sizes</div>
          <h2 style={{ marginBottom: 16, maxWidth: 760, margin: "0 auto" }}>
            Sized to your household,<br/>
            <span style={{ fontStyle: "italic", color: "var(--orange)" }}>not the other way around.</span>
          </h2>
          <p style={{ color: "var(--ink-2)", maxWidth: 540, margin: "16px auto 0" }}>
            One model is rarely right for every house. We carry two — your free water test determines which fits.
          </p>
        </div>

        <div className="grid-2col">
          {sizes.map(s => (
            <article key={s.model} style={{
              background: "var(--paper)", border: `1px solid ${s.featured ? "var(--orange)" : "var(--rule)"}`,
              borderRadius: 22, padding: 36, position: "relative",
              boxShadow: s.featured ? "0 30px 60px -36px rgba(232,122,42,.4)" : "none",
            }}>
              {s.featured && (
                <span style={{
                  position: "absolute", top: 24, right: 24,
                  padding: "4px 10px", borderRadius: 999,
                  background: "var(--orange)", color: "#fff",
                  fontSize: 11, fontFamily: "var(--f-mono)", letterSpacing: ".08em", textTransform: "uppercase",
                }}>most popular</span>
              )}
              <div style={{ display: "flex", alignItems: "start", gap: 24, marginBottom: 32 }}>
                <TankSilhouette size={s.featured ? 220 : 180} />
                <div>
                  <div style={{ fontFamily: "var(--f-mono)", fontSize: 12, color: "var(--ink-3)", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 6 }}>
                    Model
                  </div>
                  <div style={{ fontFamily: "var(--f-display)", fontSize: 48, lineHeight: 1, letterSpacing: "-0.02em" }}>{s.model}</div>
                  <div style={{ fontSize: 14, color: "var(--ink-2)", marginTop: 8 }}>{s.tagline}</div>
                </div>
              </div>
              <dl style={{ margin: 0 }}>
                <SpecRow k="Capacity" v={<><strong>{s.capacity}</strong> gallons</>} />
                <SpecRow k="Dimensions" v={s.dim} />
                <SpecRow k="Best for" v={s.people} />
                <SpecRow k="Footprint" v={s.footprint} />
              </dl>
              <a href="Book Free Water Test.html" className={s.featured ? "btn btn-primary" : "btn btn-ghost"} style={{
                marginTop: 28, width: "100%", justifyContent: "center", padding: "14px 22px",
              }}>
                Get sized for my home <Icon name="arrow" size={14} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const SpecRow = ({ k, v }) => (
  <div style={{
    display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 16,
    padding: "12px 0", borderTop: "1px solid var(--rule)",
  }}>
    <dt style={{ fontSize: 13, color: "var(--ink-3)" }}>{k}</dt>
    <dd style={{ margin: 0, fontSize: 14, color: "var(--ink)" }}>{v}</dd>
  </div>
);

// Simple tank silhouette SVG
const TankSilhouette = ({ size = 180 }) => (
  <svg width={size * 0.42} height={size} viewBox="0 0 80 200" style={{ flexShrink: 0 }}>
    <defs>
      <linearGradient id="jacket" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#9c9c9c"/>
        <stop offset="35%" stopColor="#e7e7e7"/>
        <stop offset="65%" stopColor="#b8b8b8"/>
        <stop offset="100%" stopColor="#6a6a6a"/>
      </linearGradient>
    </defs>
    {/* top cap */}
    <rect x="20" y="2" width="40" height="14" rx="4" fill="#1F1B17"/>
    <circle cx="40" cy="9" r="3" fill="#E87A2A"/>
    {/* tank body */}
    <rect x="8" y="16" width="64" height="160" rx="6" fill="url(#jacket)" stroke="#5a5a5a" strokeWidth="0.6"/>
    {/* base */}
    <rect x="14" y="176" width="52" height="20" rx="4" fill="#1F1B17"/>
    {/* label band */}
    <rect x="14" y="60" width="52" height="36" fill="#1F1B17" opacity="0.85"/>
    <text x="40" y="76" textAnchor="middle" fontSize="6" fill="#FAF6EE" fontFamily="JetBrains Mono">D&apos;ORANGE</text>
    <text x="40" y="86" textAnchor="middle" fontSize="6" fill="#E87A2A" fontFamily="JetBrains Mono">WH</text>
  </svg>
);

// The 4 stages — interactive stack
const WHSStages = () => {
  const [active, setActive] = React.useState(0);
  const stages = [
    {
      n: "01",
      name: "NSF Certified KDF 55",
      sub: "Filtration media control",
      color: "#2A2A2A",
      removes: ["Chlorine", "Pesticides", "Organic matter", "Hydrogen sulfide", "Lead · cadmium · mercury · arsenic", "Bacteria · algae · fungi (hot water)"],
      d: "An NSF-certified bi-metal media that controls scale buildup and inhibits microbial growth — bacteria, algae, and fungi — even in hot water. It also reduces chlorine, pesticides, organic matter, hydrogen sulfide, and heavy metals like lead, cadmium, mercury, and arsenic before water moves deeper into the system.",
    },
    {
      n: "02",
      name: "Ultra Blend Plus",
      sub: "Special activated carbon blend",
      color: "#1F1B17",
      removes: ["Chlorine", "Sediment", "VOCs", "Herbicides", "Heavy metals", "THMs", "Bad taste & odors"],
      d: "A specialty activated carbon blend that polishes the water — pulling out residual chlorine, sediment, volatile organic compounds, herbicides, heavy metals, and trihalomethanes (THMs). This is the stage that gets rid of bad taste and odors before water reaches your tap.",
    },
    {
      n: "03",
      name: "High-Density Garnet Bed",
      sub: "Polishing layer",
      color: "#7A2A1A",
      removes: ["Residual carbon fines", "Fine sediment", "Flow distribution"],
      d: "A high-density garnet bed at the base of the tank designed to capture any residual carbon fines and fine sediment, leaving the water clear. The garnet also distributes water flow evenly through the bed above, which keeps the upper layers from channeling or clogging.",
    },
    {
      n: "04",
      name: "Magnetic Field Technology",
      sub: "Breakthrough salt-free conditioning",
      color: "#E87A2A",
      removes: ["Hard water scale", "Pipe deposits", "pH imbalance"],
      d: "A breakthrough magnetic field reverses the hard water condition and replicates soft-water behavior without using salt or electricity. It maintains a balanced pH and leaves the vital minerals your body actually needs intact — no consumables, no waste water, no monthly salt to buy.",
    },
  ];

  return (
    <section id="stages">
      <div className="container-wide">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>// Inside the tank</div>
          <h2 style={{ marginBottom: 16 }}>Four stages.<br/><span style={{ fontStyle: "italic", color: "var(--orange)" }}>One compact tank.</span></h2>
          <p style={{ color: "var(--ink-2)", maxWidth: 580, margin: "0 auto" }}>
            Water moves top-down through four specialized media layers — each one solving a different problem on the way to your tap.
          </p>
        </div>

        <div className="grid-2col" style={{ gap: 60, alignItems: "start" }}>
          {/* Stack visual */}
          <div style={{
            background: "var(--paper)", border: "1px solid var(--rule)",
            borderRadius: 22, padding: 32, position: "sticky", top: 100,
          }}>
            <StageStack active={active} setActive={setActive} stages={stages} />
            <div style={{
              marginTop: 20, paddingTop: 20, borderTop: "1px solid var(--rule)",
              display: "flex", justifyContent: "space-between",
              fontSize: 11, fontFamily: "var(--f-mono)", color: "var(--ink-3)",
              letterSpacing: ".1em", textTransform: "uppercase",
            }}>
              <span>Water IN ↓</span>
              <span>↓ Filtered water OUT</span>
            </div>
          </div>

          {/* Detail panel */}
          <div>
            {stages.map((s, i) => (
              <button key={i} onClick={() => setActive(i)}
                style={{
                  display: "block", width: "100%", textAlign: "left",
                  padding: "28px 32px", borderRadius: 18, marginBottom: 12,
                  background: active === i ? "var(--bg-2)" : "transparent",
                  border: `1px solid ${active === i ? "var(--rule)" : "transparent"}`,
                  transition: "all .25s ease", cursor: "pointer",
                }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 10 }}>
                  <span style={{
                    width: 42, height: 42, borderRadius: 10,
                    background: s.color,
                    color: "#fff",
                    fontSize: 12, fontFamily: "var(--f-mono)", fontWeight: 500,
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>{s.n}</span>
                  <div>
                    <h3 style={{ fontFamily: "var(--f-display)", fontSize: 22, margin: 0 }}>{s.name}</h3>
                    <div style={{ fontSize: 12, color: "var(--ink-3)", fontFamily: "var(--f-mono)", marginTop: 2 }}>{s.sub}</div>
                  </div>
                </div>
                {active === i && (
                  <div style={{ marginLeft: 56 }}>
                    <p style={{ color: "var(--ink-2)", fontSize: 15, lineHeight: 1.55, marginBottom: 14 }}>{s.d}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {s.removes.map(r => (
                        <span key={r} style={{
                          padding: "5px 10px", borderRadius: 999, fontSize: 12,
                          background: "var(--paper)", border: "1px solid var(--rule)",
                          color: "var(--ink-2)", fontFamily: "var(--f-mono)",
                        }}>{r}</span>
                      ))}
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StageStack = ({ active, setActive, stages }) => (
  <svg viewBox="0 0 340 480" style={{ width: "100%", height: "auto" }}>
    {/* Tank shell */}
    <rect x="80" y="30" width="180" height="420" rx="90"
      fill="var(--bg)" stroke="var(--rule)" strokeWidth="1.5" />
    {/* Top cap */}
    <rect x="100" y="14" width="140" height="24" rx="6" fill="var(--ink)" />
    <rect x="130" y="2" width="80" height="18" rx="4" fill="var(--ink-2)" />
    <circle cx="170" cy="11" r="3" fill="var(--orange)" />

    {/* Layers top → bottom */}
    {stages.map((s, i) => {
      const y = 40 + i * 97;
      const h = 97;
      const isActive = active === i;
      return (
        <g key={i} onClick={() => setActive(i)} style={{ cursor: "pointer" }}>
          <rect x="82" y={y} width="176" height={h}
            fill={s.color}
            opacity={isActive ? 1 : 0.65}
            style={{ transition: "opacity .3s ease" }} />
          {/* granular dot texture */}
          {[...Array(18)].map((_, j) => (
            <circle key={j}
              cx={95 + (j % 6) * 26 + (Math.floor(j / 6) % 2) * 13}
              cy={y + 22 + Math.floor(j / 6) * 26}
              r="2"
              fill="rgba(255,255,255,0.32)" />
          ))}
          {/* label bracket */}
          <line x1="258" y1={y + h / 2} x2="290" y2={y + h / 2}
            stroke={isActive ? "var(--ink)" : "var(--rule)"} strokeWidth="1" />
          <circle cx="290" cy={y + h / 2} r="13"
            fill={isActive ? "var(--orange)" : "var(--paper)"}
            stroke={isActive ? "var(--orange)" : "var(--rule)"} strokeWidth="1" />
          <text x="290" y={y + h / 2 + 4} textAnchor="middle" fontSize="10"
            fill={isActive ? "#fff" : "var(--ink-3)"}
            fontFamily="var(--f-mono)">{s.n}</text>
        </g>
      );
    })}

    {/* Flow indicator */}
    <g opacity=".6">
      <path d="M 50 60 L 50 430" stroke="var(--sea)" strokeWidth="1" strokeDasharray="3 3" />
      <text x="40" y="55" fontSize="9" fill="var(--ink-3)" fontFamily="var(--f-mono)">IN</text>
      <text x="40" y="445" fontSize="9" fill="var(--ink-3)" fontFamily="var(--f-mono)">OUT</text>
      <polygon points="47,430 53,430 50,436" fill="var(--sea)" />
    </g>
  </svg>
);

// Engineered details — composite tank, stainless jacket, bypass, backwashing
const WHSEngineered = () => {
  const features = [
    {
      icon: "shield", tone: "orange",
      tag: "Composite Inner Tank",
      t: "Lightweight, high performance",
      d: "A composite inner shell that won't rust, dent, or fail at the seams — significantly lighter than steel-only tanks, and rated for the pressures common in Florida municipal lines.",
    },
    {
      icon: "sparkle", tone: "sea",
      tag: "18/8 Stainless Steel Jacket",
      t: "Built for Florida humidity",
      d: "A polished 18/8 stainless outer jacket protects the inner tank from corrosion, salt air, and the abuse of a Naples garage or pool-equipment pad.",
    },
    {
      icon: "filter", tone: "leaf",
      tag: "Backwashing Feature",
      t: "Self-cleaning, no pre-filter",
      d: "The system backwashes itself — flushing away sediment and particulate so a separate pre-filter isn't needed on most municipal lines. Improves contact time and extends the life of the media.",
    },
    {
      icon: "wrench", tone: "warm",
      tag: "Bypass System",
      t: "Service-friendly",
      d: "An integrated bypass makes service or media replacement straightforward — no need to shut off the whole house when a technician needs to work on the unit.",
    },
  ];
  const tones = {
    orange: { bg: "var(--orange-soft)", fg: "var(--orange-2)" },
    sea:    { bg: "var(--sea-soft)",    fg: "var(--sea)" },
    leaf:   { bg: "var(--leaf-soft)",   fg: "var(--leaf)" },
    warm:   { bg: "var(--bg-3)",        fg: "var(--amber)" },
  };
  return (
    <section style={{ background: "var(--bg-2)" }}>
      <div className="container-wide">
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "end",
          marginBottom: 56, flexWrap: "wrap", gap: 32,
        }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>// Engineered details</div>
            <h2 style={{ maxWidth: 680 }}>The parts you don&apos;t see,<br/><span style={{ fontStyle: "italic" }}>built to last.</span></h2>
          </div>
          <p style={{ color: "var(--ink-2)", maxWidth: 380 }}>
            Most failures in water systems happen at the tank seam, the valve body, or the service bypass.
            We over-engineer all three.
          </p>
        </div>

        <div className="grid-2col">
          {features.map(f => {
            const t = tones[f.tone];
            return (
              <article key={f.tag} style={{
                background: "var(--paper)", border: "1px solid var(--rule)",
                borderRadius: 22, padding: 32,
                display: "flex", gap: 24, alignItems: "start",
              }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 14,
                  background: t.bg, color: t.fg,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Icon name={f.icon} size={26} />
                </div>
                <div>
                  <div className="kbd-num" style={{ marginBottom: 6 }}>// {f.tag}</div>
                  <h3 style={{ fontFamily: "var(--f-display)", fontSize: 22, marginBottom: 8 }}>{f.t}</h3>
                  <p style={{ fontSize: 15, color: "var(--ink-2)", lineHeight: 1.55 }}>{f.d}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Benefits — life with it
const WHSBenefits = () => {
  const items = [
    { icon: "shower",  t: "Skin feels softer",         d: "Chlorine and dryness stripped before the shower head." },
    { icon: "drop",    t: "Hair becomes silkier",      d: "Notice the difference in the first rinse." },
    { icon: "sparkle", t: "Spotting is reduced",       d: "Glassware comes out of the dishwasher crystal clear." },
    { icon: "waves",   t: "Less scaling on pipes",     d: "Magnetic conditioning prevents and reverses scale buildup." },
  ];
  return (
    <section>
      <div className="container-wide">
        <div style={{ marginBottom: 48, textAlign: "center" }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>// What changes</div>
          <h2 style={{ maxWidth: 760, margin: "0 auto" }}>The day after we install,<br/><span style={{ fontStyle: "italic", color: "var(--orange)" }}>everything feels different.</span></h2>
        </div>
        <div className="grid-4col">
          {items.map((b, i) => (
            <div key={b.t} style={{
              background: "var(--paper)", border: "1px solid var(--rule)",
              borderRadius: 20, padding: 28, minHeight: 220,
              position: "relative", overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", top: -20, right: -20,
                width: 80, height: 80, borderRadius: "50%",
                background: "var(--orange-soft)", opacity: 0.5,
              }}/>
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: "var(--orange-soft)", color: "var(--orange-2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 20, position: "relative",
              }}>
                <Icon name={b.icon} size={20} />
              </div>
              <h3 style={{ fontFamily: "var(--f-display)", fontSize: 20, marginBottom: 8 }}>{b.t}</h3>
              <p style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.5 }}>{b.d}</p>
              <div className="kbd-num" style={{ position: "absolute", bottom: 16, right: 20 }}>0{i+1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Full specs grid
const WHSSpecs = () => {
  const groups = [
    {
      title: "System overview",
      items: [
        ["Configuration", "4-stage stacked media"],
        ["Form factor", "Single tank, point-of-entry"],
        ["Models", "WH 500 · WH 750"],
        ["Operation", "Salt-free, no electricity"],
      ],
    },
    {
      title: "Media stack",
      items: [
        ["Stage 1", "NSF KDF 55 filtration media"],
        ["Stage 2", "Ultra Blend Plus activated carbon"],
        ["Stage 3", "High-density garnet bed"],
        ["Stage 4", "Magnetic field conditioning"],
      ],
    },
    {
      title: "Construction",
      items: [
        ["Inner tank", "Composite (lightweight, high-pressure)"],
        ["Outer jacket", "18/8 stainless steel"],
        ["Cap", "Reinforced composite"],
        ["Bypass", "Integrated for service"],
      ],
    },
    {
      title: "Contaminants reduced",
      items: [
        ["Chlorine, chloramines", "Stage 1 + 2"],
        ["Heavy metals", "Lead · cadmium · mercury · arsenic"],
        ["VOCs / herbicides / THMs", "Stage 2"],
        ["Bacteria · algae · fungi", "Stage 1 (KDF 55)"],
        ["Hardness / scale", "Stage 4 (magnetic)"],
        ["Sediment / carbon fines", "Stage 3 (garnet)"],
      ],
    },
  ];
  return (
    <section style={{ background: "var(--bg-2)" }}>
      <div className="container-wide">
        <div style={{ marginBottom: 48 }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>// Specifications</div>
          <h2>The system at a glance.</h2>
        </div>

        <div className="grid-2col">
          {groups.map(g => (
            <div key={g.title} style={{
              background: "var(--paper)", borderRadius: 18,
              border: "1px solid var(--rule)", padding: 28,
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <h3 style={{ fontFamily: "var(--f-display)", fontSize: 20 }}>{g.title}</h3>
                <span className="kbd-num">{g.items.length} items</span>
              </div>
              <dl style={{ margin: 0 }}>
                {g.items.map(([k, v]) => (
                  <div key={k} style={{
                    display: "grid", gridTemplateColumns: "1fr 1.2fr",
                    gap: 16, padding: "12px 0",
                    borderTop: "1px solid var(--rule)",
                  }}>
                    <dt style={{ fontSize: 13, color: "var(--ink-3)" }}>{k}</dt>
                    <dd style={{ margin: 0, fontSize: 14, color: "var(--ink)", fontWeight: 500 }}>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Compare to alternatives
const WHSCompare = () => {
  const rows = [
    { f: "Primary job",        us: "Filter + condition + polish", soft: "Hardness only", carbon: "Filter only", none: "Untreated" },
    { f: "Chlorine / chloramines", us: "Removed (KDF + carbon)", soft: "Not removed", carbon: "Removed", none: "Not removed" },
    { f: "Heavy metals",       us: "Reduced (KDF 55)", soft: "Minimal", carbon: "Partial", none: "—" },
    { f: "Hard water scale",   us: "Conditioned (magnetic)", soft: "Softened (salt)", carbon: "Not addressed", none: "—" },
    { f: "Bacteria / algae / fungi", us: "Inhibited (KDF 55)", soft: "No", carbon: "No", none: "—" },
    { f: "Salt required",      us: "None", soft: "Yes — monthly", carbon: "None", none: "—" },
    { f: "Electricity required", us: "None", soft: "Yes (valve)", carbon: "None", none: "—" },
    { f: "Pre-filter required", us: "No — self-backwashing", soft: "Sometimes", carbon: "Often", none: "—" },
  ];
  return (
    <section>
      <div className="container-wide">
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "end",
          marginBottom: 48, flexWrap: "wrap", gap: 32,
        }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>// Why not just a softener?</div>
            <h2 style={{ maxWidth: 680 }}>One system. The whole job.</h2>
          </div>
          <p style={{ color: "var(--ink-2)", maxWidth: 360 }}>
            Most Naples homes end up with a softener and a separate carbon filter. Ours does both
            — plus heavy metals and bacteria control — in a single tank.
          </p>
        </div>

        <div className="table-scroll" style={{
          background: "var(--paper)", borderRadius: 22,
          border: "1px solid var(--rule)", overflow: "hidden",
        }}>
          <div style={{
            display: "grid", gridTemplateColumns: "1.4fr 1.2fr 1fr 1fr 1fr",
            padding: "20px 28px", background: "var(--bg-2)",
            fontSize: 12, fontFamily: "var(--f-mono)",
            letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ink-3)",
            minWidth: 720,
          }}>
            <div>Feature</div>
            <div style={{ color: "var(--orange-2)", fontWeight: 600 }}>D&apos;Orange Whole-Home</div>
            <div>Salt softener</div>
            <div>Carbon only</div>
            <div>No system</div>
          </div>
          {rows.map((row, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "1.4fr 1.2fr 1fr 1fr 1fr",
              padding: "16px 28px", borderTop: "1px solid var(--rule)",
              fontSize: 14, alignItems: "center", minWidth: 720,
            }}>
              <div style={{ color: "var(--ink-2)" }}>{row.f}</div>
              <div style={{ fontWeight: 500, color: "var(--orange-2)" }}>{row.us}</div>
              <div style={{ color: "var(--ink-3)" }}>{row.soft}</div>
              <div style={{ color: "var(--ink-3)" }}>{row.carbon}</div>
              <div style={{ color: "var(--ink-3)" }}>{row.none}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ
const WHSFaq = () => {
  const faqs = [
    { q: "How is this different from a salt softener?", a: "A softener handles hardness, period. Ours does hardness (without salt, via magnetic conditioning), plus chlorine, plus VOCs and THMs (Ultra Blend Plus carbon), plus heavy metals and microbial control (KDF 55), plus sediment polish (garnet). One tank, four jobs." },
    { q: "Does the magnetic field actually work without salt?", a: "Yes — it doesn't 'soften' water in the chemical sense (the calcium and magnesium are still there), but it changes how those minerals behave so they don't stick to pipes or fixtures. You get the lifestyle benefits of soft water — no spots, silkier skin, no scale — while keeping the minerals your body actually wants." },
    { q: "Which model is right for my house?", a: "The WH 500 (500,000 gallons, 10\"×35\") fits most 2-4 person households. The WH 750 (750,000 gallons, 10\"×54\") is for larger families and bigger homes. Your free water test confirms the right size." },
    { q: "How much maintenance does it need?", a: "Almost none on a day-to-day basis — there's no salt to lug. We schedule an annual filter and media check, and the system backwashes itself between visits. Media typically lasts 8–12 years before replacement." },
    { q: "Does it remove PFAS?", a: "The Ultra Blend Plus carbon stage will capture a significant portion of PFAS. If your water test shows elevated PFAS, we recommend pairing this system with a dedicated PFAS polishing tank. We'll spec that as part of the proposal if it's needed." },
    { q: "Will it work with my well?", a: "Yes, with some additional pre-treatment depending on your well chemistry. We test for iron, sulfur, tannins, and bacteria before sizing the system. About a quarter of our installs are wells in eastern Collier county." },
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
        borderRadius: 28, padding: "64px 64px",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: -100, right: -100, width: 500, height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(232,122,42,0.4), transparent 60%)",
        }}/>
        <div className="grid-cta">
          <div>
            <div className="eyebrow" style={{ color: "rgba(250,246,238,0.5)", marginBottom: 16 }}>// Next step</div>
            <h2 style={{ color: "var(--paper)", marginBottom: 14, maxWidth: 640 }}>
              Your system, sized to your water.
            </h2>
            <p style={{ maxWidth: 520, opacity: .8, fontSize: 17 }}>
              Every Naples home is different. Book a free on-site test — we&apos;ll measure your
              hardness, chlorine, iron, and everything else, then spec the right system for your house.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <a href="Book Free Water Test.html" className="btn btn-primary" style={{ justifyContent: "center", padding: "16px 24px" }}>
              Book free water test <Icon name="arrow" size={14} />
            </a>
            <a href="tel:+12395550199" style={{
              padding: "16px 24px", borderRadius: 999,
              border: "1px solid rgba(250,246,238,0.25)", color: "var(--paper)",
              fontSize: 14, fontWeight: 500, whiteSpace: "nowrap",
              display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10,
            }}>Call (239) 555-0199 <Icon name="phone" size={14} /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { WHSHero, WHSSizes, WHSStages, WHSEngineered, WHSBenefits, WHSSpecs, WHSCompare, WHSFaq, WHSCta });
