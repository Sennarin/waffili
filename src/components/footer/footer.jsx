import { Link } from 'react-router-dom'
import css from './footer.module.css'

const links = [
	{ name: 'Why WiniGreat?', path: '/#why_winigreat' },
	{ name: 'Commission', path: '/#commission' },
	{ name: 'About Us', path: '/#about_us' },
	{ name: 'FAQ', path: '/#FAQ' },
	{ name: 'Privacy Policy', path: '/privacy_policy' },
]

export default function Footer() {
	const navLinks = links.map((link, index) => (
		<Link key={index} to={link.path}>
			{link.name}
		</Link>
	))
	return (
		<footer className={css.footer}>
			<div className='container'>
				<nav className={css.footer___nav}>
					<div className={css.footer___logoDiv}>
						<Link to='/' className='logo-frame' style={{ width: 142, height: 50 }}>
							<img src='/img/logo.png' alt='WiniGreat' />
						</Link>
						<a href='https://www.slotscalendar.com'>
							<img src='/img/sclogo.png' alt='Sclogo' width='250' height='65' />
						</a>
					</div>
					<div className={css.footer___mainBtn}>
						{navLinks}
						<Link to='/terms_and_conditions'>Terms &amp; Conditions</Link>
						<Link to='/#contact'>Contact</Link>
					</div>
					<p>Copyright © 2026 | WiniGreat Affiliates</p>
				</nav>
			</div>
		</footer>
	)
}
