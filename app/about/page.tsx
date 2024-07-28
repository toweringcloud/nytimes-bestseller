import styles from "./styles.module.css";

export default function About() {
	return (
		<div className={styles.container}>
			<span className={styles.title}>ABOUT US</span>
			<span className={styles.description}>
				Welcome to the official explorer for The New York Times Best
				Seller list explorer:
				<br />
				We hope you enjoy your stay!
			</span>
		</div>
	);
}
