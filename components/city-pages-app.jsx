// City landing pages — URL-based router
// Shared by all six city HTML files

(function () {
  const path = decodeURIComponent(window.location.pathname).toLowerCase();
  let Page;

  if      (path.includes("naples"))       Page = NaplesPage;
  else if (path.includes("bonita"))       Page = BonitaPage;
  else if (path.includes("marco"))        Page = MarcoPage;
  else if (path.includes("estero"))       Page = EsteroPage;
  else if (path.includes("fort-myers"))   Page = FortMyersPage;
  else if (path.includes("cape-coral"))   Page = CapeCoralPage;
  else                                    Page = NaplesPage; // safe fallback

  ReactDOM.createRoot(document.getElementById("root")).render(<Page />);
})();
