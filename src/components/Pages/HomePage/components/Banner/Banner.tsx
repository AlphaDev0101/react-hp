import { SkewTrinagule } from '../../../../SkewTriangle/SkewTrinagule';
import styles from './styles.module.scss';

export const Banner = () => {
	return (
		<section className={styles.banner}>
			<div className='container-lg'>
				<div className={styles['banner-text']}>
					<h1>Harry Potter Web</h1>
					<p>Donde podras encontrar personajes, hechizos, frases.</p>
				</div>
			</div>
			<SkewTrinagule position={{ bot: true }} />
		</section>
	);
};
