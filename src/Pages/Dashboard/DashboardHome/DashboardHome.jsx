import { Grid } from '@mui/material';
import * as React from 'react';
import Appoinments from '../Appoinments/Appoinments';
import Calendar from '../../Shared/Calendar/Calendar';

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date());

    return (
        <Grid container spacing={2}>
        <Grid item xs={12} sm={5}>
          <Calendar
           date={date}
           setDate={setDate}>

          </Calendar>
        </Grid>
        <Grid item xs={12} sm={7}>
            <Appoinments date={date}></Appoinments>
        </Grid>
    </Grid>
    );
};

export default DashboardHome;