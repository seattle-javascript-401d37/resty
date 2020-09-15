import React from 'react';

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            url: '',
            method: 'get',
        };
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = async e => {
        e.preventDefault();

        try {

            //   this.props.toggleLoading();

            let options = {
                method: this.state.method,
            };

            let raw = await fetch(this.state.url, options);

            let data = await raw.json();

            let headers = {};
            raw.headers.forEach((val, key) => headers[key] = val);

            this.props.onSubmit(headers, data);

            //   this.props.toggleLoading();

        } catch (e) {
            console.log(e);
        }

    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text" name="url" placeholder="http://api.url.here" onChange={this.handleChange} />
                    <button>GO!</button>
                </div>
                <div>
                    <label>
                        <input type="radio" name="method" value="get" onChange={this.handleChange} />GET
          </label>
                    <label>
                        <input type="radio" name="method" value="post" onChange={this.handleChange} />POST
          </label>
                    <label>
                        <input type="radio" name="method" value="put" onChange={this.handleChange} />PUT
          </label>
                    <label>
                        <input type="radio" name="method" value="delete" onChange={this.handleChange} />DELETE
          </label>
                </div>
            </form >
        );
    }
}

export default Form;
