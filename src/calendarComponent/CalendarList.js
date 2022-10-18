import { useState } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import moment from 'moment';

const CalendarList = () => {
    const [value, onChange] = useState(new Date());

    // const {data} = 

    return (
    <div>
        <Calendar 
            onChange={onChange} 
            value={value} 
            formatDay={(locale, date) => moment(date).format("DD")}
            tileContent={({date, view}) => {
                return (
                    <>
                        <div>1</div>
                    </>
                )
            }}
        />
    </div>
    );
}

export default CalendarList;