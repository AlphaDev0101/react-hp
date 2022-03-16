import { Button, Modal } from 'react-bootstrap';

import styles from './styles.module.scss';

type SignoZodiacalData = {
	current_date: string;
	description: string;
	color: string;
	mood: string;
	lucky_number: string;
	lucky_time: string;
	compatibility: string;
};

type Props = {
	show: boolean;
	handleClose: () => void;
	signoData: SignoZodiacalData;
};
export const ModalInfo = ({ show, handleClose, signoData }: Props) => {
	return (
		<>
			{signoData?.color && (
				<Modal centered className={styles.modal} show={show} onHide={handleClose} backdrop='static' keyboard={false}>
					<Modal.Header closeButton>
						<Modal.Title className='text-warning'>Fecha de Prediccion: {signoData.current_date}</Modal.Title>
					</Modal.Header>
					<Modal.Body className='text-white'>
						<p>
							<span className='text-warning'>Descripcion:</span> "{signoData.description}"
						</p>
						<p>
							<span className='text-warning'>Color:</span> {signoData.color}
						</p>
						<p>
							<span className='text-warning'>Numero de la suerte:</span> {signoData.lucky_number}
						</p>
						<p>
							<span className='text-warning'>Compatibilidad:</span> {signoData.compatibility}
						</p>
						<p>
							<span className='text-warning'>Humor:</span> {signoData.mood}
						</p>
						<p>
							<span className='text-warning'>Hora de la suerte:</span> {signoData.lucky_time}
						</p>
					</Modal.Body>
					<Modal.Footer>
						<Button variant='danger' onClick={handleClose}>
							Cerrar
						</Button>
					</Modal.Footer>
				</Modal>
			)}
		</>
	);
};
