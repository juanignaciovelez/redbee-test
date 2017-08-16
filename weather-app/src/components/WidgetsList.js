import React, { Component } from 'react';
import Widget from './Widget'
import ReactDOM from 'react-dom';



class WidgetsList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            weatherlist:[]
        }
    }

    componentDidMount(){
        var url = "http://localhost:8080/weatherapi/rest/weather/board/juan";
        fetch(url).then((responseText) => {

            var response = responseText.json();

            response.then(function(resp){
                this.setState({weatherlist:resp});
            }.bind(this));
        });
    }

    render() {
        const list = this.state.weatherlist.map((weather, i) => <Widget weather={weather} key={i}/>);
        return (
            <div>
                {list}
            </div>
        );
    }
}
export default WidgetsList;

ReactDOM.render(<WidgetsList/>, document.getElementById('board'));