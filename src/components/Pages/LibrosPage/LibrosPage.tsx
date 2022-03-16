import { useFetch } from '../../../hooks/useFetch';
import { CardwithImage } from '../../CardwithImage/CardwithImage';
import { Loading } from '../../Loading/Loading';

type LibroData = {
	id: number;
	imagen: string;
	titulo: string;
	fecha_de_lanzamiento: string;
	autora: string;
	descripcion: string;
};

type State = {
	fetchData: [] | LibroData[];
	error: string;
	loading: boolean;
};

export const LibrosPage = () => {
	const { fetchData, error, loading }: State = useFetch(`/libros`);
	return (
		<main className='container-lg py-5'>
			<h2 className='text-center my-4'>Libros</h2>
			<div>
				{loading && <Loading />}
				{error && <p>{error}</p>}
				<div className='d-flex flex-wrap justify-content-center'>
					{fetchData.length !== 0 &&
						fetchData.map((libro) => (
							<CardwithImage
								key={libro.id}
								className='libro-card-page'
								img={libro.imagen}
								title={libro.titulo}
								info={
									<div>
										<p>Fecha de lanzamiento: {libro.fecha_de_lanzamiento}</p>
										<p>Autora: {libro.autora}</p>
										<p>Descripcion: {libro.descripcion}</p>
									</div>
								}
							/>
						))}
				</div>
			</div>
		</main>
	);
};
