import { useEffect, useState } from "react";
import PopupCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Calendar() {
        const [selectedDate, setSelectedDate] = useState(new Date());
        const today = new Date();
        // today.setDate(today.getDate() + 5);

        const onChange = (date) => {
                setSelectedDate(date);
        }

        return(
                <div className="calendar-div">
                        <PopupCalendar
                                onChange={onChange}
                                value={selectedDate}
                                tileDisabled={({date}) => (date.getDay() === 0) || (date < new Date())}
                        />
                        {today.toDateString}
                </div>
        )
}

export default Calendar;
