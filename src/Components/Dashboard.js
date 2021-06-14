import { Grid } from '@material-ui/core'
import { EjectOutlined, MoreHoriz } from '@material-ui/icons'
import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';


import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import LinearProgress from '@material-ui/core/LinearProgress';

import './Dashboard.css'


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));

const Tag = ({children}) => {
    return (
        <span>{children}</span>
    )
}

const Dashboard = () => {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const [age, setAge] = React.useState(1);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div className="dashboard">
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <div className="card">
                        <div>
                            Total Income <MoreHoriz />
                        </div>
                        <br />
                        <div>
                            <span>$124,563.00</span><Tag>+ 6.9%</Tag>
                        </div>
                    </div>
                    <div className="card">
                        <div>
                            New Users <MoreHoriz />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className="card">
                        <div>
                            <span> Balance</span>
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel id="demo-simple-select-outlined-label">Balance</InputLabel>
                                <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={age}
                                onChange={handleChange}
                                label="Balance"
                                >
                                <MenuItem value={1}>Weekly</MenuItem>
                                <MenuItem value={2}>Monthly</MenuItem>
                                <MenuItem value={3}>Yearly</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <LinearProgress variant="determinate" value={30} />
                        </div>

                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className="card">
                        <div><span>Racent Transactions</span><button className="export__button"><EjectOutlined /> Export </button></div>
                        
                    </div>
                </Grid>
            </Grid>
            
            
        </div>
    )
}

export default Dashboard
