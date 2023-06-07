import React, { useState } from "react";

const EventDates = (props) => {

  const [price, setPrice] = useState(props.price)
    
    const clickHandler = () => {
      setPrice("You're booked on!")
    }


  return (
    <div>
    <div className="font-event-box">
      {/* need to add CSS to each line here to get them to display in their individual boxes */}
      <div className="font-event-description">{props.date}</div>
      <div className="font-event-description">{props.description}</div>
      <div className="font-event-description">{price}</div>
      <button onClick={clickHandler} id="button">Click to Book</button>
    </div>
    </div>
  );
};

export default EventDates;
