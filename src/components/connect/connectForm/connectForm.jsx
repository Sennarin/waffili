import axios from 'axios'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'
import css from './connectForm.module.css'

// TODO: replace with the real WiniGreat partner-signup API once the backend is live.
const PARTNER_SIGNUP_ENDPOINT = 'TODO_BACKEND_URL/api/partner'

export default function ConnectForm() {
	const [showPassword, setShowPassword] = useState(false)
	const [showConfirm, setShowConfirm] = useState(false)
	return (
		<Formik
			initialValues={{
				full_name: '',
				company_name: '',
				phone: '',
				email: '',
				address: '',
				telegram: '',
				password: '',
				password_confirmation: '',
				terms_accepted: false,
			}}
			validationSchema={Yup.object({
				full_name: Yup.string().required('Required'),
				company_name: Yup.string().required('Required'),
				phone: Yup.string().required('Required'),
				email: Yup.string().email('Invalid email').required('Required'),
				address: Yup.string().required('Required'),
				telegram: Yup.string().required('Required'),
				password: Yup.string().min(6).required('Required'),
				password_confirmation: Yup.string()
					.oneOf([Yup.ref('password')], 'Passwords must match')
					.required('Required'),
				terms_accepted: Yup.boolean().oneOf(
					[true],
					'You must accept the terms'
				),
			})}
			onSubmit={async (values, { resetForm }) => {
				try {
					const response = await axios.post(PARTNER_SIGNUP_ENDPOINT, {
						partner_user: values,
					})

					if (response.status === 200 || response.status === 201) {
						toast.success(
							<>
								Registration was successful!
								<br />
								We will let you know when we approve your account.
							</>
						)
						resetForm()
					} else {
						toast.error('Something went wrong. Try again later.')
					}
				} catch (error) {
					const message =
						error.response?.data?.message ||
						'Error sending data. Try again later.'
					toast.error(message)
				}
			}}
		>
			{() => (
				<Form className={css.form}>
					<div className={css.row}>
						<label className={css.flex1}>
							<span className={css.labelText}>Name *</span>
							<Field
								name='full_name'
								placeholder='Enter name'
								className={css.input}
							/>
							<ErrorMessage
								name='full_name'
								component='div'
								className={css.error}
							/>
						</label>
						<label className={css.flex1}>
							<span className={css.labelText}>Company Name *</span>
							<Field
								name='company_name'
								placeholder='Enter company name'
								className={css.input}
							/>
							<ErrorMessage
								name='company_name'
								component='div'
								className={css.error}
							/>
						</label>
					</div>

					<div className={css.row}>
						<label className={css.flex1}>
							<span className={css.labelText}>Phone *</span>
							<Field
								name='phone'
								placeholder='Enter phone'
								className={css.input}
							/>
							<ErrorMessage
								name='phone'
								component='div'
								className={css.error}
							/>
						</label>
						<label className={css.flex1}>
							<span className={css.labelText}>Email *</span>
							<Field
								name='email'
								placeholder='Enter email'
								className={css.input}
							/>
							<ErrorMessage
								name='email'
								component='div'
								className={css.error}
							/>
						</label>
					</div>

					<label className={css.labelWithIcon}>
						<span className={css.labelText}>Address *</span>
						<Field
							name='address'
							placeholder='Enter address'
							className={css.input}
						/>
						<ErrorMessage
							name='address'
							component='div'
							className={css.error}
						/>
					</label>

					<label className={css.labelWithIcon}>
						<span className={css.labelText}>Telegram *</span>
						<Field
							name='telegram'
							placeholder='Enter telegram'
							className={css.input}
						/>
						<ErrorMessage
							name='telegram'
							component='div'
							className={css.error}
						/>
					</label>

					<label className={css.labelWithIcon}>
						<span className={css.labelText}>Password *</span>
						<div className={css.inputWrap}>
							<Field
								name='password'
								type={showPassword ? 'text' : 'password'}
								placeholder='Enter password'
								className={css.input}
							/>
							<span
								className={css.eye}
								onClick={() => setShowPassword(prev => !prev)}
							>
								{showPassword ? (
									<img
										src='/passwordOn.svg'
										alt='Hide'
										width='16'
										height='16'
									/>
								) : (
									<img
										src='/passwordOff.svg'
										alt='Show'
										width='16'
										height='16'
									/>
								)}
							</span>
						</div>
						<ErrorMessage
							name='password'
							component='div'
							className={css.error}
						/>
					</label>

					<label className={css.labelWithIcon}>
						<span className={css.labelText}>Repeat password *</span>
						<div className={css.inputWrap}>
							<Field
								name='password_confirmation'
								type={showConfirm ? 'text' : 'password'}
								placeholder='Enter password'
								className={css.input}
							/>
							<span
								className={css.eye}
								onClick={() => setShowConfirm(prev => !prev)}
							>
								{showConfirm ? (
									<img
										src='/passwordOn.svg'
										alt='Hide'
										width='16'
										height='16'
									/>
								) : (
									<img
										src='/passwordOff.svg'
										alt='Show'
										width='16'
										height='16'
									/>
								)}
							</span>
						</div>
						<ErrorMessage
							name='password_confirmation'
							component='div'
							className={css.error}
						/>
					</label>

					<div>
						<label className={css.checkboxWrap}>
							<Field
								type='checkbox'
								name='terms_accepted'
								className={css.checkboxInput}
							/>
							<span className={css.customCheckbox}></span>I accept the{' '}
							<Link
								to='/terms_and_conditions'
								style={{ textDecoration: 'underline' }}
							>
								Terms &amp; Conditions
							</Link>
						</label>
						<ErrorMessage
							name='terms_accepted'
							component='div'
							className={css.error}
						/>
					</div>

					<button type='submit' className={css.button}>
						Become a Partner
					</button>
				</Form>
			)}
		</Formik>
	)
}
