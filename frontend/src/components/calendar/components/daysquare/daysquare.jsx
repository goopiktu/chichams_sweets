import React from 'react';
import { useState, useEffect } from 'react';

import '../daysquare/daysquare.css';

function DaySquare({day, month, year, selectOrderDate}){

        const [isValidDay, setIsValidDay] = useState(true);
        const [isValidMonth, setIsValidMonth] = useState(true);
        const [isValidDate, setIsValidDate] = useState(true);
        const [alertMessage, setAlertMessage] = useState('Date is unavailable, pick another date.');

        useEffect(() => {
                const currentDate = new Date();
                const dayOfSquare = new Date(year, month, day);

                if(dayOfSquare.getMonth() === currentDate.getMonth() &&
                   day <= currentDate.getDate() + 7){
                        setIsValidDay(false);
                        setAlertMessage("Please order 7 days from the current date.");
                }
                else{
                        setIsValidDay(true);
                }

                if(dayOfSquare.getMonth() === currentDate.getMonth()){
                        setIsValidMonth(false);
                }

                else{
                        setIsValidMonth(true);
                }

                if(!isValidDay && !isValidMonth){
                        setIsValidDate(false);
                }

                else{
                        setIsValidDate(true);
                }

                if(dayOfSquare.getDay() === 0){
                        setIsValidDate(false);
                }
        }, [isValidDay, isValidMonth, isValidDate, day, month, year])

        return(
               <div className="day-square" style={{backgroundColor: isValidDate ? 'white' : 'lightgray'}} onClick={(e) => {
                if(!isValidDate){
                        e.preventDefault();
                        alert(alertMessage);
                }else{
                        selectOrderDate(new Date(year, month, day));
                }
               }}>
                        <div className="day-number-div">
                                <p className="day-number">{day}</p>
                        </div>
               </div>
        )
}

export default DaySquare;
