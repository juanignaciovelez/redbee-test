import React, { Component } from 'react';
import './App.css';
import User from './User'
class UsersList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            userlist : []
        };
    }

    componentDidMount() {
        var url = "http://localhost:8080/weatherapi/rest/weather/users";
        fetch(url).then((responseText) => {

            var response = responseText.json();

            response.then(function(resp){
                this.setState({userlist:resp});
            }.bind(this));
        });
    }

    render(){
        const userlist = this.state.userlist.map( (user, i) => <User user={user} key={i} />);
        return (
            <div>
                {userlist}
            </div>
        );
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <UsersList/>
      </div>
    );
  }
}

export default App;
