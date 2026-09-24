import clsx from 'clsx'
import css from './button.module.css'

export default function Button({
	variant = 'primary',
	size,
	link = '#',
	className,
	children,
}) {
	return (
		<a
			href={link}
			className={clsx(css.button, css[variant], size === 'large' && css.large, className)}
		>
			{children}
		</a>
	)
}
