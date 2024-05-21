import { IoArrowUndoSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import OrderTinyBanner from "../../components/OrderTinyBanner";
const CartDetails = () => {
  const table = [1, 2, 3, 4];

  return (
    <div>
      <OrderTinyBanner
        info={{ title: "Cart Details", descrip: "Home - Product Details" }}
      ></OrderTinyBanner>

      <div className="overflow-x-auto mt-24">
        <table className="w-[800px] md:w-full ">
          <tbody>
            {table.map((item, id) => {
              return (
                <tr key={id} className="border-b ">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className=" cursor-pointer size-[40px] rounded-full bg-[#444444] flex justify-center items-center text-white">
                        <RxCross2></RxCross2>
                      </div>
                      <div className="avatar">
                        <div className="size-[100px] rounded-xl">
                          <img
                            src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div className="font-Inter space-y-3">
                        <h1 className="text-[#444444] font-bold text-[20px]">
                          Martha Knit Top
                        </h1>
                        <p className="text-[#A2A2A2]">Color : Green</p>
                        <p className="text-[#A2A2A2]">Size: S</p>
                      </div>
                    </div>
                  </td>
                  <td className="text-[22px] font-Inter font-bold">$25.00</td>
                  <td className="text-[22px] font-Inter font-bold">
                    22-10-2022
                  </td>
                  <td>
                    <button className="button  text-white  bg-[#FF3811] hover:bg-black duration-500 border-none">
                      Pending
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center py-10 font-Inter *:text-[20px] *:flex *:gap-2 *:items-center *:cursor-pointer">
        <span>
          <IoArrowUndoSharp></IoArrowUndoSharp> Continue Shopping
        </span>
        <span>
          <MdDelete></MdDelete> Clear Shopping Cart
        </span>
      </div>
    </div>
  );
};

export default CartDetails;
