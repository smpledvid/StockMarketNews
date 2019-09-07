import React from 'react'
import Trend from './Trend'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';

const Trends = ({stocks}) => {

    var d = new Date();
    var lastWeekDay = d.getDate();
    // If today is a weekend, pull friday's date
    if (d.getDay() === 0 ){
        lastWeekDay = d.getDate() - 2;
    }
    else if (d.getDay() === 6) {
        lastWeekDay = d.getDate() - 1;
    }
    const date = d.getFullYear(0) + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + (lastWeekDay)).slice(-2);
    
    // handle changes to stock interval comparison
    const [interval, setInterval] = React.useState("")
    function handleChange(event) {
        setInterval(event.target.value);
    }

    return (
        <div style={{display:"center"}}>
            <h4>{date}</h4>
            <FormControl component="fieldset">
                <RadioGroup aria-label="position" name="position" value={interval} onChange={handleChange} row>
                    <FormControlLabel
                        value="daily"
                        control={<Radio color="primary" />}
                        label="Daily"
                    />
                    <FormControlLabel
                        value="hourly"
                        control={<Radio color="primary" />}
                        label="Hourly"
                    />
                    <FormControlLabel
                        value="minutes"
                        control={<Radio color="primary" />}
                        label="5 Minutes"
                    />
                </RadioGroup>
            </FormControl>
            <ul>
                {
                    stocks.map( stock => {
                    return (
                        <li key={stock}>
                            <Trend stock={stock} date={date}/>
                        </li>
                    );
                })}
            </ul>   
        </div>
    )
}

export default Trends