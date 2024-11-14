import Image from 'next/image';
import styles from "./page.module.css";
import Post from "./components/Post/Post.tsx";

export default function Home() {
  return (
	<main className={styles.main}>
		<div className={styles.scanline} />
		<div className={styles.titleContainer}>
			<p className={styles.pageTitle}>Stuff By Dom</p>
			<div className={styles.cursor} />
		</div>
		<div className={styles.content}>
			<p className={styles.paragraph}>
				Hello potential employer, friend, family-member or
				nerd. This site was made by me, Dom Ottaviano.
				The point of this site is to have a place to host,
				display, and discuss things I have made. With the
				hope that I can one day be paid to do similar things.
				If you wish to contact me for any reason you can
				reach me best at dominicjottaviano@gmail.com. 
				Thank you.
			</p>
			<p className={styles.paragraph}>
				As of the time of me writing this, the site
				will be formatted as follows: everything following
				this message will be a dev-log post discussing
				a project I am, or previously was working on.
				They will be given in reverse chronological order, 
				most recent to least. Further changes will be made
				in the future to make finding specific posts
				more convienient.
			</p>
			<Post title="Post 1: Welcome" date="10/10/2024">
				This is the first post to be put on here. I'm still working
				out a lot of the particulars so if the tone is drastically 
				different in subsequent posts that's why. Anyway each post
				will be about a certain project at least that's what I plan.
				So this one is on the this site. So far the only contents are:
				this post, a title and description, and two graphical effects
				I made real quick. There's a subtle scanline travelling down the
				screen that was made using a linear gradient on a div with
				low opacity thats continuously moving downward to the bottom of 
			    the screen and then resetting using a css animation. The second 
				effect is a simple text glow implemented with css's built in
				text-shadow system. I'm also using a terminal inspired font
				called 'terminus' for the aesthetic. I love the look of
				crt monitors and all their artifacts so I plan to add other
				similar effects to the site in the future, though these will
				do for now. The image that follows is a screenshot of the site
				as it is at the time of me writing this.	
			</Post>
			<div className={styles.firstPostImage}>
				<Image 
					src="/images/first-post.png" 
					width={800}
					height={400}
				/>
			</div>
			<Post title="Post 2: Beerbrot" date="10/11/2024">
				Beerbrot is a small shader project I've been working on for the
				past week or so. I've been programming with varying degrees of
				interest for around 7 years now and in that time I've 
				"completed" zero projects. This is a problem that many have had
				before me and I decided to solve it the same way they all did
				and finally made a site to hold myself accountable. Even if
				it's just me talking to myself in a vacuum.
				<br />
				<br />
				This is a mandelbrot set visualizer. I know, never been done before.
				Just a nice place to get something simple under my belt. Make some
				pretty pictures and move on. Maybe I'll come back to it after 
				building some other things I have on mind, we'll see. The project is
				basically done, though I may make a follow-up post with some tweaks.
				<br />
				<br />
				The whole thing was written in C, using GLFW for windowing and i/o, and OpenGL
				for running shaders. The github repo for this project can be found
				<a className={styles.githubLink} href="https://github.com/ottav14/beerbrot"> here</a>
			</Post>

		</div>
	</main>
  );
}
