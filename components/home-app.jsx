// Home page root
const HomeApp = () => (
  <>
    <Nav />
    <main>
      <HomeHero />
      <HomeCategories />
      <BestSellers />
      <FreeTestBanner />
      <Testimonials />
    </main>
    <Footer />
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(<HomeApp />);
