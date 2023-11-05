import React from "react";
import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Navbar from '../navbar/navbar.jsx';
import './form.css';
import 'font-awesome/css/font-awesome.min.css';
import { subDays, addDays } from 'date-fns';
import $ from 'jquery';

import Calendar from '../calendar/calendar.jsx';

const Form = () => {

    const defaultDate = addDays(new Date(), 7);

    const [dateOrdered, setDateOrdered] = useState(defaultDate);
    const [name, setName] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [fbLink, setfbLink] = useState('');
    const [mode, setMode] = useState('Deliver');
    const [orderDes, setOrderDes] = useState('');
    const [address, setAddress] = useState('');

    const [errors, setErrors] = useState({name: 'name error', contact: 'contact error', link: 'link error'});
    // const [flag_err, setFlagError] = useState(true);

    const [show, setShow] = useState(false);
    const [dateText, setDateText] = useState('');
    const [showNavbar, setShowNavbar] = useState(true);

    const handleName = (e) => {
      var name = e.target.value;
      var validName = (/^[A-Za-z]+$/);
      var condition = validName.test(name);

      if(name.length === 0){
        setErrors({...errors, name: 'Name Field is Empty!'});
        $('#error-name').text('Name Field is Empty!');
        $('#name-input').css('border', '1px solid red');
      } else if(!condition){
        setErrors({...errors, name: 'Name Field is invalid!'});
        $('#error-name').text('Name must contain letters only.');
        $('#name-input').css('border', '1px solid red');
      }

      if(name.length > 0 && condition){
        const tempErr = {...errors};
        delete tempErr.name;
        setErrors(tempErr);

        $('#error-name').text('');
        $('#name-input').css('border', '1px solid #A05496');
      }

      setName(name);
    };

    const handleNavbarRender = () => {
      setShowNavbar(true);
      setShow(false);
    };

    const handleCalendarRender = () => {
      setShowNavbar(false);
      setShow(true);
    };

    const handleContactNo = (e) => {
      var contactNo = e.target.value;
      var validNum = /((\+[0-9]{2})|0)[.\- ]?9[0-9]{2}[.\- ]?[0-9]{3}[.\- ]?[0-9]{4}/;
      var condition = validNum.test(contactNo);

      if(condition){
        const tempErr = {...errors};
        delete tempErr.contact;
        setErrors(tempErr);

        $('#error-contact').text('');
        $('#con-input').css('border', '1px solid #A05496');
      }

      if(!condition){
        if(contactNo.length === 0){
          setErrors({...errors, contact: 'Contact Field is Empty!'});
          $('#error-contact').text('Contact Field is Empty!');
          $('#con-input').css('border', '1px solid red');
        }

        if(contactNo.length > 0){
          setErrors({...errors, contact: 'Contact Field is Empty!'});
          $('#error-contact').text('Please use a valid number.');
          $('#con-input').css('border', '1px solid red');
        }
      }

      setContactNo(contactNo);
    };

    const handlefbLink = (e) => {
      var fbLink = e.target.value;
      var validLink = /(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\-]*)?/;
      var condition = validLink.test(fbLink);

      if(condition){
        const tempErr = {...errors};
        delete tempErr.link;
        setErrors(tempErr);

        $('#error-link').text('');
        $('#link-input').css('border', '1px solid #A05496');
      } else{
        if(fbLink.length === 0) {
          setErrors({...errors, link: 'Link Field is Empty!'});
          $('#error-link').text('Link Field is Empty!');
          $('#link-input').css('border', '1px solid red');
        } else{
          setErrors({...errors, link: 'Please use a valid link.'});
          $('#error-link').text('Please use a valid link.');
          $('#link-input').css('border', '1px solid red');
        }
      }

      setfbLink(fbLink);
    };

    const handleMode = (e) => {
      var mode = e.target.value

      if(mode === 'Pick-up'){
        $('#input-address').prop('disabled', 'true');
        $('#input-address').css('background', 'lightgray');
        $('#input-address').css('border', '1px solid lightgray');
        $('#error-address').text('');
      } else{
        $('#input-address').prop('disabled', '');
        $('#input-address').css('background', 'white');
        $('#input-address').css('border', '1px solid #A05496');
      }

      setMode(mode);
    };

    // const handleDateOrdered = (date) => {
    //   setDateOrdered(date);
    // };

    const handleDateOrdered = (date) => {
      setDateOrdered(date);
      console.log('Date selected: ' + dateOrdered);
    }

    const handleOrderDes = (e) => {
      setOrderDes(e.target.value);
    };

    const handleAddress = (e) => {
      var address = e.target.value;

      if(address.length === 0){
        setErrors({...errors, link: 'Address Field is Empty!'});
        $('#error-address').text('Address Field is Empty!');
        $('#input-address').css('border', '1px solid red');
      } else {
        const tempErr = {...errors};
        delete tempErr.link;
        setErrors(tempErr);

        $('#error-address').text('');
        $('#input-address').css('border', '1px solid #A05496');
      }

      setAddress(address);
    }


    const handleSubmit = (e) => {

      console.log('hello');
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

    useEffect(() => {
      if(Object.keys(errors).length > 0) {
        $('.submit-button').prop('disabled', 'true');
        $('.submit-button').css('background', 'lightgray');
        $('.submit-button').css('cursor', 'default');
      }
      if(Object.keys(errors).length === 0) {
        console.log('Hello');
        $('.submit-button').prop('disabled', '');
        $('.submit-button').css('background', '#249D57');
        $('.submit-button').css('cursor', 'pointer');
      }
    }, [errors]);

    useEffect(() => {
      const months_ref = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

      const month = months_ref[new Date(dateOrdered).getMonth()];
      const year = new Date(dateOrdered).getFullYear();
      const day = new Date(dateOrdered).getDate();
      const stringDate = month.concat(" ").concat(day).concat(", ").concat(year);

      setDateText(stringDate);
    }, [dateOrdered]);

    console.log(errors);

    return (

        <div>

          {/* <Navbar /> */}

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

                <div className="date-info">
                  <p className="date-text">{dateText}</p>

                  <div className="calendar-class" onClick={handleCalendarRender}>
                    <div className="calendar-icon">
                      <div id="calendar-vector">
                        <i className="fa fa-calendar"></i>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="date-picker">

                <p className="date-text">October 00, 0000</p>

                  <div className="calendar-class" onClick={() => setShow(!show)}>
                    <div className="calendar-icon">
                      <div id="calendar-vector">
                        <i className="fa fa-calendar"></i>
                      </div>
                    </div>
                  </div>
                </div> */}
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
                  <input className="input-text" id="input-address" type="text" name="address" value={address} onChange={handleAddress} />
                </div>

                <div className="error" id="error-address"></div>
              </div>

              <div className="order-description">
                <div className="text-form">Order Description</div>

                <textarea className="order-text" name="orderDes" value={orderDes} onChange={handleOrderDes}></textarea>
              </div>

              <button className="submit-button">Place Order</button>

            </form>
          </div>
              {show ? <Calendar handleDateOrdered={handleDateOrdered} setShowNavbar={setShowNavbar} setShow={setShow}/>: null}
              {showNavbar ? <Navbar />: null}

        </div>
    );
}

export default Form;
