import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import PropTypes from 'prop-types';

class CaloriesTable extends Component {
    render() {
        const rows = this.props.entries.map(e => (
            <TableRow key={e.date}>
                <TableRowColumn>{e.date}</TableRowColumn>
                <TableRowColumn>{e.weight}</TableRowColumn>
            </TableRow>
        ));
        return (
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>Date</TableHeaderColumn>
                        <TableHeaderColumn>Calories</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {rows}
                </TableBody>
            </Table>
        );
    }
}

CaloriesTable.propTypes = {
    entries: PropTypes.array.isRequired
}

export default CaloriesTable;
