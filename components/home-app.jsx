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
      <CustomerReel />
      <Testimonials />
    </main>
    <Footer />
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(<HomeApp />);
