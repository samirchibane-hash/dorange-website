// Home page — product & lifestyle landing (all categories)
// Structure mirrors Love Lives & Longevity: hero → category rows →
// best sellers → free-test banner.

// ─── Category / product data ───────────────────────────────
const homeCategories = [
  {
    eyebrow: "The Food",
    title: "The Foods You Eat",
    body: "The Ultra Tech 2 healthy cooking system is designed to cook without water or grease — locking in nutrients to prepare healthier, more flavorful meals.",
    image: "uploads/23-Piece-Ultra-Tech-2.feather.MASHER-1024x721.png",
    href: "Ultra Tech Cookware.html",
    cta: "Cookware",
    color: "var(--amber)",
  },
  {
    eyebrow: "The Water",
    title: "The Water You Drink",
    body: "Whole-home water purification for your entire house — plus shower, kitchen, and point-of-use systems. Chemical-free, salt-free, and built for Florida water.",
    image: "uploads/carico-tanks.png",
    href: "Whole Home System.html",
    cta: "Water Filtration",
    color: "var(--sea)",
  },
  {
    eyebrow: "The Air",
    title: "The Air You Breathe",
    body: "Multi-stage air purification systems that remove allergens, odors, VOCs, and airborne bacteria — for noticeably fresher air in every room of your home.",
    image: "uploads/air_con.png",
    href: "Air Purifier.html",
    cta: "Air Purification",
    color: "var(--sea)",
  },
  {
    eyebrow: "Restful",
    title: "Deep, Restful Sleep",
    body: "The Ultra Tech Platinum grounding sleep system aligns your spine and protects you from electromagnetic waves — for deeper, more rejuvenating sleep, year-round.",
    image: "uploads/nihtsleep.png",
    href: "Grounding Sleep System.html",
    cta: "Sleep Systems",
    color: "var(--orange)",
  },
  {
    eyebrow: "The Drink",
    title: "The Juice You Drink",
    body: "The JuiceMaster extraction system delivers pulp-free, nutrient-dense juice at 6,000 RPM — to strengthen your immune system and keep you feeling your best.",
    image: "uploads/carico-juice-master-professional-oph4jepbp7tdgyrv0x3zuvnncjnn0efk2wcao06a8g.jpg",
    href: "JuiceMaster.html",
    cta: "Juicers",
    color: "var(--leaf)",
  },
];

const homeBestSellers = [
  { title: "JuiceMaster", label: "Nutrition", image: "uploads/carico-juice-master-professional-oph4jepbp7tdgyrv0x3zuvnncjnn0efk2wcao06a8g.jpg", href: "JuiceMaster.html", color: "var(--leaf)" },
  { title: "Whole-Home Water System", label: "Water", image: "uploads/carico-tanks.png", href: "Whole Home System.html", color: "var(--sea)" },
  { title: "Sleep System Ultra Tech", label: "Sleep & Wellness", image: "uploads/nihtsleep.png", href: "Grounding Sleep System.html", color: "var(--orange)" },
  { title: "Ultra Tech 2 Cookware", label: "Healthy Cooking", image: "uploads/23-Piece-Ultra-Tech-2.feather.MASHER-1024x721.png", href: "Ultra Tech Cookware.html", color: "var(--amber)" },
];

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
        Upgrade your lifestyle<br/>
        <span style={{ fontStyle: "italic", color: "var(--orange)" }}>&amp; heal, naturally.</span>
      </h1>
      <p style={{ fontSize: 19, color: "var(--ink-2)", maxWidth: 620, margin: "0 auto 36px", lineHeight: 1.55 }}>
        D&apos;Orange Services brings you the most advanced products for a healthier home — the
        water you drink, the air you breathe, the food you eat, and the sleep you get.
      </p>
      <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
        <a href="Other Services.html" className="btn btn-primary" style={{ padding: "16px 24px", fontSize: 15 }}>
          Shop all products <Icon name="arrow" size={14} />
        </a>
        <a href="Book Free Water Test.html" className="btn" style={{
          padding: "16px 24px", fontSize: 15,
          border: "1px solid var(--rule)", background: "var(--paper)", color: "var(--ink)",
        }}>
          Book free water test
        </a>
      </div>
    </div>
  </section>
);

