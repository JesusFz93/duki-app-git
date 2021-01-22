import React, {useMemo} from 'react'
import { useSelector } from 'react-redux'
import {useTable} from 'react-table'
import {COLUMNS} from './columns'
import INFO_DATA from './INFO_DATA.json'


export const BasicTable = () => {

    const { notes } = useSelector( state => state.elred );

    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => INFO_DATA, []);

    const tableInstance = useTable({
        columns,
        data
    })

    const { getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow } = tableInstance;

    

    return (
        <table {...getTableProps()} className="table">
            <thead className="thead-dark">
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
                
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                        <tr{...row.getRowProps()}>
                        {row.cells.map((cell)=>{
                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        })}
                            
                        </tr>
                        )
                    })
                }
            </tbody>
            <tfoot className="thead-dark">
                {
                    footerGroups.map((footerGroup) => (
                        <tr {...footerGroup.getFooterGroupProps()}>
                            {
                                footerGroup.headers.map((column) => (
                                    <td {...column.getFooterProps}>{column.render('Footer')}</td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tfoot>
        </table>
    )
}
