import { Link } from 'react-router-dom'
import { asset } from '../../utils/asset'
import Button from '../button/button'
import BurgerButton from '../burgerButton/burgerButton'
import css from './header.module.css'

const links = [
	{ name: 'Why WiniGreat?', path: '/#why_winigreat' },
	{ name: 'Commission', path: '/#commission' },
	{ name: 'About Us', path: '/#about_us' },
	{ name: 'FAQ', path: '/#FAQ' },
	{ name: 'Privacy Policy', path: '/privacy_policy' },
	{ name: 'Contact', path: '/#contact' },
]

export default function Header() {
	const navLinks = links.map((link, index) => (
		<Link key={index} to={link.path}>
			{link.name}
		</Link>
	))
	return (
		<header className={css.header}>
			<div className='container'>
				<nav className={css.header___nav}>
					<Link to='/' className={css.header___logo}>
						<span className='logo-frame' style={{ width: 136, height: 47 }}>
							<img src={asset('/img/logo.png')} alt='WiniGreat' />
						</span>
					</Link>
					<div className={css.header___mainBtn}>{navLinks}</div>
					<div className={css.header___reg_nav}>
						<Button variant='secondary'>Log in</Button>
						<Button variant='primary' link='/#contact'>
							Become a Partner
						</Button>
					</div>
					<BurgerButton>
						<div className={css.header___mainBtnMob}>{navLinks}</div>
						<div className={css.header___regBtnMob}>
							<Button variant='secondary'>Log in</Button>
							<Button variant='primary' link='/#contact'>
								Become a Partner
							</Button>
						</div>
					</BurgerButton>
				</nav>
			</div>
		</header>
	)
}
