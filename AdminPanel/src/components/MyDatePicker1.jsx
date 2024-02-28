import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function MyDatePicker1(){
    const [selectedDate, setSelectedDate] = useState(null)
    return (
        <DatePicker
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            dateFormat='dd/MM/yyyy'
            minDate={new Date()}
            showYearDropdown
            scrollableYearDropdown
        />
    )
}

export default MyDatePicker1