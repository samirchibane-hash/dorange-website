// D'Orange Services — Other Services pages
// Four complementary health & lifestyle products

// ─── Product catalogue ─────────────────────────────────────
const otherProducts = [
  {
    id: "juicemaster",
    href: "JuiceMaster.html",
    title: "JuiceMaster",
    subtitle: "Juice Extractor",
    price: "$1,459",
    category: "Nutrition",
    tone: "leaf",
    image: "uploads/carico-juice-master-professional-oph4jepbp7tdgyrv0x3zuvnncjnn0efk2wcao06a8g.jpg",
    categoryColor: "var(--leaf)",
    categorySoft: "var(--leaf-soft)",
    description:
      "A professional-grade 6,000 RPM juice extractor built with European precision engineering — delivering maximum yield, pulp-free juice to support daily nutrition and immune health.",
    annotations: [
      { icon: "leaf",   label: "Motor Speed",    value: "6,000 RPM" },
      { icon: "shield", label: "Certified",      value: "UL · CSA approved" },
    ],
    ticker: { label: "JuiceMaster Pro", text: "Pulp-free nutrition · every morning" },
    features: [
      { title: "Patented 6,000 RPM Motor",     body: "Extracts maximum juice yield from fruits and vegetables with precision speed control for pulp-free results every time." },
      { title: "European Engineering",           body: "Built with precision European technology, UL approved and CSA certified for dependable, long-term home use." },
      { title: "Simple Operation & Easy Clean", body: "Intuitive controls and quick-release parts mean fresh, healthy juice is ready — and cleaned up — in minutes." },
      { title: "Immune & Wellness Support",     body: "Consistent daily juicing helps address nutrient deficiencies and supports whole-body immune function." },
    ],
  },
  {
    id: "filtration-cartridge",
    href: "Filtration Cartridge.html",
    title: "Multi-Stage Filtration System",
    subtitle: "Whole-Home Purification",
    price: "From $1,200",
    category: "Water & Air",
    tone: "sea",
    image: "uploads/CARICO_water-filtration_TREATMENT_SYSTEM_FROM_HEALTH_CRAFT_3cae2b5e-8fcc-455c-bced-6009f1219afd_1024x1024.webp",
    categoryColor: "var(--sea)",
    categorySoft: "var(--sea-soft)",
    description:
      "A versatile whole-home purification system available in five configurations — from compact point-of-use units to high-capacity whole-home systems — for cleaner air and water throughout your home.",
    annotations: [
      { icon: "filter", label: "Configurations", value: "5 system sizes" },
      { icon: "shield", label: "Coverage",       value: "Whole Home 750" },
    ],
    ticker: { label: "Multi-Stage System", text: "From point-of-use to whole-home · From $1,200" },
    features: [
      { title: "Five Configuration Options",    body: "Choose from 10\", 15\", or 20\" point-of-use units, or step up to the Whole Home 500 or 750 for full-property coverage." },
      { title: "Removes Allergens & Particles", body: "Multi-stage filtration captures dust, pollen, pet dander, and airborne particulates before they circulate through your home." },
      { title: "Odor & VOC Elimination",        body: "Neutralizes cooking smells, household odors, and volatile organic compounds for noticeably fresher indoor air." },
      { title: "Bacteria & Toxin Reduction",    body: "Targets harmful bacteria and toxins at the source, reducing your family's exposure to indoor pollutants." },
    ],
  },
  {
    id: "grounding-mattress",
    href: "Grounding Sleep System.html",
    title: "Sleep System Ultra Tech",
    subtitle: "Platinum Grounding Mattress",
    price: "$4,749",
    category: "Sleep & Wellness",
    tone: "orange",
    image: "uploads/nihtsleep.png",
    categoryColor: "var(--orange)",
    categorySoft: "var(--orange-soft)",
    description:
      "An orthopedic grounding sleep system with four adjustable comfort levels and Thermofresh Memory Foam — engineered for spinal alignment and year-round temperature comfort.",
    annotations: [
      { icon: "sparkle", label: "Comfort Levels", value: "4 adjustable settings" },
      { icon: "sun",     label: "Technology",     value: "Thermofresh Memory Foam" },
    ],
    ticker: { label: "Sleep System Ultra Tech", text: "Spinal alignment · year-round comfort · $4,749" },
    features: [
      { title: "4 Adjustable Comfort Levels",   body: "The only orthopedic sleep system adjustable across four distinct settings, from firm support to plush comfort." },
      { title: "Thermofresh Memory Foam",        body: "Laser-cut, patented foam design adapts to your body's contours for optimal pressure relief and support." },
      { title: "Spinal Alignment Technology",   body: "Engineered to maintain ideal spinal position for back, side, and stomach sleepers throughout the night." },
      { title: "Year-Round Temperature Comfort", body: "Unique ventilation design keeps you cool in summer and warm in winter for uninterrupted, rejuvenating sleep." },
    ],
  },
  {
    id: "ultra-tech-cookware",
    href: "Ultra Tech Cookware.html",
    title: "Ultra Tech 2 Cookware",
    subtitle: "9-Ply Surgical Steel Set",
    price: "$1,359",
    category: "Healthy Cooking",
    tone: "warm",
    image: "uploads/23-Piece-Ultra-Tech-2.feather.MASHER-1024x721.png",
    categoryColor: "var(--amber)",
    categorySoft: "#F5E4CC",
    description:
      "Premium 9-ply cookware crafted from 316Ti surgical stainless steel and titanium — featuring waterless vapor-seal cooking technology to lock in maximum nutrition and flavor.",
    annotations: [
      { icon: "sparkle", label: "Construction",  value: "9-ply titanium steel" },
      { icon: "waves",   label: "Cook Method",   value: "Waterless vapor-seal" },
    ],
    ticker: { label: "Ultra Tech 2 Cookware", text: "23-piece set · surgical steel · $1,359" },
    features: [
      { title: "316Ti Surgical Steel + Titanium", body: "Nine-ply construction delivers even heat distribution across every surface for consistent, professional-grade results." },
      { title: "Waterless Vapor-Seal Cooking",   body: "The Ultra-Seal lid creates a vacuum that locks in moisture so food slow-cooks in its own natural juices." },
      { title: "Stack Cook on One Burner",        body: "Cook a complete multi-dish meal stacked on a single burner — saving energy, time, and counter space." },
      { title: "All-Stovetop Compatible",         body: "Works with induction, gas, and electric. Heat-resistant silicone handles rated to 375°F. Backed by lifetime warranty." },
    ],
  },
  {
    id: "air-purifier",
    href: "Air Purifier.html",
    title: "Deluxe Air Purifier",
    subtitle: "Whole-Home Air Purification",
    price: "From $1,200",
    category: "Air Quality",
    tone: "sea",
    image: "uploads/air_con.png",
    categoryColor: "var(--sea)",
    categorySoft: "var(--sea-soft)",
    description:
      "A premium multi-stage air purification system available in point-of-use and whole-home configurations — engineered to remove allergens, odors, VOCs, and airborne bacteria for a cleaner indoor environment.",
    annotations: [
      { icon: "filter", label: "Filtration",  value: "Multi-stage HEPA" },
      { icon: "home",   label: "Coverage",    value: "Whole-home ready" },
    ],
    ticker: { label: "Deluxe Air Purifier", text: "5 configurations · allergen-free air · From $1,200" },
    features: [
      { title: "Removes Allergens & Particulates", body: "Captures dust, pollen, pet dander, and dust mite matter from the air before they circulate through your home." },
      { title: "Odor & VOC Elimination",           body: "Neutralizes cooking smells, household odors, and volatile organic compounds for noticeably fresher indoor air." },
      { title: "Bacteria & Pathogen Reduction",    body: "Multi-stage filtration targets airborne bacteria and harmful toxins, reducing your family's exposure to indoor pollutants." },
      { title: "Five Configuration Options",       body: "Available in 10\", 15\", and 20\" point-of-use units plus Whole Home 500 and 750 configurations for full-property coverage." },
    ],
  },
];

