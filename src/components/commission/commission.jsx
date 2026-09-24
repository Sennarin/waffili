import css from './commission.module.css'

const leftTiers = [
	{
		name: 'CPA',
		value: 'Up to €700',
		text: 'Competitive CPA rates tailored to your traffic',
	},
	{
		name: 'RevShare',
		value: 'Up to 55%',
		text: 'Lifetime revenue with no hidden fees',
	},
]

const rightTiers = [
	{
		name: 'Sub-Affiliate',
		value: '5%+',
		text: 'Additional revenue from your affiliate network',
	},
	{
		name: 'Custom Deals',
		value: 'Up to 65%',
		text: 'Tailored terms based on your traffic and volume',
	},
]

function Card({ tier }) {
	return (
		<li className={css.card}>
			<div className={css.cardHeader}>
				<h3>{tier.name}</h3>
				<span className={css.value}>{tier.value}</span>
			</div>
			<p>{tier.text}</p>
		</li>
	)
}

export default function Commission() {
	return (
		<section id='commission' className={css.commission}>
			<div className='container'>
				<div className={css.copy}>
					<h2>Commissions and payments</h2>
					<p>Partner with WiniGreat on terms that work for your business.</p>
				</div>
				<div className={css.hub}>
					<ul className={css.column}>
						<img
							src='/connector.svg'
							alt=''
							className={css.connectorLeft}
						/>
						{leftTiers.map(tier => (
							<Card key={tier.name} tier={tier} />
						))}
					</ul>
					<div className={css.logoCard}>
						<span className='logo-frame' style={{ width: 174, height: 61 }}>
							<img src='/img/logo.png' alt='WiniGreat' />
						</span>
					</div>
					<ul className={css.column}>
						<img
							src='/connector.svg'
							alt=''
							className={css.connectorRight}
						/>
						{rightTiers.map(tier => (
							<Card key={tier.name} tier={tier} />
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}
