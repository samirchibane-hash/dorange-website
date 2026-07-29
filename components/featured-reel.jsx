// Featured install — Instagram reel embed (D'Orange Services' own post).
// The blockquote below is Instagram's official embed markup, translated to JSX.
// instagram.com/embed.js replaces it with an iframe once loaded; if the script
// is blocked, the fallback card inside it stays visible and links to the post.

const IG_REEL_URL = "https://www.instagram.com/reel/DG8sD9YqmZS/";

const InstagramEmbed = ({ url, caption }) => {
  React.useEffect(() => {
    const process = () => { if (window.instgrm) window.instgrm.Embeds.process(); };
    const existing = document.querySelector('script[src*="instagram.com/embed.js"]');
    if (existing) { process(); return; }
    const s = document.createElement("script");
    s.async = true;
    s.src = "https://www.instagram.com/embed.js";
    s.onload = process;
    document.body.appendChild(s);
  }, [url]);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={`${url}?utm_source=ig_embed&utm_campaign=loading`}
      data-instgrm-version="14"
      style={{
        background: "#FFF", border: 0, borderRadius: 16,
        boxShadow: "var(--shadow-md)",
        margin: 0, maxWidth: 540, minWidth: 300, width: "100%", padding: 0,
      }}>
      <a href={url} target="_blank" rel="noopener noreferrer" style={{
        display: "block", padding: 28, textDecoration: "none", color: "var(--ink)",
      }}>
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          minHeight: 200, marginBottom: 20, borderRadius: 12,
          background: "var(--bg-2)", color: "var(--ink-3)",
        }}>
          <Icon name="play" size={34} />
        </div>
        <div style={{ fontFamily: "var(--f-display)", fontSize: 17, marginBottom: 6 }}>
          View this post on Instagram
        </div>
        <div style={{ fontSize: 13, color: "var(--ink-3)" }}>{caption}</div>
      </a>
    </blockquote>
  );
};

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
          <InstagramEmbed url={IG_REEL_URL} caption="A post shared by D´Orange Services (@dorangeservices)" />
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { FeaturedReel, InstagramEmbed });
