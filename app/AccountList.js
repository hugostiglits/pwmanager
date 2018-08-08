import React from 'react';

export default class AccountList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(<table className="table table-striped">
			<thead>
				<tr>
					<th>Account</th>
					<th>User ID</th>
					<th>Password</th>
					<th></th>
				<tr>
			</thead>
			</table>
		);
	}
}