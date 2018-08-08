import React from 'react';

export default class NewAccount extends React.Component {
	constructor(props){
		super(props);
	}

	handleSubmit() {
		if (this.isUserEntryValid() === false) 
			return
		
	}

	handleAccountNameChange(e) {}

	handleWebSiteChange(e) {}

	handleUserIdChange(e) {}

	handlePasswordChange(e) {}

	isUserEntryValid() {
		return true;
	}

	render() {
		return(<form>
					<div className="formGroup">
						<label htmlFor="accountName">Account Name</label>
						<input type="text" class="form-control" id="accountName" placeholder="Account Name" onChange={this.handleAccountNameChange.bind(this)}/>
					</div>

					<div className="formGroup">
						<label htmlFor="website">Website</label>
						<input type="text" class="form-control" id="website" placeholder="Website" onChange={this.handleWebSiteChange.bind(this)}
					</div>
					
					<div className="formGroup">
						<label htmlFor="userid">User ID</label>
						</input type="text" id="userid" class="form-control" placeholder="User ID" onChange={this.handleUserIdChange.bind(this)}
					</div>

					<div className="formGroup">
						<label htmlFor="password">Password</label>
						<input type="text" class="form-control" id="password" placeholder="Password" onChange={this.handlePasswordChange.bind(this)}
					</div>

					<button type="button" className="btn btn-default" onLick={()=> this.handleSubmit()}>Submit</button>	
			   </form>
			);
	}

}