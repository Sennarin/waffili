import Button from '../button/button'
import css from './connect.module.css'
import ConnectForm from './connectForm/connectForm'
export default function Connect() {
	return (
		<section id='contact' className={css.contact}>
			<div className='container'>
				<div className={css.container__inner}>
					<div className={css.contact__info}>
						<h2>Connect with Us</h2>
						<p>Talk To Us Anytime</p>
						<div className={css.contact__links}>
							<a href='mailto:affiliates@7o.casino' className={css.hover}>
								<img src='/envelope.svg' alt='envelope icon' />
								affiliates@7o.casino
							</a>
							<a href='https://t.me/aff7_oasis' className={css.hover}>
								<img src='/comments.svg' alt='comments icon' />
								Telegram
							</a>
						</div>

						<Button> Become a Partner</Button>
					</div>
					<ConnectForm />
				</div>
			</div>
		</section>
	)
}
