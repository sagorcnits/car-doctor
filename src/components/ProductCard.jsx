import { CiShoppingCart } from "react-icons/ci";


const ProductCard = ({product}) => {

  return (
    <div className="card productCart p-4 border cursor-pointer relative">
      <figure className="bg-[#F3F3F3] py-3 rounded-md h-[200px] overflow-hidden">
        <img 
          src={product.img}
          alt="Shoes"
          className="rounded-xl w-[50%] "
        />
      </figure>
      <div className="card-body items-center text-center">
        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
        <h2 className="card-title text-[25px] font-Inter font-bold py-2">{product.title}</h2>
        <p className="text-[#FF3811] font-Inter font-semibold">${product.price}</p>
      </div>
      <div className="w-[50px] hidden  h-[50px]  productIcon items-center justify-center text-[30px] rounded-full absolute bg-white right-6 top-6 text-[#FF3811]">
          <CiShoppingCart></CiShoppingCart>
      </div>
    </div>
  );
};

export default ProductCard;
