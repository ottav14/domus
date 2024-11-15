import styles from "./Images.module.css";
import Image from 'next/image';

const Images = ({ file }) => {
  return (
    <div className={styles.main}>
		<div className={styles.player}>
			<Image 
				src={file}
				width={800}
				height={400}
				className={styles.img}
			/>
			<div className={styles.playerBackground} />
			<div className={styles.leftButton} />
		</div>
    </div>
  );
};
export default Images;
