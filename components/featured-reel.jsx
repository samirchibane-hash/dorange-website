// Home page — featured install reel (D'Orange Services' own post).
// The reusable InstagramEmbed lives in shared.jsx.

const IG_REEL_URL = "https://www.instagram.com/reel/DG8sD9YqmZS/";

const FeaturedReel = () => (
  <section id="featured">
    <div className="container-wide">
      <div className="grid-hero reel-row">
        <div>
          <div className="eyebrow" style={{ marginBottom: 16 }}>// Featured install</div>
          <h2 style={{ marginBottom: 20 }}>
            A D&apos;Orange system in<br/>
            <span style={{ fontStyle: "italic", color: "var(--orange)" }}>a Coral Gables penthouse.</span>
          </h2>
          <p style={{ color: "var(--ink-2)", fontSize: 17, maxWidth: 460, marginBottom: 24, lineHeight: 1.6 }}>
            Human biologist Gary Brecka walks through the whole-home water system our team
            installed at his Coral Gables penthouse — see it in his own words.
          </p>
          <p style={{ color: "var(--ink-2)", fontSize: 17, maxWidth: 460, marginBottom: 32, lineHeight: 1.6 }}>
            It&apos;s the same system, the same install, and the same local team you get when you
            book a free water test with us.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="Book Free Water Test.html" className="btn btn-primary" style={{ padding: "14px 22px" }}>
              Book free water test <Icon name="arrow" size={14} />
            </a>
            <a href={IG_REEL_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ padding: "14px 22px" }}>
              Watch on Instagram <Icon name="arrow-ne" size={12} />
            </a>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <InstagramEmbed url={IG_REEL_URL} />
        </div>
      </div>
    </div>
  </section>
);

// Customer testimonial reel — mirrored layout (embed left) so it reads
// differently from the featured install section higher up the page.
const CUSTOMER_REEL_URL = "https://www.instagram.com/reel/DH8wXfos0i1/";

const CustomerReel = () => (
  <section id="customer-story" style={{ background: "var(--bg-2)" }}>
    <div className="container-wide">
      <div className="grid-hero reel-row">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <InstagramEmbed url={CUSTOMER_REEL_URL} />
        </div>

        <div>
          <div className="eyebrow" style={{ marginBottom: 16 }}>// Customer story</div>
          <h2 style={{ marginBottom: 20 }}>
            In their own words,<br/>
            <span style={{ fontStyle: "italic", color: "var(--orange)" }}>after the install.</span>
          </h2>
          <p style={{ color: "var(--ink-2)", fontSize: 17, maxWidth: 460, marginBottom: 24, lineHeight: 1.6 }}>
            A Southwest Florida homeowner on what living with their D&apos;Orange system is
            actually like — unscripted.
          </p>
          <p style={{ color: "var(--ink-2)", fontSize: 17, maxWidth: 460, marginBottom: 32, lineHeight: 1.6 }}>
            Their install started the same way yours would: a free in-home water test, and a
            straight answer about what their home needed.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="Book Free Water Test.html" className="btn btn-primary" style={{ padding: "14px 22px" }}>
              Book free water test <Icon name="arrow" size={14} />
            </a>
            <a href={CUSTOMER_REEL_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ padding: "14px 22px" }}>
              Watch on Instagram <Icon name="arrow-ne" size={12} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { FeaturedReel, CustomerReel });
