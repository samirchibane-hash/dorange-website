// Home page — featured install reel (D'Orange Services' own post).
// The reusable InstagramEmbed lives in shared.jsx.

const IG_REEL_URL = "https://www.instagram.com/reel/DG8sD9YqmZS/";

const FeaturedReel = () => (
  <section id="featured">
    <div className="container-wide">
      <div className="grid-hero" style={{ gap: 64 }}>
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

Object.assign(window, { FeaturedReel });
