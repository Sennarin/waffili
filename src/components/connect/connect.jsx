import css from './connect.module.css'
import ConnectForm from './connectForm/connectForm'

export default function Connect() {
	return (
		<section id='contact' className={css.contact}>
			<img src='/img/contact-bg.png' alt='' className={css.bgImg} />
			<div className='container'>
				<div className={css.container__inner}>
					<div className={css.contact__info}>
						<h2>Let’s Talk About Your Traffic</h2>
						<div className={css.contact__links}>
							<a href='mailto:affiliates@wgraff.com' className={css.hover}>
								<img src='/envelope.svg' alt='envelope icon' />
								affiliates@wgraff.com
							</a>
							<a href='https://t.me/johnnyquid4' className={css.hover}>
								<img src='/comments.svg' alt='comments icon' />
								@johnnyquid4
							</a>
						</div>
					</div>
					<ConnectForm />
				</div>
			</div>
		</section>
	)
}
