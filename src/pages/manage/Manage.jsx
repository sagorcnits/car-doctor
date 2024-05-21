import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import OrderTinyBanner from "../../components/OrderTinyBanner";
const Manage = () => {
    const table = [1, 2, 3, 4];
  return (
    <div>
      <OrderTinyBanner
        info={{
          title: "Manage All Orders",
          descrip: "Home - Manage All Orders",
        }}
      ></OrderTinyBanner>
       <div className="overflow-x-auto mt-24">
        <table className="w-[900px] md:w-full ">
          <tbody>
            {table.map((item, id) => {
              return (
                <tr key={id} className="border-b flex justify-between items-center">
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
                  <td className="text-[22px] font-Inter font-bold">info@gmail.com</td>
                  <td className="text-[22px] font-Inter font-bold">
                    22-10-2022
                  </td>
                  <td>
                    <button className="aprButton flex gap-2 items-center text-[20px]">
                    Approved <IoIosArrowDown></IoIosArrowDown>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Manage;
