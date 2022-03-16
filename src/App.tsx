import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Pages } from './components/Pages/Pages';

import './sass/App.scss';

export const App = () => {
	return (
		<>
			<Header />
			<Pages />
			<Footer />
		</>
	);
};
