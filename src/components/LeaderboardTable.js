import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { format } from 'date-fns';
import uniqid from 'uniqid';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    border: 'none',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    border: 'none',
    color: theme.palette.common.white,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#303030',
  },
  '&:nth-of-type(even)': {
    backgroundColor: '#242424',
  },
  '&:last-child td, &:last-child th': {},
}));

function createData(order, name, time, date) {
  return { order, name, time, date };
}

export default function LeaderboardTable(props) {
  const leaderboard = [...props.leaderboard];
  const rows = leaderboard.map((user) => {
    return createData(
      `${user.order}`,
      `${user.username}`,
      `${user.time}`,
      `${user.date}`
    );
  });

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 700, border: '3px solid #303030' }}
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">POSITION</StyledTableCell>
            <StyledTableCell>USERNAME</StyledTableCell>
            <StyledTableCell align="center">TIME (SECONDS)</StyledTableCell>
            <StyledTableCell align="center">DATE</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={uniqid()}>
              <StyledTableCell align="center">{row.order}</StyledTableCell>
              <StyledTableCell>{row.name}</StyledTableCell>
              <StyledTableCell align="center">{row.time}</StyledTableCell>
              <StyledTableCell align="center">
                {row.date === undefined
                  ? row.date
                  : format(new Date(row.date), "MMM dd',' yyyy")}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
