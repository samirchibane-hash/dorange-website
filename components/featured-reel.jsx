// Home page reels. Two sections, mirrored so they don't read as a stack:
// the featured install (embed right) and the Brecka walkthrough (embed left).
// The reusable InstagramEmbed lives in shared.jsx.

// ─── Featured install — Ryan Chiodo (Chiodo Group) ─────────
const IG_REEL_URL = "https://www.instagram.com/reel/DbBpvN5tWZf/";

const FeaturedReel = () => (
  <section id="featured">
    <div className="container-wide">
      <div className="grid-hero reel-row">
        <div>
          <div className="eyebrow" style={{ marginBottom: 16 }}>// Featured install</div>
          <h2 style={{ marginBottom: 20 }}>
            Ryan Chiodo&apos;s install,<br/>
            <span style={{ fontStyle: "italic", color: "var(--orange)" }}>in his own words.</span>
          </h2>
          <p style={{ color: "var(--ink-2)", fontSize: 17, maxWidth: 460, marginBottom: 24, lineHeight: 1.6 }}>
            Ryan Chiodo of the Chiodo Group walks through the D&apos;Orange system our team put
            in — what he noticed first, and what he&apos;d tell a neighbour thinking about it.
          </p>
          <p style={{ color: "var(--ink-2)", fontSize: 17, maxWidth: 460, marginBottom: 32, lineHeight: 1.6 }}>
            It&apos;s the same system, the same install, and the same local team you get when you
            book a free water test with us.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="/Book%20Free%20Water%20Test" className="btn btn-primary" style={{ padding: "14px 22px" }}>
              Book free water test <Icon name="arrow" size={14} />
            </a>
            <a href={IG_REEL_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ padding: "14px 22px" }}>
              Watch on Instagram <Icon name="arrow-ne" size={12} />
            </a>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <InstagramEmbed url={IG_REEL_URL} caption="Ryan Chiodo · Chiodo Group" />
        </div>
      </div>
    </div>
  </section>
);

// ─── Gary Brecka walkthrough ───────────────────────────────
// Mirrored layout (embed left) so it reads differently from the featured
// install higher up the page.
const BRECKA_REEL_URL = "https://www.instagram.com/reel/DG8sD9YqmZS/";

const BreckaReel = () => (
  <section id="customer-story" style={{ background: "var(--bg-2)" }}>
    <div className="container-wide">
      <div className="grid-hero reel-row">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <InstagramEmbed url={BRECKA_REEL_URL} />
        </div>

        <div>
          <div className="eyebrow" style={{ marginBottom: 16 }}>// Customer story</div>
          <h2 style={{ marginBottom: 20 }}>
            Gary Brecka on the system<br/>
            <span style={{ fontStyle: "italic", color: "var(--orange)" }}>we installed for him.</span>
          </h2>
          <p style={{ color: "var(--ink-2)", fontSize: 17, maxWidth: 460, marginBottom: 24, lineHeight: 1.6 }}>
            Human biologist Gary Brecka walks through the whole-home water system our team
            designed and installed for him — unscripted, in his own words.
          </p>
          <p style={{ color: "var(--ink-2)", fontSize: 17, maxWidth: 460, marginBottom: 32, lineHeight: 1.6 }}>
            His install started the same way yours would: a free in-home water test, and a
            straight answer about what the house actually needed.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="/Book%20Free%20Water%20Test" className="btn btn-primary" style={{ padding: "14px 22px" }}>
              Book free water test <Icon name="arrow" size={14} />
            </a>
            <a href={BRECKA_REEL_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ padding: "14px 22px" }}>
              Watch on Instagram <Icon name="arrow-ne" size={12} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { FeaturedReel, BreckaReel });
