import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center">
       <Helmet>
        <title>Car Doctor - NotFound</title>
      </Helmet>
      <img
        src="https://img.freepik.com/premium-vector/404-page-flat-style-design-vector-illustration-stock-illustration_357500-2762.jpg?w=740"
        alt=""
      />
    </div>
  );
};

export default NotFound;
