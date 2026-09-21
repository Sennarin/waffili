import Icon from '../../assets/play.svg?react'
import IconQuestion from '../../assets/questions.svg?react'
import css from './button.module.css'
export default function Button({
	icon,
	link = 'https://admin.aff7o.com/partner/register',
	children,
}) {
	return (
		<a href={link} className={css.button}>
			{children}

			{icon ? <IconQuestion /> : <Icon />}
		</a>
	)
}
