import React from "react";
import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Navbar from '../navbar/navbar.jsx';
import './form.css';
import 'font-awesome/css/font-awesome.min.css';
import { subDays } from 'date-fns';
import $ from 'jquery';


const Form = () => {

    const [dateOrdered, setDateOrdered] = useState(Date.now);
    const [name, setName] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [fbLink, setfbLink] = useState('');
    const [mode, setMode] = useState('Deliver');
    const [orderDes, setOrderDes] = useState('');
    const [address, setAddress] = useState('');
    
    const [errors, setErrors] = useState({});
    const [flag_err, setFlagError] = useState(true);

    var arr_err = {};

    const handleName = (e) => {
      // e.preventDefault();
      var name = e.target.value;
      setFlagError(false);

      console.log(name);

      if(name.length === 0){
        setErrors({...errors, name: 'Name Field is Empty!'});
        $('#error-name').text('Name Field is Empty!');
        $('#name-input').css('border', '1px solid red');
        setName('');
        // console.log(errors);
      } 

      

      if(name.length > 0){
        const tempErr = {...errors};
        delete tempErr.name;
        setErrors(tempErr);

        $('#error-name').text('');
        $('#name-input').css('border', '1px solid #A05496');
        setName(name);
      }
    };

    useEffect(() => {
      if(Object.keys(errors).length > 0 || flag_err) {
        $('.submit-button').prop('disabled', 'true');
        $('.submit-button').css('background', 'lightgray');
        $('.submit-button').css('cursor', 'default');
      } else {
        $('.submit-button').prop('disabled', 'false');
        $('.submit-button').css('background', '#249D57');
        $('.submit-button').css('cursor', 'cursor');
      }
    }, [errors]);

      // setName(e.target.value);

    // }

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

    const handleAddress = (e) => {
      setAddress(e.target.value);
    }


    const handleSubmit = (e) => {
      e.preventDefault();

      const formData = {
        name: name,
        contactNo: contactNo,
        fbLink: fbLink,
        mode: mode,
        orderDes: orderDes,
        address: address,
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

        <div>

          <Navbar />

          <div className="App">

            <div className="product-selection">
              <div className="product-img"></div>

              <div className="product-opt">
                <div className="options hov1"></div>
                <div className="options hov2"></div>
                <div className="options hov3"></div>
                <div className="options hov4"></div>
                <div className="options hov5"></div>
                <div className="options hov6"></div>
              </div>
            </div>

            

            <form className="order-form" onSubmit={handleSubmit} >

              <div className="product-name">
                <div id="product-name">
                  Product Name
                </div>
              </div>

              <div className="date-class">
                <div className="text-form">
                  Date
                </div>

                <div className="date-picker">

                  <DatePicker 
                    className="input-datepicker"
                    selected={dateOrdered}
                    onChange={handleDateOrdered}
                    onKeyDown={e => e.preventDefault()}
                    minDate={subDays(new Date(), -2)}
                  />

                  <div className="calendar-class">
                    <div className="calendar-icon">
                      <div id="calendar-vector">
                        <i className="fa fa-calendar"></i>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="input-field">
                <div className="text-form">Name</div>

                <input className="input-text" id="name-input" type="text" name="name" value={name} onChange={handleName} />

                <div className="error" id="error-name"></div>
              </div>

              <div className="input-field">
                <div className="text-form">Contact Number</div>

                <input className="input-text" id="con-input" type="text" name="contactNo" value={contactNo} onChange={handleContactNo} />

                <div className="error" id="error-contact"></div>
              </div>

              <div className="input-field">
                <div className="text-form">Facebook Link</div>

                <input className="input-text" id="link-input" type="text" name="fbLink" value={fbLink} onChange={handlefbLink} />

                <div className="error" id="error-link" ></div>
              </div>

              <div className="delivery-opt">
                <div className="text-form">Delivery Option</div>

                <div className="delivery-mode">
                <select className="mode" name="mode" onChange={handleMode} defaultValue={"Deliver"}>
                    <option value="Deliver">Deliver</option>
                    <option value="Pick-up">Pick-up</option>
                  </select>
                  <input className="input-text" type="text" name="address" value={address} onChange={handleAddress} />
                </div>
              </div>

              <div className="order-description">
                <div className="text-form">Order Description</div>

                <textarea className="order-text" name="orderDes" value={orderDes} onChange={handleOrderDes}></textarea>
              </div>

              <button className="submit-button" type="submit">Place Order</button>

              {/* <div className="form-control">
                <label className="text-form">Name</label>
                <input className="input-text" type="text" name="name" value={name} onChange={handleName} />
              </div>

              <div className="form-control">
                <label className="text-form">Contact No</label>
                <input className="input-text" type="text" name="contactNo" value={contactNo} onChange={handleContactNo} />
              </div>

              <div className="form-control">
                <label className="text-form">Facebook Link</label>
                <input className="input-text" type="text" name="fbLink" value={fbLink} onChange={handlefbLink} />
              </div>

              <div className="form-control">
                <label className="text-form">Order Description</label>
                <input className="input-text" type="text" name="orderDes" value={orderDes} onChange={handleOrderDes} />
              </div>

              <div className="form-control">
                <label className="text-form">Delivery Option</label>
                <select className="form-control" id="select-text" name="mode" onChange={handleMode} defaultValue={"Deliver"}>
                  <option value="Deliver" style={{fontFamily: 'Raleway'}}>Deliver</option>
                  <option value="Pick-up">Pick-up</option>
                </select> 
              </div>

              <div className="form-control">
                <button type="submit" className="submit-button">Place Order</button>
              </div> */}

            </form>
          </div>
        </div>
        
        
    );    
}

export default Form;