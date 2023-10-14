import React from "react";
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Form = () => {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [mode, setMode] = useState('Deliver');
    const [dateOrdered, setDateOrdered] = useState(null);
    
    // const onSubmit = async (data) => {
    //     try{
    //       const response = await fetch('http://localhost:4000/postOrder', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(data),
    //       });

    //       if(response.ok){
    //         console.log('One document inserted to MongoDB');
    //       } else{
    //         console.log('Failed to insert one document to MongoDB');
    //       }
    //     } catch(error){
    //       console.error('Error saving data: ', error);
    //     }
    // };

    const handleFirstName = (e) => {
      setFname(e.target.value);
    };

    const handleLastName = (e) => {
      setLname(e.target.value);
    };

    const handleContactNo = (e) => {
      setContactNo(e.target.value);
    }

    const handleMode = (e) => {
      setMode(e.target.value);
    };

    const handleDateOrdered = (date) => {
      setDateOrdered(date);
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      const formData = {
        fname: fname,
        lname: lname,
        contactNo: contactNo,
        mode: mode,
        dateOrdered: dateOrdered
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
              <label>First Name:</label>
              <input type="text" name="fname" value={fname} onChange={handleFirstName} />
            </div>
            <div className="form-control">
              <label>Last Name:</label>
              <input type="text" name="lname" value={lname} onChange={handleLastName} />
            </div>  
            <div className="form-control">
              <label>Contact No:</label>
              <input type="text" name="contactNo" value={contactNo} onChange={handleContactNo} />
            </div>
           

            <select name="mode" onChange={handleMode} defaultValue={"Deliver"}>
                <option value="Deliver">Deliver</option>
                <option value="Pick-up">Pick-up</option>
            </select>

            {/* <div>
                <label>Select a date:</label>
                <DatePicker onChange={(date) => setValue('date', date, { shouldValidate: true })} value={selectedDate} clearIcon={null} />
            </div> */}

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

{/* <form id="order-form" action="/postOrder" method="post">
        <label for="fname">First Name: </label>
        <input type="text" id="fname" name="fname">

        <label for="lname">Last Name: </label>
        <input type="text" id="lname" name="lname">

        <label for="contactNo">Contact No: </label>
        <input type="text" id="contactNo" name="contactNo">

        <select name="mode" id="mode" name="mode">
            <option value="Deliver">Deliver</option>
            <option value="Pick-up">Pick-up</option>
        </select>

        <lavel for="date">Date:</lavel>
        <input type="date" id="delivery-date" name="deliveryDate">

        <input type="submit" value="Submit">
    </form> */}
export default Form;