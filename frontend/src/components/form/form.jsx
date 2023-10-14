import React from "react";
import { useForm } from 'react-hook-form';
import DatePicker from 'react-date-picker';


const Form = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setValue,
    } = useForm();
    
    // const onSubmit = async (data) => {
    //     try{
    //       const response = await fetch('http://localhost:3000/postOrder', {
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

    const onSubmit = (data) => {
      console.log(data);
    }

    const selectedDate = watch('date');

    return (
        
        <div className="App">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label>First Name:</label>
              <input type="text" name="firstname" {...register("firstname")} />
            </div>
            <div className="form-control">
              <label>Last Name:</label>
              <input type="text" name="lastname" {...register("lastname")} />
            </div>  
            <div className="form-control">
              <label>Contact No:</label>
              <input type="text" name="contactno" {...register("contactno")} />
            </div>
           

            <select {...register('mode')} defaultValue={"Deliver"}>
                <option value="Deliver">Deliver</option>
                <option value="Pick-up">Pick-up</option>
            </select>

            <div>
                <label>Select a date:</label>
                <DatePicker onChange={(date) => setValue('date', date, { shouldValidate: true })} value={selectedDate} clearIcon={null} />
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