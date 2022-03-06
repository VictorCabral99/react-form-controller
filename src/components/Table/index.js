import React from "react";
import { 
    TableContainer, 
    TableResponsive, 
    TableComponent,
    TableRow,
    TableHeadContainer,
    TableBodyContainer,
    TableHeadItem,
    TableBodyItem
} from '../../styled-components';

const Table = ({data}) => {
    return (
        <TableContainer>
            <TableResponsive>
                <TableComponent>
                    <TableHeadContainer>
                        <TableRow>
                            <TableHeadItem></TableHeadItem>
                        </TableRow>
                    </TableHeadContainer>
                    <TableBodyContainer>
                        <TableRow>
                            <TableBodyItem></TableBodyItem>
                        </TableRow>
                    </TableBodyContainer>
                </TableComponent>
            </TableResponsive>
        </TableContainer>
    )
}
export { Table };