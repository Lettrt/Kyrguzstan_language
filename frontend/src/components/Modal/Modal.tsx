import React, { FC, MouseEventHandler, ReactNode, useRef } from 'react'
import s from './Modal.module.css'
import './Modal.css'
import { IoMdClose } from 'react-icons/io'
import { Transition } from 'react-transition-group'

interface ModalProps {
	isOpen: boolean
	onClose: () => void
	children?: ReactNode
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
	const modalRef = useRef<HTMLDivElement>(null)

	const onWrapperClick: MouseEventHandler<HTMLDivElement> = e => {
		if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
			onClose()
		}
	}

	return (
		<>
			<Transition in={isOpen} timeout={350} unmountOnExit={true}>
				{state => (
					<div
						className={`${s.modal} modal--${state}`}
						onClick={onWrapperClick}
						ref={modalRef}
					>
						<div className='modal_wrapper'>
							<div className={s.modal_content}>
								<button className={s.modal_close_btn} onClick={onClose}>
									<IoMdClose />
								</button>
								{children}
							</div>
						</div>
					</div>
				)}
			</Transition>
		</>
	)
}

export default Modal
