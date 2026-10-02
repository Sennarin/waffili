import { asset } from '../../utils/asset'
import { SIGNUP_URL } from '../../utils/links'
import Button from '../button/button'
import css from './ctaBanner.module.css'

export default function CtaBanner() {
	return (
		<section className={css.ctaBanner}>
			<div className='container'>
				<div className={css.inner}>
					<img src={asset('/img/cta-banner.webp')} alt='' className={css.bgImg} />
					<div className={css.content}>
						<h2>Ready to Grow With WiniGreat?</h2>
						<p>Partner with WiniGreat on terms that work for your business.</p>
						<Button size='large' link={SIGNUP_URL}>
							Become a Partner
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}
