// Whole-Home System page root
const WholeHomeApp = () => (
  <>
    <Nav onDark />
    <main>
      <WHSHero />
      <WHSOptions />
      <WHSBenefits />
      <WHSTestimonialReel />
      <WHSProcess />
      <WHSFaq />
      <WHSCta />
    </main>
    <Footer />
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(<WholeHomeApp />);
