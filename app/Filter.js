import React from 'react';

export default class FilterAndAdd extends React.Component {
	constructor(props) {
		super(props);
	}

	onAdd(){}

	handleFilterChange(e) {}

	render() {
		return(<form>
			<div className="form-group col-md-4">
				<input type="text" clasName="form-control" id="filter" placeholder="Search" onChange={this.handleFilterChange.bind(this)}/>
			</div>
			<div className="col-md-2">
				<button type="button" className="btn btn-primary" onClick="{this.onAdd.bind(this)}">
					<span clasName="glyphicon glyphicon-plus" aria-hidden="true"></span>
				</button>
			</div>
			</form>);
	}
}