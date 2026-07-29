// Home page root
const HomeApp = () => (
  <>
    <Nav />
    <main>
      <HomeHero />
      <HomeSystems />
      <HomeBenefits />
      <FeaturedReel />
      <HomeService />
      <HomeServiceAreas />
      <FreeTestBanner />
      <Testimonials />
    </main>
    <Footer />
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(<HomeApp />);
