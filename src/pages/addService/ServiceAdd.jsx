import TinyBanner from "../../components/TinyBanner";

const ServiceAdd = () => {
  return (
    <div>
      <TinyBanner
        info={{ title: "Add New Service", buttonTitle: "Service" }}
      ></TinyBanner>
      <div className="bg-[#F3F3F3] py-8 px-2 flex justify-center items-center mt-16 rounded-md">
        <form className="md:w-9/12 mx-auto font-Inter ">
          <div className="flex  gap-4 *:input-shadow *:w-full ">
            <input type="text" placeholder="Service Name" name="name" />
            <input type="text" placeholder="Service Price" name="price" />
          </div>
          <div className="flex  gap-4 *:input-shadow *:w-full mt-6">
            <input type="text" placeholder="Text here" name="title" />
            <input type="text" placeholder="Service Type" name="type" />
          </div>
          <textarea
            className="h-[200px] resize-none input-shadow w-full mt-6"
            type="text"
            name="description"
            placeholder="Product Description"
          ></textarea>
          <button className="button w-full text-white  bg-[#FF3811] hover:bg-black duration-500 mt-6">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceAdd;
