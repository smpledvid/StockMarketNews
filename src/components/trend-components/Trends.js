import React from 'react'
import DailyTrend from './DailyTrend'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import HourlyTrend from './HourlyTrend';
// import { type } from 'os';
// import FormLabel from '@material-ui/core/FormLabel';

const Trends = ({stocks}) => {

    // handle changes to stock interval comparison
    const [interval, setInterval] = React.useState("daily")
    function handleChange(event) {
        setInterval(event.target.value);
    }

    return (
        <div style={{display:"center"}}>
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
                </RadioGroup>
            </FormControl>
            <ul style={{'listStyleType':'none'}}>
                {
                    stocks.map( stock => {
                        if (interval === 'daily') {
                            return (
                                <DailyTrend key={stock} stock={stock}/>
                            );
                        }
                        else if (interval === 'hourly') {
                            return (
                                <HourlyTrend key={stock} stock={stock}/>
                            );
                        }
                        else {
                            return (
                                <p>default</p>
                            )
                        }
                    })
                }
            </ul>
        </div>
    )
}

export default Trends