// ─── Category rows (alternating) ───────────────────────────
const CategoryRow = ({ i, cat }) => {
  const reverse = i % 2 === 1;
  return (
    <div className="grid-2col" style={{ gap: 64, alignItems: "center" }}>
      <div style={{ order: reverse ? 2 : 1 }}>
        <div style={{
          aspectRatio: "4/3", borderRadius: 22, overflow: "hidden",
          background: "radial-gradient(120% 100% at 50% 0%, var(--bg-2), #FFFFFF 76%)",
          display: "flex", alignItems: "center", justifyContent: "center", padding: 32,
          boxShadow: "var(--shadow-md)",
        }}>
          <img src={cat.image} alt={cat.title}
            style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", display: "block" }} />
        </div>
      </div>
      <div style={{ order: reverse ? 1 : 2 }}>
        <span style={{
          display: "inline-block", padding: "6px 12px", borderRadius: 8, marginBottom: 20,
          border: "1px solid var(--rule)", fontSize: 11, letterSpacing: ".14em",
          textTransform: "uppercase", color: "var(--ink-3)", fontFamily: "var(--f-mono)",
        }}>{cat.eyebrow}</span>
        <h2 style={{ marginBottom: 18 }}>{cat.title}</h2>
        <p style={{ color: "var(--ink-2)", fontSize: 17, maxWidth: 460, marginBottom: 30, lineHeight: 1.6 }}>{cat.body}</p>
        <a href={cat.href} className="btn btn-dark" style={{ padding: "14px 22px" }}>
          {cat.cta} <Icon name="arrow" size={14} />
        </a>
      </div>
    </div>
  );
};

const HomeCategories = () => (
  <section>
    <div className="container-wide" style={{ display: "grid", gap: 96 }}>
      {homeCategories.map((c, i) => <CategoryRow key={c.eyebrow} i={i} cat={c} />)}
    </div>
  </section>
);

// ─── Best sellers grid ─────────────────────────────────────
const BestSellers = () => (
  <section style={{ background: "var(--bg-2)" }}>
    <div className="container-wide">
      <div style={{ textAlign: "center", marginBottom: 56, maxWidth: 640, marginInline: "auto" }}>
        <div className="eyebrow" style={{ marginBottom: 16 }}>// Best sellers</div>
        <h2 style={{ marginBottom: 16 }}>
          Unlock your true potential and<br/>
          <span style={{ fontStyle: "italic", color: "var(--orange)" }}>optimize your health.</span>
        </h2>
        <p style={{ color: "var(--ink-2)" }}>Our most-loved products, trusted by families across Southwest Florida.</p>
      </div>

      <div className="grid-4col">
        {homeBestSellers.map(p => (
          <a key={p.title} href={p.href} style={{ display: "block", textDecoration: "none" }}>
            <div style={{
              aspectRatio: "1/1", borderRadius: 18, overflow: "hidden", marginBottom: 18,
              background: "var(--paper)", border: "1px solid var(--rule)",
              display: "flex", alignItems: "center", justifyContent: "center", padding: 24,
            }}>
              <img src={p.image} alt={p.title}
                style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", display: "block" }} />
            </div>
            <div className="eyebrow" style={{ color: p.color, marginBottom: 8 }}>{p.label}</div>
            <div style={{ fontFamily: "var(--f-display)", fontWeight: 600, fontSize: 18, marginBottom: 8, color: "var(--ink)" }}>{p.title}</div>
            <div style={{ fontSize: 14, color: "var(--orange)", display: "inline-flex", alignItems: "center", gap: 6, fontWeight: 500 }}>
              View product <Icon name="arrow" size={13} />
            </div>
          </a>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: 56 }}>
        <a href="Other Services.html" className="btn btn-ghost" style={{ padding: "14px 26px" }}>
          All products <Icon name="arrow" size={14} />
        </a>
      </div>
    </div>
  </section>
);

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
            A certified D&apos;Orange tech comes to your home, tests 32 parameters on the spot, and hands
            you a real water report — no obligation, same-week appointments.
          </p>
          <a href="Book Free Water Test.html" className="btn btn-primary" style={{ padding: "16px 24px", fontSize: 15 }}>
            Schedule yours <Icon name="arrow" size={14} />
          </a>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { HomeHero, HomeCategories, BestSellers, FreeTestBanner });
