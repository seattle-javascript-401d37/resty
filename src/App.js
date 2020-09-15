import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header/';
import Form from './components/Form/';
import Footer from './components/Footer/';
import Results from './components/Results';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            headers: {},
            results: [],
        }

    }

    async fetchData() {
        const response = await axios.get('https://swapi.dev/api/people/');
        console.log(response.headers);
        console.log(response.data);
        this.setState({headers: response.headers, results: response.data.results, count: response.data.count});

    }

    submitHandler = (url, method) => {
        this.fetchData();
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Form onSubmit={this.submitHandler} />
                <Results
                    headers={this.state.headers}
                    results={this.state.results}
                    count={this.state.count}
                />
                <Footer />
            </div>
        );
    }
}

export default App;
