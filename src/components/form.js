import React from 'react';

export default class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.weather}>
                <input type="text" name="city" placeholder="City" />
                <button type="submit">Get Weather</button>
            </form>
        )
    }
}