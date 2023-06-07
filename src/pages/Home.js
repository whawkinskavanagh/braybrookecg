import NewHeader from "../components/NewHeader";
import craft from "../crafting.png"
import '../App.css'

const Home = () => {
    return (
        <div>
            <NewHeader className="Nav-Text"/>
        <div className="div-main">
          <p>
            This is a new group that has recently started up in Braybrooke.
            <br></br>
            <br></br>
            We meet at the Swan in Braybrooke on the 3rd Tuesday of every month
            <br></br>
            <br></br>
            We welcome anyone with any craft skills to come along.<br></br>
            <br></br>
            If you have a craft that you would like to showcase, <br></br>please
            contact Wanda Hawkins-Kavanagh or Cerys Jones{" "}
          </p>
          <img src={craft} className="App-logo" alt="logo" />
        </div>
        <br></br>
        <p>PUT SOMETHING IN HERE.... POSSIBLY CAROUSEL</p>
        <br></br>
        </div>
    )
}

export default Home;