import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import AboutUs from '../components/aboutUs/aboutUs'
import Commission from '../components/commission/commission'
import Connect from '../components/connect/connect'
import CtaBanner from '../components/ctaBanner/ctaBanner'
import FAQ from '../components/faq/faq'
import Hero from '../components/hero/hero'
import WhyAff7o from '../components/whyAff7o/whyAff7o'

export default function Home() {
	const location = useLocation()

	useEffect(() => {
		const hash = location.hash
		if (hash) {
			const el = document.querySelector(hash)
			if (el) {
				el.scrollIntoView({ behavior: 'smooth' })
			}
		}
	}, [location])

	return (
		<main>
			<Hero />
			<WhyAff7o />
			<AboutUs />
			<Commission />
			<CtaBanner />
			<FAQ />
			<Connect />
		</main>
	)
}
