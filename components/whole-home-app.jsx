// Whole-Home System page root
const WholeHomeApp = () => (
  <>
    <Nav />
    <main>
      <WHSHero />
      <WHSStages />
      <WHSSizes />
      <WHSEngineered />
      <WHSBenefits />
      <WHSCompare />
      <WHSSpecs />
      <WHSFaq />
      <WHSCta />
    </main>
    <Footer />
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(<WholeHomeApp />);
