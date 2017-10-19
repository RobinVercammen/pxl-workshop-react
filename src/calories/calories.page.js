import React, { Component } from 'react';
import CaloriesTable from './calories-table';
import HttpService from '../common/http-service';
import { connect } from "react-redux";
import mapDispatchToProps from '../common/title-dispatch-to-props';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Link } from 'react-router-dom';

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
            <div>
                <CaloriesTable entries={fetchedEntries} />
                <Link to="/calories/add">
                    <FloatingActionButton style={{ position: 'absolute', right: '15px', bottom: '15px' }}>
                        <ContentAdd />
                    </FloatingActionButton>
                </Link>
            </div>
        );
    }
    componentDidMount() {
        this.props.setTitle('Calories');
    }
}

export default connect(undefined, mapDispatchToProps)(CaloriesPage);
