import clsx from 'clsx'
import { useState } from 'react'
import css from './faqAccordion.module.css'
export default function FaqAccordion({ item }) {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<div className={css.accordion}>
			<button
				className={clsx(css.accordion_button, { [css.open]: isOpen })}
				onClick={() => setIsOpen(!isOpen)}
			>
				{item.name}
				<img
					src='/arrow.svg'
					alt='arrow'
					width='16'
					height='18'
					className={clsx(css.arrow, { [css.open]: isOpen })}
				/>
			</button>

			<div className={clsx(css.accordion_content, { [css.open]: isOpen })}>
				<p>Depending on your traffic, we offer:</p>
				{item.text ? (
					<p>{item.text}</p>
				) : (
					<ul>
						<li>RevShare: 35%–50% of NGR</li>
						<li>CPA: Fixed payout per registration</li>
						<li>
							Hybrid: Combine RevShare + CPA for a stable, scalable income
						</li>
					</ul>
				)}
			</div>
		</div>
	)
}
