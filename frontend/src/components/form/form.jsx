// Custom Components
import Navbar from '../navbar/navbar.jsx';
import Footer from '../footer/footer.jsx';
import CalendarDatepicker from '../calendar_datepicker/calendar_datepicker.jsx';

// Dependencies
import React from "react";
import { useState, useEffect } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { subDays, addDays } from 'date-fns';
import $ from 'jquery';
import { useParams } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';

// CSS
import './form.css';

const Form = () => {
    // To store data inputted by user for redirecting purposes
    const location = useLocation();
    const prevData = location.state?.formData || {};;

    const navigate = useNavigate();

    // Date initializations
    const currentDate = new Date();
    const initDate = new Date(currentDate);
    const defaultDate = addDays(new Date(), 7);

    // State variables - Form data
    const { itemName } = useParams();
    const [productName, setProductName] = useState(itemName);
    const [productImg, setProductImg] = useState('');
    const[prevFormData, setPrevFormData] = useState({name: "", contactNo: "", email: "", fbLink: "", mode: "", dedication: "", orderDes: "", address: ""})

    // Function to fetch product information, runs on first render of component
    useEffect(() => {
      setProductName(itemName);

      fetch(`http://localhost:4000/getImage/${productName}`)
        .then((response) => response.json())
        .then((data) => {
          setProductImg(data);
        })
        .catch((err) => console.log(err));
    }, [])

    // State variables, forms component
    const [dateOrdered, setDateOrdered] = useState(defaultDate);
    const [name, setName] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [email, setEmail] = useState('');
    const [fbLink, setfbLink] = useState('');
    const [mode, setMode] = useState('Pick-up');
    const [dedication, setDedication] = useState('');
    const [orderDes, setOrderDes] = useState('');
    const [address, setAddress] = useState('');
    const [datePickup, setDatePickup] = useState(initDate);
    const [image, setImage] = useState('');
    const [errors, setErrors] = useState({name: 'name error', contact: 'contact error', link: 'link error', date: '', email: 'email error'});
    const [datect, setDateCount] = useState(0);

    // Function to handle changes in input
    const onInputChange=(e)=>{
      const data = new FileReader()
      data.addEventListener('load', () =>{
        setImage(data.result)
      })
      data.readAsDataURL(e.target.files[0])
    }

    // Function for name processing, to help with error handling
    const handleName = (e) => {
      var name = e.target.value;
      var validName = (/^[A-Za-z][A-Za-z\s]*$/);
      var condition = validName.test(name);

      if(name.length === 0){
        setErrors({...errors, name: 'Name Field is Empty!'});
        $('#error-name').text('*Name Field is Empty!');
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

    // Function for contact number processing, to help with error handling
    const handleContactNo = (e) => {
      var contactNo = e.target.value;
      var validNum = /((\+[0-9]{2})|0)[.\- ]?9[0-9]{2}[.\- ]?[0-9]{3}[.\- ]?[0-9]{4}/;
      var condition = validNum.test(contactNo) && (contactNo.length === 11 || contactNo.length === 13);

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
          $('#error-contact').text('*Contact Field is Empty!');
          $('#con-input').css('border', '1px solid red');
        }

        if(contactNo.length > 0){
          setErrors({...errors, contact: 'Contact Field is Empty!'});
          $('#error-contact').text('*Please use a valid number.');
          $('#con-input').css('border', '1px solid red');
        }
      }

      setContactNo(contactNo);
    };

    // Function for email processing, to help with error handling
    const handleEmail = (e) => {
      var email = e.target.value;
      var validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      var isValid = validEmail.test(email);

      if(isValid){
        const tempErr = {...errors};
        delete tempErr.email;
        setErrors(tempErr);

        $('#error-email').text('');
        $('#email-input').css('border', '1px solid #A05496');
      }

      if(!isValid){
        if(email.length === 0){
          setErrors({...errors, email: 'Email Field is Empty!'});
          $('#error-email').text('*Email Field is Empty!');
          $('#email-input').css('border', '1px solid red');
        }

        if(email.length > 0){
          setErrors({...errors, email: '*Please use a valid email.'});
          $('#error-email').text('*Please use a valid email.');
          $('#email-input').css('border', '1px solid red');
        }
      }

      setEmail(email);
    };

    // Function for fb link processing, to help with error handling
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
          $('#error-link').text('*Link Field is Empty!');
          $('#link-input').css('border', '1px solid red');
        } else{
          setErrors({...errors, link: 'Please use a valid link.'});
          $('#error-link').text('*Please use a valid link.');
          $('#link-input').css('border', '1px solid red');
        }
      }

      setfbLink(fbLink);
    };

    // Function for delivery mode processing, to help with error handling
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

    // Function to handle display based on errors, runs per update of mode state variable
    useEffect(() => {
      if(mode === 'Pick-up'){
        $('#input-address').prop('disabled', 'true');
        $('#input-address').css('background', 'lightgray');
        $('#input-address').css('border', '1px solid lightgray');
        $('#error-address').text('');
      }
    }, [mode]);

    // Function that fetches dates from database, is executed per update of date variables from user input
    useEffect(() => {

      fetch(`http://localhost:4000/checkDate?param=${dateOrdered.toLocaleDateString()}`)
        .then((response) => response.json())
        .then((data) => {
          setDateCount(data.count);

          if(datect < 3){
            const tempErr = {... errors};
            delete tempErr.date;
            setErrors(tempErr);

            $('#error-date').text('');
            $('#date-text').css('color', 'black');
          }

          if(datect >= 3){
            setErrors({...errors, date: 'Date is Fully Booked!'});

            $('#error-date').text('*Date is Fully Booked!');
            $('#date-text').css('color', 'red');
          }
        })
        .catch((err) => {
          console.error(err);
        });

    }, [datect, dateOrdered]);

    // Function to set date ordered
    const handleDateOrdered = (date) => {

      setDateOrdered(date);
    }

    // Function to set dedication
    const handleDedication = (e) => {
      setDedication(e.target.value);
    }

    // Function to set order destination
    const handleOrderDes = (e) => {
      setOrderDes(e.target.value);
    };

    // Function to handle address
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

    // Function to handle submitting of data
    const handleSubmit = (e) => {
      e.preventDefault();

      const formData = {
        productName: productName,
        name: name,
        contactNo: contactNo,
        email: email,
        fbLink: fbLink,
        mode: mode,
        dedication: dedication,
        orderDes: orderDes,
        address: address,
        dateOrdered: dateOrdered.toLocaleDateString(),
        datePickup: datePickup,
        productImg: productImg
      };

      navigate("/receipt", { state: { formData } });
    };

    // Function that handles updates to error
    useEffect(() => {
      if(Object.keys(errors).length > 0) {
        $('.submit-button').prop('disabled', 'true');
        $('.submit-button').css('background', 'lightgray');
        $('.submit-button').css('cursor', 'default');
      }
      if(Object.keys(errors).length === 0) {
        $('.submit-button').prop('disabled', '');
        $('.submit-button').css('background', '#249D57');
        $('.submit-button').css('cursor', 'pointer');
      }
    }, [errors]);

    return (
        <div className="form-div">
          <Navbar/>

          <div className="spacer">
          <div className="form-data-div">
            <div className="product-selection">

              <div className="pimg-container">
                <img className="product-img" src={`/images/${productImg.img}`} alt="product-picture" />
              </div>

            </div>
            <form className="order-form" onSubmit={handleSubmit} >

              <div className="product-name">
                <div id="product-name">
                  {productName}
                </div>
              </div>

              <div className="date-class">

                <div className="date-title">
                  <div className="text-form">Date</div>
                  <Icon className="q-icon" id="q-date" icon="heroicons:question-mark-circle-20-solid" color='#A05496'/>
                  <div className="q-mark" id="q-text">Orders must be atleast 7 days before the date</div>
                </div>

                <CalendarDatepicker handleDateOrdered={handleDateOrdered}/>

                <div className="error" id="error-date"></div>
              </div>


              <div className="input-field">
                <div className="text-form">Name <span id="req-field">*</span></div>

                <input className="input-text" id="name-input" type="text" name="name" value={name} onChange={handleName} />

                <div className="error" id="error-name"></div>
              </div>

              <div className="input-field">
                <div className="text-form">Contact Number <span id="req-field">*</span>  </div>

                <input className="input-text" id="con-input" type="text" name="contactNo" value={contactNo} placeholder="e.g. 09123456789" onChange={handleContactNo} />

                <div className="error" id="error-contact"></div>
              </div>

              <div className="input-field">
                <div className="text-form">Email <span id="req-field">*</span> </div>

                <input className="input-text" id="email-input" type="text" name="email" value={email} onChange={handleEmail}/>

                <div className="error" id="error-email"></div>
              </div>

              <div className="input-field">
                <div className="text-form">Facebook Link/Messenger Link <span id="req-field">*</span> </div>

                <input className="input-text" id="link-input" type="text" name="fbLink" value={fbLink} onChange={handlefbLink} />

                <div className="error" id="error-link" ></div>
              </div>

              <div className="delivery-opt">
                <div className="text-form">Delivery Option and Address <span id="req-field">*</span> </div>

                <div className="delivery-mode">

                  <div className="delivery-select">
                    <select className="mode" name="mode" onChange={handleMode} defaultValue={"Pick-up"}>
                      <option value="Pick-up">Pick-up</option>
                      <option value="Delivery by Grab/Lalamove">Delivery by Grab/Lalamove</option>
                      <option value="Delivery by Client">Delivery by Client</option>
                    </select>

                    <Icon className="q-icon" id="q-mode" icon="heroicons:question-mark-circle-20-solid" color='#A05496'/>
                    <div className="q-mark" id="q-pickup">Extra delivery info fees etc.</div>
                  </div>

                  <input className="input-text" id="input-address" type="text" name="address" value={address} onChange={handleAddress} placeholder="Your address here" />
                </div>

                <div className="error" id="error-address"></div>
              </div>

              <div className="input-field">
                <div className="text-form">Dedication</div>
                <input className="input-text" id="dedication-input" type="text" name="dedication" value={dedication} onChange={handleDedication} />
              </div>

              <div className="order-description">
                <div className="text-form">Other Notes</div>

                <textarea className="order-text" name="orderDes" value={orderDes} onChange={handleOrderDes}></textarea>

                <div className="img-container" id="img-button">
                  Upload +
                  <input type="file" accept="image/*" onChange={onInputChange}></input>
                </div>
              </div>

              <button className="submit-button">Place Order</button>

            </form>

            <div className="customerPreviewPic">
              {image && <img src={image} alt="" style={{ width: '300px', height: '200px' }} />}
            </div>
          </div>
          <div className="spacer">

          </div>
          </div>

          <Footer/>
        </div>
    );
}

export default Form;
