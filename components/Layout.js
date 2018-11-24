import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => {
	NProgress.start();
};

Router.onRouteChangeComplete = () => {
	NProgress.done();
};

Router.onRouteChangeError = () => {
	NProgress.done();
};

export default ({ children, title }) => (
	<div className="root">
		<Head>
			<title>NextPortfolio</title>
		</Head>
		<header>
			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href="/about">
				<a>About</a>
			</Link>
			<Link href="/blog">
				<a>Blog</a>
			</Link>
			<Link href="/hire">
				<a>Hire</a>
			</Link>
		</header>
		<h1>{title}</h1>
		{children}
		<footer>&copy; {new Date().getFullYear()} by Brett Hartman | All Rights Reserved</footer>
		<style jsx>{`
			.root {
				align-items: center;
				display: flex;
				flex-direction: column;
				justify-content: center;
			}

			header {
				background: indigo;
				display: flex;
				font-size: 1.2rem;
				justify-content: space-around;
				padding: 1em;
				width: 100%;
			}

			header a {
				color: darkgrey;
				text-decoration: none;
			}

			header a:hover {
				color: lightgrey;
				font-weight: bold;
			}

			footer {
				padding: 1em;
			}
		`}</style>
		<style global jsx>{`
			body {
				background: #f0f0f0;
				font-size: 110%;
				margin: 0;
			}
		`}</style>
	</div>
);
