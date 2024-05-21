import { Helmet } from "react-helmet";
import TinyBanner from "../../components/TinyBanner";

const Blog = () => {
  return (
    <div>
       <Helmet>
        <title>Car Doctor - Blog</title>
      </Helmet>
       <TinyBanner info={{title:"Blog", buttonTitle:"Blog"}}></TinyBanner>
    </div>
  );
};

export default Blog;
