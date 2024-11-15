import styles from "./Images.module.css";
import Image from 'next/image';
import forwardArrow from "../../../public/icons/arrow-forward.svg";
import backArrow from "../../../public/icons/arrow-back.svg";

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
			<Image
				src={forwardArrow}
				className={styles.rightButton}
			/>
			<Image
				src={backArrow}
				className={styles.leftButton}
			/>
		</div>
    </div>
  );
};
export default Images;
