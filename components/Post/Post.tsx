import styles from "./Post.module.css";

interface PageProps {
	title: string;
	date: string;
	children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ title, date, children }) => {
  return (
    <div className={styles.main}>
		<h2 className={styles.postTitle}>{title}</h2>
		<h4 className={styles.postDate}>{date}</h4>
     	{children} 
    </div>
  );
};

export default Page;
