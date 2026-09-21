import css from './commission.module.css'

export default function Commission() {
	return (
		<section id='commission' className={css.commission}>
			<div className='container'>
				<h2>Commission Plans</h2>
				<ul className={css.cards}>
					<li className={css.card}>
						<h3>
							Flexible terms - <br />
							<span className={css.accent}>your traffic</span>, your rules
						</h3>
						<p>
							We don’t impose strict limits. Let’s agree on what works best for
							your traffic.
						</p>
					</li>
					<li className={css.card}>
						<h3>
							RevShare
							<br /> from <span className={css.accent}>35%</span> to{' '}
							<span className={css.accent}>50%</span>
						</h3>
						<p>No negative carryover. Every month starts fresh.</p>
					</li>
					<li className={css.card}>
						<h3>
							Sub-Affiliate <br />
							<span className={css.accent}>5%+</span>
						</h3>
						<p>
							Earn from your referrals. Build your network and grow your
							revenue.
						</p>
					</li>
				</ul>
			</div>
		</section>
	)
}
