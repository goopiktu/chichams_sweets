// Function for component representing edit mode of form
// Functions and variables similar to that of forms component

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

const EditForm = () => {
    const location = useLocation();
    const prevData = location.state?.formData || {};

    const navigate = useNavigate();
    const currentDate = new Date();
    const initDate = new Date(currentDate);

    const defaultDate = addDays(new Date(), 7);
    const { itemName } = useParams();
    const [productName, setProductName] = useState('Product Name');
    const [newForm, setNewForm] = useState(prevData || {});
    const [dateText, setDateText] = useState('');

    useEffect(() => {
      setProductName(itemName);

      fetch(`http://localhost:4000/getImage/${productName}`)
        .then((response) => response.json())
        .then((data) => {
          setProductImg(data);

        })
        .catch((err) => console.log(err));
    }, [])

    const [dateOrdered, setDateOrdered] = useState(new Date(newForm.dateOrdered) || defaultDate);
    const [name, setName] = useState(prevData.name || '');
    const [contactNo, setContactNo] = useState(prevData.contactNo || '');
    const [email, setEmail] = useState(prevData.email || '');
    const [fbLink, setfbLink] = useState(prevData.fbLink || '');
    const [mode, setMode] = useState(prevData.mode ||'Pick-up');
    const [dedication, setDedication] = useState(prevData.dedication || '');
    const [orderDes, setOrderDes] = useState(prevData.orderDes || '');
    const [address, setAddress] = useState(prevData.address || '');
    const [datePickup, setDatePickup] = useState(prevData.datePickup || initDate);
    const [image, setImage] = useState('');
    const [displayImg, setProductImg] = useState(newForm.productImg);

    const [imgURL, setImgURL] = useState('');

    const [errors, setErrors] = useState({});
    const [datect, setDateCount] = useState(0);

    const getImageString = () => {
      const imgUrlString = "/images/".concat(displayImg.img);
      setImgURL(imgUrlString);
    }

    useEffect(() => {

      getImageString();
    }, [])

    const onInputChange=(e)=>{
      const data = new FileReader()
      data.addEventListener('load', () =>{
        setImage(data.result)
      })
      data.readAsDataURL(e.target.files[0])
    }

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

    useEffect(() => {
      if(mode === 'Pick-up'){
        $('#input-address').prop('disabled', 'true');
        $('#input-address').css('background', 'lightgray');
        $('#input-address').css('border', '1px solid lightgray');
        $('#error-address').text('');
      }
    }, [mode]);

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

          if(datect >= 1){
            setErrors({...errors, date: 'Date is Fully Booked!'});

            $('#error-date').text('*Date is Fully Booked!');
            $('#date-text').css('color', 'red');
          }
        })
        .catch((err) => {
          console.error(err);
        });

    }, [datect, dateOrdered]);

    const handleDateOrdered = (date) => {
      setDateOrdered(date);
    }

    const handleDedication = (e) => {
      setDedication(e.target.value);
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
        productImg: newForm.productImg
        // image: image
      };

      navigate("/receipt", { state: { formData } });
    };

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

    useEffect(() => {
      const months_ref = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

      const month = months_ref[new Date(dateOrdered).getMonth()];
      const year = new Date(dateOrdered).getFullYear();
      const day = new Date(dateOrdered).getDate();
      const stringDate = month.concat(" ").concat(day).concat(", ").concat(year);

      setDateText(stringDate);
    }, [dateOrdered]);

    return (
        <div className="form-div">
          <Navbar/>

          <div className="spacer">
          <div className="form-data-div">
            <div className="product-selection">

              <div className="pimg-container">
                <img className="product-img" src={imgURL} alt={imgURL} />

              </div>

            </div>
            <form className="order-form" onSubmit={handleSubmit} >

              {/* TODO: Get the Product Name in the Product Schema of the Database. */}
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

                {/* <div className=".other-note">(e.g. 09XXXXXXXXX)</div> */}

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
              </div>

              <button className="submit-button">Place Order</button>

            </form>
          </div>
          <div className="spacer">

          </div>
          </div>

          <Footer/>
        </div>
    );
}

export default EditForm;
