import { Component } from 'react';
import { withRouter } from 'next/router';

import Layout from '../components/Layout';

class Post extends Component {
	render() {
		const { router } = this.props;

		return (
			<Layout title={router.query.title}>
				<p style={{ width: '80vw' }}>
					Peritus buxum virtualiter resuscitabos lacta est. Historias credere in regius divio! Consiliums
					observare in varius copinga! Eheu, planeta! Gemna volares, tanquam lotus castor. Pol, a bene navis.
				</p>
			</Layout>
		);
	}
}

export default withRouter(Post);
