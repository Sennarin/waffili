import css from './whyAff7o.module.css'
import WhyAff7oCard from './whyAff7oCard/whyAff7oCard'
export default function WhyAff7o() {
	const infoList = [
		{
			svg: 'Why1',
			name: 'New markets and scalable profit potential',
			text: 'We work with Tier-1 and Tier-2 GEOs. Our key countries (Canada, Austria, and Germany) show high conversion, strong Reg2Dep, and solid deposit volumes.',
		},
		{
			svg: 'Why2',
			name: 'Simple, reliable, and efficient',
			text: 'We’re results-driven. You’ll always have dedicated managers to support you, provide promo materials, and guide you every step of the way.',
		},
		{
			svg: 'Why3',
			name: 'Track your earnings in real time',
			text: 'Your stats are updated instantly. Just log in to your dashboard to check your current earnings -always stay on top of your revenue.',
		},
		{
			svg: 'Why4',
			name: 'High-converting marketing tools',
			text: 'Our managers tailor the best promos for your traffic.Exclusive bonuses, VIP programs - everything to boost your performance. Your personal manager is always available.',
		},
		{
			svg: 'Why5',
			name: 'Fast and on-time payouts',
			text: 'We process payouts at the beginning of each month. Choose Skrill, Neteller, bank transfer, or crypto - and receive your earnings within 5 days. No delays.',
		},
		{
			svg: 'Why6',
			name: 'All traffic formats are welcome',
			text: 'We work with all traffic types and will find the best setup for you. Just reach out to your manager - we’ll tailor the deal to match your needs.',
		},
	]
	return (
		<section id='why_Aff7o' className={css.whyAff7o}>
			<div className='container'>
				<h2>Why earn with us?</h2>
				<ul className={css.cards}>
					{infoList.map((infoList, idx) => {
						return <WhyAff7oCard key={idx} info={infoList} />
					})}
				</ul>
			</div>
		</section>
	)
}
