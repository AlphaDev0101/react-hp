import { CardText } from '../../../../CardText/CardText';

import { Link } from 'react-router-dom';

type FrasesData = {
	id: number;
	frase: string;
};

type State = {
	fetchData: [] | FrasesData[];
	error: string;
	loading: boolean;
};

import styles from './styles.module.scss';
import { useFetch } from '../../../../../hooks/useFetch';
import { Loading } from '../../../../Loading/Loading';

export const Frases = () => {
	const { fetchData, error, loading }: State = useFetch('/frases?_page=2&_limit=3');

	return (
		<section className={styles.frases}>
			<h2>Frases Inolvidables</h2>
			<div className={styles['frases-grid']}>
				{loading && <Loading />}
				{error && <p>{error}</p>}
				{fetchData.length !== 0 &&
					fetchData.map((frases) => <CardText key={frases.id} className='frases-card' text={frases.frase} />)}
			</div>

			<div className='d-flex justify-content-center '>
				<Link to='/frases' className='btn btn-outline-warning'>
					Ver todas las frases
				</Link>
			</div>
		</section>
	);
};
