// Dependencies
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCalendarDay} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

// CSS
import './calendar_datepicker.css';
import 'react-calendar/dist/Calendar.css';

// Helper Components
import DateHelp from './components/date_help/date_help.jsx';
import OrderCalendar from './components/order_calendar/order_calendar.jsx';

function CalendarDatepicker() {
        const [orderDate, setOrderDate] = useState(new Date());
        const [showHelp, setShowHelp] = useState(false);
        const [displayDate, setDisplayDate] = useState('');
        const [calendarVisibility, setCalendarVisibility] = useState(false);

        // Use Effect Statements
        useEffect(() =>{ // Runs once on render to get default date
                const defaultDay = new Date();
                const defaultDateDays = defaultDay.getDate() + 7;
                defaultDay.setDate(defaultDateDays);
                setOrderDate(defaultDay);
        }, []);

        useEffect(() =>{ // Runs everytime order date is updated

                getDisplayDate();
        }, [orderDate]);

        // Helper Functions
        const getMonthName = () => {
                const date = orderDate;
                const month = date.toLocaleDateString('default', {month: 'long'});

                return month;
        }

        const getDayOfWeek = () => {
                const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
                return days[orderDate.getDay()];
        }

        const getDisplayDate = () => {
                const displayDateYear = orderDate.getFullYear().toString();
                const displayDateMonth = getMonthName();
                const displayDateDay = orderDate.getDate();

                const displayDateString = displayDateMonth.concat(' ').concat(displayDateDay).concat(', ').concat(displayDateYear);
                setDisplayDate(displayDateString);
                console.log(displayDateString);
        }

        const toggleCalendar = () => {
                setCalendarVisibility(!calendarVisibility);
        }

        return(
                <div className="calendar-datepicker-div">
                        <div className="date-text-display">
                                <div className="date-text">
                                        Date
                                </div>

                                <div className="question-mark-circle-div">
                                        <div className="question-mark-circle" onMouseEnter={() => setShowHelp(true)} onMouseLeave={() => setShowHelp(false)}>
                                                ?
                                        </div>
                                        {showHelp ? <DateHelp/>: null}
                                </div>
                        </div>

                        <div className="date-picker-div">
                                <div className="date-container">
                                        {displayDate}
                                </div>

                                <div className="datepicker-button-div">
                                        <div className="datepicker-button" onClick={() => toggleCalendar()}>
                                                <FontAwesomeIcon icon={faCalendarDay} className="calendar-icon" style={{color: "#ffffff",}} />
                                        </div>
                                </div>
                        </div>

                        {calendarVisibility ? <OrderCalendar orderDate={orderDate} setOrderDate={setOrderDate}/>: null}
                </div>
        );
}

export default CalendarDatepicker;
