// import {
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TablePagination,
//   TableRow,
//   TableSortLabel,
// } from '@mui/material'
// import { Box } from '@mui/system'
// import { TablePaginationUnstyled } from '@mui/base'
// import { visuallyHidden } from '@mui/utils'
// import { useState } from 'react'
// import PropTypes from 'prop-types'
// import { CancelAppointment } from './cancel-appointment'

// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1
//   }
//   return 0
// }

// const columns = [
//   { id: 'date', label: 'Date', minWidth: 100, align: 'center' },
//   { id: 'time', label: 'Time', minWidth: 100, align: 'center' },
//   { id: 'to', label: 'To', minWidth: 100 },
//   { id: 'cancel', label: 'Cancel', minWidth: 100, align: 'center' },
// ]

// const headCells = [
//   { id: 'date', label: 'Date', numeric: false, disablePadding: false },
//   { id: 'time', label: 'Time', numeric: false, disablePadding: false },
//   { id: 'to', label: 'To', numeric: false, disablePadding: false },
//   { id: 'cancel', label: 'Cancel', disablePadding: false, numeric: false },
// ]

// function getComparator(order, orderBy) {
//   return order === 'desc'
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy)
// }

// function stableSort(array, comparator) {
//   const stabilizedThis = array.map((el, index) => [el, index])
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0])
//     if (order !== 0) {
//       return order
//     }
//     return a[1] - b[1]
//   })
//   return stabilizedThis.map((el) => el[0])
// }

// function EnhancedTableHead(props) {
//   // const {  order, orderBy, onRequestSort } = props;
//   const {
//     onSelectAllClick,
//     order,
//     orderBy,
//     numSelected,
//     rowCount,
//     onRequestSort,
//   } = props
//   const createSortHandler = (property) => (event) => {
//     onRequestSort(event, property)
//   }

//   return (
//     <TableHead>
//       <TableRow>
//         {headCells.map((headCell) => (
//           <TableCell
//             key={headCell.id}
//             align={'center'}
//             padding={headCell.disablePadding ? 'none' : 'normal'}
//             sortDirection={orderBy === headCell.id ? order : false}
//           >
//             {headCell.id !== 'cancel' ? (
//               <TableSortLabel
//                 active={orderBy === headCell.id}
//                 direction={orderBy === headCell.id ? order : 'asc'}
//                 onClick={createSortHandler(headCell.id)}
//               >
//                 {headCell.label}
//                 {orderBy === headCell.id ? (
//                   <Box component="span" sx={visuallyHidden}>
//                     {order === 'desc'
//                       ? 'sorted descending'
//                       : 'sorted ascending'}
//                   </Box>
//                 ) : null}
//               </TableSortLabel>
//             ) : null}
//           </TableCell>
//         ))}
//       </TableRow>
//     </TableHead>
//   )
// }

// EnhancedTableHead.propTypes = {
//   numSelected: PropTypes.number.isRequired,
//   onRequestSort: PropTypes.func.isRequired,
//   onSelectAllClick: PropTypes.func.isRequired,
//   order: PropTypes.oneOf(['asc', 'desc']).isRequired,
//   orderBy: PropTypes.string.isRequired,
//   rowCount: PropTypes.number.isRequired,
// }

// export function AppointmentTable({
//   appointments,
//   cancelAppointment,
//   openCancelModal,
//   closeCancelModal,
//   openId,
//   open,
// }) {
//   const [order, setOrder] = useState('desc')
//   const [orderBy, setOrderBy] = useState('date')
//   const [page, setPage] = useState(0)
//   const [selected, setSelected] = useState([])
//   const [dense, setDense] = useState(false)
//   const [rowsPerPage, setRowsPerPage] = useState(5)

//   const rows = appointments.map((appointment) =>
//     createData(appointment._id, +appointment.date, appointment.doctor.fullname)
//   )

//   const handleRequestSort = (event, property) => {
//     const isAsc = orderBy === property && order === 'asc'
//     setOrder(isAsc ? 'desc' : 'asc')
//     setOrderBy(property)
//   }

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage)
//   }

//   function createData(id, timestamp, name) {
//     const { date, time } = getDate(timestamp)
//     const to = `Dr.${name}`
//     const cancel = (
//       <button
//         key={id}
//         className="cancel-btn"
//         onClick={() => openCancelModal(id)}
//       >
//         Cancel{' '}
//       </button>
//     )
//     return { date, time, to, cancel }
//   }

//   function getDate(timestamp) {
//     let date = new Date(timestamp)
//     const day = date.getDate()
//     const month = date.getMonth() + 1
//     const year = date.getFullYear()
//     const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
//     const minute =
//       date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
//     return { date: `${day}/${month}/${year}`, time: `${hour}:${minute}` }
//   }

//   const emptyRows =
//     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

