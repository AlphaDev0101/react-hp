import { Link } from 'react-router-dom';
import { GridCardsPersonajes } from '../../../../GridCardsPersonajes/GridCardsPersonajes';
import { SkewTrinagule } from '../../../../SkewTriangle/SkewTrinagule';

import styles from './styles.module.scss';

export const Personajes = () => {
	return (
		<section className={styles.personajes}>
			<SkewTrinagule position={{ top: true }} />
			<h2>Algunos personajes</h2>
			<GridCardsPersonajes home={true} />
			<div className='d-flex justify-content-center mt-4'>
				<Link to='/personajes' className='btn btn-outline-warning'>
					Ver Todos
				</Link>
			</div>
			<SkewTrinagule position={{ bot: true }} />
		</section>
	);
};
