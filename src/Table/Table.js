import React, { Component } from "react";
import TableRow from "./TableRow";
// import data from "../data.js";


class Table extends Component {
    render() {
        const { data, columnNames  } = this.props; // array
        return (
            <table>
                {
                    data.map(dataRow => <TableRow columnNames={columnNames} row={dataRow}/>)
                }
            </table>
        )
    }
}

export default Table;