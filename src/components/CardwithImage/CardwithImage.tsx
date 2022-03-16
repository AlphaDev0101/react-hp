import { Card } from 'react-bootstrap';

import styles from './styles.module.scss';

type Props = {
	img: string;
	title: string;
	info?: JSX.Element;
	className: string;
};

export const CardwithImage = ({ img, title, info, className }: Props) => {
	return (
		<Card className={styles[className]}>
			<Card.Img
				variant='top'
				src={img ? img : 'https://www.softzone.es/app/uploads-softzone.es/2018/04/guest.png?x=480&quality=20'}
			/>
			<Card.Body className='pb-0'>
				<Card.Title>
					<h3 className='text-center mb-4'>{title}</h3>
				</Card.Title>
				<Card.Subtitle>{info}</Card.Subtitle>
			</Card.Body>
		</Card>
	);
};
