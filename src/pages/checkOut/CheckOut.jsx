import TinyBanner from "../../components/TinyBanner";

const CheckOut = () => {
  return (
    <div>
      <TinyBanner info={{title:"checkout", buttonTitle:"Checkout"}}></TinyBanner>
      <div className="bg-[#F3F3F3] py-8 px-2 flex justify-center items-center mt-16 rounded-md">
          <form className="md:w-9/12 mx-auto font-Inter ">
             <div className="flex  gap-4 *:input-shadow *:w-full ">
                <input type="text" placeholder="First Name" name="fristName"/>
                <input type="text" placeholder="Last Name" name="lastName"/>
             </div>
             <div className="flex  gap-4 *:input-shadow *:w-full mt-6">
                <input type="text" placeholder="Your Phone" name="phone"/>
                <input type="text" placeholder="Your Email" name="email"/>
             </div>
             <textarea className="h-[200px] resize-none input-shadow w-full mt-6" type="text" name="Your Message" placeholder="message"></textarea>
             <button className="button w-full text-white  bg-[#FF3811] hover:bg-black duration-500 mt-6">Order Confirm</button>
          </form>
      </div>
    </div>
  );
};

export default CheckOut;
