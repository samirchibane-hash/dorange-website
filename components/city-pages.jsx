// D'Orange Services — city-specific landing pages
// Six SW Florida service areas with unique, locally-sourced water quality content

// ─── City data ─────────────────────────────────────────────────────────────
const citiesData = [

  // ── NAPLES ──────────────────────────────────────────────────────────────
  {
    id: "naples",
    name: "Naples",
    county: "Collier County",
    href: "naples-water-treatment.html",

    heroPre: "// Naples, FL — Collier County",
    heroLine1: "Naples water is one of",
    heroLine2: "Florida's hardest.",
    heroSub: "High mineral content, aggressive chlorination, and hydrogen sulfide pockets east of I-75. D’Orange tests your specific tap, then fixes exactly what’s wrong — starting free.",

    waterProfile: [
      { label: "Hardness",     value: "18–22 gpg",    status: "Very Hard",   dots: 5 },
      { label: "Chlorine",     value: "2.5–3.5 mg/L", status: "High",        dots: 4 },
      { label: "Avg. TDS",     value: "450–600 ppm",  status: "High",        dots: 4 },
      { label: "Sulfur risk",  value: "East of I-75",      status: "Localised",   dots: 3 },
    ],
    profileNote: "Source: Collier County Water-Sewer District. Well-water properties east of I-75 may see additional hydrogen sulfide from the Floridian aquifer.",

    effects: [
      {
        title: "White scale on every surface",
        body: "Naples’ mineral-heavy water leaves calcium deposits on faucets, glass shower doors, and tile grout within weeks of cleaning. Whole-home conditioning eliminates this at the point of entry.",
      },
      {
        title: "Chlorine you can smell from the shower",
        body: "Collier County chlorinates to meet safety mandates. By the time water reaches your tap, it’s at levels you can taste and inhale in a hot shower. Carbon filtration removes it completely.",
      },
      {
        title: "Rotten-egg odor in East Naples",
        body: "Private wells east of I-75 — especially in Golden Gate Estates — commonly pull hydrogen sulfide from the aquifer. Our oxidation stage eliminates sulfur odor entirely.",
      },
    ],

    neighborhoods: [
      "Old Naples", "Park Shore", "Pelican Bay", "Vanderbilt Beach",
      "East Naples", "Golden Gate Estates", "Lely Resort", "Vineyards",
      "North Naples", "Pelican Marsh", "Mediterra", "Tiburon",
    ],
    neighborhoodNote: "We serve all of Naples and surrounding Collier County — same-week scheduling available.",

    faqs: [
      {
        q: "Is Naples, Florida water hard?",
        a: "Yes — very. Naples tap water typically measures 18–22 grains per gallon (gpg), driven by the limestone aquifer beneath Collier County. The Water Quality Association classifies anything above 10.5 gpg as very hard. Most Naples residents notice it as white deposits on dishes, cloudy shower glass, and dry skin after bathing.",
      },
      {
        q: "What contaminants are found in Naples tap water?",
        a: "Naples municipal water meets all EPA standards but contains naturally elevated calcium and magnesium (the cause of hardness), chlorine added during treatment, and in eastern areas served by private wells, occasional hydrogen sulfide. Our free in-home test measures 32 parameters specific to your tap.",
      },
      {
        q: "Do I need a water softener in Naples, FL?",
        a: "Most Naples homeowners get better results from a salt-free conditioning system than a traditional salt softener. Salt-based softeners swap calcium for sodium, which creates its own taste and plumbing issues. Our 4-stage whole-home system conditions hardness and removes chlorine without any salt or ongoing chemical costs.",
      },
      {
        q: "Why does my Naples water smell like rotten eggs?",
        a: "If your home is east of I-75 on a private well, you likely have hydrogen sulfide — a naturally occurring gas in the Floridian aquifer. It’s harmless in small quantities but very noticeable. Our system removes it through an oxidation stage specifically designed for sulfur, so the odor is gone from every tap in the house.",
      },
    ],
  },

  // ── BONITA SPRINGS ──────────────────────────────────────────────────────
  {
    id: "bonita-springs",
    name: "Bonita Springs",
    county: "Lee / Collier County",
    href: "bonita-springs-water-treatment.html",

    heroPre: "// Bonita Springs, FL — Lee & Collier County",
    heroLine1: "Bonita Springs sits on two counties,",
    heroLine2: "one hard water problem.",
    heroSub: "Whether your home is on Lee County or Collier County water, you’re dealing with hard water, elevated chlorine, and iron staining. We test first, then fix it permanently.",

    waterProfile: [
      { label: "Hardness",  value: "14–20 gpg",    status: "Very Hard", dots: 4 },
      { label: "Chlorine",  value: "2.0–3.0 mg/L", status: "High",      dots: 4 },
      { label: "Iron",      value: "Varies",             status: "Moderate",  dots: 3 },
      { label: "Avg. TDS",  value: "380–520 ppm",  status: "Elevated",  dots: 3 },
    ],
    profileNote: "Homes in north Bonita (Lee County) and south Bonita (Collier County) may receive water from different treatment facilities with slightly different chemistry.",

    effects: [
      {
        title: "Iron staining on driveways and sinks",
        body: "Some Bonita Springs properties — particularly near the county line or on well water — show orange-brown iron staining on sinks, laundry, and driveways. Our iron-filtration stage stops it before it enters your home.",
      },
      {
        title: "Scale building up inside appliances",
        body: "Hard water deposits calcium inside dishwashers and water heaters, cutting their efficiency and lifespan. A water heater can lose up to 30% efficiency from mineral scale alone.",
      },
      {
        title: "Chlorine across both utility zones",
        body: "Whether you’re on Lee or Collier County water, chlorine runs high. You taste it in drinking water and feel it drying out your skin. Carbon filtration removes it at the whole-home level.",
      },
    ],

    neighborhoods: [
      "Bonita Bay", "Pelican Landing", "Imperial", "Spanish Wells",
      "Bonita Beach", "Barefoot Beach", "Shadow Wood", "Palmira",
      "Hunters Ridge", "Worthington", "Coconut Point area", "Southwick",
    ],
    neighborhoodNote: "We cover all of Bonita Springs from Bonita Beach Road to the Estero border. Same-week appointments available.",

    faqs: [
      {
        q: "Is Bonita Springs water safe to drink?",
        a: "Yes — Bonita Springs water meets all EPA and Florida DEP safety standards. However, ‘safe’ and ‘clean-tasting’ are different things. High hardness, elevated chlorine, and occasional iron make filtered water significantly more pleasant to drink and far easier on your plumbing and appliances.",
      },
      {
        q: "Why does Bonita Springs water leave orange stains?",
        a: "Orange or rust-colored staining comes from iron — either naturally present in the water supply or entering through older pipes. It’s most common in areas near the Lee/Collier county line or on private well water. Iron filtration removes it completely before it can stain sinks, laundry, or concrete.",
      },
      {
        q: "Does Bonita Springs use chloramine or chlorine?",
        a: "Most of Bonita Springs is served by utilities using free chlorine. However, Lee County portions of Bonita may use chloramines — a chlorine-ammonia compound that requires a different filter media than standard carbon. Our in-home water test identifies exactly which disinfectant is present at your tap before we recommend a system.",
      },
      {
        q: "Is Bonita Springs water hard?",
        a: "Yes. Depending on your utility zone, Bonita Springs water tests between 14 and 20 grains per gallon — solidly in the very hard range. You’ll notice it most on glass shower doors, faucet aerators, and dishes coming out of the dishwasher spotted and dull.",
      },
    ],
  },

  // ── MARCO ISLAND ────────────────────────────────────────────────────────
  {
    id: "marco-island",
    name: "Marco Island",
    county: "Collier County",
    href: "marco-island-water-treatment.html",

    heroPre: "// Marco Island, FL — Collier County",
    heroLine1: "Marco Island water works",
    heroLine2: "against your home.",
    heroSub: "Island utilities treat aggressively for safety — which means some of the highest chlorine levels in Collier County, hard water, and accelerated corrosion on fixtures and glass. We stop it at the main line.",

    waterProfile: [
      { label: "Hardness",    value: "16–22 gpg",    status: "Very Hard", dots: 5 },
      { label: "Chlorine",    value: "3.0–4.5 mg/L", status: "Very High", dots: 5 },
      { label: "Avg. TDS",    value: "500–700 ppm",  status: "High",      dots: 4 },
      { label: "Corrosion",   value: "Elevated risk",     status: "High",      dots: 4 },
    ],
    profileNote: "Marco Island Utilities treats at the upper end of allowable chlorine levels to maintain safe water quality throughout the island’s distribution system.",

    effects: [
      {
        title: "Accelerated corrosion on luxury fixtures",
        body: "Marco Island’s combination of high chlorine, mineral hardness, and salt air creates conditions that corrode chrome, brass, and nickel fixtures faster than on the mainland. Whole-home filtration stops the damage at entry.",
      },
      {
        title: "Etched glass and spotted tile",
        body: "At 16–22 gpg, Marco Island water is aggressive enough to permanently etch glass surfaces and spot tile within months. Luxury builds are especially vulnerable — filtration protects the investment.",
      },
      {
        title: "Strong chlorine odour in showers",
        body: "Island utilities chlorinate at some of the highest levels in Collier County. A hot shower can feel like breathing pool air. Whole-home carbon filtration removes chlorine from every outlet in the house.",
      },
    ],

    neighborhoods: [
      "Old Marco", "Hideaway Beach", "Cape Marco", "South Seas",
      "Tigertail Beach area", "Landmark", "Yacht Club", "Caxambas",
      "Collier Bay", "Bridgeport", "Marco Shores", "Eagle Crest",
    ],
    neighborhoodNote: "We serve all of Marco Island — island access is no issue, our techs make the trip. Same-week scheduling available.",

    faqs: [
      {
        q: "Is Marco Island water hard?",
        a: "Yes. Marco Island water typically measures 16–22 grains per gallon, which is classified as very hard. The island’s limestone geology and aggressive treatment process both contribute. You’ll notice white deposits on shower glass, faucets, and tile throughout the home.",
      },
      {
        q: "Why does Marco Island water have so much chlorine?",
        a: "Island water distribution systems require more aggressive chlorine treatment to maintain safe levels throughout the longer pipe runs to every corner of the island. Marco Island Utilities treats at the upper end of allowable limits, which is why the chlorine taste and smell is more noticeable than on the mainland.",
      },
      {
        q: "Do I need a water filter on Marco Island?",
        a: "Given Marco Island’s combination of very hard water and high chlorine, whole-home filtration is one of the highest-impact home improvements you can make. It protects fixtures, appliances, glass, and grout from premature damage, and makes drinking water noticeably cleaner.",
      },
      {
        q: "Can hard water damage my Marco Island home’s fixtures?",
        a: "Yes. At 16–22 gpg, Marco Island water is hard enough to deposit scale inside water heaters, degrade appliance efficiency, and permanently etch unprotected glass and tile over time. Luxury fixtures with specialty finishes are especially vulnerable. A whole-home system with scale inhibition prevents all of this.",
      },
    ],
  },

  // ── ESTERO ──────────────────────────────────────────────────────────────
  {
    id: "estero",
    name: "Estero",
    county: "Lee County",
    href: "estero-water-treatment.html",

    heroPre: "// Estero, FL — Lee County",
    heroLine1: "Estero’s chloramine water",
    heroLine2: "needs more than a standard filter.",
    heroSub: "Lee County uses chloramines — a chlorine-ammonia compound that pitcher filters and most basic systems can’t remove. We use the right media for Estero’s specific water chemistry, tested free at your tap.",

    waterProfile: [
      { label: "Hardness",     value: "14–18 gpg",   status: "Hard",        dots: 4 },
      { label: "Disinfectant", value: "Chloramines",       status: "Challenging", dots: 5 },
      { label: "Avg. TDS",     value: "350–500 ppm", status: "Elevated",    dots: 3 },
      { label: "pH",           value: "7.8–8.2",     status: "Alkaline",    dots: 3 },
    ],
    profileNote: "Lee County switched from free chlorine to chloramines as its primary disinfectant. Standard pitcher or refrigerator filters are not rated for chloramine removal.",

    effects: [
      {
        title: "Chloramines your standard filter can’t touch",
        body: "Most pitcher filters and basic under-sink systems are designed for free chlorine — not chloramines. Estero homes on Lee County water need catalytic activated carbon, specifically rated for chloramine removal. Standard carbon won’t do it.",
      },
      {
        title: "Hard water on Estero’s newer builds",
        body: "Estero’s rapid growth means many homes are just a few years old — but hard water doesn’t care. Dishwashers, water heaters, and shower glass in new construction show scale within the first year.",
      },
      {
        title: "Alkaline water affecting taste",
        body: "Estero water trends alkaline (pH 7.8–8.2), contributing to a flat or slightly metallic taste. Combined with chloramines, most residents notice the water quality long before they know the cause.",
      },
    ],

    neighborhoods: [
      "Pelican Sound", "Raptor Bay", "Wildcat Run", "Estero Bay",
      "West Bay Club", "The Reserve at Estero", "Fountain Lakes", "Bella Terra",
      "Lighthouse Bay", "Rookery Pointe", "Hidden Harbor", "Coconut Point area",
    ],
    neighborhoodNote: "We cover all of Estero and surrounding Lee County communities. Same-week scheduling available.",

    faqs: [
      {
        q: "Does Estero, FL water use chloramine?",
        a: "Yes. Lee County — which supplies most of Estero — uses chloramines (a combination of chlorine and ammonia) as its primary disinfectant. This is effective for water safety but requires specific catalytic carbon filtration to remove it at the tap — something standard carbon filters can’t do.",
      },
      {
        q: "Can a regular water filter remove chloramines?",
        a: "No — not effectively. Standard pitcher filters and most basic carbon block filters are designed for free chlorine, not chloramines. Chloramine removal requires catalytic activated carbon with a longer contact time. Our whole-home system is configured specifically for Estero’s water chemistry.",
      },
      {
        q: "Is Estero, FL water hard?",
        a: "Yes, typically 14–18 grains per gallon — solidly in the hard-to-very-hard range. New construction in Estero is particularly affected, since homeowners see scale buildup on appliances and fixtures they just installed within the first year of moving in.",
      },
      {
        q: "Why does my Estero tap water taste bad?",
        a: "The combination of chloramines and alkaline pH (7.8–8.2) creates a flat, slightly chemical aftertaste that most Estero residents notice. Whole-home filtration with catalytic carbon removes both issues at the point of entry, so every tap in the house produces clean-tasting water.",
      },
    ],
  },

  // ── FORT MYERS ──────────────────────────────────────────────────────────
  {
    id: "fort-myers",
    name: "Fort Myers",
    county: "Lee County",
    href: "fort-myers-water-treatment.html",

    heroPre: "// Fort Myers, FL — Lee County",
    heroLine1: "Fort Myers water is tougher",
    heroLine2: "on your home than you think.",
    heroSub: "Chloramines, hard water, elevated TDS, and in older neighborhoods, potential pipe-interaction issues. We test 32 parameters at your specific tap before recommending anything — free.",

    waterProfile: [
      { label: "Hardness",     value: "15–20 gpg",   status: "Very Hard",   dots: 4 },
      { label: "Disinfectant", value: "Chloramines",       status: "Challenging", dots: 5 },
      { label: "Avg. TDS",     value: "400–550 ppm", status: "High",        dots: 4 },
      { label: "Pipe concern", value: "Older areas",       status: "Moderate",    dots: 3 },
    ],
    profileNote: "Lee County Utilities has used chloramines as its primary disinfectant since the early 2000s. Homes with ageing galvanised pipes may see additional iron and sediment.",

    effects: [
      {
        title: "Chloramines interacting with older pipes",
        body: "Many Fort Myers homes were built in the 1970s–1990s. Chloramines interact differently with galvanised and copper pipes than free chlorine does, potentially increasing lead and copper leaching at the tap. Our system filters it all out.",
      },
      {
        title: "High TDS cutting appliance lifespan",
        body: "At 400–550 ppm total dissolved solids, Fort Myers water deposits minerals in water heaters, dishwashers, and coffee makers every single day. The efficiency loss accumulates fast — filtration stops it.",
      },
      {
        title: "Hard water across the whole home",
        body: "At 15–20 gpg, Fort Myers water leaves white spotting on dishes, film on glass doors, and a dry-skin feeling after showering. These are daily-life symptoms of a water chemistry problem, not a cleaning problem.",
      },
    ],

    neighborhoods: [
      "Downtown Fort Myers", "McGregor Corridor", "Iona",
      "Gateway", "Daniels Corridor", "Whiskey Creek",
      "Villas", "College Parkway", "Page Field",
      "Tice", "Buckingham", "Three Oaks",
    ],
    neighborhoodNote: "We service all of Fort Myers and Lee County. Same-week scheduling available throughout the area.",

    faqs: [
      {
        q: "Is Fort Myers water hard?",
        a: "Yes. Fort Myers tap water typically reads 15–20 grains per gallon — squarely in the very hard category. You’ll see the evidence on shower glass, faucet aerators, and inside appliances within months. The hardness comes from the same limestone aquifer that supplies all of Lee County.",
      },
      {
        q: "Does Fort Myers use chloramine in its water?",
        a: "Yes. Lee County Utilities switched to chloramines as its primary disinfectant in the early 2000s. Chloramines are harder to remove than free chlorine and require catalytic activated carbon filtration — a standard carbon block filter is not fully effective against chloramines.",
      },
      {
        q: "What’s in Fort Myers tap water?",
        a: "Fort Myers tap water is safe by EPA standards and contains elevated calcium and magnesium (causing hardness), chloramines for disinfection, and high total dissolved solids (400–550 ppm). Homes with older galvanised pipes may also see trace iron and sediment at the tap.",
      },
      {
        q: "Is it worth getting a water filtration system in Fort Myers?",
        a: "For most Fort Myers homes, yes. The combination of hard water and chloramines causes measurable damage to appliances, plumbing, and fixtures over time. Homeowners with our system also report dramatically better-tasting drinking water and noticeably less scale throughout the home — typically within the first few weeks.",
      },
    ],
  },

  // ── CAPE CORAL ──────────────────────────────────────────────────────────
  {
    id: "cape-coral",
    name: "Cape Coral",
    county: "Lee County",
    href: "cape-coral-water-treatment.html",

    heroPre: "// Cape Coral, FL — Lee County",
    heroLine1: "Cape Coral has some of",
    heroLine2: "the hardest water in Florida.",
    heroSub: "A unique dual-water system, extreme chloramine levels, and brackish groundwater make Cape Coral one of the most challenging residential water profiles in the state. We’ve solved it hundreds of times.",

    waterProfile: [
      { label: "Hardness",    value: "20–28 gpg",   status: "Extreme",    dots: 5 },
      { label: "Chloramines", value: "Very High",         status: "Aggressive", dots: 5 },
      { label: "Avg. TDS",    value: "500–800 ppm", status: "Very High",  dots: 5 },
      { label: "Brackish",    value: "Certain zones",     status: "Localised",  dots: 3 },
    ],
    profileNote: "Cape Coral operates a unique dual-water system. Potable water hardness regularly exceeds 20 gpg — among the highest of any city in Florida.",

    effects: [
      {
        title: "The most visible hard water in SW Florida",
        body: "At 20–28 gpg, Cape Coral water is extreme. White calcium crust forms on faucets, showerheads, and inside appliances quickly. Most Cape Coral residents replace showerhead aerators regularly — a whole-home system eliminates the need entirely.",
      },
      {
        title: "Chloramines at some of the highest levels in the region",
        body: "Cape Coral Utilities treats with chloramines at concentrations among the highest in Southwest Florida. You’ll smell it at the tap, taste it in ice, and feel it drying your skin and hair. Standard filters don’t remove chloramines — ours do.",
      },
      {
        title: "Blue-green staining from corrosive water chemistry",
        body: "Cape Coral’s water chemistry is aggressive enough to leach copper from pipes, leaving blue-green stains in sinks and bathtubs. This is a documented issue across the city and a sign that your water is actively attacking your plumbing from the inside.",
      },
    ],

    neighborhoods: [
      "SW Cape Coral", "NW Cape Coral", "SE Cape Coral", "NE Cape Coral",
      "Cape Coral Beach", "Surfside", "Burnt Store", "Del Prado area",
      "Four Mile Cove", "Matlacha", "Pelican", "Cape Harbour",
    ],
    neighborhoodNote: "We cover all of Cape Coral — all quadrants, all utility zones. Same-week availability.",

    faqs: [
      {
        q: "Why is Cape Coral water so bad?",
        a: "Cape Coral has a convergence of challenging factors: extreme hardness (20–28 gpg), very high chloramine levels, elevated TDS from the brackish limestone aquifer, and a unique dual-water distribution system. The long pipe runs require aggressive treatment, which results in one of the most chemically complex residential water profiles in Florida.",
      },
      {
        q: "Does Cape Coral have hard water?",
        a: "Yes — Cape Coral regularly tests at 20–28 grains per gallon, which is classified as extreme hardness. This is among the highest of any city in Southwest Florida. The calcium and magnesium originate from the deep limestone aquifer beneath Lee County and accumulate rapidly in pipes, appliances, and on surfaces.",
      },
      {
        q: "What is Cape Coral’s dual water system?",
        a: "Cape Coral operates two separate water distribution systems: a potable system for drinking and household use, and an irrigation system for lawns and landscaping. The irrigation water is not treated for drinking. Both originate from the same hard-water aquifer, so the hardness and TDS profile is similar across both systems.",
      },
      {
        q: "Why does Cape Coral water leave blue-green stains?",
        a: "Blue-green staining in Cape Coral sinks and tubs is caused by copper leaching from pipes. This happens when water chemistry is corrosive — which Cape Coral’s is, due to its high TDS, chloramines, and slightly corrosive pH. It’s a sign your water is attacking your plumbing. A whole-home filtration system stabilises the water chemistry and stops the staining at the source.",
      },
    ],
  },

]; // end citiesData

