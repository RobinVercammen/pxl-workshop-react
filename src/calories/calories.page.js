import React, { Component } from 'react';
import CaloriesTable from './calories-table';
import HttpService from '../common/http-service';
import { connect } from "react-redux";
import mapDispatchToProps from '../common/title-dispatch-to-props';

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
    componentDidMount() {
        this.props.setTitle('Calories');
    }    
}

export default connect(undefined, mapDispatchToProps)(CaloriesPage);
