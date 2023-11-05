import React, { useEffect } from 'react';
import { useState } from 'react';

import '../datelist/datelist.css';
import { ChevronRight, ChevronLeft } from 'react-bootstrap-icons';

import DaySquare from '../daysquare/daysquare.jsx';

function Datelist({selectOrderDate}){

        const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
        const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
        const [numberOfDays, setNumberOfDays] = useState(new Date(0));

        const getDaysInMonth = () => {
                setNumberOfDays(new Date(currentYear, ((currentMonth + 1) % 12), 0).getDate());
        }

        const renderDaySquares = () => {
                const daySquares = Array.from({length: numberOfDays}, (_, i) => i + 1);
                return daySquares.map((daySquares, index) => <DaySquare key={daySquares} day={index + 1} month={currentMonth} year={currentYear} selectOrderDate={selectOrderDate}/>);
        };

        useEffect(() => {
                getDaysInMonth();
                renderDaySquares();
        }, [currentMonth, currentYear]);

        const handleNextMonthClick = () => {
                const nextMonthIndex = (currentMonth + 1) % 12
                setCurrentMonth(nextMonthIndex);

                if(currentMonth === 11){
                        setCurrentYear(currentYear + 1);
                        console.log('Year: ' + currentYear);
                        console.log('Month: ' + currentMonth);
                }

                console.log('Year: ' + currentYear);
                console.log('Month: ' + currentMonth);
        };

        const handlePrevMonthClick = () => {

                if(currentMonth === 0){
                        setCurrentYear(currentYear - 1);
                        setCurrentMonth(11);
                }

                if(currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear()){
                        document.querySelector('.prev-month-arrow').style.pointerEvents = 'none';
                }

                else{
                        const prevMonthIndex = (currentMonth - 1) % 12;
                        setCurrentMonth(prevMonthIndex);

                        console.log('Year: ' + currentYear);
                        console.log('Month: ' + currentMonth);
                }
        }

        return(
                <div className="datelist-div">
                        <div className="month-div">
                                <div className="prev-month-arrow">
                                        <ChevronLeft
                                                onClick={handlePrevMonthClick}
                                        />
                                </div>

                                <div className="month-name">
                                        <p className="month-label">{month[currentMonth]}</p>
                                </div>

                                <div className="next-month-arrow">
                                        <ChevronRight
                                                onClick={handleNextMonthClick}
                                        />
                                </div>
                        </div>

                        <div className="year-label">
                                <p className="year">{currentYear}</p>
                        </div>

                        <div className="datelist-divider"></div>

                        <div className="daylist">
                                {renderDaySquares()}
                        </div>
                </div>
        )
}

export default Datelist;
