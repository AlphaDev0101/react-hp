import { Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage/HomePage';
import { FrasesPage } from './FrasesPage/FrasesPage';
import { LibrosPage } from './LibrosPage/LibrosPage';
import { PersonajesPage } from './PersonajesPage/PersonajesPage';
import { PrediccionPage } from './PrediccionPage/PrediccionPage';

export const Pages = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/personajes' element={<PersonajesPage />} />
			<Route path='/libros' element={<LibrosPage />} />
			<Route path='/frases' element={<FrasesPage />} />
			<Route path='/horoscopo' element={<PrediccionPage />} />
		</Routes>
	);
};
