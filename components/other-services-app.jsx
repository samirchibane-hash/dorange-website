// Other Services — URL-based page router
// Shared by all five Other Services HTML files

(function () {
  const path = decodeURIComponent(window.location.pathname);
  let Page;

  if      (path.includes("JuiceMaster"))          Page = JuiceMasterPage;
  else if (path.includes("Filtration"))            Page = FiltrationCartridgePage;
  else if (path.includes("Grounding"))             Page = GroundingMattressPage;
  else if (path.includes("Ultra Tech Cookware"))   Page = UltraTechCookwarePage;
  else if (path.includes("Air Purifier"))          Page = AirPurifierPage;
  else                                             Page = OtherServicesHubPage;

  ReactDOM.createRoot(document.getElementById("root")).render(<Page />);
})();
