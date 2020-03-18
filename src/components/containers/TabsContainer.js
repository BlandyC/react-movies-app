import React, { Component } from 'react';
// import { getRecipe } from '../../services/api'
import FullTabs from '../layout/FullTabs';

class TabsContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		const {} = this.state;

		return (
			<div>
				<FullTabs {...this.props} />
			</div>
		);
	}
}

export default TabsContainer;
