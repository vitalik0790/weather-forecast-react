import React from 'react';

export default class Weather extends React.Component {
    render() {
        return (
            <div>
                <p>Location: {this.props.city}, {this.props.country}</p>
                <p>Temperature: morning - {this.props.tempMorning}, evening - {this.props.tempEvening}, night - {this.props.tempNight}</p>
                <p>Cloudiness: {this.props.cloudiness}</p>
            </div>
        )
    }
}