import styles from './styles.module.scss';

type Props = {
	position?: { bot?: boolean; top?: boolean };
};

export const SkewTrinagule = ({ position = { top: true } }: Props) => {
	return (
		<div
			className={`${styles.skew} ${position.top ? styles['skew-top'] : ''} ${position.bot ? styles['skew-bot'] : ''}`}
		></div>
	);
};
