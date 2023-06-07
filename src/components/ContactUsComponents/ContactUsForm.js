import React from "react";
import "./ContactUs.css";

const ContactUsForm = () => {
  return (
    <div className="form">
      <form>
        <div>
          <label>
            Name: 
            <input type="text" name="name" />
          </label>
        </div>
        <div>
        <label>
          Email: 
          <input type="text" name="email" />
        </label>
        </div>
        <div>
            <label for="textbox">
                Detail:
            <textarea type="text" name="textbox" rows="5"></textarea>
            </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ContactUsForm;
