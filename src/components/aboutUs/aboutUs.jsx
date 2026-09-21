import Button from '../button/button'
import css from './aboutUs.module.css'

export default function AboutUs() {
	return (
		<section id='about_us' className={css.aboutUs}>
			<div className='container'>
				<div className={css.aboutUs_container}>
					<div className={css.aboutUs__info}>
						<h2>About Us</h2>
						<h3>Aff7o Affiliates: Built around player satisfaction</h3>
						<p className={css.aboutUs__text}>
							At Aff7o, we don’t just build brands – we craft experiences
							focused on retention, satisfaction, and a premium user journey.
						</p>
						<p className={css.aboutUs__text}>
							We stay ahead of market trends to ensure long-term value for
							players and consistent profits for partners.
						</p>
						<h3>Why join Aff7o Affiliates:</h3>
						<ul className={css.custom_list}>
							<li>
								Drive traffic to Canada, Poland, Portugal, Germany, Austria, and
								Sweden
							</li>
							<li>Special focus on mobile – adapted for each GEO we target</li>
							<li>Fully licensed and transparent environment</li>
							<li>
								High LTV through VIP programs, 24/7 support, user-friendly UI,
								and unique experiences
							</li>
							<li>
								Exclusive slots in partnership with leading software providers
							</li>
							<li>
								Always fresh promos -- our own ideas, not recycled campaigns
							</li>
						</ul>
						<Button>Become an Partner</Button>
					</div>
					<div className={css.background}></div>
				</div>
			</div>
		</section>
	)
}
