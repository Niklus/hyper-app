// Measuring the Critical Rendering Path with Navigation Timing
// https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp

export default () => {
  const t = window.performance.timing;
  const dcl = t.domContentLoadedEventStart - t.domLoading;
  const complete = t.domComplete - t.domLoading;
  const stats = document.getElementById("crp-stats");
  stats.textContent = 'DCL: ' + dcl + 'ms, onload: ' + complete + 'ms';
}


