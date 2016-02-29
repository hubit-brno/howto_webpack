import React from 'react';
import { connect } from 'react-redux';

class Detail extends React.Component {

	render() {
		const { title, desc } = this.props.beer;
		return (
			<div>
				<small>Yes boss</small>
				<br/><br/>
				<b>{ title }</b>
				<p>{ desc }</p>
			</div>
		);
	}

}

export default connect(
	(state) => {
		return {
			beer: state.beer.items.find((beer) => { return state.beer.selectedId === beer.id })
		}
	},
	(dispatch) => {
		return {}
	}
)(Detail);
