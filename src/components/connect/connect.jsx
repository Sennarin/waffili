import { asset } from '../../utils/asset'
import { SIGNUP_URL } from '../../utils/links'
import Button from '../button/button'
import css from './connect.module.css'

export default function Connect() {
	return (
		<section id='contact' className={css.contact}>
			<img src={asset('/img/contact-bg.webp')} alt='' className={css.bgImg} />
			<div className='container'>
				<div className={css.container__inner}>
					<div className={css.contact__info}>
						<h2>Let’s Talk About Your Traffic</h2>
						<div className={css.contact__links}>
							<a href='mailto:affiliates@wgraff.com' className={css.hover}>
								<img src={asset('/envelope.svg')} alt='envelope icon' />
								affiliates@wgraff.com
							</a>
							<a href='https://t.me/johnnyquid4' className={css.hover}>
								<img src={asset('/comments.svg')} alt='comments icon' />
								@johnnyquid4
							</a>
						</div>
					</div>
					<Button size='large' link={SIGNUP_URL}>
						Become a Partner
					</Button>
				</div>
			</div>
		</section>
	)
}
