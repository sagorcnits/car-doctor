import { Helmet } from "react-helmet";
import TinyBanner from "../../components/TinyBanner";

const Contact = () => {
  return (
    <div>
       <Helmet>
        <title>Car Doctor - Contact</title>
      </Helmet>
        <TinyBanner info={{title:"Contact", buttonTitle:"Contact"}}></TinyBanner>
    </div>
  );
};

export default Contact;
