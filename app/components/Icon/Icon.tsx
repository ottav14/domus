import styles from "./Icon.module.css";
import Image from 'next/image';

const Icon = ({ image, action }) => {
	return (
		<button className={styles.button} onClick={action}>
			<Image
				src={image}
				className={styles.img}
			/>
		</button>
	);
};
export default Icon;
