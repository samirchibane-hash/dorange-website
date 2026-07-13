// Whole-Home System page root
const WholeHomeApp = () => (
  <>
    <Nav />
    <main>
      <WHSHero />
      <WHSStages />
      <WHSEngineered />
      <WHSBenefits />
      <WHSFaq />
      <WHSCta />
    </main>
    <Footer />
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(<WholeHomeApp />);
