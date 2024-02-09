const accordeon = document.querySelector('.accordeon')
const accordeonTitles = Array.from(
	accordeon.querySelectorAll('.accordeon__title')
)

accordeonTitles.forEach((el) => {
	el.addEventListener('click', function () {
		const currentText = el.parentElement.querySelector('.accordeon__text');
		currentText.classList.toggle('active');
        console.log(currentText);
	})
})







export default accordeon = accordeon;