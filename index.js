module.exports = function(AnalyticsID) {
  window.GoogleAnalyticsObject = 'ga';
  window.ga = window.ga || function() {
    (window.ga.q = window.ga.q || []).push(arguments);
  };
  window.ga.l = new Date();

  if (!AnalyticsID) return;

  var s = document.createElement('script');
  s.async = true;
  s.src = '//www.google-analytics.com/analytics.js';

  var m = document.getElementsByTagName('script')[0];
  m.parentNode.insertBefore(s, m);

  ga('create', AnalyticsID);
};
