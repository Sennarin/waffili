import Button from '../button/button'
import css from './faq.module.css'
import FaqAccordion from './faqAccordion/faqAccordion'

export default function FAQ() {
	const faqItems = [
		{
			name: 'Why choose Aff7o Affiliates?',
			text: 'We promote our own brands – not third-party casinos. That means all the benefits are fully accessible to you as a partner. Join today and get full support from your manager.',
		},
		{
			name: 'How to get started?',
			text: 'Register on the site, and your manager will contact you to finalize the setup. Start sending traffic -- and start earning.',
		},
		{ name: 'What commission models are available?' },
		{
			name: 'Which GEOs and traffic types are accepted?',
			text: 'We accept PPC, SEO, UAC, social, and more. Your manager will help you find the best setup based on your traffic.',
		},
		{
			name: 'When do payouts happen?',
			text: 'Stats are updated at the beginning of each month. Payments are made within 5 days via Skrill, Neteller, bank transfer, or cryptocurrency.',
		},
	]
	return (
		<section id='FAQ' className={css.faq}>
			<div className='container'>
				<h2>FAQs</h2>
				<ul className={css.faq__accordion}>
					{faqItems.map((item, index) => (
						<FaqAccordion key={index} item={item} />
					))}
				</ul>
				<Button icon link='https://t.me/aff_7oasis'>
					Still Have questions?
				</Button>
			</div>
		</section>
	)
}
