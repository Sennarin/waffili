import Button from '../button/button'
import css from './hero.module.css'
export default function Hero() {
	return (
		<section className={css.hero}>
			<div className='container'>
				<div className={css.hero__inner}>
					<div className={css.hero__text}>
						<p>
							Aff7o Affiliates. The best affiliate program from a trusted gaming
							brand
						</p>
						<h1>Excellence in every detail. Start earning with us today.</h1>
						<p>
							Become part of Aff7o Affiliates. We’ve built this gaming
							experience over many years. Partner with the best.
						</p>
					</div>
					<Button>Become An Partner</Button>
				</div>
			</div>
		</section>
	)
}
