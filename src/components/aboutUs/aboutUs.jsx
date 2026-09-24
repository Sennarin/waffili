import css from './aboutUs.module.css'

const benefits = [
	{
		icon: '/img/icon1.png',
		text: (
			<>
				Fast, Reliable Payouts <br /> That Keep You Moving
			</>
		),
	},
	{
		icon: '/img/icon2.png',
		text: 'Dedicated Affiliate Manager by Your Side',
	},
	{
		icon: '/img/icon3.png',
		text: (
			<>
				High Player Retention <br /> for Long-Term Value
			</>
		),
	},
	{
		icon: '/img/icon4.png',
		text: (
			<>
				Access to High-Value <br /> GEOs &amp; Quality Traffic
			</>
		),
	},
]

export default function AboutUs() {
	return (
		<section id='about_us' className={css.aboutUs}>
			<div className='container'>
				<div className={css.copy}>
					<h2>More Than an Affiliate Program - Built for Growth.</h2>
					<p>
						WiniGreat combines years of iGaming experience with dedicated
						support, reliable payments, high player retention, and access to
						high-value markets — giving partners everything they need to grow.
					</p>
				</div>
				<ul className={css.cards}>
					{benefits.map((benefit, idx) => (
						<li key={idx} className={css.card}>
							<img src={benefit.icon} alt='' width='80' height='80' />
							<p>{benefit.text}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
