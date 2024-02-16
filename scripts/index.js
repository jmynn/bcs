document.addEventListener('DOMContentLoaded', init)
function init() {
	const menuBtn = document.querySelector('._menu')
	const headerBody = document.querySelector('.header__body')
	const mountainLogo = document.getElementById('mountain-logo')
	const mountainCard = document.getElementById('mountain-card')

	menuBtn.addEventListener('click', () => {
		menuBtn.classList.toggle('_close')
		headerBody?.classList.toggle('_open')
		document.body.classList.toggle('_hidden')
	})

	if(location.pathname.includes('client') ||  location.pathname.includes('something')) return
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				mountainLogo.classList.contains('_slideUp') && mountainLogo.classList.remove('_slideUp')
				if (entry.isIntersecting) {
					mountainLogo.classList.add('_slideUp')
				}
			})
		},
		{ threshold: 0.3 }
	)
	observer.observe(mountainCard)
}
