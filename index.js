window.GoogleAnalyticsObject = 'ga';
window.ga = window.ga || function() {
  (ga.q = ga.q || []).push(arguments);
};
ga.l = new Date();

var query = require('query');

var el = query('meta[name="google-analytics"]');
if (el) {
  create(el.getAttribute('content'));
}

function create(id) {
  if (!id) return;

  var s = document.createElement('script');
  s.async = true;
  s.src = '//www.google-analytics.com/analytics.js';

  var m = document.getElementsByTagName('script')[0];
  m.parentNode.insertBefore(s, m);

  ga('create', id);
}

module.exports = ga;
