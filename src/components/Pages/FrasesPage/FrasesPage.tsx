import { useState } from 'react';
import { useFetch } from '../../../hooks/useFetch';
import { CardText } from '../../CardText/CardText';
import { Loading } from '../../Loading/Loading';
import { Paginacion } from '../../Paginacion/Paginacion';

import styles from './styles.module.scss';

type frasesData = {
	id: number;
	frase: string;
};

type State = {
	fetchData: [] | frasesData[];
	error: string;
	loading: boolean;
};

export const FrasesPage = () => {
	const frasesPorPagina = 10;
	const [page, setPage] = useState(1);
	const { fetchData, error, loading }: State = useFetch(`/frases?_page=${page}&_limit=${frasesPorPagina}`);

	return (
		<main className={styles.frases}>
			<div className='container-lg py-3'>
				<h2 className='text-center my-4'>Las mejores frases</h2>
				{loading && <Loading />}
				{error && <p>{error}</p>}
				<div className={styles['frases-grid']}>
					{fetchData.length !== 0 &&
						fetchData.map((frases) => <CardText key={frases.id} className='frases-card' text={frases.frase} />)}
				</div>
				<Paginacion page={page} setPage={setPage} cantidadDatos={50} cantidadPorPage={frasesPorPagina} />
			</div>
		</main>
	);
};
