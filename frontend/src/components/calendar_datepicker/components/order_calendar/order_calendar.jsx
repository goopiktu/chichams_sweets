/*
TODO:
- Implement restrictions for disabled tiles
- Integrate with Form
*/

// Dependencies
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';

// CSS
import './order_calendar.css';
import 'react-calendar/dist/Calendar.css';

function OrderCalendar({orderDate, setOrderDate}) {
        const [date, setDate] = useState(orderDate);

        // Calendar Functions
        const onChange = (date) => {
                setDate(date)

                setOrderDate(date);
        };

        // Helper Functions
        const isSunday = (date) => {
                if(date.getDay() === 0)
                        return true;
                else
                        return false;
        }

        const isPrevDate = (calendarDate) => {
                if(calendarDate < orderDate)
                        return true;
                else
                        return false;
        }

        // Main Date Blocker


        return(
               <Calendar
                        className="order-calendar"
                        onChange={onChange}
                        value={date}
                        tileDisabled={({date}) => isSunday(date) || isPrevDate(date)}
               />
        );
}

export default OrderCalendar;
