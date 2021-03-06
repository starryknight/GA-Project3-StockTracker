import React, { Component } from 'react'
import Button from './styledComponents/Button.js'
import DisplayTitle from './styledComponents/DisplayTitle.js'

class userDisplay extends Component{

    render(){
        let newUserProps = this.props.user
        let handleUserLogout = this.props.handleUserLogout
        let handleUserDelete = this.props.handleUserDelete
        return(
            <div>
            <DisplayTitle>User: {newUserProps.userName}</DisplayTitle>
                <div> 
                    <br></br>
                    <input 
                        type="text" 
                        value={this.props.newUserName}
                        onChange={this.props.handleUserNameChange}
                    />
                    <Button onClick={this.props.handleUserNameUpdate}>Edit User Name</Button>
                    <br></br>
                    <Button onClick={handleUserLogout}>Log Out</Button>
                    <br></br>
                    <Button onClick={handleUserDelete}>Delete this user</Button>
                </div>
            </div>
        )
    }
};

export default userDisplay;