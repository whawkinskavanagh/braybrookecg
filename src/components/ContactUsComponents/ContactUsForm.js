import React from "react";
import "./ContactUs.css";

const ContactUsForm = () => {

  const nameChangeHandler = (event) => {console.log(event.target.value)}


  return (
    <div className="form">
      <form>
        <div>
          <label> Name: </label>
            <input type="text" name="name" onChange={nameChangeHandler}/>
        </div>
        <div>
          <label> Email: </label>
            <input type="text" name="email" />
        </div>
        <div>
          <label for="textbox"> Detail: </label>
            <textarea type="text" name="textbox" rows="5"></textarea>
        </div>
        <button className="submitButton">Submit</button>
      </form>
    </div>
  );
};

export default ContactUsForm;
