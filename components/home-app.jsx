// Home page root
const HomeApp = () => (
  <>
    <Nav />
    <main>
      <Hero />
      <hr className="rule" />
      <ValueProps />
      <Process />
      <LifeWithIt />
      <ServiceMap />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
    <Footer />
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(<HomeApp />);
