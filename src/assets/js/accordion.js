const accordionsBtn = document.querySelectorAll('.accordion__control');

function acordion() {
	const accordion = this.closest('.accordion__item');
	const accordionBtn = accordion.querySelector('.accordion__control');
	const accordionContent = accordion.querySelector('.accordion__content');

	if (accordion.classList.contains('open')) {
		accordion.classList.remove('open');
		accordionBtn.setAttribute('aria-expanded', false);
		accordionContent.setAttribute('aria-hidden', true);
		accordionContent.style.maxHeight = null;
	} else {
		document.querySelectorAll('.accordion__content').forEach(child => {
			child.setAttribute('aria-hidden', true);
			child.style.maxHeight = null;
		});

		document.querySelectorAll('.accordion__control').forEach(child => {
			child.setAttribute('aria-expanded', false);
		});

		document.querySelectorAll('.accordion__item').forEach(child => {
			child.classList.remove('open');
		});

		accordion.classList.add('open');
		accordionBtn.setAttribute('aria-expanded', true);
		accordionContent.setAttribute('aria-hidden', false);
		accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
	}
}

accordionsBtn.forEach(btn => {
	btn.addEventListener('click', acordion);
});
