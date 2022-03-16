import { Pagination } from 'react-bootstrap';
type Prop = {
	page: number;
	setPage: (newPage: number) => void;
	cantidadDatos: number;
	cantidadPorPage: number;
};
export const Paginacion = ({ page, setPage, cantidadDatos, cantidadPorPage }: Prop) => {
	const cantidadPersonajes = cantidadDatos;
	const paginasEnPaginacion = 3;
	const ultimaPagina = Math.ceil(cantidadPersonajes / cantidadPorPage);

	let paginasMostrarInicio: number;
	let paginasMostrarFin: number;

	if (page <= paginasEnPaginacion) {
		paginasMostrarInicio = 1;
		paginasMostrarFin = page + paginasEnPaginacion;
	} else if (page > paginasEnPaginacion && page + paginasEnPaginacion <= ultimaPagina) {
		paginasMostrarInicio = page - paginasEnPaginacion;
		paginasMostrarFin = page + paginasEnPaginacion;
	} else {
		paginasMostrarInicio = page - paginasEnPaginacion;
		paginasMostrarFin = ultimaPagina;
	}

	let pages: number[] = [];
	for (let i = paginasMostrarInicio; i <= paginasMostrarFin; i++) {
		pages.push(i);
	}
	return (
		<>
			<Pagination className='justify-content-center py-4'>
				{page > paginasEnPaginacion && <Pagination.First onClick={() => setPage(1)} />}
				{!(page === 1) && <Pagination.Prev onClick={() => setPage(page - 1)} />}
				{pages.map((numb) => {
					return (
						<Pagination.Item onClick={() => setPage(numb)} key={numb} className={page === numb ? 'active' : ''}>
							{numb}
						</Pagination.Item>
					);
				})}
				{!(page === ultimaPagina) && <Pagination.Next onClick={() => setPage(page + 1)} />}
				{page < ultimaPagina - paginasEnPaginacion && <Pagination.Last onClick={() => setPage(ultimaPagina)} />}
			</Pagination>
		</>
	);
};
