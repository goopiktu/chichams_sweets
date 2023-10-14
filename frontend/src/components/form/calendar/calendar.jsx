import React, { useState } from "react";
import { render } from "react-dom";
import Calendar from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const ReactCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  };

  return (
    <Calendar onChange={onChange} value={date}/>
  );
};

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },  
// });

export default ReactCalendar;