//   return (
//     <>
//     <Box sx={{ width: '100%' }}>
//       <Paper sx={{ width: '100%', mb: 2 }}>
//         <TableContainer>
//           {openId && (
//             <CancelAppointment
//               open={open}
//               closeCancelModal={closeCancelModal}
//               cancelAppointment={cancelAppointment}
//               openId={openId}
//             />
//           )}
//           <Table sx={{ minWidth: 750 }} aria-label="tableTitle">
//             <EnhancedTableHead
//               order={order}
//               orderBy={orderBy}
//               onRequestSort={handleRequestSort}
//               rowCount={rows.length}
//             />
//             {/* <TableHead>
//           <TableRow>
//             {columns.map((column) => (
//               <TableCell
//                 key={column.label}
//                 align={column.align}
//                 style={{ minWidth: column.minWidth }}
//               >
//                 {column.label}
//               </TableCell>
//             ))}
//           </TableRow>
//         </TableHead> */}
//             <TableBody>
//               {stableSort(rows, getComparator(order, orderBy))
//                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map((row,idx) => {
//                   return (
//                     <TableRow hover tabIndex={-1} key={row.time}>
//                           <TableCell
//                             key={idx}
//                             align={'center'}
//                             scope="row"
//                             align="center"
//                             component="th"
//                             style={{ minWidth: 100 }}
//                           >
//                             {row.date}
//                           </TableCell>
//                           <TableCell align="center">
//                                 {row.time}
//                           </TableCell>
//                           <TableCell align="center">
//                               {row.to}
//                           </TableCell>
//                           <TableCell align="center">
//                             {row.cancel}
//                           </TableCell>
//                     </TableRow>
//                         )
                  
//                 })}
//               {emptyRows > 0 && (
//                 <TableRow
//                   style={{
//                     height: 53 * emptyRows,
//                   }}
//                 >
//                   <TableCell colSpan={6} />
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <TablePagination
//           className="table-pagination"
//           component="div"
//           count={rows.length}
//           rowsPerPage={rowsPerPage}
//           rowsPerPageOptions={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//         />
//       </Paper>
//     </Box>
//     </>
//   )
// }



////



import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import { visuallyHidden } from '@mui/utils';
import { CancelAppointment } from './cancel-appointment'

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'date', label: 'Date', numeric: false, disablePadding: false },
  { id: 'time', label: 'Time', numeric: false, disablePadding: false },
  { id: 'to', label: 'To', numeric: false, disablePadding: false },
  { id: 'cancel', label: 'Cancel', disablePadding: false, numeric: false },
]
function EnhancedTableHead(props) {
    const {
        order,
        orderBy,
        onRequestSort,
    } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox"></TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={'center'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        {headCell.id !== 'cancel' ? (
                            <TableSortLabel
                                active={orderBy === headCell.id}
                                direction={
                                    orderBy === headCell.id ? order : 'asc'
                                }
                                onClick={createSortHandler(headCell.id)}
                            >
                                {headCell.label}
                                {orderBy === headCell.id ? (
                                    <Box component="span" sx={visuallyHidden}>
                                        {order === 'desc'
                                            ? 'sorted descending'
                                            : 'sorted ascending'}
                                    </Box>
                                ) : null}
                            </TableSortLabel>
                        ) : null}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

export function AppointmentTable({
  appointments,
  cancelAppointment,
  openCancelModal,
  closeCancelModal,
  openId,
  open,
}) {
    const [order, setOrder] = useState('desc');
    const [orderBy, setOrderBy] = useState('date');
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [dense, setDense] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    
      function getDate(timestamp) {
    let date = new Date(timestamp)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    const minute =
      date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    return { date: `${day}/${month}/${year}`, time: `${hour}:${minute}` }
  }
 

    function createData(id, timestamp, name) {
          const { date, time } = getDate(timestamp)
          const to = `Dr.${name}`
          const cancel = (
            <button
              key={id}
              className="cancel-btn"
              onClick={() => openCancelModal(id)}
            >
              Cancel{' '}
            </button>
          )
          return { date, time, to, cancel ,id}
        }

        const rows = appointments.map((appointment) =>
        createData(appointment._id, +appointment.date, appointment.doctor.fullname)
      )

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Paper sx={{ width: '100%', mb: 2 }}>
                {openId && (
            <CancelAppointment
              open={open}
              closeCancelModal={closeCancelModal}
              cancelAppointment={cancelAppointment}
              openId={openId}
            />
          )}
                    <TableContainer>
                        <Table
                            sx={{ minWidth: 750 }}
                            aria-labelledby="tableTitle"
                            size={dense ? 'small' : 'medium'}
                        >
                            <EnhancedTableHead
                                numSelected={selected.length}
                                order={order}
                                orderBy={orderBy}
                                onSelectAllClick={handleSelectAllClick}
                                onRequestSort={handleRequestSort}
                                rowCount={rows.length}
                            />
                            <TableBody>
                                {stableSort(rows, getComparator(order, orderBy))
                                    .slice(
                                        page * rowsPerPage,
                                        page * rowsPerPage + rowsPerPage
                                    )
                                    .map((row, index) => {
                                        const isItemSelected = isSelected(
                                            row.date
                                        );
                                        const labelId = `enhanced-table-checkbox-${index}`;
                                        return (
                                            <TableRow
                                                hover
                                                onClick={(event) =>
                                                    handleClick(event, row.name)
                                                }
                                                role="checkbox"
                                                aria-checked={isItemSelected}
                                                tabIndex={-1}
                                                key={row.id}
                                                selected={isItemSelected}
                                            >
                                                <TableCell padding="checkbox"></TableCell>
                                                <TableCell
                                                    component="th"
                                                    id={labelId}
                                                    scope="row"
                                                    align="center"
                                                >
                                                    {row.date}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {row.time}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {row.to}
                                                </TableCell>

                                                <TableCell align="center">
                                                        {row.cancel}
                                                    </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                {/* {emptyRows > 0 && (
                                    <TableRow
                                        style={{
                                            height:
                                                (dense ? 33 : 53) * emptyRows,
                                        }}
                                    >
                                        <TableCell colSpan={6} />
                                    </TableRow>
                                )} */}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        className="table-pagination"
                        rowsPerPageOptions={[]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </Box>
        </>
    );
}
