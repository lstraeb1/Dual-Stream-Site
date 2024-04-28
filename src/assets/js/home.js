const navSection = document.getElementById('cs-navigation');
const section1 = document.getElementById('hero');
const isDesktopOrLaptop = window.matchMedia("(min-width: 1024px)").matches;

if (isDesktopOrLaptop) {
  const navObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio >= 0.4) {
        // If section-2 is 50% in view, fade out the navigation section
        navSection.style.opacity = "1";
        navSection.style.transition = "opacity 0.3s";
      } else {
        // Otherwise, fade in the navigation section
        navSection.style.opacity = "0";
        navSection.style.transition = "opacity 0.3s";
      }
    });
  }, {
    threshold: 0.4 // Trigger when 50% of section-2 is in view
  });
  navObserver.observe(section1);
};