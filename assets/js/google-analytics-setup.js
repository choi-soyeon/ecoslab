window.dataLayer = window.dataLayer || [];
function gtag() {
  window.dataLayer.push(arguments);
}
gtag("js", new Date());
const analyticsPageTitle = document.querySelector('meta[name="analytics-page-title"]')?.content;
gtag("config", "G-EMF0DSXFLK", {
  page_title: analyticsPageTitle || document.title,
});
