import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import axios from 'axios';


//
// const axiosSearch =
//  axios.get('http://localhost:9090/referral').then(function(data)
// {console.log(data)});


class App extends Component {
    constructor(props){
        super(props);
        this.state = {referrals: []};

        axios.get('http://localhost:9090/referral').then(function(data)
       {
           console.log(data);
           this.setState({referrals:data})
       });
    }

    render() {
    return (
        <div>
            <SearchBar />
        </div>
)
}
}


ReactDOM.render(
    <App />, document.querySelector('.container')
)
