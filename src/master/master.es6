import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectDetail } from '../actionCreators.es6';

class Master extends React.Component {

	render() {
		const beers = this.props.beer.items,
			selectBeer = this.props.actions.selectDetail;

		const listItems = beers.map((beer) => {
			return (<li key={ beer.id }><a href="javasript:;" onClick={ selectBeer.bind(this, beer.id) }>{ beer.title }</a></li>);
		});

		return (
			<div>
				<h1>I'm your master</h1>
				<ul>
					{ listItems }
				</ul>
			</div>
		);
	}

}

export default connect(
	(state) => {
		return {
			beer: state.beer
		}
	},
	(dispatch) => {
		return {
			actions: bindActionCreators({ selectDetail }, dispatch)
		}
	}
)(Master);
