import { Helmet } from "react-helmet";
import TinyBanner from "../../components/TinyBanner";

const About = () => {
  return (
    <div>
       <Helmet>
        <title>Car Doctor - About</title>
      </Helmet>
       <TinyBanner info={{title:"About", buttonTitle:"About"}}></TinyBanner>
    </div>
  );
};

export default About;
