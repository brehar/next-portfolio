import Link from 'next/link';

import Layout from '../components/Layout';

const PostLink = ({ title, slug }) => (
	<li style={{ lineHeight: 2 }}>
		<Link as={slug ? `/${slug}` : `/blog/post/${title.toLowerCase()}`} href={`/post?title=${title}`}>
			<a>{title} Post</a>
		</Link>
	</li>
);

export default () => (
	<Layout title="My Blog">
		<ul style={{ listStyleType: 'none', padding: 0, textAlign: 'center' }}>
			<PostLink title="React" />
			<PostLink title="Angular" />
			<PostLink title="Vue" />
		</ul>
	</Layout>
);
