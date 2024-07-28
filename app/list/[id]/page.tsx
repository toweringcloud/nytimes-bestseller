// import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

export const metadata = {
	title: "Detail",
};

interface Book {
	rank: number;
	rank_last_week: number;
	weeks_on_list: number;
	asterisk: number;
	dagger: number;
	primary_isbn10: string;
	primary_isbn13: string;
	publisher: string;
	description: string;
	price: string;
	title: string;
	author: string;
	contributor: string;
	contributor_note: string;
	book_image: string;
	book_image_width: number;
	book_image_height: number;
	amazon_product_url: string;
}

export default async function Detail({ params }: { params: any }) {
	const bookCategory = params.id;
	console.log(bookCategory);

	const fetchRes = await fetch(
		`https://books-api.nomadcoders.workers.dev/list?name=${bookCategory}`
	);
	const data = await fetchRes.json();
	const books = data.results.books;
	console.log(books);

	return (
		<div className={styles.container}>
			<h2 className={styles.category}>{data.results.display_name}</h2>
			<div className={styles.books}>
				{books.map((book: Book) => (
					<div key={book.title} className={styles.book}>
						<img
							alt={book.title}
							src={book.book_image}
							width={250}
							height={350}
						/>
						<span className={styles.title}>
							{book.title.length > 20
								? book.title.slice(0, 19) + "..."
								: book.title}
						</span>
						<span className={styles.author}>{book.author}</span>
						<Link href={book.amazon_product_url}>
							<span className={styles.purchase}>Buy now →</span>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
