import { useEffect } from 'react'
import css from './PrivacyPolicy.module.css'

export default function PrivacyPolicy() {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}, [])
	return (
		<main>
			<div className='container'>
				<section className={css.privacy_policy}>
					<h2>Privacy Policy</h2>
					<p>
						This Privacy Policy explains why and how we collect, use, and
						process the information you provide when using the Aff7o Affiliates
						website (aff7o.com) (hereinafter referred to as “the Website”).
					</p>
					<p>
						Any reference to “aff7o.com,” “us,” “we,” or “our” includes
						7o.casino, a company owned and operated byS ilent Signal Systems
						Group Limited, a company incorporated under the laws of Hong Kong,
						reg. no 78041808, having its registered office at Unit C, 8/F, King
						Palace Plaza No. 55 King Yip Street, Kwun Tong, Kowloon, Hong Kong
						You will be required to provide your license number and address,
						which can be copied from the product site.
					</p>
					<p>
						We securely protect your sensitive data. Any information you provide
						on our Website (“Personal Information”) may only be used in
						accordance with this Privacy Policy.
					</p>
					<p>
						By using our Website, you consent to the processing of your data
						under this Privacy Policy. If you do not agree with the terms and do
						not wish to provide the necessary information, please do not use our
						Website.
					</p>
					<p>
						This Privacy Policy may be updated without prior notice. Please
						check this page regularly to ensure that you continue to agree with
						our data practices.
					</p>
					<p>
						<b>Information We Collect on Our Website</b>
					</p>
					<p>
						We may receive your personal information from various sources,
						including:
					</p>
					<p>
						a. Information you provide by filling out forms on the Website
						<br /> This may include: first name, last name, phone number, email
						address, messenger ID, etc. This information is provided voluntarily
						and may be used to respond to your inquiries, manage the Website,
						and maintain security. It may also be stored as a backup to maintain
						communication with you.
					</p>
					<p>
						b. Information collected based on your use of the Website <br />
						This includes browser type, IP address, operating system, pages
						viewed, and information about how often and how long you visit the
						Website. This data helps ensure Website security and allows us to
						offer personalized promotions.
					</p>
					<p>
						c. Cookies <br /> Cookies are small web files sent to your device
						when you visit our Website. They do not harm your device or take up
						storage space but help improve your access to the Website. We use
						them to better understand how users interact with the Website and
						improve performance accordingly.
					</p>
					<p>
						There are two types of cookies: <br />
						Session cookies: Used only during your visit and deleted when you
						leave the Website. <br />
						Persistent cookies: Stored on your device until deleted manually.
					</p>
					<p>
						In addition to our own cookies, we use cookies from trusted
						partners. This helps us personalize content and improve the user
						experience.
					</p>
					<p>Cookies may be set by the following third-party services:</p>
					<p>
						Google Analytics <br /> A web analytics service provided by Google
						Inc. Address: Google Data Protection Office, 1600 Amphitheatre Pkwy,
						Mountain View, California 94043, USA. See Google’s privacy policy.
					</p>
					<p>
						Google Ads Address: <br /> Address: Google Data Protection Office,
						1600 Amphitheatre Pkwy, Mountain View, California 94043, USA. See
						Google Ads privacy policy.
					</p>
					<p>
						Consent to the Use of Cookies <br /> By continuing to use our
						Website without disabling or deleting cookies, you consent to their
						use as outlined in this Privacy Policy.
					</p>
					<p>
						How to Refuse Cookies <br /> You can set your browser not to accept
						cookies. Please note that doing so may affect your ability to use
						certain features of the Website.
					</p>
					<p>
						To Whom We Share Your Information <br /> We may disclose your data
						to our subsidiaries (including parent companies and their
						affiliates) when required under this Privacy Policy. We may also
						share your data with consultants or business partners as needed for
						risk management or legal advice.
					</p>
					<p>
						Our employees with access to your data are bound by confidentiality
						agreements and follow data protection laws. We do not sell, rent, or
						share your personal data with third parties unless legally obligated
						to do so.
					</p>
					<p>
						Access, Modification, and Deletion of Data <br /> You have the right
						to request access to, modification, or deletion of your data, as
						well as to restrict its processing.
					</p>
					<p>
						Withdraw Consent <br /> If we process your data based on consent,
						you may withdraw your consent at any time. To do so, please contact
						our managers.
					</p>
					<p>
						Security <br /> We use advanced technology to protect your data from
						unauthorized access, unlawful processing, accidental loss,
						destruction, or damage. Our Website uses SSL encryption to ensure
						that data you transmit cannot be intercepted by third parties.
					</p>
					<p>
						While we store your data securely, you should also take protective
						steps, such as updating your operating system, using antivirus
						software, updating your browser, and safeguarding passwords and
						other sensitive data.
					</p>
					<p>
						Contact Us <br /> If you have any questions about this Privacy
						Policy or would like to exercise your rights regarding your personal
						data, please contact us via email at:{' '}
						<a
							href='mailto:affiliates@7o.casino'
							style={{ textDecoration: 'underline' }}
						>
							affiliates@7o.casino
						</a>
					</p>
				</section>
			</div>
		</main>
	)
}
