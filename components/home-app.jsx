// Home page root
const HomeApp = () => (
  <>
    <Nav />
    <main>
      <HomeHero />
      <FeaturedReel />
      <HomeSystems />
      <HomeBenefits />
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
