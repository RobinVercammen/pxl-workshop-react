import React, { Component } from 'react';
import Store from '../common/store';

class WeightPage extends Component {
    render() {
        return (
            <h2>Weight</h2>
        )
    }
    componentDidMount() {
        Store.dispatch({ type: 'SET_TITLE', payload: 'Weight' });
    }
}

export default WeightPage;
