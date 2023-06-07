import "../App.css";
import EventsSection from "../components/EventsSection";

const eventdetails = [
  {
    date: "20th June 2023",
    description: "Create your own unique Tote Bag!",
    price: "£2.50",
  },
  {
    date: "18th July 2023",
    description: "Dot Mandala Painting",
    price: "£5.00",
  },
  {
    date: "19th September 2023",
    description: "Sublimation designs for mugs",
    price: "£6.00",
  },
  {
    date: "19th October 2023",
    description: "Something",
    price: "£6.00",
  },
];

const Events = () => {
  return (
    <div>
      <h1>Events Page</h1>
      <EventsSection eventinfo={eventdetails}/>
      <p>
        MAYBE ADD SOME MORE STUFF ON THIS PAGE.... ADD BUTTONS / STATE EVENTS TO
        EACH EVENT<br></br>
        <br></br>
        TIDY UP THE CSS FOR THE EVENTS
      </p>
    </div>
  );
};

export default Events;
