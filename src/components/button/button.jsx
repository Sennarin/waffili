import clsx from 'clsx'
import { Link } from 'react-router-dom'
import css from './button.module.css'

export default function Button({
	variant = 'primary',
	size,
	link = '#',
	className,
	children,
}) {
	const classes = clsx(
		css.button,
		css[variant],
		size === 'large' && css.large,
		className
	)

	if (link.startsWith('/')) {
		return (
			<Link to={link} className={classes}>
				{children}
			</Link>
		)
	}

	return (
		<a href={link} className={classes}>
			{children}
		</a>
	)
}
