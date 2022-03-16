import { Link } from 'react-router-dom';
import { CardwithImage } from '../../../../CardwithImage/CardwithImage';
import { Loading } from '../../../../Loading/Loading';
import { useFetch } from '../../../../../hooks/useFetch';

import styles from './styles.module.scss';

type LibroData = {
	id: number;
	imagen: string;
	titulo: string;
};

type State = {
	fetchData: [] | LibroData[];
	error: string;
	loading: boolean;
};

export const Libros = () => {
	const { fetchData, error, loading }: State = useFetch('/libros?_page=1&_limit=3');

	return (
		<section className={`${styles.libros} container-lg`}>
			<h2>Libros</h2>
			<div className={styles['libros-grid']}>
				{loading && <Loading />}
				{error && <p>{error}</p>}
				{fetchData.length !== 0 &&
					fetchData.map((libro) => (
						<CardwithImage key={libro.id} className='libro-card' img={libro.imagen} title={libro.titulo} />
					))}
			</div>
			<div className='d-flex justify-content-center '>
				<Link to='/libros' className='btn btn-outline-warning'>
					Mas información
				</Link>
			</div>
		</section>
	);
};
