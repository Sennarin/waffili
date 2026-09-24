import { asset } from '../../utils/asset'
import Button from '../button/button'
import css from './hero.module.css'

export default function Hero() {
	return (
		<section className={css.hero}>
			<div className={css.hero__bg}>
				<img
					src={asset('/img/hero-bg.png')}
					alt=''
					className={css.hero__bgImg}
				/>
			</div>
			<div className='container'>
				<div className={css.hero__inner}>
					<div className={css.hero__text}>
						<span className={css.hero__eyebrow}>
							The best affiliate program from a trusted gaming brand
						</span>
						<h1>
							Grow Your Revenue
							<br /> with WiniGreat
						</h1>
						<p>
							Drive quality traffic, unlock high-LTV players, and grow your
							revenue with a dedicated affiliate team, flexible deals, and
							tailored promotions.
						</p>
					</div>
					<Button size='large'>Become a Partner</Button>
				</div>
			</div>
		</section>
	)
}
