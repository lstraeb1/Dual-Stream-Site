// add classes for mobile navigation toggling
var CSbody = document.querySelector('body');
const CSnavbarMenu = document.querySelector('#cs-navigation');
const CShamburgerMenu = document.querySelector('#cs-navigation .cs-toggle');

CShamburgerMenu.addEventListener('click', function () {
	CShamburgerMenu.classList.toggle('cs-active');
	CSnavbarMenu.classList.toggle('cs-active');
	CSbody.classList.toggle('cs-open');
	// run the function to check the aria-expanded value
	ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not
function ariaExpanded() {
	const csUL = document.querySelector('#cs-expanded');
	const csExpanded = csUL.getAttribute('aria-expanded');

	if (csExpanded === 'false') {
		csUL.setAttribute('aria-expanded', 'true');
	} else {
		csUL.setAttribute('aria-expanded', 'false');
	}
}

// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
for (const item of dropDowns) {
	const onClick = () => {
		item.classList.toggle('cs-active');
	};
	item.addEventListener('click', onClick);
}

// disable scrolling when nav is open
const body = document.body;
const html = document.documentElement;
const toggleBtn = document.querySelector('.cs-toggle');
const nav = document.querySelector('.cs-nav');
const listWrapper = document.querySelector('.cs-ul-wrapper');

toggleBtn.addEventListener('click', () => {
	if (body.classList.contains('cs-open')) {
			html.style.overflowY = 'hidden';
			nav.style.maxHeight = '100vh';
	} else {
			html.style.overflowY = 'auto';
			nav.style.maxHeight = null;
	}
});

const navSection = document.getElementById('cs-navigation');
const navLinks = document.querySelectorAll('.cs-li-link');
const section1 = document.getElementById('hero-227');
const isDesktopOrLaptop = window.matchMedia("(min-width: 1024px)").matches;

if (isDesktopOrLaptop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      // User has scrolled down, make the white background visible and change link colors
      navSection.classList.add('scrolled');
      navLinks.forEach(link => {
        link.style.color = "black";
      });
    } else {
      // User is at the top of the page, hide the white background and reset link colors
      navSection.classList.remove('scrolled');
      navLinks.forEach(link => {
        link.style.color = ""; // Reset to default color or initial
      });
    }
  });
}
