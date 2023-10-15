import React from "react";
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Form = () => {

    const [dateOrdered, setDateOrdered] = useState(null);
    const [name, setName] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [fbLink, setfbLink] = useState('');
    const [mode, setMode] = useState('Deliver');
    const [orderDes, setOrderDes] = useState('');

    const handleName = (e) => {
      setName(e.target.value);
    };

    const handleContactNo = (e) => {
      setContactNo(e.target.value);
    }

    const handlefbLink = (e) => {
      setfbLink(e.target.value);
    }

    const handleMode = (e) => {
      setMode(e.target.value);
    };

    const handleDateOrdered = (date) => {
      setDateOrdered(date);
    };

    const handleOrderDes = (e) => {
      setOrderDes(e.target.value);
    };


    const handleSubmit = (e) => {
      e.preventDefault();

      const formData = {
        name: name,
        contactNo: contactNo,
        fbLink: fbLink,
        mode: mode,
        orderDes: orderDes,
        dateOrdered: dateOrdered,
        
      };

      console.log(formData);

      fetch('http://localhost:4000/postOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

        .then((response) => {
          if (response.ok) {
            console.log('Successfully inserted one document');
          } else {
            console.error('Insert one document failed');
          }
        })
        .catch((error) => {
          console.error('An error occurred: ', error);
        });
    };

    // const handleDateChange = (date) => {
    //   setValue('dateOrdered', date, {shouldValidate: true});
    // };

    // const selectedDate = watch('date');

    return (
        
        <div className="App">
          <form onSubmit={handleSubmit} > {/*add method post*/}
            <div className="form-control">
              <label>Name</label>
              <input type="text" name="name" value={name} onChange={handleName} />
            </div>

            <div className="form-control">
              <label>Contact No</label>
              <input type="text" name="contactNo" value={contactNo} onChange={handleContactNo} />
            </div>

            <div className="form-control">
              <label>Facebook Link</label>
              <input type="text" name="fbLink" value={fbLink} onChange={handlefbLink} />
            </div>

            <select name="mode" onChange={handleMode} defaultValue={"Deliver"}>
                <option value="Deliver">Deliver</option>
                <option value="Pick-up">Pick-up</option>
            </select> 

            <div className="form-control">
              <label>Order Des</label>
              <input type="text" name="orderDes" value={orderDes} onChange={handleOrderDes} />
            </div>
    
            <div>
              <label>Select a date:</label>
              <DatePicker 
                selected={dateOrdered}
                onChange={handleDateOrdered}
              />
            </div>

            <div className="form-control">
              <label></label>
              <button type="submit">Submit</button>
            </div>

          </form>
        </div>
    );    
}

export default Form;