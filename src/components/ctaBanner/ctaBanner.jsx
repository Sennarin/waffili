import Button from '../button/button'
import css from './ctaBanner.module.css'

export default function CtaBanner() {
	return (
		<section className={css.ctaBanner}>
			<div className='container'>
				<div className={css.inner}>
					<img src='/img/cta-banner.png' alt='' className={css.bgImg} />
					<div className={css.content}>
						<h2>Ready to Grow With WiniGreat?</h2>
						<p>Partner with WiniGreat on terms that work for your business.</p>
						<Button size='large'>Become a Partner</Button>
					</div>
				</div>
			</div>
		</section>
	)
}
