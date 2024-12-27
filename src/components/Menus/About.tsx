import CardComponent from "../dashboard/Card";
import Grid from "../dashboard/Grid";

const About = () => {
  return (
    <div className="home-container">
      <div className="grid-container">
        <label>Grid</label>
        <Grid />
      </div>

      <div className="other-container">
        <CardComponent />

        <CardComponent />
      </div>
    </div>
  );
};

export default About;
