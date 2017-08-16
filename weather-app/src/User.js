import React, { Component } from 'react';

class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username : props.user.username
        }
    }

    render(){
        return(
            <p><button className="btn btn-primary" type="button" onclick={this.update()}>{this.state.username}</button></p>
        );
    }
}

export default User;