// ─── Category pill ─────────────────────────────────────────
const CategoryPill = ({ product }) => (
  <div style={{
    display: "inline-flex", alignItems: "center", gap: 8,
    background: product.categorySoft, color: product.categoryColor,
    borderRadius: 999, padding: "5px 14px",
    fontSize: 12, fontWeight: 500, letterSpacing: "0.04em",
    textTransform: "uppercase",
  }}>
    <span style={{
      width: 6, height: 6, borderRadius: "50%",
      background: product.categoryColor, flexShrink: 0,
    }} />
    {product.category}
  </div>
);

// ─── Hub Page ──────────────────────────────────────────────
const OtherServicesPage = () => (
  <>
    <Nav />
    <main>
      {/* Hero */}
      <section className="hero-section" style={{ paddingBottom: 48 }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none", opacity: .5,
          background: "radial-gradient(ellipse 900px 600px at 75% 5%, var(--orange-soft), transparent 60%)",
        }} />
        <div className="container-wide" style={{ position: "relative" }}>
          <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 24 }}>
            <a href="index.html" style={{ fontSize: 13, color: "var(--ink-3)" }}>Home</a>
            <span style={{ color: "var(--ink-4)" }}>/</span>
            <span style={{ fontSize: 13, color: "var(--ink-2)" }}>Other Services</span>
          </div>
          <div className="eyebrow" style={{ marginBottom: 16 }}>// Beyond water</div>
          <h1 style={{ maxWidth: 860, marginBottom: 24 }}>
            Products for a healthier<br />
            <span style={{ fontStyle: "italic", color: "var(--orange)" }}>home &amp; lifestyle.</span>
          </h1>
          <p style={{ fontSize: 19, color: "var(--ink-2)", maxWidth: 600, lineHeight: 1.55 }}>
            Alongside our water filtration systems, D&apos;Orange Services offers a curated selection
            of health-forward products — from nutrition to cookware to sleep.
          </p>
        </div>
      </section>

      {/* Product grid */}
      <section style={{ paddingTop: 0 }}>
        <div className="container-wide">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 440px), 1fr))",
            gap: 24,
          }}>
            {otherProducts.map(p => (
              <a key={p.id} href={p.href}
                style={{ textDecoration: "none", display: "block" }}
                onMouseEnter={e => {
                  const card = e.currentTarget.querySelector(".os-card");
                  card.style.transform = "translateY(-4px)";
                  card.style.boxShadow = "var(--shadow-lg)";
                }}
                onMouseLeave={e => {
                  const card = e.currentTarget.querySelector(".os-card");
                  card.style.transform = "translateY(0)";
                  card.style.boxShadow = "var(--shadow-sm)";
                }}>
                <div className="os-card" style={{
                  background: "var(--paper)", border: "1px solid var(--rule)",
                  borderRadius: 22, padding: "32px",
                  transition: "transform .25s ease, box-shadow .25s ease",
                  boxShadow: "var(--shadow-sm)",
                  height: "100%", display: "flex", flexDirection: "column",
                }}>
                  <CategoryPill product={p} />

                  <div style={{ marginTop: 22, flex: 1 }}>
                    <h3 style={{ fontFamily: "var(--f-display)", fontSize: 26, letterSpacing: "-0.02em", marginBottom: 4 }}>
                      {p.title}
                    </h3>
                    <div style={{ fontSize: 13, color: "var(--ink-3)", marginBottom: 16 }}>{p.subtitle}</div>
                    <p style={{ fontSize: 15, color: "var(--ink-2)", lineHeight: 1.6 }}>{p.description}</p>
                  </div>

                  <div style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    paddingTop: 24, marginTop: 24, borderTop: "1px solid var(--rule)",
                  }}>
                    <div style={{
                      fontFamily: "var(--f-display)", fontSize: 22,
                      letterSpacing: "-0.02em", color: "var(--ink)",
                    }}>
                      {p.price}
                    </div>
                    <span style={{
                      display: "inline-flex", alignItems: "center", gap: 6,
                      fontSize: 14, fontWeight: 500, color: p.categoryColor,
                    }}>
                      View product
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m5 3 4 4-4 4"/>
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </main>
    <Footer />
  </>
);

