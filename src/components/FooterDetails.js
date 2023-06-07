import Swan from "./Swan.png"
import Facebook from "./Facebook.png"


const FooterDetails = () => {
    return (
        <div className="flex-box">
        <p className="Footer-Deets">Braybrooke Craft Group<br></br>
        C/O The Swan Braybrooke<br></br>
        Griffin road<br></br>
        Braybrooke<br></br>
        Northamptonshire<br></br>
        <br></br>
        📞  07740 815273
        </p>

        <a
        href="https://www.swanbraybrooke.co.uk/">
        <img src={Swan} className="Swan" alt="Swan"/>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100091925345170"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Facebook} className="facebook" alt="Facebook"/>        
        </a>
        </div>
    )
}

export default FooterDetails;