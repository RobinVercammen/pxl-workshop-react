import React, { Component } from 'react';
import CaloriesTable from './calories-table';
import HttpService from '../common/http-service';
import { connect } from "react-redux";
import mapDispatchToPropsTitle from '../common/title-dispatch-to-props';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Link } from 'react-router-dom';

class CaloriesPage extends Component {
    componentWillMount() {
        HttpService.getCalories().then(fetchedEntries => this.props.setEntries(fetchedEntries))
    }
    render() {
        const fetchedEntries = this.props.calorieEntries;
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

const mapStateToProps = (state, ownProps) => {
    return {
        calorieEntries: state.calorieEntries,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        ...mapDispatchToPropsTitle(dispatch, ownProps),
        setEntries: (entries) => {
            dispatch({ type: 'SET_CALORIEENTRIES', payload: entries });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CaloriesPage);
