import NewHeader from "../components/NewHeader";
import craft from "../crafting.png"
import '../App.css'

const Home = () => {
    return (
        <div>
            <NewHeader className="Nav-Text"/>
            <div className="home-flex-container">
        <div className="div-main">
            This is a new group that has recently started up in Braybrooke.
            
            We meet at the Swan in Braybrooke on the 3rd Tuesday of every month
            
            We welcome anyone with any craft skills to come along.
            If you have a craft that you would like to showcase, please
            contact Wanda Hawkins-Kavanagh or Cerys Jones
          <img src={craft} className="App-logo" alt="logo" />
        </div>
        </div>
        <p>PUT SOMETHING IN HERE.... POSSIBLY CAROUSEL</p>
        <br></br>
        </div>
    )
}

export default Home;