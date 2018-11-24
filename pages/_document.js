import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<html lang="en">
				<Head>
					<meta charSet="UTF-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta name="description" content="A programming portfolio site built with NextJS" />
					<meta name="robots" content="noindex, nofollow" />
					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
					/>
					<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
				<style global jsx>{`
					body {
						font-family: 'Roboto', sans-serif;
					}
				`}</style>
			</html>
		);
	}
}
