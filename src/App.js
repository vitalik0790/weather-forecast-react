import React from 'react';
import Form from './components/form';
import Info from './components/info'
import Weather from './components/weather';

const API_KEY = '04331ebc0b82ae7fed82fb7e0658d99c';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Info />
                <Form />
                <Weather />
            </div>
        )
    }
}