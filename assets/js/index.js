/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/js/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
var typed = new Typed("#text-slider", {
    strings: ["","Backend", "Frontend", "Fullstack"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})

