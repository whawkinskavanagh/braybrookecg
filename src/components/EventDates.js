import React, { useState } from "react";

const EventDates = (props) => {

  const [price, setPrice] = useState(props.price)
    
    const clickHandler = () => {
      setPrice("You're booked on!")
    }


  return (
    <div className="font">
      {/* need to add CSS to each line here to get them to display in their individual boxes */}
      <div>{props.date}</div>
      <div>{props.description}</div>
      <div>{price}</div>
      <button onClick={clickHandler} id="button">Click to Book</button>
    </div>
  );
};

export default EventDates;
