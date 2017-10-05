import React, { Component } from 'react';
import CaloriesTable from './calories-table';
import HttpService from '../common/http-service';

class CaloriesPage extends Component {
    constructor() {
        super();
        this.state = { entries: [] };
    }
    componentWillMount() {
        HttpService.getCalories().then(fetchedEntries => this.setState({ entries: fetchedEntries }))
    }
    render() {
        const fetchedEntries = this.state.entries || [];
        return (
            <CaloriesTable entries={fetchedEntries} />
        );
    }
}

export default CaloriesPage;
