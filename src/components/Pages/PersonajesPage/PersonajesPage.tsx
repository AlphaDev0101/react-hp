import { GridCardsPersonajes } from '../../GridCardsPersonajes/GridCardsPersonajes';

import styles from './styles.module.scss';

export const PersonajesPage = () => {
	return (
		<main className={styles.personajes}>
			<div className='container-lg'>
				<h2 className='my-5 text-center'>Personajes de Harry Potter</h2>
				<GridCardsPersonajes home={false} />
			</div>
		</main>
	);
};
