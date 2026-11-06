// The only place to change after publication: paste the plugin's Figma Community address here.
// While it is empty, every page says the plugin is not published yet and shows no install link.
var COMMUNITY_URL = "";

if (COMMUNITY_URL) {
  document.querySelectorAll("[data-community-link]").forEach(function (el) {
    if (el.tagName === "A") el.href = COMMUNITY_URL;
    el.hidden = false;
  });
  document.querySelectorAll("[data-community-pending]").forEach(function (el) {
    el.hidden = true;
  });
}
