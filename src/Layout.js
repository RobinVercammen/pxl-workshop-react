import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import DashboardPage from './dashboard/dashboard.page';
import CaloriesPage from './calories/calories.page';
import HabitsPage from './habits/habits.page';
import SettingsPage from './settings/settings.page';
import WeightPage from './weight/weight.page';
import Store from './common/store';

class Layout extends Component {
    constructor() {
        super();
        this.unsubcribe = Store.subscribe(() => {
            const title = Store.getState().title;
            this.setState({ title });
        });
        this.state = { drawerOpen: false, title: '' };
    }
    toggleState = () => {
        const currentState = this.state.drawerOpen;
        this.setState({ drawerOpen: !currentState });
    }
    render() {
        return (
            <Router>
                <div>
                    <AppBar
                        title={this.state.title}
                        onLeftIconButtonTouchTap={this.toggleState}
                    />
                    <Drawer open={this.state.drawerOpen}>
                        <MenuItem onClick={this.toggleState} >
                            <Link to="/">Dashboard</Link>
                        </MenuItem>
                        <MenuItem onClick={this.toggleState} >
                            <Link to="/weight">Weight</Link>
                        </MenuItem>
                        <MenuItem onClick={this.toggleState} >
                            <Link to="/calories">Calories</Link>
                        </MenuItem>
                        <MenuItem onClick={this.toggleState} containerElement={
                            <Link to="/habits"></Link>
                        }>
                            Habits
                        </MenuItem>
                        <MenuItem onClick={this.toggleState} >
                            <Link to="/settings">Settings</Link>
                        </MenuItem>
                    </Drawer>
                    <Route exact={true} path="/" component={DashboardPage} />
                    <Route path="/calories" component={CaloriesPage} />
                    <Route path="/habits" component={HabitsPage} />
                    <Route path="/settings" component={SettingsPage} />
                    <Route path="/weight" component={WeightPage} />
                </div>
            </Router>
        );
    }
    componentWillUnmount() {
        this.unsubcribe();
    }
}

export default Layout;
