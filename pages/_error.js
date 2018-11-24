import Layout from '../components/Layout';

export default ({ statusCode }) => (
	<Layout title="Oops!">
		<p>
			{statusCode
				? `Could not load this page correctly. Status code: ${statusCode}`
				: "Sorry, we couldn't find the page you were looking for."}
		</p>
	</Layout>
);
