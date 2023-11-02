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
    
    const [errors, setErrors] = useState({name: 'name error', contact: 'contact error', link: 'link error'});
    // const [flag_err, setFlagError] = useState(true);

    const handleName = (e) => {
      var name = e.target.value;

      if(name.length === 0){
        setErrors({...errors, name: 'Name Field is Empty!'});
        $('#error-name').text('Name Field is Empty!');
        $('#name-input').css('border', '1px solid red');
      } 

      if(name.length > 0){
        const tempErr = {...errors};
        delete tempErr.name;
        setErrors(tempErr);

        $('#error-name').text('');
        $('#name-input').css('border', '1px solid #A05496');
      }

      setName(name);
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

    useEffect(() => {
      if(Object.keys(errors).length > 0) {
        $('.submit-button').prop('disabled', 'true');
        $('.submit-button').css('background', 'lightgray');
        $('.submit-button').css('cursor', 'default');
      } else {
        $('.submit-button').prop('disabled', 'false');
        $('.submit-button').css('background', '#249D57');
        $('.submit-button').css('cursor', 'cursor');
      }
    }, [errors]);

    console.log(errors);

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
                  <input className="input-text" type="text" name="address" value={address} onChange={handleAddress} disabled />
                </div>
              </div>

              <div className="order-description">
                <div className="text-form">Order Description</div>

                <textarea className="order-text" name="orderDes" value={orderDes} onChange={handleOrderDes}></textarea>
              </div>

              <button className="submit-button" type="submit">Place Order</button>

            </form>
          </div>
        </div>
        
        
    );    
}

export default Form;