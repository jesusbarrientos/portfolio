import Head from 'next/head'
import Navbar from './../components/navbar'

export default function DefaultLayout({ children }) {
	return (
		<container className="pf-layout pf-layout-default">
			<Head>
				<title>Portfolio | Jesús Barrientos</title>
				<meta name="description" content="Full-stack Web Developer" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Navbar />
				<section className="content">{children}</section>
			</main>
		</container>
	)
}
