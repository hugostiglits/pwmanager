import React from 'react';

export default class ModifyAccount extends React.Component {
	constructor(props) {
		super(props);
	}

	handleAccountNameChange(e){}
	handleWebsiteChange(e){}
	handleUserIdChange(e){}
	handlePasswordChange(e){}

	handleSubmit() {
		if (this.isUserEntryValid() === false ) 
			return;
	}

	isUserEntryValid() {
		return true;
	}

	render() {



		return(<form>
					<div className="formGroup">
						<label htmlFor="accountName">Account Name</label>
						<input type="text" className="form-control" id="accountName" placeholder="Account Name" onChange={this.handleAccountNameChange.bind(this)}/>
					</div>

					<div className="formGroup">
						<label htmlFor="website">Website</label>
						<input type="text" className="form-control" id="website" placeholder="Website" onChange={this.handleWebsiteChange.bind(this)}/>
					</div>
					<div className="formGroup">
						<label htmlFor="userid">User ID</label>
						<input type="text" className="form-control" id="userid" placeholder="User ID" onChange={this.handleUserIdChange.bind(this)}/>
					</div>
					<div className="formGroup">
						<label htmlFor="password">Password</label>
						<input type="text" className="form-control" id="password" placeholder="PAssword" onChange={this.handlePasswordChange.bind(this)}/>
					</div>
					<button type="button" className="btn btn-default" onClick={()=> this.handleSubmit()}>Submit</button>
			);
	}
}