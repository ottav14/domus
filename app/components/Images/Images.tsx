import styles from "./Images.module.css";
import Image from 'next/image';

const Images = ({ file }) => {
  return (
    <div className={styles.main}>
		<Image 
			src={file}
			width={800}
			height={400}
		/>
    </div>
  );
};
export default Images;
