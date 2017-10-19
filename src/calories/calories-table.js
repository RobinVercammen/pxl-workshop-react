import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

const Row = (props) => (
    <TableRow key={props.entry.date}>
        <TableRowColumn>{props.entry.date}</TableRowColumn>
        <TableRowColumn>{props.entry.weight}</TableRowColumn>
    </TableRow>
)

const Rows = (props) => props.entries.map(e => (
    <Row entry={e} />
));

const CaloriesTable = (props) => (
    <Table>
        <TableHeader>
            <TableRow>
                <TableHeaderColumn>Date</TableHeaderColumn>
                <TableHeaderColumn>Calories</TableHeaderColumn>
            </TableRow>
        </TableHeader>
        <TableBody>
            <Rows entries={props.entries} />
        </TableBody>
    </Table>
)


export default CaloriesTable;
