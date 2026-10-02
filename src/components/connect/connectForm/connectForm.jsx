import axios from 'axios'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { toast } from 'react-toastify'
import * as Yup from 'yup'
import css from './connectForm.module.css'

const PARTNER_API_URL = import.meta.env.VITE_PARTNER_API_URL || '/api/partner'

export default function ConnectForm() {
	return (
		<Formik
			initialValues={{ username: '', email: '' }}
			validationSchema={Yup.object({
				username: Yup.string().trim().required('Required'),
				email: Yup.string().email('Invalid email').required('Required'),
			})}
			onSubmit={async values => {
				try {
					const { data } = await axios.post(PARTNER_API_URL, values)
					window.location.assign(data.regUrl)
				} catch (error) {
					toast.error(
						error.response?.data?.message ||
							'Error sending data. Try again later.'
					)
				}
			}}
		>
			{({ isSubmitting }) => (
				<Form className={css.form}>
					<label className={css.labelWithIcon}>
						<span className={css.labelText}>Username *</span>
						<Field
							name='username'
							placeholder='Enter username'
							className={css.input}
						/>
						<ErrorMessage
							name='username'
							component='div'
							className={css.error}
						/>
					</label>

					<label className={css.labelWithIcon}>
						<span className={css.labelText}>Email *</span>
						<Field
							name='email'
							type='email'
							placeholder='Enter email'
							className={css.input}
						/>
						<ErrorMessage name='email' component='div' className={css.error} />
					</label>

					<button type='submit' className={css.button} disabled={isSubmitting}>
						Become a Partner
					</button>
				</Form>
			)}
		</Formik>
	)
}
