import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Attempts({ attempts }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: "lg" }} aria-label="simple table">

        <TableHead>
          <TableRow>
            <TableCell align="center">Nom</TableCell>
            <TableCell align="center">Guess utilisateur</TableCell>
            <TableCell align="center">Numero Random</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {
            attempts.map((attempt, i) => (
              <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="center">{attempt.name}</TableCell>
                <TableCell align="center">{attempt.guess}</TableCell>
                <TableCell align="center">{attempt.randomNumber}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>

      </Table>
    </TableContainer>
  )
}

export default Attempts
