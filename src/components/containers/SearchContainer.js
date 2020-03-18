import React, { Component } from 'react';
// import { getRecipe } from '../../services/api'
import Search from '../layout/Search';

class SearchContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		const {} = this.state;

		return (
			<div>
				<Search />
			</div>
		);
	}
}

export default SearchContainer;
