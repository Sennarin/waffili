import css from './whyAff7oCard.module.css'
import Why1 from '/why1.svg'
import Why2 from '/why2.svg'
import Why3 from '/why3.svg'
import Why4 from '/why4.svg'
import Why5 from '/why5.svg'
import Why6 from '/why6.svg'
export default function WhyAff7oCard({ info }) {
	const icons = {
		Why1,
		Why2,
		Why3,
		Why4,
		Why5,
		Why6,
	}
	return (
		<li className={css.card}>
			<img src={icons[info.svg]} alt='icon' width='50' height='50' />
			<h3>{info.name}</h3>
			<p>{info.text}</p>
		</li>
	)
}
