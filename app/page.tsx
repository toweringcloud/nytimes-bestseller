import Link from "next/link";
import styles from "./styles.module.css";

export const metadata = {
	title: "Home",
};

interface Category {
	list_name: string;
	display_name: string;
	list_name_encoded: string;
	oldest_published_date: string;
	newest_published_date: string;
	updated: string;
}

export default async function Home() {
	const fetchRes = await fetch(
		"https://books-api.nomadcoders.workers.dev/lists"
	);
	const data = await fetchRes.json();
	const categories = data.results;
	console.log(categories.length);

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>
				THE NEW YORK TIMES BEST SELLER EXPLORER
			</h2>
			<div className={styles.categories}>
				{categories.map((category: Category) => {
					return (
						<div
							key={category.list_name_encoded}
							className={styles.category}
						>
							<Link href={`/list/${category.list_name_encoded}`}>
								{category.display_name} →
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
}
