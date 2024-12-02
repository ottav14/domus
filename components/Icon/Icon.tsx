import styles from './Icon.module.css';
import Image from 'next/image';
import { MouseEventHandler } from 'react';

interface IconProps {
  image: string;
  action: MouseEventHandler<HTMLButtonElement>;  
}

const Icon: React.FC<IconProps> = ({ image, action }) => {
	return (
		<button className={styles.button} onClick={action}>
			<Image
				src={image}
				alt='Could not display icon'
				className={styles.img}
			/>
		</button>
	);
};
export default Icon;
