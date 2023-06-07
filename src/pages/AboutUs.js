import Cerys from "../components/Cerys";
import Wanda from "../components/Wanda";
import AboutWanda from "../components/AboutWanda";
import AboutCerys from "../components/AboutCerys";

const AboutUs = () => {
  return (
    <div>
      <h1>A bit about Cerys and Wanda</h1>
        <div className="wanda-div">
          <AboutWanda />
          <Wanda />
        </div>
      <div className="cerys-div">
      <AboutCerys/>
      <Cerys />
      </div>
    </div>
  );
};

export default AboutUs;
