import EventDates from "./EventDates"

const EventsSection = (props) => {
    return (
<div>
        <EventDates
          date={props.eventinfo[0].date}
          description={props.eventinfo[0].description}
          price={props.eventinfo[0].price}
        />
        <EventDates
          date={props.eventinfo[1].date}
          description={props.eventinfo[1].description}
          price={props.eventinfo[1].price}
        />

        <EventDates
          date={props.eventinfo[2].date}
          description={props.eventinfo[2].description}
          price={props.eventinfo[2].price}
        />

        <EventDates
          date={props.eventinfo[3].date}
          description={props.eventinfo[3].description}
          price={props.eventinfo[3].price}
        />
      </div>
    )
}

export default EventsSection