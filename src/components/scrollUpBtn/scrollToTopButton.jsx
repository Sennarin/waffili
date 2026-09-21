import { useEffect, useState } from 'react'
import css from './scrollToTopButton.module.css'

export default function ScrollToTopButton() {
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const onScroll = () => {
			setVisible(window.scrollY > 300)
		}

		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
		if (window.location.hash) {
			history.replaceState(
				null,
				'',
				window.location.pathname + window.location.search
			)
		}
	}

	if (!visible) return null

	return (
		<button onClick={handleClick} className={css.buttonUp}>
			↑
		</button>
	)
}
