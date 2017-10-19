import React, { Component } from 'react';
import { connect } from "react-redux";
import mapDispatchToProps from '../common/title-dispatch-to-props';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import FlatButton from 'material-ui/FlatButton';
import HttpService from '../common/http-service';
import { Link } from 'react-router-dom';

class CaloriesAddPage extends Component {
    constructor() {
        super();
        this.state = { showMessage: false };
    }
    render() {
        const message = (
            <div>
                <span>Entry toegevoegd, klik <Link to='/calories'>hier</Link> om terug te gaan.</span>
            </div>
        );
        return (
            <div>
                <form onSubmit={this.save}>
                    <DatePicker hintText="Date" name="date" />
                    <TextField hintText="calories" name="calories" />
                    <FlatButton label="Default" type="submit" />
                </form>
                {this.state.showMessage ? message : null}
            </div>
        );
    }
    save = (ev) => {
        ev.preventDefault();
        const date = ev.target['date'].value;
        const calories = ev.target['calories'].value;
        HttpService.addCalorieEntry(date, calories).then(() => {
            this.setState({ showMessage: true });
        });
    }
    componentDidMount() {
        this.props.setTitle('Update Calorie Intake');
    }
}

export default connect(undefined, mapDispatchToProps)(CaloriesAddPage)
