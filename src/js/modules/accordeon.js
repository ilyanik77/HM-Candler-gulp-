const accordeon = document.querySelector('.accordeon')
const accordeonTitles = Array.from(
	accordeon.querySelectorAll('.accordeon__title')
)

accordeonTitles.forEach((el, index) => {
	el.addEventListener('click', function () {
		const currentText = el.parentElement.querySelector('.accordeon__text');
		currentText.classList.toggle('none');
        console.log(currentText);
	})
})

navBtnOpen.onclick = toggleMobileNav
navBtnClose.onclick = toggleMobileNav
navOverlay.onclick = toggleMobileNav





export default accordeon = accordeon;