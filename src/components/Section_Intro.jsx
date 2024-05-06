const Section_Intro = ({headerTitle}) => {
  return (
    <div className="text-center font-Inter font-bold space-y-1 mt-28">
      <p className=" text-[#FF3811]">{headerTitle.small}</p>
      <h1 className="text-[40px]">{headerTitle.title}</h1>
      <p className=" text-paragraph-text font-normal">
        the majority have suffered alteration in some form, by injected <br />
        humour, or randomised words which don't look even slightly believable.
      </p>
    </div>
  );
};

export default Section_Intro;
