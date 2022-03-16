import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { ModalInfo } from './components/ModalInfo';
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

export const PrediccionPage = () => {
	const [show, setShow] = useState(false);
	const [signoZodiacal, setSignoZodiacal] = useState('');
	const [signoData, setSignoData] = useState<SignoZodiacalData | {}>({});

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(`https://aztro.sameerkumar.website?sign=${signoZodiacal}&day=tomorrow`, {
				method: 'POST',
			});
			const data = await res.json();
			setSignoData(data);
		};
		if (signoZodiacal !== '') {
			fetchData();
		}
	}, [signoZodiacal]);

	const handleClose = () => {
		setShow(false);
		setSignoZodiacal('');
		setSignoData({});
	};
	const handleShow = (signo: string) => {
		setSignoZodiacal(signo);
		setShow(true);
	};

	const signos = [
		'aries',
		'taurus',
		'gemini',
		'cancer',
		'leo',
		'virgo',
		'libra',
		'scorpio',
		'sagittarius',
		'capricorn',
		'aquarius',
		'pisces',
	];

	return (
		<main className={styles.prediccion}>
			<h2>Veamos tu futuro..</h2>
			<p className='text-center h6 mt-3'>Selecciona tu signo zodiacal</p>
			<div className={styles['prediccion-grid']}>
				{signos.map((signo) => (
					<button className={styles.button} key={signo} onClick={() => handleShow(signo)}>
						{signo}
					</button>
				))}
			</div>
			{show && <ModalInfo show={show} handleClose={handleClose} signoData={signoData as SignoZodiacalData} />}
		</main>
	);
};
