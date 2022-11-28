import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../hooks/useAuth';



const ShowAppoinments = ({date}) => {
    const {user} = useAuth();
    const [appoinments, setUseAppoinments] = useState([]);
   
   
    useEffect(() =>{
        const url =`https://docrefief-server.vercel.app/appointments?email=${user.email}&date=${date} `
        fetch (url)
        .then(res => res.json())
        .then(data => setUseAppoinments(data))
    }, [date]) /*date change hole abr call korbe*/
   
    return (
        <div>
           <h2>Appinments : {appoinments.length}</h2>
           <TableContainer component={Paper}>
      <Table sx={{ }} aria-label="Appionments table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Service</TableCell>
            <TableCell align="right">Action</TableCell>
          
           
          </TableRow>
        </TableHead>
        <TableBody>
          {appoinments.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.patientName}
              </TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.serviceName}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default ShowAppoinments;