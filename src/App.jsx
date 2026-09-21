import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import ScrollToTopButton from './components/scrollUpBtn/scrollToTopButton'

import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App() {
	return (
		<>
			<ToastContainer
				position='top-right'
				autoClose={2000}
				toastStyle={{ backgroundColor: '#1b191a', color: '#fff' }}
			/>

			<Header />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/privacy_policy' element={<PrivacyPolicy />} />
				<Route path='/terms_and_conditions' element={<Terms />} />
			</Routes>

			<Footer />
			<ScrollToTopButton />
		</>
	)
}
