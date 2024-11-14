import styles from "./Post.module.css";

const Page = ({ title, date, content, children }) => {
  return (
    <div className={styles.main}>
		<h2 className={styles.postTitle}>{title}</h2>
		<h4 className={styles.postDate}>{date}</h4>
     	{children} 
    </div>
  );
};

export default Page;
