import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

export const Header = () => {
	return (
		<header className='sticky-top'>
			<Navbar bg='dark' variant='dark' expand='lg' className='border-bottom border-white'>
				<Container>
					<Navbar.Brand as={Link} to='/'>
						Harry Potter Info
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
						<Nav className='ms-auto'>
							<Nav.Link className={styles['nav-link']} as={Link} to='/'>
								Inicio
							</Nav.Link>
							<Nav.Link className={styles['nav-link']} as={Link} to='/personajes'>
								Personajes
							</Nav.Link>
							<Nav.Link className={styles['nav-link']} as={Link} to='/libros'>
								Libros
							</Nav.Link>
							<Nav.Link className={styles['nav-link']} as={Link} to='/frases'>
								Frases
							</Nav.Link>
							<Nav.Link className={styles['nav-link']} as={Link} to='/horoscopo'>
								Predicción
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};
