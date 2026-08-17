// Scroll-reveal
if ('IntersectionObserver' in window) {
  var revealEls = document.querySelectorAll('.reveal');
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(function(el){ io.observe(el); });
} else {
  document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('is-visible'); });
}
