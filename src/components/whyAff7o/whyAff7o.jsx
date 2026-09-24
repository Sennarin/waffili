import { asset } from '../../utils/asset'
import css from './whyAff7o.module.css'

const stats = [
	{ value: '1000+', label: 'Active Players' },
	{ value: '6', label: 'Key Markets' },
	{ value: '50', label: 'Active Partners' },
]

export default function WhyAff7o() {
	return (
		<section id='why_winigreat' className={css.whyAff7o}>
			<div className='container'>
				<div className={css.inner}>
					<div className={css.globe}>
						<img src={asset('/img/globe.png')} alt='' />
					</div>
					<div className={css.content}>
						<h2>
							WiniGreat - Built on Years of iGaming Expertise, Strong Market
							Knowledge, and Trusted Partnerships Worldwide
						</h2>
						<ul className={css.stats}>
							{stats.map(stat => (
								<li key={stat.label}>
									<span className={css.value}>{stat.value}</span>
									<span className={css.label}>{stat.label}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}
