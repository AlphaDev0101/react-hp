import { useEffect, useState } from 'react';
import { CardwithImage } from '../CardwithImage/CardwithImage';
import { useFetch } from '../../hooks/useFetch';
import { Loading } from '../Loading/Loading';
import { Paginacion } from '../Paginacion/Paginacion';
import styles from './styles.module.scss';

type PersonajesData = {
	id: number;
	image: string;
	name: string;
	species: string;
	house: string;
	actor: string;
	alive: boolean;
};

type State = {
	fetchData: [] | PersonajesData[];
	error: string;
	loading: boolean;
};

export const GridCardsPersonajes = ({ home }: { home: boolean }) => {
	const cantidadPersonajes = home ? 3 : 20;

	const [page, setPage] = useState(1);
	const { fetchData, error, loading }: State = useFetch(`/personajes?_page=${page}&_limit=${cantidadPersonajes}`);

	return (
		<>
			{loading && <Loading />}
			{error && <p>{error}</p>}
			{fetchData.length != 0 && (
				<div className={styles['personajes-grid']}>
					{fetchData.map((personaje) => (
						<CardwithImage
							key={personaje.id}
							className='personaje-card'
							img={personaje.image}
							title={personaje.name}
							info={
								<div>
									<hr />
									<p className='mb-1'>Estado: {personaje.alive ? 'vivo' : 'muerto'}</p>
									<p className='mb-1'>Especie: {personaje.species}</p>
									<p className='mb-1'>Casa : {personaje.house}</p>
									<p>Actor/a: {personaje.actor}</p>
								</div>
							}
						/>
					))}
				</div>
			)}
			{!home && <Paginacion page={page} setPage={setPage} cantidadDatos={403} cantidadPorPage={cantidadPersonajes} />}
		</>
	);
};
