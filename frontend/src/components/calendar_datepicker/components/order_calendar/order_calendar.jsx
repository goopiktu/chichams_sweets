/*
TODO:
        - Implement restrictions for disabled tiles (ORDER LIMIT)
*/

// Dependencies
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';

// CSS
import './order_calendar.css';
import 'react-calendar/dist/Calendar.css';

function OrderCalendar({orderDate, setOrderDate}) {
        const [date, setDate] = useState(orderDate);
        const [refDate, setRefDate] = useState('');

        // useEffect on component render, sets value of refDate to initial value of orderDate
        useEffect(() => {

                setRefDate(orderDate); // set reference date


        }, [])

        useEffect(() => {

                if(date === refDate)
                        console.log('same date');
        }, [date])

        // Calendar Functions
        const onChange = (date) => {
                setDate(date);
                setOrderDate(date);
        };

        // Helper Functions

        // Function to find invalid dates (closed on sundays)
        const isSunday = (date) => {
                if(date.getDay() === 0)
                        return true;
                else
                        return false;
        }

        // Function to find invalid dates (dates previous to the current date)
        const isPrevDate = (date) => {
                if(date < refDate)
                        return true;
                else
                        return false;
        }

        // Function to find invalid dates (dates with order limit)
        const isFullToday = (calendarDate) => {

                // TODO: Implement logic (given array of all order dates, if calendarDate has occured atleast n times, return true, else false)
                // note: n = order limit for a day

                return false;
        }

        // Function to determine what dates will be blocked out by calendar
        const isValidDate = (calendarDate) => {
                if(isPrevDate(calendarDate) || isSunday(calendarDate))
                        return true;
                else
                        return false;
        }


        return(
               <Calendar
                        className="order-calendar"
                        onChange={onChange}
                        value={date}
                        tileDisabled={({date}) => isValidDate(date)}
               />
        );
}

export default OrderCalendar;
