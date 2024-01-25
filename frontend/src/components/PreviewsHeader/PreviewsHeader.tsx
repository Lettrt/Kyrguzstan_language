import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../Modal/Modal'
import Login from '../../pages/authScens/Login/Login'
import Registration from '../../pages/authScens/Registration/Registration'

const PreviewsHeader: FC = () => {
	const [modalRegistrationOpen, setModalRegistrationOpen] = useState(false)
	const [modalLoginOpen, setModalLoginOpen] = useState(false)

	return (
		<div>
			<div>
				<Link to={'/sign-in'}>
					<button onClick={() => setModalLoginOpen(true)}>Войти</button>
				</Link>
				<Link to={'/sign-up'}>
					<button onClick={() => setModalRegistrationOpen(true)}>
						Зарегистрироваться
					</button>
				</Link>
			</div>
			<Modal isOpen={modalLoginOpen} onClose={() => setModalLoginOpen(false)}>
				<Login
					isOpen={modalLoginOpen}
					onClose={() => setModalLoginOpen(false)}
				/>
			</Modal>
			<Modal
				isOpen={modalRegistrationOpen}
				onClose={() => setModalRegistrationOpen(false)}
			>
				<Registration />
			</Modal>
		</div>
	)
}

export default PreviewsHeader
