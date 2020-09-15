import React from 'react'

import './Form.scss'

export default class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            url: '',
            method: 'get',
            submitted: false,
        }
    }

    changeHandler = event => {
        this.setState({url: event.target.value, submitted:false});
    }

    goClickHandler = event => {
        this.setState({submitted:true});
    }

    setMethod(method) {
        this.setState({method, submitted:false});
    }

    render() {
        return (
            <div className="Form">
                <h3>URL:<input onChange={this.changeHandler} /></h3>
                <button onClick={() => this.setMethod('get')}>GET</button>
                <button onClick={() => this.setMethod('post')}>POST</button>
                <button onClick={() => this.setMethod('put')}>PUT</button>
                <button onClick={() => this.setMethod('delete')}>DELETE</button>


                <button onClick={this.goClickHandler}>GO!</button>

                {this.state.submitted &&
                <section>
                    <h3>URL: {this.state.url}</h3>
                    <h3>method: {this.state.method}</h3>
                </section>
                }
            </div>
        )
    }
}
