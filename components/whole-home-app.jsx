// Whole-Home System page root
const WholeHomeApp = () => (
  <>
    <Nav />
    <main>
      <WHSHero />
      <WHSOptions />
      <WHSBenefits />
      <WHSProcess />
      <WHSFaq />
      <WHSCta />
    </main>
    <Footer />
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(<WholeHomeApp />);
