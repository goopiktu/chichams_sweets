import React from 'react';
import '../sidebar/sidebar.css';
import CompanyLogo from '../../assets/company_logo.png';

function Sidebar({date}){
        return(
               <div className="sidebar-div">
                        <div className="company-logo-div">
                                <img src={CompanyLogo} className="company-logo"/>
                        </div>

                        <div className="calendar-date-div">
                                <div className="calendar-date-label">
                                        <p>Calendar</p>
                                </div>

                                <div className="calendar-date">
                                        {date}
                                </div>
                        </div>
               </div>
        );
}

export default Sidebar;
