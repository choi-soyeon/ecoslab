---
permalink: /assets/js/google-analytics-setup.js
---
window.dataLayer = window.dataLayer || [];
function gtag() {
  window.dataLayer.push(arguments);
}
gtag("js", new Date());
const analyticsPageTitle = document.querySelector('meta[name="analytics-page-title"]')?.content;
gtag("config", "{{ site.google_analytics }}", {
  page_title: analyticsPageTitle || document.title,
});
