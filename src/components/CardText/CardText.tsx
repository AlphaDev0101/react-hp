import { Card } from 'react-bootstrap';

import styles from './styles.module.scss';

type Props = {
	title?: string;
	text?: string;
	className?: string;
};

export const CardText = ({ title = '', text = '', className = '' }: Props) => {
	return (
		<Card className={styles[className]}>
			<Card.Body className={styles.body}>
				<Card.Title>{title}</Card.Title>
				<Card.Text className={styles.text}>"{text}"</Card.Text>
			</Card.Body>
		</Card>
	);
};
