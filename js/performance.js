var start = new Date().getTime();
window.onload = function() {
  setTimeout(function() {
    window.performance = window.performance || window.mozPerformance
    || window.msPerformance || window.webkitPerformance || {};
    var timing = performance.timing || {};
    //Get load time of page -- measures response end to onload end
    document.getElementById("loadtime").innerHTML = "page loaded in: "
    + (start - timing.responseEnd) + "ms";
  }, 0);
};