// ─── Product hero visual (mirrors HeroVisual in hero.jsx) ──
const ProductHeroVisual = ({ product }) => {
  const [ann1, ann2] = product.annotations;
  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "relative" }}>

        {/* Main image container */}
        <div style={{
          aspectRatio: "4/5",
          borderRadius: 24,
          overflow: "hidden",
          boxShadow: "var(--shadow-lg)",
          position: "relative",
          background: product.categorySoft,
        }}>
          <img
            src={product.image}
            alt={product.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          />
          {/* Subtle vignette to ground the floating UI */}
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: "linear-gradient(to bottom, transparent 55%, rgba(31,27,23,0.45) 100%)",
          }} />
        </div>

        {/* Floating annotation — top left */}
        <div className="hero-annotation">
          <div style={{
            position: "absolute", top: 36, left: -20,
            background: "var(--paper)",
            borderRadius: 14,
            padding: "12px 14px",
            boxShadow: "var(--shadow-md)",
            border: "1px solid var(--rule)",
            display: "flex", gap: 10, alignItems: "center",
            minWidth: 200,
          }}>
            <div style={{
              width: 38, height: 38, borderRadius: 10, flexShrink: 0,
              background: product.categorySoft, color: product.categoryColor,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Icon name={ann1.icon} size={17} />
            </div>
            <div>
              <div style={{ fontSize: 10, color: "var(--ink-3)", fontFamily: "var(--f-mono)", letterSpacing: ".08em", textTransform: "uppercase" }}>
                {ann1.label}
              </div>
              <div style={{ fontFamily: "var(--f-display)", fontSize: 16, color: product.categoryColor }}>
                {ann1.value}
              </div>
            </div>
          </div>
        </div>

        {/* Floating annotation — bottom right */}
        <div className="hero-annotation">
          <div style={{
            position: "absolute", bottom: 106, right: -20,
            background: "var(--paper)",
            borderRadius: 14,
            padding: "12px 14px",
            boxShadow: "var(--shadow-md)",
            border: "1px solid var(--rule)",
            display: "flex", gap: 10, alignItems: "center",
            minWidth: 210,
          }}>
            <div style={{
              width: 38, height: 38, borderRadius: 10, flexShrink: 0,
              background: product.categorySoft, color: product.categoryColor,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Icon name={ann2.icon} size={17} />
            </div>
            <div>
              <div style={{ fontSize: 10, color: "var(--ink-3)", fontFamily: "var(--f-mono)", letterSpacing: ".08em", textTransform: "uppercase" }}>
                {ann2.label}
              </div>
              <div style={{ fontFamily: "var(--f-display)", fontSize: 16 }}>
                {ann2.value}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom ticker */}
        <div style={{
          position: "absolute", bottom: 20, left: 20, right: 20,
          background: "rgba(31,27,23,0.86)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          color: "var(--paper)",
          padding: "13px 16px",
          borderRadius: 14,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: 12,
        }}>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 10, letterSpacing: ".1em", opacity: .55, textTransform: "uppercase", fontFamily: "var(--f-mono)" }}>
              {product.ticker.label}
            </div>
            <div style={{ fontFamily: "var(--f-display)", fontSize: 15, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              {product.ticker.text}
            </div>
          </div>
          <a href="Book Free Water Test.html" style={{
            flexShrink: 0,
            padding: "7px 13px", borderRadius: 999,
            background: "var(--paper)", color: "var(--ink)", fontSize: 12, fontWeight: 500,
            display: "inline-flex", alignItems: "center", gap: 5,
            textDecoration: "none",
          }}>
            Enquire <Icon name="arrow-ne" size={11} />
          </a>
        </div>

      </div>
    </div>
  );
};

// ─── Shared product page template ─────────────────────────
const ProductPageTemplate = ({ product }) => (
  <>
    <Nav />
    <main>
      {/* Hero */}
      <section className="hero-section" style={{ paddingBottom: 48 }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none", opacity: .55,
          background: `radial-gradient(ellipse 1000px 640px at 80% 5%, ${product.categorySoft}, transparent 60%)`,
        }} />
        <div className="container-wide" style={{ position: "relative" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 24, flexWrap: "wrap" }}>
            <a href="index.html" style={{ fontSize: 13, color: "var(--ink-3)" }}>Home</a>
            <span style={{ color: "var(--ink-4)" }}>/</span>
            <a href="Other Services.html" style={{ fontSize: 13, color: "var(--ink-3)" }}>Other Services</a>
            <span style={{ color: "var(--ink-4)" }}>/</span>
            <span style={{ fontSize: 13, color: "var(--ink-2)" }}>{product.title}</span>
          </div>

          <div style={{ marginBottom: 20 }}>
            <CategoryPill product={product} />
          </div>

          <div className="grid-hero" style={{ alignItems: "center" }}>
            {/* Left: text */}
            <div>
              <h1 style={{ maxWidth: 760, marginBottom: 20 }}>
                {product.title}
                <span style={{ display: "block", fontStyle: "italic", color: product.categoryColor }}>
                  {product.subtitle}.
                </span>
              </h1>
              <p style={{
                fontSize: 19, color: "var(--ink-2)",
                maxWidth: 520, lineHeight: 1.55, marginBottom: 36,
              }}>
                {product.description}
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
                <div style={{
                  fontFamily: "var(--f-display)", fontSize: 30,
                  letterSpacing: "-0.02em", color: "var(--ink)",
                }}>
                  {product.price}
                </div>
                <a href="Book Free Water Test.html" className="btn btn-primary">
                  Enquire now <Icon name="arrow" size={14} />
                </a>
                <a href="tel:+12395550199" className="btn btn-ghost btn-sm">
                  <Icon name="phone" size={13} /> Call us
                </a>
              </div>
            </div>

            {/* Right: full hero visual */}
            <ProductHeroVisual product={product} />
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ paddingTop: 40 }}>
        <div className="container-wide">
          <div className="eyebrow" style={{ marginBottom: 16 }}>// Key features</div>
          <h2 style={{ marginBottom: 48, maxWidth: 520 }}>What sets it apart.</h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))",
            gap: 20,
          }}>
            {product.features.map((f, i) => (
              <div key={i} style={{
                background: "var(--paper)", border: "1px solid var(--rule)",
                borderRadius: 18, padding: "28px 28px",
              }}>
                <div style={{
                  width: 34, height: 34, borderRadius: 9,
                  background: product.categorySoft,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 18,
                  color: product.categoryColor,
                  fontFamily: "var(--f-mono)", fontSize: 12, fontWeight: 500,
                }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h4 style={{ marginBottom: 10, color: "var(--ink)" }}>{f.title}</h4>
                <p style={{ fontSize: 15, color: "var(--ink-2)", lineHeight: 1.6 }}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry CTA banner */}
      <section>
        <div className="container-wide">
          <div style={{
            background: "var(--bg-2)", border: "1px solid var(--rule)",
            borderRadius: 22, padding: "clamp(28px, 4vw, 44px) clamp(24px, 4vw, 44px)",
            display: "flex", gap: 32, alignItems: "center",
            flexWrap: "wrap", justifyContent: "space-between",
          }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 12 }}>// Interested?</div>
              <h3 style={{ fontFamily: "var(--f-display)", fontSize: 26, marginBottom: 8 }}>
                Get in touch with our team.
              </h3>
              <p style={{ fontSize: 15, color: "var(--ink-2)", maxWidth: 480, lineHeight: 1.55 }}>
                Call us or book an appointment and we&apos;ll share full pricing, availability,
                and everything else you need to make the right decision.
              </p>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="tel:+12395550199" className="btn btn-dark">
                <Icon name="phone" size={14} /> (239) 555-0199
              </a>
              <a href="Book Free Water Test.html" className="btn btn-ghost">
                Book an appointment
              </a>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </main>
    <Footer />
  </>
);

// ─── Individual page exports ───────────────────────────────
const OtherServicesHubPage    = OtherServicesPage;
const JuiceMasterPage         = () => <ProductPageTemplate product={otherProducts[0]} />;
const FiltrationCartridgePage = () => <ProductPageTemplate product={otherProducts[1]} />;
const GroundingMattressPage   = () => <ProductPageTemplate product={otherProducts[2]} />;
const UltraTechCookwarePage   = () => <ProductPageTemplate product={otherProducts[3]} />;
const AirPurifierPage         = () => <ProductPageTemplate product={otherProducts[4]} />;

Object.assign(window, {
  OtherServicesHubPage,
  JuiceMasterPage,
  FiltrationCartridgePage,
  GroundingMattressPage,
  UltraTechCookwarePage,
  AirPurifierPage,
});
