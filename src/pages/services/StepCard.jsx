import stepImg from "../../assets/images/services/step.png";

const StepCard = ({step}) => {
  return (
    <div className="border *:font-Inter text-center py-10 px-6 space-y-4 rounded-md">
      <figure className="relative w-[83px] h-[83px] mx-auto rounded-full">
        <img className="block mx-auto" src={stepImg} alt="" />
        <p className="absolute step">0{step.num}</p>
      </figure>
      <h1 className="text-[20px] font-bold">{step.title}</h1>
      <p>It uses a dictionary of over 200 .</p>
    </div>
  );
};

export default StepCard;