// ─── Dot scale indicator ────────────────────────────────────────────────────
const DotScale = ({ dots }) => (
  <div style={{ display: "flex", gap: 4, marginTop: 8 }}>
    {[1, 2, 3, 4, 5].map(i => (
      <span key={i} style={{
        width: 7, height: 7, borderRadius: "50%",
        background: i <= dots ? "var(--orange)" : "var(--bg-3)",
      }} />
    ))}
  </div>
);

// ─── City FAQ accordion ─────────────────────────────────────────────────────
const CityFAQ = ({ faqs, cityName }) => {
  const [open, setOpen] = React.useState(null);
  return (
    <section style={{ background: "var(--paper)" }}>
      <div className="container-wide">
        <div className="eyebrow" style={{ marginBottom: 16 }}>// Common questions</div>
        <h2 style={{ marginBottom: 48, maxWidth: 520 }}>
          {cityName} water,{" "}
          <span style={{ fontStyle: "italic", color: "var(--orange)" }}>answered.</span>
        </h2>
        <div style={{ maxWidth: 800 }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: "1px solid var(--rule)" }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%", textAlign: "left",
                  padding: "22px 0",
                  display: "flex", alignItems: "flex-start",
                  justifyContent: "space-between", gap: 24,
                  fontFamily: "var(--f-display)", fontSize: 20,
                  color: "var(--ink)", lineHeight: 1.25,
                }}
              >
                <span>{faq.q}</span>
                <svg
                  width="18" height="18" viewBox="0 0 18 18"
                  fill="none" stroke="currentColor" strokeWidth="1.5"
                  style={{
                    transform: open === i ? "rotate(180deg)" : "none",
                    transition: "transform .2s ease", flexShrink: 0, marginTop: 3,
                  }}
                >
                  <path d="m4 7 5 5 5-5"/>
                </svg>
              </button>
              {open === i && (
                <div style={{
                  paddingBottom: 24,
                  fontSize: 16, color: "var(--ink-2)", lineHeight: 1.7, maxWidth: 680,
                }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── City landing page template ─────────────────────────────────────────────
const CityLandingPage = ({ city }) => (
  <>
    <Nav />
    <main>

      {/* ── 1. HERO ── */}
      <section className="hero-section" style={{ paddingBottom: 48 }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none", opacity: .55,
          background: [
            "radial-gradient(ellipse 1000px 640px at 75% 0%, var(--sea-soft), transparent 55%)",
            "radial-gradient(ellipse 600px 440px at 5% 70%, var(--orange-soft), transparent 65%)",
          ].join(", "),
        }} />
        <div className="container-wide" style={{ position: "relative" }}>

          {/* Breadcrumb */}
          <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 24, flexWrap: "wrap" }}>
            <a href="index.html" style={{ fontSize: 13, color: "var(--ink-3)" }}>Home</a>
            <span style={{ color: "var(--ink-4)" }}>/</span>
            <span style={{ fontSize: 13, color: "var(--ink-3)" }}>Service Areas</span>
            <span style={{ color: "var(--ink-4)" }}>/</span>
            <span style={{ fontSize: 13, color: "var(--ink-2)" }}>{city.name}</span>
          </div>

          <div className="eyebrow" style={{ marginBottom: 20 }}>{city.heroPre}</div>
          <h1 style={{ maxWidth: 860, marginBottom: 24 }}>
            {city.heroLine1}<br />
            <span style={{ fontStyle: "italic", color: "var(--orange)" }}>{city.heroLine2}</span>
          </h1>
          <p style={{ fontSize: 19, color: "var(--ink-2)", maxWidth: 600, lineHeight: 1.55, marginBottom: 36 }}>
            {city.heroSub}
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <a href="Book Free Water Test.html" className="btn btn-primary">
              Book your free water test <Icon name="arrow" size={14} />
            </a>
            <a href="tel:+12395550199" className="btn btn-ghost btn-sm">
              <Icon name="phone" size={13} /> (239) 555-0199
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. WATER PROFILE ── */}
      <section style={{ background: "var(--bg-2)" }}>
        <div className="container-wide">
          <div className="eyebrow" style={{ marginBottom: 16 }}>// Your water profile</div>
          <h2 style={{ marginBottom: 12, maxWidth: 600 }}>
            What&apos;s actually in {city.name}&apos;s water.
          </h2>
          <p style={{ fontSize: 15, color: "var(--ink-3)", marginBottom: 48, maxWidth: 560 }}>
            {city.profileNote}
          </p>
          <div className="grid-4col">
            {city.waterProfile.map((stat, i) => (
              <div key={i} style={{
                background: "var(--paper)", border: "1px solid var(--rule)",
                borderRadius: 18, padding: "28px 22px",
              }}>
                <div className="eyebrow" style={{ marginBottom: 14 }}>{stat.label}</div>
                <div style={{
                  fontFamily: "var(--f-display)", fontSize: 22,
                  letterSpacing: "-0.02em", lineHeight: 1.2,
                }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: 13, color: "var(--ink-3)", marginTop: 4 }}>
                  {stat.status}
                </div>
                <DotScale dots={stat.dots} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. EFFECTS ON HOME ── */}
      <section>
        <div className="container-wide">
          <div className="eyebrow" style={{ marginBottom: 16 }}>// The real cost</div>
          <h2 style={{ marginBottom: 48, maxWidth: 520 }}>
            Hard water takes a toll.
          </h2>
          <div className="grid-3col">
            {city.effects.map((effect, i) => (
              <div key={i} style={{
                background: "var(--paper)", border: "1px solid var(--rule)",
                borderRadius: 18, padding: "28px",
              }}>
                <div style={{
                  width: 34, height: 34, borderRadius: 9,
                  background: "var(--orange-soft)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 18,
                  fontFamily: "var(--f-mono)", fontSize: 12, fontWeight: 500,
                  color: "var(--orange-2)",
                }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h4 style={{ marginBottom: 10 }}>{effect.title}</h4>
                <p style={{ fontSize: 15, color: "var(--ink-2)", lineHeight: 1.65 }}>
                  {effect.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. THE FIX ── */}
      <section style={{ background: "var(--bg-2)" }}>
        <div className="container-wide">
          <div style={{
            display: "flex", gap: 64, alignItems: "center",
            flexWrap: "wrap", justifyContent: "space-between",
          }}>
            <div style={{ flex: "1 1 400px" }}>
              <div className="eyebrow" style={{ marginBottom: 16 }}>// The fix</div>
              <h2 style={{ marginBottom: 20, maxWidth: 520 }}>
                One system.<br />
                <span style={{ fontStyle: "italic", color: "var(--orange)" }}>
                  Every problem solved.
                </span>
              </h2>
              <p style={{ fontSize: 17, color: "var(--ink-2)", lineHeight: 1.65, maxWidth: 520 }}>
                Our 4-stage whole-home filtration system is configured to your specific water profile
                — not a one-size-fits-all product. It handles hardness, chlorine or chloramines, TDS,
                and odor simultaneously, from the moment water enters your home.
              </p>
              <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
                <a href="Book Free Water Test.html" className="btn btn-primary">
                  Book a free water test <Icon name="arrow" size={14} />
                </a>
                <a href="Whole Home System.html" className="btn btn-ghost btn-sm" style={{ alignSelf: "center" }}>
                  See the system
                </a>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12, flex: "0 0 auto" }}>
              {[
                { n: "4",       l: "filtration stages" },
                { n: "Free",    l: "in-home water test" },
                { n: "Life",    l: "time warranty" },
                { n: "Same-wk", l: "scheduling" },
              ].map(s => (
                <div key={s.l} style={{
                  background: "var(--paper)", border: "1px solid var(--rule)",
                  borderRadius: 14, padding: "16px 22px",
                  display: "flex", alignItems: "center", gap: 16, minWidth: 210,
                }}>
                  <div style={{
                    fontFamily: "var(--f-display)", fontSize: 26,
                    letterSpacing: "-0.02em", flexShrink: 0,
                  }}>{s.n}</div>
                  <div style={{ fontSize: 13, color: "var(--ink-3)" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. NEIGHBORHOODS ── */}
      <section>
        <div className="container-wide">
          <div className="eyebrow" style={{ marginBottom: 16 }}>// Where we work</div>
          <h2 style={{ marginBottom: 12, maxWidth: 540 }}>
            Serving {city.name} and surrounding areas.
          </h2>
          <p style={{ fontSize: 15, color: "var(--ink-3)", marginBottom: 36 }}>
            {city.neighborhoodNote}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {city.neighborhoods.map(n => (
              <span key={n} style={{
                padding: "8px 18px",
                background: "var(--paper)", border: "1px solid var(--rule)",
                borderRadius: 999, fontSize: 14, color: "var(--ink-2)",
              }}>
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. FAQ ── */}
      <CityFAQ faqs={city.faqs} cityName={city.name} />

      {/* ── 7. CONTACT ── */}
      <Contact />

    </main>
    <Footer />
  </>
);

// ─── Individual page exports ─────────────────────────────────────────────────
const NaplesPage      = () => <CityLandingPage city={citiesData[0]} />;
const BonitaPage      = () => <CityLandingPage city={citiesData[1]} />;
const MarcoPage       = () => <CityLandingPage city={citiesData[2]} />;
const EsteroPage      = () => <CityLandingPage city={citiesData[3]} />;
const FortMyersPage   = () => <CityLandingPage city={citiesData[4]} />;
const CapeCoralPage   = () => <CityLandingPage city={citiesData[5]} />;

Object.assign(window, {
  NaplesPage, BonitaPage, MarcoPage, EsteroPage, FortMyersPage, CapeCoralPage,
});
